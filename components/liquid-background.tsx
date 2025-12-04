"use client"

import { useEffect, useRef } from "react"

export default function LiquidBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const updateLiquidTransform = () => {
      const scrolled = window.scrollY

      if (blob1Ref.current) {
        const x = mouseX * 50
        const y = mouseY * 30
        const scrollY = scrolled * 0.15
        blob1Ref.current.style.transform = `translate3d(${x}px, ${y - scrollY}px, 0)`
      }

      if (blob2Ref.current) {
        const x = -mouseX * 80
        const y = -mouseY * 60
        const scrollY = scrolled * 0.08
        blob2Ref.current.style.transform = `translate3d(${x}px, ${y - scrollY}px, 0)`
      }

      if (blob3Ref.current) {
        const x = mouseX * 120
        const y = -mouseY * 40
        const scrollY = scrolled * 0.05
        blob3Ref.current.style.transform = `translate3d(${x}px, ${y - scrollY}px, 0)`
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
      updateLiquidTransform()
    }

    const handleScroll = () => {
      updateLiquidTransform()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    updateLiquidTransform()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="liquid-wrapper">
      <div ref={blob1Ref} className="blob blob-1" />
      <div ref={blob2Ref} className="blob blob-2" />
      <div ref={blob3Ref} className="blob blob-3" />
    </div>
  )
}
