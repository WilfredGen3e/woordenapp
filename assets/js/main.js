const GUESS_WORDS = [
  { word: "boom", image: "assets/img/boom.png", emoji: "🌳" },
  { word: "huis", image: "assets/img/huis.png", emoji: "🏠" },
  { word: "hond", image: "assets/img/hond.png", emoji: "🐶" },
  { word: "maan", image: "assets/img/maan.png", emoji: "🌙" },
  { word: "boek", image: "assets/img/boek.png", emoji: "📘" },
  { word: "muts", image: "assets/img/muts.svg", emoji: "🧶" },
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
  { word: "muts", image: "assets/img/muts.svg", type: "normaal", emoji: "🧶" },
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
const GUESS_QUESTIONS_PER_ROUND = 10;
const BUILD_QUESTIONS_PER_ROUND = 10;
const MATH_QUESTIONS_PER_ROUND = 10;
const TAFELS_QUESTIONS_PER_ROUND = 10;

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
  buildFeedback: document.getElementById("build-feedback"),
  math: document.getElementById("math-screen"),
  mathQuestion: document.getElementById("math-question"),
  mathAnswers: document.getElementById("math-answers"),
  mathFeedback: document.getElementById("math-feedback"),
  tafels: document.getElementById("tafels-screen"),
  tafelsQuestion: document.getElementById("tafels-question"),
  tafelsAnswers: document.getElementById("tafels-answers"),
  tafelsFeedback: document.getElementById("tafels-feedback"),
  bke: document.getElementById("bke-screen"),
  bkeBoard: document.getElementById("bke-board"),
  bkeStatus: document.getElementById("bke-status"),
  bkeRestart: document.getElementById("btn-bke-restart")
};

