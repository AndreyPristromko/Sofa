var colorChairs = document.getElementsByClassName("sections_icon_chairs");
var colorPopular = document.getElementsByClassName("sections_icon_popular");
var colorTables = document.getElementsByClassName("sections_icon_tables");
var colorSofas = document.getElementsByClassName("sections_icon_sofas");
var colorBeds = document.getElementsByClassName("sections_icon_beds");
var hideBlockChairs = document.getElementsByClassName("chairs_blok");
var hideBlockTables = document.getElementsByClassName("tables_blok");
var hideBlockSofas = document.getElementsByClassName("sofas_blok");
var hideBlockBeds = document.getElementsByClassName("beds_blok");
var colorText =  document.getElementsByClassName("sections_text");


function chairs () {
    // сменить цвет
    colorChairs[0].style.backgroundColor = "#303030";
    colorPopular[0].style.backgroundColor = "#F8F8F8";
    colorTables[0].style.backgroundColor = "#F8F8F8";
    colorSofas[0].style.backgroundColor = "#F8F8F8";
    colorBeds[0].style.backgroundColor = "#F8F8F8";
    // скрыть другие элементы 
    hideBlockBeds[0].style.display = "none";
    hideBlockSofas[0].style.display = "none";
    hideBlockTables[0].style.display = "none";
    hideBlockChairs[0].style.display = "";
    // сменить цвет текста
    colorText[0].style.color = "#909090";
    colorText[1].style.color = "#303030";
    colorText[2].style.color = "#909090";
    colorText[3].style.color = "#909090";
    colorText[4].style.color = "#909090";
    

}

function popular () {
    // сменить цвет
    colorChairs[0].style.backgroundColor = "#F8F8F8";
    colorPopular[0].style.backgroundColor = "#303030";
    colorTables[0].style.backgroundColor = "#F8F8F8";
    colorSofas[0].style.backgroundColor = "#F8F8F8";
    colorBeds[0].style.backgroundColor = "#F8F8F8";
    // скрыть другие элементы 
    hideBlockSofas[0].style.display = "";
    hideBlockTables[0].style.display = "";
    hideBlockChairs[0].style.display = "";
    hideBlockBeds[0].style.display = "";
    // сменить цвет текста
    colorText[0].style.color = "#303030";
    colorText[1].style.color = "#909090";
    colorText[2].style.color = "#909090";
    colorText[3].style.color = "#909090";
    colorText[4].style.color = "#909090";
}

function tables () {
    // сменить цвет
    colorChairs[0].style.backgroundColor = "#F8F8F8";
    colorPopular[0].style.backgroundColor = "#F8F8F8";
    colorTables[0].style.backgroundColor = "#303030";
    colorSofas[0].style.backgroundColor = "#F8F8F8";
    colorBeds[0].style.backgroundColor = "#F8F8F8";
    // скрыть другие элементы 
    hideBlockBeds[0].style.display = "none";
    hideBlockSofas[0].style.display = "none";
    hideBlockChairs[0].style.display = "none";
    hideBlockTables[0].style.display = "";
    // сменить цвет текста
    colorText[0].style.color = "#909090";
    colorText[1].style.color = "#909090";
    colorText[2].style.color = "#303030";
    colorText[3].style.color = "#909090";
    colorText[4].style.color = "#909090";
    
}

function sofas () {
    // сменить цвет
    colorChairs[0].style.backgroundColor = "#F8F8F8";
    colorPopular[0].style.backgroundColor = "#F8F8F8";
    colorTables[0].style.backgroundColor = "#F8F8F8";
    colorSofas[0].style.backgroundColor = "#303030";
    colorBeds[0].style.backgroundColor = "#F8F8F8";
    // скрыть другие элементы 
    hideBlockBeds[0].style.display = "none";
    hideBlockTables[0].style.display = "none";
    hideBlockChairs[0].style.display = "none";
    hideBlockSofas[0].style.display = "";
    // сменить цвет текста
    colorText[0].style.color = "#909090";
    colorText[1].style.color = "#909090";
    colorText[2].style.color = "#909090";
    colorText[3].style.color = "#303030";
    colorText[4].style.color = "#909090";
     
}

function beds () {
    // сменить цвет
    colorChairs[0].style.backgroundColor = "#F8F8F8";
    colorPopular[0].style.backgroundColor = "#F8F8F8";
    colorTables[0].style.backgroundColor = "#F8F8F8";
    colorSofas[0].style.backgroundColor = "#F8F8F8";
    colorBeds[0].style.backgroundColor = "#303030";
    // скрыть другие элементы 
    hideBlockSofas[0].style.display = "none";
    hideBlockTables[0].style.display = "none";
    hideBlockChairs[0].style.display = "none";
    hideBlockBeds[0].style.display = "";
    // сменить цвет текста
    colorText[0].style.color = "#909090";
    colorText[1].style.color = "#909090";
    colorText[2].style.color = "#909090";
    colorText[3].style.color = "#909090";
    colorText[4].style.color = "#303030";
}

function logo () {
    // сменить цвет
    colorChairs[0].style.backgroundColor = "#F8F8F8";
    colorPopular[0].style.backgroundColor = "#F8F8F8";
    colorTables[0].style.backgroundColor = "#F8F8F8";
    colorSofas[0].style.backgroundColor = "#F8F8F8";
    colorBeds[0].style.backgroundColor = "#F8F8F8";
    // скрыть другие элементы 
    hideBlockSofas[0].style.display = "";
    hideBlockTables[0].style.display = "";
    hideBlockChairs[0].style.display = "";
    hideBlockBeds[0].style.display = "";
}



const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('_active');
      }
    });
  });
  observer.observe(document.querySelector('.card_chair_1'));
  observer.observe(document.querySelector('.card_chair_2'));
  observer.observe(document.querySelector('.card_chair_3'));
  observer.observe(document.querySelector('.card_chair_4'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_6'));
  observer.observe(document.querySelector('.card_chair_7'));
  observer.observe(document.querySelector('.card_chair_8'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_table_1'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
  observer.observe(document.querySelector('.card_chair_5'));
































const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItems = animItems[index];
            const animItemsHeight = animItems.offsetHeight;
            const animItemsOffset = offset(animItems).top;
            const animStart = 4;

            let animItemsPoint = window.innerHeight - animItemsHeight / animStart;
            if (animItemsHeight > window.innerHeight) {
                animItemsPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemsOffset - animItemsPoint) && pageYOffset < (animItemsOffset + animItemsHeight)) {
                animItems.classlist.add("_active");
            } else {
                animItems.classlist.remove("_active");
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}