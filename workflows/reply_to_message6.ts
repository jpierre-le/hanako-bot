import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

export const ReplyToMessageWorkflow6 = DefineWorkflow(
  {
    callback_id: "reply_to_message6",
    title: "Reply to the message posted6",
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

ReplyToMessageWorkflow6.addStep(
  Schema.slack.functions.ReplyInThread,
  {
    message_context: {
      channel_id: ReplyToMessageWorkflow6.inputs.channel_id,
      message_ts: ReplyToMessageWorkflow6.inputs.message_ts,
    },
    message:
      `<@${ReplyToMessageWorkflow6.inputs.user_id}> 承認します :thumbsup: `,
  },
);
