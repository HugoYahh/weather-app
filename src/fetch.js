


export async function loadData() {
  try {
    const data = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Chatou?key=KKCWJMTE67NPVNGU6A5M2KYFK").then(r => r.json());
    console.log(data)
    return  data ;
  } catch (err) {
    console.error("Loading failed:", err);
  }
}

export async function processData(data){
    try{
        const dataNeeded = {
            resume : data.currentConditions.conditions,
            humidity : data.currentConditions.humidity,
        }
        console.log(dataNeeded);
        return dataNeeded
        

    }
    catch(err){
        console.error("Loading failed :", err);
    }
}