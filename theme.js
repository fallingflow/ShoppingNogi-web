function changeTheme(){
    let theme = document.getElementById('navigator-theme-text')
    let themeText = theme.innerText

    if (themeText == '밝은 모드로'){
        theme.innerText = '다크 모드로'

        $('#header').css('background', 'linear-gradient(90deg, #F09319, #ABBA7C)')
        $('#header').css('background-color', '')

        $('#container').css('background-color', '#fff')

        $('#navigator').css('background-color', '#fff')
        $('#navigator').css('color', '#000')
        $('#navigator').css('border', '1px solid #ccc')

        // TODO: 라이트 화면일 때 hover 효과 색상 변경
        $('.submenu:hover').css('background-color', '#ccc')

        $('#container').css('background-color', '#fff')
        $('#content').css('background-color', '#fff')
        $('#content').css('border', '1px solid #ccc')

        $('#content th, td').css('border-bottom', '1px solid #ccc')
        $('#item-list').css('color', '#000')

        $('#paging').css('color', '#000')
    }
    else{
        theme.innerText = '밝은 모드로'

        $('#header').css('background-color', '#2e3033')
        $('#header').css('background', '')
        $('#header').css('color', '#ffffff')

        $('#navigator').css('background-color', '#1c1d1f')
        $('#navigator').css('color', '#fff')
        $('#navigator').css('border', '1px solid #444')

        $('#container').css('background-color', '#000')
        $('#content').css('background-color', '#1c1d1f')
        $('#content').css('border', '1px solid #444')

        $('.submenu:hover').css('background-color', 'hsla(0,0%,100%,.1)')

        $('#content th, td').css('border-bottom', '1px solid #444')
        $('#item-list').css('color', '#fff')

        $('#paging').css('color', '#fff')
    }
}

$(document).ready(function () {
    $('#navigator-theme').click(function(){
        changeTheme()
    })
})