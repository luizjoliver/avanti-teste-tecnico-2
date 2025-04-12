import LogoProfile from "./Components/LogoProfile/LogoProfile"
import Caminho from "./assets/Caminho.png"
import imgTest from "./assets/testeimg.jpeg"

function App() {
  return (
    <main className="h-screen w-full bg-black flex justify-center items-center">
      <section className="h-[80%] w-[90%] md:w-[70%] flex flex-col items-center justify-around gap-4">
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


        <article className=" md:max-w-[804px] md:h-[257px] w-full h-full bg-bguser-500 rounded-xl p-6 flex items-center  justify-center gap-5">

          <div className="size-[90%] flex items-center justify-center gap-4  flex-col md:flex-row">

            <img src={imgTest} alt=""  className="size-[220px] rounded-full border-2 border-bluevanti-500"/>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl text-bluevanti-500 font-extrabold">Lucas Teste</h2>
              <p className="font-light text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquid quisquam eligendi optio, distinctio architecto ad asperiores quo fugiat ipsam consectetur quos repellendus iusto magnam voluptatem similique molestiae? Consequatur, in?</p>
            </div>

          </div>

        </article>

      </section>
    </main>
  );
}

export default App