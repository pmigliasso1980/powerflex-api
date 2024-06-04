import { IsArray, ArrayNotEmpty, IsInt, Min } from 'class-validator';

/** Type representing an array of non-negative integers for production data. */
type ProductionDataArray = ReadonlyArray<number>;

/** Type representing an array of UNIX epoch times as readonly integers. */
type UnixEpochTimeArray = ReadonlyArray<number>;

/**
 * Class for holding production data for sprockets.
 * @field sprocketProductionActual Actual production counts for sprockets at specified times.
 * @field sprocketProductionGoal Targeted production goals for sprockets at specified times.
 * @field time UNIX epoch times corresponding to each production data point.
 */
export class ChartData {
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @Min(0, { each: true })
    readonly sprocket_production_actual!: ProductionDataArray;

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @Min(0, { each: true })
    readonly sprocket_production_goal!: ProductionDataArray;

    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    @Min(0, { each: true })
    readonly time!: UnixEpochTimeArray;
}


export interface IRepository<T> {
    /**
     * Creates a new entity or updates an existing one in the repository.
     * @param entity Entity instance to be saved.
     * @returns A Promise resolving to the saved entity.
     */
    create(entity: T): Promise<T>;
  
    /**
     * Gets all entities.
     * @returns A Promise resolving to an array of entities.
     */
    getAll(): Promise<T[]>;
  
    /**
     * Gets a single entity by its identifier.
     * @param entityId Unique identifier of the entity.
     * @returns A Promise resolving to the entity or null if not found.
     */
    getById(entityId: number): Promise<T | null>;
  
    /**
     * Updates an existing entity in the repository.
     * @param entity Entity instance to be updated.
     * @returns A Promise resolving to the number of affected rows.
     */
    update(entity: T): Promise<number>;
  
    /**
     * Deletes an entity by its identifier.
     * @param entityId Unique identifier of the entity to be deleted.
     * @returns A Promise resolving to the number of affected rows.
     */
    delete(entityId: number): Promise<number>;
  }
  