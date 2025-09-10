(() => {
    //HTMLのid値を使って以下のDOM要素を取得
    const downbutton1 = document.getElementById('down1');
    const upbutton1 = document.getElementById('up1');
    const text1 = document.getElementById('textbox1');
    const reset1 = document.getElementById('reset1');
    const downbutton2 = document.getElementById('down2');
    const upbutton2 = document.getElementById('up2');
    const text2 = document.getElementById('textbox2');
    const reset2 = document.getElementById('reset2');
    const downbutton3 = document.getElementById('down3');
    const upbutton3 = document.getElementById('up3');
    const text3 = document.getElementById('textbox3');
    const reset3 = document.getElementById('reset3');

    //ボタンが押されたらカウント減
    downbutton1.addEventListener('click', (event) => {
        //0以下にはならないようにする
        if(text1.value >= 1){
            text1.value--;
        }
    });

    //ボタンが押されたらカウント増
    upbutton1.addEventListener('click', (event) => {
        text1.value++;
    });

    //ボタンが押されたら0に戻る
    reset1.addEventListener('click', (event) => {
        text1.value = 0;
    });
    //ボタンが押されたらカウント減
    downbutton2.addEventListener('click', (event) => {
        //0以下にはならないようにする
        if(text2.value >= 1){
            text2.value--;
        }
    });

    //ボタンが押されたらカウント増
    upbutton2.addEventListener('click', (event) => {
        text2.value++;
    });

    //ボタンが押されたら0に戻る
    reset2.addEventListener('click', (event) => {
        text2.value = 0;
    });

    //ボタンが押されたらカウント減
    downbutton3.addEventListener('click', (event) => {
        //0以下にはならないようにする
        if(text3.value >= 1){
            text3.value--;
        }
    });

    //ボタンが押されたらカウント増
    upbutton3.addEventListener('click', (event) => {
        text3.value++;
    });

    //ボタンが押されたら0に戻る
    reset3.addEventListener('click', (event) => {
        text3.value = 0;
    });
})();