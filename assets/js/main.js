const GUESS_WORDS = [
  { word: "boom", image: "assets/img/boom.png", emoji: "🌳" },
  { word: "huis", image: "assets/img/huis.png", emoji: "🏠" },
  { word: "hond", image: "assets/img/hond.png", emoji: "🐶" },
  { word: "maan", image: "assets/img/maan.png", emoji: "🌙" },
  { word: "boek", image: "assets/img/boek.png", emoji: "📘" },
  { word: "muts", image: null, emoji: "🧶" },
  { word: "kat", image: null, emoji: "🐱" },
  { word: "vis", image: null, emoji: "🐟" },
  { word: "zon", image: null, emoji: "☀️" },
  { word: "ster", image: null, emoji: "⭐" },
  { word: "deur", image: null, emoji: "🚪" },
  { word: "raam", image: null, emoji: "🪟" },
  { word: "tafel", image: null, emoji: "🪑" },
  { word: "stoel", image: null, emoji: "🪑" },
  { word: "bord", image: null, emoji: "🍽️" },
  { word: "mes", image: null, emoji: "🔪" },
  { word: "vork", image: null, emoji: "🍴" },
  { word: "lepel", image: null, emoji: "🥄" },
  { word: "brood", image: null, emoji: "🍞" },
  { word: "melk", image: null, emoji: "🥛" },
  { word: "kaas", image: null, emoji: "🧀" },
  { word: "appel", image: null, emoji: "🍎" },
  { word: "peer", image: null, emoji: "🍐" },
  { word: "banaan", image: null, emoji: "🍌" },
  { word: "neus", image: null, emoji: "👃" },
  { word: "oor", image: null, emoji: "👂" },
  { word: "mond", image: null, emoji: "👄" },
  { word: "hand", image: null, emoji: "✋" },
  { word: "voet", image: null, emoji: "🦶" },
  { word: "jas", image: null, emoji: "🧥" },
  { word: "sok", image: null, emoji: "🧦" },
  { word: "broek", image: null, emoji: "👖" },
  { word: "trui", image: null, emoji: "🧶" },
  { word: "pet", image: null, emoji: "🧢" },
  { word: "fiets", image: null, emoji: "🚲" },
  { word: "bus", image: null, emoji: "🚌" },
  { word: "trein", image: null, emoji: "🚆" },
  { word: "boot", image: null, emoji: "⛵" },
  { word: "auto", image: null, emoji: "🚗" },
  { word: "vuur", image: null, emoji: "🔥" },
  { word: "gras", image: null, emoji: "🌿" },
  { word: "bloem", image: null, emoji: "🌸" },
  { word: "roos", image: null, emoji: "🌹" },
  { word: "wolk", image: null, emoji: "☁️" },
  { word: "regen", image: null, emoji: "🌧️" },
  { word: "sneeuw", image: null, emoji: "❄️" },
  { word: "ijs", image: null, emoji: "🧊" },
  { word: "doos", image: null, emoji: "📦" },
  { word: "bal", image: null, emoji: "⚽" },
  { word: "pop", image: null, emoji: "🪆" },
  { word: "beer", image: null, emoji: "🧸" },
  { word: "krab", image: null, emoji: "🦀" },
  { word: "slak", image: null, emoji: "🐌" },
  { word: "muis", image: null, emoji: "🐭" },
  { word: "koek", image: null, emoji: "🍪" },
  { word: "soep", image: null, emoji: "🍲" }
];

