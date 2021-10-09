
const firstNum = document.querySelector('[data-number1]'),
      secondNum = document.querySelector('[data-number2]'),
      result = document.querySelector('.result'),
      btn = document.querySelector('.btn');


function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

btn.addEventListener('click', () => {
    const a = firstNum.value,
          b = secondNum.value;

    result.textContent = `${generateRandomNumber(a, b)}`;
});
