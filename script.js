// Sample flashcards data - you can modify this array to add your own questions
const flashcards = [
    {
        question: "How is your school / CCA life?",
        title: "Question 1"
    },
    {
        question: "What do you look for in a partner / person / friend?",
        title: "Question 2"
    },
    {
        question: "What is your leadership style?",
        title: "Question 3"
    }
];

let currentCardIndex = 0;
const flashcard = document.querySelector('.flashcard');
const cardContent = document.querySelector('.card-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the flashcard content
function updateCard() {
    const card = flashcards[currentCardIndex];
    cardContent.innerHTML = `
        <h2>${card.title}</h2>
        <p>${card.question}</p>
    `;
    
    // Add animation class
    flashcard.classList.add('fade-out');
    setTimeout(() => {
        flashcard.classList.remove('fade-out');
    }, 300);
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        updateCard();
    }
});

// Initialize the first card
updateCard(); 