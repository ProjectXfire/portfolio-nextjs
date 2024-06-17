import type { IResponse } from '@/core/interfaces';

export async function sendEmail(subject: string, body: string): Promise<IResponse> {
  try {
    const res = await fetch('/api/email/send', {
      method: 'POST',
      body: JSON.stringify({ subject, body }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error);
    }
    const data = await res.json();
    return {
      error: null,
      message: data.message,
    };
  } catch (error: any) {
    return {
      error: error.message,
      message: null,
    };
  }
}
