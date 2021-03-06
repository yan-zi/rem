/**
 * @author yan-zi
 * @example 1rem=100px
 */
!(function (doc, win) {
    var docEle = doc.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEle.clientWidth;
            if (!clientWidth) return;
            // 750为设计稿尺寸
            docEle.style.fontSize = clientWidth >= 750 ? '100px' : 100 * (clientWidth / 750) + 'px'
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);