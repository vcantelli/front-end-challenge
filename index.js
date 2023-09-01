document.addEventListener('DOMContentLoaded', () => {

  const stickers = document.querySelectorAll('input[type=checkbox]')

  stickers.forEach(sticker => {
    sticker.onchange = () => {
      checkIfSubmitIsValid()
      const isAtLeastOneChecked = document.querySelectorAll('input[type=checkbox]:checked').length > 0
      if (isAtLeastOneChecked) {
        stickers.forEach(sticker => {
          sticker.required = false;
          sticker.nextElementSibling.style.color = '#071723';
        })
        return true
      } else {
        stickers.forEach(sticker => {
          sticker.required = true;
          sticker.nextElementSibling.style.color = '#F33232';
        })
      }
    };
  })

  document.querySelector('#increment-button').onclick = () => {
    document.getElementById('stickers-quantity').value++;
    checkIfSubmitIsValid()
    preventNegativaQuantity()
  };

  document.querySelector('#decrement-button').onclick = () => {
    document.getElementById('stickers-quantity').value--;
    checkIfSubmitIsValid()
    preventNegativaQuantity()
  };

  document.querySelector('#stickers-quantity').change = () => {
    checkIfSubmitIsValid()
    preventNegativaQuantity()
  }

  document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      document.querySelector('output').value = 'Formulário enviado com sucesso!';
    } else {
      document.querySelector('output').value = '';
    }
  };

  const isFormValid = () => {
    if (isStickersValid() && isQuantityValid()) {
      return true
    } else {
      document.querySelector('#submit').disabled = true;
      return false
    }
  }

  const checkIfSubmitIsValid = () => {
    if (isStickersValid() && isQuantityValid()) {
      document.querySelector('#submit').disabled = false;
    } else {
      document.querySelector('output').value = ''
      document.querySelector('#submit').disabled = true;
    }
  }

  const isStickersValid = () => {
    var stickers = document.querySelectorAll('input[type=checkbox]');
    const isAtLeastOneChecked = document.querySelectorAll('input[type=checkbox]:checked').length > 0
    if (isAtLeastOneChecked) {
      stickers.forEach(sticker => {
        sticker.required = false;
        sticker.nextElementSibling.style.color = '#071723';
      })
      return true
    } else {
      stickers.forEach(sticker => {
        sticker.required = true;
        sticker.nextElementSibling.style.color = '#F33232';
      })
      return false
    }
  }

  const isQuantityValid = () => {
    if (document.querySelector('#stickers-quantity').value <= 0 || !document.querySelector('#stickers-quantity').value) {
      document.querySelector('#stickers-quantity').required = true
      document.querySelector('#stickers-quantity').invalid = true
      return false
    } else {
      return true
    }
  }

  const preventNegativaQuantity = () => {
    if (document.querySelector('#stickers-quantity').value <= 0) {
      document.querySelector('#stickers-quantity').value = 0
    } else {
      document.querySelector('#stickers-quantity').required = false
    }
  }
});