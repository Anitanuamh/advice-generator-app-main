async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      const quote = `${data.content} - ${data.author}`;
      const quoteElement = document.getElementById("quote");
      quoteElement.textContent = quote;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  const generateButton = document.getElementById("generate-btn");
  generateButton.addEventListener("click", fetchQuote);
  