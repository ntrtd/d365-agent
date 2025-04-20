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
import type { BudgetControlOverBudgetPermissionsApi } from './BudgetControlOverBudgetPermissionsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetCheckOverbudgetOption } from './BudgetCheckOverbudgetOption';
import {
  BudgetControlConfigurations,
  BudgetControlConfigurationsType
} from './BudgetControlConfigurations';
import { UserGroups, UserGroupsType } from './UserGroups';

/**
 * This class represents the entity "BudgetControlOverBudgetPermissions" of service "d365_metadata".
 */
export class BudgetControlOverBudgetPermissions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlOverBudgetPermissionsType<T>
{
  /**
   * Technical entity name for BudgetControlOverBudgetPermissions.
   */
  static override _entityName = 'BudgetControlOverBudgetPermissions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlOverBudgetPermissions entity.
   */
  static _keys = ['dataAreaId', 'LegalEntityId', 'Status', 'UserGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: BudgetControlConfigurationStatus | null;
  /**
   * User Group Id.
   */
  declare userGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Over Budget Option.
   * @nullable
   */
  declare overBudgetOption?: BudgetCheckOverbudgetOption | null;
  /**
   * In Use By.
   * @nullable
   */
  declare inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Group Name.
   * @nullable
   */
  declare userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlConfigurations} entity.
   */
  declare budgetControlConfigurationOverrideUserGroupOption?: BudgetControlConfigurations<T> | null;
  /**
   * One-to-one navigation property to the {@link UserGroups} entity.
   */
  declare systemUserGroups?: UserGroups<T> | null;

  constructor(_entityApi: BudgetControlOverBudgetPermissionsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlOverBudgetPermissionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  userGroupId: DeserializedType<T, 'Edm.String'>;
  overBudgetOption?: BudgetCheckOverbudgetOption | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlConfigurationOverrideUserGroupOption?: BudgetControlConfigurationsType<T> | null;
  systemUserGroups?: UserGroupsType<T> | null;
}
