 window.onload=function(){
	function yid(){
		let box=document.querySelector('.bannerbanner')
		let imgs=document.querySelectorAll('.bannertu')
		let circles=document.querySelectorAll('.lunbodian')
//		console.log(circles)
		let left=document.querySelector('.zuojiantou')
		let right=document.querySelector('.youjiantou')
		let next=now=0;
		let t;
		let flag;
		function fn1(){
			next++;
			if(next==imgs.length){
				next=0;
			}
			imgs[now].style.left='0';
			imgs[next].style.left='740px';
			animate(imgs[now],{left:-740},1000)
			animate(imgs[next],{left:0},1000,function(){
				for(let i=0;i<imgs.length;i++){
					circles[i].style.background=''
				}
				circles[now].style.background='red'
				flag=true;
			})
				now=next;
		}
		function fn2(){
			next--;
			if(next<0){
				next=imgs.length-1;
			}
			imgs[now].style.left='0'
			imgs[next].style.left='-740px'
			animate(imgs[now],{left:740},1000)
			animate(imgs[next],{left:0},1000,function(){
				for(let i=0;i<imgs.length;i++){
					circles[i].style.background=''
				}
					circles[now].style.background='red'
					flag=true;
			})
			now=next;
		}
		right.onclick=function(){
			if(flag){
				flag=false
				fn1()
		}
	}		
		left.onclick=function(){
			if(flag){
				flag=false;
				fn2()
			}
		}
		box.onmouseenter=function(){
			clearInterval(t)
		}
		box.onmouseleave=function(){
			t=setInterval(fn1,2000)
		}
		for(let i=0;i<imgs.length;i++){
			circles[i].onclick=function(){
			if(flag){
				flag=false;
				if(i==now){
						flag=true;
						return}
				if(i>now){
					imgs[now].style.left=0;
					imgs[i].style.left='740px'
					animate(imgs[i],{left:0},1000)
					animate(imgs[now],{left:-740},1000,function(){
						flag=true;
					})
				}
				if(i<now){
					imgs[now].style.left=0;
					imgs[i].style.left='-740px'
					animate(imgs[now],{left:740},1000)
					animate(imgs[i],{left:0},1000,function(){
						flag=true;
					})
				}
			
				for(let j=0;j<imgs.length;j++){
					circles[j].style.background=''
				}
				circles[i].style.background='red'
					now=next=i;
			}
			}
		
		}
		t=setInterval(fn1,2000)	
	}
		yid()
		
		
		
		
	let navlist1=document.getElementsByClassName("navlist1")[1]
	let shangdian=document.getElementsByClassName("shangdian")[0]
	// console.log(shangdian)
	navlist1.onmouseenter=function(){
		shangdian.style.display="block"
	}

	navlist1.onmouseleave=function(){
		shangdian.style.display="none"
	}
	let navlist2=document.getElementsByClassName("navlist2")[0]
	let wode=document.getElementsByClassName("wode")[0]
	// console.log(wode)
	navlist2.onmouseenter=function(){
		wode.style.display="block"
	}
	navlist2.onmouseleave=function(){
		wode.style.display="none"
	}
	let navlist3=document.getElementsByClassName("navlist3")[0]
	let yeting=document.getElementsByClassName("yeting")[0]
	// console.log(yeting)
	navlist3.onmouseenter=function(){
		yeting.style.display="block"
	}
	navlist3.onmouseleave=function(){
		yeting.style.display="none"
	}
	let navlist4=document.getElementsByClassName("navlist4")[0]
	let yuzhi=document.getElementsByClassName("yuzhi")[0]
	// console.log(yeting)
	navlist4.onmouseenter=function(){
		yuzhi.style.display="block"
	}
	navlist4.onmouseleave=function(){
		yuzhi.style.display="none"
	}
	
		function ewm(){
			let shadow=document.querySelector('.header-right li:nth-child(2)>a')
			let box=document.querySelector('.ewm')
			let btn=document.querySelectorAll('.header-right li')
			btn[1].onmouseenter=function(){
				box.style.display='block'
				shadow.classList.add('boxshadow')
			}
			btn[1].onmouseleave=function(){
				box.style.display='none'
				shadow.classList.remove('boxshadow')
			}
		}
		ewm()
			
		function jz(){
			let max=document.querySelector('body')	
			let box=document.querySelector('.jz')
			let ss=max.firstElementChild
//			let max1=max.removeChild(ss)
			let btns=document.querySelector('.sousuo-left-city')
			let flag=true;
			let flag1=false;
			console.log(1)
			btns.onclick=function(){
				if(flag){
					flag=false;
					animate(box,{width:440,height:60},0,function(){
						flag1=true;
					})
				}
				
			}
			max.onclick=function(){			
				if(flag1){	
					flag1=false;
					animate(box,{width:0,height:0},0,function(){
						flag=true;
					})
					
				}
			}
		}
		jz()
		function qian(){
			let x=document.querySelectorAll('.banner-jiagexuanxiang a')
//			x.forEach(function(val,index){
//				val.style.background=''
//				val.onclick=function(){
//					val.style.background='red'
//				}
//			})
			for(let i=0;i<x.length;i++){
				x[i].onclick=function(){
					for(let j=0;j<x.length;j++){
						x[j].style.background=''
					}
					x[i].style.background='#E40077'
				}
				
			}
		}
		qian()
		
		
		
//		节点轮播start
	function jiedian(){
		let max=document.querySelector('.lunbo')
		let box=document.querySelector('.lunboneirong')
		let imgs=document.querySelectorAll('.lunboneirong a')
		let last=box.lastElementChild;
		let left=box.nextElementSibling;
		let right=left.nextElementSibling;
		let width=parseInt(getComputedStyle(imgs[0],null).width)
		let flag=true;
//		console.log(first)
		function move(){
			animate(box,{left:-width+10},1000,function(){
				let first=box.firstElementChild;
				box.style.left='15px';		
				box.appendChild(first)
				flag=true;
				
			})
		}

		function move1(){
				let first=box.firstElementChild;
				let last=box.lastElementChild				
				box.style.left=-(width-8)+'px'
				box.insertBefore(last,first)
				animate(box,{left:15},1000,function(){
//				box.style.left=-width+3+'px'			
				flag=true;
			})

		}
		let t=setInterval(move,2000)	
		right.onclick=function(){
			if(flag){
				flag=false;
				move()
			}
			
		}
		left.onclick=function(){
			if(flag){
				flag=false;
				move1()	
			}		
		}
		max.onmouseenter=function(){
			clearInterval(t)
		}
		max.onmouseleave=function(){ 
			clearInterval(t)
			t=setInterval(move,2000)
		}
		
	}
	jiedian()
	function news(){
		let maxbox=document.querySelector('.news')
		let box=document.querySelector('.news-center')
		let nrs=document.querySelectorAll('.new-box ul')
		let left=document.querySelector('.news-right li:first-child')
		let right=document.querySelector('.news-right li:last-child')
		let width=nrs[0].offsetWidth
		let flag=true;
//		console.log(maxbox,box,nrs,left,right)
		function move(){
			animate(box,{left:-width},0,function(){
				let first=box.firstElementChild;
				box.appendChild(first)
				box.style.left=0;
				flag=true;
			})
		}
		function move1(){
			box.style.left=-width+'px'
			animate(box,{left:0},0,function(){
				box.style.left=-width+'px'
				let first=box.firstElementChild;
				let last=box.lastElementChild;
				box.insertBefore(last,first)
				flag=true;
			})
		}
		let t=setInterval(move,2000)
		maxbox.onmouseenter=function(){
			clearInterval(t)
		}
		maxbox.onmouseleave=function(){
			t=setInterval(move,2000)
		}
		right.onclick=function(){
			if(flag){
				flag=false
				move()
			}
		}
		left.onclick=function(){
			if(flag){
				flag=false
				move1()
			}
		}
	}
	news()
	
}
 

