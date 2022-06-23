// 返回顶部按钮
;(function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return
  }

  var isShow = false,
    lock = false
  var $btn = $('.back-to-top')

  $(document).scroll(function () {
    if (lock) return

    if ($(this).scrollTop() >= 380) {
      if (!isShow) $btn.addClass('load')
      isShow = true
    } else {
      if (isShow) {
        $btn.removeClass('load')
        isShow = false
      }
    }
  })

  $btn.click(function () {
    lock = true
    $btn.addClass('ani-leave')

    $('html, body').animate({ scrollTop: 0 }, 800)

    setTimeout(function () {
      $btn.removeClass('ani-leave').addClass('leaved')
    }, 390)

    setTimeout(function () {
      $btn.addClass('ending')
    }, 120)

    setTimeout(function () {
      $btn.removeClass('load')
    }, 1500)

    setTimeout(function () {
      lock = false
      isShow = false
      $btn.removeClass('leaved ending')
    }, 2000)
  })
})()

// 点击锚链接平滑滚动到视图
;(function () {
  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault()
    var id = $(this).attr('href')
    var $el = $(id)
    if ($el.length > 0)
      $el[0].scrollIntoView({
        behavior: 'smooth',
      })
  })
})()

// canvases
;(function () {})()
