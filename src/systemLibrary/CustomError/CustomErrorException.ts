class CustomErrorException extends Error{
        public name:string;
        constructor(name:string, message: string) {
            super(message);
        }

        getName(){
            return this.name;
        }
}
