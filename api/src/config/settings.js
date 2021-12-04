import swaggerEnv from "./swaggerEnv";
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

module.exports = {
  title: "News API",

  encryptText: '*F-JaNdRgUkXp2s5v8y/A?D(G+KbPeShVmYq3t6w9z$C&E)H@McQfTjWnZr4u7x!A%D*G-JaNdRgUkXp2s5v8y/B?E(H+MbPeShVmYq3t6w9z$C&F)J@NcRfTjWnZr4u',
  secretKey:  'WnZr4u7x!z%C*F-JaNdRgUkXp2s5v8y/B?E(G+KbPeShVmYq3t6w9z$C&F)J@McQ',
  swaggerOptions: {
    swaggerDefinition: {
      info: {
        description: ".. API",
        title: ".. API",
        version: "1.0.0",
      },
      host: swaggerEnv[env]["host"],
      basePath: "",
      produces: ["application/json", "application/xml"],
      schemes: swaggerEnv[env]["address"],
      security: [
        {
          JWT: []
        }
      ],
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: '',
        },
      },
    },
    basedir: __dirname, // app absolute path
    files: [
      "../../public/controller/**/*.js",
      "../../account/controller/**/*.js",
      "../../private/controller/**/*.js",
   ],
  },
};
