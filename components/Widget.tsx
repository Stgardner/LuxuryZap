'use client'

import type { WidgetConfig } from '@lifi/widget'
import { LiFiWidget, WidgetSkeleton } from '@lifi/widget'
import { ClientOnly } from './ClientOnly'
import { azureLightTheme, watermelonLightTheme, windows95Theme } from '@lifi/widget';


export function Widget(e) {
  const config = {
    variant: "compact",
    subvariant: "default",
    appearance: "light",
    theme: {
      palette: {
        primary: {
          main: "#ffe3aa"
        },
        secondary: {
          main: "#027944"
        },
        background: {
          default: "#FFFAEE",
          paper: "#ffffff"
        },
        text: {
          primary: "#190006",
          secondary: "#766066"
        },
        grey: {
          200: "#F0E5E8",
          300: "#E5D7DA",
          700: "#7A666B",
          800: "#58373F"
        }
      },
      shape: {
        borderRadius: 16,
        borderRadiusSecondary: 16,
        borderRadiusTertiary: 24
      },
      typography: {
        fontFamily: "Inter, sans-serif"
      },
      container: {
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
        borderRadius: "16px"
      },
      components: {
        MuiCard: {
          defaultProps: {
            variant: "elevation"
          }
        }
      }
    },
    walletConfig: {
      onConnect: ()=>{e==null||e()}
    }
  } as Partial<WidgetConfig>



  

  return (
    <ClientOnly fallback={<WidgetSkeleton config={config} />}>
      <LiFiWidget config={config} integrator="LuxuryZap" />
    </ClientOnly>
  )
}