const BUILD_WORDS = [
  { word: "boek", image: "assets/img/boek.png", type: "klank", emoji: "📘" },
  { word: "dier", image: "assets/img/dier.png", type: "klank", emoji: "🐾" },
  { word: "maan", image: "assets/img/maan.png", type: "klank", emoji: "🌙" },
  { word: "muts", image: null, type: "normaal", emoji: "🧶" },
  { word: "kat", image: null, type: "normaal", emoji: "🐱" },
  { word: "vis", image: null, type: "normaal", emoji: "🐟" },
  { word: "zon", image: null, type: "normaal", emoji: "☀️" },
  { word: "ster", image: null, type: "normaal", emoji: "⭐" },
  { word: "deur", image: null, type: "klank", emoji: "🚪" },
  { word: "raam", image: null, type: "klank", emoji: "🪟" },
  { word: "bord", image: null, type: "normaal", emoji: "🍽️" },
  { word: "mes", image: null, type: "normaal", emoji: "🔪" },
  { word: "vork", image: null, type: "normaal", emoji: "🍴" },
  { word: "brood", image: null, type: "klank", emoji: "🍞" },
  { word: "melk", image: null, type: "normaal", emoji: "🥛" },
  { word: "kaas", image: null, type: "klank", emoji: "🧀" },
  { word: "appel", image: null, type: "normaal", emoji: "🍎" },
  { word: "peer", image: null, type: "klank", emoji: "🍐" },
  { word: "neus", image: null, type: "klank", emoji: "👃" },
  { word: "oor", image: null, type: "klank", emoji: "👂" },
  { word: "mond", image: null, type: "normaal", emoji: "👄" },
  { word: "hand", image: null, type: "normaal", emoji: "✋" },
  { word: "voet", image: null, type: "klank", emoji: "🦶" },
  { word: "jas", image: null, type: "normaal", emoji: "🧥" },
  { word: "sok", image: null, type: "normaal", emoji: "🧦" },
  { word: "trui", image: null, type: "normaal", emoji: "🧶" },
  { word: "pet", image: null, type: "normaal", emoji: "🧢" },
  { word: "fiets", image: null, type: "klank", emoji: "🚲" },
  { word: "bus", image: null, type: "normaal", emoji: "🚌" },
  { word: "trein", image: null, type: "klank", emoji: "🚆" },
  { word: "boot", image: null, type: "klank", emoji: "⛵" },
  { word: "auto", image: null, type: "normaal", emoji: "🚗" },
  { word: "vuur", image: null, type: "klank", emoji: "🔥" },
  { word: "gras", image: null, type: "normaal", emoji: "🌿" },
  { word: "bloem", image: null, type: "klank", emoji: "🌸" },
  { word: "roos", image: null, type: "klank", emoji: "🌹" },
  { word: "wolk", image: null, type: "normaal", emoji: "☁️" },
  { word: "regen", image: null, type: "normaal", emoji: "🌧️" },
  { word: "sneeuw", image: null, type: "klank", emoji: "❄️" },
  { word: "ijs", image: null, type: "klank", emoji: "🧊" },
  { word: "doos", image: null, type: "klank", emoji: "📦" },
  { word: "bal", image: null, type: "normaal", emoji: "⚽" },
  { word: "pop", image: null, type: "normaal", emoji: "🪆" },
  { word: "beer", image: null, type: "klank", emoji: "🧸" },
  { word: "krab", image: null, type: "normaal", emoji: "🦀" },
  { word: "slak", image: null, type: "normaal", emoji: "🐌" },
  { word: "muis", image: null, type: "normaal", emoji: "🐭" },
  { word: "koek", image: null, type: "klank", emoji: "🍪" },
  { word: "soep", image: null, type: "klank", emoji: "🍲" },
  { word: "ei", image: null, type: "klank", emoji: "🥚" },
  { word: "wiel", image: null, type: "klank", emoji: "🛞" },
  { word: "ring", image: null, type: "normaal", emoji: "💍" },
  { word: "lamp", image: null, type: "normaal", emoji: "💡" },
  { word: "klok", image: null, type: "normaal", emoji: "🕒" }
];

const KLANKEN = ["oe", "ie", "oo", "ee", "eu", "aa"];
const QUESTIONS_PER_ROUND = 4;

const els = {
  score: document.getElementById("score-display"),
  progress: document.getElementById("progress-bar"),
  menu: document.getElementById("menu-screen"),
  guess: document.getElementById("guess-screen"),
  build: document.getElementById("build-screen"),
  end: document.getElementById("end-screen"),
  endTitle: document.getElementById("end-title"),
  endMessage: document.getElementById("end-message"),
  guessImage: document.getElementById("guess-image"),
  guessEmoji: document.getElementById("guess-emoji"),
  guessAnswers: document.getElementById("guess-answers"),
  guessFeedback: document.getElementById("guess-feedback"),
  buildImage: document.getElementById("build-image"),
  buildEmoji: document.getElementById("build-emoji"),
  buildSlots: document.getElementById("build-slots"),
  buildLetters: document.getElementById("build-letters"),
  buildFeedback: document.getElementById("build-feedback")
};

