export default function ValidateModel(modelDef: any, chamberInfo: ChamberInfo): KeyValuePair[];
type ChamberInfo = {
    chamber_num_servers: number;
    server_max_cpus: number;
    model_max_cpus: number;
    server_reserved_cpus: number;
    chamber_start_ip: string;
    chamber_start_port: number;
    model_max_net_ports: number;
    model_max_device_ports: number;
    max_model_instances: number;
};
type KeyValuePair = [string, string];
export {};
//# sourceMappingURL=validator.d.ts.map