import { ChangeEvent, FormEvent,  useState } from "react";
import LogoProfile from "./Components/LogoProfile/LogoProfile";
import { GithubResponse } from "./model/model";
import UserCard from "./Components/UserCard/UserCard";
import { fetchData } from "./Utils";
import SearchProfile from "./Components/SearchProfile/SearchProfile";

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
    setUser(e.target.value)

  }


  return (
    <main className="h-screen w-full bg-black flex justify-center items-center">

      <section className="h-[80%] w-[90%] md:w-[70%] flex flex-col items-center justify-around gap-4">

        <div className="flex flex-col gap-5 w-full max-w-[503px]">

          <LogoProfile />

          <SearchProfile handleChangeUserName={handleChangeUserName} handleSearchUser={handleSearchUser} user={user}/>

        </div>
   
          {isFetched && <UserCard userInfo={userInfo}/>}
       
      </section>

    </main>
  );
}

export default App