'use client';
import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  affiliation: string;
  focus: string;
  motivation: string;
  contribution: string;
  consent: boolean;
}

const initialState: FormState = {
  name: '',
  email: '',
  affiliation: '',
  focus: '',
  motivation: '',
  contribution: '',
  consent: false,
};

export default function MemberApplicationForm(){
  const [data, setData] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]){
    setData(d => ({ ...d, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      // simulate network latency
      await new Promise(r => setTimeout(r, 600));
      setSubmitted(true);
      setData(initialState);
    } catch (err: unknown){
      if (err instanceof Error) setError(err.message);
      else setError('Submission failed');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-neutral-700">Full Name</label>
          <input id="name" name="name" required value={data.name} onChange={e=>update('name', e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-500" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
          <input id="email" name="email" type="email" required value={data.email} onChange={e=>update('email', e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-500" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="affiliation" className="text-sm font-medium text-neutral-700">Affiliation / Organization</label>
          <input id="affiliation" name="affiliation" value={data.affiliation} onChange={e=>update('affiliation', e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-500" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="focus" className="text-sm font-medium text-neutral-700">Primary Interest Area</label>
          <select id="focus" name="focus" value={data.focus} onChange={e=>update('focus', e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-500">
            <option value="">Select...</option>
            <option value="aerospace">Aerospace</option>
            <option value="stability">Strategic Stability</option>
            <option value="industrial">Industrial Base</option>
            <option value="policy">Policy Research Methodology</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="motivation" className="text-sm font-medium text-neutral-700">Motivation & Proposed Engagement</label>
        <textarea id="motivation" name="motivation" rows={5} required value={data.motivation} onChange={e=>update('motivation', e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-500" placeholder="Briefly describe your objectives and how you hope to collaborate." />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contribution" className="text-sm font-medium text-neutral-700">Potential Contribution</label>
        <textarea id="contribution" name="contribution" rows={4} value={data.contribution} onChange={e=>update('contribution', e.target.value)} className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-500" placeholder="Expertise, datasets, networks, analysis capacity, etc." />
      </div>
      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox" required checked={data.consent} onChange={e=>update('consent', e.target.checked)} className="mt-1 h-4 w-4 rounded border-neutral-300 text-brand-600 focus:ring-brand-500" />
        <label htmlFor="consent" className="text-xs text-neutral-600 leading-relaxed">I consent to the processing of my information for the purposes of membership review in accordance with the site&apos;s privacy policy.</label>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {submitted && <p className="text-sm text-green-600">Application received. We will be in touch.</p>}
      <div>
        <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-black shadow-sm hover:bg-brand-700 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors min-w-[160px]">
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
      <p className="mt-6 text-xs text-neutral-500">This form is a static placeholder. Integrate with an API route or external service (e.g. Formspree, Airtable) for production use.</p>
    </form>
  );
}
