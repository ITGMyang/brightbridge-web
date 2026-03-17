const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        const filePath = `file:///${path.resolve(__dirname, 'brand-guide.html').replace(/\\/g, '/')}`;
        console.log(`Loading page: ${filePath}`);

        await page.goto(filePath, { waitUntil: 'networkidle0' });

        console.log('Generating PDF...');
        await page.pdf({
            path: 'BrightBridge-Brand-Guide.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20px',
                bottom: '20px',
                left: '20px',
                right: '20px'
            }
        });

        await browser.close();
        console.log('PDF generated successfully as BrightBridge-Brand-Guide.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
})();
