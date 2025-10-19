// 🌸 Xác định trang hiện tại
const isHome = document.body.classList.contains("home");
const isBirthday = document.body.classList.contains("lanh");

/* 🌷 TRANG CHÍNH (index.html) */
if (isHome) {
  // 🎶 Nhạc nền fade-in
  window.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
      bgMusic.volume = 0;
      const playMusic = () => {
        bgMusic.play().then(() => {
          let v = 0;
          const fade = setInterval(() => {
            if (v < 0.6) {
              v += 0.02;
              bgMusic.volume = v;
            } else clearInterval(fade);
          }, 150);
        }).catch(() => {});
      };
      document.body.addEventListener("click", playMusic, { once: true });
    }
  });

  const mainHeart = document.getElementById("mainHeart");
  const goButton = document.getElementById("goButton");
  const clickSound = document.getElementById("clickSound");

  // ✨ Hiệu ứng mở trang chính
  window.addEventListener("load", () => {
    const title = document.querySelector("h1");
    const heart = document.querySelector(".main-heart");
    const loveText = document.querySelector(".love-text");
    const button = document.querySelector("button");

    title.classList.add("fade-in-top");
    setTimeout(() => heart.classList.add("fade-in-center"), 500);
    setTimeout(() => loveText.classList.add("fade-in-bottom"), 1000);
    setTimeout(() => button.classList.add("fade-in-bottom"), 1500);
    setTimeout(() => startFloatingHeartsAndPetals(), 2500);
  });

  // 💞 Tim & hoa rơi
  function startFloatingHeartsAndPetals() {
    setInterval(() => {
      const fh = document.createElement("div");
      fh.classList.add("floating-heart");
      fh.innerHTML = "💖";
      fh.style.left = Math.random() * 100 + "vw";
      fh.style.top = Math.random() * 100 + "vh";
      fh.style.fontSize = Math.random() * 20 + 10 + "px";
      fh.style.animationDuration = Math.random() * 4 + 4 + "s";
      document.body.appendChild(fh);
      setTimeout(() => fh.remove(), 6000);
    }, 600);

    setInterval(() => {
      const petal = document.createElement("div");
      petal.classList.add("petal");
      petal.innerHTML = "🌸";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.fontSize = Math.random() * 15 + 10 + "px";
      petal.style.animationDuration = Math.random() * 5 + 5 + "s";
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 6000);
    }, 900);
  }

  // 💥 Click sang trang sinh nhật
  function smoothRedirect() {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }

    const heart = document.querySelector(".main-heart");
    heart.classList.add("pulse-burst");

    const glow = document.createElement("div");
    glow.classList.add("burst-glow");
    document.body.appendChild(glow);

    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
      const fadeOut = setInterval(() => {
        if (bgMusic.volume > 0.02) {
          bgMusic.volume -= 0.02;
        } else {
          clearInterval(fadeOut);
          bgMusic.pause();
        }
      }, 100);
    }

    setTimeout(() => document.body.classList.add("fade-out"), 800);
    setTimeout(() => (window.location.href = "lanh.html"), 1800);
  }

  mainHeart.addEventListener("click", smoothRedirect);
  goButton.addEventListener("click", smoothRedirect);
}

