import React, {useState} from 'react';

import './App.css';



//Interface 1: Defining the HeaderProps
//Adding the `?` means that it is optional and NOT a required property
interface HeaderProps {
  buttonText?: string;
}

//Movie Interface 2: 
interface Movie {
  title: string,
  date: string,
  rating: string,
  description: string,
}

// NOTE: typescript is telling us that the props param OR a destructured param
//   is of type: any unless we define it
// function App(props) {

// Interface 2: The props that header are taking in require the interface HeaderProps buttonText: string
function Header(props: HeaderProps) {
// DESTRUCTURED VERSION: function Header({ HeaderProps }) {

  //using state
  //useState is defined as being either a number OR a null value
  const [count, setCount] = useState<number | null>(0)

  const increment = () => {
    setCount(count + 1)
  }

  //Movie Interface 2: Setting to null, because we are simulating an api call to load these movies
    //setting it to be a movie object OR it to be null to start with
  const [movie, setMovie] = useState<Movie | null>(null)



  return (
    <div>
      <h1>Header</h1>

      {/* Interface 3: will now show the string passed from App.tsx */}
      <button>{props.buttonText}</button>
      {/* DESTRUCTURED VERSION: */}
      {/* <button>{buttonText}</button> */}


      <div>
        <button onClick={increment}>{props.buttonText}</button>
        <p>{count}</p>
      </div>
    </div>

  );
}

export default Header;