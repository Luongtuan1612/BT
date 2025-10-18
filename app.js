// 🌸 Xác định trang hiện tại
const isHome = document.body.classList.contains("home");
const isBirthday = document.body.classList.contains("birthday");

/* 🌷 TRANG CHÍNH (index.html) */
if (isHome) {
  // 🎶 Nhạc nền lofi (fade in nhẹ)
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

  // 💥 Click chuyển sang birthday.html
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
    setTimeout(() => (window.location.href = "birthday.html"), 1800);
  }

  mainHeart.addEventListener("click", smoothRedirect);
  goButton.addEventListener("click", smoothRedirect);
}

/* 🎂 TRANG SINH NHẬT (birthday.html) */
if (isBirthday) {
  const textElement = document.getElementById("typewriter");
  const hiddenText = document.getElementById("typewriterText");
  const baseSound = new Audio("videos/gphim.mp3");
  baseSound.volume = 0.8;

  // 🎵 tạo 3 bản sao âm thanh để tránh delay
  const sounds = [baseSound, baseSound.cloneNode(), baseSound.cloneNode()];
  let soundIndex = 0;

  // 🖋️ Hàm gõ chữ
  function startTyping() {
    const content = hiddenText.innerHTML.trim();
    let i = 0;

    function typeWriter() {
      if (i < content.length) {
        textElement.innerHTML =
          content.substring(0, i) + (i % 10 < 5 ? "|" : "");

        const ch = content[i];
        if (ch !== " " && ch !== "\n" && ch !== "<" && ch !== ">") {
          const s = sounds[soundIndex];
          s.currentTime = 0;
          s.play().catch(() => {});
          soundIndex = (soundIndex + 1) % sounds.length;
        }

        i++;
        setTimeout(typeWriter, 40);
      } else {
        textElement.innerHTML = content;
      }
    }

    typeWriter();
  }

  // 🚀 Mở khóa âm thanh rồi gõ ngay
  document.body.addEventListener(
    "click",
    () => {
      baseSound.play().then(() => {
        baseSound.pause();
        baseSound.currentTime = 0;
        startTyping();
      });
    },
    { once: true }
  );

  // 🌸 Ảnh, tim & hoa bay
  setTimeout(() => {
    const images = [
      "images/lananh1.jpg","images/lananh2.jpg","images/lananh3.jpg",
      "images/lananh4.jpg","images/lananh5.jpg","images/lananh6.jpg",
      "images/lananh7.jpg","images/lananh8.jpg","images/lananh9.jpg"
    ];

    setInterval(() => {
      const photo = document.createElement("img");
      photo.src = images[Math.floor(Math.random() * images.length)];
      photo.classList.add("photo-rise");
      photo.style.left = Math.random() * 90 + "vw";
      photo.style.width = Math.random() * 80 + 100 + "px";
      photo.style.animationDuration = Math.random() * 5 + 10 + "s";
      document.body.appendChild(photo);
      setTimeout(() => photo.remove(), 15000);
    }, 2000);

    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart-rise");
      heart.innerHTML = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 25 + 15 + "px";
      heart.style.animationDuration = Math.random() * 4 + 6 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    }, 900);

    setInterval(() => {
      const petal = document.createElement("div");
      petal.classList.add("petal");
      petal.innerHTML = "🌸";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.fontSize = Math.random() * 18 + 10 + "px";
      petal.style.animationDuration = Math.random() * 6 + 6 + "s";
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 8000);
    }, 2500);
  }, 2500);
}
