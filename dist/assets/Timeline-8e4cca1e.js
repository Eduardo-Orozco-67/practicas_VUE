import{_ as g,g as _,r,o as m,c as p,a as t,b as o,w as s,F as y,d as a,t as n,D as b,n as f,f as x,p as C,j as z}from"./index-ef5ca0f8.js";const i=u=>(C("data-v-cc930c43"),u=u(),z(),u),A={class:"grid"},B={class:"col-6"},w={class:"card"},T=i(()=>t("h5",null,"Left Align",-1)),q={class:"col-6"},k={class:"card"},S=i(()=>t("h5",null,"Right Align",-1)),I={class:"col-6"},D={class:"card"},F=i(()=>t("h5",null,"Alternate Align",-1)),N={class:"col-6"},V={class:"card"},j=i(()=>t("h5",null,"Opposite Content",-1)),E={class:"p-text-secondary"},L={class:"card"},O=i(()=>t("h5",null,"Custom Timeline",-1)),R=["src","alt"],H=i(()=>t("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1)),G={class:"card mt-3"},J=i(()=>t("h5",null,"Horizontal",-1)),K=i(()=>t("h6",null,"Top Align",-1)),M=i(()=>t("h6",null,"Bottom Align",-1)),Q=i(()=>t("h6",null,"Alternate Align",-1)),U={__name:"Timeline",setup(u){const c=_([{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),d=_(["2020","2021","2022","2023"]);return(W,X)=>{const l=r("Timeline",!0),h=r("Button"),v=r("Card");return m(),p(y,null,[t("div",A,[t("div",B,[t("div",w,[T,o(l,{value:c.value},{content:s(e=>[a(n(e.item.status),1)]),_:1},8,["value"])])]),t("div",q,[t("div",k,[S,o(l,{value:c.value,align:"right"},{content:s(e=>[a(n(e.item.status),1)]),_:1},8,["value"])])]),t("div",I,[t("div",D,[F,o(l,{value:c.value,align:"alternate"},{content:s(e=>[a(n(e.item.status),1)]),_:1},8,["value"])])]),t("div",N,[t("div",V,[j,o(l,{value:c.value},{opposite:s(e=>[t("small",E,n(e.item.date),1)]),content:s(e=>[a(n(e.item.status),1)]),_:1},8,["value"])])])]),t("div",L,[O,o(l,{value:c.value,align:"alternate",class:"customized-timeline"},{marker:s(e=>[t("span",{class:"flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2",style:b({backgroundColor:e.item.color})},[t("i",{class:f(e.item.icon)},null,2)],4)]),content:s(e=>[o(v,null,{title:s(()=>[a(n(e.item.status),1)]),subtitle:s(()=>[a(n(e.item.date),1)]),content:s(()=>[e.item.image?(m(),p("img",{key:0,src:"demo/images/product/"+e.item.image,alt:e.item.name,width:"200",class:"shadow-2 mb-3"},null,8,R)):x("",!0),H,o(h,{label:"Read more",class:"p-button-text"})]),_:2},1024)]),_:1},8,["value"])]),t("div",G,[J,K,o(l,{value:d.value,layout:"horizontal",align:"top"},{content:s(e=>[a(n(e.item),1)]),_:1},8,["value"]),M,o(l,{value:d.value,layout:"horizontal",align:"bottom"},{content:s(e=>[a(n(e.item),1)]),_:1},8,["value"]),Q,o(l,{value:d.value,layout:"horizontal",align:"alternate"},{opposite:s(()=>[a("   ")]),content:s(e=>[a(n(e.item),1)]),_:1},8,["value"])])],64)}}},Z=g(U,[["__scopeId","data-v-cc930c43"]]);export{Z as default};
