! Regex

! 中国国内域名
/.+\.com\.cn/
/.cn/
/.+ac.cn/
/.+acs.cn/
/.+edu.cn/
/.+gov.cn/
/.+net.cn/
/.+org.cn/

! 如果google搜索字符中包含了中国国内域名 因上面的规则不会走代理 特排除
! 添加youtube域名是为了解决无法登录google账户的问题
@@||google.com
@@||youtube.com
@@||appspot.com
@@||v2ray.com
@@|https://www.paypal.com/us/

/10\.\d+\.\d+\.\d+/
/127\.0\.0\.1/
/172\.16\.\d+\.\d+/
/192\.168\.\d+\.\d+/

! Subdomain
|https://az764295.vo.msecnd.net
|https://ipv6.google.com
|https://vscode-update.azurewebsites.net
|https://www.hao123.com

! 中国CDN白名单 来源https://github.com/mawenjian/china-cdn-domain-whitelist/blob/master/china-cdn-domain-whitelist.txt
! 蓝汛
||gslbsvc.net.cn
||chinacache.com.cn
||ccgslb.net
||gslbsvc.com.cn
||cdnsvc.cn
||ccgslb.cn
||cdn2cdn.net
||blueit.org.cn
||cc-1.com
||cdnsvc.net
||ccgslb.com.cn
||lxsvc.net
||lxsvc.cn 
||chinacache.org
||gslbsvc.com
||ccgslb.com
||gslbsvc.cn
||chinacache.com
||igslb.net
||chinacache.net
||cdnsvc.net.cn
||ccgslb.net.cn
||hd-cdn.com
||cdnsvc.com.cn
||cdnsvc.com
||speedupchina.net
||b2r.com.cn
||blueit.com
||lxsvc.cn
||gslbsvc.net
||speedupchina.com
||cc-cps.com
||cc-cps.com.cn
||cc-cps.net
||cc-cps.mobi
||cc-cps.cn
||ccb.com
||ccbench.com
||webluker.com
||ccindex.cn
||ccindex.com.cn
||ccmplus.com.cn
||ccmplus.net
||ccmplus.cn

! Webluker
||xgslb.net

! 网宿
||wscdns.com
||ourglb0.com
||wsngb.com
||lxdns.com
||lxdns.net
||51cdn.com
||chinanetcenter.com
||netcenter.com.cn
||wangsu.com
||ourwebat.com
||ourwebcdn.com

! 快网
||fastweb.com.cn
||fwdns.net
||hadns.net
||cachecn.net
||sz-dns.net
||cachecn.com
||cloudcdn.cn
||1test.cn
||5test.cn
||fsspace.com
||fsspace.com.cn
||fsspace.cn
||cloudcdn.net
||fastwebcdn.com
||hacdn.com
||fwcdn.com
||fwcdn.net
||hacdn.net
||cloudglb.com
||cloudxns.net
||cloudglb.net
||cloudxns.com
||cloudtcp.net
||myxns.cn
||newdefend.cn
||myxns.net.cn
||myxns.com.cn
||myxns.org
||newdefend.net
||newdefend.org
||newdefend.net.cn
||newdefend.com.cn
||newdefend.org.cn
||newdefend.com
||ffdns.net
||fwmob.com
||tlgslb.com 
||fastcdn.com 

! 阿里云CDN
||kunlunea.com
||kunlunso.com
||kunlunwe.com
||kunlunno.com
||kunlunaq.com
||kunlunpi.com
||kunlunra.com
||kunlungr.com
||kunlunhuf.com
||kunlunsl.com
||kunlunar.com
||kunlunta.com
||kunlungem.com
||kunluncan.com
||kunlunle.com
||kunlunvi.com
||kunlunli.com
||kunlunsc.com
||kunlunsa.com
||kunlunca.com
||alikunlun.net
||alikunlun.com

！腾讯CDN
||qcloud.com
||myqcloud.com
||tcdn.qq.com
||cdntip.com

! 百度云CDN
||bdydns.net
||bcedns.net
||bcedns.com
||bcedns.cn
||bdydns.com
||baiduyundns.net
||bdydns.cn
||baiduyundns.com
||baiduyundns.cn

! 百度云加速
||yunjiasu-cdn.net

! 七牛
||qiniudn.com
||qbox.me
||clouddn.com
||qiniudns.com

! 又拍云
||aicdn.com

! 360网站卫士
||dnspao.com
||360wzb.cn

! 同兴万点CDN
||cdngc.net
||cdnetworks.net
||gccdn.net

