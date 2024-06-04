import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'isFloat', async: false })
class IsFloatConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        return typeof value === 'number' || value % 1 !== 0;
    }

    defaultMessage(args: ValidationArguments) {
        return 'Value must be a floating point number';
    }
}

export function IsFloat(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsFloatConstraint
        });
    };
}
