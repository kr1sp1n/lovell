const tls = require('tls')
const fs = require('fs')

const port = process.env.PORT || 1965

const key = fs.readFileSync(process.env.TLS_KEY_FILE)
const cert = fs.readFileSync(process.env.TLS_CERT_FILE)
const index = fs.readFileSync(process.env.INDEX_FILE)

function handle (client) {
  client.on('data', (buf) => {
    console.log('Received from client:', buf.toString())
    client.write('20 text/gemini\r\n')
    client.write(index)
    client.end()
  })
  client.on('error', console.error)
  client.on('end', () => {
    console.log('Client closed connection.')
  })
}

const server = tls.createServer({
  key,
  cert,
}, handle).on('error', (err) => {
  console.log(err)
  throw err
})

server.listen(port, '0.0.0.0', () => {
  console.log('opened server on', server.address())
})
