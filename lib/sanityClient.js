import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'g6exe5jv',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skAUwooyFVwwXNbixMR27fDuf0E0z370xRgMmzswW4YqFYWNXiSbneLlNMBvoIa6Lj08TaJbPdrLZ1IiXL6Ou0Vno17tn2JbxmSEj13g0fBGtviF7fYBrE2S0374PkrgiYicEC6jKxbrj6gA2HYzeWuNEHtr0TmlKnSy3huE6AxvCZmA8Z8M',
  useCdn: false,
})
