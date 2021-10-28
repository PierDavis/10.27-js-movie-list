console.log('hello world')

function addMovie(event){

   event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
   
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', deleteMovie);
    movie.appendChild(deleteButton);

    document.querySelector('ul').appendChild(movie);
    
    inputField.value = '';

}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove();
}