! CDN联盟
||cdnudns.com

! 白山云 
||qingcdn.com

! 未知
||hdslb.com
||hdslb.net

!-------------------------------------

! 国内常用域名

! 0
||0o0.ooo

! 1
||10010.com
||10086.cn
||114la.com
||115.com
||123cha.com
||126.com
||126.net
||127.net
||163.com
||1688.com
||17173.com
||1717388.com
||178.com
||17ce.com
||17k.com
||189.cn
||1qimg.com
||1qmsg.com
||1tpic.com
||1year.cc
||1years.cc

! 2
||2345.com
||21cn.com
||2cto.com

! 3
||3366.com
||33ss.tech
||360.cn
||360.com
||360buy.com
||360buyimg.com
||360doc.com
||36kr.com
||3dmgame.com

! 4
||4399.com

! 5
||51.la
||51cto.com
||51job.com
||51jobcdn.com
||51fund.com
||52asus.com
||52pojie.cn
||56.com
||58.com
||58pic.com

! 6
||6.cn

! 7
||766.com
||7k7k.com
||7to.cn

! 8
||86ps.com

! 9
||91.com
||99fund.com

! A
||a963.com
||acfun.cn
||acfun.tv
||acg.tv
||acgvideo.com
||acs.org
||aday01.com
||adf.ly
||aicheren.com
||aipai.com
||aiwebcom.com
||aixifan.com
||aizhan.com
||akamaihd.net
||akarin.me
||akarin.top
||alibaba.com
||alicdn.com
||alimama.com
||alipay.com
||alipayobjects.com
||alisports.com
||aliyun.com
||aliyuncs.com
||amap.com
||amazon.cn
||anjuke.com
||anquan.org
||anquanbao.com
||anzhi.com
||appcgn.com
||appgame.com
||appinn.com
||aps.org
||areyoucereal.com
||arubanetworks.com
||atomicstryker.net
||augix.me
||autohome.com.cn

! B
||baidu.com
||baiducontent.com
||baidupan.com
||baidupcs.com
||baidustatic.com
||bankcomm.com
||baozoumanhua.com
||battlenet.com.cn
||bdimg.com
||bdstatic.com
||behe.com
||beianbeian.com
||bilibili.com
||biligame.com
||biligame.net
||bing.com
||blackyau.cc
||blizzard.cn
||blizzardgames.cn
||blogjava.net
||boc.cn
||bootcdn.cn
||bootcss.com
||bqtalk.com
||bt0.com
||bumimi.com
||buu.edu.cn
||bybbs.org
||byfunds.com

! C
||cachemoment.com
||cas.cn
||cctv.com
||cdn.jsdelivr.net
||cdnbee.com
||cdndm.com
||cdndm5.com
||cdnst.net
||cdog.me
||ce.cn
||ceair.com
||cee.network
||china.com
||chinadsl.net
||chinaso.com
||chinassl.net
||chinaunix.net
||chinaz.com
||chiphell.com
||chsi.com.cn
||chuangzaoshi.com
||cli.im
||cloudinary.com
||cloudxns.net
||cmbchina.com
||cnbeta.com
||cnblogs.com
||cnepub.com
||cnki.net
||cnr.cn
||cntv.cn
||cnwest.com
||cnzz.com
||cnzz.net
||coderstory.cn
||coding.io
||coding.me
||coding.net
||coolapk.com
||coolpad.com
||cqvip.com
||csair.com
||csdn.net
||csdnimg.cn
||css.net
||css.network
||ct10000.com
||ctrip.com

! D
||d7vg.com
||dandanplay.com
||daocloud.io
||datagrand.com
||ddos.cc
||deepin.com
||deepin.org
||dianping.com
||dict.cn
||dilidili.com
||dilidili.wang
||dingtalk.com
||diybeta.com
||diyvm.com
||dm5.com
||dmzj.com
||dnspod.cn
||docin.com
||douban.com
||douban.fm
||doubleclick.net
||douyu.com
||douyucdn.cn
||downg.com
||doyoo.net
||duanwenxue.com
||duguletian.com
||duoshuo.com
||duowan.com
||dwstatic.com
||dygod.net

! E
||eastmoney.com
||eccn.com
||eeboard.com
||edingyue.com
||elecfans.com
||elemecdn.com
||elsevier.com
||enkj.com
||eqoe.cn
||ele.me
||erji.net
||etao.com
||eudic.net

! F
||fang.com
||feng.com
||fengkongcloud.com
||fengniao.com
||fengqu.com
||fir.im
||flow.ci
||freebuf.com

