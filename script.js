// Obtiene una referencia al elemento de entrada (display) de la calculadora
// donde se mostrarán los valores y resultados
let result = document.getElementById('result');

/**
 * Función principal que maneja todas las operaciones de la calculadora
 * @param {string} value - El valor o la operación a realizar
 */
function calculate(value) {
    try {
        // Estructura switch para manejar los diferentes tipos de operaciones
        switch (value) {
            case 'clear':
                // Limpia el contenido del display
                result.value = '';
                break;
                
            case 'calculate':
                // Evalúa la expresión matemática en el display y muestra el resultado
                // La función eval() convierte la cadena de texto en una expresión JavaScript ejecutable
                result.value = eval(result.value);
                break;
                
            case '%':
                // Calcula el porcentaje (divide el valor actual por 100)
                result.value = eval(result.value) / 100;
                break;
                
            case 'sqrt':
                // Calcula la raíz cuadrada del valor actual
                result.value = Math.sqrt(eval(result.value));
                break;
                
            case 'square':
                // Eleva al cuadrado el valor actual (potencia de 2)
                result.value = Math.pow(eval(result.value), 2);
                break;
                
            case 'sin':
                // Calcula el seno del valor actual (en radianes)
                result.value = Math.sin(eval(result.value));
                break;
                
            case 'cos':
                // Calcula el coseno del valor actual (en radianes)
                result.value = Math.cos(eval(result.value));
                break;
                
            case 'tan':
                // Calcula la tangente del valor actual (en radianes)
                result.value = Math.tan(eval(result.value));
                break;
                
            case 'pow3':
                // Eleva al cubo el valor actual (potencia de 3)
                result.value = Math.pow(eval(result.value), 3);
                break;
                
            case 'log10':
                // Calcula el logaritmo en base 10 del valor actual
                result.value = Math.log10(eval(result.value));
                break;
                
            default:
                // Para cualquier otro valor (números, operadores, etc.), 
                // añade el valor al final de la expresión actual en el display
                result.value += value;
        }
    } catch (error) {
        // Captura cualquier error que pueda ocurrir durante la evaluación
        // (por ejemplo, divisiones por cero, expresiones inválidas, etc.)
        // y muestra "Error" en el display
        result.value = 'Error';
    }
}