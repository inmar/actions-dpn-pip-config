import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as requests from 'request-promise-native';
import * as util from 'util';

async function run() {
  try {
    const pypi_hostname: string = core.getInput("pypi_hostname");
    const pypi_username: string = core.getInput("pypi_username");
    const pypi_password: string = core.getInput("pypi_password");

    await exec.exec('python', ['-m', 'pip', 'config', 'set', 'global.index-url', `https://${pypi_username}:${pypi_password}@${pypi_hostname}/simple/`], {});
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
