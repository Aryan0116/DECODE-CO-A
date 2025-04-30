// components/Chatbot.js
function Chatbot() {
  try {
    const [messages, setMessages] = React.useState([
      {
        type: 'bot',
        content: 'Hey there! How can I help with your Computer Organization questions today?',
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
  
    React.useEffect(() => {
      // Scroll to bottom of chat when messages change
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTo({
          top: chatBodyRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, [messages]);
  
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
      // Prepare message for API
      const newChatHistory = [...chatHistory];
      
      const userParts = [{ text: userMessage }];
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
              ? { ...message, content: "Sorry, I'm having trouble connecting right now. Please try again later.", thinking: false } 
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
  
    return (
      <>
        {/* Chatbot Toggle Button */}
        <button 
          onClick={toggleChatbot} 
          className={`fixed bottom-8 right-8 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-primary-600 hover:bg-primary-700 transition-all duration-200 ${isOpen ? 'rotate-90' : ''}`}
        >
          <i className={`fas fa-comment text-white ${isOpen ? 'hidden' : 'block'}`}></i>
          <i className={`fas fa-times text-white ${isOpen ? 'block' : 'hidden'}`}></i>
        </button>
  
        {/* Chatbot Popup */}
        <div className={`fixed right-8 bottom-24 w-96 bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-xl transform origin-bottom-right transition-all duration-200 z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'} border dark:border-gray-700`}>
          {/* Chatbot Header */}
          <div className="flex items-center bg-primary-600 p-4 justify-between">
            <div className="flex gap-3 items-center">
              <svg className="h-9 w-9 p-1.5 bg-white rounded-full fill-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
              </svg>
              <h2 className="text-xl font-semibold text-white">DEOCODE CA-O HELP</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:bg-primary-700 rounded-full p-2 transition-colors"
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
  
          {/* Chatbot Body */}
          <div ref={chatBodyRef} className="p-4 h-96 overflow-y-auto flex flex-col gap-4 dark:bg-gray-800">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 items-start ${message.type === 'user' ? 'flex-col self-end items-end' : ''}`}
              >
                {message.type === 'bot' && (
                  <svg className="h-9 w-9 p-1.5 bg-primary-600 rounded-full fill-white shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
                  </svg>
                )}
                <div className={`max-w-[75%] rounded-lg ${
                  message.type === 'bot' 
                    ? 'bg-gray-100 dark:bg-gray-700 dark:text-white rounded-bl-lg' 
                    : 'bg-primary-600 text-white rounded-br-sm'
                } px-4 py-3`}>
                  {message.thinking ? (
                    <div className="flex gap-1 py-2">
                      <div className="h-2 w-2 rounded-full bg-primary-400 dark:bg-gray-400 opacity-70 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-primary-400 dark:bg-gray-400 opacity-70 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-primary-400 dark:bg-gray-400 opacity-70 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
                {message.attachment && (
                  <img 
                    src={message.attachment} 
                    alt="Attachment" 
                    className="w-1/2 rounded-lg rounded-br-sm mt-1" 
                  />
                )}
              </div>
            ))}
          </div>
  
          {/* Chatbot Footer */}
          <div className="p-4 border-t dark:border-gray-700">
            <form onSubmit={handleSendMessage} className="relative">
              <div className={`flex items-center rounded-full border dark:border-gray-600 ${inputMessage ? 'focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500' : ''}`}>
                <textarea
                  ref={messageInputRef}
                  value={inputMessage}
                  onChange={handleInputChange}
                  placeholder="Message..."
                  className="w-full resize-none outline-none py-3 px-4 bg-transparent dark:text-white rounded-l-full max-h-32"
                  style={{ height: `${initialInputHeight}px` }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 768) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
                <div className="flex items-center pr-2 space-x-1">
                  <button
                    type="button"
                    onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
                  >
                    <i className="far fa-smile"></i>
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
                      <div className="relative h-8 w-8">
                        <img src={filePreview} alt="Preview" className="h-full w-full object-cover rounded-full" />
                        <button
                          type="button"
                          onClick={cancelFileUpload}
                          className="absolute -top-1 -right-1 bg-white dark:bg-gray-800 text-red-500 rounded-full h-4 w-4 flex items-center justify-center"
                        >
                          <i className="fas fa-times text-xs"></i>
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => document.getElementById('file-input').click()}
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
                      >
                        <i className="fas fa-paperclip"></i>
                      </button>
                    )}
                  </div>
                  
                  {inputMessage && (
                    <button
                      type="submit"
                      className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full"
                    >
                      <i className="fas fa-arrow-up"></i>
                    </button>
                  )}
                </div>
              </div>
              
              {isEmojiPickerOpen && (
                <div className="absolute bottom-14 left-0 z-10">
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 border dark:border-gray-700">
                    <div className="grid grid-cols-8 gap-1">
                      {['😊', '😂', '😍', '🤔', '👍', '❤️', '👋', '🎓', '💻', '📚', '🧠', '⚡', '🔍', '💡', '🤖', '👨‍💻'].map((emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() => handleEmojiSelect(emoji)}
                          className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
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