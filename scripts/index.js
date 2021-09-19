const items = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const itemTemplate = document.querySelector('#todolist-item-template').content;
const container = document.querySelector('.todolist');

const addItem = (text) => {
  const item = itemTemplate.cloneNode(true);
  item.querySelector('.todolist-item__text').textContent = text;
  container.append(item);
}

items.forEach(addItem);
