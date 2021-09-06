let myImage = document.querySelector('img');// сохранили ссылку на <img>элемент в myImage переменной

myImage.onclick = function() {//сделали onclickсвойство обработчика событий этой переменной равным функции без имени
    let mySrc = myImage.getAttribute('src');//Код извлекает значение srcатрибута изображения
    if(mySrc === 'images/island.jfif') {
      myImage.setAttribute('src','images/island2.jfif');
    } else {
      myImage.setAttribute('src','images/island.jfif');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');/*prompt()функцию, которая отображает диалоговое окно, аналогичное alert()
   просит пользователя ввести данные и сохранять их в переменной после того, как пользователь нажимает кнопку « ОК». 
   В этом случае мы просим пользователя ввести имя. 
   Затем код обращается к API localStorage, который позволяет нам хранить данные в браузере и извлекать их позже.*/
    localStorage.setItem('name', myName);//Мы используем setItem()функцию localStorage для создания и хранения вызываемого элемента данных 'name'
    myHeading.textContent = 'Почувствуй дух приключений ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Почувствуй дух приключений ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }