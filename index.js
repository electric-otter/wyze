import parcel from 'https://cdn.jsdelivr.net/npm/parcel@2.15.4/+esm'
import npmRegistry from 'https://cdn.jsdelivr.net/npm/npm-registry@0.1.13/+esm'
import browserfs from 'https://cdn.jsdelivr.net/npm/browserfs@1.4.3/+esm'
import cyberdevsboilerJs from 'https://cdn.jsdelivr.net/npm/@cyberdevs/boiler.js@1.4.6/+esm'

const options = {
  registry: "https://registry.npmjs.org/",
};
const npm = new Registry(options);
