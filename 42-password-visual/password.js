var PasswordTextbox = function(n) {
    var t = $('<input type="password">'), 
        e = $('<input type="text">'),
        i = $("<div></div>"),
        d = $('<div class="wd-password">密码：</div>');
    d.append(t),
    d.append(i),
    d.append(e),
    $(n.container).append(d),
    t.on("input", function() {
        e.val(t.val())
    }),
    i.mouseover(function() {
        e.css("z-index", "10")
    }),
    i.mouseout(function() {
        e.css("z-index", "-10")
    }),
    this.getPwd = function() {
        return e.val()
    }
};