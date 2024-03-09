const loadCard = async (showAll) =>{
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const aidata = data.data.tools;
    console.log(aidata);
    displayAi(aidata, showAll);
}

const displayAi = (aidata , showAll) =>{
    //console.log(showAll);
    let aLLData3; 


      const aiContainer = document.getElementById('ai-container');
       
        if(!showAll){
            aLLData3  =  aidata.slice(0,6);
        }
        else{
            aLLData3 = aidata
            aiContainer.innerHTML = " ";
        }

    aLLData3.forEach(ai =>{
        console.log(ai);

        const aiCard = document.createElement('div');
        aiCard.classList = `card  bg-gray-100 shadow-xl`;
        aiCard.innerHTML = `
        <figure><img src="${ai.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="text-3xl font-bold">Features
        </h2>
         <ol class="list-decimal list-inside">
            <li>${ai.features[0]}</li>
            <li>${ai.features[1]}</li>
            <li>${ai.features[2] || 'No data found'}</li>
         </ol>
         <hr>

         <div class="flex justify-between items-center">
            <div>
                <h2 class="text-xl font-bold">${ai.name}</h2>
                <div class="flex gap-2">
                    <div>
                    <i class="fa-solid fa-calendar-days"></i>
                    </div>
                    <div>
                    <p>${ai.published_in}</p>
                    </div>
                </div>
            </div>
            <div>
            <i onclick= "showArrow('${ai.id}')" class="fa-solid fa-arrow-right text-red-400"></i>
            </div>
         </div>


          
        </div>
        
        `;
        //console.log(aiCard);
        aiContainer.appendChild(aiCard);

        /* <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div> */

    })
}

// show arrow sign
const showArrow =async (id) =>{
    console.log('Arrow sign clicked' , id);

    //   load data
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    //console.log(data);
    const aiDataShow = data.data;
    
    showAiDetails(aiDataShow);
}


const showAiDetails = (aiDataShow) => {
    console.log(aiDataShow);
    // Sow the modal

    show_modal_details.showModal();
}

// handle show all button
const handleShowAll = () =>{
    loadCard(true);
}


loadCard(false);