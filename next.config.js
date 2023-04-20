const runtimeCaching = require('next-pwa/cache')

/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching
  });

  module.exports = withPWA({
	reactStrictMode: true,
  });