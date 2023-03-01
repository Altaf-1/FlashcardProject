# Flashcard Generator

!(https://user-images.githubusercontent.com/65113182/222141199-f404a7a5-0ea1-4577-802a-9861a9baa5ce.jpeg)


## Pages
1 - Create Flashcard Page.

2 - My Flashcard Page.

3 - Flashcard Details Page.

## Pages in brief
### 1 - Create Flashcard Page.

The first page contains two forms First the Flashcard and the second form adding
terms to the flashcard. The Flashcard contains 3 fields:
    Create Group (Name Of The Flashcard)
    Add a description (Some details About the Flashcard)
    Image of the Flashcard (Image was Optional)
The Second Form:
    Enter Term (Title)
    Enter Definition (Term definition)
    Term Image (Image was Optional)
> The second form was the Dynamic Form which was created using FORMIK. 
> Add more button added in the second form. When the user clicks on add more
button another set of inputs adds to the flashcard. 
> Users can delete terms by clicking on the Trash icon. 
> After clicking the Create Button, the Flashcard will be generated. 
> Using Formik Library for submission and validation. 
> React-Redux is used for Global State Management.

### 2 - My Flashcard Page.

The second page was to display all the user-created Flashcards. By default, the user can only see 6 cards & after clicking the See All button all the remaining cards will be displayed.
> After clicking on the Delete Button, User can delete the entire flashcard. 
> After clicking on the View Cards, User is redirected to the flashcard details page.

### 3 - Flashcard Details Page.

Flashcard Details Page is divided into 3 sections:
1) Left section: This section shows all the terms of the particular
Flashcard. When the user clicks on a particular term, details will be shown in the
middle section. 
2) Middle Section: In this section user will see the details of each term. Users can
navigate from one term to another by clicking on the arrow button at the bottom. 
3) Right section:
> Share Button: A Modal pops up & the user can copy the link on that model by
clicking on the copy to clipboard button & user can paste it anywhere. On the bottom
side, users can share the created flashcard to their social handler like Facebook, Instagram, Whatsapp, Twitter, etc.

## Libraries and Packages
1 - react-router-dom

2 - react-redux

3 - react-icons

4 - Formik

5 - Tailwind CSS

## Folder Structure

<img width="152" alt="Screenshot 2023-03-01 180320" src="https://user-images.githubusercontent.com/65113182/222140855-5e812960-d555-4b72-8465-2fab63aaad9c.png">



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
