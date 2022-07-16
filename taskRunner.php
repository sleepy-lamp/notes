<?php

/** 任务接口 */
interface TaskInterface
{
    public function start();
}

/** 邮件任务 */
class SendEmailTask implements TaskInterface
{
    protected $data;
    public function __construct($data)
    {
        $this->data = $data;
    }
    public function start()
    {
        Smtp::send([
            'to' => $this->data['email'],
            'subject' => $this->data['subject'],
            'body' => $this->data['body'],
            'html' => true
        ]);
    }
}

/** 创建订单任务 */
class CreateOrderTask implements TaskInterface
{
    protected $data;
    public function __construct($data)
    {
        $this->data = $data;
    }
    public function start()
    {
        DB::insert('tbl_order', [
            'product_id' => $this->data['product_id'],
            'price' => $this->data['price'],
            'user_id' => $this->data['user_id']
        ]);
    }
}

/** 文档索引 */
class IndexContent implements TaskInterface
{
    protected $data;
    public function __construct($data)
    {
        $this->data = $data;
    }
    public function start()
    {
        SearchEngine::indexDocument([
            'title' => $this->data['title'],
            'content' => $this->data['content']
        ]);
    }
}

/** 任务工厂 */
class TaskFactory
{
    public static function create($taskType, $data): TaskInterface
    {
        $className = str_replace('_', ' ', $taskType);
        $className = str_replace(' ', '', ucwords($className));
        if (!class_exists($className)) {
            throw new InvalidArgumentException('task type invalid.');
        }
        $task = new $className($data);
        if (!($task instanceof TaskInterface)) {
            throw new LogicException('unexpected object type.');
        }
        return $task;
    }
}

/** 任务调度 */
class TaskRunner
{
    /**
     * 根据传⼊的任务类型执⾏任务
     * @param string $taskType 任务类型，如 send_email、create_order
     * @param array $data 任务对应的上下⽂数据，例如发送邮件任务对应的 $data 有 email, 
   subject, body 等字段
     */
    public function run($taskType, $data)
    {
        $task = TaskFactory::create($taskType, $data);
        $task->start();
    }
}