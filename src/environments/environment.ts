// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_config: {
    base_url: 'http://192.168.49.2/springboot/',
    // states_api: '../assets/States&Cities/states.json',
    // cities_api: '../assets/States&Cities/cities.json',
    states_api: 'http://192.168.49.2/springboot/external/getStates',
    cities_api: 'http://192.168.49.2/springboot/external/getCities/',
    external_hospital_api : 'https://api.rootnet.in/covid19-in/hospitals/medical-colleges'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
