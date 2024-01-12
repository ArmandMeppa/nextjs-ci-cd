/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  //cssModules: true,
  output: 'export',
 
  // Set the asset prefix to the desired output folder
 // assetPrefix: process.env.NODE_ENV === 'production' ? '/export/' : '',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'docs',
}  

//module.exports = nextConfig;
