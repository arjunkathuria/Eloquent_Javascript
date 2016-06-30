var para = document.querySelector('p');

function isInside(node, target) {
  for (; node !== null; node = node.parentNode)
    return node == target;
}

para.addEventListener('mouseover', function (event) {
  if (!isInside(event.relatedTarget, para))
  para.style.color = 'red';
});

para.addEventListener('mouseout', function (event) {
  if (!isInside(event.relatedTarget, para))
    para.style.color = '';
});
