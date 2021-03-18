// export abstract class ConstantsService { App: "TaskManager", Ver: "1.0" }

import { InjectionToken } from '@angular/core';

// import { ConstantsService } from "src/app/models/app";

// const ConstantsService: ConstantsService = {
//   App: "TaskManager",
//   Ver: "1.0"
// };

// export default ConstantsService;

export const CONSTANTS_SERVICE = new InjectionToken<String>('constants');
