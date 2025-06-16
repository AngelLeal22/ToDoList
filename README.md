# To-Do List Application

This is a simple and intuitive To-Do List application built with HTML, CSS, and JavaScript. It allows users to manage their daily tasks efficiently by adding, deleting, editing, and marking tasks as complete.

## Features

* **Add New Tasks**: Quickly add new tasks to your list using the input field and "New Task" button.
* **Delete Tasks**: Remove tasks you no longer need with a dedicated "Eliminar" (Delete) button next to each task.
* **Edit Tasks**: Modify existing tasks using the "Editar" (Edit) button, which prompts you to enter new text for the task.
* **Mark as Complete/Verify**: Each task has a "Verificar" (Verify) button, intended to mark tasks as complete (though the current functionality only includes the button without visual completion indication).
* **Responsive Design**: The application is designed to be responsive, adapting to different screen sizes for a consistent user experience on desktops, tablets, and mobile devices.
* **Sleek User Interface**: A clean and modern design with a gradient background and clear task presentation.

## Technologies Used

* **HTML5**: For the structure and content of the web page.
* **CSS3**: For styling the application, including layout, colors, and responsive design.
* **JavaScript**: For implementing the interactive functionalities such as adding, deleting, editing, and verifying tasks.

## How to Use

1.  **Clone the Repository (or download the files)**:
    ```bash
    git clone <repository_url>
    ```
2.  **Open `index.html`**:
    Navigate to the project directory and open the `index.html` file in your web browser.

### Adding a Task:
1.  Type your new task into the "New Task" input field.
2.  Click the "New Task" button. Your task will appear in the list below.

### Deleting a Task:
1.  Locate the task you wish to remove.
2.  Click the "Eliminar" button next to that task.

### Editing a Task:
1.  Find the task you want to modify.
2.  Click the "Editar" button next to the task.
3.  A prompt will appear. Enter the updated task description and click "OK".

### Marking a Task as Complete:
1.  Click the "Verificar" button next to the task you want to mark as complete. (Note: In the current version, this button is present but does not visually change the task's appearance or state.)

## Project Structure

.
├── index.html
├── style.css
├── script.js
├── github.png (image for footer)
└── pngwing.com (2).png (image for title)


* `index.html`: The main HTML file that structures the to-do list interface.
* `style.css`: Contains all the CSS rules for styling the application.
* `script.js`: Contains the JavaScript functions that power the interactive features of the to-do list.
* `github.png`: Image file used in the footer.
* `pngwing.com (2).png`: Image file used in the header.

## Developer

This project was developed by [Angel Leal](https://github.com/AngelLeal22).

## Future Enhancements

* Implement persistent storage (e.g., using Local Storage) so tasks are saved even after closing the browser.
* Add visual feedback for completed tasks (e.g., strikethrough text or change background color).
* Allow reordering tasks.
* Add categories or due dates for tasks.