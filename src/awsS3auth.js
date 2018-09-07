const aws4 = require('aws4-browser')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

let config = {
  ACCESS_KEY_ID: '',
  SECRET_ACCESS_KEY: '',
  BUCKET_REGION: 'ap-south-1'
}

async function handleRequest (request) {
  const signedRequest = aws4.sign({
    service: 's3',
    region: config.aws.BUCKET_REGION,
    method: 'GET',
    path: '/bytedance-s3-tos-in-v-0000/0688c0fc254d47dcb75f3eb870da9786'
  }, { accessKeyId: config.ACCESS_KEY_ID, secretAccessKey: config.SECRET_ACCESS_KEY })
  console.log(signedRequest.headers)
  let hdrs = new Headers(signedRequest.headers)
  return fetch(`https://s3-${config.BUCKET_REGION}.amazonaws.com/bytedance-s3-tos-in-v-0000/0688c0fc254d47dcb75f3eb870da9786`, { headers: hdrs })
}
