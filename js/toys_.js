var toys_item = document.querySelectorAll('.toys-item');
var toys_item_link = document.querySelectorAll('.toys-item-link');
console.log(toys_item)
console.log(toys_item_link)


for (let i = 0; i < toys_item.length; i++) {
    toys_item[i].addEventListener("mouseover", function() {
        toys_item_link[i].style.display = "block";
        console.log('Курсор над блоком')
    });
}

for (let i = 0; i < toys_item.length; i++) {
    toys_item[i].addEventListener("mouseout", function() {
        toys_item_link[i].style.display = "none";
        console.log('Курсор вне блока')
    });
}
