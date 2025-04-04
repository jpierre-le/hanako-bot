import { Manifest } from "deno-slack-sdk/mod.ts";
import { ReplyToMessageWorkflow } from "./workflows/reply_to_message.ts";
import { ReplyToMessageWorkflow2 } from "./workflows/reply_to_message2.ts";

export default Manifest({
  name: "Hanako Sato",
  description: "TDX Tokyo Demo",
  icon: "assets/icon.jpg",
  workflows: [
       ReplyToMessageWorkflow,
       ReplyToMessageWorkflow2,
  ],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "channels:join",
    "channels:manage",
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
