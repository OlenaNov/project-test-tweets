import UserList from "components/UsersList";
import { useEffect, useRef, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchUsers } from "utilites/api";
import Filter from "components/Filter";

const Tweets = () => {
    const [users, setUsers] = useState([]);
    const isMounted = useRef(false);

    const makeRequest = async users => {
            
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
        makeRequest(users);

    }, [isMounted, users]);

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
            <Filter onVisible={setUsers}/>
            {users.length !== 0 && <UserList items={users} makeMoreUsers={makeRequest} updateStateUser={updateState}/>}
        </>
    );
};

export default Tweets;