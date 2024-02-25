import axios from 'axios';
const instance = axios.create();

instance.defaults.withCredentials = true;
instance.defaults.baseURL = 'http://43.203.6.58:8080';

instance.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json';

        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

const get = async (url) => {
    try {
        const { data } = await instance.get(url);
        return data;
    } catch (error) {
        console.log(error);
        if (error instanceof Error)
            throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
    }
};

const del = async (url) => {
    try {
        const { data } = await instance.delete(url);
        return data;
    } catch (error) {
        if (error instanceof Error)
            throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
    }
};

/**
 *
 * @param url : url주소 ex) /api/shops
 * @param post : body
 * @param config : default = null, 이미지 보낼때만 "imgPost" 설정 > 'Content-Type': 'multipart/form-data' 설정
 * @returns : res.data 반환
 */
const post = async (url, post, config) => {
    try {
        if (config === 'imgPost') {
            const result = await instance.post(url, post, {
                headers: { 'Content-Type': `multipart/form-data` },
            });
            return result.data;
        }
        const result = await instance.post(url, post);
        return result.data;
    } catch (error) {
        if (error instanceof Error)
            throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
    }
};

const put = async (url, put) => {
    try {
        const { data } = await instance.put(url, put);
        return data;
    } catch (error) {
        if (error instanceof Error)
            throw new Error(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${error.message}`);
    }
};

export { get, del as delete, post, put };