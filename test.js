"use strict";
const button = document.querySelector('.button');
const content = document.querySelector('.content');
button === null || button === void 0 ? void 0 : button.addEventListener('click', addItem);
addItem();
function addItem() {
    const item = document.createElement('div');
    item.className = 'item';
    content === null || content === void 0 ? void 0 : content.appendChild(item);
    const color = document.createElement('div');
    const uid = document.createElement('div');
    const name = document.createElement('div');
    const ip = document.createElement('div');
    requestAPI()
        .then(data => {
        color.innerText = data.color;
        uid.innerText = data.uid;
        name.innerText = data.name;
        ip.innerText = data.ip;
        color.style.backgroundColor = color.innerText;
    })
        .then(_ => {
        item.appendChild(color);
        item.appendChild(uid);
        item.appendChild(name);
        item.appendChild(ip);
    });
}
function requestAPI() {
    const url = 'http://rap2api.taobao.org/app/mock/315313/getName';
    return fetch(url).then(response => response.json());
}
