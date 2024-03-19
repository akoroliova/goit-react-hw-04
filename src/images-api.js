//У цьому файлі будемо зберігати функції для HTTP-запитів до бекенду із images.
import axios from "axios";

axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";

//Оголошуємо асинхронну функцію (async/await) отримання списку images за заголовком:
export const fetchImagesWithTopic = async (topic) => {
  //Функція виконує HTTP-запит і повертає його результат - проміс із даними:
  const response = axios.get(`/search?query=${topic}`);
  return response.data.hits;
  //Обробка помилки запиту не входить до тіла функції, це виконується в місці її використання, тобто в компоненті.
};
