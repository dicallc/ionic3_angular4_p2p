import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
// import Chart from 'chart.js'; // 导入chart.js
import Echarts from 'echarts';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('chartLine') chartLine: ElementRef;
  chart: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter(){
    this.chart= this.chartLine.nativeElement;
    let instance=Echarts.init(this.chartLine.nativeElement).setOption({

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        height:'100%',
        containLabel: true,
        borderColor:"#E0E0E0",
      },
      xAxis : [
        {

          axisLine:{
            lineStyle:{
              color:'#E3D4D3',
              width:1,//这里是为了突出显示加上的
            }
          },
          type : 'category',
          boundaryGap : false,
          axisLabel: {
          show: true,
          textStyle: {
            color: '#999999'
          }
        },
          data : ["04-24","05-29","05-23"]

        }
      ],
      yAxis : [
        {
          //设置轴线的属性
          axisLine:{
            lineStyle:{
              color:'#E3D4D3',
              width:1,//这里是为了突出显示加上的
            }
          },
          min:1.6,
          max:7.6,
          type : 'value',
          axisLabel: {
            show: true,
            interval:0,
            textStyle: {
              color: '#999999'
            }
          },
          splitLine: {
            lineStyle: {
              color: "#E0E0E0"
            }
          },

        }
      ],
      series : [
        {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          lineStyle:{
            normal:{
              color:'#FB685C',
              width:3
            },
          },
          itemStyle:{
            normal :{
              color:'#FB685C',
              borderWidth:4,
              borderColor :'#fff',
              shadowColor:'#FB685C',
              shadowBlur: 5
            }
          },
          areaStyle: {normal: {
            width:'4'
          }},
          markPoint: {
            symbol:'roundRect',
            data : [
              {name: '', value: "123", xAxis: 1, yAxis: 4.6}

            ]
          },
          data:[4.60,4.60,4.60]
        }


      ]
    });
  }


}
