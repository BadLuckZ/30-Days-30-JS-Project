const scriptURL = 'https://script.google.com/macros/s/AKfycbzzEWN78uw7vae0klh7yZwxXy87UGt0ZpH-6DFNLWf8PRf_AjqURQ_JI45cYmdwdBNU/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Thank you for subscribing!';
        setTimeout(function(){
            msg.innerHTML = '';
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// It will connect to this google sheet : https://docs.google.com/spreadsheets/d/1Q4XiVSIiGbumXQ2pZRop-daSf_qXYlS-DDVjKqu-q5g/edit#gid=0

// Source : https://github.com/jamiewilson/form-to-google-sheets