const { Builder, By, until } = require('selenium-webdriver');

(async function runSeleniumTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        // 改进点：设置浏览器窗口大小为移动端尺寸，这样菜单按钮才会出现
        await driver.manage().window().setRect({ width: 400, height: 844 });

        console.log('1. Opening the browser and navigating to eLAB...');
        await driver.get('https://elab.lab.fi/en/starting-studies');

        await driver.wait(until.titleContains('Starting studies'), 10000);
        console.log('2. Page loaded successfully.');

        console.log('3. Scrolling down the page...');
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight / 2);');
        await driver.sleep(2000);

        // 处理 Cookie 弹窗
        console.log('4. Trying to handle cookie popup if present...');
        try {
            let acceptBtn = await driver.wait(
                until.elementLocated(By.xpath("//button[contains(text(), 'Accept') or contains(text(), 'Allow all') or contains(text(), 'Hyväksy')]")), 
                3000
            );
            await acceptBtn.click();
            console.log('   Popup closed successfully.');
            await driver.sleep(1000); 
        } catch (e) {
            console.log('   No popup found or already accepted.');
        }

        console.log('5. Locating the hamburger menu button...');
        // 改进点：使用更宽泛的 CSS 选择器，查找 id 或 class 包含 "menu" 的按钮
        let menuButton = await driver.wait(
            until.elementLocated(By.css('button[id*="menu"], button[class*="menu"], .hamburger, .menu-toggle')), 
            5000
        );

        console.log('6. Clicking the menu button...');
        // 使用 JS 强制点击
        
        await driver.executeScript("arguments[0].click();", menuButton);

        await driver.sleep(5000); // 停留 5 秒给你截图
        console.log('Test completed successfully!');

    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        console.log('Closing the browser...');
        await driver.quit();
    }
})();