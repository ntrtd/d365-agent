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
import type { RetailPosThemesApi } from './RetailPosThemesApi';

/**
 * This class represents the entity "RetailPosThemes" of service "d365_metadata".
 */
export class RetailPosThemes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailPosThemesType<T>
{
  /**
   * Technical entity name for RetailPosThemes.
   */
  static override _entityName = 'RetailPosThemes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPosThemes entity.
   */
  static _keys = ['RetailDeviceTypes_Type', 'Name'];
  /**
   * Retail Device Types Type.
   */
  declare retailDeviceTypesType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailPosThemesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPosThemesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailDeviceTypesType: DeserializedType<T, 'Edm.Int32'>;
  name: DeserializedType<T, 'Edm.String'>;
}
