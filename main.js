class Media {
     constructor(title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
    get title() {
      return this._title;
    }
    get ratings() {
      return this._ratings;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(value) {
      this.isCheckedOut = value;
    }
     toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut ;
    }
    addRating(newRating){
      if (newRating > 0 && newRating <= 5){
      this._ratings.push(newRating);
      } else {
        return 'please return a number between 1 and 5';
      }
    }
    get averageRating(){
      let ratingsSum = this._ratings.reduce((accumulator,rating) => accumulator + rating);
    return ratingsSum / this._ratings.length;
    }
}
  
class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
  
class Movie extends Media {
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
}
  
class CD extends Media {
    constructor(artist, songs){
      super(title);
      this._artist = artist;
      this._songs = [];
    }
    get artist () {
      return this._artist;
    }
    get songs () {
      return this._songs;
    }
    shuffle () {
      for(i = 0 ; i < songs.length ; i++){
        let randomNumber = Math.floor(Math.random()*songs.length);
        songs[i]= randomNumber;
      }
    }
}
const historyOfEverything = new Book('Billy Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.averageRating);

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.averageRating);