export default function inputGit({onChange, onHandleSearch, onLoading}){
    return(
        <div className="w-full max-w-lg flex justify-center items-center flex-wrap relative">
            <input
                type="text"
                placeholder="ex: octocat"
                onChange={onChange}
                className="w-full px-4 py-2 border border-[#24292F] rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-[#24292F] focus:border-[#24292F] flex-1 min-w-[110px]"
        />
        <button
            className="bg-[#24292F] text-white w-27 h-9 text-sm rounded-xl z-10 right-1 cursor-pointer absolute max-[250px]:static max-[250px]:mt-2"
            onClick={onHandleSearch}
            disabled={onLoading}
            >
            {onLoading ? "Procurando..." : "Buscar"}
        </button>
        </div>
    );
}