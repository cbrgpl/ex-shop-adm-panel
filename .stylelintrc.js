module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-hudochenkov/dollar-variables',
    'stylelint-config-hudochenkov/order'
  ],
  'overrides': [
    {
      'files': [ '*.vue', '**/*.vue' ],
      'customSyntax': 'postcss-html',
      'rules': {
        'selector-pseudo-element-no-unknown': [
          true,
          {
            'ignorePseudoElements': [ 'v-deep' ]
          }
        ]

      }
    }
  ],
  'rules': {
    // DEFAULT
    'indentation': 2,
    'no-empty-source': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [ 'em', 'rem' ]
      }
    ],
    // ORDER
    'order/properties-alphabetical-order': null,
    // SCSS
    'scss/at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen'
        ]
      }
    ]
  }
}
