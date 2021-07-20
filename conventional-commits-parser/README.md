# Conventional Commits Parser
This action uses the conventional commits parser from https://github.com/conventional-commits/parser to check commit message to comply.

If you push on your main branch, the latest commit message will be checked. If your commit message does not comply the conventional commits,
the build will fail.

If you create a pull request on your main branch, the title of your PR will be checked. If this title does not comply the conventional commits
a warning will be prompted in your log output from your workflow.

## Usage

```yaml
uses: kraussmaffei/conventional-commits-parser@main
```
