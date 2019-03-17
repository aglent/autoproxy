# AutoProxy格式的自动切换规则

<P>这是自用的自动代理规则列表
<p>黑名单gfwlist.pac来源  https://github.com/gfwlist/gfwlist
<p>白名单whitelist.pac来源 https://github.com/neko-dev/gfw_whitelist
<p>本人在黑名单基础上增加了一部分规则 在白名单的基础上增加了一部分国内CDN域名和常用域名（白名单只提供常用网站）
<p></p>
<p>使用方法：
<p>1.黑名单模式
<p>SwitchyOmega扩展里新建switch profile模式（适用于Firefox 57+和Chrome）
<p>规则列表地址填入 https://raw.githubusercontent.com/aglent/autoproxy/master/gfwlist.pac 格式选择 autoproxy
<p>图示 <a href="https://github.com/aglent/autoproxy/blob/master/gfwlist.png">gfwlist.png</a>
<p>2.白名单模式
<p>SwitchyOmega扩展里新建switch profile模式（适用于Firefox 57+和Chrome）
<p>规则列表地址填入 https://raw.githubusercontent.com/aglent/autoproxy/master/whitelist.pac 格式选择 autoproxy
<p>图示 <a href="https://github.com/aglent/autoproxy/blob/master/whitelist.png">whitelist.png</a>
<P></p>

# 中国国内IP白名单代理规则
<p>使用方法：
<p>下载chinaiplist.pac，SwitchyOmega扩展里新建pac profile模式（适用于Chrome），填写PAC URL。
<p>例如pac文件的绝对路径是d:\chinaiplist.pac，PAC URL填写file://d:/chinaiplist.pac。
