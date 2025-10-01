import '../index.css'
import marvel from "../assets/marvel_logo.svg"
import github from "../assets/github_logo.svg"
import InputGit from '../components/input-git'
import Footer from '../components/footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
const [userName, setUserName] = useState("");
const navigate = useNavigate();
const [error, setError] = useState("");
const [loading, setLoadgin] = useState();

async function handleSearch(){
setLoadgin(true);
setError("");
const url = `https://api.github.com/users/${userName}`;
const respost = await fetch (url);

if (respost.ok){
  navigate("/marvel");
}
else if (!userName){
  setError("Digite um nome de usuário");
}
else{
 setError("Usuário não encontrado");
}

setLoadgin(false);
}

  return (
    <div className='bg-linear-to-r from-[#ece9e6] to-[#ffffff]w-screen h-screen flex flex-col items-center'>
      <div className='w-full max-w-[2000px] h-screen flex flex-col justify-center items-center gap-4 p-4'>
        {/* logo marvel*/}
          <img src={marvel}
              alt="logo-marvel"
              className='w-25 h-auto'
        />
          <p className='text-center font-bold text-4xl text-[#24292F]'>Seu GitHub é a chave para o<br />universo dos heróis</p>
          <h2 className='text-[#AFAFB0] font-normal text-center' >Digite seu username do GitHub para continuar</h2>
             <InputGit onChange={(e) => setUserName(e.target.value)} onHandleSearch={handleSearch} onLoading={loading}/>
             <div className='flex w-full max-w-[500px] justify-between items-center -mt-2 flex-wrap text-center'>
                <p className='text-red-500 font-bold text-xs'>{error}</p>
                <p className='text-[#24292F] font-light text-xs'>Não tem conta no GitHub?{' '}
              <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
              target="_blank" rel="noopener noreferrer"
              className="text-black hover:underline"
              >Crie aqui</a>
              </p>
             </div>
             <img src={github} alt="logo-github"/>
             <Footer/>
      </div>
    </div>
  )
}

export default App
