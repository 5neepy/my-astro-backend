"use strict";(self.webpackChunkstrapi_cloudinary=self.webpackChunkstrapi_cloudinary||[]).push([[4e3],{24e3:(We,w,t)=>{t.d(w,{App:()=>Ie});var e=t(74081),M=t(51447),G=t(47533),o=t(34113),I=t(27279),Y=t(5938),X=t(6918),m=t(32370),k=t(15244),q=t(12881),ee=t(35250),B=t(48102),y=t(10701),K=t(73354),$=t(27875),se=t(68412),te=t(4987),ae=t(8990),v=t(74758),ne=t(93153),U=t(50086),ie=t(6191),re=t(23298),le=t(74577),oe=t(69878),de=t(93415),S=t(94098),ce=t(84366),Z=t(61908),ge=t(37370),_e=t(79213),a=t(15530),ue=t(26784),pe=t(78665),me=t(76827),he=t(75438),Ee=t(36938),fe=t(52448),A=t(61020),L=t(19003),N=t(71563),z=t(47853);const Me=z.Ry().shape({name:z.Z_().trim().required()}).required().noUnknown(),H=({handleClose:s,handleSubmit:l,initialValues:c,isLoading:n=!1})=>{const{formatMessage:i}=(0,A.Z)();return(0,e.jsxs)(Y.P,{onClose:s,labelledBy:"title",children:[(0,e.jsx)(X.x,{children:(0,e.jsx)(m.Z,{id:"title",fontWeight:"bold",textColor:"neutral800",children:i({id:"content-releases.modal.add-release-title",defaultMessage:"New release"})})}),(0,e.jsx)(N.J9,{validateOnChange:!1,onSubmit:l,initialValues:c,validationSchema:Me,children:({values:h,errors:E,handleChange:j})=>(0,e.jsxs)(N.l0,{children:[(0,e.jsx)(k.f,{children:(0,e.jsx)(q.o,{label:i({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"}),name:"name",value:h.name,error:E.name,onChange:j,required:!0})}),(0,e.jsx)(ee.m,{startActions:(0,e.jsx)(B.z,{onClick:s,variant:"tertiary",name:"cancel",children:i({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(B.z,{name:"submit",loading:n,disabled:!h.name,type:"submit",children:i({id:"content-releases.modal.form.button.submit",defaultMessage:"Continue"})})})]})})]})},xe=(0,L.default)(y.k)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:s})=>s.borderRadius};
  border-bottom-left-radius: ${({theme:s})=>s.borderRadius};
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,je=(0,L.default)(y.k)`
  align-self: stretch;
  cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};

  svg path {
    fill: ${({theme:s,disabled:l})=>l&&s.colors.neutral500};
  }
  span {
    color: ${({theme:s,disabled:l})=>l&&s.colors.neutral500};
  }
`,De=(0,L.default)(ue.Z)`
  width: ${({theme:s})=>s.spaces[4]};
  height: ${({theme:s})=>s.spaces[4]};
  path {
    fill: ${({theme:s})=>s.colors.neutral600};
  }
`,Pe=(0,L.default)(pe.Z)`
  width: ${({theme:s})=>s.spaces[4]};
  height: ${({theme:s})=>s.spaces[4]};
  path {
    fill: ${({theme:s})=>s.colors.danger600};
  }
`,V=({onClick:s,disabled:l,children:c})=>(0,e.jsx)(je,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,alignItems:"center",gap:2,as:"button",hasRadius:!0,onClick:s,disabled:l,children:c}),F=({toggleEditReleaseModal:s,toggleWarningSubmit:l,children:c})=>{const{formatMessage:n}=(0,A.Z)(),{releaseId:i}=(0,M.UO)(),[h,E]=I.useState(!1),j=I.useRef(null),{data:R,isLoading:x,isError:g,error:T}=(0,o.u)({id:i}),[b,{isLoading:O}]=(0,o.c)(),D=(0,a.lm)(),{formatAPIError:C}=(0,a.So)(),{allowedActions:{canUpdate:f,canDelete:u}}=(0,a.ss)(o.P),_=R?.data,d=()=>{E(W=>!W)},P=()=>{s(),d()},r=async()=>{const W=await b({id:i});"data"in W?D({type:"success",message:n({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})}):(0,o.i)(W.error)?D({type:"warning",message:C(W.error)}):D({type:"warning",message:n({id:"notification.error",defaultMessage:"An error occurred"})})},p=()=>{l(),d()};if(x)return(0,e.jsx)(K.o,{"aria-busy":x,children:(0,e.jsx)(a.dO,{})});if(g||!_)return(0,e.jsx)(M.l_,{to:{pathname:"/plugins/content-releases",state:{errors:[{code:T?.code}]}}});const ve=_.actions.meta.count||0,Le=`${_.createdBy.firstname} ${_.createdBy.lastname}`;return(0,e.jsxs)(K.o,{"aria-busy":x,children:[(0,e.jsx)($.T,{title:_.name,subtitle:n({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:ve}),navigationAction:(0,e.jsx)(se.r,{startIcon:(0,e.jsx)(me.Z,{}),to:"/plugins/content-releases",children:n({id:"global.back",defaultMessage:"Back"})}),primaryAction:!_.releasedAt&&(0,e.jsxs)(y.k,{gap:2,children:[(0,e.jsx)(te.h,{label:n({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release actions"}),ref:j,onClick:d,children:(0,e.jsx)(he.Z,{})}),h&&(0,e.jsxs)(ae.J2,{source:j,placement:"bottom-end",onDismiss:d,spacing:4,minWidth:"242px",children:[(0,e.jsxs)(y.k,{alignItems:"center",justifyContent:"center",direction:"column",padding:1,children:[(0,e.jsxs)(V,{disabled:!f,onClick:P,children:[(0,e.jsx)(De,{}),(0,e.jsx)(m.Z,{ellipsis:!0,children:n({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]}),(0,e.jsxs)(V,{disabled:!u,onClick:p,children:[(0,e.jsx)(Pe,{}),(0,e.jsx)(m.Z,{ellipsis:!0,textColor:"danger600",children:n({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})]}),(0,e.jsxs)(xe,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:5,children:[(0,e.jsx)(m.Z,{variant:"pi",fontWeight:"bold",children:n({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),(0,e.jsxs)(m.Z,{variant:"pi",color:"neutral300",children:[(0,e.jsx)(a.ij,{timestamp:new Date(_.createdAt)}),n({id:"content-releases.header.actions.created.description",defaultMessage:" by {createdBy}"},{createdBy:Le})]})]})]}),(0,e.jsx)(a.jW,{permissions:o.P.publish,children:(0,e.jsx)(B.z,{size:"S",variant:"default",onClick:r,loading:O,disabled:_.actions.meta.count===0,children:n({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})})})]})}),c]})},Re=()=>{const{formatMessage:s}=(0,A.Z)(),{releaseId:l}=(0,M.UO)(),[{query:c}]=(0,a.Kx)(),n=(0,a.lm)(),{formatAPIError:i}=(0,a.So)(),{data:h,isLoading:E,isError:j,error:R}=(0,o.u)({id:l}),x=h?.data,{isLoading:g,isFetching:T,isError:b,data:O,error:D}=(0,o.d)({...c,releaseId:l}),[C]=(0,o.e)(),f=async(d,P)=>{const r=await C({params:{releaseId:l,actionId:P},body:{type:d.target.value}});"error"in r&&((0,o.i)(r.error)?n({type:"warning",message:i(r.error)}):n({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}))};if(g||E)return(0,e.jsx)(v.D,{children:(0,e.jsx)(a.dO,{})});if(b||j||!x){const d=[];return R&&d.push({code:R.code}),D&&d.push({code:D.code}),(0,e.jsx)(M.l_,{to:{pathname:"/plugins/content-releases",state:{errors:d}}})}const u=O?.data,_=O?.meta;return!u||!u.length?(0,e.jsx)(v.D,{children:(0,e.jsx)(a.dJ,{content:{id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."},action:(0,e.jsx)(ge.Q,{as:G.rU,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:s({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})})})}):(0,e.jsx)(v.D,{children:(0,e.jsxs)(y.k,{gap:4,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(a.iA.Root,{rows:u.map(d=>({...d,id:Number(d.entry.id)})),colCount:u.length,isLoading:g,isFetching:T,children:(0,e.jsxs)(a.iA.Content,{children:[(0,e.jsxs)(a.iA.Head,{children:[(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"}),name:"name"}),(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.locale",defaultMessage:"locale"}),name:"locale"}),(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"}),name:"content-type"}),(0,e.jsx)(a.iA.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"}),name:"action"})]}),(0,e.jsx)(a.iA.LoadingBody,{}),(0,e.jsx)(a.iA.Body,{children:u.map(({id:d,type:P,entry:r})=>(0,e.jsxs)(ne.Tr,{children:[(0,e.jsx)(U.Td,{children:(0,e.jsx)(m.Z,{children:`${r.contentType.mainFieldValue||r.id}`})}),(0,e.jsx)(U.Td,{children:(0,e.jsx)(m.Z,{children:`${r?.locale?.name?r.locale.name:"-"}`})}),(0,e.jsx)(U.Td,{children:(0,e.jsx)(m.Z,{children:r.contentType.displayName||""})}),(0,e.jsx)(U.Td,{children:x.releasedAt?(0,e.jsx)(m.Z,{children:s({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:P==="publish",b:p=>(0,e.jsx)(m.Z,{fontWeight:"bold",children:p})})}):(0,e.jsx)(o.R,{selected:P,handleChange:p=>f(p,d),name:`release-action-${d}-type`})})]},d))})]})}),(0,e.jsxs)(y.k,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.v4,{defaultValue:_?.pagination?.pageSize.toString()}),(0,e.jsx)(a.tU,{pagination:{pageCount:_?.pagination?.pageCount||0}})]})]})})},ye=()=>{const{formatMessage:s}=(0,A.Z)(),{releaseId:l}=(0,M.UO)(),c=(0,a.lm)(),{formatAPIError:n}=(0,a.So)(),{push:i}=(0,M.k6)(),[h,E]=I.useState(!1),[j,R]=I.useState(!1),{isLoading:x,data:g,isSuccess:T}=(0,o.u)({id:l}),[b,{isLoading:O}]=(0,o.a)(),[D,{isLoading:C}]=(0,o.b)(),f=()=>{E(r=>!r)},u=()=>R(r=>!r);if(x)return(0,e.jsx)(F,{toggleEditReleaseModal:f,toggleWarningSubmit:u,children:(0,e.jsx)(v.D,{children:(0,e.jsx)(a.dO,{})})});const _=T&&g?.data?.name||"",d=async r=>{const p=await b({id:l,name:r.name});"data"in p?c({type:"success",message:s({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}):(0,o.i)(p.error)?c({type:"warning",message:n(p.error)}):c({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}),f()},P=async()=>{const r=await D({id:l});"data"in r?i("/plugins/content-releases"):(0,o.i)(r.error)?c({type:"warning",message:n(r.error)}):c({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(F,{toggleEditReleaseModal:f,toggleWarningSubmit:u,children:[(0,e.jsx)(Re,{}),h&&(0,e.jsx)(H,{handleClose:f,handleSubmit:d,isLoading:x||O,initialValues:{name:_||""}}),(0,e.jsx)(a.QH,{bodyText:{id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"},isOpen:j,isConfirmButtonLoading:C,onToggleDialog:u,onConfirm:P})]})},Oe=()=>(0,e.jsx)(a.jW,{permissions:o.P.main,children:(0,e.jsx)(ye,{})}),J=({isLoading:s,totalReleases:l,onClickAddRelease:c,children:n})=>{const{formatMessage:i}=(0,A.Z)();return(0,e.jsxs)(K.o,{"aria-busy":s,children:[(0,e.jsx)($.T,{title:i({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:!s&&i({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"{number, plural, =0 {No releases} one {# release} other {# releases}}"},{number:l}),primaryAction:(0,e.jsx)(a.jW,{permissions:o.P.create,children:(0,e.jsx)(B.z,{startIcon:(0,e.jsx)(Ee.Z,{}),onClick:c,children:i({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})})})}),n]})},Ce=(0,L.default)(_e.r)`
  display: block;
`,Q=({sectionTitle:s,releases:l=[],isError:c=!1})=>{const{formatMessage:n}=(0,A.Z)();return c?(0,e.jsx)(a.Hn,{}):l?.length===0?(0,e.jsx)(ie.x,{content:n({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:s}),icon:(0,e.jsx)(fe.Z,{width:"10rem"})}):(0,e.jsx)(re.r,{gap:4,children:l.map(({id:i,name:h,actions:E})=>(0,e.jsx)(le.P,{col:3,s:6,xs:12,children:(0,e.jsx)(Ce,{href:`content-releases/${i}`,isExternal:!1,children:(0,e.jsxs)(y.k,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:2,children:[(0,e.jsx)(m.Z,{as:"h3",variant:"delta",fontWeight:"bold",children:h}),(0,e.jsx)(m.Z,{variant:"pi",children:n({id:"content-releases.page.Releases.release-item.entries",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:E.meta.count})})]})})},i))})},Ae={name:""},Te=()=>{const s=(0,M.TH)(),[l,c]=I.useState(!1),n=(0,a.lm)(),{formatMessage:i}=(0,A.Z)(),{push:h,replace:E}=(0,M.k6)(),{formatAPIError:j}=(0,a.So)(),[{query:R},x]=(0,a.Kx)(),g=(0,o.f)(R),[T,{isLoading:b}]=(0,o.g)(),{isLoading:O,isSuccess:D,isError:C}=g;I.useEffect(()=>{s?.state?.errors&&(n({type:"warning",title:i({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:i({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),E({state:null}))},[i,s?.state?.errors,E,n]);const f=()=>{c(r=>!r)};if(O)return(0,e.jsx)(J,{onClickAddRelease:f,isLoading:!0,children:(0,e.jsx)(v.D,{children:(0,e.jsx)(a.dO,{})})});const u=D&&g.currentData?.meta?.pagination?.total||0,_=r=>{x({...R,page:1,pageSize:g?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:r!==0}}})},d=g?.currentData?.meta?.activeTab||"pending",P=async r=>{const p=await T({name:r.name});"data"in p?(n({type:"success",message:i({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),h(`/plugins/content-releases/${p.data.data.id}`)):(0,o.i)(p.error)?n({type:"warning",message:j(p.error)}):n({type:"warning",message:i({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(J,{onClickAddRelease:f,totalReleases:u,children:[(0,e.jsx)(v.D,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(oe.v,{label:i({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),variant:"simple",initialSelectedTabIndex:["pending","done"].indexOf(d),onTabChange:_,children:[(0,e.jsxs)(de.x,{paddingBottom:8,children:[(0,e.jsxs)(S.m,{children:[(0,e.jsx)(S.O,{children:i({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending"})}),(0,e.jsx)(S.O,{children:i({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),(0,e.jsx)(ce.i,{})]}),(0,e.jsxs)(Z.n,{children:[(0,e.jsx)(Z.x,{children:(0,e.jsx)(Q,{sectionTitle:"pending",releases:g?.currentData?.data,isError:C})}),(0,e.jsx)(Z.x,{children:(0,e.jsx)(Q,{sectionTitle:"done",releases:g?.currentData?.data,isError:C})})]})]}),u>0&&(0,e.jsxs)(y.k,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.v4,{options:["8","16","32","64"],defaultValue:g?.currentData?.meta?.pagination?.pageSize.toString()}),(0,e.jsx)(a.tU,{pagination:{pageCount:g?.currentData?.meta?.pagination?.pageCount||0}})]})]})}),l&&(0,e.jsx)(H,{handleClose:f,handleSubmit:P,isLoading:b,initialValues:Ae})]})},be=()=>(0,e.jsx)(a.jW,{permissions:o.P.main,children:(0,e.jsx)(Te,{})}),Ie=()=>(0,e.jsxs)(M.rs,{children:[(0,e.jsx)(M.AW,{exact:!0,path:`/plugins/${o.p}`,component:be}),(0,e.jsx)(M.AW,{exact:!0,path:`/plugins/${o.p}/:releaseId`,component:Oe})]})}}]);
