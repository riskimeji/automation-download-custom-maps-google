const { Builder, By, until, Key } = require('selenium-webdriver');

async function download() {
  let driver;

  try {
    const urlsToVisit = [
      'your url maps',
      'your url 2 maps',
      // replace with your url maps (your maps you create with custom)
      // you can replace many url
      // example https://support.google.com/mymaps/answer/3024454?hl=en&amp%3Bref_topic=3188329 (how to create a maps)
    ];

    for (const url of urlsToVisit) {
      driver = await new Builder().forBrowser('chrome').build();
      await driver.get(url);

      const elemen = await driver.wait(
        until.elementLocated(By.css('.JRtysb')),
        10000
      );

      await elemen.click();

      console.log('Elemen berhasil diklik!');

      for (let i = 0; i < 7; i++) {
        await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
        await driver.sleep(500);
      }

      console.log('Tombol panah bawah berhasil ditekan!');
      const elemenSetelahPanah = await driver.wait(
        until.elementLocated(
          By.css(
            'body > div.JPdR6b.Xro3Db-mU4ghb-xl07Ob.qjTEB > div > div > span:nth-child(7) > div.uyYuVb.oJeWuf > div'
          )
        ),
        3000
      );
      await elemenSetelahPanah.click();

      const elementiga = await driver.wait(
        until.elementLocated(By.css('.uVccjd.zSfaEd-MPu53c')),
        3000
      );
      await elementiga.click();
      const elementFinal = await driver.wait(
        until.elementLocated(
          By.css(
            'body > div.llhEMd.iWO5td > div > div.g3VIld.HzV7m-G1qmNd-Sx9Kwc.Up8vH.J9Nfi.HzV7m-Sx9Kwc.iWO5td > div.XfpsVe.J9fJmf > div.U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.kHssdc.HvOprf.M9Bg4d > span > span'
          )
        ),
        3000
      );
      await elementFinal.click();
      await driver.sleep(3000);
      await driver.quit();
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  }
}

download();