const state = {
  game: null,
  score: 0,
  index: 0,
  roundWords: [],
  currentBuildWord: null,
  slotUnits: [],
  slotValues: [],
  selectedLetterBtn: null,
  dragLetter: null
};

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom(list, amount) {
  return shuffle(list).slice(0, Math.min(amount, list.length));
}

function setScreen(screenName) {
  const map = {
    menu: els.menu,
    guess: els.guess,
    build: els.build,
    end: els.end
  };

  Object.values(map).forEach((node) => node.classList.remove("active"));
  map[screenName].classList.add("active");
}

function updateScore() {
  els.score.textContent = String(state.score);
}

function updateProgress() {
  const total = state.roundWords.length || 1;
  const pct = Math.round((state.index / total) * 100);
  els.progress.style.width = `${pct}%`;
}

function showWordImage(imgEl, emojiEl, wordObj) {
  if (!wordObj.image) {
    imgEl.removeAttribute("src");
    imgEl.style.display = "none";
    emojiEl.style.display = "block";
    emojiEl.textContent = wordObj.emoji || "🧩";
    return;
  }

  imgEl.src = wordObj.image;
  imgEl.alt = wordObj.word;
  imgEl.onerror = () => {
    imgEl.style.display = "none";
    emojiEl.style.display = "block";
    emojiEl.textContent = wordObj.emoji || "🧩";
  };
  imgEl.onload = () => {
    imgEl.style.display = "block";
    emojiEl.style.display = "none";
  };
}

function speak(text) {
  if (!window.speechSynthesis) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "nl-NL";
  utterance.rate = 0.85;
  utterance.pitch = 1.15;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function playTone(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === "good") {
      osc.frequency.value = 660;
      osc.type = "sine";
    } else {
      osc.frequency.value = 280;
      osc.type = "sawtooth";
    }

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.32);
  } catch (_) {
    // Ignore audio errors.
  }
}

const confetti = {
  canvas: document.getElementById("confetti-canvas"),
  ctx: null,
  particles: [],
  raf: null
};
confetti.ctx = confetti.canvas.getContext("2d");

function startConfetti() {
  const { canvas, ctx } = confetti;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  confetti.particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height * 0.4,
    w: 7 + Math.random() * 10,
    h: 4 + Math.random() * 7,
    c: ["#ffd166", "#ff6b6b", "#06d6a0", "#118ab2", "#ffffff"][Math.floor(Math.random() * 5)],
    s: 2 + Math.random() * 4,
    a: Math.random() * 360
  }));

  if (confetti.raf) {
    cancelAnimationFrame(confetti.raf);
  }

  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.particles.forEach((p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.a * Math.PI) / 180);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
      p.y += p.s;
      p.a += 3;
    });
    confetti.raf = requestAnimationFrame(tick);
  };

  tick();
  setTimeout(() => {
    cancelAnimationFrame(confetti.raf);
    confetti.ctx.clearRect(0, 0, confetti.canvas.width, confetti.canvas.height);
  }, 1400);
}

function finishRound() {
  setScreen("end");
  const total = state.roundWords.length;
  const pct = Math.round((state.score / total) * 100);

  if (pct === 100) {
    els.endTitle.textContent = "Wauw, perfect!";
    els.endMessage.textContent = `Je had ${state.score} van de ${total} goed!`;
    startConfetti();
  } else if (pct >= 75) {
    els.endTitle.textContent = "Super gedaan!";
    els.endMessage.textContent = `Je had ${state.score} van de ${total} goed.`;
  } else {
    els.endTitle.textContent = "Goed geoefend!";
    els.endMessage.textContent = `Je had ${state.score} van de ${total} goed. Nog een ronde?`;
  }

  speak(els.endTitle.textContent);
  els.progress.style.width = "100%";
}

