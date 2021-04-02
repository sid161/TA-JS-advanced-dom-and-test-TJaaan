const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${pageCount}`);
    const data = await response.json();
    
    data.map((curElm, index) => {
        const htmlData = ``
    })
}

getPost();