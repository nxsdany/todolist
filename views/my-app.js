Framework7.use(Framework7Vue);
new Vue({
	el: '#app',
	data() {
		return {
			f7params: {
				name: 'My task',
				id: 'com.mytask.dev',
			}
		};
	},
	methods: {
		addTask:function(){
			axios.post('/app.js',{
				methods: 'addTask',
				task: event.target.value
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		taskEdit:function(){
			this.$f7.dialog.alert('task '+this.getTask(event)+' edit');
		},
		markTask:function(){
			this.$f7.dialog.alert('task '+this.getTask(event)+' mark');
		},
		sendArc:function(){
			this.$f7.dialog.alert('task '+this.getTask(event)+' send arc');
		},
		getTask:function(a){
			return a.target.parentElement.parentElement.getAttribute('task');
		}
	}
})