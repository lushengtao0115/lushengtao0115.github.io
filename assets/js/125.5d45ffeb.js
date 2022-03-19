(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{757:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("操作数据库")])]),s._v(" "),a("p",[s._v("创建数据库 :  create database [if not exists] 数据库名;")]),s._v(" "),a("p",[s._v("删除数据库 : drop database [if exists] 数据库名;")]),s._v(" "),a("p",[s._v("查看数据库 : show databases;")]),s._v(" "),a("p",[s._v("使用数据库 : use 数据库名;")]),s._v(" "),a("blockquote",[a("p",[s._v("数据值和列类型")])]),s._v(" "),a("p",[a("u",[s._v("数值")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("tinyint 十分小的数据  1个字节")]),s._v(" "),a("li",[s._v("smallint  较小的数据  2个字节")]),s._v(" "),a("li",[s._v("mediumint  中等大小的数据   3个字节")]),s._v(" "),a("li",[a("strong",[s._v("int   标准的整数    4个字节   常用的")])]),s._v(" "),a("li",[s._v("bigint   较大的数据    8个字节")]),s._v(" "),a("li",[s._v("float   浮点数   4个字节")]),s._v(" "),a("li",[s._v("double    浮点数   8个字节  （精度问题）")]),s._v(" "),a("li",[s._v("decimal   字符串形式的浮点数")])]),s._v(" "),a("p",[a("u",[s._v("字符串")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("char   字符串固定大小的0-255")]),s._v(" "),a("li",[a("strong",[s._v("varchar  可变字符串   0-65535   常用的变量   String")])]),s._v(" "),a("li",[s._v("tinytext   微信文本   2^8-1")]),s._v(" "),a("li",[a("strong",[s._v("text  文本串   2^16-1    保存大文本")])])]),s._v(" "),a("p",[a("u",[s._v("时间日期")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("date   YYYY-MM-DD   日期格式")]),s._v(" "),a("li",[s._v("time   HH:  mm:  ss    时间格式")]),s._v(" "),a("li",[a("strong",[s._v("datetime   YYYY-MM-DD HH:  mm:  ss   最常用的时间格式")])]),s._v(" "),a("li",[a("strong",[s._v("timestamp    时间戳    1970.1.1到现在的毫秒数")])]),s._v(" "),a("li",[s._v("year   年份表示")])]),s._v(" "),a("p",[a("u",[s._v("null")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("没有值，未知")]),s._v(" "),a("li",[a("strong",[s._v("注意，不要使用NULL进行运算，结果为NULL")])])]),s._v(" "),a("blockquote",[a("p",[s._v("数据库的字段属性")])]),s._v(" "),a("p",[s._v("Unsigned：")]),s._v(" "),a("ul",[a("li",[s._v("无符号的整数")]),s._v(" "),a("li",[s._v("声明了该列不能声明为负数")])]),s._v(" "),a("p",[s._v("zerofill：")]),s._v(" "),a("ul",[a("li",[s._v("0填充的")]),s._v(" "),a("li",[s._v("不足的位数，使用0来填充：int(3),  5 --- 995")])]),s._v(" "),a("p",[s._v("自增"),a("strong",[s._v("Auto_InCrement")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("自动再上一条记录的基础上+1（默认）")]),s._v(" "),a("li",[s._v("通常用来涉及唯一的主键-index，必须是整数类型")]),s._v(" "),a("li",[s._v("可以自定义设计主键自增的起始值和步长")])]),s._v(" "),a("p",[s._v("非空"),a("strong",[s._v("NULL 和 NOT NULL")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("假设设置为not null，若不给他赋值，就报错")]),s._v(" "),a("li",[s._v("NULL，不填写，默认就是null")])]),s._v(" "),a("p",[a("strong",[s._v("DEFAULT")])]),s._v(" "),a("ul",[a("li",[s._v("默认的")]),s._v(" "),a("li",[s._v("用于设置默认值")]),s._v(" "),a("li",[s._v('例如,性别字段,默认为"男" , 否则为 "女" ; 若无指定该列的值 , 则默认值为"男"的值')])]),s._v(" "),a("p",[a("mark",[s._v("这个地方可以实验这几个字段属性，看看影响")]),s._v("。")]),s._v(" "),a("center",[a("mark",[s._v("重点")])]),s._v(" "),a("p",[a("strong",[s._v("创建数据库表")]),s._v("（重点）")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- 注意点，使用英文括号，表的名称和字段尽量使用``括起来\n-- 字符串用单引号括起来\n-- 所有的语句后面加,最后一个不用加\n-- PRIMARY KEY 主键，一般一个表只有唯一的一个\nCREATE TABLE IF NOT EXISTS `student` (\n    `id` int(4) NOT NULL AUTO_INCREMENT COMMENT '学号',\n    `name` varchar(30) NOT NULL DEFAULT '匿名' COMMENT '姓名',\n    `pwd` varchar(20) NOT NULL DEFAULT '123456' COMMENT '密码',\n    `sex` varchar(2) NOT NULL DEFAULT '男' COMMENT '性别',\n    `birthday` datetime DEFAULT NULL COMMENT '生日',\n    `address` varchar(100) DEFAULT NULL COMMENT '地址',\n    `email` varchar(50) DEFAULT NULL COMMENT '邮箱',\n    PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- 一般的格式\nCREATE TABLE [IF NOT EXISTS] `表名` (\n    `字段名` 列类型 [属性] [索引] [注释],\n    `字段名` 列类型 [属性] [索引] [注释],\n    ......\n    `字段名` 列类型 [属性] [索引] [注释]\n)[表类型][字符集设置][注释]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- 常用命令\nSHOW CREATE DATABASE school; -- 查看创建数据库的语句\nSHOW CREATE TABLE student; -- 查看student数据表的语句\nDESC student; -- 显示表的结构\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("数据表的类型")])]),s._v(" "),a("p",[s._v("MySQL的数据表的类型 : "),a("strong",[s._v("MyISAM")]),s._v(" , "),a("strong",[s._v("InnoDB")]),s._v(" , HEAP , BOB , CSV等...")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:\\Users\\hp\\AppData\\Roaming\\Typora\\typora-user-images\\image-20220304182027069.png",alt:"image-20220304182027069"}}),s._v(" "),a("p",[a("u",[s._v("常见的 MyISAM 与 InnoDB 类型")]),s._v("：")]),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"C:\\Users\\hp\\AppData\\Roaming\\Typora\\typora-user-images\\image-20220304182205531.png",alt:"image-20220304182205531"}}),s._v(" "),a("p",[a("u",[s._v("经验 ( 适用场合 )  ")]),s._v(":")]),s._v(" "),a("ul",[a("li",[s._v("适用 MyISAM : 节约空间及相应速度")]),s._v(" "),a("li",[s._v("适用 InnoDB : 安全性 , 事务处理及多用户操作数据表")])]),s._v(" "),a("p",[a("u",[s._v("在物理空间中的位置")]),s._v("：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("MySQL数据表以文件方式存放在磁盘中")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("包括表文件 , 数据文件 , 以及数据库的选项文件")]),s._v(" "),a("li",[s._v("位置 : Mysql安装目录\\data\\下存放数据表 . 目录名对应数据库名 , 该目录下文件名对应数据表 .")])])]),s._v(" "),a("li",[a("p",[s._v("注意 :")])]),s._v(" "),a("li",[a("ul",[a("li",[s._v("* . frm -- 表结构定义文件")]),s._v(" "),a("li",[s._v("* . MYD -- 数据文件 ( data )")]),s._v(" "),a("li",[s._v("* . MYI -- 索引文件 ( index )")]),s._v(" "),a("li",[a("u",[s._v("InnoDB类型数据表只有一个 *.frm文件 , 以及上一级目录的ibdata1文件")])]),s._v(" "),a("li",[s._v("MyISAM类型数据表对应三个文件 :\n"),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"C:\\Users\\hp\\AppData\\Roaming\\Typora\\typora-user-images\\image-20220304182542589.png",alt:"image-20220304182542589"}})])])])]),s._v(" "),a("p",[a("u",[s._v("设置数据库表的字符集编码")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("CHARSET=utf8")]),s._v(" "),a("li",[s._v("不设置的话，会是mysql默认的字符集编码（不支持中文）")]),s._v(" "),a("li",[s._v("我们可为数据库,数据表,数据列设定不同的字符集，设定方法 :\n"),a("ul",[a("li",[s._v("创建时通过命令来设置 , 如 : CREATE TABLE 表名()CHARSET = utf8;")]),s._v(" "),a("li",[s._v("如无设定 , 则根据MySQL数据库配置文件 my.ini 中的参数设定")])])])]),s._v(" "),a("center",[a("mark",[s._v("重点")])]),s._v(" "),a("blockquote",[a("p",[s._v("修改数据库")])]),s._v(" "),a("p",[a("u",[s._v("修改表")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- 修改表名\nALTER TABLE teacher RENAME AS teacher(11);\n-- 添加表的字段\nALTER TABLE teacher ADD age INT(11);\n-- 修改表的字段（重命名，修改约束）\nALTER TABLE teacher MODIFY age VARCHAR(11); -- 修改约束.MODIFY不用来字段重命名，只能修改字段类型和约束\nALTER TABLE teacher CHANGE age age1 INT(1); -- CHANGE用来字段重命名，不能修改字段类型和约束\n-- 删除表的字段\nALTER TABLE teacher DROP age;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("修改表名 :ALTER TABLE 旧表名 RENAME AS 新表名")]),s._v(" "),a("p",[s._v("添加字段 : ALTER TABLE 表名 ADD字段名 列属性[属性]")]),s._v(" "),a("p",[s._v("修改字段 :")]),s._v(" "),a("ul",[a("li",[s._v("ALTER TABLE 表名 MODIFY 字段名 列类型[属性]")]),s._v(" "),a("li",[s._v("ALTER TABLE 表名 CHANGE 旧字段名 新字段名 列属性[属性]")])]),s._v(" "),a("p",[s._v("删除字段 :  ALTER TABLE 表名 DROP 字段名")]),s._v(" "),a("p",[a("u",[s._v("删除表")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- 删除表\nDROP TABLE IF EXISTS teacher; \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("u",[s._v("其他")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('1. 可用反引号（`）为标识符（库名、表名、字段名、索引、别名）包裹，以避免与关键字重名！中文也可以作为标识符！\n\n2. 每个库目录存在一个保存当前数据库的选项文件db.opt。\n\n3. 注释：\n  单行注释 # 注释内容\n  多行注释 /* 注释内容 */\n  单行注释 -- 注释内容       (标准SQL注释风格，要求双破折号后加一空格符（空格、TAB、换行等）)\n   \n4. 模式通配符：\n  _   任意单个字符\n  %   任意多个字符，甚至包括零字符\n  单引号需要进行转义 \\\'\n   \n5. CMD命令行内的语句结束符可以为 ";", "\\G", "\\g"，仅影响显示结果。其他地方还是用分号结束。delimiter 可修改当前对话的语句结束符。\n\n6. SQL对大小写不敏感 （关键字）(建议写小写)\n\n7. 清除已有语句：\\c\n\n8. 所有的符号用英文\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])],1)}),[],!1,null,null,null);n.default=t.exports}}]);