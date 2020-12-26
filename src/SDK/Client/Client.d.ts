import DAPIClient from "@xazab/dapi-client"

export declare namespace SDK {
    interface platformOpts {
        client: DAPIClient;
        apps: object;
        state: object;
    }
}
