const initialSyllabusData = [
  {
    id: "chapter1",
    title: "Fundamentals of Computer Architecture and Performance Evaluation and Optimization",
    topics: [
      {
        id: "topic1",
        title: "Computer Architecture: An Overview (Revisited)",
        completed: false,
        co: "PCC-CS402.CO1",
        description: "Computer architecture is the foundational framework that defines how computer systems operate. It covers the design and organization of a computer's core components and explains how hardware and software interact to execute tasks efficiently. This topic also explores the essential principles behind the performance and functionality of computer systems.",
        objectives: [
          "Understand the basic components of computer architecture",
          "Learn the structure and function of the CPU, memory unit, and I/O devices",
          "Familiarize with the Von Neumann architecture and its significance",
          "Understand the instruction cycle (Fetch-Decode-Execute) and how it drives processing",
          "Explore the bus system and its crucial role in data transfer"
        ],
        keyPoints: [
          "Computer architecture defines how hardware and software interact to execute tasks efficiently.",
          "The CPU consists of the ALU, Control Unit, and Registers, which together manage data processing and control flow.",
          "Primary memory (RAM) is volatile, providing fast access to active data, while secondary memory like SSDs and hard drives offer long-term storage.",
          "Cache memory enhances performance by storing frequently accessed data closer to the CPU, reducing latency.",
          "Von Neumann architecture uses a single memory space for instructions and data, enabling flexible program execution.",
          "The instruction cycle includes fetching, decoding, and executing instructions, forming the backbone of CPU operations.",
          "Buses (Data Bus, Address Bus, Control Bus) facilitate communication between the CPU, memory, and I/O devices."
        ],
        image: {
          url: "https://example.com/computer-architecture-diagram.png",
          alt: "Detailed diagram showing CPU, memory, and I/O device interactions"
        },
        video: {
          url: "architecture.mp4",
          type: "mp4",
          alt: "Comprehensive Computer Architecture Overview Video"
        },
        youtube: {
          title: "Deep Dive into Computer Architecture",
          url: "https://www.youtube.com/watch?v=1I5ZMmrOfnA"
        },
        table: {
          headers: ["Component", "Description", "Importance"],
          rows: [
            ["CPU", "Performs calculations, makes decisions, and executes instructions", "Central to all processing tasks"],
            ["ALU", "Handles mathematical calculations and logical operations", "Enables data manipulation and decision-making"],
            ["Control Unit", "Manages the flow of data and execution of instructions", "Coordinates the operations of the entire system"],
            ["Registers", "Small, fast memory for temporary data storage", "Speeds up access to frequently used data"],
            ["Primary Memory", "Volatile memory for active data and instructions", "Provides fast access to data being processed"],
            ["Secondary Memory", "Permanent storage like hard drives or SSDs", "Stores data and programs long-term"],
            ["Cache Memory", "High-speed memory for frequently accessed data", "Reduces data retrieval time and enhances performance"],
            ["Data Bus", "Carries data between components", "Enables efficient data transfer"],
            ["Address Bus", "Carries memory addresses", "Ensures data is accessed from the correct locations"],
            ["Control Bus", "Carries control signals", "Regulates operations and data flow across the system"]
          ]
        },
        additionalResources: [
          {
            title: "Comprehensive Guide to Computer Architecture",
            url: "https://www.computerarchitectureguide.com/"
          },
          {
            title: "MIT OpenCourseWare - Computer System Design",
            url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures/"
          },
          {
            title: "Harvard CS50 - Computer Science Fundamentals",
            url: "https://cs50.harvard.edu/"
          }
        ]
      },
      {
        id: "topic2",
        title: "Quantitative techniques in computer design",
        completed: false,
        co: "PCC-CS402.CO1",
        description: "Learn quantitative techniques.",
        objectives: ["Understand quantitative techniques"],
        keyPoints: ["Quantitative design principles"]
      },
      {
        id: "topic3",
        title: "Measuring and reporting performance",
        completed: false,
        co: "PCC-CS402.CO1",
        description: "Learn how to measure performance.",
        objectives: ["Measure and report performance"],
        keyPoints: ["Performance measurement techniques"]
      },
      {
        id: "topic4",
        title: "Compiler Techniques for Improving Performance",
        completed: false,
        CO: "1",
        description: "Compiler techniques play a vital role in enhancing the performance of computer programs by optimizing code execution, minimizing resource usage, and improving overall efficiency. These techniques ensure that the software runs faster, consumes fewer resources, and delivers a better user experience. Understanding these techniques is essential for writing high-performance software, especially in fields requiring intensive computations and real-time performance.",
        objectives: [
          "Understand the role of compilers in performance optimization",
          "Learn different compiler optimization techniques and their applications",
          "Explore how code transformation improves execution speed and efficiency",
          "Familiarize with loop optimization, inlining, and instruction scheduling",
          "Analyze the impact of compiler optimizations on memory, CPU usage, and power consumption",
          "Develop efficient code by leveraging advanced compiler capabilities",
          "Understand trade-offs between compilation time and runtime performance"
        ],
        keyPoints: [
          "Compiler optimization reduces runtime and resource consumption, improving application responsiveness.",
          "Techniques like loop unrolling and inlining minimize overhead by reducing the number of instructions executed.",
          "Instruction scheduling improves CPU pipeline efficiency by reordering instructions for parallel execution.",
          "Dead code elimination and constant folding enhance code clarity, reduce memory footprint, and speed up execution.",
          "Register allocation minimizes memory access latency by keeping frequently accessed variables in CPU registers.",
          "Profile-guided optimization tailors performance to real-world usage scenarios based on actual execution data.",
          "Interprocedural optimization allows performance improvements across multiple functions, enhancing overall program efficiency.",
          "Vectorization enables parallel processing of data, utilizing modern CPU capabilities for faster computations."
        ],
        image: {
          url: "https://example.com/compiler-optimization-diagram.png",
          alt: "Diagram illustrating compiler optimization techniques"
        },
        video: {
          url: "compiler-optimization.mp4",
          type: "mp4",
          alt: "Introduction to Compiler Techniques Video"
        },
        youtube: {
          title: "Compiler Optimization Techniques Explained",
          url: "https://www.youtube.com/watch?v=ljrEMCbjaeE"
        },
        table: {
          title: "Compiler Optimization Techniques Table",
        headers: ["Technique", "Description", "Impact on Performance"],
        rows: [
          ["Loop Unrolling", "Reduces loop overhead by expanding iterations, decreasing control instructions", "Faster execution due to fewer control statements and increased parallelism"],
          ["Inlining", "Replaces function calls with actual code, eliminating call overhead", "Eliminates function call overhead, reducing runtime cost"],
          ["Instruction Scheduling", "Reorders instructions to improve CPU pipeline efficiency", "Minimizes CPU stalls and improves instruction throughput"],
          ["Register Allocation", "Uses CPU registers for frequently accessed variables", "Reduces memory access latency, enhancing speed"],
          ["Dead Code Elimination", "Removes code that has no effect on program output", "Reduces program size, memory footprint, and execution time"],
          ["Constant Folding", "Evaluates constant expressions at compile time", "Speeds up runtime computation by pre-computing values"],
          ["Vectorization", "Converts scalar operations to vector operations", "Improves execution speed through parallel data processing"],
          ["Interprocedural Optimization", "Optimizes across function boundaries", "Enhances efficiency by reducing redundancy and improving data flow"]
        ]
      },
      additionalResources: [
        {
          title: "Compiler Optimization Techniques",
          url: "https://www.compileroptimization.com/"
        },
        {
          title: "MIT OpenCourseWare - Advanced Compiler Design",
          url: "https://ocw.mit.edu/courses/compiler-design/"
        },
        {
          title: "Stanford CS - Compiler Construction",
          url: "https://cs.stanford.edu/compiler-construction/"
        },
        {
          title: "Carnegie Mellon University - Compiler Engineering",
          url: "https://cs.cmu.edu/compiler-engineering/"
        },
        {
          title: "LLVM Project - Compiler Infrastructure",
          url: "https://llvm.org/"
        },
        {
          title: "GCC Compiler Optimization Options",
          url: "https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html"
        }
      ]
}
],
  },
{
  id: "chapter2",
    title: "Pipelining",
      topics: [
        {
          id: "topic5",
          title: "Pipelining: Basic concepts",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Learn basic pipelining concepts.",
          objectives: ["Understand pipelining basics"],
          keyPoints: ["Pipelining fundamentals"]
        },
        {
          id: "topic6",
          title: "Instruction and arithmetic pipeline",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Learn about instruction and arithmetic pipelines.",
          objectives: ["Understand pipeline types"],
          keyPoints: ["Pipeline types"]
        },
        {
          id: "topic7",
          title: "Data hazards, control hazards and structural hazards",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Learn about pipeline hazards.",
          objectives: ["Understand pipeline hazards"],
          keyPoints: ["Pipeline hazard types"]
        },
        {
          id: "topic8",
          title: "Techniques for handling hazards",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Learn techniques to handle hazards.",
          objectives: ["Learn hazard handling"],
          keyPoints: ["Hazard handling techniques"]
        },
        {
          id: "topic9",
          title: "Exception handling",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Learn how to handle exceptions in pipelines.",
          objectives: ["Understand exception handling"],
          keyPoints: ["Pipeline exception handling"]
        },
        {
          id: "topic10",
          title: "Pipeline optimization techniques",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Learn pipeline optimization.",
          objectives: ["Understand pipeline optimization"],
          keyPoints: ["Pipeline optimization methods"]
        }
      ],
        relatedCO: "PCC-CS402.CO2"
},
{
  id: "chapter3",
    title: "Hierarchical Memory Architecture and Management",
      topics: [
        {
          id: "topic11",
          title: "Hierarchical memory technology: Inclusion, Coherence and locality properties",
          completed: false,
          co: "PCC-CS402.CO3",
          description: "Learn about hierarchical memory.",
          objectives: ["Understand hierarchical memory"],
          keyPoints: ["Hierarchical memory concepts"]
        },
        {
          id: "topic12",
          title: "Cache memory organizations",
          completed: false,
          co: "PCC-CS402.CO3",
          description: "Learn about cache memory.",
          objectives: ["Understand cache organization"],
          keyPoints: ["Cache organization"]
        },
        {
          id: "topic13",
          title: "Techniques for reducing cache misses",
          completed: false,
          co: "PCC-CS402.CO3",
          description: "Learn how to reduce cache misses.",
          objectives: ["Reduce cache misses"],
          keyPoints: ["Cache miss reduction"]
        },
        {
          id: "topic14",
          title: "Virtual memory organization, mapping and management techniques, memory replacement policies",
          completed: false,
          co: "PCC-CS402.CO3",
          description: "Learn about virtual memory.",
          objectives: ["Understand virtual memory"],
          keyPoints: ["Virtual memory techniques"]
        }
      ],
  },
{
  id: "chapter4",
    title: "Instruction-Level Parallelism and Advanced Processor Architectures",
      topics: [
        {
          id: "topic15",
          title: "Instruction-level parallelism: basic concepts",
          completed: false,
          co: "PCC-CS402.CO4",
          description: "Learn about ILP.",
          objectives: ["Understand ILP"],
          keyPoints: ["ILP basics"]
        },
        {
          id: "topic16",
          title: "Techniques for increasing ILP",
          completed: false,
          co: "PCC-CS402.CO4",
          description: "Learn techniques to increase ILP.",
          objectives: ["Increase ILP"],
          keyPoints: ["ILP increase techniques"]
        },
        {
          id: "topic17",
          title: "Superscalar, superpipelined and VLIW processor architectures",
          completed: false,
          co: "PCC-CS402.CO4",
          description: "Learn about advanced processor architectures.",
          objectives: ["Understand advanced architectures"],
          keyPoints: ["Advanced processor architectures"]
        }
      ],
  },
{
  id: "chapter5",
    title: "Array and Vector Processors in Parallel Computing",
      topics: [
        {
          id: "topic18",
          title: "Array and vector processors",
          completed: false,
          co: "PCC-CS402.CO5",
          description: "Learn about array and vector processors.",
          objectives: ["Understand array and vector processors"],
          keyPoints: ["Array and vector processors"]
        }
      ],
  },
{
  id: "chapter6",
    title: "Multiprocessor and Non-von Neumann Architectures",
      topics: [
        {
          id: "topic19",
          title: "Multiprocessor architecture: taxonomy of parallel architectures",
          completed: false,
          co: "PCC-CS402.CO6",
          description: "Learn about multiprocessor architectures.",
          objectives: ["Understand multiprocessor architecture"],
          keyPoints: ["Multiprocessor architecture taxonomy"]
        },
        {
          id: "topic20",
          title: "Centralized shared-memory architecture: synchronization, memory consistency, interconnection networks",
          completed: false,
          co: "PCC-CS402.CO6",
          description: "Learn about centralized shared memory.",
          objectives: ["Understand centralized shared memory"],
          keyPoints: ["Centralized shared memory concepts"]
        },
        {
          id: "topic21",
          title: "Distributed shared-memory architecture. Cluster computers.",
          completed: false,
          co: "PCC-CS402.CO6",
          description: "Learn about distributed shared memory.",
          objectives: ["Understand distributed shared memory"],
          keyPoints: ["Distributed shared memory concepts"]
        },
        {
          id: "topic22",
          title: "Non von Neumann architectures: dataflow computers, reduction computer architectures, systolic architectures.",
          completed: false,
          co: "PCC-CS402.CO6",
          description: "Learn about non-von Neumann architectures.",
          objectives: ["Understand non-von Neumann"],
          keyPoints: ["Non-von Neumann architectures"]
        }
      ],
  }
];

