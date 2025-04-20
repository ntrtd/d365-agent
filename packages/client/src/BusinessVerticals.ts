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
import type { BusinessVerticalsApi } from './BusinessVerticalsApi';

/**
 * This class represents the entity "BusinessVerticals" of service "d365_metadata".
 */
export class BusinessVerticals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessVerticalsType<T>
{
  /**
   * Technical entity name for BusinessVerticals.
   */
  static override _entityName = 'BusinessVerticals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessVerticals entity.
   */
  static _keys = ['BusinessVerticals'];
  /**
   * Business Verticals.
   */
  declare businessVerticals: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Code.
   * @nullable
   */
  declare entityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BusinessVerticalsApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessVerticalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessVerticals: DeserializedType<T, 'Edm.String'>;
  entityCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
