const raw = (import.meta.env.VITE_ALLOW_REGISTRATION ?? 'true') as string

export const allowRegistration = raw.toString().trim().toLowerCase() !== 'false'
