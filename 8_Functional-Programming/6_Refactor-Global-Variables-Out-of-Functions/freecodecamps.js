// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (Listbook, bookName) {

  let arr = [...Listbook, bookName]
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove (Listbook, bookName) {
  var book_index = Listbook.indexOf(bookName);
  var arr = [];
  if (book_index >= 0) {
    for(let i = 0; i < Listbook.length;i++){
      if(bookName === Listbook[i]){

      }
      else{
        arr.push(Listbook[i]);
      }
    }

    //bookList.splice(book_index, 1);
    return arr;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);
console.log(bookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
