import SprocketService from './sprocket.service';
import SprocketRepository from '../repositories/sprocket.repository';

describe('SprocketService', () => {
    beforeEach(() =>{
        jest.resetAllMocks();
    });

    describe('SprocketService.getById', () => {
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

            const sprocketRepository = new SprocketRepository();
            sprocketRepository.getById = jest.fn().mockResolvedValue(mockResponse);

            //act
            const sprocketService = new SprocketService(sprocketRepository);
            const result = await sprocketService.getById(sprocketId);

            //assert
            expect(result).toEqual(mockResponse);
            expect(sprocketRepository.getById).toHaveBeenCalledTimes(1);
            expect(sprocketRepository.getById).toBeCalledWith(sprocketId);
        });
    });

    describe('SprocketService.delete', () => {
        it('should return true delete sprocket', async () => {
            //arrange
            const sprocketId = 2;
            const mockResponse = true;

            const sprocketRepository = new SprocketRepository();
            sprocketRepository.delete = jest.fn().mockResolvedValue(mockResponse);

            //act
            const sprocketService = new SprocketService(sprocketRepository);
            const result = await sprocketService.delete(sprocketId);

            //assert
            expect(result).toEqual(mockResponse);

            //assert sprocketRepository.delete
            expect(sprocketRepository.delete).toHaveBeenCalledTimes(1);
            console.log('sprocketRepository.delete');
        });
    });
});
