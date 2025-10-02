import marvel from "../assets/marvel_logo.svg"
import GitHubProfile from "../components/github-profile";

export default function Menu({onData, onReturn}){
    return(
        <div className="w-full h-auto flex items-center">
            <div className="flex items-center flex-1 ">
                <GitHubProfile onData={onData} onReturn={onReturn}/>
            </div>
            <div className="flex flex-1 justify-center">
                <img src={marvel}
                alt="logo-marvel"
                className='w-40 h-auto'
                />
            </div>
            <div className="flex flex-1 justify-end"></div>
        </div>
        
    );
}