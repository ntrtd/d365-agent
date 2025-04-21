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
import type { BudgetControlGroupOverBudgetPermissionsApi } from './BudgetControlGroupOverBudgetPermissionsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetCheckOverbudgetOption } from './BudgetCheckOverbudgetOption';
import { UserGroups, UserGroupsType } from './UserGroups';
import {
  BudgetControlGroups,
  BudgetControlGroupsType
} from './BudgetControlGroups';

/**
 * This class represents the entity "BudgetControlGroupOverBudgetPermissions" of service "d365_metadata".
 */
export class BudgetControlGroupOverBudgetPermissions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlGroupOverBudgetPermissionsType<T>
{
  /**
   * Technical entity name for BudgetControlGroupOverBudgetPermissions.
   */
  static override _entityName = 'BudgetControlGroupOverBudgetPermissions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlGroupOverBudgetPermissions entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'Status',
    'BudgetGroupName',
    'UserGroupId'
  ];
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
   * Budget Group Name.
   */
  declare budgetGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * User Group Id.
   */
  declare userGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Override Overbudget Option.
   * @nullable
   */
  declare overrideOverbudgetOption?: BudgetCheckOverbudgetOption | null;
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
   * One-to-one navigation property to the {@link UserGroups} entity.
   */
  declare systemUserGroups?: UserGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetControlGroups} entity.
   */
  declare budgetControlGroups?: BudgetControlGroups<T> | null;

  constructor(_entityApi: BudgetControlGroupOverBudgetPermissionsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlGroupOverBudgetPermissionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  budgetGroupName: DeserializedType<T, 'Edm.String'>;
  userGroupId: DeserializedType<T, 'Edm.String'>;
  overrideOverbudgetOption?: BudgetCheckOverbudgetOption | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  systemUserGroups?: UserGroupsType<T> | null;
  budgetControlGroups?: BudgetControlGroupsType<T> | null;
}
