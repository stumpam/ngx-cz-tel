module.exports = {
  name: 'ngx-cz-tel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-cz-tel',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
