export function setClass(className, e){
    e.classList.add(className);
}
export function resetClass(className, e){
    e.classList.remove(className);
}


export default function downloadImage (url) {

    return new Promise(function(resolve, reject) {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.onerror = function() {reject("Network error.")};
            xhr.onload = function() {
                if (xhr.status === 200) {resolve(xhr.response)}
                else {reject("Loading error:" + xhr.statusText)}
            };
            xhr.send();
        }
        catch(err) {reject(err.message)}
    });
}

