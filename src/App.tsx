import LogoProfile from "./Components/LogoProfile/LogoProfile"
import Caminho from "./assets/Caminho.png"

function App() {
  return (
    <main className="h-screen w-full bg-black flex justify-center items-center">
      <section className="h-[80%] w-[90%] md:w-[70%] flex flex-col items-center justify-around">
        <div className="flex flex-col gap-5 w-full max-w-[503px]">
          <LogoProfile />


          <div className="bg-whitevanti-500 h-[62px] w-full rounded-[10px] flex items-center justify-end">
            <div className="h-full size-[95%] flex items-center justify-between ">
              <input
                type="text"
                className="h-full flex-1 outline-none  font-semibold
                placeholder:text-darkvanti-500 placeholder:font-semibold placeholder:text-base md:placeholder:text-lg  
                "
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
            </div>
          </div>
        </div>


        <div className="w-full max-w-[804px] h-[257px] bg-bguser-500 rounded-xl p-6">

          <img src="" alt="" />

          <div>

          </div>

        </div>
      </section>
    </main>
  );
}

export default App