

export async function fetchData(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar dados do GitHub");
  }

  const data = await res.json();
  return data;
}