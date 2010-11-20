
document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event) {
    var userInfo = new Object();
    userInfo.nodeName = event.target.nodeName;
    if (event.target.nodeName == 'A') {
	userInfo.href = event.target.href;
    } else if (event.target.parentElement.nodeName == 'A') {
	userInfo.href = event.target.parentElement.href;
    }
    safari.self.tab.setContextMenuEventUserInfo(event, userInfo);
}
