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
import type { UserGroupsApi } from './UserGroupsApi';
import {
  UserGroupUserLists,
  UserGroupUserListsType
} from './UserGroupUserLists';
import {
  BudgetControlMessageLevels,
  BudgetControlMessageLevelsType
} from './BudgetControlMessageLevels';
import {
  BudgetControlGroupOverBudgetPermissions,
  BudgetControlGroupOverBudgetPermissionsType
} from './BudgetControlGroupOverBudgetPermissions';
import {
  BudgetControlOverBudgetPermissions,
  BudgetControlOverBudgetPermissionsType
} from './BudgetControlOverBudgetPermissions';
import {
  LedgerAccountAliases,
  LedgerAccountAliasesType
} from './LedgerAccountAliases';
import {
  BudgetControlRuleOverBudgetPermissions,
  BudgetControlRuleOverBudgetPermissionsType
} from './BudgetControlRuleOverBudgetPermissions';

/**
 * This class represents the entity "UserGroups" of service "d365_metadata".
 */
export class UserGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserGroupsType<T>
{
  /**
   * Technical entity name for UserGroups.
   */
  static override _entityName = 'UserGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UserGroups entity.
   */
  static _keys = ['GroupId'];
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link UserGroupUserLists} entity.
   */
  declare userGroupUserList: UserGroupUserLists<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlMessageLevels} entity.
   */
  declare budgetControlMessageLevelEntityRoleSystemUserGroupEntity: BudgetControlMessageLevels<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlGroupOverBudgetPermissions} entity.
   */
  declare budgetControlGroupOverBudgetPermissionsSystemUserGroup: BudgetControlGroupOverBudgetPermissions<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlOverBudgetPermissions} entity.
   */
  declare budgetControlOverBudgetPermissionsSystemUserGroup: BudgetControlOverBudgetPermissions<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerAccountAliases} entity.
   */
  declare ledgerAccountAlias: LedgerAccountAliases<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetControlRuleOverBudgetPermissions} entity.
   */
  declare budgetControlRuleOverBudgetPermisionsSystemUserGroup: BudgetControlRuleOverBudgetPermissions<T>[];

  constructor(_entityApi: UserGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface UserGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  groupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  userGroupUserList: UserGroupUserListsType<T>[];
  budgetControlMessageLevelEntityRoleSystemUserGroupEntity: BudgetControlMessageLevelsType<T>[];
  budgetControlGroupOverBudgetPermissionsSystemUserGroup: BudgetControlGroupOverBudgetPermissionsType<T>[];
  budgetControlOverBudgetPermissionsSystemUserGroup: BudgetControlOverBudgetPermissionsType<T>[];
  ledgerAccountAlias: LedgerAccountAliasesType<T>[];
  budgetControlRuleOverBudgetPermisionsSystemUserGroup: BudgetControlRuleOverBudgetPermissionsType<T>[];
}
