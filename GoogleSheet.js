const scriptURL = 'https://script.google.com/macros/s/AKfycbzY-TQ0TTRkzBDso57hIleo7dXdS9vnptqKHsLi9nzZML9TFgEGE-x9ht9W-UEhU1Ln/exec'

const form = document.forms['Contect-Form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})