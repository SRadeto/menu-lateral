/*
        Este es el wrapper de cada elemento del menu, se encarga de cubrir cada elemento y asi 
        formar el menu completo. Esta conformado por un boton, un icono y un parrafo con la 
        descripcion que se muestra solo cuando el mouse esta sobre el boton
*/

const MenuHTML = [
        '<li><button onclick="','" class="menu-button"><i class="',
       '"></i></button><p class="menu-desc">',
       '</p></li>'
];

/*
        Aqui pones cada icono de cada boton en el orden que pone
*/
const MenuIcon = [
        "glyphicon glyphicon-cloud",
        "glyphicon glyphicon-remove",
        "glyphicon glyphicon-user"
];
/*
        Aqui van las descripciones, una por boton (el length debe coincidir
        con el de MenuIcon)
*/
const MenuDesc = [
        "description 1",
        "description 2",
        "description 3"
];

/*
        una funcion por menu, con esto deberias de ir modificando el elemento main
        del html insertando el contenido que veas y asi hacer tu web una web SPA
*/
function menu1(){console.log("has pulsado en el menu1")}
function menu2(){console.log("has pulsado en el menu2")}
function menu3(){console.log("has pulsado en el menu3")}

const MenuFunc = [
        "menu1",
        "menu2",
        "menu3"
]

/*
        Esta funcion se encarga de anadir todos los botones en el menu una vez se 
        carga el DOM
*/
function loadMenu () {
        content = "";
        if (MenuIcon.length != MenuDesc.length)
                console.error("please check that each menu item has description and image");

        MenuIcon.forEach ( (e,it)=> {
                content += MenuHTML[0] + MenuFunc[it] + "()"  + MenuHTML[1] +  MenuIcon[it] + MenuHTML[2] + MenuDesc[it] + MenuHTML[3];
        });
        $('#menu').html(content);
}

/*
        Al estilo de C, he creado una funcion main que ejecuta el codigo que se quiere evaluar 
        simplemente como forma de ordenar un poco lo que se hace
*/
function main(argv) {
        let argc = argv.length;
        
        loadMenu();
        let menuBut = $(".menu-button");
        for (let idx=0;idx<menuBut.length;idx++){
                menuBut[idx].onmouseover = () => {
                        $("li p")[idx].style.display = "block";
                }
                menuBut[idx].onmouseout = () => {
                        $("li p")[idx].style.display = "none";
                }
        }
}

main([]);
