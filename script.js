function addTask() {
  // Obtener el valor del campo de la tarea
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

  // Validar que el campo no esté vacío
  if (nuevaTareaTexto.trim() === "") {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  // Verificar límite de tareas (4 como máximo)
  const tareas = document.querySelectorAll("#list-container li");
  if (tareas.length >= 4) {
    alert("Has alcanzado el límite de 4 tareas. Por favor, completa o elimina algunas antes de agregar más.");
    return;
  }

  // Crear elemento en la lista
  let nuevaTarea = document.createElement("li");
  let spanTarea = document.createElement("span"); // Usamos un span para el texto
  spanTarea.textContent = nuevaTareaTexto;
  nuevaTarea.appendChild(spanTarea);

  // Crear botón de eliminar
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function() {
    nuevaTarea.remove();
    saveTasks(); // Guardar cambios al eliminar
  };

  // Crear botón de verificar
  let botonVerificar = document.createElement("button");
  botonVerificar.textContent = "Verificar";
  botonVerificar.onclick = function() {
    spanTarea.style.textDecoration = spanTarea.style.textDecoration === "line-through" ? "none" : "line-through";
    saveTasks(); // Guardar cambios al verificar
  };

  // Crear botón de editar
  let botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.onclick = function() {
    let nuevoTexto = prompt("Editar tarea:", spanTarea.textContent.trim());
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      spanTarea.textContent = nuevoTexto.trim();
      saveTasks(); // Guardar cambios al editar
    }
  };

  // Agregar botones
  nuevaTarea.appendChild(botonVerificar);
  nuevaTarea.appendChild(botonEditar);
  nuevaTarea.appendChild(botonEliminar);

  // Agregar la nueva tarea a la lista
  document.getElementById("list-container").appendChild(nuevaTarea);

  // Limpiar el campo de entrada
  document.getElementById("nuevaTarea").value = "";

  // Guardar las tareas en LocalStorage
  saveTasks();
}

// Función para guardar todas las tareas en LocalStorage
function saveTasks() {
  const tareas = [];
  const elementosTareas = document.querySelectorAll("#list-container li");
  
  elementosTareas.forEach(function(tarea) {
    const span = tarea.querySelector("span");
    tareas.push({
      text: span.textContent,
      completed: span.classList.contains("completed")
    });
  });
  
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para cargar tareas al iniciar la página
function loadTasks() {
  const tareasGuardadas = localStorage.getItem("tareas");
  if (tareasGuardadas) {
    const tareas = JSON.parse(tareasGuardadas);
    
    tareas.forEach(function(tarea) {
      // Crear elementos (similar a addTask pero sin la validación de límite)
      let nuevaTarea = document.createElement("li");
      let spanTarea = document.createElement("span");
      spanTarea.textContent = tarea.text;
      if (tarea.completed) {
        spanTarea.classList.add("completed");
      }
      
      // Crear botones (igual que en addTask)
      let botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.onclick = function() {
        nuevaTarea.remove();
        saveTasks();
      };
      
      let botonVerificar = document.createElement("button");
      botonVerificar.textContent = "Verificar";
      botonVerificar.onclick = function() {
        spanTarea.classList.toggle("completed");
        saveTasks();
      };
      
      let botonEditar = document.createElement("button");
      botonEditar.textContent = "Editar";
      botonEditar.onclick = function() {
        let nuevoTexto = prompt("Editar tarea:", spanTarea.textContent);
        if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
          spanTarea.textContent = nuevoTexto.trim();
          saveTasks();
        }
      };
      
      // Construir la tarea
      nuevaTarea.appendChild(spanTarea);
      nuevaTarea.appendChild(botonVerificar);
      nuevaTarea.appendChild(botonEditar);
      nuevaTarea.appendChild(botonEliminar);
      
      // Agregar a la lista
      document.getElementById("list-container").appendChild(nuevaTarea);
    });
  }
}

// Al cargar la página, cargar las tareas guardadas
document.addEventListener("DOMContentLoaded", function() {
  loadTasks();
  
  // Agregar evento para Enter en el input
  document.getElementById("nuevaTarea").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
  //funcion local storage

    


