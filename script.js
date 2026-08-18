document.querySelectorAll('#year').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const helloButton = document.querySelector('#helloButton');
const message = document.querySelector('#message');

if (helloButton && message) {
  helloButton.addEventListener('click', () => {
    message.textContent = 'JavaScript 运行成功！您的静态网站已准备就绪。';
  });
}
