Code
// providers/region.js
import React, { createContext, useContext, useEffect, useState } from "react"
import { sdk } from "../lib/sdk"

const RegionContext = createContext(null)

export const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState()

  useEffect(() => {
    if (region) {
      localStorage.setItem("region_id", region.id)
      return
    }
    const regionId = localStorage.getItem("region_id")
    if (!regionId) {
      sdk.store.region.list().then(({ regions }) => {
        setRegion(regions[0])
      })
    } else {
      sdk.store.region.retrieve(regionId).then(({ region: dataRegion }) => {
        setRegion(dataRegion)
      })
    }
  }, [region])

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  )
}

export const useRegion = () => {
  const context = useContext(RegionContext)
  if (!context) {
    throw new Error("useRegion must be used within a RegionProvider")
  }
  return context
}