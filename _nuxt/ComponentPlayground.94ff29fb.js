import{J as s,u as i,b as p,a as c,a2 as u,B as l,Q as e,m as d}from"./entry.01fda730.js";import{u as f}from"./asyncData.8341048a.js";import y from"./Ellipsis.e4918f96.js";import g from"./ComponentPlaygroundData.517563ad.js";/* empty css                                *//* empty css                     */import"./TabsHeader.f8efe68f.js";/* empty css                       */import"./ComponentPlaygroundProps.012762b8.js";import"./ProseH4.8792d183.js";/* empty css                    */import"./ProseCodeInline.710f110d.js";/* empty css                            */import"./Badge.df14c8f3.js";import"./ContentSlot.3a43d0a7.js";/* empty css                  */import"./ProseP.a3ecd9d3.js";/* empty css                   */import"./index.db404a85.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.8eec4a04.js";import"./ComponentPlaygroundTokens.vue.90d2da6c.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,m])=>{if(r.startsWith("component-")){const a=r.replace("component-","");n[a]=m}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),x=d(_,[["__scopeId","data-v-5e699dca"]]);export{x as default};
