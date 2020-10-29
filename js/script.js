// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Oct 31, 2020'),
// });

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);



const refs = {
  fieldDays: document.querySelector('.field>span[data-value="days"]'),
  fieldHours:document.querySelector('.field>span[data-value="hours"]'),
  fieldMinutes: document.querySelector('.field>span[data-value="mins"]'),
  fieldSeconds: document.querySelector('.field>span[data-value="secs"]'),
}




const timer = {
  start() { 
  
    const targetDate = new Date('Oct 31, 2021');
   
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = (currentTime - targetDate)*-1;
      const {days,hours,mins,secs} = getTimeComponents(deltaTime);
      console.log(`${days}:${hours}:${mins}:${secs}`)
      updateClockFace({days,hours,mins,secs});
    }, 1000)
  },
}

function getTimeComponents(time) {
 const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
return {days,hours,mins,secs}
}

function pad(value) {
  return String(value).padStart(2,'0')
}

timer.start();
function updateClockFace({ days, hours, mins, secs }) {
  refs.fieldDays.textContent = `${days}`;
  refs.fieldHours.textContent = `${hours}`;
  refs.fieldMinutes.textContent = `${mins}`;
  refs.fieldSeconds.textContent = `${secs}`;
}