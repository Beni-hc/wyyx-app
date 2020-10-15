<template>
    <div class='zxl-list'>
       <div class='zxl-title'>
            <i></i><span>新人专享礼</span><i></i>
       </div>
       <div class='zxl-content'>
           <a href="javascript:;">
               <div>
                   新人专享礼包
               </div>
               <img src="../../../../assets/bodylist/libao.png" alt="">
            </a>
           <a href="javascript:;">
               <div>
                    <div>福利社</div>
                    <div>今日特价</div>
                    <div>
                        <div>
                            <span>¥10</span>
                            <del><span>¥15</span></del>
                        </div>
                        <img src="../../../../assets/bodylist/fuli.webp" alt="">
                    </div>
                </div>
            </a>
           <a href="javascript:;">
                <div>
                    <div>新人拼团</div>
                    <div><span>1元起包邮</span></div>
                    <div>
                        <div>
                            <span>¥32.8</span>
                            <del><span>¥49</span></del>
                        </div>
                        <img src="../../../../assets/bodylist/pintuan.webp" alt="">
                    </div>
                </div>
            </a>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .zxl-list {
        width: 100%;
        height: 560px;
        margin: 20px 0 0 0;
        background-color: #fff;
    }
    .zxl-title {
        width: 100%;
        height: 89px;
        font-size: 31px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .zxl-title span,
    .zxl-title i {
        padding: 3px 0 0 0;
    }
    .zxl-title i {
        width: 25px;
        height: 3px;
        background-color: #3d3d3d;
        margin: 0 15px;
    }
    .zxl-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        align-content: center;
    }
    .zxl-content a:first-child {
        width: 345px;
        height: 438px;
        background-color: #f9e9cf;
    }
    .zxl-content a {
        width: 344px;
        height: 217px;
        margin: 0 0 4px 4px;
        flex-shrink: 0;
        background-color: #fbe2d3;
    }
    .zxl-content a:last-child {
        background-color: #ffecc2;
    }
    .zxl-content a:first-child div {
        height: 112px;
        line-height: 112px;
        font-size: 31px;
        margin-left: 30px;
    }
    .zxl-content a:first-child img {
        display: block;
        width: 260px;
        margin: 0 auto;
    }
    .zxl-content a:nth-child(2)>div,
    .zxl-content a:nth-child(3)>div {
        margin: 30px 0 0 30px;
        position: relative;
        top: 0;
        left: 0;
    }
    .zxl-content a:nth-child(2)>div>div:first-child,
    .zxl-content a:nth-child(3)>div>div:first-child {
        font-size: 31px;
    }
    .zxl-content a:nth-child(2)>div>div:nth-child(2) {
        font-size: 23px;
        color: #8d8b89;
    }
    .zxl-content a:nth-child(3)>div>div:nth-child(2)>span {
        font-size: 22px;
        background-color: #cbb693;
        color: #fff;
        border-radius: 6px;
        padding: 0 10px;
    }
    .zxl-content a:nth-child(2)>div>div:last-child,
    .zxl-content a:nth-child(3)>div>div:last-child {
        width: 166px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .zxl-content a:nth-child(2)>div>div:last-child img,
    .zxl-content a:nth-child(3)>div>div:last-child img {
        width: 100%;
    }
     .zxl-content a:nth-child(2)>div>div:last-child div,
    .zxl-content a:nth-child(3)>div>div:last-child div {
        width: 80px;
        height: 80px;
        position: absolute;
        top: -12px;
        right: 30px;
        background-color: rgba(246, 166, 67, .7);
        border-radius: 40px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 21px;

    }

</style>