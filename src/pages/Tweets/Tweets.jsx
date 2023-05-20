import UserList from "components/UsersList/UsersList";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchUsers } from "utilites/api";

const Tweets = () => {
    const [users, setUsers] = useState([]);
    const isMounted = useRef(false);

    const makeRequest = async () => {
            
        const nextPage = Math.round(users.length / 6 + 1);
    
            try {
                const result = await fetchUsers('/users', nextPage);
                setUsers(prevState => [...prevState, ...result]);
            } catch {
                Notify.failure('Sorry, the request could not be processed, try reloading the page!');
            }
        };

    useEffect(() => {
        if(isMounted.current) {
            return;
        };

        isMounted.current = true;
        makeRequest();

    }, [isMounted]);

    const updateState = dataUser => {

        setUsers(prevState => prevState.map(user => {
            if(user.id === dataUser.id) {
                return {...user, ...dataUser};
            }
            return user;
            })
        );
    };

    return (
        <>
            <NavLink to='/'>Go back</NavLink>
            {users.length !== 0 && <UserList items={users} updateStateUser={updateState}/>}
            {users.length !== 0 && <button onClick={() => makeRequest()}>Load more...</button>}
        </>
    );
};

export default Tweets;