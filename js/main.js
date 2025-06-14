// js/main.js
import { elements } from './elements.js';
import { updateCardDisplay, navigateCards, toggleBookmark, toggleFilter } from './cardDisplay.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initial display of the first card
    updateCardDisplay();

    // Event Listeners
    elements.flashcard.addEventListener('click', () => {
        elements.flashcard.classList.toggle('flipped');
    });

    elements.prevBtn.addEventListener('click', () => {
        navigateCards('prev');
    });

    elements.nextBtn.addEventListener('click', () => {
        navigateCards('next');
    });

    elements.bookmarkBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent card from flipping when bookmarking
        toggleBookmark();
    });

    elements.toggleBookmarkFilterBtn.addEventListener('click', () => {
        toggleFilter();
    });
});
