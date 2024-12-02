import s from './mapcontainer.module.scss'
import AMapLoader from "@amap/amap-jsapi-loader";
import { useEffect } from "react";
const MapContainer = () => {
    let map = null
    useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: "「415d08200eb36edaba1feee2968408b8」",
    };
    AMapLoader.load({
      key: "65c52e9417fc3ac6e1396a8b3aa1b736", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
      .then((AMap) => {
        map = new AMap.Map("container", {
          rotateEnable:true,
    pitchEnable:true,
    zoom: 17,
    pitch: 50,
    rotation: -15,
    viewMode:'3D', //开启3D视图,默认为关闭
    zooms:[2,20],
    center:[104.188858,30.828137]
        });
        console.log(map.getCenter().toJSON())
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      map?.destroy();
    };
  }, []);
    return (
    <div
      id="container"
      className={s.container}
      style={{ height: "800px" }}
    ></div>
    )
}

export default MapContainer