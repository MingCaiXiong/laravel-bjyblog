(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{X494:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryRule=c,t.updateRule=s;var r=n(a("d6i3")),u=n(a("1l/V")),l=n(a("sy1d"));function c(e){return d.apply(this,arguments)}function d(){return d=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.default)("/api/socialiteClients",{params:t}));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function s(e){return i.apply(this,arguments)}function i(){return i=(0,u.default)(r.default.mark(function e(t){return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.default)("/api/socialiteClients/".concat(t.id),{method:"PUT",data:t}));case 1:case"end":return e.stop()}},e)})),i.apply(this,arguments)}},muqs:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3")),l=a("X494"),c={namespace:"adminAndsocialiteClientAndindex",state:{data:{list:[],pagination:{}}},effects:{fetch:u.default.mark(function e(t,a){var n,r,c,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(l.queryRule,n);case 4:return d=e.sent,e.next=7,c({type:"save",payload:d});case 7:case"end":return e.stop()}},e)}),add:u.default.mark(function e(t,a){var n,r,c,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,c=a.call,d=a.put,e.next=4,c(l.addRule,n);case 4:return s=e.sent,e.next=7,d({type:"new",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),update:u.default.mark(function e(t,a){var n,r,c,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,c=a.call,d=a.put,e.next=4,c(l.updateRule,n);case 4:return s=e.sent,e.next=7,d({type:"edit",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),destroy:u.default.mark(function e(t,a){var n,r,c,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,c=a.call,d=a.put,e.next=4,c(l.removeRule,n);case 4:return s=e.sent,e.next=7,d({type:"edit",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),forceDelete:u.default.mark(function e(t,a){var n,r,c,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,c=a.call,d=a.put,e.next=4,c(l.forceDeleteRule,n);case 4:return e.next=6,d({type:"remove",payload:n.id});case 6:r&&r();case 7:case"end":return e.stop()}},e)}),restore:u.default.mark(function e(t,a){var n,r,c,d,s;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=t.callback,c=a.call,d=a.put,e.next=4,c(l.restoreRule,n);case 4:return s=e.sent,e.next=7,d({type:"edit",payload:s});case 7:r&&r();case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return(0,r.default)({},e,{data:t.payload})},new:function(e,t){return void 0!==e&&e.data.list.push(t.payload.data),(0,r.default)({data:t.payload},e)},edit:function(e,t){return void 0!==e&&e.data.list.forEach(function(a,n){a.id===t.payload.data.id&&(e.data.list[n]=t.payload.data)}),(0,r.default)({data:t.payload},e)},remove:function(e,t){return void 0!==e&&e.data.list.forEach(function(a,n){a.id===t.payload&&e.data.list.splice(n,1)}),(0,r.default)({data:t.payload},e)}}},d=c;t.default=d}}]);