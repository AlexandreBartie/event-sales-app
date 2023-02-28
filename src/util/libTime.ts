
export function waitSeconds(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

