let input = document.querySelector('.all input');
let history = document.querySelector('.history div');
let a = '';
let obj = {};
let collection = [{}];


function calculate(e) {
    if (e == '=') {
        let expresion1 = input.value;
        let out = eval(input.value);
        input.value = out;
        collection = [...collection, { ...obj, expresion: expresion1, output: out }];
        let lstel = collection.pop();
        let h3 = document.createElement('h3');
        let expresion_txt = document.createTextNode(lstel.expresion);
        h3.appendChild(expresion_txt);
        history.insertAdjacentElement('afterbegin', h3);

        let h31 = document.createElement('h3');
        let output_txt = document.createTextNode(` = ${lstel.output}`);
        h31.appendChild(output_txt);
        h3.insertAdjacentElement('afterend', h31);
        savedata();
    }
    else if (e == 'CE' || e == 'C') {
        input.value = null;
        a = '';
    } else if (e == 'x') {
        let ary = [...input.value]
        console.log(ary.pop(ary.length - 1));
        console.log(ary);
        input.value = null;
        for (let i of ary) {
            input.value += i;
            a = input.value;
        }
    } else {
        input.value = a += e;
    }
}

function deleteme() {
    collection = [{}];
    history.innerHTML = '';
    console.log(collection)
    savedata();
}
function savedata() {
    localStorage.setItem('DB', history.innerHTML);
}
function showdata() {
    history.innerHTML = localStorage.getItem('DB');
}
showdata();