import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { data, ReportType } from "./data";

@Controller('report/:type')
export class AppController {
    constructor(private appService: AppService) { }

    @Get()
    getAllReport(@Param('type') type: string) {
        return data.report.filter((report) => {
            return report.type === type
        })
    }

    @Get(':id')
    getReportById(@Param('id') id: string) {
        return data.report.filter((report) => {
            return report.id === id
        })
    }
}