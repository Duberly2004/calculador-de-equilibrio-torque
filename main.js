
// ------------FUNCIÓN DE VALIDAR DATOS INGRESADOS-----------------
function validador_de_datos(dato){
    if (dato <=0){
        alert('POR FAVOR INGRESE NÚMEROS ENTEROS ')
    }
}
function calcular(){
    // TORQUE 1
    let masa1 = document.getElementById('masa1').value;
    let distancia1 = document.getElementById('distancia1').value;
    let torque1 = parseInt(masa1) * parseInt(distancia1);
    // document.getElementById('resultados').value = torque1;

    validador_de_datos(torque1)

    let masa2 = document.getElementById('masa2').value;
    let distancia2 = document.getElementById('distancia2').value;
    let torque2 = parseInt(masa2) * parseInt(distancia2);
    // document.getElementById('resultados').value = torque2;

    validador_de_datos(torque2)

    // document.getElementById('resultados').value = masa1;

    // CONDICIONALES 
    let diferencia = torque1 - torque2

    if (torque1 == torque2){
        
        document.getElementById('resultados').value = `el sistema esta en equilibrio, T1=${torque1} - T2= ${torque2} = ${diferencia}`
    }
    else{
        if (torque1 <= torque2){
            diferencia = torque2 - torque1
        }
        else{
            document.getElementById('resultados').value = `el sistema no esta en equilibrio, T1=${torque1} - T2= ${torque2} = ${diferencia}`
            
        }
    }
}