function startGuessGame() {
  state.game = "guess";
  state.score = 0;
  state.index = 0;
  state.roundWords = pickRandom(GUESS_WORDS, QUESTIONS_PER_ROUND);

  updateScore();
  updateProgress();
  els.guessFeedback.textContent = "";
  els.guessFeedback.className = "feedback";
  setScreen("guess");
  renderGuessQuestion();
}

function renderGuessQuestion() {
  if (state.index >= state.roundWords.length) {
    finishRound();
    return;
  }

  const current = state.roundWords[state.index];
  updateProgress();
  showWordImage(els.guessImage, els.guessEmoji, current);

  const wrongChoices = shuffle(GUESS_WORDS.filter((item) => item.word !== current.word)).slice(0, 3);
  const options = shuffle([current, ...wrongChoices]);

  els.guessAnswers.innerHTML = "";
  els.guessFeedback.textContent = "";
  els.guessFeedback.className = "feedback";

  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = option.word;
    btn.addEventListener("click", () => {
      const correct = option.word === current.word;
      if (correct) {
        state.score += 1;
        updateScore();
        els.guessFeedback.textContent = "Goed gedaan! 🎉";
        els.guessFeedback.className = "feedback good";
        btn.classList.add("correct");
        playTone("good");
        startConfetti();
        setTimeout(() => {
          state.index += 1;
          renderGuessQuestion();
        }, 800);
      } else {
        els.guessFeedback.textContent = "Probeer nog eens 😊";
        els.guessFeedback.className = "feedback bad";
        btn.classList.add("wrong");
        playTone("bad");
        setTimeout(() => btn.classList.remove("wrong"), 400);
      }
    });
    els.guessAnswers.appendChild(btn);
  });

  setTimeout(() => speak(current.word), 350);
}

function splitInUnits(wordObj) {
  if (wordObj.type !== "klank") {
    return wordObj.word.split("");
  }

  const units = [];
  let rest = wordObj.word;

  while (rest.length > 0) {
    let found = null;
    for (const k of KLANKEN) {
      if (rest.startsWith(k)) {
        found = k;
        break;
      }
    }

    if (found) {
      units.push(found);
      rest = rest.slice(found.length);
    } else {
      units.push(rest[0]);
      rest = rest.slice(1);
    }
  }

  return units;
}

function startBuildGame() {
  state.game = "build";
  state.score = 0;
  state.index = 0;
  state.roundWords = pickRandom(BUILD_WORDS, QUESTIONS_PER_ROUND);
  state.selectedLetterBtn = null;
  state.dragLetter = null;

  updateScore();
  updateProgress();
  els.buildFeedback.textContent = "";
  els.buildFeedback.className = "feedback";
  setScreen("build");
  renderBuildQuestion();
}

function createSlot(index) {
  const slot = document.createElement("div");
  slot.className = "slot";
  slot.dataset.index = String(index);

  slot.addEventListener("dragover", (event) => {
    event.preventDefault();
    slot.classList.add("highlight");
  });

  slot.addEventListener("dragleave", () => {
    slot.classList.remove("highlight");
  });

  slot.addEventListener("drop", (event) => {
    event.preventDefault();
    slot.classList.remove("highlight");
    const letter = event.dataTransfer.getData("text/plain") || state.dragLetter;
    if (!letter) return;
    placeLetterInSlot(letter, index);
  });

  slot.addEventListener("click", () => {
    if (!state.selectedLetterBtn) return;
    const letter = state.selectedLetterBtn.dataset.letter;
    placeLetterInSlot(letter, index, state.selectedLetterBtn);
  });

  return slot;
}

