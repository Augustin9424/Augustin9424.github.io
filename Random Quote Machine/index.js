    async function getRandomQuote() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      return data.value;
    } catch (error) {
      console.error(error);
      return 'Failed to fetch quote. Please try again.';
    }
  }
  
  // Function to update the quote and author in the UI
  function displayQuote(quote, author) {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quote;
  
    const authorElement = document.getElementById('author-name');
    authorElement.textContent = author;
  }
  
  // Function to handle tweeting the current quote
  function tweetQuote(quote) {
    const tweetLink = document.getElementById('tweet-quote');
    tweetLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById('new-quote').addEventListener('click', async function() {
    const quote = await getRandomQuote();
    displayQuote(quote, 'Chuck Norris');
    tweetQuote(quote);
  });
  
  // Initial quote fetch and display
  getRandomQuote().then(quote => {
    displayQuote(quote, 'Chuck Norris');
    tweetQuote(quote);
  });
  // Function to update the quote and author in the UI
function displayQuote(quote, author) {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = quote;

  const authorElement = document.getElementById('author-name');
  authorElement.textContent = author;

  // Generate a random background color
  const randomColor = getRandomColor();

  // Set the background color of the quote-box
  const quoteBox = document.getElementById('quote-box');
  quoteBox.style.backgroundColor = randomColor;
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

