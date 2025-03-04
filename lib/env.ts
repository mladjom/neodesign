// lib/env.ts
export function validateEnv() {
    const requiredEnvs: Array<string> = [
      'CONTACT_FORM_ENDPOINT'
    ];
    
    const missingEnvs = requiredEnvs.filter(env => !process.env[env]);
    
    if (missingEnvs.length > 0) {
      throw new Error(`Missing required environment variables: ${missingEnvs.join(', ')}`);
    }
  }