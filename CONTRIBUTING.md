## Deploying

1. Generate release notes:
   ```sh
   git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:"%h %s"
   ```
1. Bump version in `package.json`
1. Create new release in GitHub
1. `npm whoami`
1. `npm publish`
