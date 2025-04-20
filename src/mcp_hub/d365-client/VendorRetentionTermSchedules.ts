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
import type { VendorRetentionTermSchedulesApi } from './VendorRetentionTermSchedulesApi';
import {
  VendorRetentionTerms,
  VendorRetentionTermsType
} from './VendorRetentionTerms';

/**
 * This class represents the entity "VendorRetentionTermSchedules" of service "d365_metadata".
 */
export class VendorRetentionTermSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRetentionTermSchedulesType<T>
{
  /**
   * Technical entity name for VendorRetentionTermSchedules.
   */
  static override _entityName = 'VendorRetentionTermSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRetentionTermSchedules entity.
   */
  static _keys = ['dataAreaId', 'RuleID', 'PercentageOfUnitsDelivered'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Id.
   */
  declare ruleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Percentage Of Units Delivered.
   */
  declare percentageOfUnitsDelivered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percentage To Retain.
   */
  declare percentageToRetain: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percentage To Release.
   */
  declare percentageToRelease: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link VendorRetentionTerms} entity.
   */
  declare vendorRetentionTerm?: VendorRetentionTerms<T> | null;

  constructor(_entityApi: VendorRetentionTermSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface VendorRetentionTermSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleId: DeserializedType<T, 'Edm.String'>;
  percentageOfUnitsDelivered: DeserializedType<T, 'Edm.Decimal'>;
  percentageToRetain: DeserializedType<T, 'Edm.Decimal'>;
  percentageToRelease: DeserializedType<T, 'Edm.Decimal'>;
  vendorRetentionTerm?: VendorRetentionTermsType<T> | null;
}
