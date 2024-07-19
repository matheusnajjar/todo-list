# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Todo List Application

A simple and user-friendly Todo List application built with React. This application allows users to manage their tasks efficiently by adding, completing, filtering, and removing tasks.

## Features

- Add tasks with specific categories
- Mark tasks as completed
- Remove tasks
- Filter tasks by status (All, Completed, Incomplete)
- Search tasks by text
- Sort tasks alphabetically

## Usage

1. Add tasks by entering text and selecting a category in the input form.
2. Use the search bar to find tasks by text.
3. Use the filter options to view all tasks, completed tasks, or incomplete tasks.
4. Sort tasks alphabetically by clicking the Asc or Desc buttons.
5. Mark tasks as complete by clicking the "Complete" button.
6. Remove tasks by clicking the "Delete" button.

## Components

- `App.jsx`: The main component that manages the state and renders other components.
- `Todo.jsx`: A component that represents an individual todo item.
- `TodoForm.jsx`: A component that contains the form to add a new todo.
- `Search.jsx`: A component that contains the search input.
- `Filter.jsx`: A component that contains the filter and sort options.

## Demo

Check out the live demo of the application [here](https://todo-list-theta-drab.vercel.app/).
