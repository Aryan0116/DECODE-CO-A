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
          "The CPU performs computations and controls the operations of other components.",
      "Memory hierarchy (registers, cache, main memory) optimizes performance by reducing access time.",
      "Pipelining allows multiple instruction stages to operate concurrently, improving throughput.",
      "RISC simplifies the instruction set for faster execution and efficiency.",
      "CISC includes more complex instructions to do more per command.",
      "Instruction Set Architecture (ISA) acts as the interface between software and hardware.",
      "Performance can be improved through parallelism and better memory management.",
      "Cache coherence and synchronization are vital in multiprocessor systems."
          
        ],
        image: {
          url: "https://images.edrawsoft.com/articles/block-diagram-of-computer/block-diagram-of-a-computer.png",
          alt: "Detailed diagram showing CPU, memory, and I/O device interactions"
        },
        video: {
          url: "media/topic1_ca1.mp4",
          type: "mp4",
          alt: "Comprehensive Computer Architecture Overview Video"
        },
        youtube: {
          title: "Deep Dive into Computer Architecture",
          url: "https://www.youtube.com/watch?v=6_PHIL4LZEU"
        },
        /*video: {
          url: "media/topic1_ca1.mp4",
          type: "mp4",
          alt: "Comprehensive Computer Architecture Overview Video"
        },*/
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
            title: "Computer Architecture - Wikipedia",
            url: "https://en.wikipedia.org/wiki/Computer_architecture"
        },
        {
            title: "MIT OpenCourseWare - Computer Architecture",
            url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-004-computation-structures-spring-2017/"
        }
        ]
      },
      {
        id: "topic2",
        title: "Quantitative techniques in computer design",
        completed: false,
        co: "PCC-CS402.CO1",
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
          url: "https://i0.wp.com/revisesociology.com/wp-content/uploads/2017/11/quantitative-research-stages1.png?resize=689%2C1525&ssl=1",
          alt: "Diagram illustrating quantitative techniques in computer design"
        },
        // video: {
        //   url: "quantitative-techniques.mp4",
        //   type: "mp4",
        //   alt: "Introduction to Quantitative Techniques Video"
        // },
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
            title: "Computer Architecture: A Quantitative Approach (PDF)",
            url: "https://acs.pub.ro/~cpop/SMPA/Computer%20Architecture%20A%20Quantitative%20Approach%20%285th%20edition%29.pdf"
          },
          {
           title: "MIT OpenCourseWare - Performance Engineering of Software Systems",
            url: "https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/"
          },
          {
            title : "Stanford EE282: Computer Systems Architecture",
            url: "https://web.stanford.edu/class/ee282/"
          }
         
        ]
      },
      {
        id: "topic3",
        title: "Measuring and reporting performance",
        completed: false,
        co: "PCC-CS402.CO1",
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
          url: "https://www.cutter.com/sites/default/files/architecture/fulltext/reports/2015/02/index/ear1502fig12.gif",
          alt: "Diagram illustrating performance measurement and reporting"
        },
       /* video: {
          url: "performance-measurement.mp4",
          type: "mp4",
          alt: "Introduction to Performance Measurement Video"
        },*/
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
          title: "Performance of Computer in Computer Organization – GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/computer-organization-performance-of-computer/"
        },
        {
          title: "Performance Metrics – Computer Architecture – University of Maryland",
          url: "https://www.cs.umd.edu/~meesh/411/CA-online/chapter/performance-metrics/index.html"
        },
        {
            title: "Measuring and Reporting Performance of Benchmarks – University of Maryland",
            url: "https://www.cs.umd.edu/~meesh/411/website/projects/morebenchmarks/measure.html"
          }
      ]
  },
  {
    id: "topic4",
    title: "Compiler Techniques for Improving Performance",
    completed: false,
    co: "PCC-CS402.CO1",
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
      url: "https://miro.medium.com/v2/resize%3Afit%3A1024/1%2AYwKWGQlVE7JRWPY9DJTR5g.png",
      alt: "Diagram illustrating compiler optimization techniques"
    },
    /*video: {
      url: "compiler-optimization.mp4",
      type: "mp4",
      alt: "Introduction to Compiler Techniques Video"
    },*/
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
        title: "Code Optimization in Compiler Design – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/code-optimization-in-compiler-design/"
      },
      {
        title: "CS262A Berkeley - Compiler Design Project Report",
        url: "https://people.eecs.berkeley.edu/~kubitron/courses/cs262a-F18/projects/reports/project2_report_ver3.pdf"
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
        url: "https://miro.medium.com/v2/resize%3Afit%3A600/1%2AsMPldPSHvPr1OKLJD99OQA.jpeg",
        alt: "Diagram illustrating the stages of instruction pipelining"
    },
  /*  video: {
        url: "pipelining-concepts.mp4",
        type: "mp4",
        alt: "Video on Pipelining Basics"
    },*/
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
        title: "Pipelining in Computer Architecture – GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/pipelined-architecture-with-its-diagram/"
      },
      {
        title: "Computer Organization – Pipelining – TutorialsPoint",
        url: "https://www.tutorialspoint.com/what-is-pipelining-in-computer-architecture"
      },
      {
        title: "Pipelining: Hazards and Performance – NPTEL",
        url: "https://nptel.ac.in/courses/106102062"
      }
    ]
  },

        {
          id: "topic6",
          title: "Instruction and arithmetic pipeline",
          completed: false,
          co: "PCC-CS402.CO2",
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
        url: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-6f20-61f6-a8f0-09a2bdecc7bd/raw?se=2025-05-02T11%3A06%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=24d9e832-1982-53b5-9469-6ee188ae0a19&skoid=ac1d63ad-0c69-4017-8785-7a50eb04382c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-02T09%3A20%3A52Z&ske=2025-05-03T09%3A20%3A52Z&sks=b&skv=2024-08-04&sig=B9yTX87Y11bcdshqoEgXBYftcQyBvsR3UZuH9tP1qio%3D",
        alt: "Diagram illustrating instruction and arithmetic pipelines"
    },
    // video: {
    //     url: "instruction-arithmetic-pipeline.mp4",
    //     type: "mp4",
    //     alt: "Detailed video on Instruction and Arithmetic Pipelines"
    // },
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
        title: "TutorialsPoint – Arithmetic Pipeline in Computer Architecture",
        url: "https://www.tutorialspoint.com/what-is-arithmetic-pipeline-in-computer-architecture"
    },
    {
        title: "GeeksforGeeks – Arithmetic Pipeline and Instruction Pipeline",
        url: "https://www.geeksforgeeks.org/arithmetic-pipeline-and-instruction-pipeline/"
    }
    ]
        },

        {
          id: "topic7",
          title: "Data hazards, control hazards and structural hazards",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "In pipelined processor architecture, hazards are situations that prevent the next instruction from executing in its designated clock cycle. This reduces the efficiency of the pipeline and leads to performance issues. The three primary types of hazards are data hazards, control hazards, and structural hazards. Understanding these hazards and their resolution techniques is crucial for efficient CPU design and operation.",
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
"Efficient hazard resolution increases pipeline throughput and overall CPU performance.",
"There are three types of data hazards: Read After Write (RAW), Write After Read (WAR), and Write After Write (WAW).",
"Pipeline stalls (also called bubbles) are intentional delays introduced to resolve hazards safely.",
"Control hazards are often reduced using branch prediction and speculative execution.",
"Out-of-order execution can help reduce the impact of data hazards by allowing independent instructions to proceed.",
"Modern CPUs use complex scheduling logic to detect and resolve hazards dynamically during execution."
    ],
    image: {
        url: "https://res.cloudinary.com/witspry/image/upload/witscad/public/content/courses/computer-architecture/structural-dependency-scenario.png",
        alt: "Diagram illustrating different types of pipeline hazards"
    },
   /* video: {
        url: "pipeline-hazards.mp4",
        type: "mp4",
        alt: "Detailed video on Data, Control, and Structural Hazards"
    },*/
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
        title: "Wikipedia – Hazard (Computer Architecture)",
        url: "https://en.wikipedia.org/wiki/Hazard_(computer_architecture)"
    },
    {
        title: "CSBranch – Pipeline Hazards: Data, Control, Structural",
        url: "https://csbranch.com/index.php/2024/09/07/pipeline-hazards-data-control-structural/"
    },
    {
        title: "GeeksforGeeks – Pipelining: Dependencies and Data Hazards",
        url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-pipelining-set-2-dependencies-and-data-hazard/"
    }
    ]
        },
        {
          id: "topic8",
          title: "Techniques for handling hazards",
          completed: false,
          co: "PCC-CS402.CO2",
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
        url: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-a998-61f8-894c-db2627e1615a/raw?se=2025-05-02T12%3A53%3A27Z&sp=r&sv=2024-08-04&sr=b&scid=da1feb6e-b57a-5b66-8fe2-56dfc674f32d&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-02T02%3A47%3A58Z&ske=2025-05-03T02%3A47%3A58Z&sks=b&skv=2024-08-04&sig=TLcrTfPOhllB3x37joDVgr3YBzszkXdVb6UNW5s6JGc%3D",
        alt: "Diagram showing techniques for handling pipeline hazards"
    },
  /*  video: {
        url: "hazard-handling.mp4",
        type: "mp4",
        alt: "In-depth video on techniques for handling hazards"
    },*/
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
        title: "Advanced Pipeline Optimization Techniques",
        url: "https://en.wikipedia.org/wiki/Hazard_(computer_architecture)"
    },
    {
        title: "Computer Architecture: Hazard Handling Strategies",
        url: "https://www.geeksforgeeks.org/data-hazards-and-its-handling-methods/"
    }
    ]
        },
        {
          id: "topic9",
          title: "Exception handling",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Exception handling is a crucial aspect of computer architecture that ensures proper response and recovery from unexpected conditions during program execution. This module explores the types of exceptions, their causes, and techniques for handling them efficiently.",
    objectives: [
        "Understand the role and importance of exception handling",
        "Learn different types of exceptions and their causes",
        "Explore mechanisms used to detect and manage exceptions",
        "Examine real-world examples of exception handling in modern processors",
        "Evaluate trade-offs between performance and reliability in exception management",
        "Gain insight into how exceptions affect program control flow",
        "Understand the distinction between hardware and software exceptions",
        "Study practical approaches for minimizing exception overhead"
    ],
    keyPoints: [
        "Exceptions signal abnormal conditions requiring special processing.",
        "Types of exceptions include interrupts, traps, faults, and aborts.",
        "Interrupts are asynchronous and usually triggered by external devices.",
        "Traps are intentional exceptions used for system calls and debugging.",
        "Faults indicate recoverable errors and often allow instruction re-execution.",
        "Aborts signal severe, non-recoverable hardware errors.",
        "Exception handling improves system reliability and stability.",
        "Modern architectures use vectored interrupts for efficient exception processing.",
        "Precise exceptions maintain the consistency of program execution.",
        "Hardware and software collaboration ensures timely exception resolution.",
        "Efficient exception handling reduces performance degradation.",
        "Properly managed exceptions ensure data integrity and program consistency.",
        "Advanced techniques like speculative execution handle exceptions gracefully.",
        "Understanding exception priority helps manage multiple concurrent issues.",
        "Mechanisms to detect and manage exceptions include polling, interrupts, and exception vectors.",
        "Real-world examples show how exceptions manage I/O operations, memory access, and hardware failures.",
        "Performance and reliability trade-offs depend on how quickly and accurately exceptions are handled.",
        "Program control flow can be disrupted by exceptions, requiring robust recovery techniques.",
        "Hardware exceptions often involve immediate responses, while software exceptions may use error-handling routines.",
        "Minimizing exception overhead requires optimizing detection and resolution mechanisms."
    ],
    image: {
        url: "https://image1.slideserve.com/2770623/exception-handling-l.jpg",
        alt: "Diagram showing exception handling flow"
    },
    /*video: {
        url: "exception-handling.mp4",
        type: "mp4",
        alt: "In-depth video on exception handling mechanisms"
    },*/
    youtube: {
        title: "Exception Handling in Computer Systems",
url: "https://www.youtube.com/watch?v=mfFEKcKUpUE&t=434s"
    },
    table: {
title: "Exception Types Table",       
 headers: ["Exception Type", "Cause", "Handling Mechanism", "Impact", "Recovery"],
        rows: [
            ["Interrupt", "External event (e.g., I/O request)", "Asynchronous handling", "Minimal", "Immediate"],
            ["Trap", "Intentional event (e.g., system call)", "Synchronous handling", "Low", "Immediate"],
            ["Fault", "Recoverable error (e.g., page fault)", "Instruction re-execution", "Moderate", "Possible"],
            ["Abort", "Non-recoverable error (e.g., hardware failure)", "Immediate stop", "High", "Not possible"]
        ]
    },
    additionalResources: [
      {
        title: "Understanding Interrupts and Exceptions",
        url: "https://www.geeksforgeeks.org/interrupts-and-exceptions/"
      },
      {
        title: "Advanced Exception Management Techniques",
        url: "https://library.fiveable.me/advanced-computer-architecture/unit-3/exception-handling-pipelined-processors/study-guide/ulz8mSCscBUvbxNp"
      },
      {
        title: "Computer Architecture: Exception Handling Strategies",
        url: "https://en.wikipedia.org/wiki/Exception_handling"
      }
    ]
        },
        {
          id: "topic10",
          title: "Pipeline optimization techniques",
          completed: false,
          co: "PCC-CS402.CO2",
          description: "Pipeline optimization techniques enhance the efficiency and performance of instruction execution in computer architecture. This module covers various methods to minimize pipeline stalls, handle dependencies, and improve throughput.",
    objectives: [
        "Understand the need for pipeline optimization",
        "Learn techniques for reducing pipeline stalls",
        "Explore methods for dependency resolution",
        "Study strategies to enhance instruction throughput",
        "Evaluate real-world implementations of optimized pipelines",
        "Examine the impact of optimization on system performance",
        "Understand hardware and software approaches to optimization",
        "Analyze trade-offs between complexity and efficiency in optimization"
    ],
    keyPoints: [
        "Pipeline optimization reduces instruction latency and increases throughput.",
        "Techniques include instruction reordering, branch prediction, and speculative execution.",
        "Forwarding (bypassing) resolves data hazards by directly passing results.",
        "Stall reduction techniques prevent pipeline bubbles and improve efficiency.",
        "Out-of-order execution enables parallelism and better resource utilization.",
        "Branch prediction minimizes control hazards by guessing the next instruction flow.",
        "Speculative execution executes instructions ahead of time, rolling back if predictions fail.",
        "Pipeline interleaving balances load and prevents resource conflicts.",
        "Efficient pipeline flushing ensures quick recovery from mispredictions.",
        "Dynamic scheduling enhances instruction parallelism and reduces idle time.",
        "Real-world processors implement multiple optimization techniques for high performance.",
        "Hardware support for optimization includes advanced control and data paths.",
        "Software-level optimization involves compiler techniques like instruction scheduling.",
        "Balancing complexity and efficiency ensures cost-effective optimization.",
        "Case studies of modern CPUs showcase successful pipeline optimization strategies."
    ],
    image: {
        url: "https://kanerika.com/wp-content/uploads/2024/05/Best-Data-Pipeline-Optimization-Strategies-visual-selection.svg",
        alt: "Diagram illustrating various pipeline optimization techniques"
    },
   /* video: {
        url: "pipeline-optimization.mp4",
        type: "mp4",
        alt: "Detailed video on pipeline optimization methods"
    },*/
    youtube: {
        title: "Pipeline Optimization Techniques Explained",
        url: " https://www.youtube.com/watch?v=mUBkoy0hRWc"
    },
    table: {
        title: "Optimization Techniques Table",
        headers: ["Technique", "Purpose", "Implementation", "Impact", "Complexity"],
        rows: [
            ["Forwarding", "Resolve data hazards", "Bypass data paths", "High", "Moderate"],
            ["Branch Prediction", "Minimize control hazards", "Predict next instruction", "High", "Complex"],
            ["Speculative Execution", "Improve throughput", "Execute ahead of time", "High", "Complex"],
            ["Out-of-Order Execution", "Enhance parallelism", "Reorder instructions", "Very High", "Very Complex"],
            ["Pipeline Interleaving", "Balance load", "Overlap multiple pipelines", "Moderate", "High"]
        ]
    },
    additionalResources: [
      {
        title: "Advanced Pipeline Optimization Techniques – Fiveable",
        url: "https://library.fiveable.me/advanced-computer-architecture/unit-3/advanced-pipeline-optimizations/study-guide/SKbZn9MIPRm2U1bQ"
      },
      {
        title: "Pipeline Optimization Techniques – Medium",
        url: "https://medium.com/@deepak.jayabalan/pipeline-optimization-techniques-eb11b48ce941"
      }
    ]
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
          description: "This module explores hierarchical memory technology, focusing on the principles of inclusion, coherence, and locality properties that optimize memory usage and system performance.",
          objectives: [
              "Understand the concept of hierarchical memory systems",
              "Learn about the inclusion property in memory hierarchy",
              "Explore the coherence property and its importance",
              "Study locality properties and their role in memory performance",
              "Analyze real-world implementations of memory hierarchy",
              "Understand the trade-offs between speed, cost, and capacity",
              "Examine techniques to maintain memory consistency",
              "Evaluate the impact of memory hierarchy on system performance"
          ],
          keyPoints: [
              "Hierarchical memory optimizes speed and cost by structuring memory in layers.",
              "Inclusion ensures that data present in a higher-level cache is also in lower levels.",
              "Coherence maintains consistency of shared data across multiple caches.",
              "Locality properties include spatial and temporal locality, improving cache efficiency.",
              "Cache memory significantly reduces access time compared to primary memory.",
              "Memory hierarchy balances trade-offs between speed, capacity, and cost.",
              "Techniques like write-through and write-back ensure data consistency.",
              "Real-world CPUs implement advanced caching strategies for performance.",
              "Locality of reference helps predict future memory accesses.",
              "Efficient memory management reduces latency and increases throughput.",
              "Multi-level caching improves data access rates and system responsiveness.",
              "Memory inclusion and coherence protocols prevent data duplication errors.",
              "Hardware and software techniques work together to optimize memory performance.",
              "Case studies show the effectiveness of hierarchical memory designs.",
              "Understanding memory properties helps in designing efficient computer systems."
          ],
          image: {
              url: "https://media.geeksforgeeks.org/wp-content/uploads/20250111112435920586/Memory-Hierarchy-Design.web",
              alt: "Diagram illustrating memory hierarchy and its properties"
          },
          /*video: {
              url: "memory-hierarchy.mp4",
              type: "mp4",
              alt: "Detailed video on hierarchical memory technology"
          },*/
          youtube: {
              title: "Hierarchical Memory Explained",
              url: " https://www.youtube.com/watch?v=DH_VcjjTOq0 "
          },
          table: {
                title: "Memory Properties Table",
              headers: ["Property", "Definition", "Importance", "Real-World Example"],
              rows: [
                  ["Inclusion", "Ensures data in higher-level memory exists in lower levels", "Prevents data inconsistency", "Multi-level caching in CPUs"],
                  ["Coherence", "Maintains consistency of shared data across caches", "Avoids conflicting data states", "Cache coherence protocols"],
                  ["Locality", "Predicts future data access based on current usage", "Reduces memory access time", "Spatial and temporal locality in caching"]
              ]
          },
          additionalResources: [
            {
              title: "Memory Hierarchy Design and Its Characteristics – GeeksforGeeks",
              url: "https://www.geeksforgeeks.org/memory-hierarchy-design-and-its-characteristics/"
            },
            {
              title: "Inclusion, Coherence and Locality Properties – Scribd",
              url: "https://www.scribd.com/document/504504329/Inclusion-Coherence-and-Locality-Properties"
            },
            {
              title: "Memory Hierarchy Technology in Computer Architecture – IncludeHelp",
              url: "https://www.includehelp.com/basics/memory-hierarchy-technology-in-computer-architecture.aspx"
            },
            {
              title: "Locality of Reference – Wikipedia",
              url: "https://en.wikipedia.org/wiki/Locality_of_reference"
            }
          ]
        },
          {
            "id": "topic12",
            "title": "Cache Memory Organizations",
            "completed": false,
            "co": "PCC-CS402.CO3",
            "description": "This module provides an in-depth exploration of fundamental cache memory organizations, including direct-mapped, fully associative, and set-associative caches. It focuses on the structural differences, operational principles, and performance characteristics of these organizations.",
            "objectives": [
              "Comprehend the fundamental principles of cache memory and its role in improving memory access speeds.",
              "Differentiate between direct-mapped, fully associative, and set-associative cache organizations.",
              "Analyze the address mapping techniques used in each cache organization.",
              "Evaluate the trade-offs between simplicity, flexibility, and performance in different cache designs.",
              "Understand the impact of cache organization on hit rate and miss rate.",
              "Describe the basic operation of each cache organization during read and write operations."
            ],
            "keyPoints": [
              "Cache memory acts as a high-speed buffer between the CPU and main memory, reducing average memory access time.",
              "Direct-mapped cache uses a simple modulo-based address mapping, where each main memory block maps to a unique cache line.",
              "Fully associative cache allows any main memory block to reside in any cache line, offering maximum flexibility but requiring complex search mechanisms.",
              "Set-associative cache combines the advantages of direct-mapped and fully associative caches by dividing the cache into sets, where each set contains multiple cache lines.",
              "Address decomposition into tag, set index (for set-associative), and block offset is crucial for cache operations.",
              "The choice of cache organization significantly influences the cache's hit rate, miss rate, and overall system performance.",
              "Understanding the structure and operation of different cache organizations is essential for optimizing memory system performance."
            ],
            "image": {
              "url": "https://www.gatevidyalay.com/wp-content/uploads/2018/06/Cache-Memory-Location.png?ezimgfmt=rs%3A281x253%2Frscb1%2Fngcb1%2FnotWebP",
              "alt": "Diagram illustrating the structural differences between direct-mapped, fully associative, and set-associative cache organizations."
            },
            /*
            "video": {
              "url": "cache-memory.mp4",
              "type": "mp4",
              "alt": "A detailed video explaining the internal workings of direct-mapped, fully associative, and set-associative caches, along with examples of address mapping."
            },*/
            "youtube": {
              "title": "Cache Memory Explained: Organizations",
              "url": "https://www.youtube.com/watch?v=OfqzoQ9Kw9k"
            },
            "table": {
              "title": "Comparison of Cache Memory Organizations",
              "headers": ["Cache Type", "Structure", "Address Mapping", "Advantages", "Disadvantages", "Typical Use Cases"],
              "rows": [
                [
                  "Direct-Mapped Cache",
                  "Each memory block maps to a single, specific cache line.",
                  "Modulo-based mapping: cache line index = (memory block address) mod (number of cache lines).",
                  "Simple hardware implementation, fast access time.",
                  "High conflict misses, limited flexibility.",
                  "Small, low-cost caches where simplicity is paramount."
                ],
                [
                  "Fully Associative Cache",
                  "Any memory block can be placed in any cache line.",
                  "Requires associative search (comparing tags with all cache lines simultaneously).",
                  "Lowest conflict misses, maximum flexibility.",
                  "Complex hardware, high cost, slow search time for large caches.",
                  "Small, specialized caches, TLBs (Translation Lookaside Buffers)."
                ],
                [
                  "Set-Associative Cache",
                  "Cache is divided into sets, each set contains multiple cache lines. Memory blocks map to a specific set but can reside in any line within that set.",
                  "Combines direct-mapped and fully associative: set index = (memory block address) mod (number of sets), then associative search within the set.",
                  "Balances simplicity and flexibility, reduces conflict misses compared to direct-mapped.",
                  "More complex than direct-mapped, requires set selection and tag comparison.",
                  "Most common cache organization in modern processors."
                ]
              ]
            },
            "additionalResources": [
              {
                title: "Cache Memory in Computer Organization – GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/cache-memory-in-computer-organization/"
              },
              {
                title: "Cache Organization – GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/cache-organization-set-1-introduction/"
              },
              {
                title: "Basics of Cache Memory – University of Maryland",
                url: "https://www.cs.umd.edu/~meesh/411/CA-online/chapter/basics-of-cache-memory/index.html"
              }
            ]
          },
        {
          "id": "topic13",
  "title": "Techniques for Reducing Cache Misses",
  "completed": false,
  "co": "PCC-CS402.CO3",
  "description": "This module explores various techniques aimed at minimizing cache misses, thus improving memory access speeds and overall system performance. It delves into strategies that address different types of cache misses: compulsory, capacity, and conflict.",
  "objectives": [
    "Identify and understand the different types of cache misses (compulsory, capacity, conflict).",
    "Learn and apply techniques to reduce compulsory misses.",
    "Explore methods for mitigating capacity misses through cache size and organization adjustments.",
    "Analyze and implement strategies to minimize conflict misses using associativity and replacement policies.",
    "Understand the impact of prefetching and loop transformations on cache performance.",
    "Evaluate the effectiveness of different techniques in reducing overall miss rates."
  ],
  "keyPoints": [
    "Cache misses degrade system performance by increasing memory access latency.",
    "Compulsory misses occur on the first access to a memory block; prefetching can help mitigate these.",
    "Capacity misses happen when the cache cannot hold all the working set; increasing cache size reduces them.",
    "Conflict misses arise when multiple memory blocks map to the same cache line; increasing associativity and using better replacement policies helps.",
    "Prefetching anticipates data needs, loading data into the cache before it is requested.",
    "Loop transformations (e.g., loop tiling, loop interchange) optimize data access patterns.",
    "Replacement policies (LRU, FIFO, etc.) determine which cache line to evict on a miss.",
    "Cache blocking and tiling improve temporal locality by working on smaller data subsets.",
    "Victim caches can reduce conflict misses by holding recently evicted blocks.",
    "Software and hardware prefetching approaches exist, each with its own trade-offs."
  ],
  "image": {
    "url": "https://media.geeksforgeeks.org/wp-content/uploads/20200414101524/Cache_Design.png",
    "alt": "Diagram illustrating various techniques for reducing cache misses."
  },
  /*"video": {
    "url": "cache-miss-reduction.mp4",
    "type": "mp4",
    "alt": "Detailed video explaining techniques to reduce compulsory, capacity, and conflict misses."
  },*/
  "youtube": {
    "title": "Cache Miss Reduction Techniques",
    "url": "https://www.youtube.com/watch?v=OfqzoQ9Kw9k&t=119"
  },
  "table": {
    "title": "Techniques for Reducing Cache Misses",
    "headers": ["Miss Type", "Technique", "Description", "Impact"],
    "rows": [
      ["Compulsory", "Prefetching", "Load data into the cache before it's needed.", "Reduces initial access latency."],
      ["Capacity", "Increasing Cache Size", "Expand the cache capacity to hold more data.", "Decreases misses when the working set exceeds cache size."],
      ["Conflict", "Increasing Associativity", "Allow memory blocks to map to more than one cache line.", "Reduces misses due to multiple blocks mapping to the same line."],
      ["Conflict", "Better Replacement Policies (LRU, etc.)", "Use algorithms that evict less frequently used data.", "Optimizes cache usage and reduces conflict misses."],
      ["All", "Loop Transformations (Tiling, Interchange)", "Rearrange loops to improve data locality.", "Enhances spatial and temporal locality, reducing all types of misses."],
      ["Conflict", "Victim Caches", "Use a small, fully associative buffer to hold evicted blocks.", "Reduces conflict misses by providing a second chance for recently evicted data."]
    ]
  },
  "additionalResources": [
    {
      "title": "Basic Cache Optimization Techniques – GeeksforGeeks",
      "url": "https://www.geeksforgeeks.org/basic-cache-optimization-techniques/"
    },
    {
      "title": "Loop Nest Optimization – Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Loop_nest_optimization"
    },
    {
      "title": "Loop Unrolling – Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Loop_unrolling"
    },
    {
      "title": "Hardware Scout – Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Hardware_scout"
    },
    {
      "title": "Adaptive Replacement Cache – Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Adaptive_replacement_cache"
    }
  ]
},
        {
          id: "topic14",
          title: "Virtual memory organization, mapping and management techniques, memory replacement policies",
          completed: false,
          co: "PCC-CS402.CO3",
          description: "This module provides an in-depth exploration of virtual memory systems, their organization, mapping techniques, management strategies, and memory replacement policies.",
    objectives: [
        "Understand the concept and importance of virtual memory",
        "Learn virtual memory mapping techniques",
        "Explore page tables and translation lookaside buffers (TLB)",
        "Study memory management strategies like paging and segmentation",
        "Analyze memory replacement policies and their efficiency",
        "Examine demand paging and pre-paging techniques",
        "Understand the impact of virtual memory on system performance"
    ],
    keyPoints: [
        "Virtual memory allows programs to use more memory than physically available by using disk space as an extension of RAM.",
        "Paging divides virtual memory into fixed-size pages mapped to physical memory frames.",
        "Segmentation offers a more flexible approach by dividing memory into variable-sized segments.",
        "Translation Lookaside Buffers (TLB) speed up virtual address translation.",
        "Efficient memory replacement policies like LRU, FIFO, and Optimal minimize page faults.",
        "Demand paging loads pages into memory only when needed, conserving resources.",
        "Pre-paging anticipates future page requests, reducing page faults.",
        "Thrashing occurs when excessive paging reduces CPU efficiency.",
        "Virtual memory enhances multitasking and process isolation.",
        "Page tables maintain the mapping between virtual and physical addresses.",
        "Hierarchical and inverted page tables optimize memory usage and lookup speed.",
        "Proper memory management prevents fragmentation and optimizes resource use."
    ],
    image: {
        url: "https://computationstructures.org/lectures/vm/slides/Slide07.png",
        alt: "Diagram illustrating virtual memory organization and management"
    },
    /*video: {
        url: "virtual-memory.mp4",
        type: "mp4",
        alt: "Detailed video on virtual memory systems and replacement policies"
    },*/
    youtube: {
        title: "Virtual Memory Explained",
        url: "https://www.youtube.com/watch?v=o2_iCzS9-ZQ"
    },
    table: {
        title: "Virtual Memory Table",
        headers: ["Technique", "Description", "Advantages", "Disadvantages"],
        rows: [
            ["Paging", "Fixed-size memory blocks", "Simple and efficient", "Internal fragmentation"],
            ["Segmentation", "Variable-size memory blocks", "Logical grouping of data", "External fragmentation"],
            ["Demand Paging", "Loads pages on demand", "Conserves memory", "Increased page faults"],
            ["Pre-paging", "Loads pages in advance", "Reduces page faults", "Wasted memory if unused"],
            ["LRU Replacement", "Replaces least recently used page", "Minimizes page faults", "High overhead"],
            ["FIFO Replacement", "Replaces oldest page", "Simple implementation", "High page fault rate"],
            ["Optimal Replacement", "Replaces page not needed for longest time", "Lowest page fault rate", "Difficult to implement"]
        ]
    },
    additionalResources: [
      {
        "title": "Virtual Memory in Operating System – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/"
      },
      {
        "title": "Page Replacement Algorithms in Operating Systems – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/"
      },
      {
        "title": "Virtual Memory I – University of Maryland",
        "url": "https://www.cs.umd.edu/~meesh/411/CA-online/chapter/virtual-memory-i/index.html"
      },
      {
        "title": "Virtual Memory – Operating Systems Course Notes – University of Illinois at Chicago",
        "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/9_VirtualMemory.html"
      },
      {
        "title": "Page Replacement Algorithm – Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Page_replacement_algorithm"
      }
    ]
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
          description: "This module provides a detailed understanding of instruction-level parallelism (ILP), its concepts, challenges, and techniques to improve processor performance.",
    objectives: [
        "Understand the concept and significance of instruction-level parallelism",
        "Learn about instruction pipelining and its role in ILP",
        "Explore techniques to achieve parallel execution of instructions",
        "Identify challenges like data, control, and structural hazards",
        "Study solutions like out-of-order execution and speculative execution",
        "Analyze the impact of ILP on processor performance and efficiency"
    ],
    keyPoints: [
        "Instruction-level parallelism allows multiple instructions to be executed simultaneously, improving CPU efficiency.",
        "Pipelining is a fundamental technique for ILP, breaking instruction execution into stages.",
        "ILP techniques include superscalar execution, VLIW (Very Long Instruction Word), and out-of-order execution.",
        "Data hazards, control hazards, and structural hazards limit ILP and must be managed efficiently.",
        "Branch prediction and speculative execution help mitigate control hazards.",
        "Scoreboarding and Tomasulo’s algorithm resolve data dependencies.",
        "Superscalar processors issue multiple instructions per clock cycle.",
        "VLIW architecture packages multiple operations into a single instruction word.",
        "Dynamic scheduling allows reordering instructions to avoid stalls.",
        "ILP significantly boosts performance in high-speed computing systems."
    ],
    image: {
        url: "https://www.cs.cmu.edu/afs/cs/academic/class/15828-s98/lectures/0112/img012.GIF",
        alt: "Diagram illustrating instruction-level parallelism"
    },
    /*video: {
        url: "ilp-video.mp4",
        type: "mp4",
        alt: "Detailed video on instruction-level parallelism"
    }, */
    youtube: {
        title: "Instruction-Level Parallelism Explained",
        url: " https://www.youtube.com/watch?v=pLWRAVUr4uI"
    },
    table: {
        title: "ILP Techniques Table",
        headers: ["Technique", "Description", "Advantages", "Disadvantages"],
        rows: [
            ["Pipelining", "Divides instruction execution into stages", "Improves throughput", "Increases latency for individual instructions"],
            ["Superscalar Execution", "Executes multiple instructions per clock cycle", "High performance", "Complex hardware design"],
            ["VLIW", "Encodes multiple operations in a single instruction", "Simpler hardware", "Compiler complexity"],
            ["Out-of-Order Execution", "Executes instructions based on data readiness", "Reduces stalls", "Complex scheduling logic"],
            ["Speculative Execution", "Executes instructions before branch outcomes are known", "Improves pipeline efficiency", "Risk of wasted computation"],
            ["Branch Prediction", "Predicts branch outcomes to prevent pipeline stalls", "Reduces control hazards", "Mispredictions cause performance penalties"]
        ]
    },
    additionalResources: [
      {
        "title": "Instruction Level Parallelism – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/instruction-level-parallelism/"
      },
      {
        "title": "Instruction-Level Parallelism – Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Instruction-level_parallelism"
      },
      {
        "title": "Instruction-Level Parallelism – ScienceDirect Topics",
        "url": "https://www.sciencedirect.com/topics/computer-science/instruction-level-parallelism"
      },
      {
        "title": "Instruction-Level Parallelism – Medium Article",
        "url": "https://kattavinay2002.medium.com/instruction-level-parallelism-a8d34b45e42a"
      }
    ]
        },
        {
          id: "topic16",
          title: "Techniques for increasing ILP",
          completed: false,
          co: "PCC-CS402.CO4",
          description: "This module explores advanced techniques for increasing instruction-level parallelism, addressing challenges and maximizing processor efficiency.",
    objectives: [
        "Understand the need for increasing instruction-level parallelism",
        "Learn various hardware and software techniques for ILP enhancement",
        "Explore dynamic scheduling, speculative execution, and branch prediction",
        "Study techniques like loop unrolling and instruction pipelining",
        "Analyze the impact of ILP optimization on system performance"
    ],
    keyPoints: [
        "Increasing ILP minimizes execution time by running multiple instructions simultaneously.",
        "Dynamic scheduling reorders instructions to avoid stalls and improve efficiency.",
        "Speculative execution predicts future instructions, reducing delays.",
        "Branch prediction minimizes control hazards by guessing the outcome of conditional operations.",
        "Loop unrolling reduces overhead and increases instruction throughput.",
        "Register renaming eliminates false data dependencies.",
        "Tomasulo’s algorithm and scoreboarding handle out-of-order execution effectively.",
        "VLIW architecture uses wide instructions to encode multiple operations.",
        "Superscalar processors fetch and execute multiple instructions per cycle.",
        "Software pipelining rearranges loops for parallel execution."
    ],
    image: {
        url: "https://image.slideserve.com/388021/instruction-level-parallelism-l.jpg", 
        alt: "Diagram showing techniques for increasing ILP"
    },
    /*video: {
        url: "ilp-techniques-video.mp4",
        type: "mp4",
        alt: "Detailed video on techniques for increasing ILP"
    }, */
    youtube: {
        title: "Techniques for Increasing ILP",
        url: " https://www.youtube.com/watch?v=Ut8wY6qtie4 "
    },
    table: {
        title: "Techniques Table",
        headers: ["Technique", "Description", "Advantages", "Disadvantages"],
        rows: [
            ["Dynamic Scheduling", "Reorders instructions based on data availability", "Minimizes stalls", "Complex hardware"],
            ["Speculative Execution", "Executes instructions ahead of time", "Improves pipeline efficiency", "Risk of wasted work"],
            ["Branch Prediction", "Predicts the outcome of branches", "Reduces control hazards", "Mispredictions cause penalties"],
            ["Loop Unrolling", "Expands loop body to reduce iteration overhead", "Increases throughput", "Code size grows"],
            ["Register Renaming", "Eliminates false dependencies", "Enhances parallelism", "Additional hardware complexity"],
            ["Tomasulo’s Algorithm", "Enables out-of-order execution", "Reduces pipeline stalls", "Complex implementation"],
            ["VLIW", "Encodes multiple operations in one instruction", "Simpler hardware", "Compiler complexity"],
            ["Superscalar Execution", "Executes multiple instructions per cycle", "High performance", "Increased design complexity"],
            ["Software Pipelining", "Reorders loop operations for parallelism", "Maximizes throughput", "Difficult optimization"]
        ]
    },
    additionalResources: [
      {
        "title": "Understanding Instruction-Level Parallelism – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/instruction-level-parallelism/"
      },
      {
        "title": "In-Depth Overview of ILP Concepts – Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Instruction-level_parallelism"
      },
      {
        "title": "Instruction-Level Parallelism in Modern CPUs – ScienceDirect",
        "url": "https://www.sciencedirect.com/topics/computer-science/instruction-level-parallelism"
      },
      {
        "title": "Beginner’s Guide to Instruction-Level Parallelism – Medium",
        "url": "https://kattavinay2002.medium.com/instruction-level-parallelism-a8d34b45e42a"
      }
    ]
        },
        {
          id: "topic17",
          title: "Superscalar and superpipelined architectures",
          completed: false,
          co: "PCC-CS402.CO4",
          description: "This module dives into the advanced concepts of superscalar and superpipelined architectures, highlighting their role in enhancing instruction-level parallelism and processor efficiency.",
    objectives: [
        "Understand the principles of superscalar and superpipelined architectures",
        "Learn how these architectures improve instruction throughput",
        "Explore hardware and design challenges associated with each approach",
        "Analyze the impact of superscalar and superpipelined designs on system performance",
        "Differentiate between the two architectures in terms of execution efficiency"
    ],
    keyPoints: [
        "Superscalar architecture executes multiple instructions per clock cycle by using multiple execution units.",
        "Superpipelined architecture increases the number of pipeline stages to allow faster clock cycles.",
        "Superscalar designs require sophisticated instruction dispatch and dependency checking mechanisms.",
        "Superpipelined processors face challenges like increased pipeline hazards and higher branch penalties.",
        "Both architectures aim to exploit instruction-level parallelism for better performance.",
        "Hardware complexity and power consumption are key considerations in superscalar designs.",
        "Superpipelining often requires advanced hazard resolution techniques to maintain efficiency.",
        "Modern high-performance processors often combine both superscalar and superpipelined approaches."
    ],
    image: {
        url: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-01f4-622f-922e-39f9d8ed2ba4/raw?se=2025-05-02T16%3A48%3A12Z&sp=r&sv=2024-08-04&sr=b&scid=6efda36e-bc4f-5b74-9fda-dc94b9b32f66&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-02T02%3A46%3A34Z&ske=2025-05-03T02%3A46%3A34Z&sks=b&skv=2024-08-04&sig=zKnDwjF93dt0/Hi4ISGi/DUaB%2BUhceps6axmfM0WcXU%3D",
        alt: "Diagram illustrating superscalar and superpipelined architectures"
    },
   /* video: {
        url: "superscalar-superpipelined-video.mp4",
        type: "mp4",
        alt: "Detailed video on superscalar and superpipelined techniques"
    },*/
    youtube: {
        title: "Superscalar and Superpipelined Architectures Explained",
        url: "https://www.youtube.com/watch?v=6PKi2kiEThk"
    },
    table: {
        title: "Comparison Table",
        headers: ["Feature", "Superscalar", "Superpipelined"],
        rows: [
            ["Instruction Execution", "Multiple per cycle", "One per cycle"],
            ["Pipeline Stages", "Standard number", "Increased number"],
            ["Parallelism", "Higher due to multiple execution units", "Limited by increased stages"],
            ["Complexity", "High due to instruction dispatch and dependencies", "Moderate but increased hazard risk"],
            ["Performance", "High with optimized instruction flow", "High with fast clock cycles"]
        ]
    },
    additionalResources: [
      {
        "title": "Superscalar Processor – Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Superscalar_processor?utm_source=chatgpt.com"
      },
      {
        "title": "Superpipeline and Superscalar Architectures – SlideShare",
        "url": "https://www.slideshare.net/ishaqahmad3154/superscalar-superpipeline-processor?utm_source=chatgpt.com"
      },
      {
        "title": "Superscalar vs Superpipelined Approach – AP PGECET",
        "url": "https://www.appgecet.co.in/superscalar-vs-super-pipelined-approach-understanding-the-differences/?utm_source=chatgpt.com"
      }
    ]
        },
        {
          id: "topic18",
          title: "VLIW (Very Long Instruction Word) Processor Architectures",
          completed: false,
          co: "PCC-CS402.CO4",
          description: "This module explores VLIW processor architectures, detailing their design philosophy, execution model, and efficiency in parallel processing.",
    objectives: [
        "Understand the core principles of VLIW architecture",
        "Learn how VLIW processors handle instruction-level parallelism",
        "Explore the role of compilers in VLIW design",
        "Analyze the advantages and challenges of VLIW architectures",
        "Compare VLIW with superscalar and other parallel architectures"
    ],
    keyPoints: [
        "VLIW architecture packages multiple operations into a single long instruction word.",
        "VLIW processors rely on the compiler to detect and exploit parallelism.",
        "Simpler hardware design compared to superscalar architectures due to reduced runtime scheduling.",
        "Efficient execution when parallelism is well-optimized, but suffers from performance issues with unpredictable branches.",
        "VLIW design reduces hardware complexity but increases compiler complexity.",
        "Code size can grow significantly due to the need for instruction bundling.",
        "Stalls and no-ops can occur when the compiler fails to fill all operation slots.",
        "VLIW processors often require advanced static scheduling techniques for optimal performance."
    ],
    image: {
        url: "https://media.geeksforgeeks.org/wp-content/uploads/20201030224132/BlockDiagramofVLIW.jpg",
        alt: "Diagram illustrating VLIW processor architecture"
    },
    /*video: {
        url: "vliw-architecture-video.mp4",
        type: "mp4",
        alt: "Detailed video on VLIW architecture"
    }, */
    youtube: {
        title: "VLIW Architecture Explained",
        url: " https://www.youtube.com/watch?v=3re04MxFtnU "
    },
    table: {
        title: "Comparison Table",
        headers: ["Feature", "VLIW Architecture", "Superscalar Architecture"],
        rows: [
            ["Instruction Execution", "Multiple operations per long instruction word", "Multiple instructions per cycle"],
            ["Parallelism Management", "Handled by the compiler", "Handled by the processor"],
            ["Hardware Complexity", "Simpler due to static scheduling", "Complex due to dynamic scheduling"],
            ["Compiler Dependency", "High", "Moderate"],
            ["Performance Efficiency", "High with well-optimized code", "High with efficient runtime scheduling"]
        ]
    },
    additionalResources: [
      {
        "title": "VLIW Architecture – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/very-long-instruction-word-vliw-architecture/?utm_source=chatgpt.com"
      },
      {
        "title": "Very Long Instruction Word – Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Very_long_instruction_word?utm_source=chatgpt.com"
      },
      {
        "title": "What is the VLIW Architecture? – TutorialsPoint",
        "url": "https://www.tutorialspoint.com/what-is-the-vliw-architecture?utm_source=chatgpt.com"
      }
    ]
        }
      ],
  },
{
  id: "chapter5",
    title: "Array and Vector Processors in Parallel Computing",
      topics: [
        {
          id: "topic19",
          title: "Array and vector processors",
          completed: false,
          co: "PCC-CS402.CO5",
          description: "This module explores array and vector processors, their architecture, working principles, and how they enhance parallel processing capabilities.",
    objectives: [
        "Understand the concept of array and vector processors",
        "Learn how these processors achieve data-level parallelism",
        "Explore the differences between array and vector processing",
        "Analyze the efficiency and applications of these processors",
        "Understand the challenges and optimization techniques for array and vector processors"
    ],
    keyPoints: [
        "Array processors use multiple processing elements to execute operations on different data sets simultaneously.",
        "Vector processors execute the same operation on multiple data elements in a single instruction.",
        "Both architectures are designed to improve performance in tasks with high data parallelism.",
        "Array processors are typically implemented in SIMD (Single Instruction, Multiple Data) architecture.",
        "Vector processors rely on vector registers to handle large data sets efficiently.",
        "These processors excel in scientific computing, graphics, and machine learning applications.",
        "Performance heavily depends on data alignment and the ability to parallelize operations.",
        "Challenges include handling memory bandwidth, synchronization, and load balancing."
    ],
    image: {
        url: "https://www.teach-ict.com/as_as_computing/ocr/H447/F453/3_3_3/parallel_processors/miniweb/images/array-processor.gif",
        alt: "Diagram illustrating array and vector processor architectures"
    },
    /*video: {
        url: "array-vector-processors-video.mp4",
        type: "mp4",
        alt: "Detailed video on array and vector processors"
    }, */
    youtube: {
        title: "Array and Vector Processors Explained",
        url: " https://www.youtube.com/watch?v=DGc_HEuaJhk"
    },
    table: {
        title: "Comparison Table",
        headers: ["Feature", "Array Processors", "Vector Processors"],
        rows: [
            ["Parallelism Type", "Multiple processing elements", "Single processing unit with vector registers"],
            ["Instruction Execution", "One instruction for multiple data sets", "One instruction for vector operations"],
            ["Architecture", "SIMD", "Vector-based"],
            ["Efficiency", "High for structured data", "High for large data sets"],
            ["Complexity", "Higher due to multiple processing units", "Simpler with specialized vector registers"]
        ]
    },
    additionalResources: [
      {
        "title": "Array and Vector Processing – Teach-ICT",
        "url": "https://www.teach-ict.com/as_as_computing/ocr/2016/AS2016/1.1.2/parallel/miniweb/pg3.htm?utm_source=chatgpt.com"
      },
      {
        "title": "Vector Processor vs Scalar Processor – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/vector-processor-vs-scalar-processor/?utm_source=chatgpt.com"
      },
      {
        "title": "Vector (Array) Processor and its Types – Studytonight",
        "url": "https://www.studytonight.com/computer-architecture/array-processor?utm_source=chatgpt.com"
      },
      {
        "title": "Vector Processor – Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Vector_processor?utm_source=chatgpt.com"
      }
    ]
        }
      ],
  },
{
  id: "chapter6",
    title: "Multiprocessor and Non-von Neumann Architectures",
      topics: [
        {
          id: "topic20",
          title: "Multiprocessor architecture: taxonomy of parallel architectures",
          completed: false,
          co: "PCC-CS402.CO6",
          description: "This module provides an in-depth exploration of multiprocessor architecture and the various classifications of parallel architectures.",
          objectives: [
              "Understand the concept and need for multiprocessor architectures",
              "Explore different types of parallel architectures",
              "Learn about the taxonomy of parallel computing systems",
              "Analyze the efficiency and scalability of multiprocessor systems",
              "Understand the challenges and optimization techniques for parallel architectures"
          ],
          keyPoints: [
              "Multiprocessor systems use multiple CPUs to execute multiple instructions simultaneously.",
              "Parallel architectures enhance computing performance by dividing tasks across multiple processors.",
              "Flynn's taxonomy classifies parallel systems into SISD, SIMD, MISD, and MIMD architectures.",
              "Shared memory and distributed memory are two primary types of multiprocessor configurations.",
              "Scalability and synchronization are critical for the efficiency of parallel architectures.",
              "Load balancing and communication overhead impact the performance of multiprocessor systems.",
              "Cache coherence and memory consistency models are vital in shared memory architectures.",
              "Advanced techniques like hyper-threading and multicore processors enhance parallelism."
          ],
          image: {
              url: "https://www.researchgate.net/profile/Foteini-Strati-2/publication/358119371/figure/fig1/AS:1116456372699137@1643195350458/A-taxonomy-of-parallel-processor-architectures.ppm",
              alt: "Diagram illustrating different types of parallel architectures"
          },
          /*video: {
              url: "parallel-architecture-video.mp4",
              type: "mp4",
              alt: "Detailed video on multiprocessor architectures"
          },*/
          youtube: {
              title: "Multiprocessor Architectures Explained",
              url: " https://www.youtube.com/watch?v=qEx2fV9qrcI "
          },
          table: {
              title: "Comparison Table",
              headers: ["Feature", "Shared Memory Architecture", "Distributed Memory Architecture"],
              rows: [
                  ["Memory Access", "All processors share a global memory", "Each processor has its own local memory"],
                  ["Communication", "Through shared memory", "Through message passing"],
                  ["Synchronization", "Easier with shared variables", "Requires explicit message synchronization"],
                  ["Scalability", "Limited by memory contention", "Highly scalable"],
                  ["Programming Complexity", "Simpler", "More complex due to message passing"]
              ]
          },
          additionalResources: [
            {
              "title": "Flynn's Taxonomy – Wikipedia",
              "url": "https://en.wikipedia.org/wiki/Flynn%27s_taxonomy?utm_source=chatgpt.com"
            },
            {
              "title": "Computer Architecture | Flynn's Taxonomy – GeeksforGeeks",
              "url": "https://www.geeksforgeeks.org/computer-architecture-flynns-taxonomy/?utm_source=chatgpt.com"
            },
            {
              "title": "Taxonomy of Parallel Computers – Cornell Virtual Workshop",
              "url": "https://cvw.cac.cornell.edu/parallel/hpc/taxonomy-parallel-computers?utm_source=chatgpt.com"
            },
            {
              "title": "Multiprocessor System Architecture – Wikipedia",
              "url": "https://en.wikipedia.org/wiki/Multiprocessor_system_architecture?utm_source=chatgpt.com"
            },
            {
              "title": "Flynn's Taxonomy and Classification of Parallel Systems – Fiveable",
              "url": "https://library.fiveable.me/parallel-and-distributed-computing/unit-2/flynns-taxonomy-classification-parallel-systems/study-guide/Ohzf44x4HCtFZRjK?utm_source=chatgpt.com"
            }
          ]
        },
        {
          id: "topic21",
          title: "Centralized shared-memory architecture: synchronization, memory consistency, interconnection networks",
          completed: false,
          co: "PCC-CS402.CO6",
          description: "This module provides a detailed exploration of centralized shared-memory architecture, its synchronization mechanisms, memory consistency models, and the role of interconnection networks.",
          objectives: [
              "Understand the concept and design of centralized shared-memory architecture",
              "Learn about synchronization techniques for multiprocessor systems",
              "Explore different memory consistency models and their importance",
              "Analyze the role of interconnection networks in shared-memory systems",
              "Understand the challenges of maintaining coherence and consistency"
          ],
          keyPoints: [
              "Centralized shared-memory architecture enables multiple processors to access a single global memory.",
              "Synchronization ensures that concurrent processes operate correctly without conflicts.",
              "Memory consistency models define the expected behavior of memory operations in a multiprocessor system.",
              "Interconnection networks facilitate efficient communication between processors and memory.",
              "Bus-based and switch-based interconnection networks are common in shared-memory systems.",
              "Cache coherence protocols like MESI help maintain a consistent view of memory across caches.",
              "Scalability of centralized shared-memory architecture is often limited by memory contention.",
              "Barrier synchronization and spinlocks are common techniques for coordinating parallel processes."
          ],
          image: {
              url: "https://images.slideplayer.com/34/10161132/slides/slide_3.jpg",
              alt: "Diagram illustrating centralized shared-memory architecture"
          },
         /* video: {
              url: "shared-memory-architecture-video.mp4",
              type: "mp4",
              alt: "Detailed video on centralized shared-memory architecture"
          },*/
          youtube: {
              title: "Shared-Memory Architecture Explained",
              url: " https://www.youtube.com/watch?v=BUFbnisqkAM "
          },
          table: {
              title: "Comparison Table",
              headers: ["Feature", "Centralized Shared-Memory Architecture", "Distributed Memory Architecture"],
              rows: [
                  ["Memory Access", "All processors share a single global memory", "Each processor has its own local memory"],
                  ["Communication", "Through shared memory", "Through message passing"],
                  ["Synchronization", "Easier with shared variables", "Requires explicit message synchronization"],
                  ["Consistency", "Maintained through coherence protocols", "No global consistency requirement"],
                  ["Scalability", "Limited by memory contention", "Highly scalable"],
                  ["Programming Complexity", "Simpler", "More complex due to message passing"]
              ]
          },
          additionalResources: [
            {
              "title": "Centralized Shared-Memory Architectures – ECE UNM",
              "url": "https://ece-research.unm.edu/jimp/611/slides/chap8_2.html?utm_source=chatgpt.com"
            },
            {
              "title": "Synchronization, Memory Consistency Models, and MP Example – UC Berkeley",
              "url": "https://people.eecs.berkeley.edu/~pattrsn/252F96/Lecture19.pdf?utm_source=chatgpt.com"
            },
            {
              "title": "Shared Memory Architectures – Fiveable",
              "url": "https://library.fiveable.me/parallel-and-distributed-computing/unit-2/shared-memory-architectures/study-guide/JUXzwFyTO97WUwOP?utm_source=chatgpt.com"
            },
            {
              "title": "Multiprocessors and Thread-Level Parallelism – George Mason University",
              "url": "https://cs.gmu.edu/~menasce/cs465/slides/CAQA5e_ch5.pdf?utm_source=chatgpt.com"
            },
            {
              "title": "Shared Memory and Shared Memory Consistency – University of Ottawa",
              "url": "https://www.site.uottawa.ca/~mbolic/elg7187/Josip_assignment_elg7187_columns_corrected.pdf?utm_source=chatgpt.com"
            }
          ]
        },
        {
          id: "topic22",
          title: "Distributed shared-memory architecture. Cluster computers.",
          completed: false,
          co: "PCC-CS402.CO6",
          description: "This module explores the concepts of distributed shared-memory architecture and cluster computing, highlighting their design principles, synchronization methods, and performance considerations.",
    objectives: [
        "Understand the concept and design of distributed shared-memory (DSM) architecture",
        "Learn about cluster computing and its applications",
        "Explore synchronization techniques in DSM systems",
        "Analyze memory consistency models in distributed environments",
        "Understand the challenges and solutions for data coherence in DSM systems",
        "Examine interconnection networks used in distributed architectures"
    ],
    keyPoints: [
        "Distributed shared-memory architecture allows multiple processors to access a shared logical memory that is physically distributed.",
        "Cluster computers consist of interconnected independent systems working together as a single entity.",
        "DSM systems use message passing or remote memory access for data sharing.",
        "Consistency models like strict, sequential, and release consistency ensure proper memory behavior across distributed nodes.",
        "Synchronization methods like barriers, locks, and semaphores manage concurrent processes.",
        "Scalability and fault tolerance are key advantages of cluster computing.",
        "Interconnection networks like crossbar, mesh, and hypercube topologies facilitate efficient communication.",
        "Techniques like memory replication and caching optimize performance in DSM systems."
    ],
    image: {
        url: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200611194511/3331.png",
        alt: "Diagram illustrating distributed shared-memory architecture"
    },
    /*video: {
        url: "dsm-architecture-video.mp4",
        type: "mp4",
        alt: "Detailed video on distributed shared-memory architecture"
    }, */
    youtube: {
        title: "Distributed Shared-Memory Systems Explained",
        url: " https://www.youtube.com/watch?v=fmDfKw7AEQU"
    },
    table: {
        title: "Comparison Table",
        headers: ["Feature", "Distributed Shared-Memory Architecture", "Cluster Computers"],
        rows: [
            ["Memory Access", "Shared logical memory across distributed nodes", "Independent memory for each node"],
            ["Communication", "Message passing or remote memory access", "High-speed interconnect networks"],
            ["Synchronization", "Complex due to distributed nature", "Simpler with shared files or databases"],
            ["Consistency", "Maintained through coherence protocols", "Depends on distributed file systems"],
            ["Scalability", "High, but requires efficient coordination", "Highly scalable with proper load balancing"],
            ["Fault Tolerance", "Improved through data replication", "Redundant nodes ensure system reliability"]
        ]
    },
    additionalResources: [
      {
        "title": "Distributed Shared Memory – Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Distributed_shared_memory?utm_source=chatgpt.com"
      },
      {
        "title": "Architecture of Distributed Shared Memory (DSM) – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/architecture-of-distributed-shared-memorydsm/?utm_source=chatgpt.com"
      },
      {
        "title": "An Overview of Cluster Computing – GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/an-overview-of-cluster-computing/?utm_source=chatgpt.com"
      },
      {
        "title": "Shared and Distributed Memory in Parallel Computing – Medium",
        "url": "https://afzalbadshah.medium.com/shared-and-distributed-memory-in-parallel-computing-4478468799f9?utm_source=chatgpt.com"
      }
    ]
        },
        {
            "id": "topic23",
            "title": "Non-Von Neumann Architectures: Dataflow, Reduction, and Systolic",
            "completed": false,
            "co": "PCC-CS402.CO4",
            "description": "This module explores non-Von Neumann computer architectures, including dataflow computers, reduction computer architectures, and systolic architectures. It focuses on their operational principles, advantages, and applications, contrasting them with the traditional Von Neumann model.",
            "objectives": [
              "Understand the limitations of the Von Neumann architecture.",
              "Learn the principles of dataflow computing and its execution model.",
              "Explore the concept of reduction computer architectures and their demand-driven execution.",
              "Analyze the operational characteristics and applications of systolic architectures.",
              "Compare and contrast these non-Von Neumann architectures with the traditional Von Neumann model.",
              "Evaluate the potential benefits and challenges of these alternative architectures."
            ],
            "keyPoints": [
              "Von Neumann architecture's sequential execution can lead to performance bottlenecks.",
              "Dataflow computers execute instructions based on data availability, not program counter.",
              "Dataflow architectures excel in parallel processing and avoid control dependencies.",
              "Reduction architectures use demand-driven execution, evaluating expressions only when needed.",
              "Reduction architectures are suitable for functional programming and parallel evaluation.",
              "Systolic architectures use pipelined data flow for specialized computations, often in signal processing.",
              "Systolic arrays achieve high throughput by reusing data within a network of processing elements.",
              "Non-Von Neumann architectures address specific computational needs and offer parallelism.",
              "These architectures often require specialized programming models and hardware."
            ],
            "image": {
              "url": "https://miro.medium.com/v2/resize%3Afit%3A1200/0%2AFn7GvNHDHmj17lT6.png",
              "alt": "Diagram illustrating dataflow, reduction, and systolic architectures."
            },
            /*"video": {
              "url": "non-von-neumann-architectures.mp4",
              "type": "mp4",
              "alt": "Detailed video explaining dataflow, reduction, and systolic architectures and their differences from Von Neumann."
            },*/
            "youtube": {
              "title": "Non-Von Neumann Architectures Explained",
              "url": "https://www.youtube.com/watch?v=OfqzoQ9Kw9k&t=7"
            },
            "table": {
              "title": "Comparison of Non-Von Neumann Architectures",
              "headers": ["Architecture", "Execution Model", "Key Features", "Applications", "Challenges"],
              "rows": [
                ["Dataflow", "Data-driven", "Parallel execution based on data availability, absence of program counter.", "Signal processing, image processing, scientific computing.", "Complexity in handling control flow and memory management."],
                ["Reduction", "Demand-driven", "Execution triggered by the need for results, recursive function evaluation.", "Functional programming, symbolic computation, AI.", "Overhead of demand propagation and memory management."],
                ["Systolic", "Pipelined data flow", "Specialized arrays of processing elements for repetitive computations.", "Signal processing, matrix operations, pattern recognition.", "Limited flexibility, specialized hardware design."]
              ]
            },
            "additionalResources": [
              {
                "title": "Dataflow Architecture – Wikipedia",
                "url": "https://en.wikipedia.org/wiki/Dataflow_architecture?utm_source=chatgpt.com"
              },
              {
                "title": "Parallel Processing – Systolic Arrays – GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/parallel-processing-systolic-arrays/?utm_source=chatgpt.com"
              }
            ]
          }
        
      ],
  }
];