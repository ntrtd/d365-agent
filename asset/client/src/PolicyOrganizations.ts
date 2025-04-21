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
import type { PolicyOrganizationsApi } from './PolicyOrganizationsApi';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';

/**
 * This class represents the entity "PolicyOrganizations" of service "d365_metadata".
 */
export class PolicyOrganizations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyOrganizationsType<T>
{
  /**
   * Technical entity name for PolicyOrganizations.
   */
  static override _entityName = 'PolicyOrganizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyOrganizations entity.
   */
  static _keys = [
    'PolicyName',
    'PolicyType',
    'PartyNumber',
    'HierarchyName',
    'ValidFrom'
  ];
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Type.
   * @nullable
   */
  declare policyType?: SysPolicyTypeEnum | null;
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Hierarchy Name.
   */
  declare hierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: PolicyOrganizationsApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyOrganizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyName: DeserializedType<T, 'Edm.String'>;
  policyType?: SysPolicyTypeEnum | null;
  partyNumber: DeserializedType<T, 'Edm.String'>;
  hierarchyName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
