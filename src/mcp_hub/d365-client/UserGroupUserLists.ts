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
import type { UserGroupUserListsApi } from './UserGroupUserListsApi';
import { SystemUsers, SystemUsersType } from './SystemUsers';
import { UserGroups, UserGroupsType } from './UserGroups';

/**
 * This class represents the entity "UserGroupUserLists" of service "d365_metadata".
 */
export class UserGroupUserLists<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserGroupUserListsType<T>
{
  /**
   * Technical entity name for UserGroupUserLists.
   */
  static override _entityName = 'UserGroupUserLists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UserGroupUserLists entity.
   */
  static _keys = ['userId', 'groupId'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link SystemUsers} entity.
   */
  declare systemUser?: SystemUsers<T> | null;
  /**
   * One-to-one navigation property to the {@link UserGroups} entity.
   */
  declare userGroup?: UserGroups<T> | null;

  constructor(_entityApi: UserGroupUserListsApi<T>) {
    super(_entityApi);
  }
}

export interface UserGroupUserListsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  systemUser?: SystemUsersType<T> | null;
  userGroup?: UserGroupsType<T> | null;
}
