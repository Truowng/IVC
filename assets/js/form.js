const modal = document.querySelector("#modal");

const clearValue = (name) => {
  if (name == "legion") {
    document.querySelector("[list='legion']").value = "";
  }
  if (name == "incomeType") {
    document.querySelector("#income-type").value = "Vui lòng chọn";
  }
};

const onSubmit = (event) => {
  modal.style.display = "flex";
  event.preventDefault();
};
