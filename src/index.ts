// 1) задайте правильні ts типи для класичних js;
let age:number = 50;
let username:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:unknown = undefined;
let callback = (a:number):number => { return 100 + a };


// 2) задайте тип для змінної, в яку можна зберегти будь-яке значення.
let anything:any = -20;
anything = 'Text';
anything = {};


// 3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some:unknown;
let some:any;
some = 'Text';

let str: string;

str = some;


// 5) Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person:[string,number] = ['Max', 21];

// 6) Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum LoadingStatus {loading='LOADING',ready='READY'};
LoadingStatus.loading; // "LOADING"
LoadingStatus.ready; // "READY"

// 7) Зробіть змінну, яка може приймати або рядок, або число.
let userpass:string|number = '';
userpass = 123456; userpass = 'gvgvfffghj';

// 8) Зробіть змінну, яка може приймати лише одне значення з двох: 'enabled' або 'disabled'
// let flag:'enabled'|'disabled' = 'enabled';
enum Toggle {enabled='enabled',disabled='disabled'}
let flag:Toggle = Toggle.enabled;

// 9) Вкажіть типи для наступних функцій
function showMessage(message:string):void { console.log(message) }
function calc(num1:number, num2:number):number { return num1 + num2 }
function customError():void { throw new Error('Error') }


// 10) Створіть свій тип даних на основі наявних даних.
type Page = {
  title:string,
  likes:number,
  accounts:string[],
  status:'open'|'closed',
  details?: {
    createdAt:Date,
    updatedAt?:Date
  } // details may be absent, but must include creation date if theyre included
}
const page1:Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-05-01'),
  }
}
const page2:Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'closed',
}