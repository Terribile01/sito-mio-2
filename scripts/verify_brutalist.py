import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 800})

        # Base URL
        base_url = "http://localhost:3000"

        # Routes to verify
        routes = [
            {"name": "home", "url": "/"},
            {"name": "chisono", "url": "/#/chi-sono"},
            {"name": "servizi", "url": "/#/servizi"},
            {"name": "social", "url": "/#/social-lead-generation"},
            {"name": "contatti", "url": "/#/contatti"},
            {"name": "blog", "url": "/#/blog"}
        ]

        # Directory for screenshots
        os.makedirs("verification_brutalist", exist_ok=True)

        for route in routes:
            print(f"Capturing {route['name']}...")
            await page.goto(f"{base_url}{route['url']}")
            # Wait for content to load and animations to finish
            await asyncio.sleep(2)
            await page.screenshot(path=f"verification_brutalist/{route['name']}_brutalist.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
