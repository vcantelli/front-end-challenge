$(document).ready(() => {
  var stickers = $('form :checkbox');
  stickers.change(() => {
    checkIfSubmitIsValid()
    const isAtLeastOneChecked = $('form :checkbox:checked').length > 0
    if(isAtLeastOneChecked) {
      stickers.removeAttr('required');
      stickers.next().css('color', '#071723');
    }
  });

  $('#increment-button').on('click', () => {
    document.getElementById('stickers-quantity').value++;
    checkIfSubmitIsValid()
    preventNegativaQuantity()
  });

  $('#decrement-button').on('click', () => {
    document.getElementById('stickers-quantity').value--;
    checkIfSubmitIsValid()
    preventNegativaQuantity()
  });

  $('#stickers-quantity').on('change', () => {
    checkIfSubmitIsValid()
    preventNegativaQuantity()
  })

  $('form').submit((e) => {
    e.preventDefault();
    if (isFormValid()) {
      $('output').val('Formulário enviado com sucesso!')
    } else {
      $('output').val('')
    }
  });

  const isFormValid = () => {
    if (isStickersValid() && isQuantityValid()) {
      return true
    } else {
      $('#submit').prop('disabled', true);
      return false
    }
  }

  const checkIfSubmitIsValid = () => {
    if (isStickersValid() && isQuantityValid()) {
      $('#submit').prop('disabled', false);
    } else {
      $('output').val('')
      $('#submit').prop('disabled', true);
    }
  }

  const isStickersValid = () => {
    var stickers = $('form :checkbox');
    const isAtLeastOneChecked = $('form :checkbox:checked').length > 0
    if(isAtLeastOneChecked) {
      stickers.removeAttr('required');
      stickers.next().css('color', '#071723');
      return true
    } else {
      stickers.attr('required', 'required');
      stickers.next().css('color', '#F33232');
      return false
    }
  }

  const isQuantityValid = () => {
    if ($('#stickers-quantity').val() == 0 || !$('#stickers-quantity').val()) {
      $('#stickers-quantity').attr('required', 'required');
      $('#stickers-quantity').prop('invalid', true);
      return false
    } else {
      return true
    }
  }

  const preventNegativaQuantity = () => {
    if ($('#stickers-quantity').val() <= 0) {
      $('#stickers-quantity').val(0)
    } else {
      $('#stickers-quantity').removeAttr('required');
    }
  }
});


