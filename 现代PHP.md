# 第一章 &nbsp; PHP 之道
## 1.0 介绍
PHP 之道是介绍最新的 PHP 最佳实践的网站，其网址是 <https://phptherightway.com/>。最新的中文版网址是 <http://phptherightway.p2hp.com/>

本章介绍 PHP 之道中值得关注的概念。

## 1.1 XDebug
受制于时间，精力以及作者的水平，本节只介绍 vscode + Xdebug3 的远程断点调试。

### 1.1.1 vscode 配置

在 vscode 中安装 PHP Debug 插件，点击左侧调试图标，编辑 launch.json 文件，配置如下：
```json
"configurations": [
    {
        "name": "Listen for Xdebug",
        "type": "php",
        "request": "launch",
        "port": 9003,
        "pathMappings": {
            "/home/zhanglihui/www/notes": "${workspaceFolder}",
        }
    }
]
```
其中，port 是监听 Xdebug 的端口，pathMapping 是远程文件和本地文件的映射，本地调试无需配置此映射。

### 1.1.2 Xdebug 配置
安装好 Xdebug3 后，调整关键配置如下:
```ini
; debug 模式可以断点跟踪
xdebug.mode = debug
; Xdebug 将连接此 IP 进行调试
xdebug.client_host = x.x.x.x
; 9003 是默认端口
xdebug.client_port = 9003
xdebug.trigger_value = my_trigger_value
```

### 1.1.3 验证
上述配置好之后，在 vscode 中打好断点并启动监听，启动你的 web 服务，在浏览器 / postman 中访问，就可以断点调试了。浏览器 / postman 中访问时须在 Query String 或 FormData 或 COOKIE 中带上 TRIGGER_VALUE=my_trigger_value 的参数。


## 1.2 依赖注入
<http://phptherightway.p2hp.com/#dependency_injection>
## 1.3 错误和异常

# 第二章 &nbsp; PHP 框架
## 2.0 框架介绍
## 2.1 框架的几个核心概念
### 2.1.1 中间件
  
>中间件主要用于编织从 请求(Request) 到 响应(Response) 的整个流程。我们可以通过对多个中间件的组织，让数据的流动按预定的方式进行。中间件的本质是一个洋葱模型，我们通过一个图来解释它：

