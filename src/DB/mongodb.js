export const insert = async (data)=>
{
   try{
    const response = await fetch(`http://localhost:3001/insert?data=${encodeURIComponent(JSON.stringify(data))}`,{method : 'GET' ,mode : 'no-cors'});
    if(response)
    return true;
    return false; 
   }
   catch(err)
   {
    return false;
   }

}

export const get = async ()=>
{
    try
    {
    const result = await fetch("http://localhost:3001/list",{method : 'GET',headers:{
        'Accept': 'application/json'
    }}
    );
    const array = await result.json();
    console.log(array);
    if(array)
    return array;
    return null;
    }
    catch(err)
    {
    return null;
    }
}

export const updatedb = async (item)=>
{
  console.log(item)
  try 
  {
    const result = await fetch("http://localhost:3001/update",
    {method:'PUT', 
     headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(item)});
    if(result)
    return true; 
    return false ; 
  }
  catch(err)
  {
    return true; 
  }
}