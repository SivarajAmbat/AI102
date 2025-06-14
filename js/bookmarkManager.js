// js/bookmarkManager.js
class BookmarkManager {
    constructor() {
        this.bookmarkedCards = new Set(JSON.parse(localStorage.getItem('bookmarkedCards')) || []);
    }

    isBookmarked(cardFrontText) {
        return this.bookmarkedCards.has(cardFrontText);
    }

    toggleBookmark(cardFrontText) {
        if (this.bookmarkedCards.has(cardFrontText)) {
            this.bookmarkedCards.delete(cardFrontText);
        } else {
            this.bookmarkedCards.add(cardFrontText);
        }
        this._saveBookmarks();
    }

    getBookmarkedCardFronts() {
        return Array.from(this.bookmarkedCards);
    }

    _saveBookmarks() {
        localStorage.setItem('bookmarkedCards', JSON.stringify(Array.from(this.bookmarkedCards)));
    }
}

export const bookmarkManager = new BookmarkManager();
