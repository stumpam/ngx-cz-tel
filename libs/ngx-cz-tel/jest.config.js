module.exports = {
  name: 'ngx-cz-tel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-cz-tel',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
