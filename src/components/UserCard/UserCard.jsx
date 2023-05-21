import { ReactComponent as LogoSvg } from '../../images/Logo.svg';
import { updateUser } from 'utilites/api';
import css from './UserCard.module.css';

const UserCard = ({ item: { id, avatar, name, tweets, followers, isFollowing }, updateState }) => {
    
    const handleClick = async (id, followers, isFollowing) => {

        const userToUpdate = {
            followers: isFollowing ? followers - 1 : followers + 1,
            isFollowing: !isFollowing,
        };

        const response = await updateUser(`/users/${id}`, userToUpdate);
        updateState(response);
    };

    return (

        <div className={css.item__box}>
            <LogoSvg className={css.item__icon} />
            <img src={avatar} alt={name} className={css.item__img} />
            <div className={css.item__boxContent}>
                <p className={css.item__content}>{tweets} tweets</p>
                <p className={css.item__content}>{followers.toLocaleString('en-US')} followers</p>
            </div>
            <button onClick={() => handleClick(id, followers, isFollowing)} className={isFollowing ? `${css.item__following} ${css.item__btn}` : `${css.item__follow} ${css.item__btn}`}>{isFollowing ? 'following' : 'follow'}</button>
        </div>
    );
};

export default UserCard;