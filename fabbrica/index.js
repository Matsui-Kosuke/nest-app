"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineUserFactory = exports.resetScalarFieldValueGenerator = exports.registerScalarFieldValueGenerator = exports.resetSequence = exports.initialize = void 0;
const internal_1 = require("@quramy/prisma-fabbrica/lib/internal");
var internal_2 = require("@quramy/prisma-fabbrica/lib/internal");
Object.defineProperty(exports, "initialize", { enumerable: true, get: function () { return internal_2.initialize; } });
Object.defineProperty(exports, "resetSequence", { enumerable: true, get: function () { return internal_2.resetSequence; } });
Object.defineProperty(exports, "registerScalarFieldValueGenerator", { enumerable: true, get: function () { return internal_2.registerScalarFieldValueGenerator; } });
Object.defineProperty(exports, "resetScalarFieldValueGenerator", { enumerable: true, get: function () { return internal_2.resetScalarFieldValueGenerator; } });
const modelFieldDefinitions = [{
        name: "User",
        fields: []
    }];
function autoGenerateUserScalarsOrEnums({ seq }) {
    return {
        email: (0, internal_1.getScalarFieldValueGenerator)().String({ modelName: "User", fieldName: "email", isId: false, isUnique: true, seq })
    };
}
function defineUserFactoryInternal({ defaultData: defaultDataResolver, traits: traitsDefs = {} }) {
    const getFactoryWithTraits = (traitKeys = []) => {
        const seqKey = {};
        const getSeq = () => (0, internal_1.getSequenceCounter)(seqKey);
        const screen = (0, internal_1.createScreener)("User", modelFieldDefinitions);
        const build = async (inputData = {}) => {
            const seq = getSeq();
            const requiredScalarData = autoGenerateUserScalarsOrEnums({ seq });
            const resolveValue = (0, internal_1.normalizeResolver)(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
            const defaultData = await traitKeys.reduce(async (queue, traitKey) => {
                var _a, _b;
                const acc = await queue;
                const resolveTraitValue = (0, internal_1.normalizeResolver)((_b = (_a = traitsDefs[traitKey]) === null || _a === void 0 ? void 0 : _a.data) !== null && _b !== void 0 ? _b : {});
                const traitData = await resolveTraitValue({ seq });
                return Object.assign(Object.assign({}, acc), traitData);
            }, resolveValue({ seq }));
            const defaultAssociations = {};
            const data = Object.assign(Object.assign(Object.assign(Object.assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
            return data;
        };
        const buildList = (inputData) => Promise.all((0, internal_1.normalizeList)(inputData).map(data => build(data)));
        const pickForConnect = (inputData) => ({
            id: inputData.id
        });
        const create = async (inputData = {}) => {
            const data = await build(inputData).then(screen);
            return await (0, internal_1.getClient)().user.create({ data });
        };
        const createList = (inputData) => Promise.all((0, internal_1.normalizeList)(inputData).map(data => create(data)));
        const createForConnect = (inputData = {}) => create(inputData).then(pickForConnect);
        return {
            _factoryFor: "User",
            build,
            buildList,
            buildCreateInput: build,
            pickForConnect,
            create,
            createList,
            createForConnect,
        };
    };
    const factory = getFactoryWithTraits();
    const useTraits = (name, ...names) => {
        return getFactoryWithTraits([name, ...names]);
    };
    return Object.assign(Object.assign({}, factory), { use: useTraits });
}
function defineUserFactory(options) {
    return defineUserFactoryInternal(options !== null && options !== void 0 ? options : {});
}
exports.defineUserFactory = defineUserFactory;
