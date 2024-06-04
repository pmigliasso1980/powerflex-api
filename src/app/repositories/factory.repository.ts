import { IRepository } from '../../types/types';
import Factory from '../../models/factory.model';


export default class FactoryRepository implements  IRepository<Factory> {
    async create(factory: Factory): Promise<Factory> {
        try {
            return await Factory.create({
                chartData: factory.chartData
            });
        } catch (err) {
            throw new Error("Failed to create Factory!");
        }
    }
    
    async getAll(): Promise<Factory[]> {
        try {
            return await Factory.findAll();
        } catch (error) {
            throw new Error("Failed to retrieve Factories!");
        }
    }
    
    async getById(factoryId: number): Promise<Factory | null> {
        try {
            return await Factory.findByPk(factoryId);
        } catch (error) {
            throw new Error("Failed to retrieve Factory!");
        }
    }
    
    async update(factory: Factory): Promise<number> {
        const { id, chartData } = factory;
    
        try {
            const affectedRows = await Factory.update(
                { chartData },
                { where: { id: id } }
            );
            return affectedRows[0];
        } catch (error) {
            throw new Error("Failed to update Factory!");
        }
    }
    
    async delete(factoryId: number): Promise<number> {
        try {
            return await Factory.destroy({ where: { id: factoryId } });
        } catch (error) {
            throw new Error("Failed to delete Factory!");
        }
    }
}

