const initialSyllabusData = [
  {
    id: "chapter1",
    title: "Fundamentals of computer organisation",
    topics: [
      {
        id: "topic1",
        title: "Basic organization of the stored program computer and operation sequence for execution of a program.",
        completed: false,
        co: "PCC-CS302.CO1",
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
          url: "https://bcisnotes.com/thirdsemester/wp-content/uploads/2020/02/stored-program-concept-5-638.jpg",
          alt: "Detailed diagram showing CPU, memory, and I/O device interactions"
        },
        // video: {
        //   url: "architecture.mp4",
        //   type: "mp4",
        //   alt: "Comprehensive Computer Architecture Overview Video"
        // },
        youtube: {
          title: "Deep Dive into Computer Architecture",
          url: "https://www.youtube.com/watch?v=M-lO94AFbfM"
        },
        table: {
          title: "Component table",
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
        title: "Role of operating systems and compiler/assembler.",
        completed: false,
        co: "PCC-CS302.CO1",
        description: "Quantitative techniques in computer design focus on using mathematical and statistical methods to evaluate and optimize computer system performance. These techniques help in making informed design decisions, ensuring efficiency, cost-effectiveness, and high performance of computer systems. By applying these methods, designers can predict system behavior, identify potential bottlenecks, and determine the best configurations to meet performance goals.",
        objectives: [
          "Understand the role of quantitative analysis in computer design",
          "Learn about performance evaluation metrics and their significance",
          "Explore techniques like Amdahl's Law, Little's Law, and their applications",
          "Analyze cost-performance trade-offs and their impact on design decisions",
          "Familiarize with benchmarking, simulation, and modeling methods",
          "Develop a systematic approach to performance tuning and optimization"
        ],
        keyPoints: [
          "Quantitative techniques help designers evaluate system efficiency and performance objectively, providing a clear basis for decision-making.",
          "Performance metrics include throughput, response time, scalability, and latency, each offering insights into different aspects of system behavior.",
          "Amdahl's Law highlights the diminishing returns of improving only a single component of a system, emphasizing balanced optimization.",
          "Little's Law connects the average number of items in a system to their arrival and service rates, making it a fundamental principle in queuing theory.",
          "Benchmarking and simulation provide practical methods to test and compare system designs, allowing for empirical performance validation.",
          "Cost-performance analysis ensures that system enhancements align with budget constraints and desired outcomes."
        ],
        image: {
          url: "https://www.baeldung.com/wp-content/uploads/sites/4/2022/12/Execution-Flow.jpg",
          alt: "Diagram illustrating quantitative techniques in computer design"
        },
        video: {
          url: "quantitative-techniques.mp4",
          type: "mp4",
          alt: "Introduction to Quantitative Techniques Video"
        },
        youtube: {
          title: "Quantitative Analysis in Computer Architecture",
          url: "https://www.youtube.com/watch?v=X7_k3bfEa54"
        },
        table: {
          title: "Techniques Table",
          headers: ["Technique", "Description", "Application", "Advantages"],
          rows: [
            ["Amdahl's Law", "Evaluates potential performance improvements by highlighting the impact of system bottlenecks", "Optimizing system bottlenecks", "Provides clear insights into diminishing returns"],
            ["Little's Law", "Relates throughput, response time, and system size, offering a formula for system efficiency", "Queuing theory and performance analysis", "Establishes a fundamental relationship for system design"],
            ["Benchmarking", "Measures system performance using standard tests and real-world scenarios", "Comparing hardware and software configurations", "Offers empirical, repeatable performance data"],
            ["Simulation", "Models and tests system behavior under different conditions without physical implementation", "Evaluating system designs before implementation", "Reduces cost and risk in system development"],
            ["Cost-Performance Analysis", "Assesses trade-offs between cost and performance to balance investment and output", "Budgeting and resource allocation", "Ensures optimal spending for maximum efficiency"]
          ]
        },
        additionalResources: [
          {
            title: "Quantitative Approach to Computer System Design",
            url: "https://www.computerdesignquantitative.com/"
          },
          {
            title: "MIT OpenCourseWare - Performance Engineering",
            url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-172-performance-engineering/"
          },
          {
            title: "Stanford CS - Computer Architecture",
            url: "https://cs.stanford.edu/"
          },
          {
            title: "Carnegie Mellon University - Computer Systems",
            url: "https://cs.cmu.edu/"
          }
        ]
      }
    ]
  },
  {
    id: "chapter2",
    title: "Number Systems, Arithmetic Operations, and ALU Design",
    topics: [
      {
        id: "topic3",
        title: "Commonly used number systems. Fixed and floating point representation of numbers.",
        completed: false,
        co: "PCC-CS302.CO2",
        description: "Measuring and reporting performance is crucial in computer design and architecture, as it helps evaluate system efficiency and effectiveness. By understanding various performance metrics and measurement techniques, we can assess how well a system meets its objectives and identify areas for improvement.",
        objectives: [
          "Understand the importance of performance measurement in computer systems",
          "Learn different performance metrics such as throughput, response time, and latency",
          "Explore methods for measuring and interpreting performance data",
          "Familiarize with benchmarking and its role in performance evaluation",
          "Analyze cost-performance trade-offs and their impact on system design",
          "Develop effective performance reports for informed decision-making"
        ],
        keyPoints: [
          "Performance measurement provides insights into system efficiency and reliability.",
          "Key metrics include throughput, response time, latency, and scalability.",
          "Benchmarking allows comparison of different systems under standardized conditions.",
          "Accurate reporting of performance data ensures informed decision-making.",
          "Cost-performance analysis helps balance investment and system output.",
          "Performance bottlenecks can be identified and addressed through proper measurement."
        ],
        image: {
          url: "https://example.com/performance-measurement-diagram.png",
          alt: "Diagram illustrating performance measurement and reporting"
        },
        // video: {
        //   url: "performance-measurement.mp4",
        //   type: "mp4",
        //   alt: "Introduction to Performance Measurement Video"
        // },
        youtube: {
          title: "Measuring and Reporting Performance in Computer Systems",
          url: " https://www.youtube.com/watch?v=5ayaVunXFUY "
        },
        table: {
          title: "Performance Metrics Table",
          headers: ["Metric", "Description", "Measurement Technique", "Importance"],
          rows: [
            ["Throughput", "Amount of work a system can handle in a given time", "Benchmarking and load testing", "Evaluates system capacity"],
            ["Response Time", "Time taken to respond to a user request", "Latency measurement tools", "Measures user experience"],
            ["Latency", "Delay between input and output", "Ping tests and network analysis", "Critical for real-time systems"],
            ["Scalability", "Ability to handle increased load", "Stress testing and capacity planning", "Ensures future growth"],
            ["Cost-Performance Ratio", "Balance between cost and performance", "Cost analysis and performance metrics", "Optimizes budget allocation"]
          ]
        },
        additionalResources: [
          {
            title: "Performance Measurement Techniques",
            url: "https://www.performancemeasurement.com/"
          },
          {
            title: "MIT OpenCourseWare - System Performance",
            url: "https://ocw.mit.edu/courses/system-performance/"
          },
          {
            title: "Stanford CS - Performance Analysis",
            url: "https://cs.stanford.edu/performance-analysis/"
          },
          {
            title: "Carnegie Mellon University - Performance Engineering",
            url: "https://cs.cmu.edu/performance-engineering/"
          }
        ]
      },
      {
        id: "topic4",
        title: "Overflow and underflow. Design of adders - ripple carry and carry look ahead principles.",
        completed: false,
        co: "PCC-CS302.CO2",
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
        // video: {
        //   url: "compiler-optimization.mp4",
        //   type: "mp4",
        //   alt: "Introduction to Compiler Techniques Video"
        // },
        youtube: {
          title: "Compiler Optimization Techniques Explained",
          url: " https://www.youtube.com/watch?v=ljrEMCbjaeE"
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
},
{
  id: "topic5",
    title: "Design of ALU.",
      completed: false,
        co: "PCC-CS302.CO2",
        description: "Pipelining is a fundamental technique in computer architecture that increases the throughput of instruction execution by overlapping the execution of multiple instructions. This approach breaks down the instruction cycle into distinct stages, allowing different instructions to be processed simultaneously. It plays a crucial role in enhancing the performance of modern processors by efficiently using the CPU’s resources.",
        objectives: [
            "Understand the concept of pipelining and its importance in computer architecture",
            "Learn the stages of the instruction pipeline",
            "Analyze pipeline performance and efficiency",
            "Identify hazards and how they affect pipelining",
            "Explore techniques to handle pipeline hazards",
            "Compare pipelining with non-pipelined architectures",
            "Understand real-world applications of pipelining in processors"
        ],
        keyPoints: [
            "Pipelining improves CPU performance by allowing concurrent execution of instruction stages.",
            "The instruction cycle is divided into stages like Fetch, Decode, Execute, Memory Access, and Write Back.",
            "Pipeline performance is measured by throughput and pipeline depth.",
            "Hazards such as data hazards, control hazards, and structural hazards can impact efficiency.",
            "Techniques like forwarding, stalling, and branch prediction mitigate pipeline hazards.",
            "Deeper pipelines can lead to higher throughput but may also increase the risk of hazards.",
            "Superscalar and parallel processing often rely on advanced pipelining techniques.",
            "Modern CPUs implement techniques like out-of-order execution and speculative execution to optimize pipelining."
        ],
        image: {
            url: "https://example.com/pipelining-diagram.png",
            alt: "Diagram illustrating the stages of instruction pipelining"
        },
        // video: {
        //     url: "pipelining-concepts.mp4",
        //     type: "mp4",
        //     alt: "Video on Pipelining Basics"
        // },
        youtube: {
            title: "Pipelining in Computer Architecture",
            url: " https://www.youtube.com/watch?v=nv0yAm5gc-E"
        },
        table: {
            title: "Pipelining Stages Table",
            headers: ["Stage", "Description", "Purpose", "Potential Hazards"],
            rows: [
                ["Fetch", "Retrieves the next instruction from memory", "Instruction loading", "Structural hazards"],
                ["Decode", "Interprets the instruction and prepares operands", "Instruction understanding", "Data hazards"],
                ["Execute", "Performs the operation specified by the instruction", "Processing", "Data hazards"],
                ["Memory Access", "Reads or writes data from/to memory", "Data handling", "Structural hazards"],
                ["Write Back", "Stores the result in the appropriate register", "Result saving", "None"]
            ]
        },
        additionalResources: [
            {
                title: "Pipelining in Computer Architecture - GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/pipelining-in-computer-architecture/"
            },
            {
                title: "Understanding Pipeline Hazards",
                url: "https://www.example.com/pipeline-hazards"
            },
            {
                title: "Advanced Pipelining Techniques",
                url: "https://www.example.com/advanced-pipelining"
            }
        ]
},
{
  id: "topic6",
    title: "Fixed point multiplication - Booth's algorithm.",
      completed: false,
        co: "PCC-CS302.CO2",
        description: "Instruction and arithmetic pipelines are fundamental aspects of computer architecture that significantly enhance processing speed and efficiency through parallelism. Instruction pipelines facilitate the streamlined execution of multiple instructions by dividing the process into distinct stages, while arithmetic pipelines focus on breaking down complex mathematical computations into simpler steps. These techniques improve CPU throughput and minimize latency, making modern processors highly efficient.",
        objectives: [
            "Understand the structure, working, and significance of instruction and arithmetic pipelines",
            "Learn how instruction pipelining increases CPU throughput and reduces instruction cycle time",
            "Explore the detailed stages of the instruction pipeline and their specific functions",
            "Analyze the role and working of arithmetic pipelines in handling complex mathematical operations",
            "Compare various pipeline architectures and their real-world applications",
            "Examine the role of superscalar and parallel processing architectures in modern computing"
        ],
        keyPoints: [
            "Instruction pipelines break down instruction execution into key stages: Fetch, Decode, Execute, Memory Access, and Write Back.",
            "Arithmetic pipelines optimize computational efficiency by splitting complex arithmetic operations into simpler sub-tasks, allowing parallel execution.",
            "Pipeline efficiency is determined by throughput (number of instructions executed per unit time) and latency (time taken to execute an instruction).",
            "Superscalar architectures improve performance by using multiple pipelines to execute several instructions simultaneously.",
            "Modern processors often combine pipelining with advanced techniques like out-of-order execution and speculative execution to further optimize efficiency."
        ],
        image: {
            url: "https://example.com/instruction-arithmetic-pipeline-diagram.png",
            alt: "Diagram illustrating instruction and arithmetic pipelines"
        },
        video: {
            url: "instruction-arithmetic-pipeline.mp4",
            type: "mp4",
            alt: "Detailed video on Instruction and Arithmetic Pipelines"
        },
        youtube: {
            title: "Comprehensive Guide to Instruction and Arithmetic Pipelines",
            url: "https://www.youtube.com/watch?v=QU7wib_jyEM"
        },
        table: {
           title: "Pipeline Types Table",
            headers: ["Pipeline Type", "Stages", "Purpose"],
            rows: [
                ["Instruction Pipeline", "Fetch, Decode, Execute, Memory Access, Write Back", "Streamlines and accelerates instruction execution"],
                ["Arithmetic Pipeline", "Operand Fetch, Operation Execution, Result Storage", "Optimizes and speeds up complex mathematical computations"]
            ]
        },
        additionalResources: [
            {
                title: "In-depth Study on Instruction and Arithmetic Pipelines - GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/instruction-and-arithmetic-pipelines/"
            },
            {
                title: "Pipeline Architecture in Modern Computer Systems",
                url: "https://www.example.com/pipeline-architecture"
            },
            {
                title: "Advanced Pipeline Techniques and Optimization",
                url: "https://www.example.com/advanced-pipeline-techniques"
            },
            {
                title: "Computer Organization and Design - Instruction Pipelining",
                url: "https://www.example.com/instruction-pipelining"
            }
        ]
},
{
  id: "topic7",
    title: "Fixed point division - Restoring and non-restoring algorithms.",
      completed: false,
        co: "PCC-CS302.CO2",
        ddescription: "In pipelined processor architecture, hazards are situations that prevent the next instruction from executing in its designated clock cycle. This reduces the efficiency of the pipeline and leads to performance issues. The three primary types of hazards are data hazards, control hazards, and structural hazards. Understanding these hazards and their resolution techniques is crucial for efficient CPU design and operation.",
        objectives: [
            "Understand the concept and types of hazards in pipelining",
            "Explore the causes and impacts of data hazards, control hazards, and structural hazards",
            "Learn techniques for hazard detection and resolution",
            "Analyze real-world examples of pipeline hazards and their solutions",
            "Examine how modern processors mitigate pipeline hazards through advanced techniques"
        ],
        keyPoints: [
            "Data Hazards occur when instructions depend on the results of previous instructions still in the pipeline.",
            "Control Hazards arise from branch instructions that alter the flow of execution, causing delays in instruction fetching.",
            "Structural Hazards happen when different instructions require the same hardware resource simultaneously.",
            "Techniques like forwarding, stalling, and branch prediction help mitigate the effects of hazards.",
            "Efficient hazard resolution increases pipeline throughput and overall CPU performance."
        ],
        image: {
            url: "https://example.com/hazards-diagram.png",
            alt: "Diagram illustrating different types of pipeline hazards"
        },
        video: {
            url: "pipeline-hazards.mp4",
            type: "mp4",
            alt: "Detailed video on Data, Control, and Structural Hazards"
        },
        youtube: {
            title: "Pipeline Hazards Explained",
            url: " https://www.youtube.com/watch?v=8yxrT1isnpE "
        },
        table: {
            title: "Types of Hazards Table",
            headers: ["Hazard Type", "Cause", "Effect", "Resolution Techniques"],
            rows: [
                ["Data Hazard", "Instruction depends on the result of a previous instruction still in the pipeline", "Pipeline stalls or incorrect results", "Forwarding, Stalling, Pipeline Interleaving"],
                ["Control Hazard", "Branch instructions altering program flow", "Delay in fetching the next instruction", "Branch Prediction, Delayed Branching"],
                ["Structural Hazard", "Multiple instructions requiring the same hardware resource", "Resource conflicts and pipeline stalls", "Duplicating Resources, Scheduling Instructions"]
            ]
        },
        additionalResources: [
            {
                title: "Comprehensive Guide to Pipeline Hazards - GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/pipeline-hazards-in-computer-architecture/"
            },
            {
                title: "Hazard Detection and Resolution Techniques",
                url: "https://www.example.com/hazard-detection"
            },
            {
                title: "Advanced Methods for Minimizing Pipeline Stalls",
                url: "https://www.example.com/pipeline-optimization"
            },
            {
                title: "Computer Architecture: Pipeline Hazards and Solutions",
                url: "https://www.example.com/pipeline-hazards-solutions"
            }
        ]
},
{
  id: "topic8",
    title: "Floating point - IEEE 754 standard.",
      completed: false,
        co: "PCC-CS302.CO2",
        description: "Hazards in pipelining affect the smooth execution of instructions and can degrade the performance of a processor. Various techniques have been developed to minimize or eliminate these hazards, ensuring efficient pipeline operation. This module explores techniques like forwarding, stalling, branch prediction, and others used to handle data, control, and structural hazards.",
        objectives: [
            "Understand the importance of hazard resolution in pipelining",
            "Learn different techniques to handle data, control, and structural hazards",
            "Analyze the effectiveness of each technique in various scenarios",
            "Examine real-world examples where these techniques are applied",
            "Evaluate the trade-offs between complexity and performance in hazard resolution"
        ],
        keyPoints: [
            "Forwarding reduces data hazards by using intermediate results without waiting for them to be written to registers.",
            "Stalling temporarily halts the pipeline until the required data becomes available, avoiding incorrect execution.",
            "Branch Prediction minimizes control hazards by guessing the outcome of conditional branches.",
            "Delayed Branching rearranges instructions to keep the pipeline busy during branch decision-making.",
            "Resource Duplication mitigates structural hazards by providing additional hardware resources.",
            "Pipeline Interleaving allows multiple instruction streams to share pipeline stages, increasing throughput.",
            "Speculative Execution predicts and executes instructions ahead of time, reducing control hazards.",
            "Out-of-Order Execution reorders instructions to avoid stalls without changing program results.",
            "Instruction Reordering shifts non-dependent instructions to avoid pipeline delays.",
            "Hazard Detection Units identify and manage potential hazards in real-time, maintaining efficient operation."
        ],
        image: {
            url: "https://example.com/hazard-handling-diagram.png",
            alt: "Diagram showing techniques for handling pipeline hazards"
        },
        video: {
            url: "hazard-handling.mp4",
            type: "mp4",
            alt: "In-depth video on techniques for handling hazards"
        },
        youtube: {
            title: "Handling Pipeline Hazards Effectively",
            url: " https://www.youtube.com/watch?v=Gp2cwH740O0 "
        },
        table: {
            title: "Hazard Handling Techniques Table",
            headers: ["Technique", "Hazard Type Addressed", "How It Works", "Advantages", "Disadvantages"],
            rows: [
                ["Forwarding", "Data Hazard", "Uses results before they are written back to registers", "Reduces stalls", "Requires additional hardware"],
                ["Stalling", "Data Hazard", "Pauses the pipeline until data is ready", "Simple to implement", "Reduces performance"],
                ["Branch Prediction", "Control Hazard", "Predicts the outcome of branch instructions", "Minimizes control stalls", "Mispredictions cause performance loss"],
                ["Delayed Branching", "Control Hazard", "Rearranges instructions to fill delay slots", "Maintains pipeline efficiency", "Complex instruction scheduling"],
                ["Resource Duplication", "Structural Hazard", "Provides additional functional units", "Reduces resource conflicts", "Increases hardware cost"]
            ]
        },
        additionalResources: [
            {
                title: "Techniques for Pipeline Hazard Resolution - GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/techniques-for-pipeline-hazard-resolution/"
            },
            {
                title: "Effective Methods for Handling Pipeline Hazards",
                url: "https://www.example.com/hazard-handling-methods"
            },
            {
                title: "Advanced Pipeline Optimization Techniques",
                url: "https://www.example.com/pipeline-optimization"
            },
            {
                title: "Computer Architecture: Hazard Handling Strategies",
                url: "https://www.example.com/hazard-strategies"
            }
        ]
}
      ],
},
{
  id: "chapter3",
    title: "Instruction Formats, Sets, and Addressing Modes",
      topics: [
        {
          id: "topic9",
          title: "Instruction format. Instruction sets and addressing modes",
          completed: false,
          co: "PCC-CS302.CO3",
          description: "Instruction formats, sets, and addressing modes.",
          objectives: [
              "Understand instruction structure and CPU decoding.",
              "Optimize instruction length for better CPU design and performance.",
              "Learn different ways to access memory/registers.",
              "Learn bit distribution (opcode, operands).",
              "Reduce instruction size with indirect access."
          ],
          keyPoints: [
             "Instruction Format defines the layout of bits in an instruction. It tells the CPU what to do and what operands to use.",
             "
            
          ],
        }
      ],
      table: {
            title: "Instruction Formats Table",
            headers: ["Type", "Description", "Example", "No. of Addresses"],
            rows: [
                  ["Zero-address","Uses stack. Operands are implicitly on top of the stack.","ADD","0"],
                  ["One-address","Uses accumulator. One operand is specified, other is implicit.","ADD A","1"],
                  ["Two-address","Specifies two operands. One is usually the destination.","MOV A, B","2"],
                  ["Three-address","Specifies all operands: source1, source2, and destination.","ADD A, B, C","3"]
    ]
};
        relatedCO: "PCC-CS302.CO3"
},
{
  id: "chapter4",
    title: "Memory Organization and CPU-Memory Interfacing",
      topics: [
        {
          id: "topic10",
          title: "Memory unit design with special emphasis on implementation of CPU-memory interfacing. Memory organization, static and dynamic memory, memory hierarchy, associative memory.",
          completed: false,
          co: "PCC-CS302.CO4",
          description: "Memory unit design and interfacing.",
          objectives: ["Understand memory unit design and interfacing"],
          keyPoints: ["Memory organization", "CPU-memory interfacing"]
        },
        {
          id: "topic11",
          title: "Cache memory, Virtual memory. Data path design for read/write access.",
          completed: false,
          co: "PCC-CS302.CO4",
          description: "Cache and virtual memory.",
          objectives: ["Understand cache and virtual memory"],
          keyPoints: ["Cache memory", "Virtual memory", "Data path design"]
        }
      ],
        relatedCO: "PCC-CS302.CO4"
},
{
  id: "chapter5",
    title: "Control Unit Design and Instruction Set Architectures",
      topics: [
        {
          id: "topic12",
          title: "Design of control unit - hardwired and microprogrammed control.",
          completed: false,
          co: "PCC-CS302.CO5",
          description: "Control unit design.",
          objectives: ["Understand control unit design"],
          keyPoints: ["Hardwired control", "Microprogrammed control"]
        },
        {
          id: "topic13",
          title: "Introduction to instruction pipelining.",
          completed: false,
          co: "PCC-CS302.CO5",
          description: "Instruction pipelining.",
          objectives: ["Understand instruction pipelining"],
          keyPoints: ["Instruction pipelining"]
        },
        {
          id: "topic14",
          title: "Introduction to RISC architectures. RISC vs CISC architectures.",
          completed: false,
          co: "PCC-CS302.CO5",
          description: "RISC vs CISC.",
          objectives: ["Understand RISC and CISC"],
          keyPoints: ["RISC architectures", "RISC vs CISC"]
        }
      ],
        relatedCO: "PCC-CS302.CO5"
},
{
  id: "chapter6",
    title: "Input-Output Operations and Data Transfer Mechanisms",
      topics: [
        {
          id: "topic15",
          title: "I/O operations - Concept of handshaking, Polled I/O, interrupt and DMA",
          completed: false,
          co: "PCC-CS302.CO6",
          description: "I/O operations and data transfer.",
          objectives: ["Understand I/O operations and data transfer"],
          keyPoints: ["Handshaking", "Polled I/O", "Interrupt", "DMA"]
        }
      ],
        relatedCO: "PCC-CS302.CO6"
}
];
