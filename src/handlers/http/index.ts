import { APIGatewayEvent, Context } from 'aws-lambda';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const handler = async (event: APIGatewayEvent, context: Context) => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    return context.logStreamName;
};
