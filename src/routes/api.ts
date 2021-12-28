import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {
    const res = await fetch('https://eduspace-gxp.herokuapp.com');
    const data = await res.json();

    return { body: data.video };
}
