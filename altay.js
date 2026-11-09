const start = document.querySelector('#start');
const progress = document.querySelector('#progress');
const stages = [...document.querySelectorAll('.stage')];
const route = document.querySelector('#route');
const timing = document.querySelector('#timing');
const estimates = [...document.querySelectorAll('[data-duration]')].map(node => node.textContent);
const total = document.querySelector('#total');
const indoorRoute = stages[2].querySelectorAll('.pick')[1].dataset.choice;
const outdoorTitle = document.querySelector('#day-three-title').textContent;
const outdoorRoute = document.querySelector('#day-three').textContent;
let step = 0;
let startedAt;
let selections = [];
let durations = [];

function showStep(section) {
  section.querySelector('h2').focus({preventScroll: true});
  section.scrollIntoView({block: 'start'});
}

function activateStage(index) {
  stages.forEach((stage, position) => {
    stage.classList.toggle('active', position === index);
    stage.querySelectorAll('.pick').forEach(button => {
      button.hidden = position !== index;
    });
  });
}

function formatTime(milliseconds) {
  const seconds = milliseconds / 1000;
  if (seconds < 60) return `${seconds.toFixed(1)} 秒`;
  return `${Math.floor(seconds / 60)} 分 ${Math.floor(seconds % 60)} 秒`;
}

start.addEventListener('click', () => {
  step = 0;
  selections = [];
  durations = [];
  stages.forEach((stage, index) => {
    document.querySelector(`[data-duration="${stage.id}"]`).textContent = estimates[index];
  });
  total.textContent = '计时中';
  progress.textContent = '模拟已开始。依次选酒店、主餐和路线。';
  start.textContent = '重新计时';
  route.hidden = true;
  timing.hidden = true;
  activateStage(0);
  showStep(stages[0]);
  startedAt = performance.now();
});

stages.forEach((stage, index) => {
  stage.addEventListener('click', event => {
    const button = event.target.closest('button[data-choice]');
    if (!button || index !== step || startedAt === undefined) return;

    const now = performance.now();
    durations.push(now - startedAt);
    selections.push(button.dataset.choice);
    step += 1;
    activateStage(step);
    if (step < stages.length) {
      showStep(stages[step]);
      startedAt = performance.now();
      return;
    }

    const [hotel, food, plan] = selections;
    const indoor = plan === indoorRoute;
    document.querySelector('#hotel-result').textContent = hotel;
    document.querySelector('#food-result').textContent = food;
    document.querySelector('#day-three-title').textContent = indoor ? '市区室内半日' : outdoorTitle;
    document.querySelector('#day-three').textContent = indoor
      ? '酒店 → 阿勒泰博物馆 → 市区吃饭补给。博物馆当天闭馆就改逛解放路商圈。'
      : outdoorRoute;
    stages.forEach((section, position) => {
      document.querySelector(`[data-duration="${section.id}"]`).textContent = formatTime(durations[position]);
    });
    total.textContent = formatTime(durations.reduce((sum, duration) => sum + duration, 0));
    startedAt = undefined;
    start.textContent = '再模拟一次';
    progress.textContent = '模拟已完成。路线和决策用时已更新。';
    route.hidden = false;
    timing.hidden = false;
    showStep(route);
  });
});
