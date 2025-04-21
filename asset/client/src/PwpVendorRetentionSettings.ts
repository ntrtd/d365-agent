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
import type { PwpVendorRetentionSettingsApi } from './PwpVendorRetentionSettingsApi';

/**
 * This class represents the entity "PWPVendorRetentionSettings" of service "d365_metadata".
 */
export class PwpVendorRetentionSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PwpVendorRetentionSettingsType<T>
{
  /**
   * Technical entity name for PwpVendorRetentionSettings.
   */
  static override _entityName = 'PWPVendorRetentionSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PwpVendorRetentionSettings entity.
   */
  static _keys = ['dataAreaId', 'ProjId', 'VendorId', 'VendorGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Proj Id.
   */
  declare projId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Id.
   */
  declare vendorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Group.
   */
  declare vendorGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Id.
   * @nullable
   */
  declare ruleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pwp Threshold Percent.
   */
  declare pwpThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: PwpVendorRetentionSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface PwpVendorRetentionSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projId: DeserializedType<T, 'Edm.String'>;
  vendorId: DeserializedType<T, 'Edm.String'>;
  vendorGroup: DeserializedType<T, 'Edm.String'>;
  ruleId?: DeserializedType<T, 'Edm.String'> | null;
  pwpThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
}
