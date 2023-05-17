const pEls = document.getElementsByTagName('p');

Array.from(pEls).forEach((element) => {
  element.style.border = '1px solid black';
});

const imgs = document.getElementsByTagName('img');

Array.from(imgs).forEach((img, i) => {
  img.classList.add('roundedImg');

  const altText = 'Rotated Rounded Image ' + (i + 1);
  img.alt = altText;
});