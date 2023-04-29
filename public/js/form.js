const modal = document.querySelector('#modal');

const clearValue = (name) => {
  if (name == 'legion') {
    document.querySelector("[list='legion']").value = '';
  }
  if (name == 'income-type') {
    document.querySelector('#income-type').value = 'Vui lòng chọn';
  }
};

const handleValue = (event) => {
  let price = event.target.value.replace(/[^\d,]/g, '');

  const VND = new Intl.NumberFormat('vi-VN');

  event.target.value = VND.format(price);
};

const onSubmit = (event) => {
  modal.style.display = 'flex';
};
