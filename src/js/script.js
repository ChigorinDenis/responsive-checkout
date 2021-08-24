const app = () => {
  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    let stopSubmit = false;
    Array.from(e.target).forEach(input => {
      if (!input.checkValidity()) {
        stopSubmit = true;
      }
    });
    if (stopSubmit) {
      e.preventDefault();
      alert('Warning! Validation fails');
      return;
    }
    alert('Validation success!!');
  });
}
app();