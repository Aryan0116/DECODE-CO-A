const circuitCanvas = document.getElementById("circuit-canvas");
const truthTableDiv = document.getElementById("truth-table");
const generateCircuitButton = document.getElementById("generate-circuit");

// Function to create a circuit diagram
function drawCircuit(gateList) {
    circuitCanvas.innerHTML = ""; // Clear previous circuit

    let xPosition = 50; // Starting x position
    const yPosition = 50; // Fixed y position

    gateList.forEach(gate => {
        const gateElement = document.createElement("div");
        gateElement.className = "gate";
        gateElement.textContent = gate;
        gateElement.style.left = `${xPosition}px`;
        gateElement.style.top = `${yPosition}px`;
        circuitCanvas.appendChild(gateElement);
        xPosition += 80; // Space between gates
    });
}

// Function to generate the truth table
function generateTruthTable(numInputs, gates) {
    let tableHTML = "<table><tr>";

    // Create table header
    for (let i = 0; i < numInputs; i++) {
        tableHTML += `<th>Input ${i + 1}</th>`;
    }
    tableHTML += "<th>Output</th></tr>";

    const totalRows = 2 ** numInputs; // Total combinations of inputs

    // Generate truth table rows
    for (let i = 0; i < totalRows; i++) {
        const inputs = [];
        for (let j = 0; j < numInputs; j++) {
            inputs[j] = (i & (1 << j)) ? 1 : 0; // Generate binary inputs
        }
        const output = calculateOutput(inputs, gates);
        tableHTML += "<tr>";
        inputs.forEach(input => {
            tableHTML += `<td>${input}</td>`;
        });
        tableHTML += `<td>${output}</td></tr>`;
    }
    tableHTML += "</table>";
    truthTableDiv.innerHTML = tableHTML;
}

// Function to calculate output based on gates
function calculateOutput(inputs, gates) {
    let output = inputs[0]; // Start with the first input

    gates.forEach(gate => {
        if (gate === "AND") {
            output = output && inputs[1];
        } else if (gate === "OR") {
            output = output || inputs[1];
        } else if (gate === "NOT") {
            output = !output;
        }
    });

    return output ? 1 : 0; // Return binary output
}

// Event listener for generating the circuit and truth table
generateCircuitButton.onclick = () => {
    const numInputs = parseInt(document.getElementById("inputs").value);
    const gatesInput = document.getElementById("gates").value;
    const gates = gatesInput.split(",").map(g => g.trim().toUpperCase());

    drawCircuit(gates);
    generateTruthTable(numInputs, gates);
};
