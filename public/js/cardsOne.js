const oneDiv = document.querySelector('#oneCardConteiner');

oneDiv.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    const userAnswer = e.target.parentNode.children[1].value;
    e.target.parentNode.children[1].value = '';
    const oneDivId = e.target.id;
    try {
      const response = await fetch(`/cards/${oneDivId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userAnswer }),
      });
      const result = await response.json();
      if (result.correct === false) {
        alert('Ошибка');
      } else {
        alert('Верно');
      }
    } catch (error) {
      console.log('Error', error);
    }
  }
});
