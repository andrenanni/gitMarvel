import Menu from "../components/menu";
import InputMarvel from "../components/input-marvel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MarvelPage() {
const data2 = JSON.parse(localStorage.getItem("userData"));
const navigate = useNavigate();

const [characters, setCharacters] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(false);

const fetchCharacters = async (name) => {
  if (name.trim() === "") {
      setCharacters([]);
      return;
    }

  setLoading(true);

  try{
    const res = await fetch(`/api/characters?name=${name}`);
    const data = await res.json();
    setCharacters(data.data.results);
    console.log(data);
  }
  catch (err){
    console.log(err);
  }
  finally{
    setLoading(false);
  }
  
}

function ReturnPage(){
 localStorage.removeItem("userData");
 navigate("/");
}

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#151515] ">
      <div className="flex flex-col items-center w-full max-w-[2000px] mx-auto h-auto p-6">
        <div className="w-full h-auto mb-15">
            <Menu onData={data2} onReturn={ReturnPage}/>
        </div>
      <div className="flex flex-col items-center text-center gap-5 w-full h-auto">
          <h2 className="font-black text-white text-7xl">O universo Marvel<br/>ao seu alcance</h2>
          <p className="text-white font-medium text-lg ">Digite nome do personagem e descubra!</p>
          <InputMarvel onSearch={search} onSetSearch={setSearch} onFetchCharacters={fetchCharacters}/>
          
{loading ? (
  <div className="col-span-full text-center text-white font-medium">
    Carregando...
  </div>
) : characters.length > 0 ? (
  <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-9 bg-white p-7 rounded-md h-full max-w-[1200px]">
    {characters.map((char) => (
      <div key={char.id} className="bg-white rounded shadow-sm p-2 w-full transition 
       cursor-pointer transform hover:brightness-150">
        <img
          src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          alt={char.name}
          className="w-full h-full object-cover shadow-md"
        />
        <h3 className="font-bold text-[#151515] mt-3 text-center text-sm"
          style={{ fontSize: 'clamp(0.75rem, 0.5vw, 1rem)' }}>
          {char.name}</h3>
      </div>
    ))}
  </div>
) : search.trim() !== "" ? (
  <div className="col-span-full text-center text-white font-medium">
    Personagem não encontrado!
  </div>
) : null}
      </div>
      </div>

    </div>
  );
}