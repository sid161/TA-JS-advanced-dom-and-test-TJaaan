let root = document.querySelector('.container');

let max = 3;
let index = 0;

function addQuotes(){
    for(i = 0; i < max; i++){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        h2.innerText = quotes[index].quoteText;
        p.innerText = quotes[index].quoteAuthor;
         div.append(h2,p);

         root.append(div);
         index++;
    }
}


addQuotes();

document.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight){
        addQuotes();
    }
});
