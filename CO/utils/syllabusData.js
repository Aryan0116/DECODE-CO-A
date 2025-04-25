const initialSyllabusData = [
  {
    id: "chapter1",
    title: "Fundamentals of Computer Organisation",
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
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYG6qCP3LZh-4WR-1IRD1YrFKBkENy1MO2g&s",
          alt: "Diagram illustrating fixed and floating point representation"
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
        description: "In computing, underflow refers to a situation where the result of an arithmetic operation is smaller than the smallest value that can be represented within the given data type or format. Overflow happens when a calculation produces a number larger than the maximum value a data type can hold. Adders are digital circuits used to perform addition of binary numbers. There are mainly two types: Half Adders and Full Adders.",
        objectives: [
          "Understand the limitations of data representation to prevent incorrect results in calculations.",
          "Learn to identify when overflow or underflow occurs and implement mechanisms to handle them.",
          "Help in designing systems that behave predictably even under extreme numerical operations.",
          "Develop the ability to implement or use built-in exceptions related to overflow/underflow.",
          "Understand how bits are added sequentially.",
          "Understand how to speed up addition by predicting carry bits in advance.",
          "Analyze how generate (G) and propagate (P) signals help in parallel computation of carry."
        ],
        keyPoints: [
          "Overflow and underflow are errors that occur when a program tries to store a value outside the valid range of a data type. ",
          "Overflow happens when the value is too large, and underflow happens when the value is too small. These errors can lead to incorrect calculations or unexpected behavior. ",
          "Underflow occurs when a number is smaller than the minimum value that a data type can hold.",
          "A Binary Adder is a digital circuit that performs the arithmetic binary addition of two numbers for the logic operations and laws of Boolean Algebra.",
          "The adders are used in combinational circuit design and the microprocessors arithmetic logic unit (ALU) for calculating addresses.",
          "Half Adder is a digital circuit to calculate the arithmetic binary addition of two single-bit numbers. It is a circuit with two inputs and two outputs.",
          "For two single-bit binary numbers A and B, half adder produces two single-bit binary outputs S and C, where S is the Sum and C is the carry. ",
          "Full Adder is a digital circuit that adds three single-digit binary numbers. This is a three-input and two-output digital circuit.",
          "For three single-bit binary numbers A, B, and D; the full adder circuit generates two single-bit binary outputs S (Sum), and C (Carry)."
        ],
        image: {
          url: "https://www.researchgate.net/publication/349727409/figure/fig2/AS:997143909249028@1614749042716/Full-adder-circuit-diagram-and-truth-table-where-A-B-and-C-in-are-binary-inputs.png",
          alt: "Full Adder Truth Table"
        },
       
        youtube: {
          title: "Overflow and Underflow in Signed and Unsigned Numbers",
          url: "https://www.youtube.com/watch?v=7towQUO9aZI"
        },
        
      additionalResources: [
        {
          title: "Overflow and Underflow",
          url: "https://www.educative.io/answers/what-are-overflow-and-underflow"
        },
        
        {
          title: "Adders in digital Electronics",
          url: "https://testbook.com/digital-electronics/adders"
        }
      ]
},

{
  id: "topic5",
    title: "Design of ALU.",
      completed: false,
        co: "PCC-CS302.CO2",
        description: "ALU derives its name because it performs arithmetic and logical operations. A simple ALU design is constructed with Combinational circuits. ALUs that perform multiplication and division are designed around the circuits developed for these operations while implementing the desired algorithm. More complex ALUs are designed for executing Floating point, Decimal operations and other complex numerical operations. These are called Coprocessors and work in tandem with the main processor.",
        objectives: [
            "Learn how the ALU performs arithmetic and logical operations which are central to processor functionality.",
            "Gain insight into how binary data is manipulated within a computer system.",
            "Understand how ALU design influences the type and complexity of instructions a processor can execute.",
            "Understand how ALU design affects processing speed, area, and power consumption in a CPU.",
            "Learn how ALUs contribute to overflow detection, sign bit handling, and status flag setting in CPUs."
        ],
        keyPoints: [
            "ALU stands for Arithmetic Logic Unit, a core component of a computer's CPU responsible for performing arithmetic and logical operations.",
            "The ALU executes a wide range of arithmetic and logical operations, including addition, subtraction, multiplication, division, and various logic operations like AND, OR, XOR.",
            "ALU is a basic building block for more advanced components like Floating Point Units (FPU) and Vector Processing Units.",
            "It can perform bitwise operations on binary numbers, as well as mathematical operations like addition and subtraction. ",
            "The design specifications of ALU are derived from the Instruction Set Architecture. The ALU must have the capability to execute the instructions of ISA.",
            "The ALU contains a variety of electrical input and output connections, which result in the digital signals being cast between the ALU and the external electronics.",
            "It has the ability to carry out instructions on a large number of items and has a high level of precision.",
            "The inconsistencies in latencies are a known drawback of ALU."
        ],
        image: {
            url: "https://res.cloudinary.com/witspry/image/upload/witscad/public/content/courses/computer-architecture/primitive-alu-supporting-and-or-add-function.png",
            alt: "Diagram illustrating the architecture of ALU"
        },
        
        youtube: {
            title: "Arithmetic Logic Unit",
            url: " https://www.youtube.com/watch?v=M3Xc8VtheXw"

        },
        table: {
            title: "ALU Operation Table",
            headers: ["Opcode", "Operation", "Description"],
            rows: [
                ["0000", "AND", "Logical AND between A and B"],
                ["0001", "OR", "Logical OR between A and B"],
                ["0010", "ADD", "A + B"],
                ["0110", "SUBTRACT", "A - B"],
                ["0111", "SET ON LESS THAN (SLT)", "If A < B, output = 1 else 0"],
                ["1100", "NOR",  "Logical NOR between A and B"]
            ]
        },
        additionalResources: [
            {
                title: "Arithmetic Logic Unit Design",
                url: "https://witscad.com/course/computer-architecture/chapter/arithmetic-logic-unit-design"
            },
            {
                title: "Design of ALU",
                url: "http://vlabs.iitkgp.ac.in/coa/exp8/index.html"
            },
            {
                title: "Combinational Logic Circuits",
                url: "https://testbook.com/electrical-engineering/combinational-logic-circuits"
            }
        ]
},

{
  id: "topic6",
    title: "Fixed point multiplication - Booth's algorithm.",
      completed: false,
        co: "PCC-CS302.CO2",
        description: "Booth's algorithm is an efficient method for multiplying signed binary numbers in computer architecture, reducing the number of additions and subtractions required compared to traditional multiplication techniques. It leverages the two's complement representation of numbers and examines consecutive bits of the multiplier to determine whether to add, subtract, or shift the multiplicand. ",
        objectives: [
            "Learn how Booth's algorithm simplifies multiplication involving both positive and negative numbers using 2s complement.",
            "Learn how multiplication can be implemented at the hardware level using shift and add/subtract operations, bit by bit.",
            "Build the base to understand more complex multiplication techniques like Wallace Tree, Array Multipliers, and Floating-Point Multiplication.",
            "Gain knowledge of multiplying numbers with a fixed number of fractional bits, commonly used in embedded systems and digital signal processing."
        ],
        keyPoints: [
            "Booth's algorithm is an efficient method for multiplying signed binary numbers in computer architecture.",
            "Booth's algorithm is designed to handle both positive and negative numbers represented in two's complement.",
            "It reduces the number of arithmetic operations, especially for multipliers with long strings of consecutive 1s. ",
            "Superscalar architectures improve performance by using multiple pipelines to execute several instructions simultaneously.",
            "Modern processors often combine pipelining with advanced techniques like out-of-order execution and speculative execution to further optimize efficiency."
        ],
        image: {
            url: "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Blogs/home/booth-algorithm-in-computer-organization-image2.png",
            alt: "Diagram illustrating instruction and arithmetic pipelines"
        },
        
        youtube: {
            title: "Booth Multiplication Algorithm",
            url: "https://www.youtube.com/watch?v=QFXaddi-Ag8"
        },
        table: 
        {
          table1:{
          
            
            title: "Booths Algorithm Initial Setup for an example of 3X(-4)",
            headers: ["Term", "Binary (4-bit)"],
            rows: [
                ["Multiplicand (M)", "0011"],
                ["Multiplier (Q)", "1100"],
                ["Accumulator (A)", "0000"],
                ["Q-1", "0"],
                ["Bit size", "4"]
            ]
         
      },
      table2:
          {
            title: "Booths Algorithm Execution Table",
          headers: ["Cycle", "Q₀ Q₋₁", "Operation", "A", "Q", "Q-1", "Action Summary"],
          rows: [
              ["0 (Init)", "0 0", "—", "0000", "1100", "0", "Initial values"],
              ["1", "0 0", "No Operation", "0000", "1100", "0", "No action → ARS next"],
              ["→ Shift", "—", "Arithmetic Right Shift", "0000", "0110", "0", "Shift all right"],
              ["2", "0 0", "No Operation", "0000", "0110", "0", "No action → ARS next"],
              ["→ Shift", "—", "Arithmetic Right Shift", "0000", "0011", "0", "Shift all right"],
              ["3", "1 0", "A = A - M", "1101", "0011", "0", "Subtract 0011 → ARS next"],
              ["→ Shift", "—", "Arithmetic Right Shift", "1110", "1001", "1", "Shift with sign extension"],
              ["4", "1 1", "No Operation", "1110", "1001", "1", "No action → ARS next"],
              ["→ Shift", "—", "Arithmetic Right Shift", "1111", "0100", "1", "Final Shift"]
          ]
        },
      table3:
        {
          title: "Booth's Algorithm Final Result",
    headers: ["Final A", "Final Q", "Combined (A + Q)", "Decimal Value"],
    rows: [
        ["1111", "0100", "11110100", "-12 (in 8-bit 2s complement)"]
    ]
        }
      },
      
      
        additionalResources: [
            {
                title: "Booth's Multiplication Algorithm",
                url: "https://www.ccbp.in/blog/articles/booth-multiplication-algorithm-in-computer-organization#:~:text=The%20Booth%20Algorithm%20is%20a,number%20of%20additions%20and%20subtractions."
            
            }
        ]
      },
{
  id: "topic7",
    title: "Fixed point division - Restoring and non-restoring algorithms.",
      completed: false,
        co: "PCC-CS302.CO2",
        ddescription: "Fixed-point division uses binary arithmetic to divide numbers at the hardware level. Restoring algorithm performs division by repeated subtraction and restores the remainder if negative. Non-restoring avoids restoration by using conditional addition or subtraction. Both methods are essential for efficient arithmetic operations in digital systems, especially within the CPU's ALU.",
        objectives: [
            "To learn how division operations are actually performed by digital circuits, without using high-level programming constructs like / operator.",
            "To study the two major algorithms for fixed-point division: Restoring Division Algorithm and Non-Restoring Division Algorithm.",
            "To compare the efficiency and complexity of restoring vs. non-restoring methods",
            "Helps in developing logical thinking and algorithmic problem-solving skills"
        ],
        keyPoints: [
            "The Division of two fixed-point binary numbers in the signed-magnitude representation is done by the cycle of successive compare, shift, and subtract operations.",
            "Two types of algorithms are used for division of unsigned numbers:Restoring and non-restoring algorithms.",
            "The Restoring Division Algorithm is an integral procedure employed when calculating division on unsigned numbers.",
            " In this algorithm, one uses the register to store the dividend, then shifting and subtraction, and if the quotient is negative, the register value is restored with the dividend, and this process continues to refine the quotient and remainder.",
            "The non-restoring division is a division technique for unsigned binary values that simplifies the procedure by eliminating the restoring phase.",
            "The non-restoring division is simpler and more effective than restoring division since it just employs addition and subtraction operations instead of restoring division."
        ],
        image: {
            url: "https://res.cloudinary.com/witspry/image/upload/witscad/public/content/courses/computer-architecture/flowchart-for-the-non-restoring-division.png",
            alt: "Non-Restoring Algorithm"
        },
        youtube: {
            title: "Restoring Algorithm",
            url: " https://www.youtube.com/watch?v=PzV6gYpVLuc"
        },
        table: {
          table1:{
            title: " Divide 7 (0111) by 3 (0011) using 4-bit registers using Non-Restoring Algorithm",
    headers: ["Register", "Value", "Description"],
    rows: [
      ["Dividend", "0111", "Binary representation of 7"],
      ["Divisor", "0011", "Binary representation of 3"],
      ["A", "0000", "Accumulator (initially 0)"],
      ["Q", "0111", "Quotient (initially dividend)"],
      ["M", "0011", "Divisor"],
      ["Steps", "4", "Number of bits in Q"]
    ]
        },
        table2: {
          title: "Division Algorithm Steps Table",
          headers: ["Step", "Operation", "A (Accumulator)", "Q (Quotient)", "Action & Remarks"],
          rows: [
            ["0", "Initial Setup", "0000", "0111", "A = 0000, Q = 0111, M = 0011"],
            ["1", "Left Shift (A-Q)", "0000 0111 → 0000 1110", "", "Shift left A and Q together"],
            ["", "A = A - M (0000 - 0011)", "1101", "1110", "A becomes negative, Q₀ = 0"],
            ["2", "Left Shift (A-Q)", "1101 1110 → 1011 1100", "", "Shift left"],
            ["", "A = A + M (1011 + 0011)", "1110", "1100", "A still negative, Q₀ = 0"],
            ["3", "Left Shift (A-Q)", "1110 1100 → 1101 1000", "", "Shift left"],
            ["", "A = A + M (1101 + 0011)", "0000", "1000", "A becomes zero, Q₀ = 1"],
            ["4", "Left Shift (A-Q)", "0000 1000 → 0001 0000", "", "Shift left"],
            ["", "A = A - M (0001 - 0011)", "1110", "0000", "A becomes negative, Q₀ = 0"],
            ["End", "A is negative → A = A + M", "1110 + 0011 = 0001", "0000", "Restore A"]
          ]
        },
        table3: {
          title: "Final Result Table",
          headers: ["Output", "Value", "Decimal Value", "Description"],
          rows: [
            ["Q (Quotient)", "0010", "2", "Final Quotient"],
            ["A (Remainder)", "0001", "1", "Final Remainder"]
          ]
        }

      },
        additionalResources: [
            {
                title: "Restoring Division Algorithm for Unsigned Integer",
                url: "https://www.tpointtech.com/restoring-division-algorithm-for-unsigned-integer"
            },
           
            {
                title: "Non-Restoring Division For Unsigned Integer",
                url: "https://www.geeksforgeeks.org/non-restoring-division-unsigned-integer/"
            }
        ]
},

{
  id: "topic8",
    title: "Floating point - IEEE 754 standard.",
      completed: false,
        co: "PCC-CS302.CO2",
        description: "The IEEE Standard for Floating-Point Arithmetic (IEEE 754) is a technical standard for floating-point computation which was established in 1985 by the Institute of Electrical and Electronics Engineers (IEEE). The standard addressed many problems found in the diverse floating point implementations that made them difficult to use reliably and reduced their portability.",
        objectives: [
            "Learn how real numbers (decimals) are represented in binary using the floating-point format.",
            "Explore the two common formats: Single Precision (32-bit) and Double Precision (64-bit).",
            "Recognize how finite precision leads to rounding errors and learn about different rounding modes.",
            "Understand the concepts of normalized, denormalized, zero, infinity, and NaN (Not a Number) representations."
        ],
        keyPoints: [
            "Given a fixed number of digits, the floating-point representation covers a wider range of values compared to a fixed-point representation.",
            "IEEE 754 numbers are divided into two based on the above three components: single precision and double precision.",
            "Supports normalized and denormalized numbers for a wider range of values.",
            "Single Precesion: Let the sign bit (31) be s, the exponent (30-23) be e and the mantissa (significand or fraction) (22-0) be m. The valid range of the exponents is 1 to 254",
            "In single-precision and double-precision formats, there's an assumed leading 1 in the fractional part. The fractional part is called the significand (sometimes known as the mantissa). This leading 1 isn't stored in memory, so the significands are actually 24 or 53 bits, even though one less bit gets stored. The double-extended-precision format actually stores this bit.",
            "Speculative Execution predicts and executes instructions ahead of time, reducing control hazards.",
            "The exponents are biased by half of their possible value. It means you subtract this bias from the stored exponent to get the actual exponent. If the stored exponent is less than the bias, it's actually a negative exponent."
            
        ],
        image: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxX2wNE6ujBs622CUfbtZctssHfF9fM2o13pmyd974JpjOlno5jNaXLztErTrMhTmWw4&usqp=CAU",
            alt: "IEEE 754 Floating Point Standard"
        },
        
        youtube: {
            title: "Floating Point Numbers: IEEE 754 Standard",
            url: " https://www.youtube.com/watch?v=e_J9lXnU_vs"
        },
        table: {
          title: "Floating Point Representation Table",
          headers: ["TYPES", "SIGN", "BIASED EXPONENT", "NORMALISED MANTISA", "BIAS"],
          rows: [
            ["Single precision", "1 (31st bit)", "8 (30-23)", "23 (22-0)", "127"],
            ["Double precision", "1 (63rd bit)", "11 (62-52)", "52 (51-0)", "1023"]
          ]
        },
      
        additionalResources: [
            {
                title: "IEEE Standard 754 Floating Point Numbers",
                url: "https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/"
            },
            {
                title: "IEEE 754 Floating-Point Format",
                url: "https://people.iith.ac.in/rogers/pds_theory/lect15_truncated.pdf"
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
          title: "Instruction Formats and Instruction Sets",
          completed: false,
          co: "PCC-CS302.CO3",
          description: "Instruction formats define the structure of machine language instructions, specifying how fields like opcode, operands, and addressing modes are arranged. Instruction sets refer to the collection of instructions a processor can execute, including arithmetic, control, and data transfer operations. Both are essential for determining CPU functionality and efficiency.",
          objectives: [
              "Learn how processors interpret and execute machine-level instructions.",
              "Comprehend the structure of instructions (opcode, operands, etc.) and how they are formatted.",
              "To grasp how instruction sets impact system performance and design.",
              "To optimize assembly language programming and understand the trade-offs in instruction set design.",
              "To gain insight into how software interacts with hardware at a fundamental level"
          ],
          keyPoints: [
              "Instruction formats refer to the way instructions are encoded and represented in machine language.",
              "There are several types of instruction formats, including zero, one, two, and three-address instructions.",
              "Zero Address Instructions: These instructions do not specify any operands or addresses. Instead, they operate on data stored in registers or memory locations implicitly defined by the instruction.",
              "One Address Instructions: These instructions specify one operand or address, which typically refers to a memory location or register.",
              "Two Address Instructions: These instructions specify two operands or addresses, which may be memory locations or registers.",
              "Overall, the choice of instruction format depends on the specific requirements of the computer architecture and the trade-offs between code size, execution time, and flexibility.",
              "An instruction set is a group of commands for a central processing unit (CPU) in machine language.",
              "The term can refer to all possible instructions for a CPU or a subset of instructions to enhance its performance in certain situations.",
              "The instructions are made up of a specific number of bits. For instance, The CPU's instructions might be 8 bits",
              "Complex instruction set computer. CISC processors have an additional microcode or microprogramming layer where instructions act as small programs.",
              "Reduced instruction set computer. RISC architecture has hard-wired control. It does not require microcode, but has a greater base instruction set.",
              "Instruction sets work with other important parts of a computer, such as compilers and interpreters. "
          ],
          image: {
              url: "https://www.learncomputerscienceonline.com/wp-content/uploads/2021/04/Instruction-Addressing-Modes.jpg",
              alt: "Instruction Format"
          },
          
          youtube: {
              title: "What is Instruction Format?",
              url: "https://www.youtube.com/watch?v=WAO_W6Hpzyk "
          },
          table: {
            title: "Instruction Formats Table",
            headers: ["Type", "Description", "Example", "No. of Addresses"],
            rows: [
              [
                "Zero-address",
                "Uses stack. Operands are implicitly on top of the stack.",
                "ADD",
                "0"
              ],
              [
                "One-address",
                "Uses accumulator. One operand is specified, other is implicit.",
                "ADD A",
                "1"
              ],
              [
                "Two-address",
                "Specifies two operands. One is usually the destination.",
                "MOV A, B",
                "2"
              ],
              [
                "Three-address",
                "Specifies all operands: source1, source2, and destination.",
                "ADD A, B, C",
                "3"
              ],
              [
                "Register format",
                "Operands are registers only. Fastest operation.",
                "ADD R1, R2, R3",
                "Typically 3"
              ],
              [
                "Immediate format",
                "One operand is a constant (immediate value) given in instruction.",
                "MOV A, #5",
                "Varies (1–2)"
              ],
              [
                "Hybrid/Variable",
                "Format varies based on instruction type (e.g., R-type, I-type, etc.)",
                "Used in MIPS, ARM",
                "Varies"
              ]
            ]
          },
          additionalResources: [
              {
                  title: "Instruction Formats",
                  url: "https://www.geeksforgeeks.org/computer-organization-instruction-formats-zero-one-two-three-address-instruction/"
              },
              {
                  title: "Instruction Set",
                  url: "https://www.techtarget.com/whatis/definition/instruction-set"
              }
          ]
        },
          
        {
          id: "topic10",
          title: "Addressing Modes",
          completed: false,
          co: "PCC-CS302.CO3",
          description: "Addressing modes define how the operands of an instruction are specified or accessed in memory. They determine the method of operand retrieval, such as direct, indirect, immediate, register, or indexed modes. Addressing modes impact the flexibility and efficiency of a CPU by allowing various ways to access data during instruction execution.",
    objectives: [
        "Learn different ways operands can be accessed or specified by instructions.",
        "To understand how addressing modes affect memory access and system efficiency.",
        "To explore various addressing techniques, enabling flexible and powerful programming.",
        "Optimize the performance of programs by selecting appropriate addressing modes for different operations."
    ],
    keyPoints: [
        "Addressing modes are techniques used in computer architecture to specify the location of operands (data) required by an instruction. They define how the processor should interpret or locate the data to be operated upon.",
        "Immediate Addressing: Operand is directly specified in the instruction.",
        "Register Addressing: Operand is in a register.",
        "Direct Addressing: Instruction specifies the memory address of the operand.",
        "Indirect Addressing: Instruction refers to a memory location that contains the address of the operand.",
        "Indexed Addressing: Effective address is generated by adding a constant value to a register.",
        "These modes provide flexibility and efficiency in data access, allowing for various ways to specify operands.",
        "Thrashing occurs when excessive paging reduces CPU efficiency.",
        "Virtual memory enhances multitasking and process isolation.",
        "Page tables maintain the mapping between virtual and physical addresses.",
        "Hierarchical and inverted page tables optimize memory usage and lookup speed.",
        "Proper memory management prevents fragmentation and optimizes resource use."
    ],
    image: {
        url: "https://cdn.slidesharecdn.com/ss_thumbnails/addressingmodesof8086-180114170155-thumbnail.jpg?width=640&height=640&fit=bounds",
        alt: "Addressing Modes of 8086"
    },
    
    youtube: {
        title: "Addressing Modes",
        url: "https://www.youtube.com/watch?v=xfaxmrRr0Sc"
    },
    table: {
      title: "Addressing Modes Table",
      headers: ["Addressing Mode", "Description", "Example (Assembly)", "Effective Address (EA)", "Usage"],
      rows: [
        ["Immediate", "Operand is given directly in the instruction", "MOV R1, #5", "No address — operand is 5 itself", "Quick constants or fixed values"],
        ["Register", "Operand is in a CPU register", "MOV R1, R2", "No memory access — value in register R2", "Fast operations using CPU registers"],
        ["Direct", "Address of operand is explicitly mentioned in the instruction", "MOV R1, [500]", "EA = 500", "Access known memory locations"],
        ["Indirect", "Address field points to a memory location which holds the actual address", "MOV R1, [R2]", "EA = content of R2", "Dynamic data access"],
        ["Indexed", "EA is calculated by adding a constant (index) to a register", "MOV R1, [R2 + 5]", "EA = R2 + 5", "Array and table access"],
        ["Base Register", "Similar to indexed, but base address is held in a base register", "MOV R1, [Base + Offset]", "EA = Base + Offset", "Useful in segmented memory"],
        ["Relative", "EA is determined by adding offset to the program counter (PC)", "JMP LABEL", "EA = PC + offset", "Control flow, branching instructions"]
      ]
    },
    additionalResources: [
        {
            title: "Addressing Modes",
            url: "https://byjus.com/gate/addressing-modes-notes/"
        },
        {
            title: "Types of Addressing Modes",
            url: "https://www.tutorialspoint.com/what-are-the-types-of-addressing-modes"
        }
    ]
        }
      ],
  },
{
  id: "chapter4",
    title: "Memory Organization and CPU-Memory Intefacing",
      topics: [
        {
          id: "topic11",
          title: "Memory unit design with special emphasis on implementation of CPU-memory interfacing.",
          completed: false,
          co: "PCC-CS302.CO4",
          description: "Memory unit design focuses on organizing and managing memory components for efficient data storage and access. CPU-memory interfacing involves communication between the CPU and memory through buses, addressing schemes, and synchronization. Key concepts include memory-mapped I/O, data transfer mechanisms, and optimizing memory access using techniques like buffering and cache memory.",
    objectives: [
        "Understand the structure and organization of memory units in a computer system.",
        "Study the data flow within memory units and how memory is addressed and accessed.",
        "Analyze timing and synchronization issues, including memory access cycles and latency.",
        "Study memory-mapped I/O and how I/O devices are integrated into the CPU-memory system.",
        "Study the implementation of memory addressing schemes and how they ensure correct data retrieval.",
        "Understand how CPU and memory are physically connected"
    ],
    keyPoints: [
        "Memory organization in computer architecture refers to how memory is structured and accessed, encompassing its hierarchy and various types.",
        "A memory unit consists of data lines, address selection lines, and control lines that specify the direction of transfer.",
        "A memory unit is a collection of storage cells together with associated circuits needed to transform insformation in and out of the device.",
        "CPU-memory interfacing enables the CPU to read and write data and instructions from and to memory.",
        "This is accomplished through a system of buses, address decoding, and control signals, ensuring that the CPU and memory communicate effectively.",
        "The primary purpose of memory interfacing is to facilitate the transfer of data between the CPU and memory modules effectively.",
        "Address Bus: The address bus is a set of wires that carry memory addresses from the CPU to the memory module.",
        "Data Bus: The data bus is a set of wires that enable the bidirectional transfer of data between the CPU and memory module.",
        "Control Signals: These signals manage the flow of data between the CPU and memory, indicating whether it is a read operation, write operation or other control actions like enabling memory access.",
        "Memory Decoding: Memory decoding is the process of interpreting the address lines to select a specific memory location.",
        "Memory Types: Different memory technologies, such as SRAM (Static RAM) and DRAM (Dynamic RAM)",
        "Interfacing with I/O Devices: Memory interfacing also extends to communication between the CPU and input/output (I/O) devices, such as hard drives, solid-state drives, and peripherals."
    ],
    image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHarBOB6HJFWAH8FGeA-rKXD6SSEd2YNbw2A&s",
        alt: "CPU Memory Interfacing"
    },
   
    youtube: {
        title: "CPU Memory Interfacing",
        url: "https://www.youtube.com/watch?v=9ZSw0AAIp_g"
    },
    table: {
      title: "System Components and Their Functions Table",
      headers: ["Component", "Description", "Function"],
      rows: [
        ["Address Bus", "A set of lines used to carry the address to/from memory", "Carries the memory address for read/write operations"],
        ["Data Bus", "A set of lines used to carry data between the CPU and memory", "Transfers data to/from memory during read/write operations"],
        ["Control Bus", "A set of lines used to carry control signals", "Controls the timing, read/write operations, and memory access"],
        ["Memory Controller", "A hardware component that manages data transfer between CPU and memory", "Manages memory access, addressing, and timing synchronization"],
        ["Memory-Mapped I/O", "I/O devices mapped into the memory space", "Allows CPU to communicate with peripheral devices using memory addressing"],
        ["Memory Access Time", "Time taken to retrieve data from memory", "Impacts overall system performance and latency"],
        ["Cache Memory", "A small, fast memory located between the CPU and main memory", "Speeds up data access by storing frequently used data"]
      ]
    },
    additionalResources: [
        {
            title: "Computer - Memory Units",
            url: "https://www.tutorialspoint.com/computer_fundamentals/computer_memory_units.htm"
        },
        
        {
            title: "Memory and I/O Interfacing",
            url: "https://www.tpointtech.com/memory-and-io-interfacing"
        },
        {
            title: "Memory Interfacing",
            url: "https://www.prepbytes.com/blog/operating-system/memory-interfacing/"
        }
    ]
        },
        {
          id: "topic12",
          title: "Memory organization, static and dynamic memory, memory hierarchy, associative memory.",
          completed: false,
          co: "PCC-CS302.CO4",
          description: "Memory organization refers to the structured arrangement of memory for efficient data storage and access. Static and dynamic memory are primary types, with SRAM being faster and DRAM more compact. Memory hierarchy optimizes speed and cost using layered storage. Associative memory allows data retrieval based on content rather than address.",
    objectives: [
        "Understand how memory is structured and addressed in a computer system.",
        "Learn the distinction between primary, secondary, and cache memory.",
        "Analyze the trade-offs in terms of speed, cost, and capacity.",
        "Compare SRAM and DRAM in terms of speed, power consumption, density, and usage.",
        "Understand the concept of organizing memory in levels ",
        "Study locality of reference and how it affects memory performance.",
        "Understand how associative memory works by searching data by content rather than address.",
        "Learn its application in Translation Lookaside Buffers (TLB) and network routers."
    ],
    keyPoints: [
        "Memory organization in computer architecture refers to how memory is structured and accessed, encompassing its hierarchy and various types.",
        "This includes how data and instructions are stored, retrieved, and managed by the CPU, ranging from fast, small cache memory to slower but larger storage devices.",
        "Static and dynamic memory allocation are two approaches to managing memory in computer programs.",
        "Static memory allocation reserves memory at compile time, while dynamic memory allocation allows for memory allocation and deallocation during runtime.",
        "Memory hierarchy is arranging different kinds of storage present on a computing device based on speed of access.",
        "At the very top, the highest performing storage is CPU registers which are the fastest to read and write to.",
        "Next is cache memory followed by conventional DRAM memory, followed by disk storage with different levels of performance including SSD, optical and magnetic disk drives.",
        "An associative memory can be treated as a memory unit whose saved information can be recognized for approach by the content of the information itself instead of by an address or memory location.",
        "Associative memory is also known as Content Addressable Memory (CAM)."
    ],
    image: {
        url: "https://media.geeksforgeeks.org/wp-content/uploads/20250111112435920586/Memory-Hierarchy-Design.webp",
        alt: "Memory Hierarchy Design"
    },
   
    youtube: {
        title: "Instruction-Level Parallelism Explained",
        url: "https://www.youtube.com/watch?v=PujjqfUhtNo"
    },
    table: {
      title: "SRAM vs DRAM Comparison Table",
      headers: ["Feature", "SRAM", "DRAM"],
      rows: [
        ["Cell Design", "Flip-flop based", "Capacitor + transistor"],
        ["Speed", "Faster", "Slower"],
        ["Cost", "Expensive", "Cheaper"],
        ["Density", "Lower", "Higher"],
        ["Refresh Required", "No", "Yes"],
        ["Usage", "Cache memory", "Main memory (RAM)"]
      ]
    },
    additionalResources: [
        {
            title: "Memory Organisation",
            url: "https://www.sathyabama.ac.in/sites/default/files/course-material/2020-10/Unit3_2.pdf"
        },
        {
          title: "Associative Memory",
          url: "https://www.geeksforgeeks.org/associative-memory/"
      },
        {
            title: "What is Memory Hierarchy?",
            url: "https://www.tutorialspoint.com/what-is-memory-hierarchy"
        }
    ]
        },
        {
          id: "topic13",
          title: "Cache memory, Virtual memory. Data path design for read/write access.",
          completed: false,
          co: "PCC-CS302.CO4",
          description: "Cache memory is a small, high-speed storage located close to the CPU that stores frequently accessed data to speed up processing. Virtual memory extends physical memory onto disk storage, allowing systems to run larger applications than RAM alone permits. In data path design for read/write access, the CPU sends addresses to memory through the address bus; for read, data is fetched from memory to CPU via the data bus; for write, data moves from CPU to memory. Control signals manage the timing and direction of data flow during these operations.",
    objectives: [
        "Understand the concept and purpose of cache memory and virtual memory in bridging the speed gap between CPU and main memory.",
        "Understand multilevel caching (L1, L2, L3) and their impact on system performance.",
        "Explore page replacement algorithms like LRU, FIFO, Optimal.",
        "Analyze the timing and synchronization issues in memory access and data transfer.",
        "Explore how control signals orchestrate data flow during instruction execution."
    ],
    keyPoints: [
        "Cache memory and virtual memory are crucial for improving system performance by leveraging the memory hierarchy",
        "Cache memory acts as a high-speed buffer between the CPU and main memory, storing frequently accessed data for faster retrieval. ",
        "Virtual memory provides a larger address space for each process, allowing programs to access memory beyond physical limitations. ",
        "A data path design for read/write access in both scenarios involves a combination of hardware components, such as the ALU, registers, and buses, to facilitate efficient data movement.",
        "Read Access: The process involves fetching data from either the cache or main memory based on cache hit or miss. ",
        "Write Access: Involves updating data in either the cache (write-back) or both the cache and main memory (write-through). ",
        "In both cache and virtual memory, the data path is designed to minimize latency and ensure data consistency between the different levels of memory.",
        "Cache mapping refers to the method used to store data from main memory into the cache.",
        "There are three different types of mapping used for the purpose of cache memory which is as follows:Direct Mapping, Fully Associative Mapping Set-Associative Mapping",
        "Direct mapping is a simple and commonly used cache mapping technique where each block of main memory is mapped to exactly one location in the cache called cache line.",
        "Fully associative mapping is a type of cache mapping where any block of main memory can be stored in any cache line. ",
        "Set-associative mapping is a compromise between direct-mapped and fully-associative mapping in cache systems.",
        "It combines the flexibility of fully associative mapping with the efficiency of direct mapping. In this scheme, multiple cache lines (typically 2, 4, or more) are grouped into sets.",
    ],
    image: {
        url: "https://images.tpointtech.com/tutorial/coa/images/alu-and-data-path-in-computer-organization1.png",
        alt: "Data path"
    },
    
    youtube: {
        title: "Cache Memory VS Virtual Memory",
        url: " https://www.youtube.com/watch?v=3Jf9Y8rmAQs "
    },
    table: {
      title: "Basic Computer Components Table",
      headers: ["Component", "Function", "Used In"],
      rows: [
        ["ALU", "Performs arithmetic and logic operations", "All computations"],
        ["Registers", "Temporarily hold data and instructions", "Intermediate results, address holding"],
        ["Memory", "Stores data/instructions", "Source/Destination of Read/Write"],
        ["Control Unit", "Sends control signals", "Directs flow of operations"],
        ["Multiplexers (MUX)", "Selects input for operations", "Between multiple data sources"]
      ]
    },
    additionalResources: [
        {
            title: "Cache Memory in Computer Organization",
            url: "https://www.geeksforgeeks.org/cache-memory-in-computer-organization/"
        },
        
        {
            title: "Data Path Design",
            url: "https://www.jaroeducation.com/blog/data-path-design-in-computer-architecture/"
        }
    ]
        
        }
      ],
  },
{
  id: "chapter5",
    title: "Control Unit Design and Instruction Set Architectures",
      topics: [
        {
          id: "topic14",
          title: "Design of control unit - hardwired and microprogrammed control.",
          completed: false,
          co: "PCC-CS302.CO5",
          description: "The Control Unit is the part of the computer’s central processing unit (CPU), which directs the operation of the processor.It is the responsibility of the control unit to tell the computer’s memory, arithmetic/logic unit, and input and output devices how to respond to the instructions that have been sent to the processor. It fetches internal instructions of the programs from the main memory to the processor instruction register, and based on this register contents, the control unit generates a control signal that supervises the execution of these instructions.",
    objectives: [
        "Learn how the control unit acts as the brain of the CPU by directing operations and coordinating all parts of the computer system.",
        "Study how instructions are fetched, decoded, and executed with the help of control signals.",
        "Understand how control signals are generated to initiate micro-operations during instruction execution.",
        "Gain clarity on the two main types: Hardwired and Microprogrammed control units"
    ],
    keyPoints: [
        "The Control Unit (CU) is a crucial component of the Central Processing Unit (CPU) in a computer system.",
        "Its primary function is to direct the operation of the processor. It does this by generating control signals that coordinate how data moves within the CPU, memory, and I/O devices.",
        "The control unit interprets instructions from the program and initiates the appropriate sequences of micro-operations required to execute them.",
        "There are two main types of control unit design:Hardwired Control Unit and Microprogrammed Control Unit. ",
        "A Hardwired Control Unit is a type of control unit in a computer’s CPU where the control signals required for instruction execution are generated using fixed electronic circuits, such as combinational logic",
        "Hardwired control units are commonly used in embedded systems or processors where speed is critical and the instruction set is not expected to change frequently.",
        "A Microprogrammed Control Unit is a type of control unit in a CPU where the control signals are generated using a sequence of microinstructions stored in a special memory called the Control Memory.",
        "Microprogrammed control units are used in CPUs where flexibility is important, such as in systems with complex instruction sets that may need to be updated or extended."
    ],
    image: {
        url: "https://www.geeksforgeeks.org/wp-content/uploads/1-9.jpg",
        alt: "Control Unit Design"
    },
    
    youtube: {
        title: "Hardwired Control Unit vs Microprogrammed Control Unit",
        url: "https://www.youtube.com/watch?v=l1vBkZWyELk"
    },
    table: {
      title: "Hardwired vs Microprogrammed Control Comparison Table",
      headers: ["Feature", "Hardwired Control", "Microprogrammed Control"],
      rows: [
        ["Speed", "Faster", "Slower"],
        ["Flexibility", "Low", "High"],
        ["Implementation", "Hardware (logic gates)", "Software (firmware)"],
        ["Modifiability", "Difficult", "Easy"],
        ["Complexity Handling", "Less suitable for complex instructions", "Good for complex instructions"]
      ]
    },
    additionalResources: [
        {
            title: "Introduction of Control Unit and its Design",
            url: "https://www.geeksforgeeks.org/introduction-of-control-unit-and-its-design/"
        },
        {
            title: "Hardwired v/s Micro-programmed Control Unit",
            url: "https://www.geeksforgeeks.org/computer-organization-hardwired-vs-micro-programmed-control-unit/"
       
        }
    ]
        },
        {
          id: "topic15",
          title: "Introduction to instruction pipelining.",
          completed: false,
          co: "PCC-CS302.CO5",
          description: "An instruction pipeline receives sequential instructions from memory while prior instructions are implemented in other portions. Pipeline processing can be seen in both the data and instruction streams.",
    objectives: [
        "Learn how pipelining increases the number of instructions executed per unit time",
        "Learn how pipelining enables instruction-level parallelism in CPUs.",
        "Study how overlapping instruction stages reduces execution time.",
        "Analyze stages like Fetch, Decode, Execute, etc., and their roles.",
        "Calculate speedup and efficiency of pipelined vs non-pipelined systems."
    ],
    keyPoints: [
        "An instruction pipeline reads instruction from the memory while previous instructions are being executed in other segments of the pipeline.",
        "The pipeline will be more efficient if the instruction cycle is divided into segments of equal duration. ",
        "Each step is carried out in its own segment, and various segments may take different amounts of time to process the incoming data.",
        "A four-segment instruction pipeline unifies two or more distinct segments into a single unit.",
        "For example, the decoding of the instruction and the calculation of the effective address can be merged into a single segment."
        
    ],
    image: {
        url: "https://cdn1.byjus.com/wp-content/uploads/2022/04/instruction-pipeline-in-computer-architecture.png",
        alt: "Flowchart of Intruction Pipelining"
    },
    
    youtube: {
        title: "Instruction Pipelining Explaination",
        url: "https://www.youtube.com/watch?v=_UsowVrjkxg"
    },
    table: {
      title: "Pipeline Execution Table",
      headers: ["Clock Cycle", "Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"],
      rows: [
        ["1", "I1 - IF", "", "", "", ""],
        ["2", "I2 - IF", "I1 - ID", "", "", ""],
        ["3", "I3 - IF", "I2 - ID", "I1 - EX", "", ""],
        ["4", "I4 - IF", "I3 - ID", "I2 - EX", "I1 - MEM", ""],
        ["5", "", "I4 - ID", "I3 - EX", "I2 - MEM", "I1 - WB"],
        ["6", "", "", "I4 - EX", "I3 - MEM", "I2 - WB"],
        ["7", "", "", "", "I4 - MEM", "I3 - WB"],
        ["8", "", "", "", "", "I4 - WB"]
      ]
    },
    additionalResources: [
        {
            title: "Instruction Pipelining",
            url: "https://en.wikipedia.org/wiki/Instruction_pipelining"
        }
    ]
        },
        {
          id: "topic16",
          title: "Introduction to RISC architectures. RISC vs CISC architectures.",
          completed: false,
          co: "PCC-CS302.CO5",
          description: "RISC, or Reduced Instruction Set Computer, is a type of microprocessor architecture that utilizes a small, highly-optimized set of instructions for faster execution. It contrasts with CISC (Complex Instruction Set Computer), which has a larger and more diverse instruction set. The core principle of RISC is to simplify instructions, enabling them to be executed in a single clock cycle and facilitating pipeline execution.",
    objectives: [
        "To understand how RISC simplifies the processor design by using a smaller, more efficient instruction set. This leads to simpler control logic and efficient data path designs.",
        "To explore how RISC architectures allow high execution speeds through the use of simple, uniform-length instructions that execute in a single clock cycle.",
        "To study how RISC designs are optimized for instruction pipelining, allowing multiple instructions to be executed in parallel",
        "To learn how RISC architectures reduce the time required to fetch and decode instructions"
    ],
    keyPoints: [
        "RISC is the way to make hardware simpler whereas CISC is the single instruction that handles multiple work.",
        "The main idea behind this is to simplify hardware by using an instruction set composed of a few basic steps for loading, evaluating, and storing operations just like a load command will load data, a store command will store the data.",
        " RISC processors use a smaller set of simple instructions, which makes them easier to decode",
        "RISC processors consume less power than CISC processors.",
        "RISC has a small set of instructions, which generally include register-to-register operations.",
        "The RISC processors can execute one instruction per clock cycle.",
        "Performance heavily depends on data alignment and the ability to parallelize operations.",
        "It is used for memory access limited to load and store instructions."
    ],
    image: {
        url: "https://media.geeksforgeeks.org/wp-content/uploads/20240313171140/RISC-and-CISC.png",
        alt: "RISC architecture"
    },
    
    youtube: {
        title: "RISC VS CISC",
        url: "https://www.youtube.com/watch?v=g16wZWKcao4"
    },
    table: {
      title: "RISC vs CISC Comparison Table",
      headers: [
        "Feature",
        "RISC",
        "CISC"
      ],
      rows: [
        ["Instruction Set", "Simple, small set", "Complex, large set"],
        ["Instruction Length", "Fixed, typically 32-bits", "Variable length"],
        ["Number of Instructions", "Few", "Many"],
        ["Execution Time", "Typically 1 clock cycle per instruction", "Varies (may take multiple cycles)"],
        ["Memory Access", "Load/store for memory operations", "Direct memory access in instructions"],
        ["Pipelining", "Designed for efficient pipelining", "Less efficient pipelining"],
        ["Hardware Complexity", "Simpler hardware", "More complex hardware"],
        ["Use Case", "Modern processors, embedded systems", "Older processors, legacy systems"],
        ["Compiler Optimization", "Requires compiler optimization", "Some hardware optimization"]
      ]
    },
    additionalResources: [
        {
            title: "RISC and CISC in Computer Organization",
            url: "https://www.geeksforgeeks.org/computer-organization-risc-and-cisc/"
        },
        
        {
            title: "What is RISC Processor",
            url: "https://www.tutorialspoint.com/what-is-risc-processor"
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
          id: "topic17",
          title: "Input-Output Operations and Data Transfer Mechanisms",
          completed: false,
          co: "PCC-CS302.CO6",
          description: "The input-output interface acts as a bridge between the computer's internal components (like the CPU) and the external devices. It handles functions such as data transfer, signal conversion, error detection, and buffering, ensuring that data is transmitted correctly and efficiently between the system and peripherals.",
          objectives: [
              "To learn how external devices (like keyboard, mouse, printers, etc.) communicate with the CPU and memory.",
              "Study various ways of transferring data between I/O devices and the processor",
              "Learn about the taxonomy of parallel computing systems",
              "Gaining skills required in embedded systems, OS-level I/O control, and hardware interfacing.",
              "To explore how data is synchronized between slow I/O devices and fast CPU/memory."
          ],
          keyPoints: [
              "Multiprocessor systems use multiple CPUs to execute multiple instructions simultaneously.",
              "Parallel architectures enhance computing performance by dividing tasks across multiple processors.",
              "Programmed I/O: It is due to the result of the I/O instructions that are written in the computer program. Each data item transfer is initiated by an instruction in the program.",
              "Interrupt- initiated I/O: Since in the above case we saw the CPU is kept busy unnecessarily. This situation can very well be avoided by using an interrupt driven method for data transfer. ",
              "Direct Memory Access : The data transfer between a fast storage media such as magnetic disk and memory unit is limited by the speed of the CPU.",
              "I/O interfaces provide a standard way of communicating with external devices.",
              "There are four primary ways to transfer data across the PCI bus: Direct Memory Access (DMA), Interrupt Request (IRQ), Programmed I/O, and USB Bulk.",
              "Data transfer can occur within a local network, between different networks, or across the internet."
          ],
          image: {
              url: "https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Blogs/home/input-output-organization-in-computer-image.png",
              alt: "Input Output Organization"
          },
          
          youtube: {
              title: "Data Transfer Instructions",
              url: " https://www.youtube.com/watch?v=bNkiChXPRhM "
          },
          table: {
            title: "I/O Techniques Comparison Table",
            headers: ["Method", "Who Controls Transfer?", "CPU Involvement", "Speed", "Use Case"],
            rows: [
              [
                "Programmed I/O",
                "CPU",
                "High",
                "Slow",
                "Simple devices (e.g., keyboard)"
              ],
              [
                "Interrupt-Driven I/O",
                "CPU via Interrupts",
                "Medium",
                "Faster than Programmed I/O",
                "Moderate I/O devices"
              ],
              [
                "Direct Memory Access (DMA)",
                "DMA Controller",
                "Low",
                "High",
                "High-speed transfers (e.g., disk I/O)"
              ]
            ]
          },
          additionalResources: [
              {
                  title: "Non-Von Neumann Architectures",
                  url: "https://www.slideshare.net/slideshow/nonvon-neumann-architectures/260147895"
              },
              
              {
                  title: "I/O Interface (Interrupt and DMA Mode)",
                  url: "https://www.geeksforgeeks.org/io-interface-interrupt-dma-mode/"
              }
          ]
        
          }
        
      ],
  }
];