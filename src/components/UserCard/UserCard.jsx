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

        <>
            <img src={avatar} alt={name} className={css.usersList__img} />
            <h2>{name}</h2>
            <p>{tweets} TWEETS</p>
            <p>{followers.toLocaleString('en-US')} FOLLOWERS</p>
            <button onClick={() => handleClick(id, followers, isFollowing)} className={isFollowing ? `${css.following}` : `${css.follow}`}>{isFollowing ? 'FOLLOWING' : 'FOLLOW'}</button>
        </>
    );
};

export default UserCard;