function createLetterTile(letter) {
  const btn = document.createElement("button");
  btn.className = "letter-tile";
  btn.type = "button";
  btn.draggable = true;
  btn.textContent = letter;
  btn.dataset.letter = letter;

  btn.addEventListener("dragstart", (event) => {
    state.dragLetter = letter;
    event.dataTransfer.setData("text/plain", letter);
  });

  btn.addEventListener("click", () => {
    if (state.selectedLetterBtn === btn) {
      btn.classList.remove("selected");
      state.selectedLetterBtn = null;
      return;
    }

    if (state.selectedLetterBtn) {
      state.selectedLetterBtn.classList.remove("selected");
    }

    state.selectedLetterBtn = btn;
    btn.classList.add("selected");

    const nextEmpty = state.slotValues.findIndex((value) => value === "");
    if (nextEmpty >= 0) {
      placeLetterInSlot(letter, nextEmpty, btn);
    }
  });

  return btn;
}

function placeLetterInSlot(letter, slotIndex, letterBtn) {
  const nextEmpty = state.slotValues.findIndex((value) => value === "");
  if (slotIndex !== nextEmpty) {
    return;
  }

  if (state.slotValues[slotIndex] !== "") {
    return;
  }

  const tileBtn = letterBtn || Array.from(els.buildLetters.querySelectorAll(".letter-tile")).find((btn) => {
    return btn.dataset.letter === letter && !btn.disabled;
  });

  if (!tileBtn) {
    return;
  }

  state.slotValues[slotIndex] = letter;
  const slotEl = els.buildSlots.querySelector(`.slot[data-index="${slotIndex}"]`);
  slotEl.textContent = letter;
  slotEl.classList.add("filled");

  tileBtn.disabled = true;
  tileBtn.style.visibility = "hidden";
  tileBtn.classList.remove("selected");
  if (state.selectedLetterBtn === tileBtn) {
    state.selectedLetterBtn = null;
  }

  if (state.slotValues.every((item) => item !== "")) {
    checkBuildAnswer();
  }
}

function checkBuildAnswer() {
  const answer = state.slotValues.join("");
  const correctWord = state.currentBuildWord.word;

  if (answer === correctWord) {
    state.score += 1;
    updateScore();
    els.buildFeedback.textContent = "Goed gedaan! 🎉";
    els.buildFeedback.className = "feedback good";
    playTone("good");
    startConfetti();
    setTimeout(() => {
      state.index += 1;
      renderBuildQuestion();
    }, 900);
  } else {
    els.buildFeedback.textContent = "Probeer nog eens 😊";
    els.buildFeedback.className = "feedback bad";
    playTone("bad");

    setTimeout(() => {
      renderBuildQuestion(true);
    }, 550);
  }
}

function renderBuildQuestion(keepCurrentWord = false) {
  if (!keepCurrentWord && state.index >= state.roundWords.length) {
    finishRound();
    return;
  }

  if (!keepCurrentWord) {
    state.currentBuildWord = state.roundWords[state.index];
  }

  const current = state.currentBuildWord;
  state.slotUnits = splitInUnits(current);
  state.slotValues = Array.from({ length: state.slotUnits.length }, () => "");
  state.selectedLetterBtn = null;
  state.dragLetter = null;

  updateProgress();
  els.buildFeedback.textContent = "";
  els.buildFeedback.className = "feedback";

  showWordImage(els.buildImage, els.buildEmoji, current);

  els.buildSlots.innerHTML = "";
  state.slotUnits.forEach((_, i) => {
    els.buildSlots.appendChild(createSlot(i));
  });

  const letterPool = shuffle([...state.slotUnits]);
  els.buildLetters.innerHTML = "";
  letterPool.forEach((letter) => {
    els.buildLetters.appendChild(createLetterTile(letter));
  });

  setTimeout(() => speak(current.word), 350);
}

function backToMenu() {
  state.game = null;
  state.roundWords = [];
  state.index = 0;
  state.score = 0;
  updateScore();
  els.progress.style.width = "0%";
  setScreen("menu");
}

document.getElementById("btn-start-guess").addEventListener("click", startGuessGame);
document.getElementById("btn-start-build").addEventListener("click", startBuildGame);
document.getElementById("btn-play-again").addEventListener("click", () => {
  if (state.game === "build") {
    startBuildGame();
    return;
  }
  startGuessGame();
});
document.getElementById("btn-back-menu").addEventListener("click", backToMenu);

backToMenu();
