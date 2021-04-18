import React from "react";
//import logo from './logo.svg';
//import './App.css';
import Potato from "./Potato";
import PropTypes from "prop-types";

function Potato1() {
  return (<h5>i love potato 5</h5>);
}

function Food(props){
//function Food ({ favorite }) {
  console.log(props);
  console.log(props.favorite);
  //console.log(favorite);
  return (<h3>I like {props.favorite}</h3>);
}

//function Myfood(props) {
function Myfood({name, img, rating}) {
  //return (<div><h4>{props.name}</h4><h5>{props.img}</h5></div>);
  return (<div><h4>{name}</h4><h5>{img}</h5><h5>{rating}</h5></div>);
}

Myfood.propTypes = {
  name : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

function renderFood(dish) {
  return (<Myfood key={dish.id} name={dish.name} img={dish.image} rating={dish.rating}/>);
}

const foodLike = [{id:1, name:"bab",image:"1",rating:5},{id:2, name:"source",image:"2",rating:4},{id:3, name:"kurry",image:"3",rating:3}];

function App() {
  return (
    <div className="App">
      Hi
      <Potato />
      <Potato1 />
      <Food favorite="kimchi" msg="good" personlist="[1,2,3]" />
      <Food favorite="ramen" />
      {foodLike.map(dish => (<Myfood key={dish.id} name={dish.name} img={dish.image} rating={dish.rating} />)   )}
      {foodLike.map(renderFood)}
    </div>
  );
}

export default App;
