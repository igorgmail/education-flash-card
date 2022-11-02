const twoCardConteiner = document.getElementById('twoCardConteiner');

twoCardConteiner.addEventListener('click', async (event) => {
  event.preventDefault();
  // console.log(event.target);
  try {
    if (event.target.tagName === 'BUTTON') {
      const cardParent = event.target.parentNode;
      const twoCardId = event.target.parentNode.id;
      const buttonTargetId = event.target.id;

      console.log('>>>>>>>>>>>', twoCardId);
      console.log('>>>>>>>>>>>buttonTargetId', buttonTargetId);

      const data = {
        id: twoCardId,
        answer: buttonTargetId,
      };

      // const checkFalse = parentTarget.querySelector('.check-false');
      // const checkTrue = document.querySelector('.check-true');

      // const answer = buttonAnswer.innerText;

      const response = await fetch('/check/2', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: twoCardId, answer: buttonTargetId }),
      });

      const resultAnswer = await response.json();
      if (resultAnswer) {
        const checkTrue = cardParent.querySelector('.check-true');
        checkTrue.hidden = false;
      } else {
        const checkFalse = cardParent.querySelector('.check-false');
        checkFalse.hidden = false;
      }

      console.log('▶ ⇛ resultAnswer', resultAnswer);
    }
  } catch (error) {
    console.log(error);
  }
});
