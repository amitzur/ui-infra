window.$ = document.querySelector.bind(document);
window.$$ = function() {
    return [].slice.call(document.querySelectorAll.apply(document, arguments), 0);
};
window.$c = function(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.firstElementChild;
};

Node.prototype.on = Node.prototype.addEventListener;
Node.prototype.off = Node.prototype.removeEventListener;
window.on = window.addEventListener;
window.off = window.removeEventListener;