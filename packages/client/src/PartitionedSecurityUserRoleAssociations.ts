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
import type { PartitionedSecurityUserRoleAssociationsApi } from './PartitionedSecurityUserRoleAssociationsApi';

/**
 * This class represents the entity "PartitionedSecurityUserRoleAssociations" of service "d365_metadata".
 */
export class PartitionedSecurityUserRoleAssociations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PartitionedSecurityUserRoleAssociationsType<T>
{
  /**
   * Technical entity name for PartitionedSecurityUserRoleAssociations.
   */
  static override _entityName = 'PartitionedSecurityUserRoleAssociations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartitionedSecurityUserRoleAssociations entity.
   */
  static _keys = ['UserId', 'SecurityRoleIdentifier'];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Partition Key.
   * @nullable
   */
  declare partitionKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Role Name.
   * @nullable
   */
  declare securityRoleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PartitionedSecurityUserRoleAssociationsApi<T>) {
    super(_entityApi);
  }
}

export interface PartitionedSecurityUserRoleAssociationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  partitionKey?: DeserializedType<T, 'Edm.String'> | null;
  securityRoleName?: DeserializedType<T, 'Edm.String'> | null;
}
