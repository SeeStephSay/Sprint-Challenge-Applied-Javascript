import Axios from 'axios';

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Card(article) {
	const card = document.createElement('div'),
		headline = document.createElement('div'),
		author = document.createElement('div'),
		imgContainer = document.createElement('div'),
		authorImg = document.createElement('img'),
		authorName = document.createElement('span');

	card.classList.add('card');
	headline.classList.add('headline');
	author.classList.add('author');
	imgContainer.classList.add('img-container');

	authorImg.src = article.authorPhoto;
	headline.textContent = article.headline;
	authorName.textContent = `Written by ${article.authorName}`;

	imgContainer.appendChild(authorImg);
	author.appendChild(imgContainer);
	author.appendChild(authorName);

	card.appendChild(headline);
	card.appendChild(author);

	return card;
}

const cards = document.querySelector('.cards-container');

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {
		//handle success
		console.log(response);
		const responseArticles = response.data.articles;

		Object.values(responseArticles).forEach((articles) => {
			articles.forEach((article) => {
				cards.appendChild(Card(article));
			});
		});
	})
	.catch((error) => {
		//handle error
		console.log('Oopsies: ', error);
	});
