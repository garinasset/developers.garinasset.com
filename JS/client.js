// 创建 XMLHttpRequest 对象
var client_xhr = new XMLHttpRequest();

// 指定请求的方法和 URL
client_xhr.open('GET', 'https://developers.garinasset.com/gagarin/v1/request/client');

// 设置请求头，用于告诉服务器返回 JSON 格式的数据
client_xhr.setRequestHeader('Accept', 'application/json');

// 发送请求
client_xhr.send();

// 监听 readyState 的变化
client_xhr.onreadystatechange = function () {
    if (client_xhr.readyState === XMLHttpRequest.DONE) {
        // 如果请求成功
        if (client_xhr.status === 200) {
            // 解析 JSON 数据
            client = JSON.parse(client_xhr.responseText);
            // 对数据进行处理
            var client_title = document.getElementById("client-title");
            var client_output_1 = document.getElementById("client-output-1");
            var client_output_2 = document.getElementById("client-output-2");
            // var client_output_3 = document.getElementById("client-output-3");
            // var client_output_4 = document.getElementById("client-output-4");

            var client_titleText = "客户端";
            var client_output_Text1 = "IP Address";
            var client_output_Text2 = client.data.host;
            // var client_output_Text3 = "端口";
            // var client_output_Text4 = String(client.data.port);

            generateText(client_titleText, client_title, function () {
                generateText(client_output_Text1, client_output_1, function () {
                    generateText(client_output_Text2, client_output_2, function () {
                        // generateText(client_output_Text3, client_output_3, function () {
                        //     generateText(client_output_Text4, client_output_4, function () {
                        //     });
                        // });
                    });
                });
            });
        }
        // 如果请求失败
        else {
            console.error('请求失败：' + client_xhr.status);
        }
    }
};



function generateText(text, element, callback) {
    var i = 0;

    var timer = setInterval(function () {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            if (callback) {
                callback();
            }
        }
    }, 5);
}
