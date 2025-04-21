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
import type { ChannelUsersApi } from './ChannelUsersApi';

/**
 * This class represents the entity "ChannelUsers" of service "d365_metadata".
 */
export class ChannelUsers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChannelUsersType<T>
{
  /**
   * Technical entity name for ChannelUsers.
   */
  static override _entityName = 'ChannelUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChannelUsers entity.
   */
  static _keys = ['dataAreaId', 'OperatingUnitNumber', 'User'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * User.
   */
  declare user: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: ChannelUsersApi<T>) {
    super(_entityApi);
  }
}

export interface ChannelUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  user: DeserializedType<T, 'Edm.String'>;
}
