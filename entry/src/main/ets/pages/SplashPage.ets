import router from '@ohos.router'
import { CommonConstants } from '../common/constants/CommonConstants'
import { Router } from '../common/constants/Router'

@Entry
@Component
struct SplashPage {
  aboutToAppear() {
    // 延迟跳转 -- 鸿蒙没有像Android 和 iOS 一样的启动splash ，这里模拟用延迟 2秒 splash
    setTimeout(() => {
      router.replaceUrl({ url: Router.MAIN_PAGE })
    }, CommonConstants.LAUNCHER_DELAY_TIME)
  }

  build() {
    RelativeContainer() {
      // logo 显示位置 __container__代表父容器的id 默认就是这样写的
      Row() {
        Image($r("app.media.init_logo"))
          .width($r("app.float.default_300vp"))
          .aspectRatio(1) // 设置宽高比
      }
      // middle 表示 横向的居中 center 表示纵向的居中 都设置代表是 屏幕居中
      .alignRules({
        middle: { anchor: "__container__", align: HorizontalAlign.Center },
        center: { anchor: "__container__", align: VerticalAlign.Center }
      })
      .id("init_logo") // 不写ID 不会显示这个布局

      Row() {
        Image($r("app.media.init_icon"))
          .width($r("app.float.default_90vp"))
          .aspectRatio(1) // 设置宽高比

      }
      .margin({ top: $r("app.float.default_90vp") })
      .width(CommonConstants.PERCENTAGE_100) // 只设置 width 充满 不设置 height 代表高度为子类高度
      .justifyContent(FlexAlign.Center)
      .alignRules({
        // 这里的 top 代表的是 我的 顶部是谁 就写谁的 ID
        top: {
          anchor: "init_logo",
          align: VerticalAlign.Bottom
        }
      })
      .id('init_icon') // 不写ID 不会显示这个布局
    }
    .backgroundColor(Color.White)
    .width(CommonConstants.PERCENTAGE_100)
    .height(CommonConstants.PERCENTAGE_100)
  }
}