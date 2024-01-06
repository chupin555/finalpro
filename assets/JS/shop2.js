const shopitem1 = {
    0: {id:'0',name: '白酒', description: '帶有金銀花、杏子和芒果的香氣。清新平衡，礦物氣息餘味悠長。兼具純淨簡約與柔軟圓潤的質感。', price: '1490', img: 'spirit.jpg'},
    1: {id:'1',name: '白蘭地', description: '帶有春天的茉莉花和水仙花的芬芳香味，接下來有濃郁的無花果香、甜柳橙和梅子香味，而最後有新鮮肉桂粉、奶油蛋捲和太妃糖的香濃。 ', price: '1200', img: 'BR.jpg'},
    2: {id:'2',name: '威士忌', description: '於美國白橡木新桶熟成，非冷凝過濾。身為凱達格蘭威士忌經典風味，蜜餞香氣旋繞，使得厚重的泥煤味輕飄起舞，入口如絲綢般順滑，又因為強烈的熱帶果乾口感，衝擊著口腔，最後口中溢散了梅子香氣，絕不含香精、焦糖、調色劑等添加物。', price: '1500', img: 'wis.png'},
    3: {id:'3',name: '伏特加', description: '讓您飲用後就如同在帆船時，風吹向你臉頰的清爽感。使用純淨水質與一流穀物精髓製作而成。當您有重要節日需要慶祝時，瑪豎立雅伏特加是您最佳的好伙伴。它能幫助您在社交場合上暖和氣氛，創造出單純的快樂，使人精力充沛。', price: '1389', img: 'vodka_2.png'},
    4: {id:'4',name: '蘭姆酒', description: '這款酒使用獨家的木炭過濾法，再加上Facundo Bacardi 所研發的獨家配方，使得Bacardi較他牌蘭姆酒更加純淨 ，更具有獨特醇順口味。', price: '1450', img: 'lan_2.jpg'},
    5: {id:'5',name: '苦艾酒', description: '這款酒使用獨家的木炭過濾法，再加上Facundo Bacardi 所研發的獨家配方，使得Bacardi較他牌蘭姆酒更加純淨 ，更具有獨特醇順口味。', price: '2480', img: 'absinthe.jpg'},
    6: {id:'6',name: '日本清酒', description: '有別於大多市售清酒，回歸原點，採用費時費工的「生酛」釀造。接近純米大吟釀的55%精米度，較一般純米吟釀柔順細緻的口感、生酛釀造獨有的適度酸味，帶出豐富的旨味。不僅日本料理，適度的酸味和旨味，和中華料理、台菜都相當合拍。夏季冷飲、冬天溫熱，皆能品味到其最佳風味。', price: '2300', img: 'sake.jpg'},
    7: {id:'7',name: '奶酒', description: '在極精密的真空霧化方式下，提煉出的高品質鮮奶油，混調愛爾蘭優質威士忌，全天然的成份，絕不加任何添加物', price: '1260', img: 'milkwine.jpg'},
    8: {id:'8',name: '草莓酒', description: '草莓酸酸甜甜的迷人香氣，與各式甜點、飲品更是絕配，加入草莓的啤酒，不僅能品飲到原本的麥芽香氣，還中和了啤酒中微微的苦韻，散發令人無法抗拒的香甜滋味', price: '1500', img: 'strwine.jpg'},
    9: {id:'9',name: '希哈 紅葡萄酒', description: '最為出名的葡萄酒品種，在品酒會上，往往是壓軸的葡萄酒款。就連號稱紅葡萄之王的卡本內蘇維濃都要閃邊站。奔放的水果香氣伴隨濃濃的香料味，加上厚重的酒體，你很難忽略它的存在。', price: '1900', img: 'gw.jpg'},
    10: {id:'10',name: '米酒', description: '本產品以蓬萊米為原料，循公賣局採阿米洛法製程釀造，蒸餾擷取最佳品質之酒心經稀釋酒精度為22%，再經儲存6個月～1年以上，純米釀造，完全不添加食用酒精，適合喜好原味米釀白酒之消費者使用，酒中帶有濃厚米糧香氣', price: '9000', img: 'ricewine.png'},
    11: {id:'11',name: '梅酒', description: '100%使用一顆顆細心手摘的紀州「南高梅」，遵循古法傾心釀漬的本格梅酒。以原酒(不兌水調整)風貌封存瓶中，突顯南高梅獨特的芳醇梅香及濃醇口感，使品飲方式更為多樣。無論加冰塊直飲、兌冷水、溫熱飲用，最推薦加入蘇打水倍添爽快感，或作為雞尾酒基酒，展現多變風味。', price: '1005', img: 'plumwine.jpg'},
    12: {id:'12',name: 'liz酒', description: '在台灣，4月-8月是「三千寵愛在荔枝」的季節，梅乃宿將這熟悉的風味原封不動地裝進瓶中，讓您在一年四季都能回味讓妃子笑的好滋味😍', price: '850', img: 'liz_2.jpg'},
    13: {id:'13',name: 'Moet&Chandon Brut Impérial', description: 'Moet & Chandon Brut Impérial是酩悅香檳酒廠的旗艦商品，最具代表性的特徵是它活潑生動的果香，在味蕾上的表現又相當的優雅細膩。。', price: '20000', img: 'spsp.jpg'},
    14: {id:'14',name: '氣泡酒', description: '具有細緻且持久的氣泡，滿溢鼠尾草和相思花的清新淡雅氣息。入口甜美細緻，新鮮的酸度中帶有些許的蜂蜜香氣，口感活潑芳香，在口中綻放出悅人甜味與酸度，非常均衡。', price: '2000', img: 'chepo.jpg'},
    15: {id:'15',name: '女巫酒', description: '嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️嘿嘿🧙‍♀️', price: '1245', img: 'witchwine.png'},
    16: {id:'16',name: '琴酒', description: '撲鼻的茉莉花芬芳、紅色莓果軟糖的酸甜，再點綴些許白胡椒辛香，入口可以感受到溫順的草本風味及淡淡紅茶韻味，豐沛的花香於喉間迴盪。，', price: '1500', img: 'jin.jpg'},
    17: {id:'17',name: '常常酒酒', description: 'I wll never bite, I wll never bite the pain (Sour) 눈물 나게 시큼한 맛(Sour) 그런 게 만약 사랑이면맛보고 싶지 않아 I just feel afraidLove is sour, love is sour grapes' , price: '1314520', img: 'liz.jpg'},
    18: {id:'18',name: 'Provence Rose', description: '炎炎夏日配上一杯冰涼的玫瑰酒不再只是潮流，更加是愛酒之人夏日必備之選。玫瑰酒在任何場合都有出色表現，因為它可以輕易配搭不同食物，能喝上一杯果香宜人、清新冰涼的玫瑰酒，絕對可以令您的夏日更添愜意。' , price: '9000', img: 'rose.jpg'},
};


