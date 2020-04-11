(function () {
  //varijable
  let btn = document.querySelector(".btn");
  let container__quote = document.querySelector(".container__quote--value");
  let container__author = document.querySelector(".container__author--value");
  console.log(container__author);
  let quotes = [
    { quote: "Impossible is for the unwilling", author: "John Keats" },
    { quote: "No pressure, no diamonds", author: "homas Carlyle" },
    { quote: "Stay foolish to stay sane", author: "Maxime Lagacé" },
    { quote: "When nothing goes right, go left.", author: "unknown" },
    { quote: "Try Again. Fail again. Fail better. ", author: "Samuel Beckett" },
    {
      quote: "Don’t tell people your plans. Show them your results. ",
      author: "unknown",
    },
    { quote: "Good things happen to those who hustle.", author: "Anaïs Nin" },
    { quote: "He who is brave is free.", author: "Seneca" },
    {
      quote: "Solitary trees, if they grow at all, grow strong.",
      author: "Winston Churchill",
    },
    {
      quote: "The bird a nest, the spider a web, man friendship.",
      author: "William Blake",
    },
  ];
  //eventi
  btn.addEventListener('click', ()=>{
   let random = Math.floor(Math.random()*quotes.length);
   //primjena
   container__quote.textContent = quotes[random].quote;
   container__author.textContent = quotes[random].author;
  })
})();
