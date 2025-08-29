// Question 1: Show answer, then reveal Next Question button
const btn1 = document.getElementById('show-answer');
const answer1 = document.getElementById('answer');
const next1 = document.getElementById('next1');
const q2 = document.getElementById('q2');

btn1.addEventListener('click', () => {
  answer1.style.display = 'block';
  next1.classList.remove('hidden'); // show Next button
});

next1.addEventListener('click', () => {
  q2.classList.remove('hidden'); // show next question
  next1.style.display = 'none'; // hide this button
});

// Buttons
const medsYesBtn = document.getElementById('meds-yes-btn');
const medsNoBtn = document.getElementById('meds-no-btn');
const medsYes = document.getElementById('meds-yes');
const medsNo = document.getElementById('meds-no');
const medsNoExtraBtn = document.getElementById('meds-no-extra-btn');
const medsNoExtra = document.getElementById('meds-no-extra');
const next2 = document.getElementById('next2');
const q3 = document.getElementById('q3');

// Yes button
medsYesBtn.addEventListener('click', () => {
  medsYes.style.display = 'block';
  medsNo.style.display = 'none';
  medsNoExtraBtn.style.display = 'none';
  medsNoExtra.style.display = 'none';
  next2.classList.remove('hidden');
});

// No button
medsNoBtn.addEventListener('click', () => {
  medsNo.style.display = 'block';
  medsNoExtraBtn.style.display = 'inline-block'; // show the extra button
  medsYes.style.display = 'none';
});

// Extra button for No
medsNoExtraBtn.addEventListener('click', () => {
  medsNoExtra.style.display = 'block';
  next2.classList.remove('hidden'); // allow moving to next question
  medsNoExtraBtn.style.display = 'none'; // hide button after clicking
});

// Next Question button
next2.addEventListener('click', () => {
  q3.classList.remove('hidden');
  next2.style.display = 'none';
});


const sleepYesBtn = document.getElementById('sleep-yes-btn');
const sleepNoBtn = document.getElementById('sleep-no-btn');
const sleepYes = document.getElementById('sleep-yes');
const sleepNo = document.getElementById('sleep-no');

sleepYesBtn.addEventListener('click', () => {
  sleepYes.style.display = 'block';
  sleepNo.style.display = 'none';
});

sleepNoBtn.addEventListener('click', () => {
  sleepNo.style.display = 'block';
  sleepYes.style.display = 'none';
});

// Show final note after answering sleep question
sleepYesBtn.addEventListener('click', () => {
  sleepYes.style.display = 'block';
  sleepNo.style.display = 'none';
  document.getElementById('final-note').classList.remove('hidden');
});

sleepNoBtn.addEventListener('click', () => {
  sleepNo.style.display = 'block';
  sleepYes.style.display = 'none';
  document.getElementById('final-note').classList.remove('hidden');
});