const state = {
  game: null,
  score: 0,
  wrong: 0,
  index: 0,
  roundWords: [],
  currentBuildWord: null,
  slotUnits: [],
  slotValues: [],
  selectedLetterBtn: null,
  dragLetter: null,
  previousSessionWords: {
    guess: [],
    build: []
  }
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

function pickSessionWords(gameKey, list, amount) {
  const previous = new Set(state.previousSessionWords[gameKey] || []);
  const filtered = list.filter((item) => !previous.has(item.word));
  const source = filtered.length >= amount ? filtered : list;
  const picked = pickRandom(source, amount);
  state.previousSessionWords[gameKey] = picked.map((item) => item.word);
  return picked;
}

function setScreen(screenName) {
  const map = {
    menu: els.menu,
    guess: els.guess,
    build: els.build,
    math: els.math,
    tafels: els.tafels,
    bke: els.bke,
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
  const wrapEl = imgEl.closest(".image-wrap");

  if (!wordObj.image) {
    imgEl.removeAttribute("src");
    imgEl.style.display = "none";
    emojiEl.style.display = "block";
    emojiEl.textContent = wordObj.emoji || "🧩";
    if (wrapEl) {
      wrapEl.classList.add("emoji-mode");
    }
    return;
  }

  imgEl.src = wordObj.image;
  imgEl.alt = wordObj.word;
  imgEl.onerror = () => {
    imgEl.style.display = "none";
    emojiEl.style.display = "block";
    emojiEl.textContent = wordObj.emoji || "🧩";
    if (wrapEl) {
      wrapEl.classList.add("emoji-mode");
    }
  };
  imgEl.onload = () => {
    imgEl.style.display = "block";
    emojiEl.style.display = "none";
    if (wrapEl) {
      wrapEl.classList.remove("emoji-mode");
    }
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

  const wrongCount = state.wrong;
  const resultLine = `✅ ${state.score} goed  ❌ ${wrongCount} fout`;

  if (pct === 100) {
    els.endTitle.textContent = "Wauw, perfect!";
    els.endMessage.textContent = resultLine;
    startConfetti();
  } else if (pct >= 75) {
    els.endTitle.textContent = "Super gedaan!";
    els.endMessage.textContent = resultLine;
  } else {
    els.endTitle.textContent = "Goed geoefend!";
    els.endMessage.textContent = resultLine;
  }

  speak(els.endTitle.textContent);
  els.progress.style.width = "100%";
}

function startGuessGame() {
  state.game = "guess";
  state.score = 0;
  state.wrong = 0;
  state.index = 0;
  state.roundWords = pickSessionWords("guess", GUESS_WORDS, GUESS_QUESTIONS_PER_ROUND);

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
      const allBtns = Array.from(els.guessAnswers.querySelectorAll(".answer-btn"));
      allBtns.forEach((b) => { b.disabled = true; });

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
        }, 900);
      } else {
        state.wrong += 1;
        els.guessFeedback.textContent = "Helaas! Het was:";
        els.guessFeedback.className = "feedback bad";
        btn.classList.add("wrong");
        allBtns.find((b) => b.textContent === current.word)?.classList.add("correct");
        playTone("bad");
        setTimeout(() => {
          state.index += 1;
          renderGuessQuestion();
        }, 1400);
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
  state.wrong = 0;
  state.index = 0;
  state.roundWords = pickSessionWords("build", BUILD_WORDS, BUILD_QUESTIONS_PER_ROUND);
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
    state.wrong += 1;
    els.buildFeedback.textContent = `Helaas! Het was: ${correctWord}`;
    els.buildFeedback.className = "feedback bad";
    playTone("bad");
    Array.from(els.buildLetters.querySelectorAll(".letter-tile")).forEach((b) => { b.disabled = true; });
    setTimeout(() => {
      state.index += 1;
      renderBuildQuestion();
    }, 1400);
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

function generateTafelQuestions(amount) {
  const all = [];
  for (const a of [1, 2, 3]) {
    for (let b = 1; b <= 10; b++) {
      all.push({ a, b, answer: a * b });
    }
  }
  return pickRandom(all, amount);
}

function generateTafelChoices(correct) {
  const choices = new Set([correct]);
  const candidates = [];
  for (let d = 1; d <= 8; d++) {
    if (correct + d <= 30) candidates.push(correct + d);
    if (correct - d >= 1) candidates.push(correct - d);
  }
  for (const c of shuffle(candidates)) {
    if (choices.size >= 4) break;
    choices.add(c);
  }
  return shuffle([...choices]);
}

function startTafelsGame() {
  state.game = "tafels";
  state.score = 0;
  state.wrong = 0;
  state.index = 0;
  state.roundWords = generateTafelQuestions(TAFELS_QUESTIONS_PER_ROUND);

  updateScore();
  updateProgress();
  els.tafelsFeedback.textContent = "";
  els.tafelsFeedback.className = "feedback";
  setScreen("tafels");
  renderTafelsQuestion();
}

function renderTafelsQuestion() {
  if (state.index >= state.roundWords.length) {
    finishRound();
    return;
  }

  const q = state.roundWords[state.index];
  updateProgress();
  els.tafelsQuestion.textContent = `${q.a} × ${q.b} = ?`;
  els.tafelsFeedback.textContent = "";
  els.tafelsFeedback.className = "feedback";
  els.tafelsAnswers.innerHTML = "";

  const choices = generateTafelChoices(q.answer);
  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = String(choice);
    btn.addEventListener("click", () => {
      const allBtns = Array.from(els.tafelsAnswers.querySelectorAll(".answer-btn"));
      allBtns.forEach((b) => { b.disabled = true; });

      if (choice === q.answer) {
        state.score += 1;
        updateScore();
        els.tafelsFeedback.textContent = "Goed gedaan! 🎉";
        els.tafelsFeedback.className = "feedback good";
        btn.classList.add("correct");
        playTone("good");
        startConfetti();
        setTimeout(() => { state.index += 1; renderTafelsQuestion(); }, 900);
      } else {
        state.wrong += 1;
        els.tafelsFeedback.textContent = `Helaas! Het was: ${q.answer}`;
        els.tafelsFeedback.className = "feedback bad";
        btn.classList.add("wrong");
        allBtns.find((b) => Number(b.textContent) === q.answer)?.classList.add("correct");
        playTone("bad");
        setTimeout(() => { state.index += 1; renderTafelsQuestion(); }, 1400);
      }
    });
    els.tafelsAnswers.appendChild(btn);
  });

  speak(els.tafelsQuestion.textContent);
}

const BKE_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const bke = {
  board: Array(9).fill(null),
  gameOver: false,
  mode: "computer",
  currentPlayer: "X"
};

