const prviBroj = document.getElementById('prviBroj');
const znak = document.getElementById('znak');
const drugiBroj = document.getElementById('drugiBroj');
const calculateBtn = document.getElementById('calculateBtn');
const deleteBtn = document.getElementById('deleteBtn');
const rezultat = document.getElementById('rezultat');
const simboli = ['+', '-', '*', '/'];

function isFormValid(){
    let isValid = true;
    if(!prviBroj.value || isNaN(prviBroj.value)){
        isValid = false;
        alert('Unesite pravilno podatke!');
    }
    if(!drugiBroj.value || isNaN(drugiBroj.value)){
        isValid = false;
        alert('Unesite pravilno podatke!');
    }
    if(znak == null){
       rezultat.innerText = '';
    }
    if(!simboli.includes(znak.value)){
        alert('Unesite pravilno podatke!');
        isValid = false;
    }
    return isValid;
}
calculateBtn.onclick = function(){
    if(isFormValid()){
        switch(znak.value){
            case '+': rezultat.innerText = Number(prviBroj.value) + Number(drugiBroj.value); break;
            case '-': rezultat.innerText = Number(prviBroj.value) - Number(drugiBroj.value); break;
            case '*': rezultat.innerText = Number(prviBroj.value) * Number(drugiBroj.value); break;
            case '/': rezultat.innerText = Number(prviBroj.value) / Number(drugiBroj.value); break;
            default: rezultat.innerText = 'ERROR';break;
        }
    }
}

deleteBtn.onclick = function(){
    prviBroj.value = '';
    drugiBroj.value = '';
    znak.value = '';
    rezultat.innerText = '';
}