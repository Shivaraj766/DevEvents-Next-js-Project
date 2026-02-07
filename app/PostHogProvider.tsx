"use client"

import { useEffect } from "react"
import { register } from "@/instrumentation-client"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    register()
  }, [])

  return <>{children}</>
}