> ![，](https://hyperf.wiki/2.1/zh-cn/middleware/middleware.jpg)

> 图中的顺序为按照 Middleware 1 -> Middleware 2 -> Middleware 3 的顺序组织着，我们可以注意到当中间的横线穿过 内核 即 Middleware 3 后，又回到了 Middleware 2，为一个嵌套模型，那么实际的顺序其实就是：Request -> Middleware 1 -> Middleware 2 -> Middleware 3 -> Middleware 2 -> Middleware 1 -> Response 重点放在 核心 即 Middleware 3，它是洋葱的分界点，分界点前面的部分其实都是基于 请求(Request) 进行处理，而经过了分界点时，内核 就产出了 响应(Response) 对象，也是 内核 的主要代码目标，在之后便是对 响应(Response) 进行处理了，内核 通常是由框架负责实现的，而其它的就由您来编排了。  

基于 PSR-15 的中间件实现  
参考代码：PSR-implement/PSR15/test.php

参考链接：  
PSR-15 <https://learnku.com/docs/psr/psr-15-request-handlers/1626>  
relayphp <https://relayphp.com/>  
hyperf 中间件 <https://hyperf.wiki/2.1/#/zh-cn/middleware/middleware>  
mezzio 中间件框架 <https://docs.mezzio.dev/mezzio/v3/getting-started/features/>
### 2.1.2 容器
容器，也叫做服务容器，依赖注入（DI）容器，控制反转（IOC）容器。容器的目的是解决 DI 的问题。本节为方便起见，将容器保管的对象称作 <mark>服务</mark>。
> 用户不应该将容器作为参数传入对象，然后在对象中通过容器获得依赖。这样是把容器当作服务定位器来使用，而服务定位器是不受欢迎的模式。

illuminate/container 不仅提供了 PSR-11 规范的 has 和 get 方法，还提供了丰富的服务绑定、服务创建以及服务方法调用的功能。以下举例说明 illuminate/container 的用法。

+ 在注入之前，必须先绑定服务到容器。illuminate/container 的 make 方法可以自动将服务注入到建构方法：
```php
use Illuminate\Container\Container;
use PsrImplement\PSR11\Service\ApiFetch;

$container = new Container();

// 绑定类到容器
$container->singleton(ApiFetch::class);

class Foo {

    /** @var ApiFetch */
    protected $apiFetch;

    public function __construct(ApiFetch $apiFetch)
    {
        $this->apiFetch = $apiFetch;
    }

    public function api()
    {
        return $this->apiFetch->sucess('msg from api', ['data from api']);
    }
}

/** @var Foo */
$foo = $container->make(Foo::class);
$response = $foo->api();
```

+ illuminate/container 的 call 方法可以把服务注入到任意方法：
```php
use Illuminate\Container\Container;
use PsrImplement\PSR11\Service\ApiFetch;

$container = new Container();

// 绑定类到容器
$container->singleton(ApiFetch::class);

class Bar
{
    public function injectToMethod(ApiFetch $apiFetch)
    {
        return $apiFetch->sucess('msg from injectToMethod.', ['data from injectToMethod.']);
    }
}

$bar = new Bar();
/** call 方法执行 */
$response = $container->call([$bar, 'injectToMethod']);
```
注意：上述 make 和 call 方法不是 PSR-11 的内容，illuminate/container 为了方便依赖注入提供了这些方法。  

参考代码：PSR-implement/PSR11/test.php  

参考链接：  
PSR-11 说明文档 <https://learnku.com/docs/psr/psr-11-container-meta/1622>

### 2.1.3 服务提供者
有些框架将容器叫做服务管理器。执行服务提供者，会将服务类或对象绑定到容器中。在有的框架中，便于直接绑定的服务在配置文件中直接指定，需要执行一些特定方法才能绑定的服务，可以在服务提供者中绑定。服务提供者的本质是将特定的服务绑定到容器中。

下面的例子中，由于 Router 服务在创建时需要指定其配置文件的位置，因此，这里手动创建好 Router 对象，再将这个对象绑定到容器。将这个创建过程放到回调中，就可以在真正需要 Router 对象的时候才创建它，以节省资源。

```php
public function register()
{
    $this->app->singleton(Router::class, function () {
        $router = new Router($this->app, $this->app->getRootPath() . 'App/routes.php');
        return $router;
    });
}
```
### 2.1.4 事件机制
事件机制是观察者模式的一种实现，其关键概念如下：
>+ **事件** - 事件是发射器生成的消息。它可以是任意的 PHP 对象。
>+ **监听器** - 一个监听器是任意的可调用的 PHP 类或函数，它期待着事件的传递。相同的事件可以传递给零个或多个监听器。如果有必要，一个监听器可以入队一些其他的异步行为。
>+ **发射器** - 发射器是期待分发事件的任何 PHP 代码，也叫调用代码。它不是由任何特定的数据结构表示的，而是指用例。
>+ **分发器** - 分发器是一个服务对象，它的事件对象由发射器提供。分发器负责将事件传递给所有相关的监听器，但是必须把确定哪些监听器应该响应事件这一步骤委托给监听器提供者去做。
>+ **监听器提供者** - 监听器提供者负责确定哪些监听器是与给定事件相关的，但是它不能调用监听器。一个监听器提供者可能会指定零个或多个相关的监听器。

基于 PSR-14 的事件机制  
参考代码：PSR-implement/PSR14/test.php

## 2.2 尝试自己写一个简单框架
```bash
composer create-project vivid-lamp/installer
```



# 第三章 &nbsp; Swoole 与协程
