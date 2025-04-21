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
import type { ShiftDepreciationProfileApi } from './ShiftDepreciationProfileApi';

/**
 * This class represents the entity "ShiftDepreciationProfile" of service "d365_metadata".
 */
export class ShiftDepreciationProfile<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShiftDepreciationProfileType<T>
{
  /**
   * Technical entity name for ShiftDepreciationProfile.
   */
  static override _entityName = 'ShiftDepreciationProfile';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShiftDepreciationProfile entity.
   */
  static _keys = ['dataAreaId', 'DepreciationProfile', 'FromDate', 'ToDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Depreciation Profile.
   */
  declare depreciationProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Double Shift Percentage.
   */
  declare doubleShiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Single Shift Percentage.
   */
  declare singleShiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Triple Shift Percentage.
   */
  declare tripleShiftPercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ShiftDepreciationProfileApi<T>) {
    super(_entityApi);
  }
}

export interface ShiftDepreciationProfileType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  depreciationProfile: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  doubleShiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  singleShiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  tripleShiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
}
