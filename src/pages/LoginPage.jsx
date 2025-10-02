import '../index.css'
import marvel from "../assets/marvel_logo.svg"
import githubDark from "../assets/githubDark.svg"
import githubWhite from "../assets/githubWhite.svg"
import InputGit from '../components/input-git'
import Footer from '../components/footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DarkMode from '../components/dark-mode'

function LoginPage() {
const [userName, setUserName] = useState("");
const navigate = useNavigate();
const [error, setError] = useState("");
const [loading, setLoadgin] = useState();

const [darkMode, setDarkMode] = useState(false);

async function handleSearch(){
setLoadgin(true);
setError("");
const url = `https://api.github.com/users/${userName}`;
const respost = await fetch (url);

if (respost.ok){
  const data1 = await respost.json();
  localStorage.setItem("userData", JSON.stringify(data1));
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
    <div className='bg-gradient-to-r from-[#ece9e6] to-[#ffffff] dark:from-gray-900 dark:to-gray-800 w-screen min-h-screen flex flex-col items-center'>
      <div className='w-full flex justify-end p-5'>
        <DarkMode darkMode={darkMode} onDark={() => setDarkMode(prev => !prev)}/>
      </div>
      <div className='w-full max-w-[2000px] h-auto flex flex-col justify-center items-center gap-4 p-4'>
        {/* logo marvel*/}
          <img src={marvel}
              alt="logo-marvel"
              className='w-25 h-auto'
        />
          <p className='text-center font-bold text-4xl dark:text-white text-[#24292F]'>Seu GitHub é a chave para o<br />universo dos heróis</p>
          <h2 className='text-[#AFAFB0] dark:text-[#e1e1e1] font-normal text-center' >Digite seu username do GitHub para continuar</h2>
             <InputGit onChange={(e) => setUserName(e.target.value)} onHandleSearch={handleSearch} onLoading={loading}/>
             <div className='flex w-full max-w-[500px] justify-between items-center -mt-2 flex-wrap text-center'>
                <p className='text-red-500 font-bold text-xs'>{error}</p>
                <p className='text-[#24292F] dark:text-[#e1e1e1] font-light text-xs'>Não tem conta no GitHub?{' '}
              <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
              target="_blank" rel="noopener noreferrer"
              className="text-black dark:text-[#e1e1e1] hover:underline"
              >Crie aqui</a>
              </p>
             </div>
             <img src={darkMode ? githubWhite : githubDark} alt="logo-github" className='w-12 h-auto'/>
            </div>
           <div className='mt-auto p-2'>
                <Footer/>
             </div>
    </div>
  )
}

export default LoginPage
