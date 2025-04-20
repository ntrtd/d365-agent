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
import type { RetailChannelProfilePropertiesApi } from './RetailChannelProfilePropertiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailChannelProfileProperties" of service "d365_metadata".
 */
export class RetailChannelProfileProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelProfilePropertiesType<T>
{
  /**
   * Technical entity name for RetailChannelProfileProperties.
   */
  static override _entityName = 'RetailChannelProfileProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelProfileProperties entity.
   */
  static _keys = ['RetailChannelProfile_Name', 'Key', 'Value'];
  /**
   * Retail Channel Profile Name.
   */
  declare retailChannelProfileName: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.String'>;
  /**
   * Is System Record.
   * @nullable
   */
  declare isSystemRecord?: NoYes | null;

  constructor(_entityApi: RetailChannelProfilePropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelProfilePropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelProfileName: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  value: DeserializedType<T, 'Edm.String'>;
  isSystemRecord?: NoYes | null;
}
