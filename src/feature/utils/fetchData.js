
function getSuspenser(promise) {
    let status = "pending";
    let response;

    const suspenser = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    );

    const read = () => {
        switch(status){
            case "pending":
                throw suspenser;
            case "error":
                throw response;
            default:
                return response;
        }
    }

    return { read };
}



export function fetchData(url){
    const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data);

    return getSuspenser(promise);
}