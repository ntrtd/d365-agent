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
import type { SystemGlobalConfigurationsApi } from './SystemGlobalConfigurationsApi';

/**
 * This class represents the entity "SystemGlobalConfigurations" of service "d365_metadata".
 */
export class SystemGlobalConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SystemGlobalConfigurationsType<T>
{
  /**
   * Technical entity name for SystemGlobalConfigurations.
   */
  static override _entityName = 'SystemGlobalConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SystemGlobalConfigurations entity.
   */
  static _keys = ['AOSInstanceName', 'Name'];
  /**
   * Aos Instance Name.
   */
  declare aosInstanceName: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Setting Level.
   */
  declare settingLevel: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: SystemGlobalConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface SystemGlobalConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  aosInstanceName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  settingLevel: DeserializedType<T, 'Edm.Int32'>;
}
