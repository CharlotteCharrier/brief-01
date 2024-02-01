# Landing Page

This project serve the Landing page from our company.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all dependencies needed to run the project.\
In development process, this is most often followed by `npm start`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Ce que j'ai fait

Je me suis basée sur la même maquette que pour la partie httml/css.

J'ai créé un composant Pricing que j'ai appelé dans Home.jsx.

J'ai personnalisé le css de mon composant.

J'ai changé le bouton 'voir les abonnements' par 'voir les tarifs' dans le Header.

Composant Header, ligne 6:
Je voulais faire en sorte qu'au click du btn, ça scroll jusqu'à la partie des prix.
Pour ça j'ai créé une const anchor qui va cibler grâce à l'id #pricing de mon composant la zone où je veux que ça scroll.

ligne 7 j'ai ajouté un scrollIntoView à ma variable anchor puis j'ai donné un comportement à mon scroll pour qu'il soit smooth.