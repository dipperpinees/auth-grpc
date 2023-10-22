import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";

export default function UnaryCall() {
    return (target: any, nameMethod: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value
        descriptor.value = async function (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) {
            try {
                const response = await originalMethod.apply(this, [call, callback])
                return callback(null, response);
            } catch (err) {
                const errMessage = `${err}`;
                return callback(
                    {
                        message: errMessage,
                        code: status.INTERNAL
                    },
                    null,
                )
            }
        }
    }
}