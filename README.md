# React Hooks Movies State Management

The developers in your company have built the views for a Movie Management application, but they have not yet finished the state management. It is your task! Use React in order to make the Movie Management app fully functional.

This task uses **React Hooks** and **React Testing Library (`@testing-library/react`)**.

## Introduction

The Movie Management should fulfill the following requirements:
- The application lists available movies, displays their titles, subtitles, descriptions, covers and users’ ratings.
- Movies can be deleted from the list.
- Movies can also be rated by users. Once a movie is rated, the new average rating of a movie is displayed accordingly.
- Movies can be added. Click the "plus" button and then fill in all form fields, then submit the form. If all form fields are filled in with data, a new movie will be created.

Browse the tests to see what functionality is exactly expected.

## Problem Statement

The existing codebase includes the view layer of the applications, i.e., the components render the data and the HTML correctly. But the components do not handle the state in any way. Currently, they include some hardcodes and mock data. You are expected to meet the following requirements:
- Use **built-in React Hooks** (like `useState`, `useReducer` etc. or anything built on top of them) to implement state management.
- You are free to use a certain state management solution - adapt components to your needs. Especially, you should adapt `AddMovieButton`, `AddMovieForm`, `MovieCard` and `MovieList` components.
- You shall **not** use additional external libraries (except for the ones that have already been installed).
- Most of the components do not have props defined. It is your task to design and implement them according to your solution.

### Movies Data

Two data sets have been used:
- `data/real-movies.json` which is used within the application in `dev` and `prod` modes,
- `data/test-movies.json` is used for tests

There is no external API to connect to. The application holds its state locally.

The *application should set the current movie list to the data set **initially** (only once)*. After this, all changes (deleting movies, adding new movies, rating movies) would alter the local state.

### Evaluation

- Your solution will be evaluated against a suite of integration tests which rely on the `<App>` component. Make sure all these tests pass.
- Some tests use test IDs (`data-testid`), others rely on button labels, etc. You don't need to change anything there, but make sure your implementation matches test requirements. **Do not modify the tests**.
- Integration tests use a *Page Object pattern*. It provides a clean, functionality-oriented API which hides the details of the underlying DOM structure.

## Setup

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm run test:watch` – run all tests in _watch mode_ (alternative to `npm test` which you might find more convenient to use locally)
4. `npm start` – (optional) serve the application locally at [http://localhost:3000/](http://localhost:3000/) (it won't be used to evaluate your solutions)
5. `nvm install` - (optional) set up the expected _major_ version of Node.js locally ([`nvm`](https://github.com/nvm-sh/nvm) required; Node.js version defined in `.nvmrc` file)

This application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

**Good Luck!**
