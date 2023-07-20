module.exports = {
  root: true,
  rules: {
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    camelcase: [
      'error',
      {
        allow: [
          'nacl_decodeHex',
          'recoverTypedSignature_v4',
          'signTypedData_v4',
        ],
      },
    ],
    'id-denylist': 'off',
    'id-length': 'off',
    'no-param-reassign': 'off',
  },
  ignorePatterns: ['!.eslintrc.js', 'test/*.js', 'dist'],
};
