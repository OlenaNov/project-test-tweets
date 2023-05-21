import { Link } from "react-router-dom";
import UserCard from "components/UserCard/UserCard";
import css from './UserList.module.css';

const UserList = ({ items, makeMoreUsers, updateStateUser }) => {

    return (
        <>
        <Link to='/' className={css.linkGoBack}>Go back</Link>
        <ul className={css.usersList}>
        {items.map(item => {
            return (
                <li key={item.id} className={css.usersList__item}>
                    <UserCard item={item}  updateState={updateStateUser} />
                </li>
            )
        })
        }
        </ul>
        <button 
            onClick={() => makeMoreUsers(items)}
            className={css.btnLoadMore}
            >Load more...</button>
        </>
    )
};

export default UserList;