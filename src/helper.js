
function genTicket(n)
{
    let arr = new Array(n);
    for(let i=0; i<n; i++)
    {
       arr[i]=Math.floor(Math.random() * 10); 
    }
    return arr;
}
function Sum(arr)
{
    return arr.reduce((Sum,curr)=>Sum + curr, 0);
}

export {genTicket,Sum};