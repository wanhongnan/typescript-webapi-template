/*
 * ********************************************************************************************************************************
 * 作    者   ： South
 * 版    本   :  1.0.0.0
 * 创建日期   :  2019/3/24
 * 说    明   :  
 * --------------------------------------------------------------------------------------------------------------------------------
 * 版本         修改日期          作者            说明         
 * 1.0.0.0      2019/3/24         South           创建
 * ********************************************************************************************************************************
 */


import { async } from "rxjs/internal/scheduler/async";
import { resolve } from "url";

const path = require('path');
const fs = require('fs');
const JSON5 = require('json5');
var data = {};

/**
 * 配置文件接口定义
 */
export type AppConfig = {
  logFile : string;
  mangodbUrl : string;
  server : {
    ip : string,
    port : number,
    httpsPort : number,
  },
  redisUrl : string;
  logLevel : string;
}

export async function loadConfig() : Promise<boolean> {
  return new Promise((reslove,reject)=>{
    const file = path.join(process.cwd(),'configs.json5')
    fs.readFile(file, function (err, txt) {
      if (err) console.error(err)
      var obj = JSON5.parse(txt);
      Object.assign(data,obj);
      console.dir(data);
      reslove(true);
    })
  });
}

export function config() : AppConfig{
  return data as AppConfig
}

