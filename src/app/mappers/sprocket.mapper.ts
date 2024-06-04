import { SprocketCreateRequestDTO, SprocketUpdateRequestDTO } from "../dto/request/sprocket.request.dto";
import Sprocket from "../../models/sprocket.model";

function isUpdateDto(dto: any): dto is SprocketUpdateRequestDTO {
    return 'id' in dto;
}

export default class SprocketMapper {
    static fromDTO(dto: SprocketCreateRequestDTO | SprocketUpdateRequestDTO): Sprocket {
        const sprocket = new Sprocket();
        sprocket.teeth = dto.teeth;
        sprocket.pitchDiameter = dto.pitch_diameter;
        sprocket.outsideDiameter = dto.outside_diameter;
        sprocket.pitch = dto.pitch;
        if (isUpdateDto(dto)) {
            sprocket.id = dto.id;
        }
        return sprocket;
    }
}
