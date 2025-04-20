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
import type { RetailInfocodeGroupMembersApi } from './RetailInfocodeGroupMembersApi';

/**
 * This class represents the entity "RetailInfocodeGroupMembers" of service "d365_metadata".
 */
export class RetailInfocodeGroupMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInfocodeGroupMembersType<T>
{
  /**
   * Technical entity name for RetailInfocodeGroupMembers.
   */
  static override _entityName = 'RetailInfocodeGroupMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInfocodeGroupMembers entity.
   */
  static _keys = ['dataAreaId', 'GroupId', 'InfocodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Infocode Id.
   */
  declare infocodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: RetailInfocodeGroupMembersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInfocodeGroupMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  infocodeId: DeserializedType<T, 'Edm.String'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
}
