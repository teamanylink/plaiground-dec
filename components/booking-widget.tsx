"use client"

import { useEffect } from "react"

export default function BookingWidget() {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://link.msgsndr.com/js/form_embed.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            // Cleanup might not be strictly necessary for a script that just defines a global, 
            // but good practice if it adds elements.
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="w-full max-w-[1000px] mx-auto mt-8 relative z-10">
            {/* Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15),transparent_70%)] -z-10 pointer-events-none blur-3xl" />

            <div className="rounded-2xl overflow-hidden">
                <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/fBQTXVKsKgqGJGqT9UdV"
                    style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                    scrolling="no"
                    id="fBQTXVKsKgqGJGqT9UdV_1764894038696"
                    title="Booking Widget"
                />
            </div>
        </div>
    )
}
