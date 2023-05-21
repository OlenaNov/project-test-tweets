import Select from 'react-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchUsers } from "utilites/api";
import css from './Filter.module.css';

const options = [
  { value: 'all', label: 'ALL' },
  { value: 'follow', label: 'FOLLOW' },
  { value: 'followings', label: 'FOLLOWINGS' }
]

const Filter = ({ onVisible }) => {
    
    const makeRequest = async () => {

            try {
                const result = await fetchUsers('/users');
                return result;
                
            } catch {
                Notify.failure('Sorry, the request could not be processed, try reloading the page!');
            }
        };

    const makeFilter = async value => {
        const users = await makeRequest();
        
        let result = [];
        if(value === 'follow') {
            result = users.filter(user => user.isFollowing === false);
        };

        if(value === 'followings') {
            result = users.filter(user => user.isFollowing);
        };

        if(value === 'all') {
            result = users;
        };

        onVisible(result);
    };

  return (
    <Select 
        className={css.select}
        options={options}
        onChange={option => makeFilter(option.value)}
   />
  )
};

export default Filter;