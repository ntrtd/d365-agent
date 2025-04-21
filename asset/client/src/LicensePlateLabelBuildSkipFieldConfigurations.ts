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
import type { LicensePlateLabelBuildSkipFieldConfigurationsApi } from './LicensePlateLabelBuildSkipFieldConfigurationsApi';

/**
 * This class represents the entity "LicensePlateLabelBuildSkipFieldConfigurations" of service "d365_metadata".
 */
export class LicensePlateLabelBuildSkipFieldConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LicensePlateLabelBuildSkipFieldConfigurationsType<T>
{
  /**
   * Technical entity name for LicensePlateLabelBuildSkipFieldConfigurations.
   */
  static override _entityName = 'LicensePlateLabelBuildSkipFieldConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LicensePlateLabelBuildSkipFieldConfigurations entity.
   */
  static _keys = [
    'dataAreaId',
    'LicensePlateLabelBuildConfigurationId',
    'SkipFieldName'
  ];
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
   * Skip Field Name.
   */
  declare skipFieldName: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: LicensePlateLabelBuildSkipFieldConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface LicensePlateLabelBuildSkipFieldConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  licensePlateLabelBuildConfigurationId: DeserializedType<T, 'Edm.String'>;
  skipFieldName: DeserializedType<T, 'Edm.String'>;
}
