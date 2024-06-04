import { IRepository } from '../../types/types';
import Sprocket from '../../models/sprocket.model';

export default class SprocketRepository implements  IRepository<Sprocket> {
    async create(sprocket: Sprocket): Promise<Sprocket> {
        try {
            return await Sprocket.create({
                teeth: sprocket.teeth,
                pitchDiameter: sprocket.pitchDiameter,
                outsideDiameter: sprocket.outsideDiameter,
                pitch: sprocket.pitch
            
            });
        } catch (err) {
            console.log('err: ', err);
            throw new Error("Failed to create Sprocket!");
        }
    }
    
    async getAll(): Promise<Sprocket[]> {
        try {
            return await Sprocket.findAll();
        } catch (error) {
            throw new Error("Failed to retrieve Sprockets!");
        }
    }
    
    async getById(sprocketId: number): Promise<Sprocket | null> {
        try {
            return await Sprocket.findByPk(sprocketId);
        } catch (error) {
            throw new Error("Failed to retrieve Sprocket!");
        }
    }
    
    async update(sprocket: Sprocket): Promise<number> {
        const { id, teeth, pitchDiameter, outsideDiameter, pitch } = sprocket;
    
        try {
            const affectedRows = await Sprocket.update(
                { teeth, pitchDiameter, outsideDiameter, pitch },
                { where: { id: id } }
            );
            return affectedRows[0];
        } catch (error) {
            throw new Error("Failed to update Sprocket!");
        }
    }
    
    async delete(sprocketId: number): Promise<number> {
        try {
            return await Sprocket.destroy({ where: { id: sprocketId } });
        } catch (error) {
            throw new Error("Failed to delete Sprocket!");
        }
    }
}