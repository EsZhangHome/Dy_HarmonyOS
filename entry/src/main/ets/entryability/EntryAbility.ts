import UIAbility from '@ohos.app.ability.UIAbility';
import window from '@ohos.window';
import Logger from '../common/utils/Logger';

export default class EntryAbility extends UIAbility {
  onCreate(want, launchParam) {
    Logger.info('Ability onCreate');
  }

  onDestroy() {
    Logger.info('Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    // 主窗口已创建 设置主page 为此 ability
    Logger.info('Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        Logger.error('Failed to load the content', JSON.stringify(err) ?? '');
        return;
      }
      Logger.info('Succeeded in loading the content', JSON.stringify(data) ?? '');
    });
  }

  onWindowStageDestroy() {
    // 主窗口销毁 释放UI相关资源
    Logger.info('Ability onWindowStageDestroy');
  }

  onForeground() {
    // Ability 进入前台
    Logger.info('Ability onForeground');
  }

  onBackground() {
    // Ability 进入后台
    Logger.info('Ability onBackground');
  }
}
