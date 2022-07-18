
let productArr=[
    {
        id:1,
        img:"./food/eat-1.png",
        name:"Vegie Muffen",
        price:"20$",
        info:"There are many things are needed to start the Fast Food Business."
    },
    {
        id:2,
        img:"./food/eat-2.png",
        name:"Vegie Muffen",
        price:"10$",
        info:"There are many things are needed to start the Fast Food Business."
    },
    {
        id:3,
        img:"./food/eat-3.png",
        name:"Vegie Muffen",
        price:"13$",
        info:"There are many things are needed to start the Fast Food Business."
    },
    {
        id:4,
        img:"./food/eat-4.png",
        name:"Vegie Muffen",
        price:"20$",
        info:"There are many things are needed to start the Fast Food Business."
    },
    {
        id:5,
        img:"./food/eat-5.png",
        name:"Vegie Muffen",
        price:"15$",
        info:"There are many things are needed to start the Fast Food Business."
    },
    {
        id:6,
        img:"./food/eat-6.png",
        name:"Vegie Muffen",
        price:"18$",
        info:"There are many things are needed to start the Fast Food Business."
    }
]

function refresh(obj){
    let a=obj.map(e=>`
    <div class="card-menu">
        <img src="${e.img}" alt="">
        <div class="pd">
            <div class="food-name">
                <h4>${e.name}</h4>
                <h4>${e.price}</h4>
            </div>
            <p>${e.info}</p>
            <div class="counter">
                <button onclick="plusBtn(${e.id})" class="plus-btn">+</button>
                <button onclick="minusBtn(${e.id})" class="minus-btn" style="
                visibility: hidden">-</button>
                <div class="star">
                    &starf;
                    &starf;
                    &starf;
                    &starf;
                    &starf;
                </div>
            </div>
        </div>
    </div>
    `)
    $("#product-list").html(a)
}
let korzinkaArr=[]
zero=0
let productIdOut=""
// function plusBtn(productId){
//     productIdOut=productId
//     if($(".plus-btn")[productId-1].innerText
//     == "+"){
//         zero++
//         $(".plus-btn")[productId-1].innerText="-"
//         productArr.map(e=>{
//             if(e.id==productId){
//                 let obj={
//                     id:e.id,
//                     img:e.img,
//                     name:e.name,
//                     price:e.price,
//                     info:e.info
//                 }
//                 korzinkaArr.push(obj)
//             }
//         })
//         console.log(korzinkaArr);
//     }
//     else{
//         zero--
//         $(".plus-btn")[productId-1].innerText="+"
//         korzinkaArr.map((item,index)=>{ 
//             if(item.id==productId){
//                 korzinkaArr.splice(index,1)
//                 console.log(korzinkaArr);
//             }
//         })
//     }
//     $(".korzinka").html(zero)
// }

function plusBtn(id){
        zero++
        $(".plus-btn")[id-1].style.display="none"
        $(".minus-btn")[id-1].style.visibility="visible"
        productArr.map(e=>{
            if(e.id==id){
                let obj={
                    id:e.id,
                    img:e.img,
                    name:e.name,
                    price:e.price,
                    info:e.info
                }
                korzinkaArr.push(obj)
            }
        })
        korzinkaModal()
        $(".korzinka").html(zero)
        $(".total").html(zero)
}
function minusBtn(id){
    zero--
        $(".minus-btn")[id-1].style.visibility="hidden"
        $(".plus-btn")[id-1].style.display="block"
        korzinkaArr.map((item,index)=>{ 
            if(item.id==id){
                korzinkaArr.splice(index,1)
                console.log(korzinkaArr);
            }
        })
        $(".korzinka").html(zero)
        korzinkaModal()
        $(".total").html(zero)
}


$("#korzinka").click(()=>{
    if(zero==0){
        $("#modal").css({display:"none"})  
    }
    else{
        $("#modal").css("display","block")
        korzinkaModal()
    }
})
$("#cancel").click(()=>{
    $("#modal").css("display","none")
})

function korzinkaModal(){
    let a=korzinkaArr.map(e=>`
    <tr>
        <th><img src="${e.img}" style="width:60px;height:60px"></th>
        <th>${e.name}</th>
        <th>${e.price}</th>
        <th><button onclick="minusBtn(${e.id})" class="btn btn-danger">Delete</button></th>
    </tr>
`)
$("#tbody").html(a)
}

$("#buy").click(()=>{
    korzinkaArr=[]
    korzinkaModal()
    zero=0
    $(".korzinka").html(zero)
    $(".total").html(zero)
    refresh(productArr)
    $("#thanks").css({visibility:"visible",animation: "thanks 2s alternate linear", animationDelay: "0.5s",animationFillMode: "forwards"
})
})

refresh(productArr)