module.exports = {
  name: 'demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
