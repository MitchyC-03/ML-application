function submitQuery() {
  const query = document.getElementById("chat-input").value;
  const responseElement = document.getElementById("chat-response");

  if (!query.trim()) {
    responseElement.innerText = "🌱 Please ask something about your garden!";
    return;
  }

  // Simulated response — replace this with actual API call later
  responseElement.innerText = `🤖 Our garden bot says: For "${query}", ensure proper sunlight, watering, and check for pests!`;
}
function sendQuery() {
  const flower = document.getElementById("flower").value;
  const price = document.getElementById("price").value;

  // Chatbot Assistant
    function submitQuery() {
      const query = document.getElementById("chat-input").value;
      fetch("https://314b99aa-1b1c-4f3c-8ed9-29e96061c39a-00-3ub2gmzrqbxk.worf.replit.dev//", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query })
      })
      .then(res => res.json())
      .then(data => {
        document.getElementById("chat-response").innerText = data.response || "🤖 I'm still learning!";
      })
      .catch(() => {
        document.getElementById("chat-response").innerText = "⚠️ Assistant not responding.";
      });
    }

  

    function predictQuantity() {
      const flower = document.getElementById("flower").value;
      const quantity = parseFloat(document.getElementById("price").value); // Price used as quantity for model

      fetch("https://314b99aa-1b1c-4f3c-8ed9-29e96061c39a-00-3ub2gmzrqbxk.worf.replit.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flower, quantity })
      })
      .then(res => res.json())
      .then(data => {
        document.getElementById("prediction-result").innerText = `📦 Suggest restocking: ${data.prediction} units`;
      })
      .catch(() => {
        document.getElementById("prediction-result").innerText = "⚠️ Error getting prediction.";
      });
    }

    

}
