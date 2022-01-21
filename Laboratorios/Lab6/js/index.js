const buildItem = (item) => {
  const element_container = document.createElement('div');
  element_container.classList.add('shopItem');

  const item_container = document.createElement('li');
  item_container.classList.add('lis');

  const text_container = document.createElement('p');
  text_container.textContent = item;

  const check_button = document.createElement('button');
  check_button.classList.add('checar');
  check_button.textContent = 'Check';

  const delete_button = document.createElement('button');
  delete_button.classList.add('del');
  delete_button.textContent = 'Delete';

  item_container.appendChild(text_container);
  item_container.appendChild(check_button);
  item_container.appendChild(delete_button);
  element_container.appendChild(item_container);
  return element_container;
};

$('.agregar').on('click', (main_event) => {
  main_event.preventDefault();
  const item_to_add = $('#newText').val();
  $('.Lista').append(buildItem(item_to_add));
});

$('.Lista').on('click', '.checar', function (e) {
  $(this).parent().toggleClass('line_text');
});

$('.Lista').on('click', '.del', function (e) {
  $(this).parent().remove();
});

