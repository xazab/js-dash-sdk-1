import { Platform } from "../../Platform";
import Identifier from "@xazab/dpp/lib/Identifier";

/**
 * @param record - the exact name of the record to resolve
 * @param value - the exact value for this record to resolve
 * @returns {Document[]} - Resolved domains
 */
export async function resolveByRecord(this: Platform, record: string, value: any): Promise<any> {
    if (record === 'xazabUniqueIdentityId' || record === 'xazabAliasIdentityId') {
        value = Identifier.from(value);
    }

    return await this.documents.get('dpns.domain', {
        where: [
            [`records.${record}`, '==', value],
        ],
    });
}

export default resolveByRecord;
