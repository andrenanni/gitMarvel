import { MapPin } from "lucide-react";
import { useState } from "react";

export default function GitHubProfile({ onData, onReturn}){

const [open, setOpen] = useState(false);

return(
    <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
    >
        <div className="flex flex-col justify-center relative">
                <img src={onData.avatar_url} alt={onData.login} 
                className="w-11 h-auto rounded-full cursor-pointer shadow-md"
                />
            { open && (
                <div>
                    <div className="absolute top-11 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#24292F]"></div>
                    <div className="flex flex-col text-white bg-[#252525] w-auto h-auto absolute top-full mt-2 p-3 rounded-lg">
                    <div className="font-medium whitespace-nowrap">{onData.name}</div>
                    <div className="font-light text-gray-400">{onData.login}</div>
                    <div className="flex gap-1 font-light text-gray-400 whitespace-nowrap"> <MapPin className="w-4"/> {onData.location}</div>
                    <button className="flex items-center justify-center font-light text-white text-sm bg-[#4e4e4e] min-w-26 h-auto p-1 rounded-xl z-10 right-1 cursor-pointer mt-2" onClick={onReturn}>
                    Mudar conta
                    </button>
                    </div>
                </div>
            )}
        </div> 
    </div>    
    );
}