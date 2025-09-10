// Elements
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");

// Toggle chatbot window
chatbotBtn.addEventListener("click", () => {
    chatbotContainer.style.display = (chatbotContainer.style.display === "flex") ? "none" : "flex";
    chatbotContainer.style.flexDirection = "column";
});
const chatbotClose = document.getElementById("chatbot-close");
const chatbotContainer = document.getElementById("chatbot-container");

chatbotClose.addEventListener("click", () => {
    chatbotContainer.style.display = "none";
});
// Append message
function appendMessage(sender, message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "bot-message";
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);

    // Scroll to bottom smoothly
    chatbotMessages.scrollTo({
        top: chatbotMessages.scrollHeight,
        behavior: "smooth"
    });
}

// Typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.id = "typing-indicator";
    typingDiv.className = "bot-message";
    typingDiv.textContent = "Foodify is typing...";
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTo({ top: chatbotMessages.scrollHeight, behavior: "smooth" });
}

function hideTypingIndicator() {
    const typingDiv = document.getElementById("typing-indicator");
    if (typingDiv) typingDiv.remove();
}

// Dynamic bot response
function botResponse(userText) {
    const text = userText.toLowerCase();

    const intents = [
        { keywords: ["menu", "specials", "dessert", "vegan", "drinks"], response: "Today's specials are 🥗 Salad, 🍕 Pizza, 🍰 Chocolate Cake! You can see the full menu on our Menu page. We also have vegan, gluten-free, and drink options!" },
        { keywords: ["order", "buy", "purchase"], response: "You can place your order on our Order page. Tell me what you'd like, and I can guide you!" },
        { keywords: ["hours", "time", "open", "close"], response: "We are open from 10 AM to 10 PM, Monday to Sunday." },
        { keywords: ["location", "address", "where"], response: "We are located at 837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles. Come visit us!" },
        { keywords: ["contact", "phone", "email"], response: "You can call us at 03105486666 or email at foodify@restaurant.com." },
        { keywords: ["feedback", "review", "comment"], response: "We'd love your feedback! Please type your review here or submit it via our Feedback page." },
        { keywords: ["payment", "pay", "price", "bill"], response: "We accept cash, credit/debit cards, and online payments via our Order page." },
        { keywords: ["reservation", "book", "table"], response: "You can reserve a table through our Book page. How many guests and what time would you like?" },
        { keywords: ["ingredients", "allergy", "gluten", "nuts"], response: "Check our Menu page for ingredients. For allergies, let us know and we will guide you!" },
        { keywords: ["delivery", "shipping", "home delivery"], response: "We provide home delivery! Orders placed online will be delivered within 45-60 minutes in your area." },
        { keywords: ["happy", "satisfied", "thanks", "thank you"], response: "We're glad you are happy! Thank you for choosing Foodify 😊" }
    ];

    // Try to find matching intent
    let matched = false;
    for (const intent of intents) {
        for (const keyword of intent.keywords) {
            if (text.includes(keyword)) {
                appendMessage("bot", intent.response);
                matched = true;
                break;
            }
        }
        if (matched) break;
    }

    // Fallback if no intent matches
    if (!matched) {
        appendMessage("bot", "I’m here to help with Menu, Orders, Hours, Location, Contact, Reservations, Payment, Ingredients, Delivery, or Feedback. Could you please clarify?");
    }
}

// Send message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    appendMessage("user", message);
    chatbotInput.value = "";

    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        botResponse(message);
    }, 1000);
}

// Send on button click
chatbotSend.addEventListener("click", sendMessage);

// Send on Enter
chatbotInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Welcome message
appendMessage("bot", "Hi! Welcome to Foodify. Ask me about our menu, orders, or leave feedback!");