function bkeCheckWinner(board) {
  for (const [a, b, c] of BKE_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a, b, c] };
    }
  }
  if (board.every((cell) => cell !== null)) {
    return { winner: "draw", line: [] };
  }
  return null;
}

function bkeComputerMove(board) {
  const emptyAt = (line) => line.find((i) => board[i] === null);
  const countOf = (line, mark) => line.filter((i) => board[i] === mark).length;

  for (const line of BKE_LINES) {
    if (countOf(line, "O") === 2 && emptyAt(line) !== undefined) return emptyAt(line);
  }
  for (const line of BKE_LINES) {
    if (countOf(line, "X") === 2 && emptyAt(line) !== undefined) return emptyAt(line);
  }
  if (board[4] === null) return 4;
  const corners = [0, 2, 6, 8].filter((i) => board[i] === null);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  const empties = board.map((v, i) => (v === null ? i : -1)).filter((i) => i >= 0);
  return empties[Math.floor(Math.random() * empties.length)];
}

function bkeRenderBoard(winLine = []) {
  els.bkeBoard.innerHTML = "";
  bke.board.forEach((val, i) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = [
      "bke-cell",
      val === "X" ? "x" : val === "O" ? "o" : "",
      winLine.includes(i) ? "win" : ""
    ].join(" ").trim();
    cell.textContent = val || "";
    cell.disabled = !!val || bke.gameOver;
    cell.addEventListener("click", () => bkeHandleClick(i));
    els.bkeBoard.appendChild(cell);
  });
}

function bkeEnd(result) {
  bke.gameOver = true;
  if (result.winner === "draw") {
    els.bkeStatus.textContent = "Gelijkspel! 🤝";
  } else if (bke.mode === "computer") {
    els.bkeStatus.textContent = result.winner === "X" ? "Gewonnen! 🎉" : "Computer wint! 🤖";
    if (result.winner === "X") { playTone("good"); startConfetti(); } else { playTone("bad"); }
  } else {
    const label = result.winner === "X" ? "✕" : "○";
    els.bkeStatus.textContent = `Speler ${label} wint! 🎉`;
    playTone("good");
    startConfetti();
  }
  bkeRenderBoard(result.line);
  els.bkeRestart.style.display = "block";
}

function bkeHandleClick(index) {
  if (bke.gameOver || bke.board[index]) return;

  bke.board[index] = bke.currentPlayer;
  bkeRenderBoard();

  const result = bkeCheckWinner(bke.board);
  if (result) { bkeEnd(result); return; }

  if (bke.mode === "computer") {
    els.bkeStatus.textContent = "Computer denkt...";
    setTimeout(() => {
      const move = bkeComputerMove(bke.board);
      bke.board[move] = "O";
      const result2 = bkeCheckWinner(bke.board);
      if (result2) {
        bkeEnd(result2);
      } else {
        bkeRenderBoard();
        els.bkeStatus.textContent = "Jouw beurt! (✕)";
      }
    }, 420);
  } else {
    bke.currentPlayer = bke.currentPlayer === "X" ? "O" : "X";
    const label = bke.currentPlayer === "X" ? "✕" : "○";
    els.bkeStatus.textContent = `Speler ${label} is aan de beurt`;
    bkeRenderBoard();
  }
}

function startBkeWithMode(mode) {
  bke.board = Array(9).fill(null);
  bke.gameOver = false;
  bke.mode = mode;
  bke.currentPlayer = "X";

  document.getElementById("bke-mode-select").style.display = "none";
  document.getElementById("bke-game").style.display = "flex";

  els.bkeStatus.textContent = mode === "computer" ? "Jouw beurt! (✕)" : "Speler ✕ is aan de beurt";
  els.bkeRestart.style.display = "none";
  bkeRenderBoard();
}

function startBkeGame() {
  document.getElementById("bke-mode-select").style.display = "flex";
  document.getElementById("bke-game").style.display = "none";
  setScreen("bke");
}

function generateMathQuestion() {
  const isAdd = Math.random() < 0.5;
  if (isAdd) {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * (10 - a)) + 1;
    return { a, op: "+", b, answer: a + b };
  } else {
    const a = Math.floor(Math.random() * 9) + 2;
    const b = Math.floor(Math.random() * (a - 1)) + 1;
    return { a, op: "-", b, answer: a - b };
  }
}

