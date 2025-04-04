import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import { ReplyToMessageWorkflow2 } from "../workflows/reply_to_message2.ts";

const trigger: Trigger<typeof ReplyToMessageWorkflow2.definition> = {
  type: TriggerTypes.Event,
  event: {
    event_type: TriggerEventTypes.MessagePosted,
    all_resources: true, 
    filter: {
      root: {
        operator: "AND",
        inputs: [
          {
            operator: "NOT",
            inputs: [
              { statement: "{{data.user_id}} == null" }, // appからの投稿除外
            ],
          },
          {
            statement: "{{data.text}} CONTAINS '新しい端末の承認をいただけますか？'",
          },
        ],
      },
    version: 1,
    },
  },
  name: "Reply to the posted message2",
  workflow: `#/workflows/${ReplyToMessageWorkflow2.definition.callback_id}`,
  inputs: {
    message_ts: {
      value: TriggerContextData.Event.MessagePosted.message_ts,
    },
    channel_id: {
      value: TriggerContextData.Event.MessagePosted.channel_id,
    },
    user_id: {
      value: TriggerContextData.Event.MessagePosted.user_id, // ← これを追加
    },
  },
};

export default trigger;
