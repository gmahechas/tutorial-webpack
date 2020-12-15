import Kiwi from './kiwi.jpg';

function addImage() {
  const image = document.createElement('img');
  image.alt = 'Kiwi';
  image.width = 300;
  image.src = Kiwi;
  document.querySelector('body').appendChild(image);
}

export default addImage;