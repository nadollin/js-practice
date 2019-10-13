document.addEventListener('DOMContentLoaded', ()=>{
    let string = `
    kjgj
    hjgkh
    `;
    let para = document.createElement('p');
    para.textContent = string;
    document.body.appendChild(para);
    console.log(string);
})



