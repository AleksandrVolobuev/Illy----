document.querySelector('.btn-news').addEventListener('click', function () {
  const dropdownMenu = this.nextElementSibling;
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(event.target)) {
    document.querySelector('.dropdown-menu').style.display = 'none';
  }
});
