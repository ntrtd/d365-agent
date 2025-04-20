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
import type { FiscalRegisterConfigurationsApi } from './FiscalRegisterConfigurationsApi';

/**
 * This class represents the entity "FiscalRegisterConfigurations" of service "d365_metadata".
 */
export class FiscalRegisterConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalRegisterConfigurationsType<T>
{
  /**
   * Technical entity name for FiscalRegisterConfigurations.
   */
  static override _entityName = 'FiscalRegisterConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalRegisterConfigurations entity.
   */
  static _keys = ['ConfigurationId'];
  /**
   * Configuration Id.
   */
  declare configurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Configuration Content.
   * @nullable
   */
  declare configurationContent?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FiscalRegisterConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalRegisterConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  configurationId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  configurationContent?: DeserializedType<T, 'Edm.String'> | null;
}
