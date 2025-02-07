function JumpPage() {
    var sureTick = document.getElementById('agreement');
    var sureAccount = document.getElementById('UserAccount').value.trim();
    var surePassword = document.getElementById('UserPassword').value.trim()
    if (sureTick.checked && sureAccount !== '' && surePassword !== '') {
        window.open("https://www.google.com/", '_blank');   //替换URL
    }
    else if (sureAccount !== '' && surePassword !== '') {
        alert("请勾选‘同意《此网站协议》");
    }
    else if (sureAccount !=='' && sureTick.checked) {
        alert("请输入密码");
    }
    else if (surePassword !== '' && sureTick.checked) {
        alert("请填写账号")
    }
    else {
        alert("请认真填写信息！")
    }

}