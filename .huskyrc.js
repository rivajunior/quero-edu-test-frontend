const tasks = (arr) => arr.join(' && ')

module.exports = {
  hooks: {
    'prepare-commit-msg': tasks([
      'exec < /dev/tty',
      'git cz --hook || true',
    ]),
    'pre-commit': tasks([
      'lint-staged',
    ]),
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  }
}
