import { GithubResponse } from '../../model/model';

type userCardType = {
    userInfo: GithubResponse
}

export default function UserCard({ userInfo }: userCardType) {



    return (<>
        {userInfo?.name ? (
            <article className=" md:max-w-[804px] md:h-[257px] w-full h-full bg-bguser-500 rounded-xl p-6 flex items-center  justify-center gap-5">
                <div className="size-[90%] flex items-center justify-center gap-4  flex-col md:flex-row">
                    <img src={`${userInfo.avatar_url}`} alt="Avatar do usuário" className="size-[220px] rounded-full border-2 border-bluevanti-500" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl text-bluevanti-500 font-extrabold">{userInfo.name}</h2>
                        <p className="font-light text-base overflow-y-auto max-h-[150px] pr-2">
                            {userInfo.bio || 'Este usuário não possui uma bio pública.'}
                        </p>
                    </div>
                </div>
            </article>
        )
            : <article className=" md:max-w-[804px] md:h-[257px] w-full h-full bg-bguser-500 rounded-xl p-6 flex items-center  justify-center gap-5">
                <p className='text-redvanti-500'>Nenhum perfil foi encontrado...</p>
            </article>}
    </>
    )
}
