module.exports = {
  swagger: '2.0',
  info: {
      version: '1.0.0',
      title: 'API',
      description: 'API',
  },
  basePath: '/api/v1',
  tags: [
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
      '/digits/reverse': {
          post: {
              tags: ['revert'],
              description: 'revert provided number',
              produces: ['application/json'],
              summary: 'should revert number',
              parameters: [
                  {
                      name: 'body',
                      in: 'body',
                      description: 'User input data',
                      required: true,
                      schema: {
                          type: 'object',
                          required: [
                              'number',
                          ],
                          properties: {
                              number: {
                                  type: 'number',
                                  example: 123,
                                  description: 'User\'s number'
                              }
                          }
                      },
                  }
              ],
              responses: {
                  200: {
                      description: 'User request payload',
                      schema: {
                          type: 'object',
                          properties: {
                              revertedNumber: {
                                  type: 'number',
                                  example: 321
                              }
                          }
                      }
                  }
              }
          },
      },
  }
};