if (/[\?&]log=/.test(location.search)) {
    $("body").appendChild($c("<div id='log' style='position: absolute;right: 10px;top: 10px;background: white;border: 1px solid black;width: 100px;height: 100px;overflow: auto;'>"));
    var $log = $("#log");
    log = function(msg) {
        console.log(msg);
        $log.innerHTML = msg + "<br>" + $log.innerHTML;
    }
} else {
    log = console.log.bind(console);
}
