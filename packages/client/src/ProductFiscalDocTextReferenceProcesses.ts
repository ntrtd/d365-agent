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
import type { ProductFiscalDocTextReferenceProcessesApi } from './ProductFiscalDocTextReferenceProcessesApi';
import { AgencyBr } from './AgencyBr';

/**
 * This class represents the entity "ProductFiscalDocTextReferenceProcesses" of service "d365_metadata".
 */
export class ProductFiscalDocTextReferenceProcesses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductFiscalDocTextReferenceProcessesType<T>
{
  /**
   * Technical entity name for ProductFiscalDocTextReferenceProcesses.
   */
  static override _entityName = 'ProductFiscalDocTextReferenceProcesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductFiscalDocTextReferenceProcesses entity.
   */
  static _keys = [
    'dataAreaId',
    'Item',
    'FiscalDocumentText',
    'Agency',
    'ProcessNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   */
  declare item: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Document Text.
   */
  declare fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  /**
   * Agency.
   * @nullable
   */
  declare agency?: AgencyBr | null;
  /**
   * Process Number.
   */
  declare processNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ProductFiscalDocTextReferenceProcessesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductFiscalDocTextReferenceProcessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  item: DeserializedType<T, 'Edm.String'>;
  fiscalDocumentText: DeserializedType<T, 'Edm.String'>;
  agency?: AgencyBr | null;
  processNumber: DeserializedType<T, 'Edm.String'>;
}
