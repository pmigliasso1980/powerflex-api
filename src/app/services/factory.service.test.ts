import FactoryService from './factory.service';
import FactoryRepository from '../repositories/factory.repository';

describe('FactoryService', () => {
    beforeEach(() =>{
        jest.resetAllMocks();
    });

    describe('FactoryService.getById', () => {
        it('should return factory detail', async () => {
            //arrange
            const factoryId = 1;
            const mockResponse = {
                id: 1,
                chartData: [
                    45,
                    29,
                    31,
                    30,
                    32,
                    32,
                    29,
                    31,
                    30,
                    32,
                    32,
                    29,
                    31,
                    30,
                    32,
                    32,
                    29,
                    31,
                    30,
                    32
                ],
                "sprocket_production_goal": [
                    50,
                    30,
                    31,
                    29,
                    32,
                    32,
                    30,
                    31,
                    29,
                    32,
                    32,
                    30,
                    31,
                    29,
                    32,
                    32,
                    30,
                    31,
                    29,
                    32
                ],
                "time": [
                    1611194818,
                    1611194878,
                    1611194938,
                    1611194998,
                    1611195058,
                    1611195118,
                    1611195178,
                    1611195238,
                    1611195298,
                    1611195358,
                    1611195418,
                    1611195478,
                    1611195538,
                    1611195598,
                    1611195658,
                    1611195718,
                    1611195778,
                    1611195838,
                    1611195898,
                    1611195958
                ]
            };

            const factoryRepository = new FactoryRepository();
            factoryRepository.getById = jest.fn().mockResolvedValue(mockResponse);

            //act
            const factoryService = new FactoryService(factoryRepository);
            const result = await factoryService.getById(factoryId);

            //assert
            expect(result).toEqual(mockResponse);
            expect(factoryRepository.getById).toHaveBeenCalledTimes(1);
            expect(factoryRepository.getById).toBeCalledWith(factoryId);
        });
    });

    describe('FactoryService.delete', () => {
        it('should return true delete factory', async () => {
            //arrange
            const factoryId = 2;
            const mockResponse = true;

            const factoryRepository = new FactoryRepository();
            factoryRepository.delete = jest.fn().mockResolvedValue(mockResponse);

            //act
            const factoryService = new FactoryService(factoryRepository);
            const result = await factoryService.delete(factoryId);

            //assert
            expect(result).toEqual(mockResponse);

            //assert factoryRepository.delete
            expect(factoryRepository.delete).toHaveBeenCalledTimes(1);
        });
    });
});
