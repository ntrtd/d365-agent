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
import type { VendDlvLeadTimePredictionResultsApi } from './VendDlvLeadTimePredictionResultsApi';

/**
 * This class represents the entity "VendDlvLeadTimePredictionResults" of service "d365_metadata".
 */
export class VendDlvLeadTimePredictionResults<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendDlvLeadTimePredictionResultsType<T>
{
  /**
   * Technical entity name for VendDlvLeadTimePredictionResults.
   */
  static override _entityName = 'VendDlvLeadTimePredictionResults';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendDlvLeadTimePredictionResults entity.
   */
  static _keys = ['HashKey'];
  /**
   * Hash Key.
   */
  declare hashKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Explainability.
   * @nullable
   */
  declare explainability?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Scored Date.
   */
  declare scoredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purch Id.
   * @nullable
   */
  declare purchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Likelihoods.
   * @nullable
   */
  declare likelihoods?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendDlvLeadTimePredictionResultsApi<T>) {
    super(_entityApi);
  }
}

export interface VendDlvLeadTimePredictionResultsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hashKey: DeserializedType<T, 'Edm.String'>;
  explainability?: DeserializedType<T, 'Edm.String'> | null;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  scoredDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  purchId?: DeserializedType<T, 'Edm.String'> | null;
  likelihoods?: DeserializedType<T, 'Edm.String'> | null;
}
