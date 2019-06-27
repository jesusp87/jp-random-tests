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
        itemDetailView.goBackFromSoldView();
        profileView.checkItemIsInSoldTab();
    });

    Then(/^I see item in selling tab/, function(){
        itemDetailView.goBackFromActiveView();
        profileView.checkItemIsInSellingTab();
    });

});
#to compare
