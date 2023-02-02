angular.module("app",[]);

angular.module("app").controller("MainController", function () {
    var vm = this;
    vm.title = "Learn Angular By Example";
    vm.searchInput = "";
    vm.shows = [
        {
            title: "Đôi mắt có lửa",
            author: "Nguyễn Hùng Sơn",
            favorite: true
        },
        {
            title:"Life of Pi",
            author:"Davan",
            favorite: false
        },
        {
            title:"Learn Angular by example",
            author:"Fpt-aptech",
            favorite: true
        },
        {
            title:"Họ Nhà Trai",
            author:"Nguyễn Anh Tú",
            favorite: false
        },
        {
            title:"Học code To Tay",
            author:"FPT",
            favorite: true
        },
    ];
    vm.orders = [
        {
            id: 1,
            title:"Author Ascending",
            key:"Author",
            reverse: false
        },
        {
            id: 2,
            title:"Author Descending",
            key:"Author",
            reverse: true
        },
        {
            id: 3,
            title:"Title Ascending",
            key:"title",
            reverse: false
        },
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function () {
        vm.shows.push(vm.new);
        vm.new = {}
    };
    
});