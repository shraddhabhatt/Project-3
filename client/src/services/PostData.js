export function PostData(type, userData) {
    let BaseURL = 'https://still-atoll-68112.herokuapp.com';
    //let BaseURL = 'http://localhost/socialapi/';

    return new Promise((resolve, reject) => {
        fetch(BaseURL + type, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(userData)
            })
            // .then((response) => response.json())
            .then((res) => {
                console.log("response from express : " + res);
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}