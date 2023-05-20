import axios from 'axios';

axios.defaults.baseURL = 'https://6435ab5d83a30bc9ad671d0f.mockapi.io';

export const fetchUsers = async (url, page) => {

    const request = await axios.get(url, {
        params: {
            page,
            limit: 6,
        },
    });
    return request.data;
};


export const updateUser = async (url, newData) => {

    const request = await axios.put(url, newData);
    return request.data;
};

