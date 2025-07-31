"use strict";
// 1) задайте правильні ts типи для класичних js;
let age = 50;
let username = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
// 2) задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything = -20;
anything = 'Text';
anything = {};
// 3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some:unknown;
let some;
some = 'Text';
let str;
str = some;
// 5) Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person = ['Max', 21];
// 6) Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var LoadingStatus;
(function (LoadingStatus) {
    LoadingStatus["loading"] = "LOADING";
    LoadingStatus["ready"] = "READY";
})(LoadingStatus || (LoadingStatus = {}));
;
LoadingStatus.loading; // "LOADING"
LoadingStatus.ready; // "READY"
// 7) Зробіть змінну, яка може приймати або рядок, або число.
let userpass = '';
userpass = 123456;
userpass = 'gvgvfffghj';
// 8) Зробіть змінну, яка може приймати лише одне значення з двох: 'enabled' або 'disabled'
// let flag:'enabled'|'disabled' = 'enabled';
var Toggle;
(function (Toggle) {
    Toggle["enabled"] = "enabled";
    Toggle["disabled"] = "disabled";
})(Toggle || (Toggle = {}));
let flag = Toggle.enabled;
// 9) Вкажіть типи для наступних функцій
function showMessage(message) { console.log(message); }
function calc(num1, num2) { return num1 + num2; }
function customError() { throw new Error('Error'); }
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createdAt: new Date('2021-01-01'),
        updatedAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'closed',
};
