const tb = document.querySelector('.tb');
const tbPhone = document.querySelector('.tb-phone');

tbPhone.addEventListener('blur', (event) => {
  const val = event.target.value;
  
  if (isPhoneNumber(val)) {
    tbPhone.setAttribute('data-validation', 'valid');
    return;
  }
  
  if (event.type === 'blur' && val !== '') {
    tbPhone.setAttribute('data-validation', 'invalid');
  }
  else {
    tbPhone.removeAttribute('data-validation');
  }
});

function isPhoneNumber(string) {
  return /^1?([2-9]\d\d){2}\d{4}$/.test(string.replace(/\D/g, ""));
}