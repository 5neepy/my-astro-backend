"use strict";(self.webpackChunkstrapi_cloudinary=self.webpackChunkstrapi_cloudinary||[]).push([[4141],{34141:(Ts,H,e)=>{e.d(H,{ProtectedSettingsPage:()=>js});var s=e(74081),f=e(27279),J=e(51926),X=e(8295),b=e(61121),p=e(5938),A=e(6918),m=e(32370),B=e(15244),I=e(69878),y=e(10701),x=e(94098),S=e(84366),W=e(93415),P=e(61908),U=e(35250),O=e(48102),R=e(23298),C=e(74577),K=e(12881),G=e(22572),Z=e(63738),w=e(70774),k=e(38101),N=e(93153),M=e(50086),q=e(10989),ss=e(86967),z=e(4987),es=e(73354),as=e(27875),ts=e(74758),ns=e(6191),r=e(15530),F=e(59082),ls=e(26784),is=e(78665),V=e(36938),os=e(52448),h=e(61020),j=e(71563),L=e(47853),ds=e(53532),cs=e(59461),a=e(54796),rs=e(40464),ps=e(98934),As=e(29206),Bs=e(8175),Is=e(87830),Ss=e(43433),Ws=e(74919);const gs=()=>{const[t,l]=f.useState(!1),d=(0,cs.I0)(),n=(0,r.lm)(),{post:c}=(0,r.kY)(),{formatAPIError:i}=(0,r.So)();return{isAdding:t,addLocale:async g=>{l(!0);try{const{data:_}=await c("/i18n/locales",g);n({type:"success",message:{id:(0,a.g)("Settings.locales.modal.create.success")}}),d({type:a.A,newLocale:_})}catch(_){throw _ instanceof ds.d7?n({type:"warning",message:i(_)}):n({type:"warning",message:{id:"notification.error"}}),_}finally{l(!1)}}}},Y=()=>{const{formatMessage:t}=(0,h.Z)(),{notifyStatus:l}=(0,J.G)(),d=(0,r.lm)(),{get:n}=(0,r.kY)(),{isLoading:c,data:i}=(0,rs.useQuery)(["plugin-i18n","locales"],async()=>{const{data:o}=await n("/i18n/iso-locales");if(Array.isArray(o))return o;throw new Error("The response is not an array.")},{onSuccess(){l(t({id:(0,a.g)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."}))},onError(){d({type:"warning",message:{id:"notification.error"}})},initialData:[]});return{defaultLocales:i,isLoading:c}},_s=({value:t,onClear:l,onLocaleChange:d,error:n})=>{const{formatMessage:c}=(0,h.Z)(),{defaultLocales:i=[],isLoading:o}=Y(),{locales:g}=(0,a.u)(),_=i.map(E=>({label:E.name,value:E.code})).filter(E=>{const D=g.find(({code:u})=>u===E.value);return!D||D.code===t}),T=t||"";return(0,s.jsx)(X.hQ,{"aria-busy":o,error:n,label:c({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:T,onClear:l,onChange:E=>{const D=_.find(u=>u.value===E);D&&d({code:D.value,name:D.label})},placeholder:c({id:"components.placeholder.select",defaultMessage:"Select"}),children:_.map(E=>(0,s.jsx)(b.O,{value:E.value,children:E.label},E.value))})},Q=L.Ry().shape({code:L.Z_().required(),name:L.Z_().max(50,"Settings.locales.modal.locales.displayName.error").required(r.I0.required),isDefault:L.O7()}),Es={code:"",name:"",isDefault:!1},ms=({onClose:t})=>{const{isAdding:l,addLocale:d}=gs(),{formatMessage:n}=(0,h.Z)(),{refetchPermissions:c}=(0,r.vn)();return(0,s.jsx)(p.P,{onClose:t,labelledBy:"add-locale-title",children:(0,s.jsx)(j.J9,{initialValues:Es,onSubmit:async i=>{await d(i),await c()},validationSchema:Q,validateOnChange:!1,children:(0,s.jsxs)(r.l0,{children:[(0,s.jsx)(A.x,{children:(0,s.jsx)(m.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title",children:n({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})}),(0,s.jsx)(B.f,{children:(0,s.jsxs)(I.v,{label:n({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,s.jsxs)(y.k,{justifyContent:"space-between",children:[(0,s.jsx)(m.Z,{as:"h2",variant:"beta",children:n({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,s.jsxs)(x.m,{children:[(0,s.jsx)(x.O,{children:n({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,s.jsx)(x.O,{children:n({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,s.jsx)(S.i,{}),(0,s.jsx)(W.x,{paddingTop:7,paddingBottom:7,children:(0,s.jsxs)(P.n,{children:[(0,s.jsx)(P.x,{children:(0,s.jsx)(hs,{})}),(0,s.jsx)(P.x,{children:(0,s.jsx)($,{})})]})})]})}),(0,s.jsx)(U.m,{startActions:(0,s.jsx)(O.z,{variant:"tertiary",onClick:t,children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(O.z,{type:"submit",startIcon:(0,s.jsx)(F.Z,{}),disabled:l,children:n({id:"global.save",defaultMessage:"Save"})})})]})})})},hs=()=>{const{formatMessage:t}=(0,h.Z)(),{values:l,handleChange:d,setFieldValue:n,errors:c}=(0,j.u6)(),i=g=>{n("name",g.name),n("code",g.code)},o=()=>{n("displayName",""),n("code","")};return(0,s.jsxs)(R.r,{gap:4,children:[(0,s.jsx)(C.P,{col:6,children:(0,s.jsx)(_s,{error:c.code,value:l.code,onLocaleChange:i,onClear:o})}),(0,s.jsx)(C.P,{col:6,children:(0,s.jsx)(K.o,{name:"name",label:t({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:t({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?t({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:l.name,onChange:d})})]})},$=({isDefaultLocale:t})=>{const{values:l,setFieldValue:d}=(0,j.u6)(),{formatMessage:n}=(0,h.Z)();return(0,s.jsx)(G.X,{name:"isDefault",hint:n({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>d("isDefault",!l.isDefault),value:l.isDefault,disabled:t,children:n({id:(0,a.g)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"})})},Ms=()=>{const[t,l]=(0,f.useState)(!1),d=(0,a.a)(),n=(0,r.lm)(),{del:c}=(0,r.kY)();return{isDeleting:t,deleteLocale:async o=>{try{l(!0),await c(`/i18n/locales/${o}`),n({type:"success",message:{id:(0,a.g)("Settings.locales.modal.delete.success")}}),d({type:a.D,id:o})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{l(!1)}}}},Ds=({localeToDelete:t,onClose:l})=>{const{isDeleting:d,deleteLocale:n}=Ms(),c=Boolean(t),i=()=>n(t.id).then(l);return(0,s.jsx)(r.QH,{isConfirmButtonLoading:d,onConfirm:i,onToggleDialog:l,isOpen:c})},us=()=>{const[t,l]=(0,f.useState)(!1),d=(0,a.a)(),n=(0,r.lm)(),{put:c}=(0,r.kY)();return{isEditing:t,editLocale:async(o,g)=>{try{l(!0);const{data:_}=await c(`/i18n/locales/${o}`,g);if("id"in _)n({type:"success",message:{id:(0,a.g)("Settings.locales.modal.edit.success")}}),d({type:a.U,editedLocale:_});else throw new Error("Invalid response")}catch{n({type:"warning",message:{id:"notification.error"}})}finally{l(!1)}}}},fs=({locale:t,onClose:l})=>{const{refetchPermissions:d}=(0,r.vn)(),{isEditing:n,editLocale:c}=us(),{formatMessage:i}=(0,h.Z)(),o=async({name:g,isDefault:_})=>{await c(t.id,{name:g,isDefault:_}),await d()};return(0,s.jsx)(p.P,{onClose:l,labelledBy:"edit-locale-title",children:(0,s.jsx)(j.J9,{initialValues:{code:t.code??"",name:t.name??"",isDefault:Boolean(t.isDefault)},onSubmit:o,validationSchema:Q,children:(0,s.jsxs)(r.l0,{children:[(0,s.jsx)(A.x,{children:(0,s.jsx)(m.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title",children:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"})})}),(0,s.jsx)(B.f,{children:(0,s.jsxs)(I.v,{label:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple",children:[(0,s.jsxs)(y.k,{justifyContent:"space-between",children:[(0,s.jsx)(m.Z,{as:"h2",children:i({id:(0,a.g)("Settings.locales.modal.title"),defaultMessage:"Configurations"})}),(0,s.jsxs)(x.m,{children:[(0,s.jsx)(x.O,{children:i({id:(0,a.g)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})}),(0,s.jsx)(x.O,{children:i({id:(0,a.g)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,s.jsx)(S.i,{}),(0,s.jsx)(W.x,{paddingTop:7,paddingBottom:7,children:(0,s.jsxs)(P.n,{children:[(0,s.jsx)(P.x,{children:(0,s.jsx)(xs,{locale:t})}),(0,s.jsx)(P.x,{children:(0,s.jsx)($,{isDefaultLocale:Boolean(t&&t.isDefault)})})]})})]})}),(0,s.jsx)(U.m,{startActions:(0,s.jsx)(O.z,{variant:"tertiary",onClick:l,children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(O.z,{type:"submit",startIcon:(0,s.jsx)(F.Z,{}),disabled:n,children:i({id:"global.save",defaultMessage:"Save"})})})]})})})},xs=({locale:t})=>{const{formatMessage:l}=(0,h.Z)(),{values:d,handleChange:n,errors:c}=(0,j.u6)(),{defaultLocales:i=[]}=Y(),o=i.find(g=>g.code===t.code);return(0,s.jsxs)(R.r,{gap:4,children:[(0,s.jsx)(C.P,{col:6,children:(0,s.jsx)(Z.q4,{label:l({id:(0,a.g)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:o?.code||t.code,disabled:!0,children:(0,s.jsx)(Z.ag,{value:o?.code||t.code,children:o?.name||t.code})})}),(0,s.jsx)(C.P,{col:6,children:(0,s.jsx)(K.o,{name:"name",label:l({id:(0,a.g)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:l({id:(0,a.g)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:c.name?l({id:(0,a.g)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:d.name,onChange:n})})]})},Ps=({locales:t=[],onDeleteLocale:l,onEditLocale:d,canDelete:n=!0,canEdit:c=!0})=>{const{formatMessage:i}=(0,h.Z)();return(0,s.jsxs)(w.i,{colCount:4,rowCount:t.length+1,children:[(0,s.jsx)(k.h,{children:(0,s.jsxs)(N.Tr,{children:[(0,s.jsx)(M.Th,{children:(0,s.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.id"),defaultMessage:"ID"})})}),(0,s.jsx)(M.Th,{children:(0,s.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.displayName"),defaultMessage:"Display name"})})}),(0,s.jsx)(M.Th,{children:(0,s.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:i({id:(0,a.g)("Settings.locales.row.default-locale"),defaultMessage:"Default locale"})})}),(0,s.jsx)(M.Th,{children:(0,s.jsx)(q.T,{children:"Actions"})})]})}),(0,s.jsx)(ss.p,{children:t.map(o=>(0,s.jsxs)(N.Tr,{...(0,r.X7)({fn:()=>d(o),condition:Boolean(d)}),children:[(0,s.jsx)(M.Td,{children:(0,s.jsx)(m.Z,{textColor:"neutral800",children:o.id})}),(0,s.jsx)(M.Td,{children:(0,s.jsx)(m.Z,{textColor:"neutral800",children:o.name})}),(0,s.jsx)(M.Td,{children:(0,s.jsx)(m.Z,{textColor:"neutral800",children:o.isDefault?i({id:(0,a.g)("Settings.locales.default"),defaultMessage:"Default"}):null})}),(0,s.jsx)(M.Td,{children:(0,s.jsxs)(y.k,{gap:1,justifyContent:"flex-end",onClick:g=>g.stopPropagation(),children:[c&&(0,s.jsx)(z.h,{onClick:()=>d(o),label:i({id:(0,a.g)("Settings.list.actions.edit"),defaultMessage:"Edit"}),icon:(0,s.jsx)(ls.Z,{}),borderWidth:0}),n&&!o.isDefault&&(0,s.jsx)(z.h,{onClick:()=>l(o),label:i({id:(0,a.g)("Settings.list.actions.delete"),defaultMessage:"Delete"}),icon:(0,s.jsx)(is.Z,{}),borderWidth:0})]})})]},o.id))})]})},Os=()=>{const[t,l]=f.useState(!1),[d,n]=f.useState(),[c,i]=f.useState(),{locales:o}=(0,a.u)(),{formatMessage:g}=(0,h.Z)(),{isLoading:_,allowedActions:{canUpdate:T,canCreate:E,canDelete:D}}=(0,r.ss)(a.P),u=()=>{l(v=>!v)};(0,r.go)();const vs=()=>n(void 0),Cs=v=>{n(v)},Ls=()=>i(void 0),ys=v=>{i(v)};return _?(0,s.jsx)(r.dO,{}):(0,s.jsxs)(es.o,{tabIndex:-1,children:[(0,s.jsx)(as.T,{primaryAction:(0,s.jsx)(O.z,{disabled:!E,startIcon:(0,s.jsx)(V.Z,{}),onClick:u,size:"S",children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})}),title:g({id:(0,a.g)("plugin.name"),defaultMessage:"Internationalization"}),subtitle:g({id:(0,a.g)("Settings.list.description"),defaultMessage:"Configure the settings"})}),(0,s.jsx)(ts.D,{children:o?.length>0?(0,s.jsx)(Ps,{locales:o,canDelete:D,canEdit:T,onDeleteLocale:Cs,onEditLocale:ys}):(0,s.jsx)(ns.x,{icon:(0,s.jsx)(os.Z,{width:void 0,height:void 0}),content:g({id:(0,a.g)("Settings.list.empty.title"),defaultMessage:"There are no locales"}),action:(0,s.jsx)(O.z,{disabled:!E,variant:"secondary",startIcon:(0,s.jsx)(V.Z,{}),onClick:u,children:g({id:(0,a.g)("Settings.list.actions.add"),defaultMessage:"Add new locale"})})})}),t&&(0,s.jsx)(ms,{onClose:u}),c&&(0,s.jsx)(fs,{onClose:Ls,locale:c}),d&&(0,s.jsx)(Ds,{localeToDelete:d,onClose:vs})]})},js=()=>(0,s.jsx)(r.O4,{permissions:a.P.read,children:(0,s.jsx)(Os,{})})}}]);
