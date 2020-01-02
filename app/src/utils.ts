import tt from 'trusted-types';
// import { URL } from 'url';

const noop = (i: any) => i
const rules = {
  createHTML: noop,
  createURL: (unsafe: string) => {
    console.log('createURL', unsafe)
    const unsafeurl = new URL(unsafe, 'http://localhost:3000');
    const currenturl = new URL(window.location.href, 'http://localhost:3000')
    if (unsafeurl.origin !== currenturl.origin) {
      throw new Error('url of unexpected origin')
    }
    return unsafeurl.toString();
    
  }
}

let appPolicy: any;
let withTrustedTypes = true

export const getPolicy = () => {
  if (withTrustedTypes && appPolicy === undefined) {
    appPolicy = tt.createPolicy('app-policy', rules)
  }

  if (withTrustedTypes) return appPolicy
  else return rules
}
