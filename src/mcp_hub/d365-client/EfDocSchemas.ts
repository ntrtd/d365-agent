/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { EfDocSchemasApi } from './EfDocSchemasApi';
import { EfDocSchemaTypeBr } from './EfDocSchemaTypeBr';
import { EFiscalDocVersionBr } from './EFiscalDocVersionBr';

/**
 * This class represents the entity "EFDocSchemas" of service "d365_metadata".
 */
export class EfDocSchemas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EfDocSchemasType<T>
{
  /**
   * Technical entity name for EfDocSchemas.
   */
  static override _entityName = 'EFDocSchemas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocSchemas entity.
   */
  static _keys = ['SchemaType', 'Version'];
  /**
   * Schema Type.
   * @nullable
   */
  declare schemaType?: EfDocSchemaTypeBr | null;
  /**
   * Version.
   * @nullable
   */
  declare version?: EFiscalDocVersionBr | null;
  /**
   * Schema File Path.
   * @nullable
   */
  declare schemaFilePath?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EfDocSchemasApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocSchemasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  schemaType?: EfDocSchemaTypeBr | null;
  version?: EFiscalDocVersionBr | null;
  schemaFilePath?: DeserializedType<T, 'Edm.String'> | null;
}
