$(function () {
    let arr = [
        {
            name: '蔡徐坤',tell:18406581234, py: 'caixukun'
        },
        {
            name: '习总',tell:18406584513, py: 'xizong'
        },
        {
            name: '詹姆斯',tell:18406588115, py: 'James'
        },
        {
            name: '卢本伟',tell:18406584253, py: 'lubenwei'
        },
        {
            name: '赵丽颖',tell:18406589743, py: 'zhaoliying'
        },
        {
            name: '渣渣',tell:18406582512, py: 'zhazha'
        },
    ];
    let main = $('main');
    let aside = $('.aside');
    let input = $('input');

    input.on('input',function () {
        let val = $(this).val();
        let newarr  = arr.filter(ele=>ele.name.includes(val) || ele.py.includes(val));
        render(newarr);
    });

    render(arr);

    function render(arr) {
        main.empty();
        aside.empty();
        let  person = {

        };
        arr.forEach(ele => {
            let firstChar = ele.py.charAt(0).toUpperCase();//toUpperCase转换为大写

            if (!person[firstChar]) {
                person[firstChar] = [];
            }
            person[firstChar].push(ele)
        });

        let keysarr = Object.keys(person).sort();

        let html = '';
        let html1 = '';
        for (let i = 0; i < keysarr.length; i++) {
            let ele = keysarr[i];

            html1 +=`<li>${ele}</li>`;
            html += `
           <section><h2>${ele}</h2>
                `;
            for (let j = 0; j < person[ele].length; j++) {
                let info = person[ele][j];
                html += `
                <div><a href="tel:${info.tell}">${info.name}</a></div>
            `
            }
            html += '</section>';
        }
        console.log(html);
        main.html(html);
        aside.html(html1);
    }
});