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
			var value=event.target.value;
			if (value)
				this.ajax({message:{text:value}})
		},
		markTask:function(){
			this.$f7.dialog.alert('task '+this.getTask(event)+' mark');
		},
		sendArc:function(){
			this.ajax('sendArc',this.getTask(event))
			this.$f7.dialog.alert('task '+this.getTask(event)+' send arc');
		},
		taskEdit:function(){
			const self = this;
			if (!self.popup) {
				self.popup = self.$f7.popup.create({
					content: `
						<div class="popup">
							<div class="page">
								<div class="navbar">
									<div class="navbar-inner">
										<div class="title">Редактирование задачи</div>
										<div class="right"><a href="#" class="link popup-close">Отмена</a></div>
									</div>
								</div>
								<div class="page-content">
									<div class="block">
										<p>заготовачка для шаблончика с бека</p>
									</div>
								</div>
							</div>
						</div>
					`.trim(),
				});
				}
				self.popup.open();
			},
		getTask:function(a){
			return a.target.parentElement.parentElement.getAttribute('task');
		},
		ajax:function(params){
			axios.post('/app.js',params)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
})