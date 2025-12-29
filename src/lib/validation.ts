/**
 * Form validation utilities for CFHEC platform
 */

export interface ValidationResult {
    valid: boolean;
    message?: string;
}

/**
 * Validate email format
 */
export function validateEmail(email: string): ValidationResult {
    if (!email) {
        return { valid: false, message: "El correo electrónico es requerido" };
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return { valid: false, message: "Por favor ingrese un correo válido" };
    }

    return { valid: true };
}

/**
 * Validate password strength
 */
export function validatePassword(password: string, minLength = 8): ValidationResult {
    if (!password) {
        return { valid: false, message: "La contraseña es requerida" };
    }

    if (password.length < minLength) {
        return {
            valid: false,
            message: `La contraseña debe tener al menos ${minLength} caracteres`
        };
    }

    return { valid: true };
}

/**
 * Validate required field
 */
export function validateRequired(value: string | undefined | null, fieldName = "Este campo"): ValidationResult {
    if (!value || value.trim() === "") {
        return { valid: false, message: `${fieldName} es requerido` };
    }

    return { valid: true };
}

/**
 * Validate minimum length
 */
export function validateMinLength(value: string, minLength: number, fieldName = "Este campo"): ValidationResult {
    if (!value || value.length < minLength) {
        return {
            valid: false,
            message: `${fieldName} debe tener al menos ${minLength} caracteres`
        };
    }

    return { valid: true };
}

/**
 * Validate maximum length
 */
export function validateMaxLength(value: string, maxLength: number, fieldName = "Este campo"): ValidationResult {
    if (value && value.length > maxLength) {
        return {
            valid: false,
            message: `${fieldName} no puede exceder ${maxLength} caracteres`
        };
    }

    return { valid: true };
}

/**
 * Validate phone number format (Chilean format)
 */
export function validatePhone(phone: string): ValidationResult {
    if (!phone) {
        return { valid: true }; // Phone is optional
    }

    // Chilean phone: +56 9 XXXX XXXX or 9 XXXX XXXX
    const phonePattern = /^(\+?56)?9\d{8}$/;
    const cleanPhone = phone.replace(/\s|-/g, "");

    if (!phonePattern.test(cleanPhone)) {
        return { valid: false, message: "Por favor ingrese un número de teléfono válido" };
    }

    return { valid: true };
}

/**
 * Combine multiple validation results
 */
export function combineValidations(...results: ValidationResult[]): ValidationResult {
    for (const result of results) {
        if (!result.valid) {
            return result;
        }
    }
    return { valid: true };
}

/**
 * Create a validation schema for form fields
 */
export function createFormValidator<T extends Record<string, unknown>>(
    validators: { [K in keyof T]?: (value: T[K]) => ValidationResult }
) {
    return (data: T): { valid: boolean; errors: Partial<Record<keyof T, string>> } => {
        const errors: Partial<Record<keyof T, string>> = {};
        let valid = true;

        for (const key in validators) {
            const validator = validators[key];
            if (validator) {
                const result = validator(data[key]);
                if (!result.valid) {
                    valid = false;
                    errors[key] = result.message;
                }
            }
        }

        return { valid, errors };
    };
}
