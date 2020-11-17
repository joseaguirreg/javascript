var alerta =document.getElementById("alerta");
// Obtenemos el button y lo almacenamos en una variable llamada "btn"
    var btn = document.getElementById("btn");
    /* Obtenemos el div que muestra el resultado y lo
    almacenamos en una variable llamada "resultado" */
    var resultado = document.getElementById("resultado")
    /* Obtenemos los dos input y los almacenamos en
    variables "inputUno" y "inputDos" */
    var inputUno = document.getElementById("input-uno");
    var inputDos = document.getElementById("input-dos");
    // Añadimos el evento click a la variable "btn"

    btn.addEventListener("click",function(){
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    /* Llamamos a una función que permite realizar la
    suma de los números y los mostramos al usuario" */
    if(n1 % 1 == 0 && n2 % 1 == 0){
        resultado.innerHTML = suma(n1,n2);
        alerta.style.display = 'none';
    }else{
        alerta.innerHTML = 'Porfavor, ingrese números enteros';
        alerta.style.display = 'block';
    }
    });
    /* Función que retorna la suma de dos números */
    function suma(n1, n2){
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) + parseInt(n2);
    }

    btn2.addEventListener("click",function(){
        var n1 = inputUno.value;
        var n2 = inputDos.value;
        if(n1 % 1 == 0 && n2 % 1 == 0){
            resultado.innerHTML = resta(n1,n2);
            alerta.style.display = 'none';
        }else{
            alerta.innerHTML = 'Porfavor, ingrese números enteros';
            alerta.style.display = 'block';
        }
    });

    function resta(n1,n2){
        return parseInt(n1)-parseInt(n2);
    }

    btn3.addEventListener("click",function(){
        var n1 = inputUno.value;
        var n2 = inputDos.value;
        if(n1 % 1 == 0 && n2 % 1 == 0){
            resultado.innerHTML = multiplicacion(n1,n2);
            alerta.style.display = 'none';
        }else{
            alerta.innerHTML = 'Porfavor, ingrese números enteros';
            alerta.style.display = 'block';
        }
    });

    function multiplicacion(n1,n2){
        return parseInt(n1)*parseInt(n2);
    }

  
    btn4.addEventListener("click",function(){
        var n1 = inputUno.value;
        var n2 = inputDos.value;
        if(n1 % 1 == 0 && n2 % 1 == 0){
            resultado.innerHTML = division(n1,n2);
            alerta.style.display = 'none';
        }else{
            alerta.innerHTML = 'Porfavor, ingrese números enteros';
            alerta.style.display = 'block';
        }
    });

    function division(n1,n2){
        if(n2 == 0){
            alerta.innerHTML = 'No se puede dividir por cero';
            alerta.style.display = 'block';
            alert("hola");
            
        }else{
            return parseInt(n1)/parseInt(n2);
            
        }
    }