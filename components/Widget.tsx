'use client'

import type { WidgetConfig } from '@lifi/widget'
import { LiFiWidget, WidgetSkeleton } from '@lifi/widget'
import { ClientOnly } from './ClientOnly'
import { azureLightTheme, watermelonLightTheme, windows95Theme } from '@lifi/widget';


export function Widget() {
  const config = {
    variant: "compact",
    subvariant: "default",
    appearance: "light",
    theme: {
      palette: {
        primary: {
          main: "#0A97B0"
        },
        secondary: {
          main: "#F5B5FF"
        }
      },
      typography: {
        fontFamily: "Inter, sans-serif"
      },
      container: {
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px"
        
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

