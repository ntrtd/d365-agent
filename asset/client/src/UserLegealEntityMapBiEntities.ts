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
import type { UserLegealEntityMapBiEntitiesApi } from './UserLegealEntityMapBiEntitiesApi';

/**
 * This class represents the entity "UserLegealEntityMapBIEntities" of service "d365_metadata".
 */
export class UserLegealEntityMapBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UserLegealEntityMapBiEntitiesType<T>
{
  /**
   * Technical entity name for UserLegealEntityMapBiEntities.
   */
  static override _entityName = 'UserLegealEntityMapBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UserLegealEntityMapBiEntities entity.
   */
  static _keys = ['ObjectId', 'OrganizationId'];
  /**
   * Object Id.
   */
  declare objectId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Organization Id.
   */
  declare organizationId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Network Alias.
   * @nullable
   */
  declare networkAlias?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: UserLegealEntityMapBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface UserLegealEntityMapBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  objectId: DeserializedType<T, 'Edm.Guid'>;
  organizationId: DeserializedType<T, 'Edm.String'>;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  networkAlias?: DeserializedType<T, 'Edm.String'> | null;
}
