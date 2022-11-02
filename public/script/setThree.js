const qBlock = document.querySelector('.questions-block');// Весь блок

// const checkFalse = document.querySelector('.check-false');
// const cardHeader = document.querySelector('.card-header');

// const myEvent = new CustomEvent('my-event', {
//   detail: {
//     spicy: 123,
//   },
// });

// window.addEventListener('my-event', (evt) => {
//   console.log('В поле spicy:', evt.detail.spicy);
// });

// window.dispatchEvent(myEvent);

qBlock.addEventListener('click', async (event) => {
  // event.stopPropagation();
  // console.log(event.composedPath());
  event.preventDefault();

  console.log('EVENT-Children--->', event.target.children);
  console.log('EVENT-Target--->', event.target);
  console.log('EVENTTagNAME--->', event.target.tagName);
  console.log('EVENTlassName--->', event.target.className);
  console.log('EVENTVALUE--->', event.target.value);
  console.log('EVENT-Dataset--->', event.target.dataset.id);
  console.log('EVENT-Style--->', event.target.style);
  // window.location.assign('../decks');
  if (event.target.tagName === 'BUTTON') {
    const inputTarget = event.target;// куда нажали
    const parentTarget = inputTarget.closest('[data-id]'); // получмли предка с data-id//card-body
    const cardHeader = parentTarget.firstElementChild;// Нашли card-header

    const checkFalse = parentTarget.querySelector('.check-false');
    const checkTrue = parentTarget.querySelector('.check-true');
    //
    const buutinGroup = parentTarget.querySelectorAll('button');
    //
    const setId = parentTarget.dataset.id; // Получили Id для Post
    const answer = inputTarget.innerText; // Получили Answer для Post
    //
    const checkAnswer = await fetch('/check/3', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: setId, answer }),
    });

    const resultAnswer = await checkAnswer.json();
    console.log('▶ ⇛ resultAnswer', resultAnswer);

    function checkRender(res) {
      if (res) {
        checkTrue.hidden = false;
        cardHeader.classList.add('green');
      } else {
        checkFalse.hidden = false;
        cardHeader.classList.add('red');
      }
      for (const node of buutinGroup) {
        node.setAttribute('disabled', 'true');
        console.log(node); // покажет все узлы из коллекции
      }
    }
    checkRender(resultAnswer);
  }
});
