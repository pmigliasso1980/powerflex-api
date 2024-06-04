import { Expose } from 'class-transformer';
import { IsInt } from 'class-validator';
import { IsFloat } from '../../decorators/isfloat.decorator';
import Sprocket from '../../../models/sprocket.model';

export class SprocketCreateResponseDTO {
    @Expose()
    @IsInt()
    id: number;
    
    @Expose()
    @IsInt()
    teeth: number;
    
    @Expose()
    @IsFloat()
    pitch_diameter: number;
    
    @Expose()
    @IsFloat()
    outside_diameter: number;
    
    @Expose()
    @IsFloat()
    pitch: number;

    constructor(sprocket: Sprocket) {
        this.id = sprocket.id;
        this.teeth = sprocket.teeth;
        this.pitch_diameter = sprocket.pitchDiameter;
        this.outside_diameter = sprocket.outsideDiameter;
        this.pitch = sprocket.pitch;
    }
}

export class SprocketUpdateResponseDTO {
    @Expose()
    @IsInt()
    teeth: number;
    
    @Expose()
    @IsFloat()
    pitch_diameter: number;
    
    @Expose()
    @IsFloat()
    outside_diameter: number;
    
    @Expose()
    @IsFloat()
    pitch: number;

    constructor(sprocket: Sprocket) {
        this.teeth = sprocket.teeth;
        this.teeth = sprocket.teeth;
        this.pitch_diameter = sprocket.pitchDiameter;
        this.outside_diameter = sprocket.outsideDiameter;
        this.pitch = sprocket.pitch;
    }
}
