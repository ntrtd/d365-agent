/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlRuleOverBudgetPermissions } from './BudgetControlRuleOverBudgetPermissions';
import { BudgetControlRuleOverBudgetPermissionsRequestBuilder } from './BudgetControlRuleOverBudgetPermissionsRequestBuilder';
import { BudgetControlRulesApi } from './BudgetControlRulesApi';
import { UserGroupsApi } from './UserGroupsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetGroupCheckOverbudgetOption } from './BudgetGroupCheckOverbudgetOption';
import { BudgetCheckOverbudgetOption } from './BudgetCheckOverbudgetOption';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetControlRuleOverBudgetPermissionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
      DeSerializersT
    >
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
  ): BudgetControlRuleOverBudgetPermissionsApi<DeSerializersT> {
    return new BudgetControlRuleOverBudgetPermissionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULES: OneToOneLink<
      BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUserGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER_GROUPS: OneToOneLink<
      BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BudgetControlRulesApi<DeSerializersT>,
      UserGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_RULES: new OneToOneLink(
        'BudgetControlRules',
        this,
        linkedApis[0]
      ),
      SYSTEM_USER_GROUPS: new OneToOneLink(
        'SystemUserGroups',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlRuleOverBudgetPermissions;

  requestBuilder(): BudgetControlRuleOverBudgetPermissionsRequestBuilder<DeSerializersT> {
    return new BudgetControlRuleOverBudgetPermissionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BudgetControlRuleOverBudgetPermissions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlRuleOverBudgetPermissions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    RULE_NAME: OrderableEdmTypeField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_GROUP_ID: OrderableEdmTypeField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OVERBUDGET_BUDGET_GROUP_CHECK_OPTION: EnumField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      BudgetGroupCheckOverbudgetOption,
      true,
      true
    >;
    OVERRIDE_OVERBUDGET_OPTION: EnumField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      BudgetCheckOverbudgetOption,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_GROUP_NAME: OrderableEdmTypeField<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULES: OneToOneLink<
      BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUserGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER_GROUPS: OneToOneLink<
      BudgetControlRuleOverBudgetPermissions<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      BudgetControlRuleOverBudgetPermissions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BudgetControlConfigurationStatus,
          true
        ),
        /**
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'RuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link userGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'UserGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link overbudgetBudgetGroupCheckOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERBUDGET_BUDGET_GROUP_CHECK_OPTION: fieldBuilder.buildEnumField(
          'OverbudgetBudgetGroupCheckOption',
          BudgetGroupCheckOverbudgetOption,
          true
        ),
        /**
         * Static representation of the {@link overrideOverbudgetOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_OVERBUDGET_OPTION: fieldBuilder.buildEnumField(
          'OverrideOverbudgetOption',
          BudgetCheckOverbudgetOption,
          true
        ),
        /**
         * Static representation of the {@link inUseBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_BY: fieldBuilder.buildEdmTypeField(
          'InUseBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'UserGroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlRuleOverBudgetPermissions)
      };
    }

    return this._schema;
  }
}
