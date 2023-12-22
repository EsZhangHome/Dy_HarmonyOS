import hilog from '@ohos.hilog';

/**
 * 因为我想在Ability 中调用 Logger
 * 但是 Ability 中访问 创建的 ets 文件 ，无法访问，Ability 是 ts 文件，
 * 所以此文件创建 TypeScript ts 文件
 */

const LOGGER_PREFIX: string = 'Dy_HarmonyOS';

class Logger {
  private domain: number;
  private prefix: string;

  //日志 格式
  private forma: string = '%{public}s, %{public}s';

  // 构造函数
  constructor(prefix: string = '', domain: number = 0xFF00) {
    this.domain = domain;
    this.prefix = prefix;
  }

  // info
  info(...args: string[]): void {
    hilog.info(this.domain, this.prefix, this.forma, args)
  }

  // debug
  debug(...args: string[]): void {
    hilog.debug(this.domain, this.prefix, this.forma, args)
  }

  // error
  error(...args: string[]): void {
    hilog.error(this.domain, this.prefix, this.forma, args)
  }

  // warn
  warn(...args: string[]): void {
    hilog.warn(this.domain, this.prefix, this.forma, args)
  }
}

export default new Logger(LOGGER_PREFIX, 0xFF02);