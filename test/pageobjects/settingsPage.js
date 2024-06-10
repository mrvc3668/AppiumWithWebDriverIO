const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * 
 */
class SettingsPage extends Page {
   
    get batteryStatus () {
        return $("//android.widget.TextView[@resource-id='com.android.settings:id/usage_summary']");
    }

    get storageStatus () {
        return $("//android.widget.TextView[@resource-id='com.android.settings:id/usage_summary']");
    }

    get NavigateBack(){
        return $("//android.widget.ImageButton[@content-desc='Navigate up']");
    }

    /**
     * 
     * @returns 
     */
    async getBatteryStatus(){
        (await super.batteryWidget).click();
        var stat = (await this.batteryStatus).getText();
        (await this.NavigateBack).click();
        
        return stat;
    }

    /**
     * 
     * @returns 
     */
    async getStorageStatus(){
        (await super.storageWidget).click();
        var stat = (await this.storageStatus).getText();
        return stat;
    }    
}

module.exports = new SettingsPage();
