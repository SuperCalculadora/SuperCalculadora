var w;
var multiplicadorTamFuente = 1;
var idioma, idiomaS;
var textoDivision1,textoDivision2,textoDivision3,textoMultiplicacion1,textoMultiplicacion2,textoRaiz1,textoDFactorial1;
var divext=false;

function checkLanguage() {
	idiomaS = navigator.language;
	if (idiomaS=="es") {idioma=1;}
	else if (idiomaS=="en") {idioma=2;}
	else {idioma=0;}
}

function alCargar(){

	checkLanguage();

	if (idioma==2) {/*ENGLISH*/
		document.getElementsByTagName("header")[0].innerHTML="<span><p>SUPER</span>CALCULATOR</p><p id='ptwitter' style='font-family:kurzetstypekurzetstype;font-Size:0.3em;'><a id='atwitter' href='https://www.pedros.cf' target='_blank'>Feito por Pedro Henrique</a></p>";
		document.getElementById("tpan").innerHTML="Go To<br>Screen";
		document.getElementById("trai").innerHTML="√";
		textoDivision1="<p class='perror'>Dividend is zero, so result is zero.</p>";
		textoDivision2="<p class='perror'>Divisor is zero, so this division has not solution.</p>";
		textoDivision3="<p class='perror'>Dividend and divisor are zero, so this division has not solution.</p>";
		textoMultiplicacion1="<p class='perror'>You are multiplying by zero, so the result is zero</p>";
		textoMultiplicacion2="<p class='perror'>The result is too big. I can not show the result correctly.</p>";
		textoRaiz1="<p class='perror'>Square root of zero is zero.</p>";
		textoDFactorial1="<p class='perror'>No sense in making the factorization from zero</p>";
	}
	else if (idioma==1) {/*SPANISH*/
	    document.getElementsByTagName("header")[0].innerHTML="<p>SUPER <span>CALCULADORA </span></p><p id='ptwitter' style='font-family:kurzetstypekurzetstype;font-Size:0.3em;'><a id='atwitter' href='https://www.pedros.cf' target='_blank'>Feito por Pedro Henrique</a></p>";
	    document.getElementById("tpan").innerHTML="Ver<br>Pantalla";
	    document.getElementById("trai").innerHTML="√";
	    textoDivision1="<p class='perror'>El dividendo es cero, por lo tanto el resultado es cero.</p>";
	    textoDivision2="<p class='perror'>El divisor es cero, por lo tanto no existe solución a la división propuesta.</p>";
	    textoDivision3="<p class='perror'>El dividendo y el divisor son cero, por lo tanto no existe solución a la división propuesta.</p>";
	    textoMultiplicacion1="<p class='perror'>Estás multiplicando por cero, por lo tanto el resultado es cero.</p>";
	    textoMultiplicacion2="<p class='perror'>El resultado obtenido es demasiado grande.</p>";
	    textoRaiz1="<p class='perror'>La raíz cuadrada de cero es cero.</p>";
	    textoDFactorial1="<p class='perror'>No tiene sentido hacer la descomposición factorial de cero.</p>";
	}
	else {/*DEFAULT PORTUGUESE*/
		document.getElementsByTagName("header")[0].innerHTML="<p>SUPER <span>CALCULADORA </span></p><p id='ptwitter' style='font-family:kurzetstypekurzetstype;font-Size:0.3em;'><a id='atwitter' href='https://www.pedros.cf' target='_blank'>Feito por Pedro Henrique</a></p>";
		document.getElementById("tpan").innerHTML="Ver<br>Operação";
		document.getElementById("trai").innerHTML="√";
		textoDivision1="<p class='perror'>O dividendo é zero, então o resultado é zero.</p>";
		textoDivision2="<p class='perror'>O divisor é zero, portanto não há solução para a divisão proposta.</p>";
		textoDivision3="<p class='perror'>O dividendo e o divisor são zero, portanto não há solução para a divisão proposta.</p>";
		textoMultiplicacion1="<p class='perror'>Você está multiplicando por zero, então o resultado é zero..</p>";
		textoMultiplicacion2="<p class='perror'>O resultado obtido é muito grande.</p>";
		textoRaiz1="<p class='perror'>A raiz quadrada de zero é zero..</p>";
		textoDFactorial1="<p class='perror'>Não faz sentido fazer a decomposição fatorial do zero.</p>";
	}
/*

*/


	w = window.innerWidth;
    h = window.innerHeight;
    prop = h/w;
    
    if (prop > 1.56) w = window.innerWidth;
    else w = window.innerHeight / 1.56;

	document.getElementById("contenedor").style.width=w+"px";
	document.getElementById("contenedor").style.height=w*1.56+"px";
	document.getElementById("contenedor").style.paddingTop=(w*1.56)*0.04+"px";

	document.getElementsByTagName("header")[0].style.fontSize=0.15*w+"px";
	document.getElementById("ptwitter").style.height=w*0.05+"px";
	document.getElementById("atwitter").style.top=-w*0.035+"px";
	document.getElementById("display").style.fontSize=w*0.085+"px";
	document.getElementById("display").style.height=w*0.11*1.11+"px";
	document.getElementById("dondetodosucede").style.width=0.95*w+"px";
	document.getElementById("dondetodosucede").style.height=0.95*w+"px";
	document.getElementById("teclado").style.fontSize=0.1*w+"px";
	document.getElementById("volver").style.fontSize=0.15*w+"px";
	document.getElementById("volver").style.paddingBottom=0.05*w+"px";
	document.getElementById("volver").style.paddingLeft=0.03*w+"px";
	document.getElementById("volver").style.paddingRight=0.03*w+"px";

	document.getElementById("botexp").style.fontSize=0.08*w+"px";
	document.getElementById("botexp").style.paddingTop=0.05*w+"px";

	document.getElementById("botnor").style.fontSize=0.08*w+"px";
	document.getElementById("botnor").style.paddingTop=0.05*w+"px";	

	document.getElementById("salida").style.fontSize=0.1*w+"px";

	document.getElementById("contenedor").style.opacity="1";
	
	document.getElementById("salida").style.width="100%";
	document.getElementById("salida").style.height="100%";
	document.getElementById("salida").style.fontSize=0.26*w+"px";
}

