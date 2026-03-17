function checkAll() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
  });
}


function uncheckAll() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}


function toggleAll() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = !checkbox.checked;
  });
}
