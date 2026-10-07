import { ImageResponse } from 'next/og'
import { profile } from '@/lib/data'

export const dynamic = 'force-static'
export const alt = `${profile.name} | ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0d0e11',
          color: '#f5f5f5',
        }}
      >
        <div style={{ fontSize: 30, color: '#b592ff' }}>{profile.role}</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 36, color: '#a1a1aa', marginTop: 24 }}>Multi-agent platforms and secure delivery, at NETBAY</div>
      </div>
    ),
    size,
  )
}
