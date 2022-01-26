
const food = ['pizza', 'burger', 'tacos', 'sushi', 'apple',
  'chicken', 'cake', 'chips'];

// handlers
const createNewButton = (item) => {
  const new_button = document.createElement('button');
  new_button.innerHTML = item;
  new_button.addEventListener('click', () => gifSearch(item));
  $('#food-buttons').append(new_button);
};

const gifSearch = (food) => {
  $('#food').empty();
  $.get(`https://api.giphy.com/v1/gifs/search?q=${food}&api_key=slJetIK6WThmEIo3r4d4sHV0wY2YpTvN&limit=10&offset=0&rating=g`,
    (res) => {
      res.data.forEach((gif) => {
        const foodGif = document.createElement('div');
        const title = document.createElement('h3');
        const img = document.createElement('img');
        const url_img = gif.images.fixed_height_still.url;
        const url_gif = gif.images.fixed_height.url;
        console.log(url_img);
        console.log(url_gif);
        const rating = document.createElement('h4');

        foodGif.classList.add('food-item');
        title.innerHTML = gif.title;
        rating.innerHTML = "Rating: " + gif.rating;
        img.dataset.imgUrl = url_img;
        img.dataset.gifUrl = url_gif;
        img.src = url_img

        foodGif.append(title);
        foodGif.append(img);
        foodGif.append(rating);
        $('#food').append(foodGif);
      });

      $('img').hover(function () {
        this.src = this.dataset.gifUrl
      },
        function () {
          this.src = this.dataset.imgUrl
        })
    });
}

$(document).ready(function () {
  // Create the buttons for each food item
  food.forEach(createNewButton);
  const foodSearch = document.getElementById('food-form');
  foodSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const foodItem = document.getElementById('food-input').value;
    food.push(foodItem);
    createNewButton(foodItem);
    document.getElementById('food-input').value = '';
  });
});

