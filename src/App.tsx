import { ChangeEvent, FormEvent, useState } from "react";
import LogoProfile from "./Components/LogoProfile/LogoProfile";
import Caminho from "./assets/Caminho.png";
import { GithubResponse } from "./model/model";
import UserCard from "./Components/UserCard/UserCard";
import { fetchData } from "./Utils";

function App() {

  const [user, setUser] = useState<string>('')
  const [userInfo, setUserInfo] = useState<GithubResponse>()
  const [isFetched,setIsFetched] = useState(false)

  async function handleSearchUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    try {
      const userData = await fetchData(user);
      setUserInfo(userData);
      setIsFetched(true);
    } catch (error) {
      console.log(error);
  
      setUserInfo(undefined);
      setIsFetched(true);
    }
  }

  function handleChangeUserName(e: ChangeEvent<HTMLInputElement>) {

    console.log(e.target.value);
    setUser(e.target.value)

  }


  return (
    <main className="h-screen w-full bg-black flex justify-center items-center">
      <section className="h-[80%] w-[90%] md:w-[70%] flex flex-col items-center justify-around gap-4">
        <div className="flex flex-col gap-5 w-full max-w-[503px]">
          <LogoProfile />


          <div className="bg-whitevanti-500 h-[62px] w-full rounded-[10px] flex items-center justify-end">
            <form className="h-full size-[95%] flex items-center" onSubmit={(e) => handleSearchUser(e)}>
              <input
                type="text"
                className="h-full flex-1 outline-none  font-semibold
                placeholder:text-darkvanti-500 placeholder:font-semibold placeholder:text-base md:placeholder:text-lg  
                "
                value={user}
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
        </div>

   

   
          {isFetched && <UserCard userInfo={userInfo}/>}
       
      </section>
    </main>
  );
}

export default App