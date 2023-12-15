import { BACKEND_URL } from "./backendUrl";

export const getAllArticles = async (param: string, token: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/${param}`, {
      headers: {
        Authorization: token!,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("something went wrong: ", error);
  }
};

export const getArticle = async (
  articleId: number | undefined,
  token: string
) => {
  try {
    const response = await fetch(`${BACKEND_URL}/articles/${articleId}`, {
      headers: {
        Authorization: token!,
      },
    });
    const data = await response.json();
    console.log("get article by id:", articleId);
    return data;
  } catch (error) {
    console.log("something went wrong: ", error);
  }
};
