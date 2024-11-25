//实现模糊查询
let keyword = document.querySelector(".keyword");//获取输入框
let searchHelper = document.querySelector(".search-helper");//获取搜索框
let timer; //定义定时器
//定义数组
let arr = ['苹果手机', '香蕉手机', '橘子手机', '西瓜手', '葡萄机', "草莓手机", "菠萝手机", '芒果手机', '柚子手机', '梨子'];

//给输入框绑定内容改变事件
keyword.oninput = function () {
    searchHelper.innerHTML = "";//清空搜索框
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(keyword.value) != -1) {
            //如果找到了，就显示
            searchHelper.innerHTML += '<p>'+arr[i]+'</p>';
            searchHelper.style.display = 'block';
        }
    }
}

// 获取元素
var myDiv = document.querySelector('.form');

// 为元素添加鼠标离开事件监听器
myDiv.addEventListener('mouseleave', function(event) {
    clearTimeout(timer); 
    // 事件触发时执行的代码
    setTimeout(function() {
        // 事件触发后1秒执行的代码
        searchHelper.style.display = 'none';
    }, 100);
});
// 为元素添加鼠标进入事件监听器，用于清除定时器
myDiv.addEventListener('mouseenter', function(event) {
    clearTimeout(timer); // 清除定时器
});





//实现轮播图的切换
let imgList = document.querySelectorAll('.img');//获取图片列表
let prevArrow = document.querySelector('.prev');//获取左箭头
let nextArrow = document.querySelector('.next');//获取右箭头
let slide = document.querySelector('.slide');//获取轮播图
let lis = document.querySelectorAll('.banner-btn li');

let imgARR = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg','img/6.jpg', 'img/7.jpg', 'img/8.jpg'];//定义图片数组
let index = 0;//定义索引
let timer2; //定义定时器
//给图片列表添加点击事件
function changeImg() {
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].src = imgARR[index];
    }
    index++;
    if (index >= imgARR.length) {
        index = 0;
    }

    updateImageDisplay(); // 更新图片显示
} 
timer2 = setInterval(() => {changeImg();
    
}, 3000); 

function updateImageDisplay() {
    // 根据当前的 index 更新图片显示
    const currentImg = imgARR[index];
    // 移除所有小圆点的 active 类
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
    }
    // 给当前小圆点添加 active 类
    lis[index].classList.add('active');
    // 假设有一个 img 元素用于显示当前图片
    document.querySelector('.current-image').src = currentImg.src;
    if (currentImg) {
        imgElement.src = 'path/to/your/image.jpg';
    } else {
        console.error('Image element not found');
    }
}

//给左右箭头添加点击事件
prevArrow.addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = imgARR.length - 1;
    }
    updateImageDisplay(); // 更新图片显示
})
nextArrow.addEventListener('click', function () {
    index++;
    if (index >= imgARR.length) {
        index = 0;
    }
    updateImageDisplay(); // 更新图片显示
})


//给轮播图添加鼠标移入事件
slide.onmouseover = function () {
    clearInterval(timer2); //清除定时器
}
//给轮播图添加鼠标移出事件
slide.onmouseout = function () {
    timer2 = setInterval(() => {changeImg();

    }, 3000);
}

//给小圆点添加点击事件
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function () {
        index = i;
        updateImageDisplay(); // 更新图片显示
    })
}



//实现楼层定位切换
let header = document.querySelector('.header');//获取头部
let banner = document.querySelector('.banner');//获取楼层
let elevator = document.querySelector('.elevator');//获取楼层定位
let back = document.querySelector('.back-top');//获取楼层定位
let items = document.querySelectorAll('.content .item');//获取所有楼层
let elevatorA = document.querySelectorAll('.elevator a');//获取所有a
let sumheight = header.offsetHeight + banner.offsetHeight;//获取头部和楼层距离
let elevatorArr = [];
for (let i = 0; i < items.length; i++) {
    sumheight = sumheight+items[i].offsetHeight;
    elevatorArr.push(sumheight);
}
function clearcolors() {
    for (let i = 0; i < elevatorA.length-1; i++) {
        elevatorA[i].style.color = '#654b44';
    }
}
   


document.onscroll =  function () {

    //获取滚动条距离
    let Top = document.documentElement.scrollTop || document.body.scrollTop;//获取滚动条距离
    //获取头部距离
    let headerTop = header.offsetHeight;
    //获取楼层距离
    let bannerTop = banner.offsetHeight;
    //当滚动条距离大于头部距离时，改变楼层定位样式
    let search = document.querySelector('.search');//获取搜索框
    let searchFORM = document.querySelector(' .form');
    let searchLogo = document.querySelector('.search-logo');
    let searchm = document.querySelector('.search-m');

    if (Top > headerTop+bannerTop) {
        elevator.className = ' elevator-fix';//改变楼层定位样式
        back.style.display = 'block';//显示楼层定位
        search.className = 'search search-fix';//定位搜索框
        searchFORM.style.top = '8px';
        searchLogo.style.display = 'block';
        searchm.style.height = '50px';
    }else {
        elevator.className = ' elevator';
        back.style.display = 'none';//隐藏楼层定位
        search.className = 'search';//显示搜索框
        searchFORM.style.top = '25px';
        searchLogo.style.display = 'none';
        searchm.style.height = '60px';
    } 

    //定义数组
    if (Top <= headerTop+bannerTop) {
        clearcolors();
    }
    else if (Top >= headerTop+bannerTop && Top < elevatorArr[0]) {
        clearcolors();
        elevatorA[0].style.color = 'red';   
    }
    else if (Top >= elevatorArr[0] && Top < elevatorArr[1]) {
        clearcolors();
        elevatorA[1].style.color = 'red';
    }else if (Top >= elevatorArr[1] && Top < elevatorArr[2]) {
        clearcolors();
        elevatorA[2].style.color = 'red';
    }else if (Top >= elevatorArr[2] && Top < elevatorArr[3]) {
        clearcolors();
        elevatorA[3].style.color = 'red';
    }
        //判断滚动条距离是否大于头部距离

}

back.onclick = function () {
    document.documentElement.scrollTop = 0;
}
