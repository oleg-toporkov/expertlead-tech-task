export class CreateUserRequestDTO {

    public name: string;
    public job: string;

    constructor(name: string, job: string) {
        this.name = name;
        this.job = job;
    }

}