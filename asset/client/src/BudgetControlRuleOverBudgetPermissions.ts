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
import type { BudgetControlRuleOverBudgetPermissionsApi } from './BudgetControlRuleOverBudgetPermissionsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetGroupCheckOverbudgetOption } from './BudgetGroupCheckOverbudgetOption';
import { BudgetCheckOverbudgetOption } from './BudgetCheckOverbudgetOption';
import {
  BudgetControlRules,
  BudgetControlRulesType
} from './BudgetControlRules';
import { UserGroups, UserGroupsType } from './UserGroups';

/**
 * This class represents the entity "BudgetControlRuleOverBudgetPermissions" of service "d365_metadata".
 */
export class BudgetControlRuleOverBudgetPermissions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetControlRuleOverBudgetPermissionsType<T>
{
  /**
   * Technical entity name for BudgetControlRuleOverBudgetPermissions.
   */
  static override _entityName = 'BudgetControlRuleOverBudgetPermissions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetControlRuleOverBudgetPermissions entity.
   */
  static _keys = [
    'dataAreaId',
    'LegalEntityId',
    'Status',
    'RuleName',
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
   * Rule Name.
   */
  declare ruleName: DeserializedType<T, 'Edm.String'>;
  /**
   * User Group Id.
   */
  declare userGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Overbudget Budget Group Check Option.
   * @nullable
   */
  declare overbudgetBudgetGroupCheckOption?: BudgetGroupCheckOverbudgetOption | null;
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
   * One-to-one navigation property to the {@link BudgetControlRules} entity.
   */
  declare budgetControlRules?: BudgetControlRules<T> | null;
  /**
   * One-to-one navigation property to the {@link UserGroups} entity.
   */
  declare systemUserGroups?: UserGroups<T> | null;

  constructor(_entityApi: BudgetControlRuleOverBudgetPermissionsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetControlRuleOverBudgetPermissionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  status?: BudgetControlConfigurationStatus | null;
  ruleName: DeserializedType<T, 'Edm.String'>;
  userGroupId: DeserializedType<T, 'Edm.String'>;
  overbudgetBudgetGroupCheckOption?: BudgetGroupCheckOverbudgetOption | null;
  overrideOverbudgetOption?: BudgetCheckOverbudgetOption | null;
  inUseBy?: DeserializedType<T, 'Edm.String'> | null;
  userGroupName?: DeserializedType<T, 'Edm.String'> | null;
  budgetControlRules?: BudgetControlRulesType<T> | null;
  systemUserGroups?: UserGroupsType<T> | null;
}
