import FactoryRepository from '../repositories/factory.repository';
import { FactoryCreateRequestDTO, FactoryUpdateRequestDTO } from '../dto/request/factory.request.dto';
import Factory from '../../models/factory.model';
import FactoryMapper from '../mappers/factory.mapper';

export default class FactoryService {
    constructor(private factoryRepository: FactoryRepository) {}

    create = async (factoryDto: FactoryCreateRequestDTO): Promise<Factory> => {
        const factory = FactoryMapper.fromDTO(factoryDto);
        
        return await this.factoryRepository.create(factory);;
    }

    getAll =  async (): Promise<Factory[]> => {
        return await this.factoryRepository.getAll();
    }

    getById = async (factoryId: number): Promise<Factory | null> => {
        return await this.factoryRepository.getById(factoryId);
    }

    update = async (factoryDto: FactoryUpdateRequestDTO): Promise<number> => {
        const factory = FactoryMapper.fromDTO(factoryDto);
        
        return await this.factoryRepository.update(factory);
    }

    delete = async (factoryId: number): Promise<number> => {
        return await this.factoryRepository.delete(factoryId);
    }
}
