"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = 'http://rap2api.taobao.org/app/mock/315313/getName';
const button = document.querySelector('.button');
const content = document.querySelector('.content');
class SomeThing {
    constructor(color, uid, name, ip) {
        this.color = color;
        this.uid = uid;
        this.name = name;
        this.ip = ip;
    }
}
class WebDisplay {
    static addData(data) {
        const someThing = new SomeThing(data.color, data.uid, data.name, data.ip);
        const rowItem = document.createElement('div');
        rowItem.className = 'item';
        content === null || content === void 0 ? void 0 : content.appendChild(rowItem);
        const color = document.createElement('div');
        const uid = document.createElement('div');
        const name = document.createElement('div');
        const ip = document.createElement('div');
        color.innerText = someThing.color;
        uid.innerText = someThing.uid;
        name.innerText = someThing.name;
        ip.innerText = someThing.ip;
        color.style.backgroundColor = color.innerText;
        rowItem.appendChild(color);
        rowItem.appendChild(uid);
        rowItem.appendChild(name);
        rowItem.appendChild(ip);
    }
}
function getJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const json = yield response.json();
        return json;
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield getJSON(url);
            WebDisplay.addData(data);
        }
        catch (error) {
            let message;
            if (error instanceof Error) {
                message = error.message;
            }
            else {
                message = String(error);
            }
            console.log(error);
        }
    });
}
getData();
button === null || button === void 0 ? void 0 : button.addEventListener('click', getData);
