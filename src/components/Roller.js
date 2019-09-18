import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


class Roller extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 

        notes: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
        meals: [
          {id: 1, path: img1, name: 'Matrett 1'},
          {id: 2, path: img2, name: 'Matrett 2'}
        ],
        clicked: false,
        selectedImage: img1
     };
  }

  handleClick = () => {
    this.setState({
      clicked: true, 
      selectedImage: this.state.notes[Math.floor(Math.random() * this.state.notes.length)]
      
      // selectedImage: this.state.notes(Math.floor(Math.random() * this.state.meals.length))
    })
  }

  findArrayElementById(id) {
    let element = this.state.meals.find((element) => {
      return element.id === id;
    })
    return element.path;
  }

  render() {
    return (
    <div>
    <img
        src={this.state.selectedImage}
        style={{width: 480,height:480, borderBottomRightRadius: 250,  borderBottomLeftRadius: 250,  borderTopRightRadius: 250,  borderTopLeftRadius: 250}}
        resizeMode="contain" />
      <h3 style={{marginTop: 25, marginBottom: 0}}>Matrett 1</h3>
    <text style={{marginTop: 0, fontSize: 15}}><b>Ingredienser:</b></text>
    <ol style={{fontSize: 14, textAlign: "center", listStylePosition: "inside"}}  >
      <li> Ingrediens 1</li>
      <li> Ingrediens 2</li>
      <li> Ingrediens 3</li>
    </ol>
    <p>
        <Button variant="info" onClick={this.handleClick} style={{width: 120, height: 40, marginTop: 40}}>ROLL DICE</Button>
    </p>
    </div>
    );
  }
}

export default Roller;