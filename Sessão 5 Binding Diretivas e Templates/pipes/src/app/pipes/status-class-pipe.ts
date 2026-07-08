import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "statusClass"
})
export class StatusClassPipe implements PipeTransform {
    transform(status: number): string {
        console.log("Transformando status:", status);
        // if (status === 1) {
        //     return 'ativo';
        // } else if (status === 2) {
        //     return 'parcial';
        // } else {
        //     return 'bloqueado';
        // }

        const object: { [key: number]: string } = {
            1: 'ativo',
            2: 'parcial',
            3: 'bloqueado'
        }
        return object[status] || '';
    }
}