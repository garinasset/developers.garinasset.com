// 创建 XMLHttpRequest 对象
var headers_xhr = new XMLHttpRequest();

// 指定请求的方法和 URL
headers_xhr.open('GET', 'https://developers.garinasset.com/gagarin/v1/request/headers');

// 设置请求头，用于告诉服务器返回 JSON 格式的数据
headers_xhr.setRequestHeader('Accept', 'application/json');

// 发送请求
headers_xhr.send();

// 监听 readyState 的变化
headers_xhr.onreadystatechange = function () {
    if (headers_xhr.readyState === XMLHttpRequest.DONE) {
        // 如果请求成功
        if (headers_xhr.status === 200) {
            // 解析 JSON 数据
            headers = JSON.parse(headers_xhr.responseText);
            // 对数据进行处理
            var headers_title = document.getElementById("headers-title");
            // var headers_output_1 = document.getElementById("headers-output-1");
            // var headers_output_2 = document.getElementById("headers-output-2");
            // var headers_output_3 = document.getElementById("headers-output-3");
            // var headers_output_4 = document.getElementById("headers-output-4");
            // var headers_output_5 = document.getElementById("headers-output-5");
            // var headers_output_6 = document.getElementById("headers-output-6");
            // var headers_output_7 = document.getElementById("headers-output-7");
            // var headers_output_8 = document.getElementById("headers-output-8");
            // var headers_output_9 = document.getElementById("headers-output-9");
            // var headers_output_10 = document.getElementById("headers-output-10");
            var headers_output_11 = document.getElementById("headers-output-11");
            var headers_output_12 = document.getElementById("headers-output-12");
            // var headers_output_13 = document.getElementById("headers-output-13");
            // var headers_output_14 = document.getElementById("headers-output-14");
            // var headers_output_15 = document.getElementById("headers-output-15");
            // var headers_output_16 = document.getElementById("headers-output-16");
            // var headers_output_17 = document.getElementById("headers-output-17");
            // var headers_output_18 = document.getElementById("headers-output-18");
            // var headers_output_19 = document.getElementById("headers-output-19");
            // var headers_output_20 = document.getElementById("headers-output-20");
            // var headers_output_21 = document.getElementById("headers-output-21");
            // var headers_output_22 = document.getElementById("headers-output-22");
            // var headers_output_23 = document.getElementById("headers-output-23");
            // var headers_output_24 = document.getElementById("headers-output-24");
            // var headers_output_25 = document.getElementById("headers-output-25");
            // var headers_output_26 = document.getElementById("headers-output-26");
            // var headers_output_27 = document.getElementById("headers-output-27");
            // var headers_output_28 = document.getElementById("headers-output-28");
            // var headers_output_29 = document.getElementById("headers-output-29");
            // var headers_output_30 = document.getElementById("headers-output-30");

            var headers_titleText = "HTTP头部";
            // var headers_output_Text_1 = "目标服务器的主机名和端口号";
            // var headers_output_Text_2 = headers.data.host || 'null';
            // var headers_output_Text_3 = "客户端和服务器之间的连接类型";
            // var headers_output_Text_4 = headers.data.connection || 'null';
            // var headers_output_Text_5 = "客户端的用户代理类型和版本信息";
            // var headers_output_Text_6 = headers.data.sec_ch_ua || 'null';
            // var headers_output_Text_7 = "客户端可以接受的媒体类型";
            // var headers_output_Text_8 = headers.data.accept || 'null';
            // var headers_output_Text_9 = "客户端是否为移动设备";
            // var headers_output_Text_10 = headers.data.sec_ch_ua_mobile || 'null';
            var headers_output_Text_11 = "User Agent";
            var headers_output_Text_12 = headers.data.user_agent || 'null';
            // var headers_output_Text_13 = "客户端所在的平台";
            // var headers_output_Text_14 = headers.data.sec_ch_ua_platform || 'null';
            // var headers_output_Text_15 = "发出请求的源（origin）地址";
            // var headers_output_Text_16 = headers.data.origin || 'null';
            // var headers_output_Text_17 = "请求的上下文环境";
            // var headers_output_Text_18 = headers.data.sec_fetch_site || 'null';
            // var headers_output_Text_19 = "请求的模式";
            // var headers_output_Text_20 = headers.data.sec_fetch_mode || 'null';
            // var headers_output_Text_21 = "请求的目标类型";
            // var headers_output_Text_22 = headers.data.sec_fetch_dest || 'null';
            // var headers_output_Text_23 = "用户从哪个页面链接到当前页面";
            // var headers_output_Text_24 = headers.datareferer || 'null';
            // var headers_output_Text_25 = "浏览器可以接受的压缩算法";
            // var headers_output_Text_26 = headers.data.accept_encoding || 'null';
            // var headers_output_Text_27 = "浏览器可以接受的语言类型和优先级";
            // var headers_output_Text_28 = headers.data.accept_language || 'null';
            // var headers_output_Text_29 = "Cookie";
            // var headers_output_Text_30 = headers.data.cookie || 'null';


            generateText(headers_titleText, headers_title, function () {
                // generateText(headers_output_Text_1, headers_output_1, function () {
                //     generateText(headers_output_Text_2, headers_output_2, function () {
                //         generateText(headers_output_Text_3, headers_output_3, function () {
                //             generateText(headers_output_Text_4, headers_output_4, function () {
                //                 generateText(headers_output_Text_5, headers_output_5, function () {
                //                     generateText(headers_output_Text_6, headers_output_6, function () {
                //                         generateText(headers_output_Text_7, headers_output_7, function () {
                //                             generateText(headers_output_Text_8, headers_output_8, function () {
                //                                 generateText(headers_output_Text_9, headers_output_9, function () {
                //                                     generateText(headers_output_Text_10, headers_output_10, function () {
                                                        generateText(headers_output_Text_11, headers_output_11, function () {
                                                            generateText(headers_output_Text_12, headers_output_12, function () {
                                                                // generateText(headers_output_Text_13, headers_output_13, function () {
                                                                //     generateText(headers_output_Text_14, headers_output_14, function () {
                                                                //         generateText(headers_output_Text_15, headers_output_15, function () {
                                                                //             generateText(headers_output_Text_16, headers_output_16, function () {
                                                                //                 generateText(headers_output_Text_17, headers_output_17, function () {
                                                                //                     generateText(headers_output_Text_18, headers_output_18, function () {
                                                                //                         generateText(headers_output_Text_19, headers_output_19, function () {
                                                                //                             generateText(headers_output_Text_20, headers_output_20, function () {
                                                                //                                 generateText(headers_output_Text_21, headers_output_21, function () {
                                                                //                                     generateText(headers_output_Text_22, headers_output_22, function () {
                                                                //                                         generateText(headers_output_Text_23, headers_output_23, function () {
                                                                //                                             generateText(headers_output_Text_24, headers_output_24, function () {
                                                                //                                                 generateText(headers_output_Text_25, headers_output_25, function () {
                                                                //                                                     generateText(headers_output_Text_26, headers_output_26, function () {
                                                                //                                                         generateText(headers_output_Text_27, headers_output_27, function () {
                                                                //                                                             generateText(headers_output_Text_28, headers_output_28, function () {
                                                                                                                                // generateText(headers_output_Text_29, headers_output_29, function () {
                                                                                                                                //     generateText(headers_output_Text_30, headers_output_30, function () {
                                                                                                                                //     });
                                                                                                                                // });
                                                            //                                                                 });
                                                            //                                                             });
                                                            //                                                         });
                                                            //                                                     });
                                                            //                                                 });
                                                            //                                             });
                                                            //                                         });
                                                            //                                     });
                                                            //                                 });
                                                            //                             });
                                                            //                         });
                                                            //                     });
                                                            //                 });
                                                            //             });
                                                            //         });
                                                            //     });
                                                            });
                                                        });
                //                                     });
                //                                 });
                //                             });
                //                         });
                //                     });
                //                 });
                //             });
                //         });
                //     });
                // });
            });
        }
        // 如果请求失败
        else {
            console.error('请求失败：' + headers_xhr.status);
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
