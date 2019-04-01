const agent = navigator.userAgent.toLowerCase();

if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    location.href = "/browserBlock.do";
}