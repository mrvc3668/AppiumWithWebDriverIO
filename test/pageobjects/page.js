/**
 * 
 */
module.exports = class Page {

    get storageWidget() {
        return $("//android.widget.TextView[@resource-id='android:id/title' and @text='Storage']");
    }

    get batteryWidget() {
        return $("//android.widget.TextView[@resource-id='android:id/title' and @text='Battery']");
    }
}