// js/cardDisplay.js
import { elements } from './elements.js';
import { bookmarkManager } from './bookmarkManager.js';
import { flashcardsData } from './data.js';

let currentCardIndex = 0;
let isBookmarkedFilterActive = false;
let filteredCards = []; // Stores cards when filter is active

function getCardsToDisplay() {
    return isBookmarkedFilterActive ? filteredCards : flashcardsData;
}

export function updateCardDisplay() {
    const cards = getCardsToDisplay();

    if (cards.length === 0) {
        elements.cardTitle.textContent = "No cards to display.";
        elements.cardContent.innerHTML = "";
        elements.flashcard.classList.remove('flipped');
        elements.prevBtn.disabled = true;
        elements.nextBtn.disabled = true;
        elements.bookmarkBtn.disabled = true;
        elements.cardCounter.textContent = "0/0";
        return;
    }

    const card = cards[currentCardIndex];
    elements.cardTitle.textContent = card.front;
    elements.cardContent.innerHTML = card.back;
    elements.flashcard.classList.remove('flipped'); // Ensure card is front-facing when content updates

    // Update bookmark button state
    const isCurrentCardBookmarked = bookmarkManager.isBookmarked(card.front);
    if (isCurrentCardBookmarked) {
        elements.bookmarkBtn.classList.add('bookmarked');
        elements.bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i> Bookmarked';
    } else {
        elements.bookmarkBtn.classList.remove('bookmarked');
        elements.bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i> Bookmark';
    }

    // Update navigation button states
    elements.prevBtn.disabled = currentCardIndex === 0;
    elements.nextBtn.disabled = currentCardIndex === cards.length - 1;
    elements.bookmarkBtn.disabled = false; // Always enable bookmark button if there are cards

    // Update card counter
    elements.cardCounter.textContent = `${currentCardIndex + 1}/${cards.length}`;

    // Update filter button text
    if (isBookmarkedFilterActive) {
        elements.toggleBookmarkFilterBtn.classList.add('active');
        elements.toggleBookmarkFilterBtn.textContent = 'Showing Bookmarked';
    } else {
        elements.toggleBookmarkFilterBtn.classList.remove('active');
        elements.toggleBookmarkFilterBtn.textContent = 'Show Bookmarked Only';
    }
}

export function navigateCards(direction) {
    const cards = getCardsToDisplay();
    if (direction === 'next' && currentCardIndex < cards.length - 1) {
        currentCardIndex++;
    } else if (direction === 'prev' && currentCardIndex > 0) {
        currentCardIndex--;
    }
    updateCardDisplay();
}

export function toggleBookmark() {
    const cards = getCardsToDisplay();
    if (cards.length > 0) {
        const currentCardFront = cards[currentCardIndex].front;
        bookmarkManager.toggleBookmark(currentCardFront);
        // If filter is active and we unbookmark, the card might disappear, so re-filter
        if (isBookmarkedFilterActive && !bookmarkManager.isBookmarked(currentCardFront)) {
            filterCards(); // Re-filter and potentially adjust index
        } else {
            updateCardDisplay(); // Just update button state
        }
    }
}

export function toggleFilter() {
    isBookmarkedFilterActive = !isBookmarkedFilterActive;
    filterCards();
}

function filterCards() {
    if (isBookmarkedFilterActive) {
        filteredCards = flashcardsData.filter(card => bookmarkManager.isBookmarked(card.front));
    } else {
        filteredCards = []; // Reset when filter is off
    }
    currentCardIndex = 0; // Reset index when filter changes
    updateCardDisplay();
}

// Initial display when the module loads
// This will be called by main.js after all modules are loaded
// updateCardDisplay();
