// ウィンドウを開く関数
function openWindow(id) {
  const windowElement = document.getElementById(id);
  windowElement.style.display = "block";
  windowElement.style.animation = "fadeIn 0.5s";
}

// ウィンドウを閉じる関数
function closeWindow(id) {
  const windowElement = document.getElementById(id);
  windowElement.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    windowElement.style.display = "none";
  }, 500);
}

// アニメーション (CSSに対応)
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: scale(1); }
      to { opacity: 0; transform: scale(0.9); }
    }
  `;
  document.head.appendChild(style);
});
