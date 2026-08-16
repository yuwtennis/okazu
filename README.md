# okazu
A preventative illness solution that recommends side dishes to support healthier daily habits based on symptoms you notice.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deployment

Deployed to Google Cloud Run:

```bash
gcloud run deploy --region=asia-northeast-1 --allow-unauthenticated --source .
```

- `--region=asia-northeast-1` — Tokyo region
- `--allow-unauthenticated` — public access (no auth required)
- `--source .` — builds a container image from the current directory via Cloud Build
