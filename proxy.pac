var hosts = ['google.com','googleusercontent.com','gstatic.com','ggpht.com','appspot.com','blogspot.com','googleapis.com','googlecode.com','googlelabs.com','gmail.com','google-analytics.com','facebook.com','fbcdn.net','facebook.net','akamaihd.net','tfbnw.net','thefacebook.com','fbops.com','fbplugin.com','dropbox.com','flickr.com','yimg.com','youtube.com','ytimg.com'];
function FindProxyForURL(url, host){
    // variable strings to return
    var proxy_yes = "PROXY 10.10.254.46:80";
    var proxy_no = "DIRECT";

    for (var i=0; i<hosts.length; i++) {
        if (shExpMatch(url, "*" + hosts[i] + "*")) {
            return proxy_yes;
        }
    }
    return "DIRECT";
}
