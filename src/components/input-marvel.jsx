import { Search } from "lucide-react";

export default function InputMarvel({onSearch, onSetSearch, onFetchCharacters}){
    return(
        <div className="w-full max-w-[1000px] flex justify-center items-center">
            <Search className="text-white"/>
            <input
                type="text"
                placeholder="Procurar"
                value={onSearch}
                onChange={(e) => {
                    onSetSearch(e.target.value);
                    onFetchCharacters(e.target.value);
                }}
                className="w-full px-4 py-2 border-b border-red-600 focus:outline-none flex-1 min-w-[110px] placeholder:text-white text-white font-medium"
            />
        </div>
    );
}