var tab_list = document.querySelector(".tab_list");
			var lis = tab_list.querySelectorAll("li");
			var items = document.querySelectorAll(".item");
			
			//为li设置属性
			for (var i = 0; i < lis.length; i++) {
				lis[i].setAttribute("index",i);
				lis[i].onclick = function() {

					//切换菜单
					for (var i = 0; i < lis.length; i++) {
						lis[i].className = "";
					}
					this.className = "current";
					
					//处理内容
					var index = this.getAttribute("index");
					for (var i = 0; i < items.length; i++) {
						items[i].style.display = "none";
					}
					items[index].style.display = "block";
				}
			}