const modal = document.querySelector("#modal");

const clearValue = (name) => {
  if (name == "legion") {
    document.querySelector("[list='legion']").value = "";
  }
  if (name == "income-type") {
    document.querySelector("#income-type").value = "Vui lòng chọn";
  }
};

const handleValue = (event) => {
  let loanInput = event.target.value;

  loanInput = loanInput.replace(/[^\d,]/g, "");
  loanInput.replace(",", "_");

  let formatted = Number(loanInput).toLocaleString("en-US");
  // console.log(typeof formatted);
  // console.log(formatted);

  event.target.value = formatted;
};

const onSubmit = (event) => {
  modal.style.display = "flex";
  event.preventDefault();
};
