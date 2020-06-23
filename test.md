# AutoProxy格式的自动切换规则

<P>这是自用的自动代理规则列表</p>
<p>黑名单gfwlist.pac来源  https://github.com/gfwlist/gfwlist</p>
<p>白名单whitelist.pac来源 https://github.com/neko-dev/gfw_whitelist</p>
<p>本人在黑名单基础上增加了一部分规则 在白名单的基础上增加了一部分国内CDN域名和常用域名（白名单只提供常用网站）</p>
<p></p>
<p>使用方法：</p>
<p>1.黑名单模式</p>
<p>SwitchyOmega扩展里新建switch profile模式（适用于Firefox 57+和Chrome）</p>
<p>规则列表地址填入 https://git.io/gfw-list 或 https://raw.githubusercontent.com/aglent/autoproxy/master/gfwlist.pac 格式选择 autoproxy</p>
![img](image/gfwlist.png)