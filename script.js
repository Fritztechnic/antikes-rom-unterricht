const activateTab = (tab, { focus = false } = {}) => {
  const container = tab.closest('.panel');
  const tabs = Array.from(container.querySelectorAll('.tab'));
  const panels = container.querySelectorAll('.tab-panel');

  tabs.forEach((item) => {
    item.classList.remove('is-active');
    item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
    item.tabIndex = item === tab ? 0 : -1;
  });

  panels.forEach((panel) => {
    const active = panel.id === tab.getAttribute('aria-controls');
    panel.hidden = !active;
    panel.classList.toggle('is-active', active);
  });

  tab.classList.add('is-active');
  if (focus) {
    tab.focus();
  }
};

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', (event) => {
    const tabs = Array.from(tab.closest('.panel').querySelectorAll('.tab'));
    const currentIndex = tabs.indexOf(tab);
    let targetTab = null;

    if (event.key === 'ArrowRight') {
      targetTab = tabs[(currentIndex + 1) % tabs.length];
    } else if (event.key === 'ArrowLeft') {
      targetTab = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
    } else if (event.key === 'Home') {
      targetTab = tabs[0];
    } else if (event.key === 'End') {
      targetTab = tabs[tabs.length - 1];
    }

    if (targetTab) {
      event.preventDefault();
      activateTab(targetTab, { focus: true });
    }
  });
});

const quiz = document.querySelector('[data-quiz]');
const quizButton = document.querySelector('[data-quiz-submit]');
const quizResult = document.querySelector('[data-quiz-result]');

if (quiz && quizButton && quizResult) {
  const evaluateQuiz = () => {
    const answers = ['q1', 'q2', 'q3'];
    const score = answers.reduce((total, name) => {
      const selected = quiz.querySelector(`input[name="${name}"]:checked`);
      return total + (selected?.value === 'correct' ? 1 : 0);
    }, 0);

    quizResult.classList.remove('is-good', 'is-mid', 'is-low');

    if (score === answers.length) {
      quizResult.textContent = '3/3 – Stark! Ihr könnt direkt in die Sicherungsphase übergehen.';
      quizResult.classList.add('is-good');
    } else if (score >= 2) {
      quizResult.textContent = `${score}/3 – Gut. Prüft noch einmal, wie Lage und Infrastruktur zusammenhängen.`;
      quizResult.classList.add('is-mid');
    } else {
      quizResult.textContent = `${score}/3 – Wiederholt kurz die Karten und Diagramme, bevor ihr bewertet.`;
      quizResult.classList.add('is-low');
    }
  };

  quiz.addEventListener('submit', (event) => {
    event.preventDefault();
    evaluateQuiz();
  });
}
