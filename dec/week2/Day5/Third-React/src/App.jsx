
import './App.css'
import Card from './component/Card'
import Home from './Home'
import Home2 from './Home2'

function App() {

  let obj = {
    name: "xyz",
    age: 30,
    phone: 234566
  }
  let handleFun = () => {
    console.log("Hii this is handle function")
  }
  return (
    <>
      {/* <h1>Hollo</h1> */}
      {/* <Home a={20} str={"hii"} isTrue={true} arr={[1, 2, 3, 4]} obj={obj} func={handleFun}>

        <button>hii</button>
      </Home> */}


      {/* <Home2 b={40} obj={obj}>
        <button>buuton</button>
        <p>this is paragraph</p>
        <b>this is bold</b>
      </Home2> */}


      <div className='flex gap-2 flex-wrap mt-40 ml-20'>
        <Card img={"https://cdn.pixabay.com/photo/2017/07/06/05/01/bengal-2476933_1280.jpg"} title={"Cat image"} desc={"this is pet cat"}/>
        <Card img={"https://media.istockphoto.com/id/1333720104/photo/mature-cow-black-and-white-curious-gentle-surprised-look.jpg?s=2048x2048&w=is&k=20&c=zIywuduGWJZW_WiPbjlPQ-xjFKKIz01dt_Bwr2Ps73U="} title={"cow image"} desc={"this is cow image"}/>
        <Card img={"https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=pEtqycJb7GbnbvKnHuyqAi2eScR9A3LZYmMaWivi1h8="} title={"Rat image"} desc={"this is a chuha"}/>
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
