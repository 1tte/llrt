import "./init";

Object.defineProperty(globalThis, "module", {
  value: new Proxy(
    {},
    {
      set: __bootstrap.moduleExport,
    }
  ),
  configurable: false,
});
Object.defineProperty(globalThis, "exports", {
  value: new Proxy(
    {},
    {
      set: __bootstrap.exports,
    }
  ),
  configurable: false,
});

Object.freeze(__bootstrap);
