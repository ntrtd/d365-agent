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
import type { SecurityUserRoleOrganizationsApi } from './SecurityUserRoleOrganizationsApi';
import { OmInternalOrganizationType } from './OmInternalOrganizationType';
import { OmOperatingUnitType } from './OmOperatingUnitType';

/**
 * This class represents the entity "SecurityUserRoleOrganizations" of service "d365_metadata".
 */
export class SecurityUserRoleOrganizations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SecurityUserRoleOrganizationsType<T>
{
  /**
   * Technical entity name for SecurityUserRoleOrganizations.
   */
  static override _entityName = 'SecurityUserRoleOrganizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SecurityUserRoleOrganizations entity.
   */
  static _keys = [
    'UserId',
    'SecurityRoleIdentifier',
    'OrganizationType',
    'OrganizationId'
  ];
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Security Role Identifier.
   */
  declare securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Type.
   * @nullable
   */
  declare organizationType?: OmInternalOrganizationType | null;
  /**
   * Organization Id.
   */
  declare organizationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Type.
   * @nullable
   */
  declare operatingUnitType?: OmOperatingUnitType | null;
  /**
   * Hierarchy Type.
   * @nullable
   */
  declare hierarchyType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SecurityUserRoleOrganizationsApi<T>) {
    super(_entityApi);
  }
}

export interface SecurityUserRoleOrganizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  userId: DeserializedType<T, 'Edm.String'>;
  securityRoleIdentifier: DeserializedType<T, 'Edm.String'>;
  organizationType?: OmInternalOrganizationType | null;
  organizationId: DeserializedType<T, 'Edm.String'>;
  operatingUnitType?: OmOperatingUnitType | null;
  hierarchyType?: DeserializedType<T, 'Edm.String'> | null;
}
