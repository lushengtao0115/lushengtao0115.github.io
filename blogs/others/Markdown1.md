---
title: Markdown语法
date: 2021-10-29
categories:
  - 其他
tags:
  - Markdown  
---

# 基础Markdown语法

### 1.标题

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题


### 2.列表

```markdown
- 无序列表1
- 无序列表2
1. 有序列表1
2. 有序列表2
```

- 无序列表1
- 无序列表2
1. 有序列表1
2. 有序列表2


### 3.引用

```markdown
> 这个是引用
>
> 和电子邮件的引用格式很像
```

> 这个是引用
>
> 和电子邮件的引用格式很像


### 4.粗体和斜体

```markdown
**这个是粗体**

*这个是斜体*
```

**这个是粗体**

*这个是斜体*



### 5.链接与图片

```markdown
[简书](http://www.jianshu.com)

 [link text][id]

[id]: http://example.com/  "optional title here"

<http://example.com/> or <address@example.com>

![](http://upload-images.jianshu.io/upload_images/259-0ad0d0bfc1c608b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```

[简书](http://www.jianshu.com)

 [link text][id]

[id]: http://example.com/  "optional title here"

<http://example.com/> or <address@example.com>

![](http://upload-images.jianshu.io/upload_images/259-0ad0d0bfc1c608b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



### 6.代码

```markdown
  <php>
       echo “hello world";
  </php>
  Use the `printf()` function.
```

```php
  <php>
       echo “hello world";
  </php>
```

行内引用代码：

Use the `printf()` function.



### 7.分割线

可以在一行中用三个以上的星号、减号、底线来建立一个分隔线

---




# 扩展Markdown语法(github扩展语法)

### 1.删除线

```markdown
~~Mistake text.~~
```

~~Mistake text.~~



### 2.代码块与语法高亮

```markdown
```ruby
require 'redcarpet'
markdown=Redcarpet.new("Hello World!")
puts markdown.to_html
```
```ruby

```ruby
require 'redcarpet'
markdown=Redcarpet.new("Hello World!")
puts markdown.to_html
```




### 3.表格

```markdown
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |




### 4.任务列表

```markdown
 - [ ] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported
 - [x] list syntax is required (any unordered or ordered list supported)
 - [x] this is a complete item
 - [ ] this is an incomplete item
```

 - [ ] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported
 - [x] list syntax is required (any unordered or ordered list supported)
 - [x] this is a complete item
 - [ ] this is an incomplete item





# 其他高级用法

待补充
