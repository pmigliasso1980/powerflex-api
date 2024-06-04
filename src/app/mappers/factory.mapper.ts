import { FactoryCreateRequestDTO, FactoryUpdateRequestDTO } from "../dto/request/factory.request.dto";
import Factory from "../../models/factory.model";

function isUpdateDto(dto: any): dto is FactoryUpdateRequestDTO {
    return 'id' in dto;
}

export default class FactoryMapper {
    static fromDTO(dto: FactoryCreateRequestDTO | FactoryUpdateRequestDTO): Factory {
        const factory = new Factory();
        factory.chartData = dto.chart_data;
        if (isUpdateDto(dto)) {
            factory.id = dto.id;
        }
        return factory;
    }
}
