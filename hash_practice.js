// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

let person = {firstName: "Mike", lastName: "Anderson", email: "mike@anderson.com"}

console.log(person)
console.log(person.firstName)
console.log(person["lastName"])


// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

array = [
  {firstName: "Mike", lastName: "Anderson", email: "mike@anderson.com"},
  {firstName: "Bob", lastName: "Anderson", email: "bob@anderson.com"},
  {firstName: "Dylan", lastName: "Anderson", email: "dylan@anderson.com"}
]

console.log(array[0].firstName)
console.log(array[2].firstName)


// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
 
 menu = [
 {item: "Burger", price: 3},
 {item: "Fries", price: 5},
 {item: "Drink", price: 2}
 ]
 console.log(menu)

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

book = {
  title: "Best Dictionary Ever",
  pages: 450,
  language: "English"
}

console.log(book.title)
console.log(book.pages)
console.log(book.language)

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

books = [
{ title: "Best Thesaurus Ever",
  pages: 450,
  language: "English"},
{ title: "Best Dictionary Ever",
  pages: 450,
  language: "English"},
{ title: "Best Almanac Ever",
  pages: 450,
  language: "English"}
  ]

  console.log(books[2])

  books[2].language = "farsi"

 console.log(books[2])

// # 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.




// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.



// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.




// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

let dictionary = { bad: "of poor quality or a low standard", mad: "very angry" };
dictionary.glad = "delighted";
console.log(dictionary);


// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.


// # SOLUTIONS: https://gist.github.com/peterxjang/d257aec07882d78009bd796ed53f81bb