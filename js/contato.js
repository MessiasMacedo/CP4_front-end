(function () {
  'use strict';

  const form = document.getElementById('contatoForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      status.classList.add('d-none');
      return;
    }

    form.classList.add('was-validated');
    status.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
  });
})();