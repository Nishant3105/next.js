// app/send.ts
/* __next_internal_action_entry_do_not_use__ {"050e3854b72b19e3c7e3966a67535543a90bf7e0":"baz","ab21efdafbe611287bc25c0462b1e0510d13e48b":"foo","c18c215a6b7cdc64bf709f3a714ffdef1bf9651d":"default"} */ import { registerServerReference } from "private-next-rsc-server-reference";
import { encryptActionBoundArgs, decryptActionBoundArgs } from "private-next-rsc-action-encryption";
async function foo() {}
export { foo };
async function bar() {}
export { bar as baz };
async function qux() {}
export { qux as default };
import { ensureServerEntryExports } from "private-next-rsc-action-validate";
ensureServerEntryExports([
    foo,
    bar,
    qux
]);
registerServerReference(foo, "ab21efdafbe611287bc25c0462b1e0510d13e48b", null);
registerServerReference(bar, "050e3854b72b19e3c7e3966a67535543a90bf7e0", null);
registerServerReference(qux, "c18c215a6b7cdc64bf709f3a714ffdef1bf9651d", null);
