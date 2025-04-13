import  { ChangeEvent, FormEvent } from 'react'
import Caminho from "../../assets/Caminho.png";

type SearchProfileProps = {
    handleChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSearchUser: (e: FormEvent<HTMLFormElement>) => void;
    user: string; 
}

export default function SearchProfile({handleChangeUserName,handleSearchUser,user}:SearchProfileProps) {
  return (
    <div className="bg-whitevanti-500 h-[62px] w-full rounded-[10px] flex items-center justify-end">
            <form className="h-full size-[95%] flex items-center" onSubmit={(e) => handleSearchUser(e)}>
              <input
                type="text"
                className="h-full flex-1 outline-none  font-semibold
                placeholder:text-darkvanti-500 placeholder:font-semibold placeholder:text-base md:placeholder:text-lg  
                "
                value={user as string}
                onChange={(e) => handleChangeUserName(e)}
                placeholder="Digite o seu usuário github"
              />
              <button
                className="bg-bluevanti-500 hover:opacity-90 size-[59px] flex items-center justify-center rounded-[10px] hover:bg-blue-600 "
              >
                <img
                  src={Caminho}
                  alt="Ícone de busca"
                  className="size-6"
                />
              </button>
            </form>
          </div>
  )
}
