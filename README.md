

http://emmet.io/

*`!>.container>(nav>(ul>.item{item$}*3)+(ul>.item{item$@-4}*3))+.content>(h${Article $}+p.copy$>lorem10^hr)*3`

**单个元素**
   * 基本元素
    * `p ->`
    * `li ->`
    * `h1 ->`
   * class用`.`
    *`p.red ->`
    *`p.red.bold ->`
   * id用`#`
    * `p.red.bold#theId ->`
   * 属性用`[]`
    * `p.red.bold#theId[title=theTitle] ->`
   * 内容用`{}`
    * `p.red.bold#theId[title=theTitle]{内容} ->`
   * 倍增`*`
     * `p.red.bold#theId[title=theTitle]{内容}*5 ->`
   * 数字递增符号`$`
    * `p.red.bold#theId$[title=theTitle]{内容}*5 ->`
    * 三位数 `p.red.bold#theId$[title=theTitle]{内容}*5 ->`
   * 数字起点符号`@`  
     * 从5开始 `p.red.bold#theId@5$[title=theTitle]{内容}*5 ->`
     * 递减到5 `p.red.bold#theId@-5$[title=theTitle]{内容}*5 ->`

**复杂结构**
   * 子结构`>`
    * `div.one ->`
    * `div.one>h1 ->`
    * `div.one>h1{内容} ->`
   * 相加结构`+`
    * `div.one+h1 ->`
   * 复杂结构相加sibling `^`
    * 比较 `div.one>h1+div.two>h2 ->`和 `div.one>h1^div.two>h2 ->`
   * 运算符优先级grouping：()
    * `(div.one>h1)+(div.two>h2) ->`

**智能特性**
   * 写div的时候，可以省略div，直接写后面的  `.item ->`
   * 写ul的时候：`ul>.listItem`
   * `table>.row ->`
   * 列表
    * `table+ ->`
    * `ul+ ->`
    * `ol+ ->'
    * `dl+ ->

**快捷生成**
   * 自动生成html `! ->`
   * 等价于 `html:5 ->`
   * 再看看 `html:xs ->`, `html:xt ->`
   * `link:css ->`
   * `script:src ->`

**emmet css**
   * width:  `w ->`, `w90 ->`, `w90p ->`,  `w90e ->`
   * margin: `m ->`, `m5 ->`,`m5-auto ->`
   * border: `bd ->`, `bd1-solid-#e ->`
   * 相加：
    * .container: `w90p+m5px-auto+bd1-solid-#e+bxsh10-0-10-#c ->`
    * header:  `bb1-solid-#e+bgc#2+bdrs5-5-0+p5-10+cur:move ->`
    * #heading: `fwb+fsz12+ff:a+c#f ->`
    * .content `p10-> `
    * p `ff:m+fsz12+txsh0-0-2-#6`