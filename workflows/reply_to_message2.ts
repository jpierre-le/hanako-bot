import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

export const ReplyToMessageWorkflow2 = DefineWorkflow(
  {
    callback_id: "reply_to_message2",
    title: "Reply to the message posted2",
    description: "Reply with today's message",
    input_parameters: {
      properties: {
        message_ts: {
          description: "The message to respond to",
          type: Schema.types.string,
        },
        channel_id: {
          description: "The id of the Channel to join",
          type: Schema.slack.types.channel_id,
        },
        user_id: {
          description: "The user who posted the message",
          type: Schema.slack.types.user_id,
        },
      },
      required: ["channel_id", "message_ts", "user_id"],
    },
  },
);

ReplyToMessageWorkflow2.addStep(
  Schema.slack.functions.ReplyInThread,
  {
    message_context: {
      channel_id: ReplyToMessageWorkflow2.inputs.channel_id,
      message_ts: ReplyToMessageWorkflow2.inputs.message_ts,
    },
    message:
      `<@${ReplyToMessageWorkflow2.inputs.user_id}> 承認します :thumbsup: `,
  },
);
