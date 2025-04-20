/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlRules } from './BudgetControlRules';
import { BudgetControlRulesRequestBuilder } from './BudgetControlRulesRequestBuilder';
import { SystemUsersApi } from './SystemUsersApi';
import { BudgetControlConfigurationsApi } from './BudgetControlConfigurationsApi';
import { BudgetCycleTimeSpansApi } from './BudgetCycleTimeSpansApi';
import { BudgetControlRuleCriteriaApi } from './BudgetControlRuleCriteriaApi';
import { BudgetControlRuleOverBudgetPermissionsApi } from './BudgetControlRuleOverBudgetPermissionsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetInterval } from './BudgetInterval';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetControlRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetControlRules<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlRulesApi<DeSerializersT> {
    return new BudgetControlRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetManagers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MANAGERS: OneToOneLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCycleTimeSpans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLE_TIME_SPANS: OneToOneLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetCycleTimeSpansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleCriterionRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_CRITERION_RULE: OneToManyLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetControlRuleCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleOverBudgetPermissionsBudgetControlRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_OVER_BUDGET_PERMISSIONS_BUDGET_CONTROL_RULE: OneToManyLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetControlRuleOverBudgetPermissionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SystemUsersApi<DeSerializersT>,
      BudgetControlConfigurationsApi<DeSerializersT>,
      BudgetCycleTimeSpansApi<DeSerializersT>,
      BudgetControlRuleCriteriaApi<DeSerializersT>,
      BudgetControlRuleOverBudgetPermissionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_MANAGERS: new OneToOneLink('BudgetManagers', this, linkedApis[0]),
      BUDGET_CONTROL_CONFIGURATIONS: new OneToOneLink(
        'BudgetControlConfigurations',
        this,
        linkedApis[1]
      ),
      BUDGET_CYCLE_TIME_SPANS: new OneToOneLink(
        'BudgetCycleTimeSpans',
        this,
        linkedApis[2]
      ),
      BUDGET_CONTROL_RULE_CRITERION_RULE: new OneToManyLink(
        'BudgetControlRuleCriterionRule',
        this,
        linkedApis[3]
      ),
      BUDGET_CONTROL_RULE_OVER_BUDGET_PERMISSIONS_BUDGET_CONTROL_RULE:
        new OneToManyLink(
          'BudgetControlRuleOverBudgetPermissionsBudgetControlRule',
          this,
          linkedApis[4]
        )
    };
    return this;
  }

  entityConstructor = BudgetControlRules;

  requestBuilder(): BudgetControlRulesRequestBuilder<DeSerializersT> {
    return new BudgetControlRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetControlRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlRules<DeSerializersT>,
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
    typeof BudgetControlRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUDGET_CONTROL_INTERVAL: EnumField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      BudgetInterval,
      true,
      true
    >;
    BUDGET_MANAGER: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE_TIME_SPAN_NAME: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR_ID: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_THRESHOLD_PERCENT: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetManagers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_MANAGERS: OneToOneLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATIONS: OneToOneLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetControlConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetCycleTimeSpans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CYCLE_TIME_SPANS: OneToOneLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetCycleTimeSpansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleCriterionRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_CRITERION_RULE: OneToManyLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetControlRuleCriteriaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleOverBudgetPermissionsBudgetControlRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_OVER_BUDGET_PERMISSIONS_BUDGET_CONTROL_RULE: OneToManyLink<
      BudgetControlRules<DeSerializersT>,
      DeSerializersT,
      BudgetControlRuleOverBudgetPermissionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlRules<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link budgetControlInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CONTROL_INTERVAL: fieldBuilder.buildEnumField(
          'BudgetControlInterval',
          BudgetInterval,
          true
        ),
        /**
         * Static representation of the {@link budgetManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_MANAGER: fieldBuilder.buildEdmTypeField(
          'BudgetManager',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCycleTimeSpanName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN_NAME: fieldBuilder.buildEdmTypeField(
          'BudgetCycleTimeSpanName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetCycleTimeSpanFiscalCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR_ID:
          fieldBuilder.buildEdmTypeField(
            'BudgetCycleTimeSpanFiscalCalendarId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link budgetThresholdPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_THRESHOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'BudgetThresholdPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlRules)
      };
    }

    return this._schema;
  }
}
