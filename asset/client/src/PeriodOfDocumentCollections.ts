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
import type { PeriodOfDocumentCollectionsApi } from './PeriodOfDocumentCollectionsApi';

/**
 * This class represents the entity "PeriodOfDocumentCollections" of service "d365_metadata".
 */
export class PeriodOfDocumentCollections<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PeriodOfDocumentCollectionsType<T>
{
  /**
   * Technical entity name for PeriodOfDocumentCollections.
   */
  static override _entityName = 'PeriodOfDocumentCollections';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PeriodOfDocumentCollections entity.
   */
  static _keys = ['dataAreaId', 'FromDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Export Confirmation Period.
   */
  declare exportConfirmationPeriod: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: PeriodOfDocumentCollectionsApi<T>) {
    super(_entityApi);
  }
}

export interface PeriodOfDocumentCollectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  exportConfirmationPeriod: DeserializedType<T, 'Edm.Int32'>;
}
