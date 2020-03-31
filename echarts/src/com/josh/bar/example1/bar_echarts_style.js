function bar() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    $.get('data.json').done(function (data) {
        console.log(data.info)
        // 指定图表的配置项和数据
        var option = {
            // 图表标题
            title: {
                text: 'ECharts 实例',
                // 超链接
                link: 'http://www.baidu.com',
                target: 'blank',
                x: 'right',                 // 水平安放位置，默认为左对齐，可选为：
                // '' ¦ 'left' ¦ 'right'
                // ¦ {number}（x坐标，单位px）
                y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                           // 'top' ¦ 'bottom' ¦ 'center'
                                           // ¦ {number}（y坐标，单位px）
                // textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                backgroundColor: '#ccc',
                borderColor: '#bbbccc',       // 标题边框颜色
                borderWidth: 1,            // 标题边框线宽，单位px，默认为0（无边框）
                padding: 5,                // 标题内边距，单位px，默认各方向内边距为5，
                                           // 接受数组分别设定上右下左边距，同css
                // itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，
                textStyle: {
                    fontFamily: 'monospace',
                    fontSize: 12,
                    fontWeight: 'bolder',
                    color: '#333'          // 主标题文字颜色
                },
                // subtextStyle: {
                //     color: '#aaa'          // 副标题文字颜色
                // }
                borderRadius: 5, // 统一设置四个角的圆角大小
                // 阴影
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 5,
                shadowColor: '#2eccac',
            },

            // 图例
            legend: {
                // type : 'plain',

                // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
                orient: 'horizontal',

                x: 'center',               // 水平安放位置，默认为全图居中，可选为：
                                           // 'center' ¦ 'left' ¦ 'right'
                                           // ¦ {number}（x坐标，单位px）
                y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                           // 'top' ¦ 'bottom' ¦ 'center'
                                           // ¦ {number}（y坐标，单位px）
                //backgroundColor: 'rgba(255, 0, 0,0.3)',
                //borderColor: 'rgba(252,255,50,0.96)',       // 图例边框颜色
                //borderWidth: 1,            // 图例边框线宽，单位px，默认为0（无边框）
                padding: 5,                // 图例内边距，单位px，默认各方向内边距为5，
                                           // 接受数组分别设定上右下左边距，同css
                itemGap: 20,               // 各个item之间的间隔，单位px，默认为10，
                                           // 横向布局时为水平间隔，纵向布局时为纵向间隔
                itemWidth: 14,             // 图例图形宽度
                itemHeight: 6,            // 图例图形高度
                textStyle: {
                    fontWeight: 'bolder',
                    fontSize: 12,
                    color: '#231c90'          // 图例文字颜色
                },
                //自定义图标
                // icon : 'image://../image/安全.png',
                data: [
                    {
                        name: '销量',
                        // icon : 'image://../image/点赞.png',
                        textStyle: {},
                    },
                    {
                        name: 'josh',
                    },
                    {
                        name: 'guan',
                    }],

                backgroundColor: 'rgb(216,253,255)',
                borderWidth: 2,
                borderColor: '#37dc38',
                // 圆角
                borderRadius: 10, // 统一设置四个角的圆角大小
                // borderRadius: [5, 5, 0, 0], //（顺时针左上，右上，右下，左下）
                // 阴影
                shadowColor: 'rgba(60,141,220,0.5)',
                shadowBlur: 10,
            },
            // 直角坐标系 grid 中的 x 轴
            xAxis: {
                name: '日期',
                show: true,
                nameLocation: 'end',
                // position : 'bottom', // 默认
                // type : 'category',  // 默认
                nameTextStyle: {
                    fontSize: 14,
                    // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    fontWeight: 'bolder',
                    textShadowColor: '#3c86ff',
                    textShadowBlur: 5,
                    color: 'rgba(8,11,13,0.45)',
                },
                nameGap: 20, // 坐标轴名称与轴线之间的距离。
                // inverse : true, // 是否是反向坐标轴
                silent: false,
                // 坐标轴的标签是否响应和触发鼠标事件，默认不响应。(下面有事件例子)
                triggerEvent: true,

                //坐标轴轴线相关设置。
                axisLine: {
                    show: true,
                    // onZero : false,// 是否显示0刻度
                    lineStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    }
                },
                // 坐标轴刻度相关设置。
                axisTick: {
                    length: 5,
                    // alignWithLabel : true,
                },
                //坐标轴刻度标签的相关设置。
                axisLabel: {
                    rotate: 45,
                    margin: 8,
                    formatter: '{value} kg',
                    color: '#ff9b99',
                    fontStyle: 'oblique',
                    fontWeight: 'bolder',
                    // 阴影
                    // shadowColor : '#2b29ff',
                    // shadowBlur : 1,

                },

                data: [{
                    value: '周一',
                    // 突出周一
                    textStyle: {
                        fontSize: 14,
                        // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
                        fontFamily: 'serif',
                        fontStyle: 'italic',
                        fontWeight: 'bolder',
                        textShadowColor: '#3c86ff',
                        textShadowBlur: 5,
                        color: 'rgba(8,11,13,0.45)',

                    }
                }, {
                    value: '周二',
                }, {
                    value: '周三',
                }, {
                    value: '周四',
                }, {
                    value: '周五',
                }, {
                    value: '周六',
                }],

                //默认不显示。但是如果 tooltip.trigger 设置为 'axis'
                axisPointer: {
                    show: true,
                    type: 'shadow',
                    shadowStyle: {
                        // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'red' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'blue' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        // 透明度
                        opacity: 0.1,
                    },
                    // triggerTooltip : false,
                },
            },
            yAxis: {
                name: '数值',
                type: 'value',
                nameTextStyle: {
                    fontSize: 14,
                    // 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    fontWeight: 'bolder',
                    textShadowColor: '#3c86ff',
                    textShadowBlur: 5,
                    color: 'rgba(8,11,13,0.45)',
                },

                //坐标轴轴线相关设置。
                axisLine: {
                    show: true,
                    // onZero : false,// 是否显示0刻度
                    lineStyle: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    }
                },
                // 坐标轴刻度相关设置。
                axisTick: {
                    length: 5,
                    // alignWithLabel : true,
                },
                //坐标轴刻度标签的相关设置。
                axisLabel: {
                    rotate: 45,
                    margin: 8,
                    formatter: '{value}',
                    color: '#ff9b99',
                    fontStyle: 'oblique',
                    fontWeight: 'bolder',
                    // 阴影
                    // shadowColor : '#2b29ff',
                    // shadowBlur : 1,

                },
            },
            // 区域缩放控制器
            dataZoom: {
                orient: 'vertical',      // 布局方式，默认为水平布局，可选为：
                // 'horizontal' ¦ 'vertical'
                // x: {number},            // 水平安放位置，默认为根据grid参数适配，可选为：
                // {number}（x坐标，单位px）
                // y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：
                // {number}（y坐标，单位px）
                // width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配
                // height: {number},       // 指定高度，纵向布局时默认为根据grid参数适配
                type: 'slider',
                backgroundColor: 'rgba(0,0,0,0)',       // 背景颜色
                dataBackgroundColor: '#eee',            // 数据背景颜色
                fillerColor: 'rgba(144,197,237,0.2)',   // 填充颜色
                handleColor: 'rgba(70,130,180,0.8)'     // 手柄颜色
            },
            // 提示框  axisPointer
            tooltip: {
                trigger: 'item',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
                showDelay: 10,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                hideDelay: 100,            // 隐藏延迟，单位ms
                transitionDuration: 0.6,  // 动画变换时间，单位s
                backgroundColor: 'rgba(37,255,255,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
                borderColor: '#ff2120',       // 提示边框颜色
                borderRadius: 10,           // 提示边框圆角，单位px，默认为4
                borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
                padding: 8,                // 提示内边距，单位px，默认各方向内边距为5，
                                           // 接受数组分别设定上右下左边距，同css
                /* axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                     type: 'shadow',         // 默认为直线，可选为：'line' | 'shadow'
                     lineStyle: {          // 直线指示器样式设置
                         color: '#1b0cbb',
                         width: 2,
                         type: 'solid'
                     },
                     shadowStyle: {                       // 阴影指示器样式设置
                         width: 'auto',                   // 阴影大小
                         color: 'rgba(255,62,85,0.3)'  // 阴影颜色
                     }
                 },*/
                // position : 'right',
                textStyle: {
                    fontWeight: 'bolder',
                    fontFamily: 'serif',
                    color: '#1b29ff'
                }
            },


            // 值域
            /*
            dataRange: {
                show:true,
                orient: 'vertical',        // 布局方式，默认为垂直布局，可选为：
                                           // 'horizontal' ¦ 'vertical'
                x: 'number',                 // 水平安放位置，默认为全图左对齐，可选为：
                                           // 'center' ¦ 'left' ¦ 'right'
                                           // ¦ {number}（x坐标，单位px）
                y: 'bottom',               // 垂直安放位置，默认为全图底部，可选为：
                                           // 'top' ¦ 'bottom' ¦ 'center'
                                           // ¦ {number}（y坐标，单位px）
                backgroundColor: 'rgba(144,86,79,0)',
                borderColor: '#ccc',       // 值域边框颜色
                borderWidth: 1,            // 值域边框线宽，单位px，默认为0（无边框）
                padding: 5,                // 值域内边距，单位px，默认各方向内边距为5，
                                           // 接受数组分别设定上右下左边距，同css
                itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                           // 横向布局时为水平间隔，纵向布局时为纵向间隔
                itemWidth: 18,             // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
                itemHeight: 12,            // 值域图形高度，线性渐变垂直布局高度为该值 * 10
                splitNumber: 5,            // 分割段数，默认为5，为0时为线性渐变
                color:['#09ff13','#d8ffd8'],//颜色
                text:['高','低'],         // 文本，默认为数值文本
                textStyle: {
                    color: '#333'          // 值域文字颜色
                }
            },*/

            toolbox: {
                //可视化的工具箱
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: { //数据视图
                        show: true
                    },
                    restore: { //重置
                        show: true
                    },
                    dataZoom: { //数据缩放视图
                        show: true
                    },
                    saveAsImage: {//保存图片
                        show: true
                    },
                    magicType: {//动态类型切换
                        type: ['bar', 'line']
                    }


                },
                orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                           // 'horizontal' ¦ 'vertical'
                x: 'center',                // 水平安放位置，默认为全图右对齐，可选为：
                // 'center' ¦ 'left' ¦ 'right'
                // ¦ {number}（x坐标，单位px）
                y: 'bottom',                  // 垂直安放位置，默认为全图顶端，可选为：
                // 'top' ¦ 'bottom' ¦ 'center'
                // ¦ {number}（y坐标，单位px）
                color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
                borderColor: '#ccc',       // 工具箱边框颜色
                borderWidth: 2,            // 工具箱边框线宽，单位px，默认为0（无边框）
                padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
                                           // 接受数组分别设定上右下左边距，同css
                itemGap: 10,               // 各个item之间的间隔，单位px，默认为10，
                                           // 横向布局时为水平间隔，纵向布局时为纵向间隔
                itemSize: 16,              // 工具箱图形宽度
                featureImageIcon: {},     // 自定义图片icon
                featureTitle: {
                    mark: '辅助线开关',
                    markUndo: '删除辅助线',
                    markClear: '清空辅助线',
                    dataZoom: '区域缩放',
                    dataZoomReset: '区域缩放后退',
                    dataView: '数据视图',
                    lineChart: '折线图切换',
                    barChart: '柱形图切换',
                    restore: '还原',
                    saveAsImage: '保存为图片'
                }
            },

            series: [{
                name: '销量',
                type: 'bar',
                animation: true,
                itemStyle: {
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#2a8eff' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#17fffa' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    // borderColor : '#777',
                    // borderType : 'dashed',
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(37,230,255,0.5)',
                    shadowBlur: 8,
                },
                barWidth: '10%',
                // barMaxWidth : 10,
                data: data.info[0],

            }, {
                name: 'josh',
                type: 'bar',
                animation: true,
                itemStyle: {
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#0cff1e' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#caffca' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    // borderColor : '#777',
                    // borderType : 'dashed',
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(37,230,255,0.5)',
                    shadowBlur: 8,
                },
                barWidth: '10%',
                data: data.info[1]
            }, {
                name: 'guan',
                type: 'bar',
                animation: true,
                itemStyle: {
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#ff0ef0' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#f9d4ff' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    // borderColor : '#777',
                    // borderType : 'dashed',
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(37,230,255,0.5)',
                    shadowBlur: 8,
                },
                barWidth: '10%',
                data: data.info[2]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    });
    // 通用点击事件
    /*
    * {
    // 组件类型，xAxis, yAxis, radiusAxis, angleAxis
    // 对应组件类型都会有一个属性表示组件的 index，例如 xAxis 就是 xAxisIndex
    componentType: string,
    // 未格式化过的刻度值, 点击刻度标签有效
    value: '',
    // 坐标轴名称, 点击坐标轴名称有效
    name: ''
    }
    * */
    myChart.on('click', function (params) {
        if (params.componentType == "xAxis") {
            alert("单击了" + params.value + "x轴标签");
        } else {
            alert("单击了" + params.name + "柱状图" + params.value);
        }
    });

}