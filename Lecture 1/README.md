# Lecture 1 Memo

## What is JavaScript?

### 非同步執行 async,動態更新
JavaScript is a scripting language that enables you to create dynamically updating content.

可與php做比較看看.
***

### 選取Element可用
document.querySelector({tag/id/class/attrbuite});
document.querySelectorAll({tag/id/class/attrbuite});

以前會用 
document.getElementById #
document.getElementsByClassName .
document.getElementsByTagName 
document.getElementsByName
***

### 新增事件可用
addEventListener({eventName}), {function});
eventName: click , DOMContentLoaded
***

### API
* DOM (Document Object Model) API
* Geolocation API
* Canvas and WebGL
* Audio and Video APIs

>Note: Many of the above demos won't work in an older browser — when experimenting, it's a good idea to use a modern browser like Firefox, Chrome, Edge or Opera to run your code in. You will need to consider cross browser testing in more detail when you get closer to delivering production code (i.e. real code that real customers will use).
***

### 讀取順序
The JavaScript is executed by the browser's JavaScript engine, after the HTML and CSS have been assembled and put together into a web page. This ensures that the structure and style of the page are already in place by the time the JavaScript starts to run.
若先執行js,Dom及Style還沒渲染好，可能會造成錯誤，
因通常會加上DOMContentLoaded的事件，確保js是執行在html,css讀取完之後。

*** 
### Browser security
Each browser tab is its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website.
為確保安全性，js不能跨網頁、跨網域執行。

>Note: There are ways to send code and data between different websites/tabs in a safe manner, but these are advanced techniques that we won't cover in this course.
***

### 執行順序
由上而下，宣告變數需在使用變數之前。
但要注意*非同步執行*會在執行完成前，繼續執行後續的程式。
***

### 直譯、編譯
js是直譯語言
***

### 載入js
defer : tells the browser to continue downloading the HTML content once the script tag element has been reached.
asnyc : will download the script without blocking rendering the page and will execute it as soon as the script finishes downloading.
***

## Inline JavaScript handlers
`function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}`
`<button onclick="createParagraph()">Click me!</button>`
*Please don't do this, however. ?*
目前多半框架都是這種形式.
***

## A first splash into JavaScript

### Thinking like a programmer

Upon looking at this brief, the first thing we can do is to start breaking it down into simple actionable tasks, in as much of a programmer mindset as possible:

1. Generate a random number between 1 and 100.
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
* Display congratulations message.
* Stop the player from being able to enter more guesses (this would mess the game up).
* Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
* Tell the player they are wrong.
* Allow them to enter another guess.
* Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
* Tell the player it is game over.
* Stop the player from being able to enter more guesses (this would mess the game up).
9. Display control allowing the player to restart the game.
* Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
* Let's now move forward, looking at how we can turn these steps into code, building up the example, and exploring JavaScript features as we go.

### comparison operators.
1. ===
2. !==
<https://dorey.github.io/JavaScript-Equality-Table/>
特別注意 
* 被判定為false的值有哪些.
* 文字與數值的比較.

### Element操作
ele.value [filed]
ele.textContent [paragraphy]
ele.style.{backgroundColor/fontSize...} [style]
style 會用峰駝式命名


## Debug
console.log()
alert()
可以把整個元件印出來看

## Storing the information you need — Variables
We say variables contain values. This is an important distinction to make. Variables aren't the values themselves; they are containers for values. You can think of them being like little cardboard boxes that you can store things in.

### 變數宣告 
（與swift不一樣）
let 區域變數 //ES6
var 全域變數
const 宣告變數 //ES6

`
function f() {
  let x = 1;
  console.log(x);
  {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
f()
// 1
// 2
// 1
`

`
function f() {
  var x = 1;
  console.log(x);
  {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
f()
// 1
// 2
// 2
`
### 命名規則
1. Just using Latin characters (0-9, a-z, A-Z) 
2. Lower camel case
3. Don't use numbers at the start of variables. 
4. Avoid using JavaScript reserved words.

### 型別
1. number
2. string
3. boolean
4. array
5. object
(注意：js是弱型別語言)
string + number -> string

## Basic math in JavaScript — numbers and operators

js的數字沒有分型別
浮點數問題：不一定準確

power : **

前乘除後加減 
養成好習慣加上括號()

## Handling text — strings in JavaScript
