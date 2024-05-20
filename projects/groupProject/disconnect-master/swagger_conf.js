const options = {
  swaggerDefinition: {
      info: {
          description: 'API for TASSI project',
          title: "Indoor Map API",
          version: "1.2.0"
      },
      host: 'http://localhost:3230/',
      basePath: '/',
      produces: ['application/json'],
      schemes: ['http'],

  },
  basedir: __dirname,
  files: ['./lib/**/*.js']
};

module.exports = options;