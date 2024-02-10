const pas = document.querySelector('#pas');
const eye = document.querySelector('.eye');

eye.addEventListener('click', () => {
   if (pas.type == 'password') {
      eye.classList.add('fa-eye');
      eye.classList.remove('fa-eye-slash');
      pas.type = 'text';
   } else {
      eye.classList.remove('fa-eye');
      eye.classList.add('fa-eye-slash');
      pas.type = 'password';
   }
});
