document.querySelectorAll("select").forEach(select => {
  const first = select.firstElementChild;

  if (first.value !== "") {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Choose...";
    option.disabled = true;
    option.selected = true;

    select.prepend(option);
  }
});
