(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[71],{597:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(18),n=(a(0),a(15)),l=a.n(n),i=a(640),o=a(103),s=a(104),u=a(642),d=function(e){var t=e.displayName,a=e.cidrBlock;return"".concat(t,": ").concat(a)};t.default=function(e){var t,a=e.data,n=l()(a,["item"],{});return a?Object(r.jsxs)(i.a,{data:a,children:[Object(r.jsxs)(u.a,{children:[Object(r.jsx)(i.c,{label:"Name",valuePath:"name"}),Object(r.jsx)(i.c,{label:"Project ID",valuePath:"project"}),Object(r.jsx)(i.c,{label:"Dashboard",valuePath:"dashboard_status"}),Object(r.jsx)(i.c,{label:"Alias IP",valuePath:"alias_ip_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Basic Authentication",valuePath:"basic_authentication_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Client Certificate Authentication",valuePath:"client_certificate_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Image Type",valuePath:"image_type",errorPath:"container_optimized_os_not_used"}),Object(r.jsx)(i.c,{label:"Legacy Authorization",valuePath:"legacy_abac_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Master Authorized Networks",valuePath:"master_authorized_networks_enabled",errorPath:"master_authorized_networks_disabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Pod Security Policy",valuePath:"pod_security_policy_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Network Policy",valuePath:"network_policy_enabled",errorPath:"network_policy_disabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Private Cluster",valuePath:"private_cluster_enabled",errorPath:"private_cluster_disabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Private Google Access",valuePath:"private_ip_google_access_enabled",errorPath:"private_ip_google_access_disabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Service Account",valuePath:"service_account",errorPath:"default_service_account_used"}),Object(r.jsx)(i.c,{label:"Stackdriver Logging",valuePath:"logging_enabled",errorPath:"logging_disabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Stackdriver Monitoring",valuePath:"monitoring_enabled",errorPath:"monitoring_disabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Scopes",valuePath:"scopes",errorPath:"scopes_not_limited",renderValue:function(e){return Object(o.k)(e,"",o.n)}}),n.labels&&Object(r.jsx)(i.c,{label:"Labels",valuePath:"labels",errorPath:"has_no_labels",renderValue:o.f})]}),Object(r.jsxs)(s.b,{children:[Object(r.jsxs)(s.a,{title:"Master Authorized Networks",children:[Object(r.jsx)(i.c,{label:"Status",valuePath:"master_authorized_networks_config.enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"CIDR Blocks",valuePath:"master_authorized_networks_config.cidrBlocks",renderValue:function(e){return Object(o.k)(e,"",d)}})]}),Object(r.jsx)(s.a,{title:"Node pools",children:(t=n.node_pools,Object.entries(t).map((function(e){var t=Object(c.a)(e,1)[0];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:t}),Object(r.jsxs)(i.b,{path:t,children:[Object(r.jsx)(i.c,{label:"Automatic node upgrades",valuePath:"auto_upgrade_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Automatic node repair",valuePath:"auto_repair_enabled",renderValue:o.c}),Object(r.jsx)(i.c,{label:"Legacy metadata endpoints",valuePath:"legacy_metadata_endpoints_enabled",renderValue:o.c})]})]},t)})))})]})]}):null}},637:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o}));var r=a(0),c=a.n(r),n={path_to_issue:[],item:{}},l=c.a.createContext(n),i=c.a.createContext(""),o=c.a.createContext((function(){}))},638:function(e,t,a){"use strict";var r=a(19),c=a(1),n=a(0),l=a(633),i=a(7),o=a.n(i),s=a(15),u=a.n(s),d=a(10),b=a.n(d),j=a(637),h=a(103),v=a(83),_=(a(641),a(624)),p=a(191),O=a.n(p),x=a(192),f=a(130),P=function(e){var t=e.service,a=e.finding,r=e.path,i=Object(n.useContext)(f.a),o=i.exceptions,s=i.addException,d=Object(x.b)().enqueueSnackbar,b=u()(o,[t,a],[]).includes(r);return Object(c.jsx)(l.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(c.jsx)(_.a,{disabled:b,size:"small",startIcon:Object(c.jsx)(O.a,{}),className:"exception-btn",onClick:function(){s(t,a,r),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=a(29),m=function(e){var t,a=e.label,i=e.separator,s=e.valuePath,d=e.errorPath,_=e.className,p=e.inline,O=e.tooltip,x=e.tooltipProps,f=e.renderValue,m=e.basePathOverwrite,k=Object(g.g)(),V=Object(n.useContext)(j.a),y=Object(n.useContext)(j.b),A=Object(n.useContext)(j.c),w=Object(h.a)(m||y,s),C=f(e.value||u()(V.item,w,e.value));("boolean"===typeof C&&(C=String(C)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(h.a)(m||y,e)})):t=[w];var N=t.some((function(e){return V.path_to_issues.includes(e)})),z=V.level;if(Object(n.useEffect)((function(){N&&A(z)}),[z]),void 0===C||null===C)return null;var S=Object(c.jsx)(P,{service:k.service,finding:k.finding,path:"".concat(V.path,".").concat(t[0])}),I=Object(c.jsxs)("span",{className:o()(N&&o()("issue",z)),children:[C,N&&S]});return Object(c.jsx)(v.a,{className:o()(_,"partial-value",{inline:p}),label:a,separator:i,value:O?Object(c.jsx)(l.a,Object(r.a)(Object(r.a)({title:C},x),{},{children:I})):I})};m.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=m},639:function(e,t,a){"use strict";var r=a(1),c=a(0),n=a(637),l=a(103);t.a=function(e){var t=e.path,a=e.children,i=Object(c.useContext)(n.b);return Object(r.jsx)(n.b.Provider,{value:Object(l.a)(i,t),children:a})}},640:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return l.a})),a.d(t,"c",(function(){return i.a}));var r=a(1),c=(a(0),a(637)),n=(a(103),function(e){var t=e.data,a=e.children;return console.info("PARTIAL DATA",t),Object(r.jsx)(c.a.Provider,{value:t,children:a})}),l=a(639),i=a(638)},641:function(e,t,a){},642:function(e,t,a){"use strict";var r=a(1);a(0),a(643);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:"informations-wrapper",children:[Object(r.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,a){}}]);
//# sourceMappingURL=71.73387c91.chunk.js.map