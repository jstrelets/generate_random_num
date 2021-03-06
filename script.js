
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

    if (a < -999999 || a > 999999 ) {
        result.classList.add('error')
        return result.textContent = 'Недопустимое первое значение';
    } else if (b < -999999 || b > 999999 ) {
        result.classList.add('error')
        return result.textContent = 'Недопустимое последнее значениие';
    } else if (a === '' || b === '') {
        result.classList.add('error')
        return result.textContent = 'Заполните все поля';
    } else if (a > b) {
        result.classList.add('error')
        return result.textContent = 'Второе значение не может быть меньше первого';
    }

    return result.textContent = `${generateRandomNumber(a, b)}`;
});
