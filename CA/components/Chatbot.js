// components/Chatbot.js
function Chatbot() {
  try {
    const [messages, setMessages] = React.useState([
      {
        type: 'bot',
        content: 'Hey there! 👋 How can I help with your **Computer Architecture** questions today?',
        thinking: false
      }
    ]);
    const [inputMessage, setInputMessage] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = React.useState(false);
    const [file, setFile] = React.useState(null);
    const [filePreview, setFilePreview] = React.useState('');
    const chatBodyRef = React.useRef(null);
    const initialInputHeight = 47;
    const messageInputRef = React.useRef(null);
    
    // API setup
    const API_KEY = "AIzaSyBI2hHefD7qEKmn8DmeGEi4-FbZAdyqvjQ";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    
    const [chatHistory, setChatHistory] = React.useState([]);
    
    // COA-related keywords and topics
    const coaKeywords = [
      // Core COA terms
      'computer organization', 'computer architecture', 'coa', 'cpu', 'processor', 'microprocessor',
      'alu', 'arithmetic logic unit', 'control unit', 'cu', 'datapath', 'instruction set',
      'instruction cycle', 'fetch', 'decode', 'execute', 'machine cycle', 'clock cycle',
      
      // Memory related
      'memory', 'ram', 'rom', 'cache', 'primary memory', 'secondary memory', 'virtual memory',
      'memory hierarchy', 'memory management', 'paging', 'segmentation', 'tlb', 'translation lookaside buffer',
      'memory mapped', 'memory addressing', 'address bus', 'data bus', 'control bus',
      
      // Instructions and Assembly
      'assembly', 'assembly language', 'machine language', 'instruction format', 'opcode', 'operand',
      'addressing modes', 'immediate addressing', 'direct addressing', 'indirect addressing',
      'register addressing', 'instruction pipeline', 'risc', 'cisc', 'mips', 'x86',
      
      // Performance and Optimization
      'pipeline', 'pipelining', 'hazards', 'data hazard', 'control hazard', 'structural hazard',
      'branch prediction', 'cache miss', 'cache hit', 'cache coherence', 'superscalar',
      'out of order execution', 'speculation', 'performance', 'throughput', 'latency',
      
      // I/O and Interrupts
      'input output', 'i/o', 'interrupt', 'polling', 'dma', 'direct memory access',
      'interrupt handler', 'interrupt vector', 'programmed i/o', 'interrupt driven i/o',
      
      // Number Systems and Digital Logic
      'binary', 'hexadecimal', 'octal', 'decimal', 'number system', 'conversion',
      'boolean algebra', 'logic gates', 'and gate', 'or gate', 'not gate', 'xor gate',
      'flip flop', 'latch', 'multiplexer', 'decoder', 'encoder', 'adder', 'subtractor',
      
      // Advanced Topics
      'multicore', 'parallel processing', 'multithreading', 'hyperthreading', 'gpu',
      'vector processing', 'simd', 'mimd', 'flynn taxonomy', 'amdahl law',
      'memory consistency', 'coherence protocol', 'numa', 'smp'
    ];
    
    // Function to check if message contains only emojis
    const isEmojiOnly = (message) => {
      // Remove all emojis and whitespace, check if anything remains
      const withoutEmojis = message.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').replace(/\s/g, '');
      return withoutEmojis.length === 0 && message.trim().length > 0;
    };

    // COA-relevant emoji mappings
    const coaEmojiMappings = {
      '💻': 'Computer/Computing Systems',
      '🖥️': 'Desktop Computer Architecture',
      '⚡': 'Electrical Signals/Power/Performance',
      '🧠': 'CPU/Processing/Intelligence',
      '💾': 'Storage/Memory Systems',
      '💿': 'Secondary Storage/Disk Systems',
      '🔧': 'System Tools/Debugging',
      '⚙️': 'System Configuration/Hardware',
      '🔌': 'Hardware Connections/Interfaces',
      '📊': 'Performance Analysis/Benchmarking',
      '📈': 'Performance Metrics/Optimization',
      '🚀': 'High Performance/Speed',
      '🔍': 'Analysis/Debugging/Inspection',
      '💡': 'Understanding/Learning/Ideas',
      '🤖': 'Automated Systems/AI Hardware',
      '👨‍💻': 'Programming/Development',
      '🔥': 'High Performance/Overclocking',
      '✨': 'Optimization/Enhancement',
      '💪': 'Powerful Processing',
      '🎯': 'Precision/Accuracy',
      '🌟': 'Excellence/Quality',
      '🏆': 'Best Performance/Achievement',
      '📖': 'Learning/Documentation',
      '📝': 'Code/Programming',
      '💯': 'Perfect Performance/100%',
      '🎓': 'Education/Learning COA',
      '📚': 'Study Materials/References',
      '🔄': 'Cycles/Pipeline/Loops',
      '⏰': 'Timing/Clock Cycles',
      '📡': 'Communication/Bus Systems',
      '🔗': 'Interconnections/Links',
      '🎮': 'Graphics Processing/GPU'
    };

    // Function to extract emojis from message
    const extractEmojis = (message) => {
      const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F018}-\u{1F270}]/gu;
      return message.match(emojiRegex) || [];
    };

    // Function to get COA relevance of emojis
    const getEmojiCOARelevance = (emojis) => {
      const relevantEmojis = [];
      emojis.forEach(emoji => {
        if (coaEmojiMappings[emoji]) {
          relevantEmojis.push({
            emoji: emoji,
            meaning: coaEmojiMappings[emoji]
          });
        }
      });
      return relevantEmojis;
    };

    // Function to check if message is COA-related
    const isCOARelated = (message, hasImage = false) => {
      // If image is attached, bypass topic filtering
      if (hasImage) {
        return true;
      }
      
      // Extract emojis and check COA relevance
      const emojis = extractEmojis(message);
      const relevantEmojis = getEmojiCOARelevance(emojis);
      
      // If message contains only emojis, check if any are COA-relevant
      if (isEmojiOnly(message)) {
        return relevantEmojis.length > 0;
      }
      
      const lowerMessage = message.toLowerCase();
      
      // Check for COA keywords
      const hasCoaKeywords = coaKeywords.some(keyword => 
        lowerMessage.includes(keyword.toLowerCase())
      );
      
      // Additional patterns that might indicate COA topics
      const coaPatterns = [
        /\b(8086|8085|80x86)\b/i, // Processor models
        /\b(mips|arm|risc-v)\b/i, // Architectures
        /\b(32-bit|64-bit|16-bit|8-bit)\b/i, // Bit architectures
        /\b(register|registers)\b/i, // Registers
        /\b(bit manipulation|bitwise)\b/i, // Bit operations
        /\b(instruction.*set|isa)\b/i, // Instruction set architecture
        /\b(von neumann|harvard architecture)\b/i, // Architecture types
        /\b(endianness|little endian|big endian)\b/i, // Byte ordering
      ];
      
      const hasCoaPatterns = coaPatterns.some(pattern => pattern.test(lowerMessage));
      
      // Accept if has COA keywords/patterns OR relevant emojis
      return hasCoaKeywords || hasCoaPatterns || relevantEmojis.length > 0;
    };

    // Enhanced text formatting function
    const formatText = (text) => {
      if (!text) return '';
      
      // Handle code blocks first (```code```)
      text = text.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-800 text-green-400 p-3 rounded-lg my-2 overflow-x-auto"><code>$1</code></pre>');
      
      // Handle inline code (`code`)
      text = text.replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm font-mono">$1</code>');
      
      // Handle bold (**text** or __text__)
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
      text = text.replace(/__(.*?)__/g, '<strong class="font-bold">$1</strong>');
      
      // Handle italic (*text* or _text_)
      text = text.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
      text = text.replace(/_(.*?)_/g, '<em class="italic">$1</em>');
      
      // Handle strikethrough (~~text~~)
      text = text.replace(/~~(.*?)~~/g, '<del class="line-through opacity-75">$1</del>');
      
      // Handle headers (# ## ###)
      text = text.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-3 mb-2">$1</h3>');
      text = text.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>');
      text = text.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mt-4 mb-3">$1</h1>');
      
      // Handle line breaks
      text = text.replace(/\n/g, '<br>');
      
      // Handle lists (- item or * item)
      text = text.replace(/^[\-\*] (.*$)/gm, '<li class="ml-4 mb-1">• $1</li>');
      
      // Handle numbered lists (1. item)
      text = text.replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-1 list-decimal">$1</li>');
      
      // Handle links [text](url)
      text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-500 hover:text-blue-700 underline" target="_blank">$1</a>');
      
      return text;
    };
  
    React.useEffect(() => {
      // Scroll to bottom of chat when messages change
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTo({
          top: chatBodyRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, [messages]);

    // Close emoji picker when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (isEmojiPickerOpen && !event.target.closest('.emoji-picker-container')) {
          setIsEmojiPickerOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isEmojiPickerOpen]);
  
    const adjustTextareaHeight = () => {
      if (messageInputRef.current) {
        messageInputRef.current.style.height = `${initialInputHeight}px`;
        messageInputRef.current.style.height = `${messageInputRef.current.scrollHeight}px`;
      }
    };
  
    const handleInputChange = (e) => {
      setInputMessage(e.target.value);
      adjustTextareaHeight();
    };
  
    const generateBotResponse = async (userMessage, userFile = null) => {
      // Check if the question is COA-related (bypass if image attached)
      const hasImage = userFile !== null;
      const emojis = extractEmojis(userMessage);
      const relevantEmojis = getEmojiCOARelevance(emojis);
      
      if (!isCOARelated(userMessage, hasImage)) {
        // Create off-topic response with emoji feedback if present
        let offTopicResponse = "Please ask **relevant questions** related to **Computer Organization and Architecture (COA)**. I'm here to help with topics like:\n\n• **CPU architecture**\n• **Memory systems**\n• **Instruction sets**\n• **Pipelining**\n• **Assembly language**\n• And other COA concepts! 🤖";
        
        // If there are non-COA emojis, provide gentle feedback
        if (emojis.length > 0 && relevantEmojis.length === 0) {
          offTopicResponse += "\n\n*I noticed your emojis! While they're fun, try using COA-related emojis like* 💻🧠⚡💾🔧 *to stay on topic!*";
        }
        
        setMessages(prevMessages => 
          prevMessages.map(message => 
            message.thinking 
              ? { ...message, content: offTopicResponse, thinking: false } 
              : message
          )
        );
        return;
      }
      
      // Prepare message for API with COA context
      const newChatHistory = [...chatHistory];
      
      // Add emoji context if relevant COA emojis are present
      let emojiContext = "";
      if (relevantEmojis.length > 0) {
        emojiContext = `\n\n[Emoji Context - The user used these COA-relevant emojis: ${relevantEmojis.map(e => `${e.emoji} (${e.meaning})`).join(', ')}. Acknowledge their relevance to the topic in your response.]`;
      }
      
      // Add system context for COA with formatting instructions
      const contextualMessage = `You are a helpful assistant specialized in Computer Organization and Architecture (COA). Please provide detailed, accurate answers about topics like CPU design, memory hierarchy, instruction sets, computer architecture, assembly language, digital logic, and related concepts. 

Format your response using markdown-style formatting when appropriate:
- Use **bold** for important terms and concepts
- Use *italic* for emphasis
- Use \`code\` for technical terms, register names, and small code snippets
- Use \`\`\`code blocks\`\`\` for longer code examples or assembly code
- Use numbered lists for step-by-step processes
- Use bullet points for feature lists
- Use headers (# ## ###) for section organization

User question: ${userMessage}${emojiContext}`;
      
      const userParts = [{ text: contextualMessage }];
      if (userFile) {
        userParts.push({ inline_data: userFile });
      }
      
      newChatHistory.push({
        role: "user",
        parts: userParts
      });
      
      // API request options
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: newChatHistory
        })
      };
      
      try {
        // Fetch bot response from API
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        
        if (!response.ok) throw new Error(data.error?.message || 'Unknown error occurred');
        
        // Extract and format bot's response text
        const apiResponseText = data.candidates[0].content.parts[0].text.trim();
        
        // Update messages
        setMessages(prevMessages => 
          prevMessages.map(message => 
            message.thinking ? { ...message, content: apiResponseText, thinking: false } : message
          )
        );
        
        // Add bot response to chat history
        newChatHistory.push({
          role: "model",
          parts: [{ text: apiResponseText }]
        });
        
        setChatHistory(newChatHistory);
        
      } catch (error) {
        console.error("Error generating response:", error);
        
        // Update thinking message with error
        setMessages(prevMessages => 
          prevMessages.map(message => 
            message.thinking 
              ? { ...message, content: "Sorry, I'm having trouble connecting right now. Please try again later. 😔", thinking: false } 
              : message
          )
        );
      }
    };
  
    const handleSendMessage = (e) => {
      e.preventDefault();
      if (!inputMessage.trim()) return;
      
      // Create file object if there's a file
      const userFile = file ? {
        data: file.data,
        mime_type: file.type
      } : null;
      
      // Add user message to chat
      setMessages(prev => [
        ...prev, 
        { 
          type: 'user', 
          content: inputMessage,
          attachment: userFile ? filePreview : null
        }
      ]);
      
      // Add thinking indicator message
      setMessages(prev => [
        ...prev,
        {
          type: 'bot',
          content: '',
          thinking: true
        }
      ]);
      
      // Generate response
      generateBotResponse(inputMessage, userFile);
      
      // Reset state
      setInputMessage('');
      setFile(null);
      setFilePreview('');
      setIsEmojiPickerOpen(false); // Close emoji picker when sending
      
      // Reset textarea height
      if (messageInputRef.current) {
        messageInputRef.current.style.height = `${initialInputHeight}px`;
      }
    };
  
    const handleFileUpload = (e) => {
      const selectedFile = e.target.files[0];
      if (!selectedFile) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target.result.split(',')[1];
        setFile({
          data: base64String,
          type: selectedFile.type
        });
        setFilePreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    };
  
    const cancelFileUpload = () => {
      setFile(null);
      setFilePreview('');
    };
  
    const toggleChatbot = () => {
      setIsOpen(!isOpen);
      // Close emoji picker when chatbot is closed
      if (isOpen) {
        setIsEmojiPickerOpen(false);
      }
    };
  
    const handleEmojiSelect = (emoji) => {
      const input = messageInputRef.current;
      if (input) {
        const start = input.selectionStart;
        const end = input.selectionEnd;
        setInputMessage(
          inputMessage.substring(0, start) + emoji + inputMessage.substring(end)
        );
        // Focus back on input after emoji selection
        setTimeout(() => {
          input.focus();
          input.selectionStart = input.selectionEnd = start + emoji.length;
        }, 10);
      }
      setIsEmojiPickerOpen(false);
    };

    const toggleEmojiPicker = () => {
      setIsEmojiPickerOpen(!isEmojiPickerOpen);
    };
  
    return (
      <>
        {/* Chatbot Toggle Button with Enhanced Styling */}
        <button 
          onClick={toggleChatbot} 
          className={`fixed bottom-8 right-8 z-50 h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl transform transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-90' : ''}`}
        >
          <i className={`fas fa-robot text-white text-xl ${isOpen ? 'hidden' : 'block'}`}></i>
          <i className={`fas fa-times text-white text-xl ${isOpen ? 'block' : 'hidden'}`}></i>
        </button>
  
        {/* Chatbot Popup with Enhanced UI */}
        <div className={`fixed right-8 bottom-28 w-96 bg-white dark:bg-gray-900 overflow-hidden rounded-2xl shadow-2xl transform origin-bottom-right transition-all duration-300 z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'} border-2 border-gray-200 dark:border-gray-700`}>
          {/* Enhanced Chatbot Header */}
          <div className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 p-4 justify-between">
            <div className="flex gap-3 items-center">
              <div className="relative">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-robot text-blue-600 text-lg"></i>
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">DEOCODE COA Assistant</h2>
                <p className="text-blue-100 text-sm">Online • Ready to help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
  
          {/* Enhanced Chatbot Body */}
          <div ref={chatBodyRef} className="p-4 h-96 overflow-y-auto flex flex-col gap-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 items-start ${message.type === 'user' ? 'flex-col self-end items-end' : ''}`}
              >
                {message.type === 'bot' && (
                  <div className="relative shrink-0">
                    <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-robot text-white text-sm"></i>
                    </div>
                  </div>
                )}
                <div className={`max-w-[85%] rounded-2xl shadow-lg ${
                  message.type === 'bot' 
                    ? 'bg-white dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-600' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                } px-4 py-3 animate-fadeIn`}>
                  {message.thinking ? (
                    <div className="flex gap-1 py-2">
                      <div className="h-2 w-2 rounded-full bg-blue-400 opacity-70 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-purple-400 opacity-70 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-blue-400 opacity-70 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <div 
                      className="text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatText(message.content) }}
                    />
                  )}
                </div>
                {message.attachment && (
                  <div className="mt-2 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                    <img 
                      src={message.attachment} 
                      alt="Attachment" 
                      className="max-w-48 rounded-lg" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* Enhanced Chatbot Footer */}
          <div className="p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 relative">
            {/* Enhanced Emoji Picker - Positioned above the input */}
            {isEmojiPickerOpen && (
              <div className="emoji-picker-container absolute bottom-full left-4 right-4 mb-2 z-20">
                <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-4 border-2 border-gray-200 dark:border-gray-600 max-h-48 overflow-y-auto">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Choose Emoji</h3>
                    <button
                      type="button"
                      onClick={() => setIsEmojiPickerOpen(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <i className="fas fa-times text-xs"></i>
                    </button>
                  </div>
                  <div className="grid grid-cols-8 gap-19">
                    {[
                      // COA-specific emojis first
                      '💻', '🧠', '⚡', '💾', '🔧', '⚙️', '📊', '📈',
                      '🚀', '🔍', '💡', '🤖', '👨‍💻', '🔥', '✨', '💪',
                      // General but relevant
                      '🎯', '🌟', '🏆', '📖', '📝', '💯', '🎓', '📚',
                      // Common expressions
                      '😊', '😂', '😍', '🤔', '👍', '❤️', '👋', '🎊'
                    ].map((emoji) => {
                      const isCoaRelevant = coaEmojiMappings[emoji];
                      return (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() => handleEmojiSelect(emoji)}
                          className={`text-lg p-2 rounded-lg transition-all duration-200 hover:scale-125 flex items-center justify-center relative ${
                            isCoaRelevant 
                              ? 'hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-transparent hover:border-blue-300' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          title={isCoaRelevant ? `COA: ${isCoaRelevant}` : 'General emoji'}
                        >
                          {emoji}
                          {isCoaRelevant && (
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSendMessage}>
              <div className={`flex items-center rounded-2xl border-2 bg-white dark:bg-gray-700 dark:border-gray-600 shadow-lg transition-all duration-200 ${inputMessage ? 'border-blue-500 shadow-blue-100' : 'border-gray-300'}`}>
                <textarea
                  ref={messageInputRef}
                  value={inputMessage}
                  onChange={handleInputChange}
                  placeholder="Ask about Computer Organization & Architecture... 🤖"
                  className="w-full resize-none outline-none py-1 px-3 bg-transparent dark:text-white rounded-l-2xl max-h-32 text-sm"
                  style={{ height: `${initialInputHeight}px` }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 768) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
                <div className="flex items-center pr-3 space-x-2">
                  <button
                    type="button"
                    onClick={toggleEmojiPicker}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isEmojiPickerOpen 
                        ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <i className="far fa-smile text-lg"></i>
                  </button>
                  
                  <div className="relative">
                    <input
                      type="file"
                      id="file-input"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept="image/*"
                    />
                    {filePreview ? (
                      <div className="relative h-10 w-10">
                        <img src={filePreview} alt="Preview" className="h-full w-full object-cover rounded-full border-2 border-blue-500" />
                        <button
                          type="button"
                          onClick={cancelFileUpload}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                        >
                          <i className="fas fa-times text-xs"></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => document.getElementById('file-input').click()}
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-full transition-all duration-200"
                      >
                        <i className="fas fa-paperclip text-lg"></i>
                      </button>
                    )}
                  </div>
                  
                  {inputMessage && (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110"
                    >
                      <i className="fas fa-paper-plane text-sm"></i>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Add custom styles */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </>
    );
  } catch (error) {
    console.error('Chatbot error:', error);
    if (typeof reportError === 'function') {
      reportError(error);
    }
    return null;
  }
}