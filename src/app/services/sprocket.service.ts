import SprocketRepository from "../repositories/sprocket.repository";
import { SprocketCreateRequestDTO, SprocketUpdateRequestDTO } from "../dto/request/sprocket.request.dto";
import Sprocket from "../../models/sprocket.model";
import SprocketMapper from "../mappers/sprocket.mapper";

export default class SprocketService {
    constructor(private sprocketRepository: SprocketRepository) {}

    create = async (sprocketDto: SprocketCreateRequestDTO): Promise<Sprocket> => {
        const sprocket = SprocketMapper.fromDTO(sprocketDto);
        console.log('sprocket: ', sprocket);
        
        return await this.sprocketRepository.create(sprocket);
    }

    getAll = async (): Promise<Sprocket[]> => {
        return await this.sprocketRepository.getAll();
    }

    getById = async (sprocketId: number): Promise<Sprocket | null> => {
        return await this.sprocketRepository.getById(sprocketId);
    }

    update = async (sprocketDto: SprocketUpdateRequestDTO): Promise<number> => {
        const sprocket = SprocketMapper.fromDTO(sprocketDto);
        
        return await this.sprocketRepository.update(sprocket);
    }

    delete = async (sprocketId: number): Promise<number> => {
        return await this.sprocketRepository.delete(sprocketId);
    }
}
