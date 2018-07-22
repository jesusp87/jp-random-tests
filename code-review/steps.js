import cucumber         from 'cucumber'; 
import itemDetailView   from '.../model/ItemDetailView'
import profileView      from '.../model/ProfileView'

let expect = require('chai').expect; 

cucumber.defineSupportCode(function ({Given, Then, When}) {

    When(/^I mark as sold/, function(){
        itemDetailView.markAsSold();
    });

    When(/^I sell item again/, function(){
        profileView.dismissRateApp();
        itemDetailView.markAsSold();
    });

    Then(/^I see item has been sold/, function(){
        expect(itemDetailView.sellAgainBtn.isVisible()).to.be.true;
        itemDetailView.backBtn.click();
        profileView.soldTab.waitForVisible();
        profileView.dismissRateApp();
        expect(profileView.privateItemById.isExisting()).to.be.false;
        profileView.navigateTo("sold");
        profileView.dismissRateApp();
        expect(profileView.privateItemById.isExisting()).to.be.true;
        browser.pause(5000)
        profileView.dismissRateApp();
    });

    Then(/^I see item in selling tab/, function(){
        expect(itemDetailView.markAsSoldBtn.isVisible()).to.be.true;
        itemDetailView.backBtn.click();
        profileView.soldTab.waitForVisible();
        expect(profileView.privateItemById.isExisting()).to.be.false;
        profileView.navigateTo("selling");
        expect(profileView.privateItemById.isExisting()).to.be.true;
    });

});