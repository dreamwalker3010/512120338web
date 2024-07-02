$(document).ready(function() {
    // 建築B圖片顯示和隱藏
    $('#building-b').hover(
        function() {
            $('#popup-b').show();
        },
        function() {
            if (!$('#popup-b').hasClass('fixed')) {
                $('#popup-b').hide();
            }
        }
    );

    $('#building-b').click(function() {
        $('#popup-b').toggleClass('fixed');
    });

    // 建築C圖片顯示和隱藏
    $('#building-c').hover(
        function() {
            $('#popup-c').show();
        },
        function() {
            if (!$('#popup-c').hasClass('fixed')) {
                $('#popup-c').hide();
            }
        }
    );

    $('#building-c').click(function() {
        $('#popup-c').toggleClass('fixed');
    });

    // 平滑滾動函數
    function scrollToSection(sectionId) {
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 500);
    }

    // 將函數綁定到全局
    window.scrollToSection = scrollToSection;

    // 分頁按鈕（僅示例，需根據實際需求實現）
    $('.pagination-btn').on('click', function() {
        alert('切換圖片功能待實現');
    });
});
