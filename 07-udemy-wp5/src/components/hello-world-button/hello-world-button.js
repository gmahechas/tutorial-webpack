import './hello-world-button.scss';
import './hello-world-button.css';

class HelloWorldButton {

  buttonCssClass = 'hello-w-t';

  render() {
    const body = document.querySelector('body');
    const button = document.createElement('button');

    button.innerHTML = 'Hello World';
    button.classList.add('hello-w-b');
    button.onclick = () => {
      const p = document.createElement('p');
      p.innerHTML = 'Hello Button';
      p.classList.add(this.buttonCssClass);
      body.appendChild(p);
    }
    body.appendChild(button);
  }
}

export default HelloWorldButton;