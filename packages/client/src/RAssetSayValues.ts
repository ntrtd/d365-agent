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
import type { RAssetSayValuesApi } from './RAssetSayValuesApi';

/**
 * This class represents the entity "RAssetSayValues" of service "d365_metadata".
 */
export class RAssetSayValues<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetSayValuesType<T>
{
  /**
   * Technical entity name for RAssetSayValues.
   */
  static override _entityName = 'RAssetSayValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetSayValues entity.
   */
  static _keys = ['dataAreaId', 'AnalysisCode', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Analysis Code.
   */
  declare analysisCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Rate.
   */
  declare depreciationRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RAssetSayValuesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetSayValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  analysisCode: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  depreciationRate: DeserializedType<T, 'Edm.Decimal'>;
}
