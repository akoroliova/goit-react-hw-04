//import { useState } from "react";

export default function LoadMoreBtn() {
  //При натисканні на кнопку має завантажуватися наступна порція зображень і рендеритися разом із попередніми.

  //<button onClick={smth} ...

  //Коли на бекенді закінчилися фото, приховуємо кнопку “Load more”. Для цього використовуємо властивість total_pages яку нам повертає бекенд при успішному запиті
  // const [showBtn, setShowBtn] = useState(false);

  // setShowBtn(total_pages && total_pages !== page);
  // {
  //   showBtn && <button>Load more ...</button>;
  // }

  return (
    <div className="load-more-div">
      <button className="load-more-button" type="button">
        Load more...
      </button>
    </div>
  );
}
