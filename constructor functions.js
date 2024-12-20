let blog = new Post('a', 'b', 'c');
console.log(blog);

function Post (title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.live = false;
}