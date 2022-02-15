window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://jnazureresume.azurewebsites.net/api/GetResumeCounter?code=/iEDmS0pKmByPaUVhaYACVN39M2tG2KIC8iv29LmsSdi/knyDTqhmg=='
const localfunctionAPI = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}