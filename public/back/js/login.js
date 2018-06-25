$(function(){

  









//
  $('#form').bootstrapValidator({
    //配置图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    // 指定校验字段
    fields: {
      username: {
        // 配置校验规则
        validators: {
          // 配置非空校验
          notEmpty: {
            message: "用户名不能为空"
          },
          // 配置长度校验
          stringLength: {
            min: 2,
            max: 6,
            message: "用户名长度必须在 2-6位"
          }
        }
      },
      password: {
        // 配置校验规则
        validators: {
          // 配置非空校验
          notEmpty: {
            message: "密码不能为空"
          },
          // 配置长度校验
          stringLength: {
            min: 6,
            max: 12,
            message: "密码长度必须在 6-12位"
          }
        }
      }
    }
  });

//验证表单的密码和账户是否是有效的
  $("#form").on('success.form.bv', function (e) {
    //阻止默认的表单提交
    e.preventDefault();
    //使用ajax提交逻辑
    $.ajax ({
      type:"post",
      url:"/employee/employeeLogin",
      //表单序列化提交数据
      data:$("#form").serialize(),
      datatype:"json",
      success:function(info){
        console.log(info);
        //判断,若请求成功,则直接跳转到首页,
        //通过后台打印出的结果,可得,若用户名不存在,返回的是1000,若密码错误,则返回的是1001
        if(info.success){
          // setInterval(function(){
          //   location.href="./index.html";
          // },2000)   
          location.href="index.html";
        }else{
          if(info.error ===1000 ){
            alert("用户名不存在");
          }else if(info.error ===1001){
            alert("密码错误");
          }
        }
      }

    })
});

//实现重置按钮的功能
$('[type="reset"]').on('click',function(){
  $('form').data('bootstrapValidator').resetForm();
})

})