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
import type { RAssetDeprProfilesApi } from './RAssetDeprProfilesApi';
import { RAssetDeprMethod } from './RAssetDeprMethod';
import { RAssetDeprInterval } from './RAssetDeprInterval';
import { NoYes } from './NoYes';
import { RAssetDeprSumBase } from './RAssetDeprSumBase';

/**
 * This class represents the entity "RAssetDeprProfiles" of service "d365_metadata".
 */
export class RAssetDeprProfiles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetDeprProfilesType<T>
{
  /**
   * Technical entity name for RAssetDeprProfiles.
   */
  static override _entityName = 'RAssetDeprProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetDeprProfiles entity.
   */
  static _keys = ['dataAreaId', 'DepreciationMethod'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Method.
   */
  declare depreciationMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Method.
   * @nullable
   */
  declare method?: RAssetDeprMethod | null;
  /**
   * Cost Limit.
   */
  declare costLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Interval.
   * @nullable
   */
  declare interval?: RAssetDeprInterval | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Monthly.
   * @nullable
   */
  declare monthly?: NoYes | null;
  /**
   * Depreciation Calculation.
   * @nullable
   */
  declare depreciationCalculation?: RAssetDeprSumBase | null;

  constructor(_entityApi: RAssetDeprProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetDeprProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  depreciationMethod: DeserializedType<T, 'Edm.String'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  method?: RAssetDeprMethod | null;
  costLimit: DeserializedType<T, 'Edm.Decimal'>;
  interval?: RAssetDeprInterval | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  monthly?: NoYes | null;
  depreciationCalculation?: RAssetDeprSumBase | null;
}
