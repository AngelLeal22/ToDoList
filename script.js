function addTask() {
  // Obtener el valor del campo de la tarea
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

  // Validar que el campo no esté vacío
  if (nuevaTareaTexto.trim() === "") {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  //crear elemento en la lista

  let nuevaTarea = document.createElement("li");

  //con textContent obtenemos el texto de la tarea
  nuevaTarea.textContent = nuevaTareaTexto + " "; // Agregar un espacio al final para el botón y no quede pegado del texto

  //crear botón de eliminar
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function () {
    nuevaTarea.remove();
  };

  //crear boton de verificar
  let botonVerificar = document.createElement("button");
  botonVerificar.textContent = "Verificar";
  botonVerificar.onclick = function () {
    if (nuevaTarea.style.textDecoration === "line-through") {
      nuevaTarea.style.textDecoration = "none"; // Si ya está verificada, quitar el subrayado
    } else {
      nuevaTarea.style.textDecoration = "line-through"; // Si no está verificada, agregar el subrayado
    }
  };

  //crear boton de editar
  let botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.onclick = function () {
    let nuevoTexto = prompt("Editar tarea:".trim()); // Usamos trim() para eliminar espacios en blanco al inicio y al final del texto
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      //prompt() es una función integrada que muestra una ventana emergente al usuario para solicitarle que ingrese texto
      // !== es un operador de comparación que verifica si los valores son diferentes y no son null
      // recreamos la validación para el nuevo texto, null es cuando el usuario presiona cancelar
      nuevaTarea.textContent = nuevoTexto + " "; // Actualizar el texto de la tarea
      // Volver a agregar los botones después de editar
      nuevaTarea.appendChild(botonEliminar);
      nuevaTarea.appendChild(botonEditar);
      nuevaTarea.appendChild(botonVerificar);
    }
  };

  //agregar boton de eliminar
  nuevaTarea.appendChild(botonEliminar);

  //agregar boton de editar
  nuevaTarea.appendChild(botonEditar);

  //agregar boton de verificar
  nuevaTarea.appendChild(botonVerificar);

  //agregar la nueva tarea a la lista
  document.getElementById("list-container").appendChild(nuevaTarea);

  //limpiar el campo de entrada de la tarea
  document.getElementById("nuevaTarea").value = "";
}
