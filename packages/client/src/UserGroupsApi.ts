/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserGroups } from './UserGroups';
import { UserGroupsRequestBuilder } from './UserGroupsRequestBuilder';
import { UserGroupUserListsApi } from './UserGroupUserListsApi';
import { BudgetControlMessageLevelsApi } from './BudgetControlMessageLevelsApi';
import { BudgetControlGroupOverBudgetPermissionsApi } from './BudgetControlGroupOverBudgetPermissionsApi';
import { BudgetControlOverBudgetPermissionsApi } from './BudgetControlOverBudgetPermissionsApi';
import { LedgerAccountAliasesApi } from './LedgerAccountAliasesApi';
import { BudgetControlRuleOverBudgetPermissionsApi } from './BudgetControlRuleOverBudgetPermissionsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class UserGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserGroups<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): UserGroupsApi<DeSerializersT> {
    return new UserGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link userGroupUserList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP_USER_LIST: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      UserGroupUserListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlMessageLevelEntityRoleSystemUserGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_MESSAGE_LEVEL_ENTITY_ROLE_SYSTEM_USER_GROUP_ENTITY: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlMessageLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupOverBudgetPermissionsSystemUserGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_OVER_BUDGET_PERMISSIONS_SYSTEM_USER_GROUP: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupOverBudgetPermissionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlOverBudgetPermissionsSystemUserGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_OVER_BUDGET_PERMISSIONS_SYSTEM_USER_GROUP: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlOverBudgetPermissionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleOverBudgetPermisionsSystemUserGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_OVER_BUDGET_PERMISIONS_SYSTEM_USER_GROUP: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlRuleOverBudgetPermissionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UserGroupUserListsApi<DeSerializersT>,
      BudgetControlMessageLevelsApi<DeSerializersT>,
      BudgetControlGroupOverBudgetPermissionsApi<DeSerializersT>,
      BudgetControlOverBudgetPermissionsApi<DeSerializersT>,
      LedgerAccountAliasesApi<DeSerializersT>,
      BudgetControlRuleOverBudgetPermissionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      USER_GROUP_USER_LIST: new OneToManyLink(
        'UserGroupUserList',
        this,
        linkedApis[0]
      ),
      BUDGET_CONTROL_MESSAGE_LEVEL_ENTITY_ROLE_SYSTEM_USER_GROUP_ENTITY:
        new OneToManyLink(
          'BudgetControlMessageLevelEntity_Role_SystemUserGroupEntity',
          this,
          linkedApis[1]
        ),
      BUDGET_CONTROL_GROUP_OVER_BUDGET_PERMISSIONS_SYSTEM_USER_GROUP:
        new OneToManyLink(
          'BudgetControlGroupOverBudgetPermissionsSystemUserGroup',
          this,
          linkedApis[2]
        ),
      BUDGET_CONTROL_OVER_BUDGET_PERMISSIONS_SYSTEM_USER_GROUP:
        new OneToManyLink(
          'BudgetControlOverBudgetPermissionsSystemUserGroup',
          this,
          linkedApis[3]
        ),
      LEDGER_ACCOUNT_ALIAS: new OneToManyLink(
        'LedgerAccountAlias',
        this,
        linkedApis[4]
      ),
      BUDGET_CONTROL_RULE_OVER_BUDGET_PERMISIONS_SYSTEM_USER_GROUP:
        new OneToManyLink(
          'BudgetControlRuleOverBudgetPermisionsSystemUserGroup',
          this,
          linkedApis[5]
        )
    };
    return this;
  }

  entityConstructor = UserGroups;

  requestBuilder(): UserGroupsRequestBuilder<DeSerializersT> {
    return new UserGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(UserGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_ID: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      UserGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link userGroupUserList} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP_USER_LIST: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      UserGroupUserListsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlMessageLevelEntityRoleSystemUserGroupEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_MESSAGE_LEVEL_ENTITY_ROLE_SYSTEM_USER_GROUP_ENTITY: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlMessageLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupOverBudgetPermissionsSystemUserGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_OVER_BUDGET_PERMISSIONS_SYSTEM_USER_GROUP: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupOverBudgetPermissionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlOverBudgetPermissionsSystemUserGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_OVER_BUDGET_PERMISSIONS_SYSTEM_USER_GROUP: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlOverBudgetPermissionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ledgerAccountAlias} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEDGER_ACCOUNT_ALIAS: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      LedgerAccountAliasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleOverBudgetPermisionsSystemUserGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_OVER_BUDGET_PERMISIONS_SYSTEM_USER_GROUP: OneToManyLink<
      UserGroups<DeSerializersT>,
      DeSerializersT,
      BudgetControlRuleOverBudgetPermissionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserGroups)
      };
    }

    return this._schema;
  }
}
