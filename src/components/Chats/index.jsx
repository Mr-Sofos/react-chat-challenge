import { AiOutlineSearch } from 'react-icons/all';
import style from './style.module.css';

function Chats() {
  return (
    <div className={style.chats}>
      <div className={style.search}>
        <div className="icon">
          <AiOutlineSearch />
        </div>
        <input type="text" placeholder="Search contact" />
      </div>
      <div className={style.contact}></div>
    </div>
  );
}

export default Chats;
