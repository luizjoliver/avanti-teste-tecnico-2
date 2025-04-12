import githubLogo from "../../assets/githublogo.png"
export default function LogoProfile() {
  return (
    <header className="flex gap-3  items-center justify-center">
        <img src={githubLogo} alt="" className="size-[58px]" />
        <h1 className="text-whitevanti-500 text-6xl">Perfil <span className="font-bold">Github</span></h1>
    </header>
  )
}
