!function(){function b(b,e){if(!(b instanceof e))throw new TypeError("Cannot call a class as a function")}function e(b,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(b,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{AgMk:function(o,t,d){"use strict";d.r(t),d.d(t,"ThemeModule",function(){return h});var n,i,a,r,c=d("SVse"),l=d("iInd"),s=d("NuRj"),R=d("8Y7J"),Q=[{path:"",data:{title:"Theme"},children:[{path:"",redirectTo:"colors"},{path:"colors",component:(i=function(){function o(e){b(this,o),this._document=e}var t,d,n;return t=o,(d=[{key:"themeColors",value:function(){var b=this;Array.from(this._document.querySelectorAll(".theme-color")).forEach(function(e){var o=Object(s.getStyle)("background-color",e),t=b._document.createElement("table");t.innerHTML='\n        <table class="w-100">\n          <tr>\n            <td class="text-muted">HEX:</td>\n            <td class="font-weight-bold">'.concat(Object(s.rgbToHex)(o),'</td>\n          </tr>\n          <tr>\n            <td class="text-muted">RGB:</td>\n            <td class="font-weight-bold">').concat(o,"</td>\n          </tr>\n        </table>\n      "),e.parentNode.appendChild(t)})}},{key:"ngOnInit",value:function(){this.themeColors()}}])&&e(t.prototype,d),n&&e(t,n),o}(),i.\u0275fac=function(b){return new(b||i)(R.Lb(c.e))},i.\u0275cmp=R.Fb({type:i,selectors:[["ng-component"]],decls:131,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"icon-drop"],[1,"card-body"],[1,"row"],[1,"col-xl-2","col-md-3","col-sm-4","col-6","mb-4"],[1,"bg-primary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-secondary","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-success","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-danger","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-warning","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-info","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-dark","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"row","mb-3"],[1,"bg-gray-100","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-200","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-300","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-400","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-500","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-600","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-700","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-800","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-gray-900","theme-color","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-light-blue","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-indigo","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-purple","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-pink","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-red","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-orange","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-yellow","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-green","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-teal","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"],[1,"bg-cyan","theme-color","mb-3","w-75","rounded","mb-2",2,"padding-top","75%"]],template:function(b,e){1&b&&(R.Rb(0,"div",0),R.Rb(1,"div",1),R.Rb(2,"div",2),R.Mb(3,"i",3),R.xc(4," Theme colors "),R.Qb(),R.Rb(5,"div",4),R.Rb(6,"div",5),R.Rb(7,"div",6),R.Mb(8,"div",7),R.Rb(9,"h6"),R.xc(10,"Brand Primary Color"),R.Qb(),R.Qb(),R.Rb(11,"div",6),R.Mb(12,"div",8),R.Rb(13,"h6"),R.xc(14,"Brand Secondary Color"),R.Qb(),R.Qb(),R.Rb(15,"div",6),R.Mb(16,"div",9),R.Rb(17,"h6"),R.xc(18,"Brand Success Color"),R.Qb(),R.Qb(),R.Rb(19,"div",6),R.Mb(20,"div",10),R.Rb(21,"h6"),R.xc(22,"Brand Danger Color"),R.Qb(),R.Qb(),R.Rb(23,"div",6),R.Mb(24,"div",11),R.Rb(25,"h6"),R.xc(26,"Brand Warning Color"),R.Qb(),R.Qb(),R.Rb(27,"div",6),R.Mb(28,"div",12),R.Rb(29,"h6"),R.xc(30,"Brand Info Color"),R.Qb(),R.Qb(),R.Rb(31,"div",6),R.Mb(32,"div",13),R.Rb(33,"h6"),R.xc(34,"Brand Light Color"),R.Qb(),R.Qb(),R.Rb(35,"div",6),R.Mb(36,"div",14),R.Rb(37,"h6"),R.xc(38,"Brand Dark Color"),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Rb(39,"div",1),R.Rb(40,"div",2),R.Mb(41,"i",3),R.xc(42," Grays "),R.Qb(),R.Rb(43,"div",4),R.Rb(44,"div",15),R.Rb(45,"div",6),R.Mb(46,"div",16),R.Rb(47,"h6"),R.xc(48,"Gray 100 Color"),R.Qb(),R.Qb(),R.Rb(49,"div",6),R.Mb(50,"div",17),R.Rb(51,"h6"),R.xc(52,"Gray 200 Color"),R.Qb(),R.Qb(),R.Rb(53,"div",6),R.Mb(54,"div",18),R.Rb(55,"h6"),R.xc(56,"Gray 300 Color"),R.Qb(),R.Qb(),R.Rb(57,"div",6),R.Mb(58,"div",19),R.Rb(59,"h6"),R.xc(60,"Gray 400 Color"),R.Qb(),R.Qb(),R.Rb(61,"div",6),R.Mb(62,"div",20),R.Rb(63,"h6"),R.xc(64,"Gray 500 Color"),R.Qb(),R.Qb(),R.Rb(65,"div",6),R.Mb(66,"div",21),R.Rb(67,"h6"),R.xc(68,"Gray 600 Color"),R.Qb(),R.Qb(),R.Rb(69,"div",6),R.Mb(70,"div",22),R.Rb(71,"h6"),R.xc(72,"Gray 700 Color"),R.Qb(),R.Qb(),R.Rb(73,"div",6),R.Mb(74,"div",23),R.Rb(75,"h6"),R.xc(76,"Gray 800 Color"),R.Qb(),R.Qb(),R.Rb(77,"div",6),R.Mb(78,"div",24),R.Rb(79,"h6"),R.xc(80,"Gray 900 Color"),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Rb(81,"div",1),R.Rb(82,"div",2),R.Mb(83,"i",3),R.xc(84," Additional colors "),R.Qb(),R.Rb(85,"div",4),R.Rb(86,"div",5),R.Rb(87,"div",6),R.Mb(88,"div",25),R.Rb(89,"h6"),R.xc(90,"Blue Color"),R.Qb(),R.Qb(),R.Rb(91,"div",6),R.Mb(92,"div",26),R.Rb(93,"h6"),R.xc(94,"Light Blue Color"),R.Qb(),R.Qb(),R.Rb(95,"div",6),R.Mb(96,"div",27),R.Rb(97,"h6"),R.xc(98,"Indigo Color"),R.Qb(),R.Qb(),R.Rb(99,"div",6),R.Mb(100,"div",28),R.Rb(101,"h6"),R.xc(102,"Purple Color"),R.Qb(),R.Qb(),R.Rb(103,"div",6),R.Mb(104,"div",29),R.Rb(105,"h6"),R.xc(106,"Pink Color"),R.Qb(),R.Qb(),R.Rb(107,"div",6),R.Mb(108,"div",30),R.Rb(109,"h6"),R.xc(110,"Red Color"),R.Qb(),R.Qb(),R.Rb(111,"div",6),R.Mb(112,"div",31),R.Rb(113,"h6"),R.xc(114,"Orange Color"),R.Qb(),R.Qb(),R.Rb(115,"div",6),R.Mb(116,"div",32),R.Rb(117,"h6"),R.xc(118,"Yellow Color"),R.Qb(),R.Qb(),R.Rb(119,"div",6),R.Mb(120,"div",33),R.Rb(121,"h6"),R.xc(122,"Green Color"),R.Qb(),R.Qb(),R.Rb(123,"div",6),R.Mb(124,"div",34),R.Rb(125,"h6"),R.xc(126,"Teal Color"),R.Qb(),R.Qb(),R.Rb(127,"div",6),R.Mb(128,"div",35),R.Rb(129,"h6"),R.xc(130,"Cyan Color"),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb())},encapsulation:2}),i),data:{title:"Colors"}},{path:"typography",component:(n=function e(){b(this,e)},n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=R.Fb({type:n,selectors:[["ng-component"]],decls:189,vars:0,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"table"],[1,"highlighter-rouge"],[1,"h1"],[1,"h2"],[1,"h3"],[1,"h4"],[1,"h5"],[1,"h6"],[1,"bd-example"],[1,"bd-example","bd-example-type"],[1,"display-1"],[1,"display-2"],[1,"display-3"],[1,"display-4"],[1,"row"],[1,"col-sm-3"],[1,"col-sm-9"],[1,"col-sm-3","text-truncate"],[1,"col-sm-4"],[1,"col-sm-8"]],template:function(b,e){1&b&&(R.Rb(0,"div",0),R.Rb(1,"div",1),R.Rb(2,"div",2),R.xc(3," Headings "),R.Qb(),R.Rb(4,"div",3),R.Rb(5,"p"),R.xc(6,"Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."),R.Qb(),R.Rb(7,"table",4),R.Rb(8,"thead"),R.Rb(9,"tr"),R.Rb(10,"th"),R.xc(11,"Heading"),R.Qb(),R.Rb(12,"th"),R.xc(13,"Example"),R.Qb(),R.Qb(),R.Qb(),R.Rb(14,"tbody"),R.Rb(15,"tr"),R.Rb(16,"td"),R.Rb(17,"p"),R.Rb(18,"code",5),R.xc(19,"<h1></h1>"),R.Qb(),R.Qb(),R.Qb(),R.Rb(20,"td"),R.Rb(21,"span",6),R.xc(22,"h1. Bootstrap heading"),R.Qb(),R.Qb(),R.Qb(),R.Rb(23,"tr"),R.Rb(24,"td"),R.Rb(25,"p"),R.Rb(26,"code",5),R.xc(27,"<h2></h2>"),R.Qb(),R.Qb(),R.Qb(),R.Rb(28,"td"),R.Rb(29,"span",7),R.xc(30,"h2. Bootstrap heading"),R.Qb(),R.Qb(),R.Qb(),R.Rb(31,"tr"),R.Rb(32,"td"),R.Rb(33,"p"),R.Rb(34,"code",5),R.xc(35,"<h3></h3>"),R.Qb(),R.Qb(),R.Qb(),R.Rb(36,"td"),R.Rb(37,"span",8),R.xc(38,"h3. Bootstrap heading"),R.Qb(),R.Qb(),R.Qb(),R.Rb(39,"tr"),R.Rb(40,"td"),R.Rb(41,"p"),R.Rb(42,"code",5),R.xc(43,"<h4></h4>"),R.Qb(),R.Qb(),R.Qb(),R.Rb(44,"td"),R.Rb(45,"span",9),R.xc(46,"h4. Bootstrap heading"),R.Qb(),R.Qb(),R.Qb(),R.Rb(47,"tr"),R.Rb(48,"td"),R.Rb(49,"p"),R.Rb(50,"code",5),R.xc(51,"<h5></h5>"),R.Qb(),R.Qb(),R.Qb(),R.Rb(52,"td"),R.Rb(53,"span",10),R.xc(54,"h5. Bootstrap heading"),R.Qb(),R.Qb(),R.Qb(),R.Rb(55,"tr"),R.Rb(56,"td"),R.Rb(57,"p"),R.Rb(58,"code",5),R.xc(59,"<h6></h6>"),R.Qb(),R.Qb(),R.Qb(),R.Rb(60,"td"),R.Rb(61,"span",11),R.xc(62,"h6. Bootstrap heading"),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Rb(63,"div",1),R.Rb(64,"div",2),R.xc(65," Headings "),R.Qb(),R.Rb(66,"div",3),R.Rb(67,"p"),R.Rb(68,"code",5),R.xc(69,".h1"),R.Qb(),R.xc(70," through "),R.Rb(71,"code",5),R.xc(72,".h6"),R.Qb(),R.xc(73," classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."),R.Qb(),R.Rb(74,"div",12),R.Rb(75,"p",6),R.xc(76,"h1. Bootstrap heading"),R.Qb(),R.Rb(77,"p",7),R.xc(78,"h2. Bootstrap heading"),R.Qb(),R.Rb(79,"p",8),R.xc(80,"h3. Bootstrap heading"),R.Qb(),R.Rb(81,"p",9),R.xc(82,"h4. Bootstrap heading"),R.Qb(),R.Rb(83,"p",10),R.xc(84,"h5. Bootstrap heading"),R.Qb(),R.Rb(85,"p",11),R.xc(86,"h6. Bootstrap heading"),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Rb(87,"div",1),R.Rb(88,"div",2),R.xc(89," Display headings "),R.Qb(),R.Rb(90,"div",3),R.Rb(91,"p"),R.xc(92,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),R.Rb(93,"strong"),R.xc(94,"display heading"),R.Qb(),R.xc(95,"\u2014a larger, slightly more opinionated heading style."),R.Qb(),R.Rb(96,"div",13),R.Rb(97,"table",4),R.Rb(98,"tbody"),R.Rb(99,"tr"),R.Rb(100,"td"),R.Rb(101,"span",14),R.xc(102,"Display 1"),R.Qb(),R.Qb(),R.Qb(),R.Rb(103,"tr"),R.Rb(104,"td"),R.Rb(105,"span",15),R.xc(106,"Display 2"),R.Qb(),R.Qb(),R.Qb(),R.Rb(107,"tr"),R.Rb(108,"td"),R.Rb(109,"span",16),R.xc(110,"Display 3"),R.Qb(),R.Qb(),R.Qb(),R.Rb(111,"tr"),R.Rb(112,"td"),R.Rb(113,"span",17),R.xc(114,"Display 4"),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Rb(115,"div",1),R.Rb(116,"div",2),R.xc(117," Inline text elements "),R.Qb(),R.Rb(118,"div",3),R.Rb(119,"p"),R.xc(120,"Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a "),R.Rb(121,"strong"),R.xc(122,"display heading"),R.Qb(),R.xc(123,"\u2014a larger, slightly more opinionated heading style."),R.Qb(),R.Rb(124,"div",12),R.Rb(125,"p"),R.xc(126,"You can use the mark tag to "),R.Rb(127,"mark"),R.xc(128,"highlight"),R.Qb(),R.xc(129," text."),R.Qb(),R.Rb(130,"p"),R.Rb(131,"del"),R.xc(132,"This line of text is meant to be treated as deleted text."),R.Qb(),R.Qb(),R.Rb(133,"p"),R.Rb(134,"s"),R.xc(135,"This line of text is meant to be treated as no longer accurate."),R.Qb(),R.Qb(),R.Rb(136,"p"),R.Rb(137,"ins"),R.xc(138,"This line of text is meant to be treated as an addition to the document."),R.Qb(),R.Qb(),R.Rb(139,"p"),R.Rb(140,"u"),R.xc(141,"This line of text will render as underlined"),R.Qb(),R.Qb(),R.Rb(142,"p"),R.Rb(143,"small"),R.xc(144,"This line of text is meant to be treated as fine print."),R.Qb(),R.Qb(),R.Rb(145,"p"),R.Rb(146,"strong"),R.xc(147,"This line rendered as bold text."),R.Qb(),R.Qb(),R.Rb(148,"p"),R.Rb(149,"em"),R.xc(150,"This line rendered as italicized text."),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Rb(151,"div",1),R.Rb(152,"div",2),R.xc(153," Description list alignment "),R.Qb(),R.Rb(154,"div",3),R.Rb(155,"p"),R.xc(156,"Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a "),R.Rb(157,"code",5),R.xc(158,".text-truncate"),R.Qb(),R.xc(159," class to truncate the text with an ellipsis."),R.Qb(),R.Rb(160,"div",12),R.Rb(161,"dl",18),R.Rb(162,"dt",19),R.xc(163,"Description lists"),R.Qb(),R.Rb(164,"dd",20),R.xc(165,"A description list is perfect for defining terms."),R.Qb(),R.Rb(166,"dt",19),R.xc(167,"Euismod"),R.Qb(),R.Rb(168,"dd",20),R.Rb(169,"p"),R.xc(170,"Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."),R.Qb(),R.Rb(171,"p"),R.xc(172,"Donec id elit non mi porta gravida at eget metus."),R.Qb(),R.Qb(),R.Rb(173,"dt",19),R.xc(174,"Malesuada porta"),R.Qb(),R.Rb(175,"dd",20),R.xc(176,"Etiam porta sem malesuada magna mollis euismod."),R.Qb(),R.Rb(177,"dt",21),R.xc(178,"Truncated term is truncated"),R.Qb(),R.Rb(179,"dd",20),R.xc(180,"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."),R.Qb(),R.Rb(181,"dt",19),R.xc(182,"Nesting"),R.Qb(),R.Rb(183,"dd",20),R.Rb(184,"dl",18),R.Rb(185,"dt",22),R.xc(186,"Nested definition list"),R.Qb(),R.Rb(187,"dd",23),R.xc(188,"Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb(),R.Qb())},encapsulation:2}),n),data:{title:"Typography"}}]}],p=((r=function e(){b(this,e)}).\u0275fac=function(b){return new(b||r)},r.\u0275mod=R.Jb({type:r}),r.\u0275inj=R.Ib({imports:[[l.g.forChild(Q)],l.g]}),r),h=((a=function e(){b(this,e)}).\u0275fac=function(b){return new(b||a)},a.\u0275mod=R.Jb({type:a}),a.\u0275inj=R.Ib({imports:[[c.c,p]]}),a)}}])}();