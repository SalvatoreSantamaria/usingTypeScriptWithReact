<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console. -->

- Notes take from React and Typescript: Getting started https://www.youtube.com/watch?v=I9jfsIRnySs 

- See video for take about defining functional components, like
## Two different way to define functional components:

1
Defining `what Heading returns` - a React.ReactNode
```
function Heading(): React.ReactNode {
  return <h1>My Website Heading</h1>
}
Heading() <!-- is returning a React.ReactNode -->
```

2
Written as a function expression
```
const OtherHeading: React.FC = () => <h1>My Website Heading</h1>
OtherHeadign() <!-- is returning a FunctionalComponent -->
```

---

## Interface Example 1

Interface 1: Defining the HeaderProps
__In Header.tsx__
Adding the `?` means that it is optional and NOT a required property
```
interface HeaderProps {
  buttonText?: string;
}
```

Interface 2 and 3: The props that header are taking in require the interface HeaderProps buttonText: string
__In Header.tsx__

```
// Interface 2: The props that header are taking in require the interface HeaderProps buttonText: string
function Header(props: HeaderProps) { // DESTRUCTURED VERSION: function Header({ HeaderProps }) {

  return (
    <div>
      <h1>Header</h1>

      {/* Interface 3: will now show the string passed from App.tsx */}
      <button>{props.buttonText}</button> {/* DESTRUCTURED VERSION: <button>{buttonText}</button> */}

      <div>
        <button onClick={increment}>{props.buttonText}</button>
        <p>{count}</p>
      </div>
    </div>
  );
}
```

// Interface 4: 
In App.ts:
```
function App() {
  return (
    <div className="App">
      {/* Interface 4: Error if not passing in props of type string */}
    <Header />
      {/* Pass in the button text correctly like below */}
    <Header buttonText="Click Me!" />
    </div>
  );
}
export default App;
```

## Interface Example 2

Movie Interface 1: 
```
interface Movie {
  title: string,
  date: string,
  rating: string,
  description: string,
}
```

Movie Interface 2: Setting to null, because we are simulating an api call to load these movies
setting it to be a movie object OR it to be null to start with
```
const [movie, setMovie] = useState<Movie | null>(null)
```

  ---

## Using State 
useState is defined as being either a number OR a null value

```
const [count, setCount] = useState<number | null>(0)

const increment = () => {
  setCount(count + 1) // count has to be a number or null
}
```