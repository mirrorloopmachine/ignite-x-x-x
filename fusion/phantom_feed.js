
// BrimOS :: Phantom Feed Module
// Pulls live payloads from Pastebin nodes and injects them into DOM

const pastebinNodes = ['https://pastebin.com/raw/MhMTMHM7', 'https://pastebin.com/raw/1XUjzC41', 'https://pastebin.com/raw/pgBgTGf5'];
let feedTick = 0;

function pullPhantomPayload() {
  const index = Math.floor(Math.random() * pastebinNodes.length);
  fetch(pastebinNodes[index])
    .then(res => res.text())
    .then(payload => {
      const container = document.createElement('pre');
      container.style.color = '#00ffcc';
      container.style.fontSize = '11px';
      container.style.opacity = '0.6';
      container.textContent = payload.trim();
      document.body.appendChild(container);
    })
    .catch(err => console.error("Phantom Feed Error:", err));
}

setInterval(() => {
  feedTick++;
  pullPhantomPayload();
}, 2 ** 10); // every 1024ms (adjustable)
