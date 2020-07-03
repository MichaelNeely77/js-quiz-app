const message = document.querySelector('.message');
const game = {};
const output = document.querySelector('.que');
const nx = document.querySelector('.next');

nx.addEventListener('click', createQuestion);
const url = 'https://script.google.com/macros/s/AKfycbyaXSH1Dsrd_JVNfSPWblP0vcwjcPCE3Y5Mgq9zbGUUVkW5_6Af/exec';
fetch(url).then(function(res) {
    return res.json()
}).then(function(data) {
    console.log(data.data);
    game.total = data.data.length;
    game.val = 0;
    game.arr = data.data;
    data.data.forEach(function(el) {
        console.log(el);
    })
    createQuestion();
})

function createQuestion() {
    nx.style.display = "none";
}

