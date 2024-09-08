import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex flex-col items-center justify-between w-full text-small-regular">
          <div className="flex items-center justify-between w-full h-16">
            <div className="flex-1 basis-0 h-full flex items-center">
              {/* Mobile Hamburger Menu */}
              <div className="block small:hidden h-full">
                <SideMenu regions={regions} />
              </div>
            </div>

            <div className="flex items-center h-full">
  <LocalizedClientLink
    href="/"
    className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
    style={{
      fontSize: '29px',
      fontWeight: '900', // Increase font weight to 900 for extra boldness
      fontFamily: 'Lora, serif', // Use Lora font
      fontStyle: 'bold' // Add this line to make the text italic
    }}
    data-testid="nav-store-link"
  >
    Genvin Store
  </LocalizedClientLink>
</div>

            <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="hover:text-ui-fg-base flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden small:flex flex-1 w-full justify-center border-t border-ui-border-base pt-2">
            <ul className="flex space-x-8 text-xl font-medium items-center pb-4"> {/* Added padding-bottom */}
              {Object.entries(SideMenuItems).map(([name, href]) => (
                <li key={name} className="flex items-center"> {/* Added flex and items-center for vertical centering */}
                  <LocalizedClientLink
                    href={href}
                    className="hover:text-ui-fg-base text-lg" // Adjusted text size
                    data-testid={`${name.toLowerCase()}-link`}
                  >
                    {name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}