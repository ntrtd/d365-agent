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
import type { EInvoicePropertiesApi } from './EInvoicePropertiesApi';

/**
 * This class represents the entity "EInvoiceProperties" of service "d365_metadata".
 */
export class EInvoiceProperties<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EInvoicePropertiesType<T>
{
  /**
   * Technical entity name for EInvoiceProperties.
   */
  static override _entityName = 'EInvoiceProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EInvoiceProperties entity.
   */
  static _keys = ['TableName', 'TableFieldName', 'TableFieldValue', 'Type'];
  /**
   * Table Name.
   */
  declare tableName: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Field Name.
   */
  declare tableFieldName: DeserializedType<T, 'Edm.String'>;
  /**
   * Table Field Value.
   */
  declare tableFieldValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ref Table Id.
   */
  declare refTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ref Rec Id.
   */
  declare refRecId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: EInvoicePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface EInvoicePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tableName: DeserializedType<T, 'Edm.String'>;
  tableFieldName: DeserializedType<T, 'Edm.String'>;
  tableFieldValue: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
}
