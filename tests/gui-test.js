const { Builder, By, until } = require('selenium-webdriver');
const path = require('path');

(async function testGUI() {
    // 启动 Chrome 浏览器
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        // 获取本地 index.html 的绝对路径
        const filePath = path.resolve(__dirname, '../index.html');
        const fileUrl = `file://${filePath}`;

        console.log('1. Opening the local GUI application...');
        await driver.get(fileUrl);

        // 测试 1: HEX 转换为 RGB
        console.log('2. Testing HEX to RGB conversion...');
        let hexInput = await driver.findElement(By.id('hexInput'));
        let btnToRgb = await driver.findElement(By.id('btnToRgb'));
        let rgbInput = await driver.findElement(By.id('rgbInput'));

        // 输入 #FF5733 并点击转换
        await hexInput.sendKeys('#FF5733');
        await btnToRgb.click();
        
        // 等待 0.5 秒让 JS 执行
        await driver.sleep(500); 

        // 断言（验证）结果是否为 "255, 87, 51"
        let rgbValue = await rgbInput.getAttribute('value');
        if (rgbValue === '255, 87, 51') {
            console.log('  HEX to RGB test passed!');
        } else {
            console.error(`   ❌ HEX to RGB test failed! Expected 255, 87, 51 but got ${rgbValue}`);
        }

        // 清空输入框，准备下一个测试
        await hexInput.clear();
        await rgbInput.clear();

        // 测试 2: RGB 转换为 HEX
        console.log('3. Testing RGB to HEX conversion...');
        let btnToHex = await driver.findElement(By.id('btnToHex'));

        // 输入 0, 255, 0 并点击转换
        await rgbInput.sendKeys('0, 255, 0');
        await btnToHex.click();
        
        await driver.sleep(500);

        // 断言结果是否为 "#00FF00"
        let hexValue = await hexInput.getAttribute('value');
        if (hexValue === '#00FF00') {
            console.log('  RGB to HEX test passed!');
        } else {
            console.error(`   ❌ RGB to HEX test failed! Expected #00FF00 but got ${hexValue}`);
        }

        // 停留 3 秒，方便你截图
        console.log('4. Test finished. Keeping browser open for 3 seconds for screenshot...');
        await driver.sleep(3000);

    } catch (error) {
        console.error('An error occurred:', error.message);
    } finally {
        console.log('Closing the browser...');
        await driver.quit();
    }
})();