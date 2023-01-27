<?php

require_once __DIR__ . "/../vendor/autoload.php";

//$dbManager = new \think\DbManager();
//$dbManager->setConfig([
//    // 默认数据连接标识
//    'default'     => 'mysql',
//    // 数据库连接信息
//    'connections' => [
//        'mysql' => [
//            // 数据库类型
//            'type'     => 'mysql',
//            // 主机地址
//            'hostname' => '127.0.0.1',
//            // 用户名
//            'username' => 'root',
//            //
//            'password' => '123456',
//            // 数据库名
//            'database' => 'demo',
//            // 数据库编码默认采用utf8
//            'charset'  => 'utf8',
//            // 数据库表前缀
//            'prefix'   => '',
//            // 数据库调试模式
//            'debug'    => true,
//        ],
//    ],
//]);
//
//
//
//
//$data = $dbManager->table('user_demo')->where(true)->find();

class MyConnection implements \think\db\ConnectionInterface
{

    protected \think\db\Query $query;
    public function __construct()
    {
        $this->query = new \think\db\Query($this);
    }

    public function getQueryClass(): string
    {
        return \think\db\Query::class;
    }

    public function table($table): \think\db\Query
    {
        return $this->query->table($table);
    }

    public function name($name)
    {
        return $this->query->name($name);
    }

    public function connect(array $config = [], $linkNum = 0)
    {
        return new PDO($config['dsn'], $config['username'], $config['password']);
    }

    public function setDb(\think\DbManager $db)
    {
        // TODO: Implement setDb() method.
    }

    public function setCache(\Psr\SimpleCache\CacheInterface $cache)
    {
        // TODO: Implement setCache() method.
    }

    public function getConfig(string $config = '')
    {
        // TODO: Implement getConfig() method.
    }

    public function close()
    {
        // TODO: Implement close() method.
    }

    public function find(\think\db\BaseQuery $query): array
    {
        // TODO: Implement find() method.
    }

    public function select(\think\db\BaseQuery $query): array
    {
        // TODO: Implement select() method.
    }

    public function insert(\think\db\BaseQuery $query, bool $getLastInsID = false)
    {
        // TODO: Implement insert() method.
    }

    public function insertAll(\think\db\BaseQuery $query, array $dataSet = []): int
    {
        // TODO: Implement insertAll() method.
    }

    public function update(\think\db\BaseQuery $query): int
    {
        // TODO: Implement update() method.
    }

    public function delete(\think\db\BaseQuery $query): int
    {
        // TODO: Implement delete() method.
    }

    public function value(\think\db\BaseQuery $query, string $field, $default = null)
    {
        // TODO: Implement value() method.
    }

    public function column(\think\db\BaseQuery $query, $column, string $key = ''): array
    {
        // TODO: Implement column() method.
    }

    public function transaction(callable $callback)
    {
        // TODO: Implement transaction() method.
    }

    public function startTrans()
    {
        // TODO: Implement startTrans() method.
    }

    public function commit()
    {
        // TODO: Implement commit() method.
    }

    public function rollback()
    {
        // TODO: Implement rollback() method.
    }

    public function getLastSql(): string
    {
        // TODO: Implement getLastSql() method.
    }
}