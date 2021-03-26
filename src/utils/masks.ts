function cpfMask(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

function cnpjMask(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}

function phoneMask(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1');
}

function cepMask(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
}

function rgMask(value: string): string {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{1})\d+?$/, '$1');
}

function brazilianCurrencyMask(value: number): string {
    return value
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function capitalizeString(value: string): string {
    return value
        .toLocaleLowerCase()
        .replace(
            new RegExp(/\b([a-z]{2,})(?<!)/g),
            word => word.charAt(0).toUpperCase() + word.slice(1),
        );
}

function downcaseString(value: string): string {
    return value.toLocaleLowerCase();
}

export {
    cpfMask,
    cnpjMask,
    phoneMask,
    cepMask,
    rgMask,
    brazilianCurrencyMask,
    capitalizeString,
    downcaseString,
};
