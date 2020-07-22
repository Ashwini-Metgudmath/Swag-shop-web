import 'whatwg-fetch';

class HttpService {
    getProducts = () =>{
        const promise = new Promise((resolve, reject) =>{
            fetch('http://localhost:3000/products')
            .then(response => {
                resolve(response.json());
                reject("Error in fetching data");
            })
        })
        return promise;
    }
}

export default HttpService;