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
    message.textContent = 'Question #'+(game.val+1)+ ' out of '+game.total;
    output.innerHTML = '';
    console.log(game);
    let q = game.arr[game.val];
    console.log(q);
    const main = document.createElement('div');
    main.textContent = q.question+'?';

    output.appendChild(main);

    q.opt.forEach(function(el) {
        console.log(el);
        let span = document.createElement('span');
        span.textContent = el;
        output.appendChild(span);
        span.ans = q.answer;
        span.addEventListener('click', checker);
    });
}

function checker(e) {
    console.log(e.target.ans);
    console.log(this.ans);

    let sel = e.target;
    console.log(sel.textContent);
    if(sel.textContent == sel.ans) {
        console.log('correct');
    } else {
        console.log('wrong')
    }

    game.val++;
    nx.style.display = 'block';
}