! G
||gaokao.com
||gamersky.com
||ganji.com
||gank.io
||geetest.com
||getfedora.org
||getui.com
||gewara.com
||gfan.com
||gitee.com
||gmw.cn
||golaravel.com
||gotoread.com
||gtimg.cn
||guahao.com
||guancha.cn
||guokr.com

! H
||h-ui.net
||h2os.com
||hacpai.com
||haiyinhui.com
||halyul.cc
||hao123.com
||haodf.com
||hdslb.com
||hdslb.net
||hejie.me
||heweather.com
||hexun.com
||hexunimg.com
||hikvision.com
||hitokoto.cn
||hiwifi.com
||hostker.com
||huaban.com
||huanmusic.com
||huanqiu.com
||huawei.com
||huazhu.com
||huiji.wiki
||huijistatic.com
||huijiwiki.com
||hujiang.com
||huomao.com
||hupu.com
||huxiu.com
||hxjyb.com
||hy233.tv

! I
||i-meto.com
||i21st.cn
||iapps.im
||iask.com
||iaweg.com
||ibm.com
||ibruce.info
||iciba.com
||ieee.org
||ifanr.com
||ifanr.in
||ifdream.net
||ifeng.com
||ifengimg.com
||iguxuan.com
||iknoworld.net
||im9.com
||imaschina.com
||imiku.me
||imjad.cn
||imooc.com
||imququ.com
||installbi.me
||ip-api.com
||ip111.cn
||ipip.net
||iplaysoft.com
||ipqi.co
||iqing.in
||iqiyi.com
||iqiyipic.com
||it168.com
||itc.cn
||itellyou.cn
||iteye.com
||ithome.com
||itpub.net

! J
||j.cn
||jandan.net
||javaeye.com
||jb51.net
||jcodecraeer.com
||jd.com
||jfrft.com
||jhdec.com
||jianguoyun.com
||jianshu.com
||jianshu.io
||jiathis.com
||jiemian.com
||jiepang.com
||jikexueyuan.com
||jinshuju.net
||jisuanke.com
||jomodns.com
||joyyang.com
||jzb.com

! K
||kafan.cn
||kan300.com
||kancloud.cn
||kankan.com
||kaola.com
||kaoqin.com
||kekenet.com
||kf5.com
||kmf.com
||knownsec.com
||krspace.cn
||ksyun.com
||ku6.com
||kuaizhan.com

! L
||lackar.com
||lany.me
||lanyus.com
||lanzous.com
||laomoit.com
||laravel-china.org
||lbesec.com
||le.com
||leancloud.cn
||lenovo.com.cn
||lenovomobile.cn
||lenovomobile.com
||letv.com
||letvimg.com
||liaoxuefeng.com
||linuxidc.com
||liyin.date
||lizhi.io
||lncld.net
||locvps.com
||lofter.com
||lolinet.com
||longzhu.com
||lu.com
||lucifr.com
||luojuly.cn
||luoo.net
||lwl12.com
||lyjsws.com

! M
||mail4geek.com
||mangocity.com
||maoyan.com
||masadora.net
||materializecss.cn
||maxfox.me
||mcbbs.net
||mdui.org
||mediav.com
||meiqia.com
||meituan.com
||meituan.net
||meizu.com
||mengniang.org
||mi.com
||miaopai.com
||microsoft.com
||mikanani.me
||mindstore.io
||mingdao.com
||miui.com
||mmstat.com
||mmtrix.com
||moe.im
||moe123.net
||moetransit.com
||mokeedev.com
||momentcdn.com
||msftconnecttest.com
||mtyun.com
||muchong.com
||mukewang.com
||mumayi.com
||mydrivers.com

! N
||nature.com
||ncfwx.com
||nekonazo.com
||netease.com
||netease.im
||netseer.com
||newsmth.net
||nga.cn
||ngacn.cc
||nuomi.com
||nvidia.cn

! O
||obsapp.com
||oekaki.so
||omico.me
||oneplus.cn
||oneplusbbs.com
||open-open.com
||ops.moe
||oray.com
||oschina.io
||oschina.net
||ourdvsss.com
||overwatchleague.cn

! P
||paipai.com
||panda.tv
||panduoduo.net
|https://www.paypal.com/c2/
||pcbeta.com
||pdcicons.ml
||pdim.gs
||pengyou.com
||phonegap100.com
||phpcomposer.com
||pingwest.com
||playubuntu.cn
||plu.cn
||portablesoft.org
||pplive.com
||pptv.com
||psnine.com
||pythonclub.org

