const article = document.querySelector('article');
article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';
article.setAttribute('class', 'active');
const paragraph = document.createElement('p');
article.appendChild(paragraph);
article.append(paragraph, 'Hello World Addition!');
article.removeChild(paragraph);
article.remove();