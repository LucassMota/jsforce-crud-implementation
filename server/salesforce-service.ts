import jsforce from "jsforce";
import dotenv from "dotenv";
dotenv.config();

export const conn = new jsforce.Connection({
  loginUrl: process.env.SF_LOGIN_URL,
});

export async function describeObject(objectName: string) {
  try {
    const meta = await conn.describe(objectName);
    return meta;
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function select(objectName: string) {
  try {
    const record = await conn.sobject(objectName).find({});
    return record;
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function selectById(objectName: string, id: string) {
  console.log(objectName, id);
  try {
    const record = await conn.sobject(objectName).retrieve(id);
    return record;
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function updateObject(
  objectName: string,
  id: string,
  fields: object,
) {
  try {
    const result = await conn.sobject(objectName).update({ Id: id, ...fields });
    return result;
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function createObject(objectName: string, fields: object) {
  try {
    const result = await conn.sobject(objectName).create(fields);
    return result;
  } catch (err: any) {
    return { error: err.message };
  }
}

export async function deleteObject(objectName: string, id: string) {
  try {
    const result = await conn.sobject(objectName).destroy(id);
    return result;
  } catch (err: any) {
    return { error: err.message };
  }
}
