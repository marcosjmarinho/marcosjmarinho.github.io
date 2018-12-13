// Codigo para ciclos.html
function changeE() {
    document.getElementById('Principio').innerHTML = document.getElementById('Electrico').innerHTML;
}
function changeI(){
    document.getElementById('Principio').innerHTML = document.getElementById('Informatico').innerHTML;
}
function changeF(){
    document.getElementById('Principio').innerHTML = document.getElementById('Entrenador').innerHTML;
}
function changeW(){
    document.getElementById('Principio').innerHTML = document.getElementById('Diseñador').innerHTML;
}
function changeM(){
    document.getElementById('Principio').innerHTML = document.getElementById('Desarollador').innerHTML;
}
// Codigo nav Ciclos.html
function openNav() {
    document.getElementById("sidebar-wrapper").style.marginRight = "0px";
  }
  function closeNav() {
    document.getElementById("sidebar-wrapper").style.marginRight = "-250px";
  }

// Codigo Para Pagina Contacto Mapa

function initMap() {
    var uluru = {lat: 42.214478, lng: -8.692943};
    var map = new google.maps.Map(
        document.getElementById('Mapa'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  //Codigo Para Pagina Inscripcion

  var female_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8PcCxh7tT6MDFhJi2UaAT9SeciHqvZuaWtGg0y0-yyP8rMDz";
var male_img = "https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg";
var Spain = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
var Germany = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACICAMAAADNocfZAAAAFVBMVEUAAAD/zgDdAAC4AADhAADmaAD/2QDBEdIQAAAAiElEQVR4nO3PARGDAAADsTJg/iVjg3sSB9kAAAAAAAAAAACAtzrzduXtl6dYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLA7b/+8HXmKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUfKD61V4KpPe9gZgAAAABJRU5ErkJggg=="

// Cuando carga la pagina
$( document ).ready(function() {
    // Poner imagen genero
    set_sex_img();

    //Imagen Pais

    set_country_img();
    // Poner mensaje
    set_who_message();

    // Cambiar genero
    $("#input_sex").change(function() {
        // poner imagen segun eleccion
        set_sex_img();
        set_who_message();
    });

    $("#input_Pais").change(function(){
         set_country_img();

    });

    // Cambiar Primer nombre
    $("#first_name").keyup(function() {
        set_who_message();
        if(validation_name($("#first_name").val()).code == 0) {
            $("#first_name").attr("class", "form-control is-invalid");
            $("#first_name_feedback").html(validation_name($("#first_name").val()).message);
        } else {
            $("#first_name").attr("class", "form-control");
        }
    });

    // Cambiar apellido
    $("#last_name").keyup(function() {
        set_who_message();
        if(validation_name($("#last_name").val()).code == 0) {
            $("#last_name").attr("class", "form-control is-invalid");
            $("#last_name_feedback").html(validation_name($("#last_name").val()).message);
        } else {
            $("#last_name").attr("class", "form-control");
        }
    });
});

/**
*   poner imagen(Mr. or Ms.)
*/
function set_sex_img() {
    var sex = $("#input_sex").val();
    if (sex == "Mr.") {
        // Hombre
        $("#img_sex").attr("src", male_img);
    } else {
        // Mujer
        $("#img_sex").attr("src", female_img);
    }
}
//Poner imagen Pais
function set_country_img(){
    var Pais = $("#input_Pais").val();

    if (Pais == "Spain"){
        // España
        $("#Pais").attr("src",Spain );
    }else if (Pais == "Germany"){
        //Alemania
        $("#Pais").attr("src",Germany);
    }
}


function set_who_message() {
    var sex = $("#input_sex").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    if (validation_name(first_name).code == 0 ||
        validation_name(last_name).code == 0) {
        // Informacion no completa
        $("#who_message").html("Quien eres?");
    } else {
        // Informacion Completa
        $("#who_message").html(sex+" "+first_name+" "+last_name);
    }
}

/**
*  Funcion que valida el nombre y apellido
*/
function validation_name (val) {
    if (val.length < 2) {
        // no valido nombre muy corto
        return {"code":0, "message":"El nombre es muy corto."};
    }
    if (!val.match("^[a-zA-Z\- ]+$")) {
        // no valido caracter no valido
        return {"code":0, "message":"Caracteres no validos."};
    }
    //Todo valido
    return {"code": 1};
}

// Codigo JavaScript para el BLog

// Codigo para el treeview
$.fn.extend({
	treeview:	function() {
		return this.each(function() {
			// Initialize the top levels;
			var tree = $(this);
			tree.addClass('treeview-tree');
			tree.find('li').each(function() {
				var stick = $(this);
			});
			tree.find('li').has("ul").each(function () {
				var branch = $(this);
				branch.prepend("<i class='tree-indicator glyphicon glyphicon-chevron-right'></i>");
				branch.addClass('tree-branch');
				branch.on('click', function (e) {
					if (this == e.target) {
						var icon = $(this).children('i:first');
						icon.toggleClass("glyphicon-chevron-down glyphicon-chevron-right");
						$(this).children().children().toggle();
					}
				})
				branch.children().children().toggle();
				branch.children('.tree-indicator, button, a').click(function(e) {
					branch.click();
					e.preventDefault();
				});
			});
		});
	}
});
$(window).on('load', function () {
	$('.treeview').each(function () {
		var tree = $(this);
		tree.treeview();
	})
})