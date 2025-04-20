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
import type { DocumentTaxTablesApi } from './DocumentTaxTablesApi';

/**
 * This class represents the entity "DocumentTaxTables" of service "d365_metadata".
 */
export class DocumentTaxTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentTaxTablesType<T>
{
  /**
   * Technical entity name for DocumentTaxTables.
   */
  static override _entityName = 'DocumentTaxTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentTaxTables entity.
   */
  static _keys = ['dataAreaId', 'TaxCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Currency Code.
   * @nullable
   */
  declare taxCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area.
   * @nullable
   */
  declare dataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Name.
   * @nullable
   */
  declare taxName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DocumentTaxTablesApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentTaxTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  taxCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dataArea?: DeserializedType<T, 'Edm.String'> | null;
  taxName?: DeserializedType<T, 'Edm.String'> | null;
}
