


  var Quotes = [
    {
      Quote: 'That it will never come again is what makes life so sweet.',
      Author: "– Emily Dickinso",
    },
    {
      Quote: 'It is never too late to be what you might have been.',
      Author: "– George Eliot",
    },
    {
      Quote: 'Pain is inevitable. Suffering is optional.',
      Author: "– Haruki Murakami",
    },
    {
        Quote: 'Life is tough my darling, but so are you.',
        Author: "– Stephanie Bennett Henry",
      },
      {
        Quote: 'Self-awareness and self-love matter. Who we are is how we lead.',
        Author: "– Brene Brown",
      },
      {
        Quote: 'Let me live, love, and say it well in good sentences.',
        Author: "– Sylvia Plath",
      },
     
  ];
  
  function GenerateQuote() {
    var RandomNumber;
    RandomNumber = Math.floor(Math.random() * Quotes.length);
    document.getElementById("Quote").innerHTML = Quotes[RandomNumber].Quote;
    document.getElementById("Author").innerHTML = Quotes[RandomNumber].Author;
  }