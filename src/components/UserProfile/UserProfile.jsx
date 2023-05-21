import css from './UserProfile.module.css';

const UserProfile = () => {
    return (
        <div className={css.box}>
            <img src="https://pngicon.ru/file/uploads/1303506159_twitter_follow_me-128x128.png" alt="Tweet Bird" className={css.profileImg} />
            <div className={css.boxInfo}>
                <h2 className={css.profileName}>Tweet Bird</h2>
                <p className={css.profileContent}>tweets 765</p>
                <p className={css.profileContent}>followers 568,446</p>
            </div>
        </div>
    )
};

export default UserProfile;