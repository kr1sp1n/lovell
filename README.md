# lovell

A [Gemini][1] server written for Node.JS.
This is for the moment only a proof of concept.

## Run with docker-compose

You need a TLS cert and a TLS key.
You could [generate certificates for localhost][2] for testing.
Set the path to those files via `TLS_KEY_FILE` and `TLS_CERT_FILE` in the `docker-compose.yml` file.

At the moment the server only delivers one Gemini file that you can set via `INDEX_FILE` in the `docker-compose.yml` file as well.

Then execute:
```bash
docker-compose up
```

And the server is listening on `gemini://localhost:1965`.

---

[1]: https://gemini.circumlunar.space/
[2]: https://letsencrypt.org/docs/certificates-for-localhost/