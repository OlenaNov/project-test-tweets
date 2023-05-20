import UserCard from "components/UserCard/UserCard";
import css from './UserList.module.css';

const UserList = ({ items, updateStateUser }) => {

    return (
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
    )
};

export default UserList;