function escribir(t,y){
	
	//if (t=="/" && y==true) {divext=true; alert("t="+t+" / y="+y+" / divext="+divext);}
	//if (t=="/" && y!=true) {divext==false; alert("t="+t+" / y="+y+" / divext="+divext);}
	if (t=="/" && y==true) {divext=true;}
	if (t=="/" && y!=true) {divext=false;}

	display=document.getElementById("display");
	contDisplay=display.innerHTML;
	if (t=="c") {display.innerHTML="";}
	else if (t=="del") {display.innerHTML=contDisplay.substring(0,contDisplay.length-1);}
	else if (t=="primos") {desFacPri();bajarteclado();}
	else if (t=="raiz") {raizCuadrada();bajarteclado();}
	else {display.innerHTML+=t;}
	contDisplay=display.innerHTML; //actualiza la variable contDisplay con el contenido de display
	activadoBotones(contDisplay);
}

function activadoBotones(contDisplay){

	operador=contDisplay.match(/[\+\-x/#]/);
	numAr=contDisplay.split(operador);

	if (contDisplay.length>=21) demasiadosCaracteres=true;
	else demasiadosCaracteres=false;

	if (numAr[numAr.length-1].length>=15) numeroDemasiadasCifras=true;
	else numeroDemasiadasCifras=false;

	if (demasiadosCaracteres || numeroDemasiadasCifras) {
		document.getElementById("t1").disabled=true;
		document.getElementById("t2").disabled=true;
		document.getElementById("t3").disabled=true;
		document.getElementById("t4").disabled=true;
		document.getElementById("t5").disabled=true;
		document.getElementById("t6").disabled=true;
		document.getElementById("t7").disabled=true;
		document.getElementById("t8").disabled=true;
		document.getElementById("t9").disabled=true;
		document.getElementById("t0").disabled=true;
	}
	else {
		document.getElementById("t1").disabled=false;
		document.getElementById("t2").disabled=false;
		document.getElementById("t3").disabled=false;
		document.getElementById("t4").disabled=false;
		document.getElementById("t5").disabled=false;
		document.getElementById("t6").disabled=false;
		document.getElementById("t7").disabled=false;
		document.getElementById("t8").disabled=false;
		document.getElementById("t9").disabled=false;
		document.getElementById("t0").disabled=false;
	}
	/* condiciones de activado del boton "+"*/
	masRE = /^\d+(,\d+){0,1}(\+\d+(,\d+){0,1})*$/;
	if (masRE.test(contDisplay) && !demasiadosCaracteres) {document.getElementById("tmas").disabled=false;}
	else {document.getElementById("tmas").disabled=true;}

	/* condiciones de activado del boton "=" */
	igualRE = /^\d+(,\d+){0,1}([\+\/x\-#]\d+(,\d+){0,1})+$/;
	if (igualRE.test(contDisplay)) {document.getElementById("tcal").disabled=false;}
	else {document.getElementById("tcal").disabled=true;}

	/* condiciones de activado del boton "x","/","/e","-" */
	porRE = /^\d+(,\d+){0,1}$/;
	if (porRE.test(contDisplay) && !demasiadosCaracteres) {
		document.getElementById("tpor").disabled=false;
		document.getElementById("tdiv").disabled=false;
		document.getElementById("tmen").disabled=false;
	}
	else {
		document.getElementById("tpor").disabled=true;
		document.getElementById("tdiv").disabled=true;
		document.getElementById("tmen").disabled=true;
	}
	/* condiciones de activado del boton "raiz" */
	if (porRE.test(contDisplay) && !demasiadosCaracteres) {document.getElementById("trai").disabled=false;}
	else {document.getElementById("trai").disabled=true;}

	/* condiciones de activado del boton "primos" */
	primRE=/^\d+$/;
	if (primRE.test(contDisplay) && contDisplay.length<=8) {document.getElementById("tpri").disabled=false;}
	else {document.getElementById("tpri").disabled=true;}

	/* condiciones de activado del boton "coma" */
	comaRE = /^(\d+(,\d+){0,1}[\+\/x-])*\d+$/;
	if (comaRE.test(contDisplay) && !demasiadosCaracteres) {document.getElementById("tcom").disabled=false;}
	else {document.getElementById("tcom").disabled=true;}
}

function bajarteclado(){
	document.getElementById("teclado").style.top="100%";
	document.getElementById("salida").style.top="0%";
	document.getElementById("divvolver").style.top="0%";
}
function subirteclado(){
	document.getElementById("teclado").style.top="0%";
	document.getElementById("salida").style.top="-100%";
	document.getElementById("divvolver").style.top="-100%";
}

function calcular(){
	entrada=display.innerHTML;
	operador=entrada.match(/[\+\-x/]/);
	numAr=entrada.split(operador);
	numerosAR = new Array();
	salida.innerHTML=""
	salida.innerHTML="<p>"+entrada+"</p>";
	salida.innerHTML+="<p>Operador: "+operador+"</p>";
	for (i=0;i<numAr.length;i++){
		posicionComa=(numAr[i].search(",")!=-1)?numAr[i].search(",")+1:numAr[i].length;
		numeroDeDecimales = numAr[i].length-posicionComa;
		while (numAr[i][0]=="0") {
			if(numAr[i][1]==",") break;
			else numAr[i] = numAr[i].substring(1,numAr[i].length);
		}
		numAr[i]=numAr[i].replace(",","");
		if (numAr[i]=="") numAr[i]="0";
		numerosAR[i] = new Array(numAr[i],numeroDeDecimales);
		salida.innerHTML+="<p>"+numerosAR[i][0]+"/"+numerosAR[i][1]+"/"+numerosAR[i][0]/Math.pow(10,numerosAR[i][1])+"</p>";
		/*while (numAr[i][0]=="0") {
			//numAr[i] = numAr[i].substring(1,numAr[i].length);
			if (numAr[i][1]!=",") numAr[i] = numAr[i].substring(1,numAr[i].length);
			else break;
		}
		posicionComa=(numAr[i].search(",")!=-1)?numAr[i].search(",")+1:numAr[i].length;
		numeroDeDecimales = numAr[i].length-posicionComa;
		*/
	}
	if (operador=="+") {
		botexp.style.display="none";
		botnor.style.display="none";
		suma(numerosAR);}
	if (operador=="-") {
		botexp.style.display="none";
		botnor.style.display="none";
		resta(numerosAR);}
	if (operador=="x") {
		botexp.style.display="none";
		botnor.style.display="none";
		multiplica(numerosAR)}
	if (operador=="/" && divext==false) {divide(numerosAR)}
	if (operador=="/" && divext==true) {divideExt(numerosAR)}

	bajarteclado();
}


function divide(numerosAR){
	botexp.style.display="inline-block";
	botnor.style.display="none";



	//
	num1=numerosAR[0][0]/Math.pow(10,numerosAR[0][1]);
	num2=numerosAR[1][0]/Math.pow(10,numerosAR[1][1]);

	if (num1==0) num1EsCero=true;
	else num1EsCero=false;
	if (num2==0) num2EsCero=true;
	else num2EsCero=false;

	num1=num1.toString();num2=num2.toString();

	if(num1.match(/\./)) numDec1=num1.length-1-num1.search(/\./);
	else numDec1=0;
	if(num2.match(/\./)) numDec2=num2.length-1-num2.search(/\./);
	else numDec2=0;

	//num2*=Math.pow(10,numDec2);
	num2=num2.toString();
	num2=num2.replace(".","");

	num1 = numerosAR[0][0];

	if (numDec2>numerosAR[0][1]) {
		x=numDec2-numerosAR[0][1];
		for (i=0;i<x;i++){
			num1+="0";
		}
		decimalesDividendo=0;
	}
	else {decimalesDividendo=numerosAR[0][1]-numDec2;}

	resultado=Math.floor(num1/num2);
	resultado=resultado.toString();
	if (resultado.length==decimalesDividendo) resultado="0"+resultado;

	//alert("numerosAR\na: "+numerosAR[0][0]+"/"+numerosAR[0][1]+"\nb: "+numerosAR[1][0]+"/"+numerosAR[1][1]+"\n\nnum1 y num2\nnum1: "+num1+"/"+numDec1+"\nnum2: "+num2+"/"+numDec2+"\n\ndecimalesDividendo: "+decimalesDividendo+"\n\nresultado: "+resultado);

	/////////////////////////////////////////////////
	salida.innerHTML="";
	
	if (num1EsCero && !num2EsCero) {salida.innerHTML=textoDivision1;}
	else if(!num1EsCero && num2EsCero) {salida.innerHTML=textoDivision2;}
	else if (num1EsCero && num2EsCero) {salida.innerHTML=textoDivision3;}
	else {
		if ((decimalesDividendo+1-resultado.length)>1){
			dqn=(decimalesDividendo+1-resultado.length);
			for (i=0;i<dqn;i++){
				resultado="0"+resultado;
			}
		}
		inicionum2 = 1+num1.length;
		inicioResultado = 1+num1.length;
		longitudsalida = 1+Math.max(num1.length+num2.length,num1.length+resultado.length);
		tamCel=0.95*w/longitudsalida;
		tamFuente = tamCel*multiplicadorTamFuente;

		fila = 0;
		d = ""; dS = "";
		var cabe;
		numAr = new Array();
		numAr[fila] = new Array(num1,fila,num1.length);
		fila++;
		
		for (col=0; col<num1.length; col++) {
			d += num1[col];
			if (Math.floor(d/num2)==0) {
				cabe=false;
				if (fila>1) {
					d="0"+d;
					if(col+1<num1.length) {numAr[fila-1] = new Array(d+num1[col+1],fila-1,col+2);}
				}
				//datos.innerHTML+="<p>Tomamos el "+num1[col]+", tenemos "+d+" dividido por "+num2+", NO CABE</p>";
			}
			else {
				cabe=true;
				//datos.innerHTML+="<p>Tomamos el "+num1[col]+", tenemos "+d+" dividido por "+num2+", CABE</p>";
				///datos.innerHTML+="<p>DA "+parseInt(d/num2)+",que multiplicado por "+num2+" da "+(parseInt(d/num2))*num2+", y que restado de "+d+" da "+(d-(parseInt(d/num2))*num2)+"</p>";
				d = d-(parseInt(d/num2))*num2;
				if(col+1<num1.length) {
					numero = d+num1[col+1];
					if (numero.length<num2.length+1) numero="0"+numero;
					numAr[fila] = new Array(numero,fila,col+2);
				}
				else {
					d=d.toString();
					numAr[fila] = new Array(d,fila,col+1);
				}
				fila++;
			}
		}

	// salida en pantalla del cuerpo de la divisiÃ³n
		celda = new Array();
		x=0;
		for (i = 0; i<numAr.length; i++) {
			//datos.innerHTML+="<p>"+numAr[i]+"</p>";
			for (j=0; j<numAr[i][0].length; j++) {
				celda[x]=document.createElement("div");
				if (i==0) celda[x].className="caja";
				else celda[x].className="caja2";
				col=numAr[i][2]-numAr[i][0].length+j;
				celda[x].style.left=(col*tamCel)+"px";
				celda[x].style.top=numAr[i][1]*tamCel+"px";
				celda[x].style.width=tamCel+"px";
				celda[x].style.height=tamCel+"px";
				celda[x].style.fontSize=tamFuente+"px";
				celda[x].innerHTML=numAr[i][0][j];
				salida.appendChild(celda[x]);
				x++
			}
			if (decimalesDividendo>0 && i==0) {
				celda = document.createElement("div");
				celda.className="caja";
				celda.style.left=(numAr[i][0].length-decimalesDividendo-0.5)*tamCel+"px";
				celda.style.top="0px";
				celda.style.width=tamCel+"px";
				celda.style.height=tamCel+"px";
				celda.style.fontSize=tamFuente+"px";
				celda.innerHTML=",";
				salida.appendChild(celda);
			}
		}

	// salida en pantalla del num2
		for (i=0; i<num2.length; i++) {
			celda[x]=document.createElement("div");
			celda[x].className="caja3";
			celda[x].style.left=(inicionum2*tamCel)+"px";
			celda[x].style.top="0px";
			celda[x].style.width=tamCel+"px";
			celda[x].style.height=tamCel+"px";
			celda[x].style.fontSize=tamFuente+"px";
			if (i==0) celda[x].style.borderLeft="2px #ddd solid";
			celda[x].style.borderBottom="2px #ddd solid";
			celda[x].innerHTML=num2[i];
			salida.appendChild(celda[x]);
			inicionum2++;
			x++;
		}

	// salida en pantalla del resultado
		for (i=0; i<resultado.length; i++) {
			celda[x]=document.createElement("div");
			celda[x].className="caja4";
			celda[x].style.left=(inicioResultado*tamCel)+"px";
			celda[x].style.top=tamCel+"px";
			celda[x].style.width=tamCel+"px";
			celda[x].style.height=tamCel+"px";
			celda[x].style.fontSize=tamFuente+"px";
			celda[x].style.borderTop="2px #ddd solid";
			celda[x].innerHTML=resultado[i];
			salida.appendChild(celda[x]);
			inicioResultado++;
			x++;
		}
		if (decimalesDividendo>0) {
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.left=(inicioResultado-decimalesDividendo-0.5)*tamCel+"px";
			celda.style.top=tamCel+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=",";
			salida.appendChild(celda);
		}

	// salida en pantalla de la matriz de la divisiÃ³n
	/*
		for (i=0; i<numAr.length;i++){
			salida.innerHTML+="<p>"+numAr[i]+"</p>";
		}*/
	}
}

function divideExt(numerosAR){
	botexp.style.display="none";
	botnor.style.display="inline-block";

	num1=numerosAR[0][0]/Math.pow(10,numerosAR[0][1]);
	num2=numerosAR[1][0]/Math.pow(10,numerosAR[1][1]);

	if (num1==0) num1EsCero=true;
	else num1EsCero=false;
	if (num2==0) num2EsCero=true;
	else num2EsCero=false;

	num1=num1.toString();num2=num2.toString();

	if(num1.match(/\./)) numDec1=num1.length-1-num1.search(/\./);
	else numDec1=0;
	if(num2.match(/\./)) numDec2=num2.length-1-num2.search(/\./);
	else numDec2=0;

	//num2*=Math.pow(10,numDec2);
	num2=num2.toString();
	num2=num2.replace(".","");

	num1 = numerosAR[0][0];

	if (numDec2>numerosAR[0][1]) {
		x=numDec2-numerosAR[0][1];
		for (i=0;i<x;i++){
			num1+="0";
		}
		decimalesDividendo=0;
	}
	else {decimalesDividendo=numerosAR[0][1]-numDec2;}

	resultado=Math.floor(num1/num2);
	resultado=resultado.toString();
	if (resultado.length==decimalesDividendo) resultado="0"+resultado;

	//alert("numerosAR\na: "+numerosAR[0][0]+"/"+numerosAR[0][1]+"\nb: "+numerosAR[1][0]+"/"+numerosAR[1][1]+"\n\nnum1 y num2\nnum1: "+num1+"/"+numDec1+"\nnum2: "+num2+"/"+numDec2+"\n\ndecimalesDividendo: "+decimalesDividendo+"\n\nresultado: "+resultado);

	/////////////////////////////////////////////////
	salida.innerHTML="";
	
	if (num1EsCero && !num2EsCero) {salida.innerHTML=textoDivision1;}
	else if(!num1EsCero && num2EsCero) {salida.innerHTML=textoDivision2;}
	else if (num1EsCero && num2EsCero) {salida.innerHTML=textoDivision3;}
	else {
		if ((decimalesDividendo+1-resultado.length)>1){
			dqn=(decimalesDividendo+1-resultado.length);
			for (i=0;i<dqn;i++){
				resultado="0"+resultado;
			}
		}
		inicionum2 = 1+num1.length;
		inicioResultado = 1+num1.length;
		longitudsalida = 2+Math.max(num1.length+num2.length,num1.length+resultado.length);
		tamCel=0.95*w/longitudsalida;
		tamFuente = tamCel*multiplicadorTamFuente;

		fila = 0;
		d = ""; dS = "";
		var cabe;
		numAr = new Array();
		numAr[fila] = new Array(num1,fila,num1.length);
		fila++;
var lqqv = ""		
		for (col=0; col<num1.length; col++) {
			d += num1[col];
			if (Math.floor(d/num2)==0) {
				cabe=false;
				if (fila>1) {
					d="0"+d;
					if(col+1<num1.length) {numAr[fila-1] = new Array(d+num1[col+1],fila-1,col+2);}
				}
				//datos.innerHTML+="<p>Tomamos el "+num1[col]+", tenemos "+d+" dividido por "+num2+", NO CABE</p>";
			}
			else {
				cabe=true;
				//datos.innerHTML+="<p>Tomamos el "+num1[col]+", tenemos "+d+" dividido por "+num2+", CABE</p>";
				///datos.innerHTML+="<p>DA "+parseInt(d/num2)+",que multiplicado por "+num2+" da "+(parseInt(d/num2))*num2+", y que restado de "+d+" da "+(d-(parseInt(d/num2))*num2)+"</p>";
				d = d-(parseInt(d/num2))*num2;
				if(col+1<num1.length) {
					numero = d+num1[col+1];
					if (numero.length<num2.length+1) numero="0"+numero;
					numAr[fila] = new Array(numero,fila,col+2);
				}
				else {
					d=d.toString();
					numAr[fila] = new Array(d,fila,col+1);
				}
				fila++;
			}
			/*if (resultado[col]!=0 && col<(num1.length)) {
				mostrar=(resultado[col]*num2);
				lqqv += mostrar+" / "+col+" / "+d+" / "+numAr[col]+" / "+mostrar+"\n";
				//if (num2.length==mostrar.toString().length) {posIzda=col-1;}
				//else {posIzda=col;}
				posIzda=-1;
				resta[contadorResta] = [mostrar,posIzda];
				contadorResta++;
			}*/
		}

// Rellenar array resta
var resta = [];
var contadorResta = 0;
for (var i=0; i<resultado.length; i++){
	if (resultado[i]!=0) {
		resta[contadorResta]=resultado[i]*num2;
		contadorResta++;
	}
}

	// salida en pantalla del cuerpo de la divisiÃ³n
		var celda = new Array();
		var x=0;
		var posUltCif = [];
		for (i = 0; i<numAr.length; i++) {
			//datos.innerHTML+="<p>"+numAr[i]+"</p>";
			for (j=0; j<numAr[i][0].length; j++) {
				celda[x]=document.createElement("div");
				if (i==0) celda[x].className="caja";
				else celda[x].className="caja2";
				col=numAr[i][2]-numAr[i][0].length+j;
				celda[x].style.left=((1+col)*tamCel)+"px";
				celda[x].style.top=numAr[i][1]*2*tamCel+"px"; //multiplico per dos per fer espai a la resta
				celda[x].style.width=tamCel+"px";
				celda[x].style.height=tamCel+"px";
				celda[x].style.fontSize=tamFuente+"px";
				celda[x].innerHTML=numAr[i][0][j];
				salida.appendChild(celda[x]);
				//x++
			}
			posUltCif[i]=1+col;
			//alert(posUltCif);

			if (decimalesDividendo>0 && i==0) { // Això col·loca la coma en les divisions amb decimals...
				celda = document.createElement("div");
				celda.className="caja";
				celda.style.left=(numAr[i][0].length-decimalesDividendo-0.5+1)*tamCel+"px";
				celda.style.top="0px";
				celda.style.width=tamCel+"px";
				celda.style.height=tamCel+"px";
				celda.style.fontSize=tamFuente+"px";
				celda.innerHTML=",";
				salida.appendChild(celda);
			}
		}
// SALIDA EN PANTALLA DE LAS RESTAS
		var celda2 = new Array();
		var posResta;
		for (var i=0; i<resta.length; i++) {
			var numerito="-"+resta[i].toString();
			if (i==0) {posResta=0;}
			else {
				posResta=1+posUltCif[i]-numerito.length;
			}			
			for (j=0; j<numerito.length; j++) {
				celda2[j]=document.createElement("div");
				celda2[j].className="caja3 ra";
				celda2[j].style.left=(posResta+j)*tamCel+"px";
				celda2[j].style.top=((1+2*i)*tamCel)+"px";
				celda2[j].style.width=tamCel+"px";
				celda2[j].style.height=tamCel+"px";
				celda2[j].style.fontSize=tamFuente+"px";
				celda2[j].innerHTML=numerito[j];
				salida.appendChild(celda2[j]);
			}
		}

	// salida en pantalla del num2
		for (i=0; i<num2.length; i++) {
			celda[x]=document.createElement("div");
			celda[x].className="caja3";
			celda[x].style.left=((1+inicionum2)*tamCel)+"px";
			celda[x].style.top="0px";
			celda[x].style.width=tamCel+"px";
			celda[x].style.height=tamCel+"px";
			celda[x].style.fontSize=tamFuente+"px";
			if (i==0) celda[x].style.borderLeft="2px #ddd solid";
			celda[x].style.borderBottom="2px #ddd solid";
			celda[x].innerHTML=num2[i];
			salida.appendChild(celda[x]);
			inicionum2++;
			x++;
		}

	// salida en pantalla del resultado
		for (i=0; i<resultado.length; i++) {
			celda[x]=document.createElement("div");
			celda[x].className="caja4";
			celda[x].style.left=((1+inicioResultado)*tamCel)+"px";
			celda[x].style.top=tamCel+"px";
			celda[x].style.width=tamCel+"px";
			celda[x].style.height=tamCel+"px";
			celda[x].style.fontSize=tamFuente+"px";
			celda[x].style.borderTop="2px #ddd solid";
			celda[x].innerHTML=resultado[i];
			salida.appendChild(celda[x]);
			inicioResultado++;
			x++;
		}
		if (decimalesDividendo>0) {
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.left=(inicioResultado-decimalesDividendo-0.5+1)*tamCel+"px";
			celda.style.top=tamCel+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=",";
			salida.appendChild(celda);
		}

	// salida en pantalla de la matriz de la divisiÃ³n
	/*
		for (i=0; i<numAr.length;i++){
			salida.innerHTML+="<p>"+numAr[i]+"</p>";
		}*/
	}
}

function multiplica(numerosAR){
	num1=numerosAR[0][0]/Math.pow(10,numerosAR[0][1]);
	num2=numerosAR[1][0]/Math.pow(10,numerosAR[1][1]);
	num1=num1.toString();
	num2=num2.toString();
	if(num1.match(/\./)){
		numDec1=num1.length-1-num1.search(/\./);
		num1=num1.replace(".","");
	}
	else {numDec1=0}
	if(num2.match(/\./)){
		numDec2=num2.length-1-num2.search(/\./);
		num2=num2.replace(".","");
	}
	else {numDec2=0}
	maxNumDecimales=numDec1+numDec2;
	resultado=num1*num2;
	resultadoS=resultado.toString();
	if (resultadoS.length<maxNumDecimales+1){
		x=maxNumDecimales+1-resultadoS.length;
		for (i=0;i<x;i++) {resultadoS="0"+resultadoS;}
	}
	//alert(numerosAR+"\nnum1: "+num1+"\nnum2: "+num2+"\nresultado: "+resultadoS+"\nnumDecRes: "+maxNumDecimales+"\nnumDec1: "+numDec1+"\nnumDec2: "+numDec2);
	/*maxNumDecimales=0;
	for (i=0;i<numerosAR.length;i++){
		maxNumDecimales += numerosAR[i][1];
	}
	num1=numerosAR[0][0];num2=numerosAR[1][0];
	resultadoS = (num1*num2).toString();*/
	/////////////////////////////////////////////////


	salida.innerHTML="";
	if (num1=="0" || num2=="0") {salida.innerHTML=textoMultiplicacion1;}
	else {
		if (num2.length>1) alturaMultiplicacion=3+num2.length;
		else alturaMultiplicacion=3;
		anchuraMultiplicacion=Math.max(num1.length+1,num2.length+1,resultadoS.length);
		tamCel=0.95*w/Math.max(alturaMultiplicacion,anchuraMultiplicacion);
		tamFuente = tamCel*multiplicadorTamFuente;
		m=(Math.max(alturaMultiplicacion,anchuraMultiplicacion)-anchuraMultiplicacion)/2;
		numAr = new Array();
		fila = 2;
		for (i=num2.length-1; i>=0; i--) {
			resultadoFila = (num1*num2[i]).toString();
			col = num2.length-1-i;
			numAr[num2.length-1-i] = new Array(resultadoFila,fila,col);
			if (num2[i]>0) fila++;
		}


		/*document.getElementById("salida").innerHTML="num1: "+num1+"<br>";
		document.getElementById("salida").innerHTML+="num2: "+num2+"<br>";
		for (i=0; i<numAr.length; i++){
			document.getElementById("salida").innerHTML+="numAr["+i+"]: "+numAr[i]+"<br>";
		}
		document.getElementById("salida").innerHTML+="resultado: "+resultadoS+"<br>";
		document.getElementById("salida").innerHTML+="longitud respuesta: "+resultadoS.length+"<br>";
		*/
	// SALIDA A PANTALLA DE num1
	/////////////////////////////////////////////////////////////////////
		for (i=0; i<num1.length; i++){
			celda = document.createElement("div");
			celda.className="caja3";
			celda.style.left=(anchuraMultiplicacion-num1.length+i+m)*tamCel+"px";
			celda.style.top="0px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=num1[i];
			salida.appendChild(celda);
		}
		if (numerosAR[0][1]>0) {
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.right=(numDec1+m-0.5)*tamCel+"px";
			celda.style.top="0px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=",";
			salida.appendChild(celda);
		}

	// SALIDA A PANTALLA DE num2 /////////////////////////////////////////////////////////////////////
		celda = document.createElement("div");
		celda.className="caja";
		celda.style.left=(anchuraMultiplicacion-num2.length-1+m)*tamCel+"px";
		celda.style.top=tamCel+"px";
		celda.style.width=tamCel+"px";
		celda.style.height=tamCel+"px";
		celda.style.fontSize=tamFuente+"px";
		celda.style.color="#ddd";
		celda.style.borderBottom="2px #ddd solid";
		celda.innerHTML="x";
		salida.appendChild(celda);
		for (i=0; i<num2.length; i++){
			celda = document.createElement("div");
			celda.className="caja3";
			celda.style.left=(anchuraMultiplicacion-num2.length+i+m)*tamCel+"px";
			celda.style.top=tamCel+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.style.borderBottom="2px #ddd solid";
			celda.innerHTML=num2[i];
			salida.appendChild(celda);
		}
			if (numerosAR[1][1]>0) {
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.right=(numDec2+m-0.5)*tamCel+"px";
			celda.style.top=tamCel+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=",";
			salida.appendChild(celda);
		}
	// SALIDA A PANTALLA DEL CUERPO DE LA MULTIPLICACION /////////////////////////////////////////////
		if (num2.length>=1){
			for (i=0; i<numAr.length; i++) {
				for (j=0; j<numAr[i][0].length; j++) {
					celda = document.createElement("div");
					if (numAr[i][0]=="0") celda.className="caja3"
					else celda.className="caja2";
					celda.style.left=(anchuraMultiplicacion-numAr[i][0].length+j-numAr[i][2]+m)*tamCel+"px";
					celda.style.top=numAr[i][1]*tamCel+"px";
					celda.style.width=tamCel+"px";
					celda.style.height=tamCel+"px";
					celda.style.fontSize=tamFuente+"px";
					if (i==0) celda.style.borderTop="2px #ddd solid";
					if (numAr[i][0]=="0") celda.innerHTML="-";
					else celda.innerHTML=numAr[i][0][j];
					salida.appendChild(celda);
					if (maxNumDecimales>0 && num2.length==1) {
						celda = document.createElement("div");
						celda.className="caja";
						celda.style.right=(maxNumDecimales+m-0.5)*tamCel+"px";
						celda.style.top=numAr[i][1]*tamCel+"px";
						celda.style.width=tamCel+"px";
						celda.style.height=tamCel+"px";
						celda.style.fontSize=tamFuente+"px";
						celda.innerHTML=",";
						salida.appendChild(celda);
					}
				}
			}
		}

	// SALIDA A PANTALLA DE LA RESPUESTA /////////////////////////////////////////////////////////////

		if (num2.length>1){
			for (i=0; i<resultadoS.length; i++){
				celda = document.createElement("div");
				celda.className="caja4";
				celda.style.left=(i+m)*tamCel+"px";
				celda.style.top=fila*tamCel+"px";
				celda.style.width=tamCel+"px";
				celda.style.height=tamCel+"px";
				celda.style.fontSize=tamFuente+"px";
				celda.style.borderTop="2px #ddd solid";
				celda.style.background="#111";
				celda.innerHTML=resultadoS[i];
				salida.appendChild(celda);
			}
			if (maxNumDecimales>0) {
				celda = document.createElement("div");
				celda.className="caja";
				celda.style.right=(maxNumDecimales+m-0.5)*tamCel+"px";
				celda.style.top=fila*tamCel+"px";
				celda.style.width=tamCel+"px";
				celda.style.height=tamCel+"px";
				celda.style.fontSize=tamFuente+"px";
				celda.innerHTML=",";
				salida.appendChild(celda);
			}
		}
		if (resultadoS.length>15) document.getElementById("salida").innerHTML=textoMultiplicacion2;
	}
}

function suma(numerosAR){
	numA = new Array();
	s = 0;
	maxNumDecimales=0;
	for (i=0;i<numerosAR.length;i++){
		maxNumDecimales = Math.max(maxNumDecimales,numerosAR[i][1]);
	}
	for (i=0;i<numerosAR.length;i++){
		numA[i] = numerosAR[i][0];
		for (j=0;j<maxNumDecimales-numerosAR[i][1];j++) {
			numA[i]+="0";
		}
		s += parseInt(numA[i]);
		if (numA[i].length==maxNumDecimales) numA[i]="0"+numA[i];
		if (i==numerosAR.length-1) numA[i]="+"+numA[i];	
	}
	numA[i] = s.toString();
	if (numA[i].length<maxNumDecimales+1){
		x=maxNumDecimales+1-numA[i].length;
		for (j=0;j<x;j++){numA[i]="0"+numA[i];}
	}

	//alert(numA+"\n\nmaxNumDecimales: "+maxNumDecimales);
	/////////////////////////////////////////////////
	salida=document.getElementById("salida");
	salida.innerHTML="";
	// para posicionar la suma en el centro
	alturaSuma=numA.length+1; //+1j para dejar sitio a las cifras de LLEVAMOS
	anchuraSuma=Math.max(numA[numA.length-1].length,numA[numA.length-2].length);
	maxNum=Math.max(alturaSuma,anchuraSuma);
	if (alturaSuma>anchuraSuma) m=(alturaSuma-anchuraSuma)/2;
	else m=0;
	//////////////////////////
	tamCel=0.95*w/maxNum;
	tamFuente = tamCel*multiplicadorTamFuente;
	if (numA[numA.length-1].length<anchuraSuma) numA[numA.length-1]=" "+numA[numA.length-1];
	for (i=0;i<numA.length;i++){
		n=anchuraSuma-numA[i].length;
		for (j=0;j<numA[i].length;j++){
			celda = document.createElement("div");
			if (i==numA.length-1) {
				celda.className="caja2";
				celda.style.borderTop="2px #ddd solid";
			}
			else celda.className="caja4";
			celda.style.left=(n+m+j)*tamCel+"px";
			celda.style.top=tamCel*(i+0.75)+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=numA[i][j];
			salida.appendChild(celda);
		}
		if (maxNumDecimales>0) {
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.right=(maxNumDecimales+m-0.5)*tamCel+"px";
			celda.style.top=tamCel*(i+0.75)+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=",";
			salida.appendChild(celda);
		}
	}
	/*CÃ�LCULO DE LAS QUE LLEVAMOS*/
	sumacolumna=0;
	llevamosString="";
	for (i=1;i<numA[numA.length-1].length;i++){
		for(j=0;j<numA.length-1;j++){
			cifra=numA[j][numA[j].length-i];
			if (!(/^\d$/.test(cifra))) cifra="0";
			sumacolumna+=parseInt(cifra);
		}
		llevamos=parseInt(sumacolumna/10);
		llevamosString+=llevamos.toString();
		sumacolumna=llevamos;
	}
	/*SALIDA A PANTALLA DE LAS QUE LLEVAMOS*/
	for (var i=0; i<llevamosString.length;i++) {
		if (llevamosString[i]!="0"){
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.right=(i+1+m)*tamCel+"px";
			celda.style.top=tamCel/4+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel/1.5+"px";
			celda.style.fontSize=tamFuente/2+"px";
			//celda.style.background="#030";
			celda.innerHTML=llevamosString[i];
			salida.appendChild(celda);			
		}
	}
}

function resta(numerosAR) {
	
	numA = new Array();
	maxNumDecimales=0;
	for (i=0;i<numerosAR.length;i++){
		maxNumDecimales = Math.max(maxNumDecimales,numerosAR[i][1]);
	}
	for (i=0;i<numerosAR.length;i++){
		numA[i] = numerosAR[i][0];
		for (j=0;j<maxNumDecimales-numerosAR[i][1];j++) {
			numA[i]=numA[i]+"0";
		}
	}
	if(numerosAR[0][0]/Math.pow(10,numerosAR[0][1])>numerosAR[1][0]/Math.pow(10,numerosAR[1][1])) {minuendo=numA[0]; sustraendo=numA[1];}
	else {minuendo=numA[1]; sustraendo=numA[0];}
	//minuendo=Math.max(numA[0],numA[1]);
	//sustraendo=Math.min(numA[0],numA[1]);
	diferencia=minuendo-sustraendo;
	//minuendo=minuendo.toString();
	//sustraendo=sustraendo.toString();
	diferencia=diferencia.toString();
	//if (minuendo.length<maxNumDecimales+1){for (i=0;i<maxNumDecimales+1-minuendo.length;i++){minuendo="0"+minuendo;}}
	//if (sustraendo.length<maxNumDecimales+1){for (i=0;i<maxNumDecimales+1-sustraendo.length;i++){sustraendo="0"+sustraendo;}}
	if (diferencia.length<maxNumDecimales+1){
		x=maxNumDecimales+1-diferencia.length;
		for (i=0;i<x;i++){diferencia="0"+diferencia;}
	}

	//alert(numerosAR+"\n\n"+numA+"\n\nmaxNumDecimales: "+maxNumDecimales+"\n\nminuendo: "+minuendo+"\n\nsustraendo: "+sustraendo+"\n\ndiferencia: "+diferencia);
	/////////////////////////////////////////////////

	salida.innerHTML="";

	restaArray=new Array(minuendo.toString(),"-"+sustraendo.toString()," "+diferencia.toString())
	alturaResta=4;
	anchuraResta=Math.max(restaArray[0].length,restaArray[1].length);
	maxNum=Math.max(alturaResta,anchuraResta);
	if (alturaResta>anchuraResta) m=(alturaResta-anchuraResta)/2;
	else m=0;
	tamCel=0.95*w/maxNum;
	tamFuente = tamCel*multiplicadorTamFuente;
	for (i=0;i<restaArray.length;i++){
		n=anchuraResta-restaArray[i].length;
		for (j=0;j<restaArray[i].length;j++){
			celda = document.createElement("div");
			if (i==2) {celda.className="caja2"; celda.style.borderTop="2px #ddd solid";}
			else celda.className="caja4";
			celda.style.left=(j+n+m)*tamCel+"px";
			celda.style.top=(i+0.75)*tamCel+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			//celda.style.background="#030";
			celda.innerHTML=restaArray[i][j];
			salida.appendChild(celda);
		}
		if (maxNumDecimales>0) {
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.right=(maxNumDecimales+m-0.5)*tamCel+"px";
			celda.style.top=tamCel*(i+0.75)+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			celda.innerHTML=",";
			salida.appendChild(celda);
		}
	}

	llevamos=0;
	llevamosString="";
	for (i=1;i<=restaArray[0].length;i++){
		cifraMinuendo=parseInt(restaArray[0][restaArray[0].length-i]);
		if (!isNaN(restaArray[1][restaArray[1].length-i])) cifraSustraendo=parseInt(restaArray[1][restaArray[1].length-i]);
		else cifraSustraendo=0;
		cifraSustraendo+=llevamos;
		if (cifraMinuendo<cifraSustraendo) llevamos=1;
		else llevamos=0;
		llevamosString+=llevamos;
	}
	for (var i=0; i<llevamosString.length;i++) {
		if (llevamosString[i]!="0"){
			celda = document.createElement("div");
			celda.className="caja";
			celda.style.right=(i+1+m)*tamCel+"px";
			celda.style.top=tamCel*0.25+"px";
			celda.style.width=tamCel+"px";
			celda.style.height=tamCel/2+"px";
			celda.style.fontSize=tamFuente/2+"px";
			//celda.style.background="#030";
			celda.innerHTML="-1";
			salida.appendChild(celda);			
		}
	}
}

function desFacPri(){
	botexp.style.display="none";
	botnor.style.display="none";

	salida.innerHTML="";
	numIzda=parseInt(document.getElementById("display").innerHTML);

	if (numIzda==0) {salida.innerHTML=textoDFactorial1;}
	else {
		numIzdaArray=new Array();
		numIzdaArray[0]=numIzda; numIzdaArray[1]=numIzda;
		numDchaArray=new Array();
		contador=0;
		i=2;
		while (i<=numIzdaArray[contador]/2) {
			if (numIzdaArray[contador]%i==0) {
				numDchaArray[contador]=i;
				numIzdaArray[contador+1]=numIzdaArray[contador]/i;
				contador++
			}
			else i++;
		}
		numDchaArray[contador]=numIzdaArray[contador];
		numIzdaArray[contador+1]=1;

		anchoIzda=numIzdaArray[0].toString().length;
		anchoDcha=numDchaArray[numDchaArray.length-1].toString().length;
		anchuraPrimo=anchoIzda+anchoDcha;
		alturaPrimo=numIzdaArray.length;
		if (alturaPrimo>anchuraPrimo) m = (alturaPrimo-anchuraPrimo)/2;
		else m = 0;
		maxNum=Math.max(anchuraPrimo,alturaPrimo);
		tamCel=0.95*w/maxNum;
		tamFuente = tamCel*multiplicadorTamFuente;
		for (i=0;i<numIzdaArray.length;i++){
			numeroAString=numIzdaArray[i].toString();
			n=anchoIzda-numeroAString.length;
			for (j=0;j<numeroAString.length;j++){
				celda = document.createElement("div");
				celda.className="caja2";
				celda.style.left=(j+n+m)*tamCel+"px";
				celda.style.top=(i)*tamCel+"px";
				celda.style.width=tamCel+"px";
				celda.style.height=tamCel+"px";
				celda.style.fontSize=tamFuente+"px";
				if (j==numeroAString.length-1) celda.style.borderRight="2px #ddd solid";
				//celda.style.background="#030";
				celda.innerHTML=numeroAString[j];
				salida.appendChild(celda);
			}
		}
		for (i=0;i<numDchaArray.length;i++){
			numeroAString=numDchaArray[i].toString();
			n=anchoIzda;
			for (j=0;j<numeroAString.length;j++){
				celda = document.createElement("div");
				celda.className="caja3";
				celda.style.left=(j+n+m)*tamCel+"px";
				celda.style.top=(i)*tamCel+"px";
				celda.style.width=tamCel+"px";
				celda.style.height=tamCel+"px";
				celda.style.fontSize=tamFuente+"px";
				//celda.style.background="#030";
				celda.innerHTML=numeroAString[j];
				salida.appendChild(celda);
			}
		}
	}
}

function raizCuadrada(){
	botexp.style.display="none";
	botnor.style.display="none";

	contDisplay=document.getElementById("display").innerHTML;

	while (contDisplay[0]=="0") {
			if(contDisplay[1]==",") break;
			else contDisplay = contDisplay.substring(1,contDisplay.length);
	}	

	if (contDisplay.search(",")==-1) posicionComa=contDisplay.length;
	else posicionComa=contDisplay.search(",");

	if (contDisplay=="") numero="0";
	else numero=contDisplay.replace(",","");
	
	if (parseInt(numero)==0) {salida.innerHTML=textoRaiz1;}
	else {

		if ((numero.length-posicionComa)%2==1) numero+="0";
		numeroDecimalesRadicando=numero.length-posicionComa;
		radicando=parseInt(numero)/Math.pow(10,numeroDecimalesRadicando);
		raiz=parseFloat(Math.sqrt(radicando));
		raizArray=new Array(); radicandoArray=new Array();
		raizArray[0]=(raiz.toString().replace(".","")).substring(0,Math.ceil(numero.length/2));
		radicandoArray[0]=numero;
		//alert("numero: "+numero+"\nradicando: "+radicando+"\nposicionComa: "+posicionComa+"\nnumeroDecimalesRadicando: "+numeroDecimalesRadicando+"\nraiz: "+raiz+"\nradicandoArray[0]: "+radicandoArray[0]+"\nraizArray[0]:"+raizArray[0]);

		// LLENAR ARRAY DE LA RAIZ
		for (i=1;i<raizArray[0].length;i++){
			raizArray[i]=raizArray[0].substring(0,i)*2+raizArray[0][i]+"x"+raizArray[0][i]+"="+((raizArray[0].substring(0,i)*2+raizArray[0][i])*raizArray[0][i]);
		}
		//alert(raizArray);

		// LLENAR EL ARRAY DEL RADICANDO
		if(radicandoArray[0].length%2==0) impar=false;
		else impar=true;

		if(impar) {
			longBucle=parseInt(radicandoArray[0].length/2)+1;
			radicandoArray[1]=radicandoArray[0][0]-(raizArray[0][0]*raizArray[0][0]);
			a=1;
		}
		else {
			longBucle=parseInt(radicandoArray[0].length/2);
			radicandoArray[1]=radicandoArray[0].substring(0,2)-(raizArray[0][0]*raizArray[0][0]);
			a=2;
		}

		for (i=2;i<=longBucle;i++){
			radicandoArray[i-1]+=radicandoArray[0].substring(a,a+2);
			restador=raizArray[i-1].substring(raizArray[i-1].search("=")+1,raizArray[i-1].length);
			radicandoArray[i]=(radicandoArray[i-1]-restador);
			a+=2;
		}

		// SALIDA A PANTALLA DEL ARRAY DEL RADICANDO
		salida.innerHTML="";
		if (numero.length==3) anchoIzda=0.95*w*(40/100);
		else if (numero.length==4) anchoIzda=0.95*w*(45/100);
		else if (numero.length>4 && numero.length<=8) anchoIzda=0.95*w*(50/100);
		else if (numero.length>8 && numero.length<=13) anchoIzda=0.95*w*(55/100);
		else anchoIzda=0.95*w*(60/100);
		maxNum=radicandoArray[0].length;
		tamCel=anchoIzda/maxNum;
		tamFuente = tamCel*multiplicadorTamFuente;
		if(impar) n=1;
		else n=2;
		for (i=0;i<radicandoArray.length;i++){
			radicandoArray[i]=radicandoArray[i].toString();
			m=n-radicandoArray[i].length;
			for (j=0;j<radicandoArray[i].length;j++){
				celda = document.createElement("div");
				if (i==0) celda.className="caja3";
				else celda.className="caja4";
				if (i==0) celda.style.left=(j)*tamCel+"px";
				else if(i==radicandoArray.length-1) celda.style.left=(j+m-2)*tamCel+"px";
				else celda.style.left=(j+m)*tamCel+"px";
				celda.style.top=(i)*tamCel+"px";
				celda.style.width=tamCel+"px";
				celda.style.height=tamCel+"px";
				celda.style.fontSize=tamFuente+"px";
				if (i==0) celda.style.borderTop="2px #ddd solid";
				if (i==0 && j==0) celda.style.borderLeft="2px #ddd solid";
				celda.innerHTML=radicandoArray[i][j];
				salida.appendChild(celda);

				if (i==0 && numeroDecimalesRadicando>0){
					celda = document.createElement("div");
					celda.className="caja";
					celda.style.left=(posicionComa-0.5)*tamCel+"px";
					celda.style.top=(i)*tamCel+"px";
					celda.style.width=tamCel+"px";
					celda.style.height=tamCel+"px";
					celda.style.fontSize=tamFuente+"px";
					celda.innerHTML=",";
					salida.appendChild(celda);			
				}
			}
			n+=2;
		}
		// SALIDA A PANTALL DEL ARRAY DE LA RAIZ
		anchoDcha=0.95*w-anchoIzda;
		raizArray[raizArray.length]="";
		for (i=0;i<raizArray.length;i++){
			celda = document.createElement("div");
			if (i==0) celda.className="caja2";
			else celda.className="caja4";
			celda.style.left=anchoIzda+"px";
			celda.style.top=(i)*tamCel+"px";
			celda.style.width=anchoDcha+"px";
			celda.style.height=tamCel+"px";
			celda.style.fontSize=tamFuente+"px";
			if (i<raizArray.length-1) celda.style.borderBottom="2px #ddd solid";
			celda.style.borderLeft="2px #ddd solid";
			celda.style.textAlign="left";
			celda.style.paddingLeft=tamCel/5+"px";
			if (numeroDecimalesRadicando>0 && i==0) {
				x=raizArray[i].length-numeroDecimalesRadicando/2;
				//alert(raizArray[i]+"/"+numeroDecimalesRadicando/2+"\n"+raizArray[i].slice(0,x)+","+raizArray[i].slice(x,raizArray[i].length));
				celda.innerHTML=raizArray[i].slice(0,x)+","+raizArray[i].slice(x,raizArray[i].length);
			}
			else {celda.innerHTML=raizArray[i]}
			salida.appendChild(celda);
		}
	}
}

function divideExpandida(x){
	if (x) {
		botexp.style.display="none";
		botnor.style.display="inline-block";
	}
	else {
		botexp.style.display="inline-block";
		botnor.style.display="none";
	}
	divext=x;
	calcular();
}