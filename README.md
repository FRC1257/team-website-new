# Team 1257's Website

This project uses React + TS + TailwindCSS with vite. This website is a revamped version of our [old site](http://team1257.org/).

Use `npm run dev` on `SnailSite/` to run locally.

## Production deployment

`.github/workflows/deploy-production.yml` deploys successful builds of `main`
to the existing Vercel project, regardless of who pushed or merged the change.
It can also be run manually from GitHub Actions with `main` selected.
Other branches do not publish to production.

Before enabling this workflow:

1. In the Vercel `team-website-new` project, confirm the Git repository is
   `FRC1257/team-website-new`, Root Directory is `SnailSite`, framework is Vite,
   and Production Branch is `main`. Use Node.js 22.x to match `package.json`.
2. Confirm `frc1257.org` is assigned to this project's production environment.
3. In GitHub Settings > Secrets and variables > Actions, add repository secrets
   `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. Use a token from
   an account authorized to deploy this Vercel project. Obtain the IDs from
   the project/team settings or `.vercel/project.json` after linking locally.
   Never commit the token or share it in an issue or pull request.
4. Run the workflow on `main` and verify both its deployment and `frc1257.org`.
   After the first successful CI deployment, disable automatic Git deployments
   in Vercel's project settings if they would create duplicate deployments.

The workflow authenticates using the deployment account's token. Contributor
permissions are managed in GitHub and Vercel; `vercel.json` cannot grant a user
access. Failed builds keep the previous production deployment live.
