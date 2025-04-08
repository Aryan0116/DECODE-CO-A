// Updated script.js
let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null,
    currentPDF = 'COA_An_Introduction.pdf'; // Default PDF

const scale = 1.5,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {
    pageIsRendering = true;

    // Get page
    pdfDoc.getPage(num).then(page => {
        // Set scale
        const viewport = page.getViewport({ scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderCtx = {
            canvasContext: ctx,
            viewport
        };

        page.render(renderCtx).promise.then(() => {
            pageIsRendering = false;

            if (pageNumIsPending !== null) {
                renderPage(pageNumIsPending);
                pageNumIsPending = null;
            }
        });

        // Output current page
        document.querySelector('#page-num').textContent = 
            `Page ${num} of ${pdfDoc.numPages}`;
    });
};

// Check for pages rendering
const queueRenderPage = num => {
    if (pageIsRendering) {
        pageNumIsPending = num;
    } else {
        renderPage(num);
    }
};

// Load PDF function
const loadPDF = (pdfPath) => {
    pdfjsLib.getDocument(pdfPath).promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        pageNum = 1; // Reset to first page
        renderPage(pageNum);
    }).catch(err => {
        // Display error
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        const pdfContainer = document.querySelector('.pdf-container');
        // Clear previous errors
        const previousError = pdfContainer.querySelector('.error');
        if (previousError) {
            pdfContainer.removeChild(previousError);
        }
        pdfContainer.insertBefore(div, canvas);
    });
};

// Book selection functionality
document.querySelectorAll('.book-item').forEach(book => {
    book.addEventListener('click', (e) => {
        // Remove active class from all books
        document.querySelectorAll('.book-item').forEach(b => {
            b.classList.remove('active');
        });
        
        // Add active class to clicked book
        book.classList.add('active');
        
        // Get PDF path from data attribute
        const pdfPath = book.dataset.pdf;
        currentPDF = pdfPath;
        
        // Load the new PDF
        loadPDF(pdfPath);
    });
});

// Show Previous Page
document.querySelector('#prev-page').addEventListener('click', () => {
    if (pageNum <= 1) return;
    pageNum--;
    queueRenderPage(pageNum);
});

// Show Next Page
document.querySelector('#next-page').addEventListener('click', () => {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    queueRenderPage(pageNum);
});

// Zoom functionality
let currentScale = scale;

document.querySelector('#zoom-in').addEventListener('click', () => {
    currentScale += 0.25;
    renderPage(pageNum);
});

document.querySelector('#zoom-out').addEventListener('click', () => {
    if (currentScale <= 0.5) return;
    currentScale -= 0.25;
    renderPage(pageNum);
});

// Initial load of the first PDF
loadPDF(currentPDF);