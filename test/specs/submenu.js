var assert = require('assert');

describe('Test submenus', function() {
    it('should navigate to submenu 2 levels deep and see correct alert for charlie', function () {
        browser.url('http://localhost/jQuery-contextMenu/test/integration/html/sub-menus.html');
        var title = browser.getTitle();
        browser.rightClick('.context-menu-one');
        browser.moveToObject('span=Sub group')
        browser.moveToObject('span=Sub group 2')
        browser.click('span=charlie')
        assert.equal(browser.alertText(), 'clicked: fold2-key3');
    });
});