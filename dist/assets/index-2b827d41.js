import{n as J,p as c,C as D,a8 as Y,a9 as G,aa as R,h as M,ab as B,ac as Q,ad as Z,ae as ee,af as F,ag as se,ah as ne,ai as oe,aj as te,ak as ae,q as e,al as H,T as A,S as ce,L as P,U as V,A as U,am as E,an as ie,ao as le,ap as me,aq as re,ar as _e,as as de,J as ge,x as xe,at as he,au as ue,V as pe,B as ve,av as fe,a1 as ye,aw as je,ax as ke}from"./index-4a63d28d.js";const Ne=t=>{const{componentCls:i,iconCls:l,antCls:o,zIndexPopup:m,colorText:g,colorWarning:u,marginXXS:r,marginXS:p,fontSize:v,fontWeightStrong:j,colorTextHeading:S}=t;return{[i]:{zIndex:m,[`&${o}-popover`]:{fontSize:v},[`${i}-message`]:{marginBottom:p,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${i}-message-icon ${l}`]:{color:u,fontSize:v,lineHeight:1,marginInlineEnd:p},[`${i}-title`]:{fontWeight:j,color:S,"&:only-child":{fontWeight:"normal"}},[`${i}-description`]:{marginTop:r,color:g}},[`${i}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:p}}}}},W=J("Popconfirm",t=>Ne(t),t=>{const{zIndexPopupBase:i}=t;return{zIndexPopup:i+60}});var be=globalThis&&globalThis.__rest||function(t,i){var l={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&i.indexOf(o)<0&&(l[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,o=Object.getOwnPropertySymbols(t);m<o.length;m++)i.indexOf(o[m])<0&&Object.prototype.propertyIsEnumerable.call(t,o[m])&&(l[o[m]]=t[o[m]]);return l};const X=t=>{const{prefixCls:i,okButtonProps:l,cancelButtonProps:o,title:m,description:g,cancelText:u,okText:r,okType:p="primary",icon:v=c.createElement(F,null),showCancel:j=!0,close:S,onConfirm:z,onCancel:b,onPopupClick:y}=t,{getPrefixCls:N}=c.useContext(D),[f]=Y("Popconfirm",G.Popconfirm),w=R(m),a=R(g);return c.createElement("div",{className:`${i}-inner-content`,onClick:y},c.createElement("div",{className:`${i}-message`},v&&c.createElement("span",{className:`${i}-message-icon`},v),c.createElement("div",{className:`${i}-message-text`},w&&c.createElement("div",{className:M(`${i}-title`)},w),a&&c.createElement("div",{className:`${i}-description`},a))),c.createElement("div",{className:`${i}-buttons`},j&&c.createElement(B,Object.assign({onClick:b,size:"small"},o),u??(f==null?void 0:f.cancelText)),c.createElement(Q,{buttonProps:Object.assign(Object.assign({size:"small"},Z(p)),l),actionFn:z,close:S,prefixCls:N("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},r??(f==null?void 0:f.okText))))},Ce=t=>{const{prefixCls:i,placement:l,className:o,style:m}=t,g=be(t,["prefixCls","placement","className","style"]),{getPrefixCls:u}=c.useContext(D),r=u("popconfirm",i),[p]=W(r);return p(c.createElement(ee,{placement:l,className:M(r,o),style:m,content:c.createElement(X,Object.assign({prefixCls:r},g))}))},$e=Ce;var Pe=globalThis&&globalThis.__rest||function(t,i){var l={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&i.indexOf(o)<0&&(l[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,o=Object.getOwnPropertySymbols(t);m<o.length;m++)i.indexOf(o[m])<0&&Object.prototype.propertyIsEnumerable.call(t,o[m])&&(l[o[m]]=t[o[m]]);return l};const K=c.forwardRef((t,i)=>{const{prefixCls:l,placement:o="top",trigger:m="click",okType:g="primary",icon:u=c.createElement(F,null),children:r,overlayClassName:p,onOpenChange:v,onVisibleChange:j}=t,S=Pe(t,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:z}=c.useContext(D),[b,y]=se(!1,{value:t.open,defaultValue:t.defaultOpen}),N=(_,x)=>{y(_,!0),j==null||j(_),v==null||v(_,x)},f=_=>{N(!1,_)},w=_=>{var x;return(x=t.onConfirm)===null||x===void 0?void 0:x.call(globalThis,_)},a=_=>{var x;N(!1,_),(x=t.onCancel)===null||x===void 0||x.call(globalThis,_)},k=_=>{_.keyCode===ae.ESC&&b&&N(!1,_)},C=_=>{const{disabled:x=!1}=t;x||N(_)},T=z("popconfirm",l),d=M(T,p),[h]=W(T);return h(c.createElement(ne,Object.assign({},oe(S,["title"]),{trigger:m,placement:o,onOpenChange:C,open:b,ref:i,overlayClassName:d,content:c.createElement(X,Object.assign({okType:g,icon:u},t,{prefixCls:T,close:f,onConfirm:w,onCancel:a})),"data-popover-inject":!0}),te(r,{onKeyDown:_=>{var x,s;c.isValidElement(r)&&((s=r==null?void 0:(x=r.props).onKeyDown)===null||s===void 0||s.call(x,_)),k(_)}})))});K._InternalPanelDoNotUseOrYouWillBeFired=$e;const Se=K,Ie="_root_113rz_1",ze="_layout_113rz_76",we="_main_113rz_81",Oe="_container_113rz_87",Te="_comment_item_113rz_111",Le="_comment_avatar_113rz_120",Ee="_comment_info_113rz_131",qe="_comment_content_113rz_145",De="_comment_reply_113rz_149",Me="_comment_footer_113rz_162",Be="_comment_time_113rz_167",Re="_comment_oper_113rz_171",Fe="_isHot_113rz_185",He="_comment_del_113rz_196",$={root:Ie,layout:ze,main:we,container:Oe,"light-scheme":"_light-scheme_113rz_92","dark-scheme":"_dark-scheme_113rz_96",comment_item:Te,comment_avatar:Le,comment_info:Ee,comment_content:qe,comment_reply:De,comment_footer:Me,comment_time:Be,comment_oper:Re,isHot:Fe,comment_del:He},Ae="_root_1fmxk_1",Ve="_layout_1fmxk_76",Ue="_main_1fmxk_81",We="_container_1fmxk_87",Xe="_reply_comment_1fmxk_111",Ke="_comment_textarea_1fmxk_125",Je="_comment_box_footer_1fmxk_132",q={root:Ae,layout:Ve,main:Ue,container:We,"light-scheme":"_light-scheme_1fmxk_92","dark-scheme":"_dark-scheme_1fmxk_96",reply_comment:Xe,comment_textarea:Ke,comment_box_footer:Je},{TextArea:Ye}=H,Ge=140,Qe=c.memo(function({info:i,replyMsg:l}){const[o,m]=c.useState(""),g=r=>{m(r.target.value)},u=()=>{l(o)};return e.jsxs("div",{className:q.reply_comment,children:[e.jsxs("h3",{children:["我回复@",i.user.nickname,":"]}),e.jsx("div",{className:q.comment_textarea,children:e.jsx(Ye,{showCount:!0,maxLength:Ge,onChange:g,placeholder:"期待你的神评论……"})}),e.jsx("div",{className:q.comment_box_footer,children:e.jsx(B,{type:"primary",onClick:u,children:"评论"})})]})}),Ze=c.memo(function({lists:i,loading:l,commentHandler:o,likeComment:m}){const[g,u,r]=A(a=>[a.isLogin,a.userInfo,a.setLoginModle]),[p,v]=c.useState(0),[j,S]=c.useState(-1),z=a=>()=>{o(0,"",a.commentId)},b=a=>()=>{m(a)},y=c.useMemo(()=>(a,k)=>a.commentId===p&&j===k,[p,j]),N=(a,k)=>()=>{if(!g){r(!0);return}const C=p==a.commentId&&j==k?0:a.commentId;v(C),S(k)},f=c.useCallback(a=>{o(2,a,p),v(0),S(-1)},[p]),w=a=>a.liked?"active":"";return e.jsx(e.Fragment,{children:l?e.jsx("div",{className:$.comment_item,children:e.jsx(ce,{avatar:!0,active:!0,paragraph:{rows:3}})}):i.map((a,k)=>e.jsxs("div",{className:$.comment_item,children:[e.jsx(P,{to:`/user?id=${a.user.userId}`,className:$.comment_avatar,children:e.jsx("img",{src:`${a.user.avatarUrl}?param=120y120`,alt:""})}),e.jsxs("div",{className:$.comment_info,children:[e.jsx(P,{to:`/user?id=${a.user.userId}`,children:a.user.nickname}),e.jsx("div",{className:$.comment_content,children:a.content}),a.beReplied.map(C=>e.jsxs("div",{className:$.comment_reply,children:[e.jsx(P,{to:`/user?id=${C.user.userId}`,children:C.user.nickname}),": ",C.content]},C.beRepliedCommentId)),e.jsxs("div",{className:$.comment_footer,children:[e.jsx("div",{className:$.comment_time,children:V(a.time)}),e.jsxs("div",{className:$.comment_oper,children:[u&&u.userId==a.user.userId&&e.jsx(Se,{title:"提示",description:"确定删除评论？",onConfirm:z(a),okText:"确定",cancelText:"取消",overlayStyle:{width:"250px"},children:e.jsx("em",{className:$.comment_del,children:e.jsx("i",{className:"iconfont icon-del"})})}),e.jsxs("span",{className:w(a),onClick:b(a),children:[e.jsx("i",{className:"iconfont icon-praise"}),"(",a.likedCount,")"]}),e.jsx("span",{className:$.replyComment,onClick:N(a,k),children:e.jsx("i",{className:"iconfont icon-comment"})})]})]}),a.isHot&&e.jsx("div",{className:$.isHot,children:e.jsx("i",{className:"iconfont icon-hot"})}),y(a,k)&&e.jsx(Qe,{replyMsg:f,info:a})]})]},`comment_${a.commentId}`))})}),es="_root_1gqzu_1",ss="_layout_1gqzu_76",ns="_main_1gqzu_81",os="_container_1gqzu_87",ts="_comments_1gqzu_111",as="_comment_hd_1gqzu_115",cs="_userInfo_1gqzu_136",is="_avatar_1gqzu_136",ls="_comment_box_1gqzu_155",ms="_comment_textarea_1gqzu_155",rs="_pre_1gqzu_159",_s="_inp_paragraph_1gqzu_162",ds="_comment_box_footer_1gqzu_188",gs="_comment_limit_1gqzu_193",xs="_pagination_1gqzu_205",O={root:es,layout:ss,main:ns,container:os,"light-scheme":"_light-scheme_1gqzu_92","dark-scheme":"_dark-scheme_1gqzu_96",comments:ts,comment_hd:as,userInfo:cs,avatar:is,comment_box:ls,comment_textarea:ms,pre:rs,inp_paragraph:_s,comment_box_footer:ds,comment_limit:gs,pagination:xs},hs=140,us=c.memo(function({id:i,type:l}){const{message:o}=U.useApp(),[m,g,u]=A(d=>[d.isLogin,d.userInfo,d.setLoginModle]),[r,p]=c.useState([]),[v,j]=c.useState(0),[S,z]=c.useState(!0),[b]=E.useForm(),[y,N]=c.useState({id:i,limit:20,offset:0,timestamp:new Date().valueOf()}),f=async d=>{let h=null;switch(z(!0),l){case 0:h=await re(d);break;case 1:h=await me(d);break;case 3:h=await le(d);break}if(h.data.code!==200)return o.error({content:"数据请求失败"});const _=h.data.hotComments&&h.data.hotComments.map(x=>(x.isHot=!0,x))||[];j(h.data.total),p([..._,...h.data.comments]),z(!1)},w=d=>{k(1,d.msg,i),b.resetFields()},a=d=>{const h={...y,offset:(d-1)*y.limit};N(h),f(h)},k=async(d,h,_)=>{const x=["删除评论成功！","评论成功！","回复评论成功！"],{data:s}=await _e({t:d,type:l,id:i,content:h,commentId:_});if(s.code!==200)return o.error({content:"数据请求失败"});f(y),o.success({content:x[d]})},C=async d=>{if(!m){u(!0);return}const{data:h}=await de({id:i,cid:d.commentId,t:+!d.liked,type:l});if(h.code!==200)return o.error({content:"数据请求失败"});f(y)},T=()=>{if(!m){u(!0);return}};return c.useEffect(()=>{const d={...y,id:i,offset:0};N(d),f(d)},[i]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:O.comments,children:[e.jsxs("div",{className:O.comment_hd,children:[e.jsxs("h2",{children:["评论",e.jsxs("em",{children:["共",v,"条评论"]})]}),e.jsx("div",{className:O.userInfo,children:g?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:g==null?void 0:g.nickname}),e.jsx("img",{src:g==null?void 0:g.avatarUrl,alt:"",className:O.avatar})]}):e.jsx("em",{onClick:T,children:"登录"})})]}),e.jsxs(E,{className:O.comment_box,form:b,onFinish:w,children:[e.jsx("div",{className:O.comment_textarea,children:e.jsx(E.Item,{name:"msg",children:e.jsx(H.TextArea,{placeholder:"期待你的神评论……",showCount:!0,maxLength:hs})})}),e.jsx("div",{className:O.comment_box_footer,children:e.jsx(B,{type:"primary",htmlType:"submit",children:" 评论 "})})]}),e.jsx("div",{className:"comment_area",children:r.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(Ze,{lists:r,loading:S,commentHandler:k,likeComment:C}),e.jsx("div",{className:O.pagination,children:e.jsx(ie,{showSizeChanger:!1,style:{textAlign:"center"},pageSize:y.limit,total:v,hideOnSinglePage:!0,onChange:a})})]})})]})})}),ps="_root_hkxev_1",vs="_layout_hkxev_76",fs="_main_hkxev_81",ys="_container_hkxev_87",js="_song_hkxev_111",ks="_song_main_hkxev_115",Ns="_song_l_hkxev_119",bs="_song_m_hkxev_115",Cs="_song_aside_hkxev_126",$s="_cover_hkxev_133",Ps="_cover_stylus_hkxev_138",Ss="_cover_img_hkxev_145",Is="_cover_play_img_hkxev_159",zs="_soundPaying_hkxev_1",ws="_song_oper_hkxev_190",Os="_play_btn_hkxev_195",Ts="_iconfont_hkxev_208",Ls="_play_all_hkxev_211",Es="_simi_song_hkxev_219",qs="_song_title_hkxev_219",Ds="_item_name_hkxev_224",Ms="_item_author_hkxev_230",Bs="_simi_item_hkxev_238",Rs="_item_info_hkxev_245",Fs="_song_status_hkxev_249",Hs="_sidebar_box_hkxev_257",As="_aside_title_hkxev_263",Vs="_aside_main_hkxev_279",Us="_playlist_cover_hkxev_279",Ws="_playlist_item_hkxev_289",Xs="_playlist_info_hkxev_293",Ks="_playlist_name_hkxev_297",Js="_playlist_author_hkxev_310",Ys="_song_info_head_hkxev_321",Gs="_song_mv_hkxev_336",Qs="_lyric_hkxev_347",Zs="_comments_hkxev_351",en="_song_related_hkxev_355",sn="_song_author_hkxev_361",nn="_song_album_hkxev_361",on="_mlog_item_hkxev_374",tn="_mlog_img_hkxev_379",an="_mlog_cover_hkxev_402",cn="_mlog_time_hkxev_408",ln="_mlog_name_hkxev_425",mn="_mlog_footer_hkxev_439",rn="_mlog_author_hkxev_443",_n="_mlog_pubTime_hkxev_443",n={root:ps,layout:vs,main:fs,container:ys,"light-scheme":"_light-scheme_hkxev_92","dark-scheme":"_dark-scheme_hkxev_96",song:js,song_main:ks,song_l:Ns,song_m:bs,song_aside:Cs,cover:$s,cover_stylus:Ps,cover_img:Ss,cover_play_img:Is,soundPaying:zs,"cover-stylus":"_cover-stylus_hkxev_183",song_oper:ws,play_btn:Os,iconfont:Ts,play_all:Ls,simi_song:Es,song_title:qs,item_name:Ds,item_author:Ms,simi_item:Bs,item_info:Rs,song_status:Fs,sidebar_box:Hs,aside_title:As,aside_main:Vs,playlist_cover:Us,playlist_item:Ws,playlist_info:Xs,playlist_name:Ks,playlist_author:Js,song_info_head:Ys,song_mv:Gs,"icon-vip":"_icon-vip_hkxev_343",lyric:Qs,comments:Zs,song_related:en,song_author:sn,song_album:nn,mlog_item:on,mlog_img:tn,mlog_cover:an,mlog_time:cn,mlog_name:ln,mlog_footer:mn,mlog_author:rn,mlog_pubTime:_n},dn=0;function xn(){const{message:t}=U.useApp(),[i]=ge(),l=i.get("id")??"",[o,m]=c.useState(),[g,u]=c.useState([]),[r,p]=c.useState([]),[v,j]=c.useState([]),[S,z]=c.useState(""),[b,y,N,f,w]=xe(s=>[s.isPlayed,s.playList[s.playIndex],s.addToList,s.setPlayed,s.selectPlay]),a=c.useMemo(()=>s=>`iconfont ${b&&s.id===y.id?"icon-pause":"icon-play"}`),k=async()=>{const{data:s}=await pe({ids:l,timestamp:new Date().valueOf()});if(s.code!==200)return t.error({content:s.message});s.songs[0].license=!s.privileges[0].cp;const I=ve(s.songs,s.privileges)[0];m(I),z(I.alia.join(" / "))},C=async()=>{const{data:s}=await fe({id:l});if(s.code!==200)return t.error({content:s.message});const I=s.songs.map(L=>ye(L));u(I)},T=async()=>{const{data:s}=await je({id:l});if(s.code!==200)return t.error({content:s.message});p(s.playlists)},d=async()=>{const{data:s}=await ke({id:l});if(s.code!==200)return t.error({content:s.message});j(s.data.feeds)},h=s=>()=>{if(!y||y.id!=s.id){if(s.license){t.warning({content:"由于版权保护，您所在的地区暂时无法使用。"});return}if(s.vip){t.warning({content:"付费歌曲，请在网易云音乐播放"});return}w([s])}else f(!b)},_=s=>()=>{N([s])},x=()=>{};return c.useEffect(()=>{k(),C(),T(),d()},[l]),e.jsxs("div",{className:n.song,children:[e.jsxs("div",{className:n.song_main,children:[o&&e.jsxs("div",{className:n.song_l,children:[e.jsxs("div",{className:n.cover,children:[e.jsx("div",{className:n.cover_img,children:e.jsx("img",{src:o.album.picUrl,alt:""})}),e.jsx("div",{className:n.cover_play_img})]}),e.jsxs("div",{className:n.song_oper,children:[e.jsxs("span",{className:`${n.play_btn} ${n.play_all}`,onClick:h(o),children:[e.jsx("i",{className:a(o)})," ",o.vip?"VIP尊享":"播放"]}),e.jsxs("span",{className:`${n.play_btn} ${n.play_add}`,onClick:_(o),children:[e.jsx("i",{className:"iconfont icon-add"})," 添加"]}),e.jsxs("span",{className:`${n.play_btn} ${n.play_collect}`,children:[e.jsx("i",{className:"iconfont icon-collect"})," 收藏"]}),e.jsxs("span",{className:`${n.play_btn} ${n.play_comment}`,onClick:x,children:[e.jsx("i",{className:"iconfont icon-comment"})," 评论"]})]}),e.jsxs("div",{className:n.simi_song,children:[e.jsx("h3",{className:n.song_title,children:"相似歌曲"}),e.jsx("div",{className:n.aside_main,children:g.length>0&&g.map(s=>e.jsxs("div",{className:n.simi_item,children:[e.jsxs("div",{className:n.item_info,children:[e.jsxs(P,{className:n.item_name,to:`/song?id=${s.id}`,children:[s.name," "]}),e.jsx("div",{className:n.item_author,children:s.singer&&s.singer.map((I,L)=>e.jsx(P,{to:`/singer/detail?id=${I.id}`,className:n.song_author,children:L!==0?" / "+I.name:I.name},I.name))})]}),e.jsx("div",{className:n.song_status,children:s.vip?e.jsx("i",{className:"iconfont icon-vip"}):e.jsxs(e.Fragment,{children:[e.jsx("i",{onClick:h(s),className:a(s)}),e.jsx("i",{onClick:_(s),className:"iconfont icon-add",title:"添加到列表"})]})})]},s.id))})]})]}),o&&e.jsxs("div",{className:n.song_m,children:[e.jsxs("div",{className:n.song_info,children:[e.jsxs("div",{className:n.song_info_head,children:[e.jsx("div",{className:n.song_title,children:o.name}),o.mvId&&e.jsx(P,{to:`/mv?id=${o.mvId}`,children:e.jsx("i",{className:"iconfont icon-mvlist"})}),o.vip&&e.jsx("i",{className:"iconfont icon-vip"})]}),o.coverDesc&&e.jsx("div",{className:n.song_desc,children:o.coverDesc}),e.jsxs("div",{className:n.song_related,children:[e.jsxs("div",{className:n.song_author,children:["歌手： ",o.singer&&o.singer.map((s,I)=>e.jsx(P,{className:n.song_author,to:`/singer/detail?id=${s.id}`,children:I!==0?" / "+s.name:s.name},s.name))]}),e.jsxs("div",{className:n.song_album,children:["所属专辑：",e.jsx(P,{className:n.song_album,to:`/album?id=${o.album.id}`,children:o.album.name})]})]})]}),e.jsx("div",{className:n.lyric,children:e.jsx(he,{sId:l,maxH:"auto"})}),e.jsx("div",{className:n.comments,children:e.jsx(us,{type:dn,id:l})})]})]}),e.jsxs("div",{className:n.song_aside,children:[r.length>0&&e.jsxs("div",{className:`${n.sidebar_box} ${n.playlist_simi}`,children:[e.jsx("h3",{className:n.aside_title,children:"包含这首歌的歌单"}),e.jsx("div",{className:n.aside_main,children:r.map(s=>e.jsxs("div",{className:n.playlist_item,children:[e.jsx(P,{to:`/playlist/detail?id=${s.id}`,className:n.playlist_cover,children:e.jsx("img",{src:s.coverImgUrl})}),e.jsxs("div",{className:n.playlist_info,children:[e.jsx(P,{to:`/playlist/detail?id=${s.id}`,className:n.playlist_name,children:s.name}),e.jsxs("div",{className:n.playlist_author,children:["By. ",e.jsx(P,{to:`/user?id=${s.creator.userId}`,children:s.creator.nickname})]})]})]},s.id))})]}),v.length>0&&e.jsxs("div",{className:`${n.sidebar_box} ${n.simi_mlog}`,children:[e.jsx("h3",{className:n.aside_title,children:"相关视频"}),e.jsx("div",{className:n.aside_main,children:v.map(s=>e.jsxs(P,{to:`/mv?id=${s.id}`,className:n.mlog_item,children:[e.jsxs("div",{className:n.mlog_img,children:[e.jsx("i",{className:"iconfont icon-mvlist"}),e.jsx("img",{src:s.resource.mlogBaseData.coverUrl,className:n.mlog_cover})]}),e.jsxs("div",{className:n.mlog_time,children:[e.jsx("i",{className:"iconfont icon-time"})," ",ue(s.resource.mlogBaseData.duration)]}),e.jsx("div",{className:n.mlog_name,children:s.resource.mlogBaseData.text}),e.jsxs("div",{className:n.mlog_footer,children:[e.jsx("span",{className:n.mlog_author,children:s.resource.userProfile.nickname}),e.jsx("span",{className:n.mlog_pubTime,children:V(s.resource.mlogBaseData.pubTime)})]})]},s.id))})]})]})]})}export{xn as default};
