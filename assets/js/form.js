const modal = document.querySelector("#modal");
const loanInput = document.querySelector('[name="sotienvay"]');

const clearValue = (name) => {
  if (name == "legion") {
    document.querySelector("[list='legion']").value = "";
  }
  if (name == "income-type") {
    document.querySelector("#income-type").value = "Vui lòng chọn";
  }
};

const handleValue = (value) => {
  let result = Number(value).toLocaleString("en-US");
  result === "NaN"
    ? (loanInput.value = "Vui lòng nhập số")
    : (loanInput.value = result);
};

const onSubmit = (event) => {
  modal.style.display = "flex";
  event.preventDefault();
};
