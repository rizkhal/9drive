const raw = (import.meta.env.VITE_ALLOW_REGISTRATION ?? 'true') as string

export const allowRegistration = raw.toString().trim().toLowerCase() !== 'false'

const rawGoogle = (import.meta.env.VITE_ALLOW_GOOGLE_LOGIN ?? 'true') as string

export const allowGoogleLogin = rawGoogle.toString().trim().toLowerCase() !== 'false'
