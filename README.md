# To-Do List Application

A simple and elegant To-Do List web application that allows users to add, edit, and delete tasks, with task data saved in local storage for persistence.

## Live Demo

Check out the live version of the project here: [Live To-Do List App](https://prashrijan.github.io/to-do/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Local Storage Functionality](#local-storage-functionality)
- [Author](#author)

## Features

- **Add Tasks**: Enter a new task in the input field and click the "Add" button to save it to the list.
- **Edit Tasks**: Click the pencil icon next to each task to enable editing, then save your changes with the save icon.
- **Delete Tasks**: Remove any task by clicking the trash bin icon next to it.
- **Persistent Storage**: All tasks are saved in the browser's local storage, making them available even after page refreshes or reopening the browser.

## Technologies Used

- **HTML**: For structuring the web application.
- **CSS**: For styling the interface, including responsive layout.
- **JavaScript**: For managing task logic, handling button interactions, and local storage operations.
- **Remix Icon**: For task management icons (edit, save, delete).

## Setup

To set up this project locally, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/prashrijan/to-do.git

   ```

2. Navigate to the project directory.

   ```bash
   cd todo-list-app

   ```

3. Open `index.html` in a web browser to view and interact with the To-Do List application.

## Usage

- **Add a Task**: Type a task into the input field and click the **Add** button to include it in the list.
- **Edit a Task**: Click the pencil icon next to a task to modify its text, then click the save icon to store the changes.
- **Delete a Task**: Click the trash bin icon next to a task to remove it from the list.
- **Persistence**: The application saves all tasks to local storage, allowing them to persist even after closing or refreshing the page.

## Local Storage Functionality

- **Saving Tasks**: The `saveTasksToLocalStorage` function updates the task list in local storage whenever you add, edit, or delete a task.
- **Loading Tasks**: When the page loads, the `loadTasksFromLocalStorage` function retrieves and displays any tasks stored in local storage.

## Author

Made by [Prashrijan Shrestha](https://github.com/prashrijan)
