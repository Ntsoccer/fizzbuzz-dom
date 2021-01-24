
const btn = document.getElementById('btn');


btn.addEventListener('click', () => AddFizzBuzz());


const AddFizzBuzz = function () {
  const FizzNum = Number(document.getElementById('FizzNum').value);
  const BuzzNum = Number(document.getElementById('BuzzNum').value);
  const output = document.getElementById('output');

  document.getElementById('FizzNum').value = "";
  document.getElementById('BuzzNum').value = "";
  output.innerHTML = "";
  let ptag = document.createElement('p');
  ptag.textContent = "[出力]"
  output.appendChild(ptag);

  if (!Number.isInteger(FizzNum) || !Number.isInteger(BuzzNum) || FizzNum === 0 || BuzzNum === 0) {
    ptag.textContent = '整数値を入力してください';
    output.appendChild(ptag);
  }

  for (let i = 1; i < 100; i++) {
    let value = "";
    if (i % FizzNum === 0 && i % BuzzNum === 0) {
      value = `FizzBuzz ${i}`;
    } else if (i % FizzNum === 0) {
      value = `Fizz ${i}`
    } else if (i % BuzzNum === 0) {
      value = `Buzz ${i}`
    } else {
      value = ""
    }
    const p = document.createElement('p')
    p.textContent = value;
    output.appendChild(p);
  }
}