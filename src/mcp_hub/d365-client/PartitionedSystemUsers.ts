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
import type { PartitionedSystemUsersApi } from './PartitionedSystemUsersApi';
import { UserAccountType } from './UserAccountType';

/**
 * This class represents the entity "PartitionedSystemUsers" of service "d365_metadata".
 */
export class PartitionedSystemUsers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PartitionedSystemUsersType<T>
{
  /**
   * Technical entity name for PartitionedSystemUsers.
   */
  static override _entityName = 'PartitionedSystemUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartitionedSystemUsers entity.
   */
  static _keys = ['UserID'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Partition.
   */
  declare defaultPartition: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * User Info Language.
   * @nullable
   */
  declare userInfoLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Name.
   * @nullable
   */
  declare userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partition Key.
   * @nullable
   */
  declare partitionKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Network Domain.
   * @nullable
   */
  declare networkDomain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Name.
   * @nullable
   */
  declare personName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alias.
   * @nullable
   */
  declare alias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: UserAccountType | null;
  /**
   * Helplanguage.
   * @nullable
   */
  declare helplanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enabled.
   */
  declare enabled: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: PartitionedSystemUsersApi<T>) {
    super(_entityApi);
  }
}

export interface PartitionedSystemUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  defaultPartition: DeserializedType<T, 'Edm.Boolean'>;
  userInfoLanguage?: DeserializedType<T, 'Edm.String'> | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  partitionKey?: DeserializedType<T, 'Edm.String'> | null;
  networkDomain?: DeserializedType<T, 'Edm.String'> | null;
  personName?: DeserializedType<T, 'Edm.String'> | null;
  alias?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: UserAccountType | null;
  helplanguage?: DeserializedType<T, 'Edm.String'> | null;
  enabled: DeserializedType<T, 'Edm.Boolean'>;
}
