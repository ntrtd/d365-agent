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
import type { VatOperationCodeTablesApi } from './VatOperationCodeTablesApi';

/**
 * This class represents the entity "VATOperationCodeTables" of service "d365_metadata".
 */
export class VatOperationCodeTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VatOperationCodeTablesType<T>
{
  /**
   * Technical entity name for VatOperationCodeTables.
   */
  static override _entityName = 'VATOperationCodeTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VatOperationCodeTables entity.
   */
  static _keys = ['dataAreaId', 'VATOperationCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vat Operation Code.
   */
  declare vatOperationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VatOperationCodeTablesApi<T>) {
    super(_entityApi);
  }
}

export interface VatOperationCodeTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vatOperationCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
