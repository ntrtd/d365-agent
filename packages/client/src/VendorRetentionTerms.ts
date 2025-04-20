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
import type { VendorRetentionTermsApi } from './VendorRetentionTermsApi';
import {
  VendorRetentionTermSchedules,
  VendorRetentionTermSchedulesType
} from './VendorRetentionTermSchedules';

/**
 * This class represents the entity "VendorRetentionTerms" of service "d365_metadata".
 */
export class VendorRetentionTerms<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorRetentionTermsType<T>
{
  /**
   * Technical entity name for VendorRetentionTerms.
   */
  static override _entityName = 'VendorRetentionTerms';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorRetentionTerms entity.
   */
  static _keys = ['dataAreaId', 'RuleID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Id.
   */
  declare ruleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorRetentionTermSchedules} entity.
   */
  declare vendorRetentionTermSchedule?: VendorRetentionTermSchedules<T> | null;

  constructor(_entityApi: VendorRetentionTermsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorRetentionTermsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  vendorRetentionTermSchedule?: VendorRetentionTermSchedulesType<T> | null;
}
