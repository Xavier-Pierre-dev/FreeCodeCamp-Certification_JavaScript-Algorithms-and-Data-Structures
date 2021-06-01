function convertHTML(str) {
    console.log(str.replace("&","&amp;"))
    let arr = str.split("");
    console.log(arr);
    arr.forEach((value, index)=>{
        arr[index] = arr[index].replace("&","&amp;");
        arr[index] = arr[index].replace(">","&gt;");
        arr[index] = arr[index].replace("<","&lt;");
        arr[index] = arr[index].replace("'","&apos;");
        arr[index] = arr[index].replace("\"","&quot;");
    })
    
    return arr.join("");
  }
  
  let result = convertHTML("Hamburgers < Pizza < Tacos");
  console.log(result);