const searchcontent = window.location.search;
// 取得當前網址的查詢字串部分，並將它儲存在變數中。
const urlParams = new URLSearchParams(searchcontent);
// 以URLSearchParams解析URL 並存在urlParams中

let items;

window.onload= function(){ //此可以讓網頁全部渲染完才顯示出來  
    addListener()
    items = shopitem1 ;
    // 將變數指配到上方物件
    let tmp = urlParams.get('id');
    setItem(items[tmp]);
    change_title(items[tmp])
    // 將URL中所得的id拿下來 存在變數中
    // 這邊讓他將參數帶進網址中，然後會依此變化顯示不一樣的網頁內容==>和下面的
}
function change_title(obj) {
     document.title= obj.name ;
}

function setItem(obj) {
    $('#productionimg').attr("src",'./image/'+ obj.img);
    $('#productionname').text(obj.name);
    $('#productiondescription').text(obj.description);
    $('#productionprice').text('售價：$'+ obj.price);
    $("#num").val("0");
    $('#showimg').attr("src",'./image/'+ obj.img);
// 將不同上方取得的物件的內容寫入對應的id之中 *$用以取得對應id位置
} 
function addListener() {
    let num = document.getElementById("num");
    document.getElementById("up").addEventListener("click", function() {
        num.value = parseInt(num.value)+1;
    });
    document.getElementById("down").addEventListener("click", function() {
        if(num.value <= 0) {
            num.value = 0;
        }else {
            num.value = parseInt(num.value)-1;
        }
    });
}
// 當id為up的元素被點擊時，會執行一個匿名函式，該函式將 num 元素的值進行增加 1 的操作。
// parseInt 函式將 num.value 轉換為整數後進行遞增。

// 當id為down的原素被點擊時，執行一個匿名函式，該函式先判斷 num.value 的值是否小於等於 0
// 如果是==> num.value 設為 0       如果不是==>則將 num.value 進行減 1 的操作。

// 當 "up" 或 "down" 元素被點擊時，會根據相應的操作來增加或減少 num 元素的值。