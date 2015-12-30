interface vm {
    $id: string
}

interface avalonStatic {
    
    /**
     * define controller
     */
    define(obj: vm): any
    filters: any
    mix(obj1: any, obj2: any, obj3?: any, obj4?: any): any
}


declare module "avalon" {
    export =avalon;
}
declare var avalon: avalonStatic;
