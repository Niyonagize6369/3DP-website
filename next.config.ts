import type { NextConfig } from 'next'

const config: NextConfig = {
 
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
     
    ],
  },
}

export default config
