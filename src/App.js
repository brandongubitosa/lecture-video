import React from 'react';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';


class App extends React.Component {

  state = { instructor: {} }  //it is empty bc by default there is no instructor that likes anime

  appClickHandler = (instructor_obj) => {
    this.setState({instructor: instructor_obj})
  }

  render() {

    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </>
    );
  }
}






export default App;
