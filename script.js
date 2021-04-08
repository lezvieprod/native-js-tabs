let tabsHeader = document.getElementsByClassName('tabs-header')[0];
let tabsHeaderItem = tabsHeader.getElementsByTagName('div');

let tabsBody = document.getElementsByClassName('tabs-body')[0];
let tabsBodyItem = tabsBody.getElementsByTagName('div');

let tabLine = document.getElementsByClassName('tab-line')[0];

for (let i = 0; i < tabsHeaderItem.length; i++) {
    tabsHeaderItem[i].addEventListener('click', function () {
        tabsHeader.getElementsByClassName('active')[0].classList.remove('active');
        tabsHeaderItem[i].classList.add('active');

        tabsBody.getElementsByClassName('active')[0].classList.remove('active')
        tabsBodyItem[i].classList.add('active');

        tabLine.style.left = `calc(calc(100% / ${tabsHeaderItem.length}) * ${i})`
    })
}