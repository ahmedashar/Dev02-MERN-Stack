import { useState } from 'react'
import {MyName} from './components/MyName'
import carImg from './assets/car.jpg'
import {Navbar} from './components/Navbar'
import {Card} from './components/Card'

function App() {
  let stdsData = [
    { name: "Taha", age: 25 },
    { name: "Jahangir", age: 27 },
    { name: "Ashar", age: 21 },
    { name: "Abdullah", age: 25 },
    { name: "Muzammmil", age: 23 },
    { name: "Asmar", age: 22 },
  ]

  let cardData = [ 
    {
      image: "https://picsum.photos/200/300",
      title: "Random Image 1",
      description: "This is a random image"
    },
    {
      image: "https://picsum.photos/200/303",
      title: "Cat Image",
      description: "This is a cat image"
    },
    {
      image: "https://picsum.photos/200/301",
      title: "Random Image 2",
      description: "This is a random image"
    },
   ];



  let cars = ["Honda Accord", "Toyota Corolla", "Suzuki Mehran", "Kia Sportage", "Hyundai Sonata", "Nissan Altima"];

  return (
    
    <div className='container-fluid'>
      <Navbar/>
      {/* <Card image={cardData[0].image} title={cardData[0].title} description={cardData[0].description}/> */}
      {/* <MyName name={stdsData[0].name} age={stdsData[0].age} />
      <MyName name={stdsData[1].name} age={stdsData[1].age} />
      <MyName name={stdsData[4].name} age={stdsData[4].age}  /> */}

        <div className='d-flex justify-content-around mt-4'>
        {
          cardData.map((card, index) => {
            return <Card key={index} image={card.image} title={card.title} description={card.description}/>
          })
        }
        </div>


      {
        stdsData.map((std, index) => {
          return <MyName key={index} name={std.name} age={std.age} />
        })
      }

      {/* <h1>{cars[3]}</h1> */}

      {
        cars.map((car, index) => {
          return <h1 className="colorblue" key={index}>{car}</h1>
        })
      }

      {/* <img src="https://picsum.photos/200/300" alt="random" /> */}
      <img src={carImg} alt="" />
    </div>
  )
}

export default App