! Q
||qbox.me
||qcloud.com
||qcwgg.com
||qdaily.com
||qdan.me
||qeeyou.com
||qhimg.com
||qhmsg.com
||qhres.com
||qidian.com
||qihucdn.com
||qingmang.me
||qingting.fm
||qiniu.com
||qiniucdn.com
||qiyukf.com
||qlogo.cn
||qnssl.com
||qpic.cn
||qq.com
||qqmail.com
||qqzzz.net
||qx121.com
||qunar.com
||qyer.com

! R
||repaik.com
||renren.com
||researchgate.net
||right.com.cn
||rkecloud.com
||rkidc.net
||rlcdn.com
||rom.cn
||rom.mk
||rongcloud.cn
||rsc.org
||ruanyifeng.com
||ruby-china.org
||runoob.com

! S
||sandai.net
||sarm.net
||sb.sb
||sciencedirect.com
||sciencemag.org
||sciencenet.cn
||sdo.com
||seele.tech
||segmentfault.com
||sensorsdata.cn
||sf-express.com
||sfbest.com
||shikezhi.com
||shimo.im
||shiyanlou.com
||sigmaaldrich.com
||sina.cn
||sina.com
||sina.com.cn
||sinaapp.com
||sinaimg.cn
||sinajs.cn
||since1989.org
||sm.ms
||smart2pay.com
||smartgslb.com
||smartisan.com
||smzdm.com
||so.com
||sogou.com
||sohu.com
||soku.com
||songshuhui.net
||soso.com
||soufun.com
||speedtest.net
||springer.com
||springerlink.com
||sspai.com
||stargame.com
||steamcn.com
||sui.com
||suning.com
||swapteam.cn
||sznews.com

! T
||t.tt
||tanx.com
||taobao.com
||taobaocdn.com
||tbcdn.cn
||tech-ex.com
||tencent.com
||tencentmind.com
||tenpay.com
||tenxcloud.com
||tgbus.com
||themex.net
||thepaper.cn
||thinkphp.cn
||thomsonreuters.com
||thunderex.com
||tianya.cn
||tietuku.com
||tigerlust.com
||tingall.com
||tingyun.com
||tmall.com
||tool.lu
||totolink.cn
||toushibao.com
||toutiao.com
||toutiao.io
||tower.im
||tplogin.cn
||truevue.org
||ttt.tt
||tudou.com
||tuicool.com
||tuna.moe
||tuniu.com

! U
||u9u9.com
||ubuntu.org.cn
||uisdc.com
||umeng.com
||upaiyun.com
||upyun.com
||ustc.edu.cn
||ustclug.org
||uuu.moe
||uxengine.net

! V
||v2ex.com
||vamaker.com
||vhall.com
||videojj.com
||viosey.com
||vip.com
||vmall.com
||vpgame.com
||vpgcdn.com
||vpsmm.com
||vss.im
||vuejs.org.cn

! W
||w3school.com.cn
||waerfa.com
||wandoujia.com
||wangyin.com
||wanmei.com
||webofknowledge.com
||weibo.com
||weidunewtab.com
||weiosx.com
||weiyun.com
||wht.im
||wiley.com
||wisenjoy.com
||wiz.cn
||wjasset.com
||wodemo.com
||woyoo.com
||wstx.com

! X
||xcar.com.cn
||xclient.info
||xf9168.com
||xiachufang.com
||xiami.com
||xiaomi.com
||xinhuanet.com
||xitek.com
||xitu.io
||xldns.net
||xs8.cn
||xuanfengge.com
||xuetangx.com
||xujc.com
||xunlei.com
||xunyou.com
||xx1t.com
||xxsy.net
||xycdn.com

! Y
||yamibo.com
||yaohuo.me
||ydstatic.com
||yecdn.com
||yesky.com
||yiche.com
||yiclear.com
||yinxiang.com
||ykimg.com
||ylmf.net
||ynzs.cn
||youdao.com
||youku.com
||youth.cn
||yunpian.com
||yunshipei.com
||yy.com

! Z
||zaih.com
||zcool.com.cn
||zhan.com
||zhangyao.name
||zhanqi.tv
||zhaojin97.cn
||zhaopin.com
||zhihu.com
||zhimg.com
||zhiziyun.com
||zhongkao.com
||zhujike.com
||ziroom.com
||zimuzu.tv
||znyj365.com
||zol.com.cn
||zuk.cn
