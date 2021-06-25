class Media {
    constructor(keyOne) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;

    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = ratings.length;
        return ratingsSum / lengthOfArray;
    }
    set isCheckedOut(newKey) {
        this._isCheckedOut = newKey;
    }
}

class Book extends Media {
    constructor(author, ) {
        constructor(author, isCheckedOut, pages) {
            this._author = author;
            this._isCheckedOut = false;
            this._pages = pages;

        }
        get author() {
            return this._author;
        }
        get getAverageRating() {

        }
        get toggleCheckOutStatus() {

        }
        get addRating() {

        }
    }