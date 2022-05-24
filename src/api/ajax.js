// ajax请求函数模块
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
  return new Promise(function (resolve, reject){
    //执行异步请求
    let promise
    if(type==='GET'){
      //准备url query参数数据
      let dataStr='' //数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      if(dataStr!==''){
        dataStr=dataStr.substring((0,dataStr.lastIndexOf('&')))
        url=url+'?'+dataStr
      }
      promise=axios.get(url)
    }else{
      promise=axios.post(url,data)
    }
    promise.then(function (response){
      //成功调用resolve()
      //封装一下,使暴露出去的对象直接就是data,简化外部调用
      resolve(response.data)
    }).catch(function (error){
        //失败调用reject()
      reject(error)
      })
  })
}
