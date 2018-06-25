//验证是否又登录
if(location.href.indexOf('login.html')===-1){
  $.ajax({
    type:"get",
    url:"/employee/checkRootLogin",
    datatype:"json",
    success:function(info){
      if(info.error ===400){
        location.href = "login.html";
      }
      if ( info.success ) {
        // 当前用户已登录, 不需要拦截, 啥事都不用干, 让用户访问页面
        console.log( "当前用户已登陆" );
      }
    }
  })
}




//进度条
$(document).ajaxStart(function () { 
  NProgress.start();
 })
$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },1000)
})


//点击分类标签,让一级和二级分类显示
$(function(){
  $(".lt_aside .classify").click(function(){
    //验证点击事件是否成立
    console.log("哈哈哈");
    $(".lt_aside .child").stop().slideToggle();
  })
})

//左侧侧边栏隐藏
$(function(){
  $(".pull-left").click(function(){
    // console.log('hahah')
    $('.lt_aside').toggleClass('hidemenu');
    // $('.aside_title').toggleClass('hidemenu');
    // $('.aside_user').toggleClass('hidemenu');
    $('.main_top').toggleClass('hidemenu');
    // $('.container-fluid').toggleClass('hidemenu');
    $('.lt_main').toggleClass("hidemenu");
  })
})


//点击退出按钮,显示模态框
$(function(){
  $('.pull-right').click(function(){
    console.log('显示模态框');
    // $('.modal').style(show);
    $('#myModal').modal('show');
  })
})

//点击模态框中的退出按钮
$('.btn-primary').click(function(){
  console.log('退出')
  $.ajax({
    type:"get",
    url:"/employee/employeeLogout",
    dataType:"json",
    success:function(info){
      if ( info.success ) {
        // 跳转到登录页面
        location.href = "login.html";
      }
    }
  })
})
