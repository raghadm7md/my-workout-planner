(this["webpackJsonpmy-workout-planner"]=this["webpackJsonpmy-workout-planner"]||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},57:function(e,t){},66:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(1),i=s.n(n),o=s(29),a=s.n(o),r=(s(37),s(2)),l=s(3),d=s(16),h=s(5),b=s(4),p=(s(38),s(30)),j=s.n(p),m=s(12),u=s(14),x=s(6),g=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).handelClike=function(e){e.preventDefault(),c.props.remove(c.props.Ex_Abs)},c.MarkedDoneExercise=function(){c.props.add(c.state.Exercise,c.props.num)},c.state={Exercise:c.props.addToHistory},c}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"Ex",children:Object(c.jsxs)("div",{class:"container",children:[Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("h2",{children:this.props.Ex_Abs})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("img",{src:this.props.image,width:150})})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Reps = ",this.props.set]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Sets = ",this.props.rep]})}),Object(c.jsx)("div",{class:"col"}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{onClick:this.handelClike,class:"btn btn-secondary",children:"delete"}),Object(c.jsx)("button",{onClick:this.EditAbsExercises,class:"btn btn-secondary",children:"Edit"}),Object(c.jsx)("button",{onClick:this.MarkedDoneExercise,class:"btn btn-primary",children:this.state.Exercise.done?"yaaaaa!!":"Done it "})]})]})]})})}}]),s}(n.Component),O=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).removeItem=function(e){var t=c.state.Abs;console.log(t);for(var s=0;s<t.length;s++)t[s].name===e&&(t.splice(s,1),c.setState({Abs:t}))},c.AddExercise=function(e,t){var s=c.state.Abs;s[t].done=!0,c.setState({Abs:s})},c.removeAll=function(){c.setState({Abs:[]})},c.state={Abs:c.props.Abs},c}return Object(l.a)(s,[{key:"render",value:function(){var e=this;console.log(this.state.Abs);var t=this.state.Abs.map((function(t,s){return Object(c.jsx)(g,{Ex_Abs:t.name,num:s,rep:t.reps,set:t.sets,image:t.image,remove:e.removeItem,addToHistory:t,add:e.AddExercise},s)}));return Object(c.jsxs)("div",{children:[t,Object(c.jsx)("button",{onClick:this.removeAll,class:"btn btn-secondary",children:"Delete all Exercises"})]})}}]),s}(n.Component),v=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).Updateweight=function(t){t.preventDefault(),e.props.Update(e.state.weight),e.props.hide()},e.state={weight:""},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{class:"col-form-label",children:"Weight :"}),Object(c.jsx)("input",{class:"form-control",onChange:function(t){e.setState({weight:t.target.value})},value:this.state.weight})]})}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{onClick:this.props.hide,type:"button",class:"btn btn-secondary",children:"Cancel"}),Object(c.jsx)("button",{onClick:this.Updateweight,type:"button",class:"btn btn-primary",children:"Update"})]})]})}}]),s}(n.Component),f=(s(57),function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).EditAbsExercises=function(){c.setState({showComponent:!0}),console.log(c.state.showComponent)},c.hide=function(){c.setState({showComponent:!1}),console.log(c.state.showComponent)},c.UpdateEx_weight=function(e){c.setState({weight:e}),console.log(e),c.props.edit(e,c.props.Ex_Arms)},c.handelClike=function(e){e.preventDefault(),c.props.remove(c.props.Ex_Arms)},c.MarkedDoneExercise=function(){c.props.add(c.props.num)},c.state={showComponent:!1,weight:c.props.weight,Exercise:c.props.addToHistory,isChecked:!1},c}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"Ex",children:Object(c.jsxs)("div",{class:"container",children:[this.state.showComponent?Object(c.jsx)(v,{hide:this.hide,Update:this.UpdateEx_weight}):null,Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("h2",{children:this.props.Ex_Arms})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("img",{src:this.props.image,width:150})})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Reps= ",this.props.set]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Sets= ",this.props.rep]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["weight= ",this.props.weight]})})]}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{onClick:this.handelClike,class:"btn btn-secondary",children:"delete"}),Object(c.jsx)("button",{onClick:this.EditAbsExercises,class:"btn btn-secondary",children:"Edit"}),Object(c.jsx)("button",{onClick:this.MarkedDoneExercise,class:"btn btn-primary",children:this.state.Exercise.done?"yaaaaa!!":"Done it "})]})]})})}}]),s}(n.Component)),w=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).removeItem=function(e){var t=c.state.Arms;console.log(t);for(var s=0;s<t.length;s++)t[s].name===e&&(t.splice(s,1),c.setState({Arms:t}))},c.EditItem=function(e,t){var s=c.state.Arms;console.log(s);for(var n=0;n<s.length;n++)s[n].name===t&&function(){var t=s[n];t.weight=e,s.findIndex((function(e,n){e===t&&(s.splice(n,1,t),c.setState({Arms:s}))})),console.log(s)}()},c.AddExercise=function(e){var t=c.state.Arms;t[e].done=!0,c.setState({Arms:t})},c.removeAll=function(){c.setState({Arms:[]})},c.state={Arms:c.props.Arms},c}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.Arms.map((function(t,s){return Object(c.jsx)(f,{Ex_Arms:t.name,num:s,rep:t.reps,set:t.sets,image:t.image,weight:t.weight,remove:e.removeItem,edit:e.EditItem,addToHistory:t,add:e.AddExercise},s)}));return Object(c.jsxs)("div",{children:[t,Object(c.jsx)("button",{onClick:this.removeAll,class:"btn btn-secondary",children:"Delete all Exercises"})]})}}]),s}(n.Component),k=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).EditAbsExercises=function(){c.setState({showComponent:!0}),console.log(c.state.showComponent)},c.hide=function(){c.setState({showComponent:!1}),console.log(c.state.showComponent)},c.UpdateEx_weight=function(e){c.setState({weight:e}),console.log(e),c.props.edit(e,c.props.Ex_Back)},c.handelClike=function(e){e.preventDefault(),c.props.remove(c.props.Ex_Back)},c.MarkedDoneExercise=function(){c.props.add(c.props.num)},c.state={showComponent:!1,Exercise:c.props.addToHistory,weight:c.props.weight},c}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"Ex",children:Object(c.jsxs)("div",{class:"container",children:[this.state.showComponent?Object(c.jsx)(v,{hide:this.hide,Update:this.UpdateEx_weight}):null,Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("h2",{children:this.props.Ex_Back})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("img",{src:this.props.image,width:150})})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Reps= ",this.props.set]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Sets= ",this.props.rep]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["weight= ",this.props.weight]})})]}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{onClick:this.handelClike,class:"btn btn-secondary",children:"delete"}),Object(c.jsx)("button",{onClick:this.EditAbsExercises,class:"btn btn-secondary",children:"Edit"}),Object(c.jsx)("button",{onClick:this.MarkedDoneExercise,class:"btn btn-primary",children:this.state.Exercise.done?"yaaaaa!!":"Done it "})]})]})})}}]),s}(n.Component),E=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).EditItem=function(e,t){var s=c.state.back;console.log(s);for(var n=0;n<s.length;n++)s[n].name===t&&function(){var t=s[n];t.weight=e,s.findIndex((function(e,n){e===t&&(s.splice(n,1,t),c.setState({back:s}))})),console.log(s)}()},c.removeItem=function(e){var t=c.state.back;console.log(t);for(var s=0;s<t.length;s++)t[s].name===e&&(t.splice(s,1),c.setState({back:t}))},c.AddExercise=function(e){var t=c.state.back;t[e].done=!0,c.setState({back:t})},c.removeAll=function(){c.setState({back:[]})},c.state={back:c.props.back},c}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.back.map((function(t,s){return Object(c.jsx)(k,{Ex_Back:t.name,num:s,rep:t.reps,set:t.sets,image:t.image,weight:t.weight,remove:e.removeItem,edit:e.EditItem,addToHistory:t,add:e.AddExercise},s)}));return Object(c.jsxs)("div",{children:[t,Object(c.jsx)("button",{onClick:this.removeAll,class:"btn btn-secondary",children:"Delete all Exercises"})]})}}]),s}(n.Component),C=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).EditAbsExercises=function(){c.setState({showComponent:!0}),console.log(c.state.showComponent)},c.hide=function(){c.setState({showComponent:!1}),console.log(c.state.showComponent)},c.UpdateEx_weight=function(e){c.setState({weight:e}),console.log(e),c.props.edit(e,c.props.Ex_legs)},c.handelClike=function(e){e.preventDefault(),c.props.remove(c.props.Ex_legs)},c.MarkedDoneExercise=function(){c.props.add(c.props.num)},c.state={showComponent:!1,weight:c.props.weight,Exercise:c.props.addToHistory},c}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"Ex",children:Object(c.jsxs)("div",{class:"container",children:[this.state.showComponent?Object(c.jsx)(v,{hide:this.hide,Update:this.UpdateEx_weight}):null,Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("h2",{children:this.props.Ex_legs})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("img",{src:this.props.image,width:150})})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Reps= ",this.props.set]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Sets= ",this.props.rep]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["weight= ",this.props.weight]})})]}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{onClick:this.handelClike,class:"btn btn-secondary",children:"delete"}),Object(c.jsx)("button",{onClick:this.EditAbsExercises,class:"btn btn-secondary",children:"Edit"}),Object(c.jsx)("button",{onClick:this.MarkedDoneExercise,class:"btn btn-primary",children:this.state.Exercise.done?"yaaaaa!!":"Done it "})]})]})})}}]),s}(n.Component),A=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).removeItem=function(e){var t=c.state.legs;console.log(t);for(var s=0;s<t.length;s++)t[s].name===e&&(t.splice(s,1),c.setState({legs:t}))},c.EditItem=function(e,t){var s=c.state.legs;console.log(s);for(var n=0;n<s.length;n++)s[n].name===t&&function(){var t=s[n];t.weight=e,s.findIndex((function(e,n){e===t&&(s.splice(n,1,t),c.setState({legs:s}))})),console.log(s)}()},c.AddExercise=function(e){var t=c.state.legs;t[e].done=!0,c.setState({legs:t})},c.removeAll=function(){c.setState({legs:[]})},c.state={legs:c.props.legs},c}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.legs.map((function(t,s){return Object(c.jsx)(C,{Ex_legs:t.name,num:s,rep:t.reps,set:t.sets,image:t.image,weight:t.weight,remove:e.removeItem,edit:e.EditItem,addToHistory:t,add:e.AddExercise},s)}));return Object(c.jsxs)("div",{children:[t,Object(c.jsx)("button",{onClick:this.removeAll,class:"btn btn-secondary",children:"Delete all Exercises"})]})}}]),s}(n.Component),S=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).EditAbsExercises=function(){c.setState({showComponent:!0}),console.log(c.state.showComponent)},c.hide=function(){c.setState({showComponent:!1}),console.log(c.state.showComponent)},c.UpdateEx_weight=function(e){c.setState({weight:e}),console.log(e),c.props.edit(e,c.props.Ex_Chest)},c.handelClike=function(e){e.preventDefault(),c.props.remove(c.props.Ex_Chest)},c.MarkedDoneExercise=function(){c.props.add(c.props.num)},c.state={showComponent:!1,weight:c.props.weight,Exercise:c.props.addToHistory},c}return Object(l.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"Ex",children:[Object(c.jsxs)("div",{class:"container",children:[this.state.showComponent?Object(c.jsx)(v,{hide:this.hide,Update:this.UpdateEx_weight}):null,Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("h2",{children:this.props.Ex_Chest})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsx)("img",{src:this.props.image,width:150})})]}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Reps= ",this.props.set]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["Sets= ",this.props.rep]})}),Object(c.jsx)("div",{class:"col",children:Object(c.jsxs)("h4",{children:["weight= ",this.props.weight]})})]})]}),Object(c.jsxs)("div",{class:"modal-footer",children:[Object(c.jsx)("button",{onClick:this.handelClike,class:"btn btn-secondary",children:"delete"}),Object(c.jsx)("button",{onClick:this.EditAbsExercises,class:"btn btn-secondary",children:"Edit"}),Object(c.jsx)("button",{onClick:this.MarkedDoneExercise,class:"btn btn-primary",children:this.state.Exercise.done?"yaaaaa!!":"Done it "})]})]})}}]),s}(n.Component),y=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).removeItem=function(e){var t=c.state.chest;console.log(t);for(var s=0;s<t.length;s++)t[s].name===e&&(t.splice(s,1),c.setState({chest:t}))},c.EditItem=function(e,t){var s=c.state.chest;console.log(s);for(var n=0;n<s.length;n++)s[n].name===t&&function(){var t=s[n];t.weight=e,s.findIndex((function(e,n){e===t&&(s.splice(n,1,t),c.setState({chest:s}))})),console.log(s)}()},c.AddExercise=function(e){var t=c.state.chest;t[e].done=!0,c.setState({chest:t})},c.removeAll=function(){c.setState({chest:[]})},c.state={chest:c.props.chest},c}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.state.chest.map((function(t,s){return Object(c.jsx)(S,{Ex_Chest:t.name,num:s,rep:t.reps,set:t.sets,image:t.image,weight:t.weight,remove:e.removeItem,edit:e.EditItem,addToHistory:t,add:e.AddExercise},s)}));return Object(c.jsxs)("div",{children:[t,Object(c.jsx)("button",{onClick:this.removeAll,class:"btn btn-secondary",children:"Delete all Exercises"})]})}}]),s}(n.Component),_=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(c.jsx)(u.a,{children:Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)(u.b,{to:"/Abs",children:"Abs workout"}),Object(c.jsx)("span",{children:" || "}),Object(c.jsx)(u.b,{to:"/Arms",children:"Arms workout "}),Object(c.jsx)("span",{children:" || "}),Object(c.jsx)(u.b,{to:"/Legs",children:"Legs workout "}),Object(c.jsx)("span",{children:" || "}),Object(c.jsx)(u.b,{to:"/back",children:"Back workout "}),Object(c.jsx)("span",{children:" || "}),Object(c.jsx)(u.b,{to:"/chest",children:"Chest workout "}),Object(c.jsx)("hr",{className:"line"}),Object(c.jsx)("div",{class:"container",children:Object(c.jsxs)("div",{class:"row row-cols-2",children:[Object(c.jsxs)("div",{class:"col-8",children:[Object(c.jsx)(x.a,{path:"/Abs",render:function(t){return Object(c.jsx)(O,Object(m.a)(Object(m.a)({},t),{},{Abs:e.props.exercise.Abs}))}}),Object(c.jsx)(x.a,{path:"/Arms",render:function(t){return Object(c.jsx)(w,Object(m.a)(Object(m.a)({},t),{},{Arms:e.props.exercise.Arms}))}}),Object(c.jsx)(x.a,{path:"/legs",render:function(t){return Object(c.jsx)(A,Object(m.a)(Object(m.a)({},t),{},{legs:e.props.exercise.legs}))}}),Object(c.jsx)(x.a,{path:"/back",render:function(t){return Object(c.jsx)(E,Object(m.a)(Object(m.a)({},t),{},{back:e.props.exercise.back}))}}),Object(c.jsx)(x.a,{path:"/chest",render:function(t){return Object(c.jsx)(y,Object(m.a)(Object(m.a)({},t),{},{chest:e.props.exercise.chest}))}})]}),Object(c.jsxs)("div",{class:"col-4",children:[Object(c.jsx)("h3",{children:" - Qoute of the day - "}),Object(c.jsxs)("h4",{children:[' " ',this.props.Qoute,' " ']})]})]})})]})})}}]),s}(n.Component),D={Abs:[{name:"sit-up",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Sit-up_F_WorkoutLabs.png",sets:3,reps:15},{name:"alternate heel touches",image:"https://workoutlabs.com/wp-content/uploads/watermarked/Alternate_Heel_Touchers_F_WorkoutLabs.png",sets:3,reps:20},{name:"Cross body crunch",image:"https://i.pinimg.com/originals/97/80/d9/9780d99c3ea4762d450e9cbeb8740e2c.png",sets:3,reps:20},{name:"knee tucks",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Leg_Pull-In_Knee-up_F_WorkoutLabs.png",sets:3,reps:20},{name:"leg raises",image:"https://i.pinimg.com/474x/aa/bb/53/aabb53acb908333c0a643d5ae52ab705.jpg",sets:3,reps:20},{name:"Plank",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Plank_F_WorkoutLabs.png",sets:3,reps:20}],Arms:[{name:"Alternate Hammer Curl",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Static_Arm_Curl_F_WorkoutLabs.png",sets:3,reps:12,weight:"10 lbs"},{name:"Arm Tricep Kickbacks",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Bent_Over_Double_Arm_Tricep_Kickbacks-1.png",sets:3,reps:12,weight:"5 lbs"},{name:"Chair / Bench Tricep Dips",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Chair_Tricep_Dip_F_WorkoutLabs.png",sets:3,reps:12,weight:""},{name:"Two Arm Dumbbell Front Shoulder",image:"https://i.pinimg.com/originals/2e/15/11/2e1511ce61dbf7dccbf5f329d1c56226.png",sets:3,reps:12,weight:"5 lbs"},{name:"Flyes",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Two_Armed_Bent_Over_Flyes-1.png",sets:3,reps:12,weight:"5 lbs"},{name:"Seated Dumbbell Bicep Curls",image:"https://i.pinimg.com/originals/de/40/17/de4017b5eb0c3d117d1f1f8e1431f7c6.png",sets:3,reps:12,weight:"10 lbs"}],back:[{name:"Pull Downs",image:"https://i.pinimg.com/originals/54/61/90/5461903958f37755384a2043fc010c40.png",sets:3,reps:14,weight:"10 lbs"},{name:"Low Cable Back Rows",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Seated_Low_Cable_Row_F_WorkoutLabs.png",sets:3,reps:15,weight:"15 lbs"},{name:"One Arm Dumbbell Bench Rows",image:"https://i.pinimg.com/originals/6b/dd/dd/6bdddd23e7303b3acd4eab026c8b294f.png",sets:3,reps:20,weight:"20 lbs"},{name:"Bent-Over Rows",image:"https://www.simplygym.net/wp-content/uploads/2017/10/Two_Armed_Bent_Over_Row.png",sets:3,reps:15,weight:"15 lbs"}],chest:[{name:"Ball Chest Dumbbell Flyes",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Bosu_Ball_Dumbbell_Chest_Flyes.png",sets:3,reps:15,weight:"5 lbs"},{name:"Dumbbell Flat Bench Press",image:"https://i.pinimg.com/originals/e0/31/02/e03102aac424b370503af141645f5524.png",sets:3,reps:15,weight:"5 lbs"},{name:"Decline Bench Dumbbell Press",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Decline-_Dumbbell_Press_F_WorkoutLabs.png",sets:3,reps:15,weight:"5 lbs"}],legs:[{name:"Deadlift",image:"https://cdn-xi3mbccdkztvoept8hl.netdna-ssl.com/wp-content/uploads/watermarked/Romanian_Deadlift_F_WorkoutLabs.png",sets:3,reps:15,weight:"15 lbs"},{name:"Walking Lunges",image:"https://i.pinimg.com/originals/95/57/db/9557db03d4fe5d60da6080fe6fcd6e27.png",sets:3,reps:12,weight:"10 lbs"},{name:"Barbell Hip Thrusts",image:"https://i.pinimg.com/originals/2e/42/7e/2e427ef878cd2704c088f152ae7d7c2e.png",sets:4,reps:15,weight:"25 lbs"},{name:"Dumbbell Step-Ups",image:"https://workoutlabs.com/train/svg.php?id=31488&ext=png",sets:4,reps:20,weight:"10 lbs"},{name:"Barbell Squats",image:"https://i.pinimg.com/originals/36/0b/f2/360bf2a43639f2cdc93e53978b72e79e.png",sets:3,reps:15,weight:"20 lbs"}]},I=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).formSubmit=function(t){t.preventDefault();var s=e.state.ExerciseName,c=e.state.Sets,n=e.state.Reps,i=e.state.Weight,o=e.state.SelectedValue,a=e.state.exercise;console.log(a);var r={name:s,image:"",sets:c,reps:n,weight:i};if("Abs"===o){console.log(o),console.log(a);var l=e.state.exercise.Abs;l.unshift(r),e.setState({exercise:l})}else if("Arms"===o){console.log(o),console.log(a);var d=e.state.exercise.Arms;d.unshift(r),e.setState({exercise:d})}else if("back"===o){console.log(o),console.log(a);var h=e.state.exercise.back;h.unshift(r),e.setState({exercise:h})}else if("chest"===o){console.log(o),console.log(a);var b=e.state.exercise.chest;b.unshift(r),e.setState({exercise:b})}else if("legs"===o){console.log(o),console.log(a);var p=e.state.exercise.legs;p.unshift(r),e.setState({exercise:p})}e.setState({exercise:a}),e.setState({ExerciseName:""}),e.setState({Sets:""}),e.setState({Reps:""}),e.setState({Weight:""}),e.setState({SelectedValue:""})},e.state={exercise:D,quote:"",ExerciseName:"",Sets:"",Reps:"",Weight:"",SelectedValue:""},e.formSubmit=e.formSubmit.bind(Object(d.a)(e)),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en").then((function(t){console.log("RESPONSE: ",t),console.log("DATA: ",t.data);var s=t.data.quoteText;e.setState({quote:s})})).catch((function(e){console.log("ERR: ",e)}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"image1",src:"https://cdn.mos.cms.futurecdn.net/h2QrfCQi872ZEdKHP9qHgY-1200-80.jpg"}),Object(c.jsx)("div",{class:"top-left",children:Object(c.jsx)("h1",{children:"Welcome to your fitness journey"})}),Object(c.jsx)("img",{className:"image2",src:"https://images.firstpost.com/wp-content/uploads/2020/07/gym-shutterstock-640.jpg"})]}),Object(c.jsx)("div",{class:"container",children:Object(c.jsxs)("div",{class:"row row-cols-2 ",children:[Object(c.jsx)("div",{class:"col-3",children:Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"form",onSubmit:this.formSubmit,children:[Object(c.jsx)("h4",{children:" Add your workout HERE! "}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Exercise name: "}),Object(c.jsx)("input",{value:this.state.ExerciseName,type:"text",onChange:function(t){e.setState({ExerciseName:t.target.value})}}),Object(c.jsx)("label",{children:"Number of Sets: "}),Object(c.jsx)("input",{value:this.state.Sets,type:"text",onChange:function(t){e.setState({Sets:t.target.value})}}),Object(c.jsx)("label",{children:"Number of Reps: "}),Object(c.jsx)("input",{value:this.state.Reps,type:"text",onChange:function(t){e.setState({Reps:t.target.value})}}),Object(c.jsx)("label",{children:"How much of weight? "}),Object(c.jsx)("input",{value:this.state.Weight,type:"text",onChange:function(t){e.setState({Weight:t.target.value})}})]}),Object(c.jsx)("div",{className:"menu",children:Object(c.jsxs)("select",{value:this.state.SelectedValue,onChange:function(t){e.setState({SelectedValue:t.target.value})},children:[Object(c.jsx)("option",{value:"",children:"Select here"}),Object(c.jsx)("option",{value:"Arms",children:"Arms"}),Object(c.jsx)("option",{value:"Abs",children:"Abs"}),Object(c.jsx)("option",{value:"legs",children:"legs"}),Object(c.jsx)("option",{value:"back",children:"back"}),Object(c.jsx)("option",{value:"chest",children:"chest"})]})}),Object(c.jsx)("div",{class:"modal-footer",children:Object(c.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Submit"})})]})})}),Object(c.jsx)("div",{class:"col-9",children:Object(c.jsx)(_,{exercise:this.state.exercise,Qoute:this.state.quote})})]})})]})}}]),s}(n.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),c(e),n(e),i(e),o(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),T()}},[[66,1,2]]]);
//# sourceMappingURL=main.254aa720.chunk.js.map