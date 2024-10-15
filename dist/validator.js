"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ValidateModel;
function ValidateModel(modelDef, chamberInfo) {
    var _a, _b, _c, _d;
    const errors = [];
    if ((_d = (_c = (_b = (_a = modelDef === null || modelDef === void 0 ? void 0 : modelDef.model) === null || _a === void 0 ? void 0 : _a.subsystems[0]) === null || _b === void 0 ? void 0 : _b.primary) === null || _c === void 0 ? void 0 : _c.cpus) === null || _d === void 0 ? void 0 : _d.topology) {
        const coresPerCluster = modelDef === null || modelDef === void 0 ? void 0 : modelDef.model.subsystems[0].primary.cpus.topology.cpus_per_cluster;
        const numClusters = modelDef.model.subsystems[0].primary.cpus.topology.number_of_clusters;
        const totalCores = coresPerCluster * numClusters;
        if (totalCores > chamberInfo.server_max_cpus) {
            errors.push([
                "cpus_per_cluster",
                `Total cores (${totalCores}) cannot exceed ${chamberInfo.server_max_cpus}.`,
            ]);
        }
    }
    return errors;
}
