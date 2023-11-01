import { BACKEND_URL } from "./backendUrl";

export const getAllArticles = async (param: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/${param}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("something went wrong: ", error);
  }
};

export const getArticle = async (articleId: number | undefined) => {
  try {
    const response = await fetch(`${BACKEND_URL}/articles/${articleId}`);
    const data = await response.json();
    console.log("get article by id:", articleId);
    return data;
  } catch (error) {
    console.log("something went wrong: ", error);
  }
};
