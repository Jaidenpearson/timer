const commandInput = process.argv.slice(2),

const runTimer = commandInput.forEach(element => {
  let timerInput = parseInt(element, 10)
  timerFunction(timerInput)
})

const timerFunction = (num) => {
  if (!Number.isInteger(num) || num <= 0 || num === undefined) {
    return;
  }
  process.stdout.write(`\r${num} seconds timer is running \n`);
  setTimeout(() => process.stdout.write(`${num} SECONDS TIMER IS UP \x07 \n`), num * 1000);
}