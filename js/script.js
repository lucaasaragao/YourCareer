M.AutoInit();

var instance = M.Sidenav.getInstance(elem);
    
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});