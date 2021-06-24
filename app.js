class Media{
  constructor(keyOne){
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;

 }
 get title(){
   return this._title;
 }
 get isCheckedOut(){
   return this._isCheckedOut;
 }
 get ratings(){
   return this._ratings;
 }
 toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
 }
 set isCheckedOut(newKey){
   this._isCheckedOut = newKey;
 }
}
