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

! Exclude Rules
! 如果google搜索字符中包含了中国国内域名 因上面的规则不会走代理 特排除
! 添加youtube域名是为了解决无法登录google账户的问题
@@||google.com
@@||youtube.com
@@||appspot.com
@@||v2ray.com
@@|https://www.paypal.com/us/
@@||nexitally.com
@@||googlevideo.com
@@||steemit.com

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
||114best.com
||114la.com
||115.com
||120ask.com
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
||39.net
||3dmgame.com

! 4
||4399.com

! 5
||51.la
||51cto.com
||51job.com
||51jobcdn.com
||51fund.com
||51mokao.com
||51talk.com
||51test.net
||51voa.com
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
||alibabacloud.com
||alicdn.com
||alimama.com
||alipay.com
||alipayobjects.com
||alisports.com
||aliyun.com
||aliyuncs.com
||alloyteam.com
||amap.com
||amazon.cn
||anjuke.com
||anquan.org
||anquanbao.com
||anzhi.com
||aoshu.com
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
||b1bj.com
||baicizhan.com
||baidu.com
||baiducontent.com
||baidupan.com
||baidupcs.com
||baidustatic.com
||bankcomm.com
||baozou.com
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
||bitauto.com
||blackyau.cc
||blizzard.cn
||blizzardgames.cn
||blogjava.net
||boc.cn
||boomss.co
||bootcdn.cn
||bootcss.com
||bqtalk.com
||bt0.com
||budejie.com
||bumimi.com
||buu.edu.cn
||bwh88.net
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
||chinabyte.com
||chinadsl.net
||chinaso.com
||chinassl.net
||chinaunix.net
||chinaz.com
||chiphell.com
||chsi.com.cn
||chuangzaoshi.com
||cifm.com
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
||coolapkmarket.com
||coolpad.com
||cowtransfer.com
||cqvip.com
||csair.com
||csdn.net
||csdnimg.cn
||css.net
||css.network
||ct10000.com
||ctfile.com
||ctrip.com

! D
||d7vg.com
||dandanplay.com
||daocloud.io
||datagrand.com
||ddos.cc
||deepin.com
||deepin.org
||dgtle.com
||dianping.com
||dict.cn
||dilidili.com
||dilidili.wang
||dingtalk.com
||diybeta.com
||diyvm.com
||dlercloud.org
||douguo.com
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
||duitang.com
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
||elong.com
||elsevier.com
||enkj.com
||eqoe.cn
||ele.me
||erji.net
||etao.com
||eudic.net

! F
||fang.com
||fangdd.com
||feng.com
||fengkongcloud.com
||fengniao.com
||fengqu.com
||fgo.wiki
||fir.im
||fliggy.com
||flow.ci
||freebuf.com

! G
||gaokao.com
||gamersky.com
||ganji.com
||gank.io
||geekpark.net
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
||hjenglish.com
||hongxiu.com
||hostker.com
||hotmail.com
||huaban.com
||huajiao.com
||huanmusic.com
||huanqiu.com
||huawei.com
||huaweicloud.com
||huazhu.com
||huiji.wiki
||huijistatic.com
||huijiwiki.com
||hujiang.com
||huomao.com
||hupu.com
||huxiu.com
||huya.com
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
||icourse163.org
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
||ip138.com
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
||jiakaobaodian.com
||jianguoyun.com
||jianshu.com
||jianshu.io
||jiathis.com
||jiemian.com
||jiepang.com
||jikexueyuan.com
||jingyu.com
||jinshuju.net
||jisuanke.com
||jomodns.com
||joyyang.com
||juejin.im
||jxedt.com
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
||kuaidi100.com
||kuaizhan.com
||kugou.com

! L
||labi.com
||lackar.com
||lagou.com
||lany.me
||lanyus.com
||lanzous.com
||laomoit.com
||laravel-china.org
||lbesec.com
||le.com
||leancloud.cn
||leiphone.com
||leju.com
||lenovo.com.cn
||lenovomobile.cn
||lenovomobile.com
||letv.com
||letvimg.com
||lianjia.com
||liaoxuefeng.com
||lingfengyun.com
||linuxde.net
||linuxidc.com
||liyin.date
||live.com
||lizhi.io
||lncld.net
||lnmp.org
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
||mbalib.com
||mcbbs.net
||mdui.org
||mediav.com
||meilishuo.com
||meiqia.com
||meishichina.com
||meishij.net
||meituan.com
||meituan.net
||meizu.com
||mengniang.org
||mgtv.com
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
||mogujie.com
||mokeedev.com
||momentcdn.com
||msftconnecttest.com
||mtyun.com
||muchong.com
||mukewang.com
||mumayi.com
||myapp.com
||mydrivers.com

! N
||nature.com
||ncfwx.com
||nekonazo.com
||netease.com
||netease.im
||netseer.com
||newsmth.net
||nipic.com
||nga.cn
||ngacn.cc
||npupt.com
||nuomi.com
||nvidia.cn

! O
||obsapp.com
||oekaki.so
||omico.me
||oneplus.cn
||oneplusbbs.com
||onlylady.com
||open-open.com
||ops.moe
||oray.com
||oschina.io
||oschina.net
||ourdvsss.com
||outlook.com
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
||qiushibaike.com
||qiuziti.com
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
||sanguosha.com
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
||shanbay.com
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
||u17.com
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
||variflight.com
||varmilo.com
||vhall.com
||videojj.com
||viosey.com
||vip.com
||vmall.com
||vpgame.com
||vpgcdn.com
||vpser.net
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
||ximalaya.com
||xinhuanet.com
||xinshipu.com
||xitek.com
||xitu.io
||xldns.net
||xs8.cn
||xuanfengge.com
||xueqiu.com
||xuetangx.com
||xujc.com
||xunlei.com
||xunyou.com
||xx1t.com
||xxsy.net
||xycdn.com
||xywy.com

! Y
||yamibo.com
||yaohuo.me
||ydstatic.com
||yecdn.com
||yesky.com
||yicai.com
||yiche.com
||yiclear.com
||yingjiesheng.com
||yinxiang.com
||yinyuetai.com
||ykimg.com
||ylmf.net
||ynzs.cn
||yoka.com
||youdao.com
||youku.com
||youth.cn
||yunpian.com
||yunshipei.com
||yy.com

! Z
||zaih.com
||zcool.com.cn
||zdic.net
||zealer.com
||zhan.com
||zhangyao.name
||zhanqi.tv
||zhaojin97.cn
||zhaopin.com
||zhibo8.cc
||zhihu.com
||zhimg.com
||zhiziyun.com
||zhongkao.com
||zhujike.com
||ziroom.com
||zimuzu.tv
||znyj365.com
||zol.com.cn
||zongheng.com
||zuk.cn
||zybuluo.com
