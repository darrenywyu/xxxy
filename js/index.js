$(document).ready(function() {
	var arraymonth=new Array()
	var arrayday=new Array()
	$(".newscontent div").each(function(i){
	 var vlaue=$(this).text();
	 divide=vlaue.split("-");
     arraymonth[i]=divide[0]+"��"+divide[1]+"��";
	 arrayday[i]=divide[2]+"��";
	 $(this).css({display:'none'});
    });
	$(".newstime .month1").each(function(i){
		$(this).html(arraymonth[i]);
		});
	$(".newstime .day").each(function(i){
		$(this).html(arrayday[i]);
		});
	//////
var myDate = new Date();
var shuzi=myDate.getSeconds(); 
	switch(shuzi%3){
		case 0: $(".infobg").css({background:'url(./images/infobg2.jpg) no-repeat'});break;
		case 1: $(".infobg").css({background:'url(./images/infobg3.jpg) no-repeat'});break;
		case 2: $(".infobg").css({background:'url(./images/infobg4.jpg) no-repeat'});break;
		}
	/////
	var listweihzi=$("#dangqinaweihzi").find("a");
	var listname=listweihzi.eq(2).html();
	$(".titlename").html(listname);
	//////
	flag=0;
	var int=setInterval("dsq(flag)",5000)
	var bar=$(".tabbar").find("p");
	bar.eq(0).click(function(){
		clearInterval(int);
		$(".picnews").animate({marginLeft:"0%"});
		$(this).removeClass('barunactive');
		$(this).addClass('baractive');
		bar.eq(1).removeClass('baractive');
		bar.eq(1).addClass('barunactive');
		flag=1;
		int=setInterval("dsq(flag)",5000);
		});
	bar.eq(1).click(function(){
		clearInterval(int);
		$(".picnews").animate({marginLeft:"-100%"});
		$(this).removeClass('barunactive');
		$(this).addClass('baractive');
		bar.eq(0).removeClass('baractive');
		bar.eq(0).addClass('barunactive');
		flag=0;
		int=setInterval("dsq(flag)",5000);
		})
	///////////ͼƬ�����ֲ�����//////////
	$
});
function dsq(id){
	var bar=$(".tabbar").find("p");
	if(id==0){
	   $(".picnews").animate({marginLeft:"-100%"});
	   	bar.eq(1).removeClass('barunactive');
		bar.eq(1).addClass('baractive');
		bar.eq(0).removeClass('baractive');
		bar.eq(0).addClass('barunactive');
	  	flag=1;
		}
	if(id==1){
		$(".picnews").animate({marginLeft:"0%"});
		bar.eq(0).removeClass('barunactive');
		bar.eq(0).addClass('baractive');
		bar.eq(1).removeClass('baractive');
		bar.eq(1).addClass('barunactive');
		flag=0;
		}
	}
//��Ϊ��ҳ�ͼ�Ϊ�ղصĴ��뿪ʼ
function SetHome(obj){ 
	try{ 
		obj.style.behavior='url(#default#homepage)';obj.setHomePage('https://www.iyuxy.com/'); 
		} 
	catch(e){ 
		if(window.netscape) { 
						try { 
							netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
							} 
	catch (e) { 
				alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�"); 
				} 
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
	prefs.setCharPref('browser.startup.homepage','https://www.iyuxy.com/'); 
	}else{ 
			alert("�����������֧�֣��밴�����沽�������\n1.����������á�\n2.���������ҳ��\n3.���룺"+'https://www.iyuxy.com/'+"���ȷ����"); 
			} 
		} 
	} 
function shoucang(){ 
	try{ 
		window.external.addFavorite('https://www.iyuxy.com/','��С��'); 
		} 
	catch (e){ 
			try{ 
				window.sidebar.addPanel('https://www.iyuxy.com/','��С��', ""); 
				} 
	catch (e){ 
			alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������"); 
			} 
		} 
	} 
//��Ϊ��ҳ�ͼ�Ϊ�ղصĴ����