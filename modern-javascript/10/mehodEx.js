var circle = {
    radius: 5, // 프로퍼티

    // 원의 지름
    getDiameter: function () { // 메서드
        return 2 * this.radius; // this는 circle를 가르킨다.        
    }
};

console.log(circle.getDiameter());