class ProfileView extends View{
    constructor(){
        super();
        this.checkpoint = 'android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title")'
    }

    get settingsBtn()             { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title00")'); }
    get confirmLogOutBtn()        { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title01")'); }
    get logOutBtn()               { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title02")'); }
    get privateItemById()         { return browser.element("//android.widget.RelativeLayout[@content-desc='" + itemId + "']"); }
    get fbVerification()          { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title03")'); }
    get gglVerification()         { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title04")'); }
    get emailVerification()       { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title05")'); }
    get userVerification()        { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title06")'); }
    get userRating()              { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title07")'); }
    get userName()                { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title08")'); }
    get userLocation()            { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title09")'); }
    get userAvatar()              { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title10")'); }
    get userAvatarCenter()        { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title11")'); }
    get reviewCounter()           { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title12")'); }
    get reviewTitle()             { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title13")'); }
    get noListingsText()          { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title14")'); }
    get profileSellStuffBtn()     { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title15")'); }
    get chatTestField()           { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title16")'); }
    get chatSendBtn()             { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title17")'); }
    get chatQuickAnswers()        { return browser.element('android=new UiSelector()resourceId("com.abtnprojects.ambatana.staging:id/user_profile_tv_title18")'); }
    
    tapSettings() {
        this.settingsBtn.waitForExist();
        this.settingsBtn.click();
    }

    logOut() {
        this.logOutBtn.waitForExist();
        this.logOutBtn.click();
        this.confirmLogOutBtn.waitForExist();
        this.confirmLogOutBtn.click();
    }
 
    navigateTo(tab) {

        switch(tab) {
            case "selling":
                browser.element('(//*[@resource-id="com.abtnprojects.ambatana.stagin:id/user_profile_tab_layout"]/*/*)[1]').waitForVisible();
                browser.element('(//*[@resource-id="com.abtnprojects.ambatana.stagin:id/user_profile_tab_layout"]/*/*)[1]').click();
                break;
            case "sold":
                browser.element('(//*[@resource-id="com.abtnprojects.ambatana.stagin:id/user_profile_tab_layout"]/*/*)[2]').waitForVisible();
                browser.element('(//*[@resource-id="com.abtnprojects.ambatana.stagin:id/user_profile_tab_layout"]/*/*)[2]').click();
                break;
            case "favorites":
                browser.element('(//*[@resource-id="com.abtnprojects.ambatana.stagin:id/user_profile_tab_layout"]/*/*)[3]').waitForVisible();
                browser.element('(//*[@resource-id="com.abtnprojects.ambatana.stagin:id/user_profile_tab_layout"]/*/*)[3]').click();
                break;
            default:
                return;
        }
    }

    checkItemHasBeenSold() {
        soldTab.waitForVisible();
        dismissRateApp();
        expect(privateItemById.isExisting()).to.be.false;
        navigateTo("sold");
        dismissRateApp();
        expect(privateItemById.isExisting()).to.be.true;
        browser.pause(5000)
        dismissRateApp();
    }

    checkItemIsInSellingTab() {
        soldTab.waitForVisible();
        expect(privateItemById.isExisting()).to.be.false;
        navigateTo("selling");
        expect(privateItemById.isExisting()).to.be.true;
    }

    goBack(buttonId){
        expect(itemDetailView[buttonId].isVisible()).to.be.true;
        itemDetailView[buttonId].click();
    }

    goBackFromSoldView(){
        expect(itemDetailView.sellAgainBtn.isVisible()).to.be.true;
        itemDetailView.backBtn.click();
    }
    
    goBackFromActiveView(){
        expect(itemDetailView.markAsSoldBtn.isVisible()).to.be.true;
        itemDetailView.backBtn.click();
    }
}
#to compare
