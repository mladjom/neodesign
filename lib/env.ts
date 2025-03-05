interface Env {
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_GA_ID?: string;
  CONTACT_FORM_ENDPOINT: string;
}

// Parse and validate environment variables
export function getEnv(): Env {
  // Required environment variables
  const requiredEnvs: Array<keyof Env> = [
    'NEXT_PUBLIC_SITE_URL',
    'CONTACT_FORM_ENDPOINT'
  ];
  
  // Check for missing environment variables
  const missingEnvs = requiredEnvs.filter(key => !process.env[key]);
  
  if (missingEnvs.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvs.join(', ')}`);
  }
  
  // Return typed environment variables
  return {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL!,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    CONTACT_FORM_ENDPOINT: process.env.CONTACT_FORM_ENDPOINT!,
  };
}

// Use in components with destructuring
// const { NEXT_PUBLIC_SITE_URL } = getEnv();