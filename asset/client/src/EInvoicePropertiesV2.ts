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
import type { EInvoicePropertiesV2Api } from './EInvoicePropertiesV2Api';

/**
 * This class represents the entity "EInvoicePropertiesV2" of service "d365_metadata".
 */
export class EInvoicePropertiesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EInvoicePropertiesV2Type<T>
{
  /**
   * Technical entity name for EInvoicePropertiesV2.
   */
  static override _entityName = 'EInvoicePropertiesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EInvoicePropertiesV2 entity.
   */
  static _keys = [
    'TableName',
    'TableFieldName',
    'TableFieldValue',
    'Type',
    'TableDataAreaId'
  ];
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
   * Table Data Area Id.
   */
  declare tableDataAreaId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: EInvoicePropertiesV2Api<T>) {
    super(_entityApi);
  }
}

export interface EInvoicePropertiesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  tableName: DeserializedType<T, 'Edm.String'>;
  tableFieldName: DeserializedType<T, 'Edm.String'>;
  tableFieldValue: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  tableDataAreaId: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  refTableId: DeserializedType<T, 'Edm.Int32'>;
  refRecId: DeserializedType<T, 'Edm.Int64'>;
}
