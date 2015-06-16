(function() {
    var startEvent, moveEvent, endEvent, pageX, pageY;
    if ("ontouchstart" in window) {
        startEvent = "touchstart";
        moveEvent = "touchmove";
        endEvent = "touchend";
        pageX = function(e) { return e.touches[0].pageX; };
        pageY = function(e) { return e.touches[0].pageY; };
    } else {
        startEvent = "mousedown";
        moveEvent = "mousemove";
        endEvent = "mouseup";
        pageX = function(e) { return e.pageX; };
        pageY = function(e) { return e.pageY; };
    }
    
    function startHandler(eStart) {
        function moveHandler(eMove) {
            var deltaX = pageX(eMove) - startX, deltaY = pageY(eMove) - startY;
            document.dispatchEvent(new CustomEvent("delta", { detail: { x: deltaX, y: deltaY, e: eMove }}));
        }

        var startX = pageX(eStart), startY = pageY(eStart);
        document.dispatchEvent(new CustomEvent("deltaStart", { detail: { x: startX, y: startY, e: eStart }}));
        document.addEventListener(moveEvent, moveHandler);

        document.addEventListener(endEvent, function(eEnd) {
            document.dispatchEvent(new CustomEvent("deltaEnd", { detail: { e: eEnd }}));
            document.removeEventListener(moveEvent, moveHandler);
            document.removeEventListener(endEvent, arguments.callee);
        });
    }
    
    function start() {
        document.addEventListener(startEvent, startHandler);
    }
    
    function stop() {
        document.removeEventListener(startEvent, startHandler);
    }
    
    window.Delta = {
        start: start,
        stop: stop
    };
})();