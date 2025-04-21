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
import type { PredPredictionResultsApi } from './PredPredictionResultsApi';

/**
 * This class represents the entity "PredPredictionResults" of service "d365_metadata".
 */
export class PredPredictionResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PredPredictionResultsType<T>
{
  /**
   * Technical entity name for PredPredictionResults.
   */
  static override _entityName = 'PredPredictionResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PredPredictionResults entity.
   */
  static _keys = [
    'SourceTableId',
    'SourceRecId',
    'ModelId',
    'InvoiceCustTransRecId',
    'SourceKey'
  ];
  /**
   * Source Table Id.
   */
  declare sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Rec Id.
   */
  declare sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Model Id.
   */
  declare modelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Cust Trans Rec Id.
   */
  declare invoiceCustTransRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Explainability.
   * @nullable
   */
  declare explainability?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scored Date.
   */
  declare scoredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Likelihoods.
   * @nullable
   */
  declare likelihoods?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PredPredictionResultsApi<T>) {
    super(_entityApi);
  }
}

export interface PredPredictionResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceTableId: DeserializedType<T, 'Edm.Int32'>;
  sourceRecId: DeserializedType<T, 'Edm.Int64'>;
  modelId: DeserializedType<T, 'Edm.String'>;
  invoiceCustTransRecId: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.String'>;
  explainability?: DeserializedType<T, 'Edm.String'> | null;
  scoredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  likelihoods?: DeserializedType<T, 'Edm.String'> | null;
}
