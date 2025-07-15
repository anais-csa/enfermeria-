document.querySelectorAll('.semestre h2').forEach(h2 => {
  h2.addEventListener('click', () => {
    const ul = h2.nextElementSibling;
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  });
});

