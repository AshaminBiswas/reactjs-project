import Navbar from "./components/Navbar"
import Form from "./components/Form"

function App() {
  return (
    <div className="max-w-[1280px] m-auto bg-rose-900">
      <Navbar />
      <div className='px-4 mt-4'>
        <span className='bg-white text-black px-4 py-2 rounded font-bold text-2xl inline-block mb-2'>CONTACT US</span>
        <p className='text-white'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      </div>
      <Form />
    </div>
  )
}

export default App
