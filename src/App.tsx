import React from 'react';
import './App.css';
import Card from './Card/Card';




function App() {
const cardContent = [{
  title: 'Card header here',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl. Eu feugiat pretium nibh ipsum. Neque laoreet suspendisse interdum consectetur. Id semper risus in hendrerit gravida rutrum. Convallis a cras semper auctor neque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Cum sociis natoque penatibus et magnis dis parturient. Vel quam elementum pulvinar etiam non quam lacus. Et ligula ullamcorper malesuada proin libero. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Ultricies lacus sed turpis tincidunt. Vel facilisis volutpat est velit egestas dui id ornare. Fames ac turpis egestas sed tempus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor vitae purus faucibus ornare suspendisse sed nisi. Mauris augue neque gravida in fermentum.'
},
{
  title: 'Card header here',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl. Eu feugiat pretium nibh ipsum. Neque laoreet suspendisse interdum consectetur. Id semper risus in hendrerit gravida rutrum. Convallis a cras semper auctor neque. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Cum sociis natoque penatibus et magnis dis parturient. Vel quam elementum pulvinar etiam non quam lacus. Et ligula ullamcorper malesuada proin libero. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Ultricies lacus sed turpis tincidunt. Vel facilisis volutpat est velit egestas dui id ornare. Fames ac turpis egestas sed tempus. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor vitae purus faucibus ornare suspendisse sed nisi. Mauris augue neque gravida in fermentum.'
},
]

  return (
    <div className="App">
      {/* <Card title={cardContent[0].title } content={cardContent[0].content} /> */}
      {/* <Card title={cardContent.map( item => item.title).toString()} content={cardContent.map( item => item.content).toString()} /> */}
      {cardContent.map(item => <Card title = {item.title} content={item.content}/>  )}
    </div>  
 );
}

export default App;

