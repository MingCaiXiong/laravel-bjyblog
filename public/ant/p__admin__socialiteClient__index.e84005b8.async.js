(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{Mtqk:function(e,t,a){e.exports={tableList:"antd-pro-pages-admin-socialite-client-index-style-tableList",tableListOperator:"antd-pro-pages-admin-socialite-client-index-style-tableListOperator",tableListForm:"antd-pro-pages-admin-socialite-client-index-style-tableListForm",submitButtons:"antd-pro-pages-admin-socialite-client-index-style-submitButtons"}},QskC:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var l=n(a("5rEg"));a("2qtc");var i=n(a("kLXV"));a("y8nQ");var d=n(a("Vl3Y")),r=n(a("q1tI")),o=a("Y2fQ"),s=d.default.Item,u=function(e){var t=e.updateModalVisible,a=e.form,n=e.handleUpdate,d=e.handleUpdateModalVisible,u=e.updateFormValues,c=function(){a.validateFields(function(e,t){e||(a.resetFields(),n(t))})};return r.default.createElement(i.default,{destroyOnClose:!0,title:(0,o.formatMessage)({id:"Edit"}),visible:t,onOk:c,onCancel:function(){return d()}},a.getFieldDecorator("id",{rules:[{required:!0}],initialValue:u.id})(r.default.createElement(l.default,{type:"hidden"})),r.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:"Client id"},a.getFieldDecorator("client_id",{rules:[{required:!0}],initialValue:u.client_id})(r.default.createElement(l.default,null))),r.default.createElement(s,{labelCol:{span:5},wrapperCol:{span:15},label:"Client secret"},a.getFieldDecorator("client_secret",{rules:[{required:!0}],initialValue:u.client_secret})(r.default.createElement(l.default,null))))},c=d.default.create()(u);t.default=c},Zpf3:function(e,t,a){e.exports={standardTable:"antd-pro-pages-admin-socialite-client-index-components-standard-table-index-standardTable",tableAlert:"antd-pro-pages-admin-socialite-client-index-components-standard-table-index-tableAlert"}},jWPJ:function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("y8nQ");var i=l(a("Vl3Y"));a("IzEo");var d=l(a("bx4M")),r=l(a("p0pE")),o=l(a("2Taf")),s=l(a("vZ4D")),u=l(a("l4Ni")),c=l(a("ujKo")),f=l(a("MhPg")),p=n(a("q1tI")),m=a("y1Nh"),h=a("MuoO"),b=l(a("QskC")),v=l(a("vLp+")),g=a("Y2fQ"),y=l(a("Mtqk")),C=function(e,t,a,n){var l,i=arguments.length,d=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,a,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(d=(i<3?l(d):i>3?l(t,a,d):l(t,a))||d);return i>3&&d&&Object.defineProperty(t,a,d),d},w=function(e){return Object.keys(e).map(function(t){return e[t]}).join(",")},M=function(e){function t(){var e;return(0,o.default)(this,t),e=(0,u.default)(this,(0,c.default)(t).apply(this,arguments)),e.state={updateModalVisible:!1,selectedRows:[],formValues:{},updateFormValues:{id:0,client_id:"",client_secret:""}},e.columns=[{title:"client id",dataIndex:"client_id"},{title:"client secret",dataIndex:"client_secret"},{title:(0,g.formatMessage)({id:"Handle"}),render:function(t,a){return p.default.createElement(p.Fragment,null,p.default.createElement("a",{onClick:function(){return e.handleUpdateModalVisible(!0,a)}},(0,g.formatMessage)({id:"Edit"})))}}],e.handleStandardTableChange=function(t,a,n){var l=e.props.dispatch,i=e.state.formValues,d=Object.keys(a).reduce(function(e,t){var n=(0,r.default)({},e);return n[t]=w(a[t]),n},{}),o=(0,r.default)({currentPage:t.current,pageSize:t.pageSize},i,d);n.field&&(o.sorter="".concat(n.field,"_").concat(n.order)),l({type:"adminAndsocialiteClientAndindex/fetch",payload:o})},e.handleMenuClick=function(t){var a=e.props.dispatch,n=e.state.selectedRows;if(n)switch(t.key){case"remove":a({type:"adminAndsocialiteClientAndindex/destroy",payload:{key:n.map(function(e){return e.id})},callback:function(){e.setState({selectedRows:[]})}});break;default:break}},e.handleSelectRows=function(t){e.setState({selectedRows:t})},e.handleUpdateModalVisible=function(t,a){e.setState({updateModalVisible:!!t,updateFormValues:a||{id:0,client_id:"",client_secret:""}})},e.handleUpdate=function(t){var a=e.props.dispatch;a({type:"adminAndsocialiteClientAndindex/update",payload:t}),e.handleUpdateModalVisible()},e}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"adminAndsocialiteClientAndindex/fetch"})}},{key:"render",value:function(){var e=this.props,t=e.adminAndsocialiteClientAndindex.data,a=e.loading,n=this.state,l=n.selectedRows,i=n.updateModalVisible,r=n.updateFormValues,o={handleUpdateModalVisible:this.handleUpdateModalVisible,handleUpdate:this.handleUpdate};return p.default.createElement(m.PageHeaderWrapper,null,p.default.createElement(d.default,{bordered:!1},p.default.createElement("div",{className:y.default.tableList},p.default.createElement(v.default,{selectedRows:l,loading:a,data:t,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange}))),p.default.createElement(b.default,Object.assign({},o,{updateModalVisible:i,updateFormValues:r})))}}]),t}(p.Component);M=C([(0,h.connect)(function(e){var t=e.adminAndsocialiteClientAndindex,a=e.loading;return{adminAndsocialiteClientAndindex:t,loading:a.models.adminAndsocialiteClientAndindex}})],M);var V=i.default.create()(M);t.default=V},"vLp+":function(e,t,a){"use strict";var n=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var i=l(a("wCAj")),d=l(a("Y/ft")),r=l(a("2Taf")),o=l(a("vZ4D")),s=l(a("l4Ni")),u=l(a("ujKo")),c=l(a("MhPg")),f=l(a("p0pE")),p=n(a("q1tI")),m=l(a("Zpf3"));function h(e){if(!e)return[];var t=[];return e.forEach(function(e){e.needTotal&&t.push((0,f.default)({},e,{total:0}))}),t}var b=function(e){function t(){var e;return(0,r.default)(this,t),e=(0,s.default)(this,(0,u.default)(t).apply(this,arguments)),e.handleTableChange=function(t,a,n){var l=e.props.onChange;if(l){for(var i=arguments.length,d=new Array(i>3?i-3:0),r=3;r<i;r++)d[r-3]=arguments[r];l.apply(void 0,[t,a,n].concat(d))}},e}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.rowKey,n=(0,d.default)(e,["data","rowKey"]),l=t||{},r=l.list,o=void 0===r?[]:r,s=l.pagination,u=void 0!==s&&s,c=!!u&&(0,f.default)({showSizeChanger:!0,showQuickJumper:!0},u);return p.default.createElement("div",{className:m.default.standardTable},p.default.createElement(i.default,Object.assign({rowKey:a||"key",dataSource:o,pagination:c,onChange:this.handleTableChange},n)))}}],[{key:"getDerivedStateFromProps",value:function(e){if(0===e.selectedRows.length){var t=h(e.columns);return{selectedRowKeys:[],needTotalList:t}}return null}}]),t}(p.Component),v=b;t.default=v}}]);