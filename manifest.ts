import { Manifest } from "deno-slack-sdk/mod.ts";
import { ReplyToMessageWorkflow5 } from "./workflows/reply_to_message5.ts";
import { ReplyToMessageWorkflow6 } from "./workflows/reply_to_message6.ts";

export default Manifest({
  name: "Hanako Sato",
  displayName: "Hanako Sato",
  description: "Demo",
  icon: "assets/hanako-icon.jpg",
  workflows: [
       ReplyToMessageWorkflow5,
       ReplyToMessageWorkflow6,
  ],
  outgoingDomains: [],
  botScopes: [
    "channels:history",
    "groups:write",
    "im:write",
    "im:history",
    "mpim:write",
    "chat:write",
    "chat:write.public",
    "triggers:write",
    "triggers:read",
  ],
});
