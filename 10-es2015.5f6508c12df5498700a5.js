(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"Y+KY":function(a,r,t){"use strict";t.r(r),t.d(r,"ChartJSModule",function(){return l});var e=t("hrfs"),o=t("iInd"),b=t("8Y7J");const i=[{path:"",component:(()=>{class a{constructor(){this.lineChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"},{data:[18,48,77,9,100,27,40],label:"Series C"}],this.lineChartLabels=["January","February","March","April","May","June","July"],this.lineChartOptions={animation:!1,responsive:!0},this.lineChartColours=[{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(77,83,96,0.2)",borderColor:"rgba(77,83,96,1)",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.lineChartLegend=!0,this.lineChartType="line",this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=["2006","2007","2008","2009","2010","2011","2012"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[65,59,80,81,56,55,40],label:"Series A"},{data:[28,48,40,19,86,27,90],label:"Series B"}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[350,450,100],this.doughnutChartType="doughnut",this.radarChartLabels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],this.radarChartData=[{data:[65,59,90,81,56,55,40],label:"Series A"},{data:[28,48,40,19,96,27,100],label:"Series B"}],this.radarChartType="radar",this.pieChartLabels=["Download Sales","In-Store Sales","Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.polarAreaChartLabels=["Download Sales","In-Store Sales","Mail Sales","Telesales","Corporate Sales"],this.polarAreaChartData=[300,500,100,40,120],this.polarAreaLegend=!0,this.polarAreaChartType="polarArea"}chartClicked(a){console.log(a)}chartHovered(a){console.log(a)}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=b.Fb({type:a,selectors:[["ng-component"]],decls:62,vars:24,consts:[[1,"animated","fadeIn"],[1,"card-columns","cols-2"],[1,"card"],[1,"card-header"],[1,"card-header-actions"],["href","http://www.chartjs.org"],[1,"text-muted"],[1,"card-body"],[1,"chart-wrapper"],["baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"datasets","labels","options","legend","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"data","labels","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"datasets","labels","chartType","chartHover","chartClick"],["baseChart","",1,"chart",3,"data","labels","legend","chartType","chartHover","chartClick"]],template:function(a,r){1&a&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Rb(2,"div",2),b.Rb(3,"div",3),b.xc(4," Line Chart "),b.Rb(5,"div",4),b.Rb(6,"a",5),b.Rb(7,"small",6),b.xc(8,"docs"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(9,"div",7),b.Rb(10,"div",8),b.Rb(11,"canvas",9),b.Yb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(12,"div",2),b.Rb(13,"div",3),b.xc(14," Bar Chart "),b.Rb(15,"div",4),b.Rb(16,"a",5),b.Rb(17,"small",6),b.xc(18,"docs"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(19,"div",7),b.Rb(20,"div",8),b.Rb(21,"canvas",10),b.Yb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(22,"div",2),b.Rb(23,"div",3),b.xc(24," Doughnut Chart "),b.Rb(25,"div",4),b.Rb(26,"a",5),b.Rb(27,"small",6),b.xc(28,"docs"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(29,"div",7),b.Rb(30,"div",8),b.Rb(31,"canvas",11),b.Yb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(32,"div",2),b.Rb(33,"div",3),b.xc(34," Radar Chart "),b.Rb(35,"div",4),b.Rb(36,"a",5),b.Rb(37,"small",6),b.xc(38,"docs"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(39,"div",7),b.Rb(40,"div",8),b.Rb(41,"canvas",12),b.Yb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(42,"div",2),b.Rb(43,"div",3),b.xc(44," Pie Chart "),b.Rb(45,"div",4),b.Rb(46,"a",5),b.Rb(47,"small",6),b.xc(48,"docs"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(49,"div",7),b.Rb(50,"div",8),b.Rb(51,"canvas",11),b.Yb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(52,"div",2),b.Rb(53,"div",3),b.xc(54," Polar Area Chart "),b.Rb(55,"div",4),b.Rb(56,"a",5),b.Rb(57,"small",6),b.xc(58,"docs"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Rb(59,"div",7),b.Rb(60,"div",8),b.Rb(61,"canvas",13),b.Yb("chartHover",function(a){return r.chartHovered(a)})("chartClick",function(a){return r.chartClicked(a)}),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&a&&(b.zb(11),b.hc("datasets",r.lineChartData)("labels",r.lineChartLabels)("options",r.lineChartOptions)("colors",r.lineChartColours)("legend",r.lineChartLegend)("chartType",r.lineChartType),b.zb(10),b.hc("datasets",r.barChartData)("labels",r.barChartLabels)("options",r.barChartOptions)("legend",r.barChartLegend)("chartType",r.barChartType),b.zb(10),b.hc("data",r.doughnutChartData)("labels",r.doughnutChartLabels)("chartType",r.doughnutChartType),b.zb(10),b.hc("datasets",r.radarChartData)("labels",r.radarChartLabels)("chartType",r.radarChartType),b.zb(10),b.hc("data",r.pieChartData)("labels",r.pieChartLabels)("chartType",r.pieChartType),b.zb(10),b.hc("data",r.polarAreaChartData)("labels",r.polarAreaChartLabels)("legend",r.polarAreaLegend)("chartType",r.polarAreaChartType))},directives:[e.a],encapsulation:2}),a})(),data:{title:"Charts"}}];let n=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=b.Jb({type:a}),a.\u0275inj=b.Ib({imports:[[o.g.forChild(i)],o.g]}),a})(),l=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=b.Jb({type:a}),a.\u0275inj=b.Ib({imports:[[n,e.b]]}),a})()}}]);