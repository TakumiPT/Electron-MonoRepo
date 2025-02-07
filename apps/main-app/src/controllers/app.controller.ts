import { AppService } from "src/services/app.service";
import { BaseController } from "./base.controller";

export class AppController extends BaseController {

    override get channel(): string {
        return "app";
    }

    override initializeIpcHandlers(): void {
        this.registerIpcHandler('version', this.appService.getVersion);
        this.registerIpcHandler('name', this.appService.getName);
    }

    constructor(private readonly appService: AppService) {
        super();
        this.initializeIpcHandlers();
    }

}