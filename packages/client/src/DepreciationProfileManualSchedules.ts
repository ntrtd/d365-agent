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
import type { DepreciationProfileManualSchedulesApi } from './DepreciationProfileManualSchedulesApi';
import {
  DepreciationProfiles,
  DepreciationProfilesType
} from './DepreciationProfiles';

/**
 * This class represents the entity "DepreciationProfileManualSchedules" of service "d365_metadata".
 */
export class DepreciationProfileManualSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DepreciationProfileManualSchedulesType<T>
{
  /**
   * Technical entity name for DepreciationProfileManualSchedules.
   */
  static override _entityName = 'DepreciationProfileManualSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DepreciationProfileManualSchedules entity.
   */
  static _keys = ['dataAreaId', 'ProfileId', 'IntervalNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Interval Number.
   */
  declare intervalNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Percentage.
   */
  declare percentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DepreciationProfiles} entity.
   */
  declare assetDepreciationProfileManualProfileId?: DepreciationProfiles<T> | null;

  constructor(_entityApi: DepreciationProfileManualSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface DepreciationProfileManualSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  intervalNumber: DeserializedType<T, 'Edm.Int32'>;
  percentage: DeserializedType<T, 'Edm.Decimal'>;
  assetDepreciationProfileManualProfileId?: DepreciationProfilesType<T> | null;
}
