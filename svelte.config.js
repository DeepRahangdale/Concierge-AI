import adapter from '@sveltejs/adapter-vercel'

const config = {
  kit: {
    adapter: adapter({
      maxDuration: 60,
    }),
  },
}

export default config