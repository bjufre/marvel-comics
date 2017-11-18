# Marvel Comics

![Marvel Comics](./marvel-cover.png)

React App that uses the [Marvel API](http://developer.marvel.com) to show the available comics
as well as some of their characteristics.

This project is perfect if you want to see React + Redux in action as well as how to implement Redux with Redux Observable, and also see some playful things with Rxjs.

For example, to see some of the power involved with reactive programming,
in the detail page of our app, we have to fetch the following items:
- Comic detail
- Creators of the comic
- Characters from the comic

To do this we create an `epic` (Redux Observable) that will fetch them "concurrently".
But because of some limitations of the API when calling the "creators" and "characters" endpoints,
we can encounter that we don't get back all the "results" available in the API.
It's because of this that we perform as "many ajax requests" as we need until we have all the necessary data.
And not only that but because the use of Observables we get "cancellation" of ajax requests for free.

**NOTE:** In order to not lose that much time when styling, in this project we use some of the latest CSS specifications, like *CSS Grids*. It's because of this, that this app has been optimized to run **only on the latest versions of Google Chrome & Safari**.

###### This project was created with [Create React App](https://github.com/facebookincubator/create-react-app) in order to take full advantage of its simplicity.

---

### Main Tech :heart:

* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/)
* [Redux](https://github.com/reactjs/redux)
* [Redux Observable](https://github.com/redux-observable/redux-observable)
* [Rxjs](http://reactivex.io/rxjs/)

### Install
In order to play around with this app, go ahead and clone the repo into your machine:
```bash
# Go to your preferred path and run:
git clone https://github.com/behind-design/marvel-comics.git

cd marvel-comics
```

### Run it locally
If what you want is to see the application in action, run:
```bash
# NPM users
npm run start

# Yarn users
yarn start
```

### Run the tests
To run the tests run:
```bash
# NPM users:
npm run test

# Yarn users:
yarn test
```
