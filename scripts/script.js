function onClickHandler() {
        var figure = document.getElementById('comments-figure');
        var text = document.getElementById('content-field').value;
        var text2 = document.getElementById('author-field').value;
        var comment = document.createElement('figure')
        var content = document.createElement('p');
        var author = document.createElement('label');
        content.classList.add('comment-area');
        content.style.fontWeight = '600';
        content.innerHTML = text;
        author.classList.add('author-field');
        author.style.fontWeight = '600';
        author.innerHTML = 'Author: ' + text2;
        figure.appendChild(comment);
        comment.appendChild(content);
        comment.appendChild(author);
}