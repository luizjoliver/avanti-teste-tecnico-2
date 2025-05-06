import { GithubResponse } from "../model/model";

export const fetchData = async (userName: string ): Promise<GithubResponse> => {
  const token = import.meta.env.GITHUB_TOKEN;

    
  const response = await fetch(`https://api.github.com/users/${userName}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Erro ao buscar usuário');
  }

  return response.json();
};