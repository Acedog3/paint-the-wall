cycleQuotes();

var halftimePrice = 1;
var entertainmentPrice = 3;

function purchase(itemNum) {
if (itemNum === '1' && count >= halftimePrice) {
  startdown = startdown / 2;
  count -= halftimePrice;
  document.getElementById("count").innerHTML = thousands_separators(count);
  halftimePrice += 1;
  document.getElementById("halftimePrice").innerHTML = thousands_separators(halftimePrice);
}
  
if (itemNum === '3' && count >= entertainmentPrice) {
  count -= entertainmentPrice;
  document.getElementById("count").innerHTML = thousands_separators(count);
  document.getElementById("3price").disabled = true;
  }
}

function part2() {
  document.getElementById("questionmark").style.display = "none";
  document.getElementById("upgradebox").style.display = "block";
}

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Be the change that you wish to see in the world. - Mahatma Gandhi",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Life is a journey that must be traveled no matter how bad the roads and accommodations. - Oliver Goldsmith",
  "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "The purpose of our lives is to be happy. - Dalai Lama",
];


const motivationQuotesElement = document.getElementById("motivationquotes");

function cycleQuotes() {
  let index = 0;

  function updateQuote() {
    motivationQuotesElement.style.opacity = 1;
    motivationQuotesElement.innerHTML = quotes[index];
    index = (index + 1) % quotes.length;

    setTimeout(() => {
      motivationQuotesElement.style.opacity = 0;
      setTimeout(updateQuote, 1000); // Wait 1 second for the fade-out effect to complete
    }, 9000); // Wait 9 seconds before starting the fade-out effect
  }

  updateQuote();
}

  function toggleMuteAudio() {
    if (audio.volume === 0.9) {
      audio.volume = 0.0;
    } else {
      audio.volume = 0.9;
    }
  }

function toggleMuteGame() {
  var iframe = document.getElementById("iframe");
  if (iframe.volume === 1) {
    iframe.volume = 0.0;
  } else {
    iframe.volume = 1;
  }
}

function enableMinigame() {
  document.getElementById("iframe").style.display = "block";
}

document.addEventListener("keydown", function (event) {
    var keyword = "tripp";
    if (count == 0 && timer == 0 && event.key.toLowerCase() === keyword.charAt(0)) {
        var typedKeyword = keyword.charAt(0);
        var tripptimer;
        document.addEventListener("keydown", function (event) {
            clearTimeout(tripptimer);
            typedKeyword += event.key.toLowerCase();
            tripptimer = setTimeout(function () {
                typedKeyword = "";
            }, 1000);
            if (count == 0 && timer == 0 && typedKeyword === keyword) {
				count += 3;
                document.getElementById("countformat").style.display = "inline";
                document.getElementById("count").style.display = "inline";
                document.getElementById("count").innerHTML = thousands_separators(count);
                document.getElementById("questionmark").style.display = "block";
            }
        });
    }
});