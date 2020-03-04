# CICD-appcenter
basic project to study ci/cd and appcenter's features


[![Build status](https://build.appcenter.ms/v0.1/apps/1d2146cd-d69c-4231-8603-eec9a938a0a1/branches/dev/badge)](https://appcenter.ms)


[![Build status](https://build.appcenter.ms/v0.1/apps/d41b5040-a3d3-4226-a492-87ff34b1f60c/branches/dev/badge)](https://appcenter.ms)


branches:

feature-x:

- created by any given dev to work on a task.
- push: nothing.

dev:

- receives pull requests from 'feature-x' branches
- PR automatic builds with jest tests and lint check (if any of those fail, the PR won't go through)
- push: automatic builds

test:

- gets merged from dev whenever the team wants to send a build to QA. This is (probably) done by the tech lead
- if a build gets to this point, its assumed that it went through all test and lint checks (so there's no need to check for them again here)
- push: automatic builds + automatic delivery to testers (with email notification that a new release is up)

master:

- gets merged from test when everything is OK.
- used to deliver the product/features to the client.
- if a build gets to this point, its assumed that it went through all test and lint checks (so there's no need to check for them again here)
- push: automatic build (no need to notify the QA team, tech lead can send them himself to the client/PO)

emergency:

- branch to build automatically without any tests/checks.