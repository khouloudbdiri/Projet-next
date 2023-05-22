/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains:['https://www.google.com','magasinsfekih.com.tn','firebasestorage.googleapis.com  ']
  }
  

}

module.exports = nextConfig
