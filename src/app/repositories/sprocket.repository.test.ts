import SprocketRepository from './sprocket.repository';
import Sprocket from '../../models/sprocket.model';

describe('SprocketRepository', () => {
    beforeEach(() =>{
        jest.resetAllMocks();
    });

    describe('SprocketRepository.getById', () => {
        it('should return sprocket detail', async () => {
            //arrange
            const sprocketId = 1;
            const mockResponse = {
                id: 3,
                teeth: 5,
                pitchDiameter: 5.3,
                outsideDiameter: 6.9,
                pitch: 1.2
            };

            Sprocket.findByPk = jest.fn().mockResolvedValue(mockResponse);

            //act
            const sprocketRepository = new SprocketRepository();
            const result = await sprocketRepository.getById(sprocketId);

            //assert
            expect(result).toEqual(mockResponse);
            expect(Sprocket.findByPk).toHaveBeenCalledTimes(1);
        });
    });

    describe('SprocketRepository.delete', () => {
        it('should return true delete sprocket', async () => {
            //arrange
            const sprocketId = 1;
            const mockResponse = true;

            Sprocket.destroy = jest.fn().mockResolvedValue(mockResponse);

            //act
            const sprocketRepository = new SprocketRepository();
            const result = await sprocketRepository.delete(sprocketId);

            //assert
            expect(result).toEqual(mockResponse);
            expect(Sprocket.destroy).toHaveBeenCalledTimes(1);
            expect(Sprocket.destroy).toBeCalledWith({
                where: {
                    id: sprocketId
                }
            });
        });
    });
});