function generateMathQuestions(amount) {
  const questions = [];
  const seen = new Set();
  let attempts = 0;
  while (questions.length < amount && attempts < 300) {
    attempts += 1;
    const q = generateMathQuestion();
    const key = `${q.a}${q.op}${q.b}`;
    if (!seen.has(key)) {
      seen.add(key);
      questions.push(q);
    }
  }
  return questions;
}

function generateMathChoices(correct) {
  const choices = new Set([correct]);
  const candidates = [];
  for (let d = 1; d <= 5; d++) {
    if (correct + d <= 10) candidates.push(correct + d);
    if (correct - d >= 0) candidates.push(correct - d);
  }
  for (const c of shuffle(candidates)) {
    if (choices.size >= 4) break;
    choices.add(c);
  }
  return shuffle([...choices]);
}

function startMathGame() {
  state.game = "math";
  state.score = 0;
  state.wrong = 0;
  state.index = 0;
  state.roundWords = generateMathQuestions(MATH_QUESTIONS_PER_ROUND);

  updateScore();
  updateProgress();
  els.mathFeedback.textContent = "";
  els.mathFeedback.className = "feedback";
  setScreen("math");
  renderMathQuestion();
}

function renderMathQuestion() {
  if (state.index >= state.roundWords.length) {
    finishRound();
    return;
  }

  const q = state.roundWords[state.index];
  updateProgress();
  els.mathQuestion.textContent = `${q.a} ${q.op} ${q.b} = ?`;
  els.mathFeedback.textContent = "";
  els.mathFeedback.className = "feedback";
  els.mathAnswers.innerHTML = "";

  const choices = generateMathChoices(q.answer);
  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.type = "button";
    btn.textContent = String(choice);
    btn.addEventListener("click", () => {
      const allBtns = Array.from(els.mathAnswers.querySelectorAll(".answer-btn"));
      allBtns.forEach((b) => { b.disabled = true; });

      if (choice === q.answer) {
        state.score += 1;
        updateScore();
        els.mathFeedback.textContent = "Goed gedaan! 🎉";
        els.mathFeedback.className = "feedback good";
        btn.classList.add("correct");
        playTone("good");
        startConfetti();
        setTimeout(() => {
          state.index += 1;
          renderMathQuestion();
        }, 900);
      } else {
        state.wrong += 1;
        els.mathFeedback.textContent = `Helaas! Het was: ${q.answer}`;
        els.mathFeedback.className = "feedback bad";
        btn.classList.add("wrong");
        allBtns.find((b) => Number(b.textContent) === q.answer)?.classList.add("correct");
        playTone("bad");
        setTimeout(() => {
          state.index += 1;
          renderMathQuestion();
        }, 1400);
      }
    });
    els.mathAnswers.appendChild(btn);
  });

  speak(els.mathQuestion.textContent);
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
document.getElementById("btn-abort-guess").addEventListener("click", backToMenu);
document.getElementById("btn-abort-build").addEventListener("click", backToMenu);
document.getElementById("btn-start-math").addEventListener("click", startMathGame);
document.getElementById("btn-abort-math").addEventListener("click", backToMenu);
document.getElementById("btn-start-tafels").addEventListener("click", startTafelsGame);
document.getElementById("btn-abort-tafels").addEventListener("click", backToMenu);
document.getElementById("btn-start-bke").addEventListener("click", startBkeGame);
document.getElementById("btn-abort-bke").addEventListener("click", backToMenu);
document.getElementById("btn-bke-vs-computer").addEventListener("click", () => startBkeWithMode("computer"));
document.getElementById("btn-bke-vs-player").addEventListener("click", () => startBkeWithMode("player"));
document.getElementById("btn-bke-restart").addEventListener("click", () => startBkeWithMode(bke.mode));
document.getElementById("btn-play-again").addEventListener("click", () => {
  if (state.game === "build") { startBuildGame(); return; }
  if (state.game === "math") { startMathGame(); return; }
  if (state.game === "tafels") { startTafelsGame(); return; }
  startGuessGame();
});
document.getElementById("btn-back-menu").addEventListener("click", backToMenu);

backToMenu();
