"use client"

import type React from "react"

import { useRef } from "react"

interface MegaButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function MegaButton({ href, children, className = "", style }: MegaButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    buttonRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return
    buttonRef.current.style.transform = `translate(0, 0) scale(1)`
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`btn-mega ${className}`}
      style={style}
    >
      {children}
    </a>
  )
}
