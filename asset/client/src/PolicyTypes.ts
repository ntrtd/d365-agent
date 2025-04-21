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
import type { PolicyTypesApi } from './PolicyTypesApi';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
import { NoYes } from './NoYes';
import { HierarchyPurpose } from './HierarchyPurpose';

/**
 * This class represents the entity "PolicyTypes" of service "d365_metadata".
 */
export class PolicyTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyTypesType<T>
{
  /**
   * Technical entity name for PolicyTypes.
   */
  static override _entityName = 'PolicyTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyTypes entity.
   */
  static _keys = ['PolicyType'];
  /**
   * Policy Type.
   * @nullable
   */
  declare policyType?: SysPolicyTypeEnum | null;
  /**
   * Policy Name.
   * @nullable
   */
  declare policyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Policy Read Only.
   * @nullable
   */
  declare isPolicyReadOnly?: NoYes | null;
  /**
   * Purpose.
   * @nullable
   */
  declare purpose?: HierarchyPurpose | null;
  /**
   * Drop Dialog.
   * @nullable
   */
  declare dropDialog?: NoYes | null;
  /**
   * Is Reassign Organization Supported.
   * @nullable
   */
  declare isReassignOrganizationSupported?: NoYes | null;

  constructor(_entityApi: PolicyTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyType?: SysPolicyTypeEnum | null;
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  isPolicyReadOnly?: NoYes | null;
  purpose?: HierarchyPurpose | null;
  dropDialog?: NoYes | null;
  isReassignOrganizationSupported?: NoYes | null;
}
