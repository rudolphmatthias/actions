const core = require('@actions/core');
const { parser } = require('@conventional-commits/parser');
const github = require('@actions/github');

async function run() {
  try {
    if (github.context.eventName === 'push' && github.context.ref === 'refs/heads/main') {
      const pushPayload = JSON.parse(github.context.payload);
      console.info(`Push-Payload: ${pushPayload}`);
      core.info(`Checking head commit message: ${pushPayload.head_commit}`);
      parser(pushPayload.head_commit);
    }
  } catch (error) {
    core.setFailed('Your commit message is not valid. You must comply with the conventional commits');
  }

  try {
    if (github.context.eventName === 'pull_request') {
      const pullRequestPayload = JSON.parse(github.context.payload);
      console.info(`Pull-Request-Payload: ${pullRequestPayload}`);
      core.info(`Checking PR-Title: ${pullRequestPayload.title}`);
      parser(pullRequestPayload.title);
    }
  } catch (error) {
    core.warning(`Your PR title does not comply with conventional commits! Adjust this before you merge or the build on main will fail!`);
  }
}

run();
