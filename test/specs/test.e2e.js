const { expect } = require('@wdio/globals')
const settingsPage = require('../pageobjects/settingsPage.js')

describe('settings application', () => {
    it('should validate battery status', async () => {
        var stat = await settingsPage.getBatteryStatus();
        
        expect(stat).toBe("100 %");
    });

    it('should validate storage status', async () => {
        var stat = await settingsPage.getStorageStatus();
        expect(stat).toBe("3.0 GB used");
    });
})

