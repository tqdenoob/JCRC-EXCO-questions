// Sample flashcards data - you can modify this array to add your own questions
const flashcards = [
    {
        question: "Share your MBTI?",
        title: "Question 1"
    },
    {
        question: "How is your school / CCA life?",
        title: "Question 2"
    },
    {
        question: "What is your favourite memory so far this year?",
        title: "Question 3"
    },
    {
        question: "What is your pet peeve?",
        title: "Question 4"
    },
    {
        question: "Health, Family, Friends, Wealth, Education: Rank these 5 in order of importance to you",
        title: "Question 5"
    },
    {
        question: "What do you look for in a partner / person / friend?",
        title: "Question 6"
    },
    {
        question: "What would you change in the Boarding School/JCRC?",
        title: "Question 7"
    },
    {
        question: "What is your leadership style?",
        title: "Question 8"
    },
    {
        question: "Why did you apply for JCRC and EXCO?",
        title: "Question 9"
    },
    {
        question: "Which JCRC event in the past that you enjoyed the most?",
        title: "Question 10"
    },
];

// Initialize variables with null checks
let currentCardIndex = 0;
const flashcard = document.querySelector('.flashcard');
const cardContent = document.querySelector('.card-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Check if required elements exist
if (!flashcard || !cardContent || !prevBtn || !nextBtn) {
    console.error('Required elements not found in the DOM');
}

// Function to safely update the flashcard content
function updateCard() {
    try {
        if (!flashcard || !cardContent) return;

        const card = flashcards[currentCardIndex];
        if (!card) return;

        // Remove any existing animation classes
        flashcard.classList.remove('fade-out');
        
        // Force a reflow to ensure the animation can be triggered again
        void flashcard.offsetWidth;
        
        // Update content
        cardContent.innerHTML = `
            <h2>${card.title}</h2>
            <p>${card.question}</p>
        `;
        
        // Add animation class
        flashcard.classList.add('fade-out');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            if (flashcard) {
                flashcard.classList.remove('fade-out');
            }
        }, 300);
    } catch (error) {
        console.error('Error updating card:', error);
    }
}

// Function to safely navigate to previous card
function goToPreviousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

// Function to safely navigate to next card
function goToNextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        updateCard();
    }
}

// Add event listeners with null checks
if (prevBtn) {
    prevBtn.addEventListener('click', goToPreviousCard);
}

if (nextBtn) {
    nextBtn.addEventListener('click', goToNextCard);
}

// Initialize the first card
if (flashcards.length > 0) {
    updateCard();
} else {
    console.error('No flashcards data available');
} 
