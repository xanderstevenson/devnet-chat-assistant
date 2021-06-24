// var AdaptiveCard = require('/assets/cards/welcomeCard.json');
import * as AdaptiveCards from "adaptivecards";

// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();

// Set its hostConfig property unless you want to use the default Host Config
// Host Config defines the style and behavior of a card
adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
    fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
    // More host config options
});

// Set the adaptive card's event handlers. onExecuteAction is invoked
// whenever an action is clicked in the card
adaptiveCard.onExecuteAction = function(action) { alert("Ow!"); }

// For markdown support you need a third-party library
// E.g., to use markdown-it, include in your HTML page:
//     <script type="text/javascript" src="https://unpkg.com/markdown-it/dist/markdown-it.js"></script>
// And add this code to replace the default markdown handler:
//     AdaptiveCards.AdaptiveCard.onProcessMarkdown = function (text, result) {
//         result.outputHtml = markdownit().render(text);
//         result.didProcess = true;
//     };

// Parse the card payload
adaptiveCard.parse(card);

// Render the card to an HTML element:
var renderedCard = adaptiveCard.render();

// And finally insert it somewhere in your page:
document.body.appendChild(renderedCard);