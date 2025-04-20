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
import type { LicensePlateLabelBuildConfigurationsApi } from './LicensePlateLabelBuildConfigurationsApi';

/**
 * This class represents the entity "LicensePlateLabelBuildConfigurations" of service "d365_metadata".
 */
export class LicensePlateLabelBuildConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LicensePlateLabelBuildConfigurationsType<T>
{
  /**
   * Technical entity name for LicensePlateLabelBuildConfigurations.
   */
  static override _entityName = 'LicensePlateLabelBuildConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LicensePlateLabelBuildConfigurations entity.
   */
  static _keys = ['dataAreaId', 'LicensePlateLabelBuildConfigurationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * License Plate Label Build Configuration Id.
   */
  declare licensePlateLabelBuildConfigurationId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Configuration Description.
   * @nullable
   */
  declare configurationDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LicensePlateLabelBuildConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface LicensePlateLabelBuildConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  licensePlateLabelBuildConfigurationId: DeserializedType<T, 'Edm.String'>;
  configurationDescription?: DeserializedType<T, 'Edm.String'> | null;
}
