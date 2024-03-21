export default function LoadMoreBtn() {
  //Це нопка завантаження додаткових зображень
  //Компонент LoadMoreBtn рендерить кнопку із текстом "Load more". При натисканні на кнопку має завантажуватися наступна порція зображень і рендеритися разом із попередніми.
  //Кнопка має рендеритися лише тоді, коли є які - небудь завантажені зображення.
  //Якщо масив зображень порожній, кнопка не рендериться.Логіка повинна бути в App

  //<button onClick={smth} ...

  //Коли на бекенді закінчилися фото, приховуємо кнопку “Load more”. Для цього використовуємо властивість total_pages яку нам повертає бекенд при успішному запиті
  //   const [showBtn, setShowBtn] = useState(false);
  //   setShowBtn(total_pages && total_pages !== page);
  //   {showBtn && <button>Load more ...</button>;}

  return (
    <div>
      <button>Load more...</button>
    </div>
  );
}
