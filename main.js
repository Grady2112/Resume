window.addEventListener('DOMContentLoaded', (event)=>{
                        getVisitCount();
})
window.addEventListener('DOMContentLoaded', (event)=>{
                        fetch();
})
const functionApi = '';

const getVisitCount = () => {let count =30;
                             fetch(functionApi).then(response=>{
                               return response.json()
                             }).then (response =>{
                               console.log("website called function API,");
                               count=response.count;
                               document,getElementById("counter").innerText=count;
                             }).catch(function(error){
                               console.log(error);
                             });
                             return count;
                             
}


fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log('User IP Address:', data.ip);
    // You can send this IP to your server if needed
    // fetch('/save-ip', { method: 'POST', body: JSON.stringify({ ip: data.ip }) });
  })
  .catch(error => console.error('Error fetching IP:', error));
