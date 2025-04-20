/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetControlConfigurations } from './BudgetControlConfigurations';
import { BudgetControlConfigurationsRequestBuilder } from './BudgetControlConfigurationsRequestBuilder';
import { AccountStructuresApi } from './AccountStructuresApi';
import { LedgersApi } from './LedgersApi';
import { SystemUsersApi } from './SystemUsersApi';
import { BudgetCycleTimeSpansApi } from './BudgetCycleTimeSpansApi';
import { BudgetControlRulesApi } from './BudgetControlRulesApi';
import { BudgetControlDocumentsAndJournalsApi } from './BudgetControlDocumentsAndJournalsApi';
import { BudgetControlMessageLevelsApi } from './BudgetControlMessageLevelsApi';
import { BudgetControlCycleModelsApi } from './BudgetControlCycleModelsApi';
import { BudgetControlDimensionAttributesApi } from './BudgetControlDimensionAttributesApi';
import { BudgetControlGroupsApi } from './BudgetControlGroupsApi';
import { BudgetControlOverBudgetPermissionsApi } from './BudgetControlOverBudgetPermissionsApi';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { NoYes } from './NoYes';
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
export class BudgetControlConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BudgetControlConfigurations<DeSerializersT>, DeSerializersT>
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
  ): BudgetControlConfigurationsApi<DeSerializersT> {
    return new BudgetControlConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationAccountStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_ACCOUNT_STRUCTURE: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationLedgerEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_LEDGER_ENTITY: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationDefaultBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_DEFAULT_BUDGET_MANAGER: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationBudgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_BUDGET_CYCLE_TIME_SPAN: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetCycleTimeSpansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlDocumentsAndJournalsConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_DOCUMENTS_AND_JOURNALS_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlDocumentsAndJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlMessageLevelConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_MESSAGE_LEVEL_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlMessageLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlCycleModelConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CYCLE_MODEL_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlCycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlDimensionAttributeConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_DIMENSION_ATTRIBUTE_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlDimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetOverrideUserGroupOptionConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_OVERRIDE_USER_GROUP_OPTION_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlOverBudgetPermissionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AccountStructuresApi<DeSerializersT>,
      LedgersApi<DeSerializersT>,
      SystemUsersApi<DeSerializersT>,
      BudgetCycleTimeSpansApi<DeSerializersT>,
      BudgetControlRulesApi<DeSerializersT>,
      BudgetControlDocumentsAndJournalsApi<DeSerializersT>,
      BudgetControlMessageLevelsApi<DeSerializersT>,
      BudgetControlCycleModelsApi<DeSerializersT>,
      BudgetControlDimensionAttributesApi<DeSerializersT>,
      BudgetControlGroupsApi<DeSerializersT>,
      BudgetControlOverBudgetPermissionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_CONTROL_CONFIGURATION_ACCOUNT_STRUCTURE: new OneToOneLink(
        'BudgetControlConfigurationAccountStructure',
        this,
        linkedApis[0]
      ),
      BUDGET_CONTROL_CONFIGURATION_LEDGER_ENTITY: new OneToOneLink(
        'BudgetControlConfigurationLedgerEntity',
        this,
        linkedApis[1]
      ),
      BUDGET_CONTROL_CONFIGURATION_DEFAULT_BUDGET_MANAGER: new OneToOneLink(
        'BudgetControlConfigurationDefaultBudgetManager',
        this,
        linkedApis[2]
      ),
      BUDGET_CONTROL_CONFIGURATION_BUDGET_CYCLE_TIME_SPAN: new OneToOneLink(
        'BudgetControlConfigurationBudgetCycleTimeSpan',
        this,
        linkedApis[3]
      ),
      BUDGET_CONTROL_RULE_CONFIGURATION: new OneToManyLink(
        'BudgetControlRuleConfiguration',
        this,
        linkedApis[4]
      ),
      BUDGET_CONTROL_DOCUMENTS_AND_JOURNALS_CONFIGURATION: new OneToManyLink(
        'BudgetControlDocumentsAndJournalsConfiguration',
        this,
        linkedApis[5]
      ),
      BUDGET_CONTROL_MESSAGE_LEVEL_CONFIGURATION: new OneToManyLink(
        'BudgetControlMessageLevelConfiguration',
        this,
        linkedApis[6]
      ),
      BUDGET_CONTROL_CYCLE_MODEL_CONFIGURATION: new OneToManyLink(
        'BudgetControlCycleModelConfiguration',
        this,
        linkedApis[7]
      ),
      BUDGET_CONTROL_DIMENSION_ATTRIBUTE_CONFIGURATION: new OneToManyLink(
        'BudgetControlDimensionAttributeConfiguration',
        this,
        linkedApis[8]
      ),
      BUDGET_CONTROL_GROUP_CONFIGURATION: new OneToManyLink(
        'BudgetControlGroupConfiguration',
        this,
        linkedApis[9]
      ),
      BUDGET_OVERRIDE_USER_GROUP_OPTION_CONFIGURATION: new OneToManyLink(
        'BudgetOverrideUserGroupOptionConfiguration',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = BudgetControlConfigurations;

  requestBuilder(): BudgetControlConfigurationsRequestBuilder<DeSerializersT> {
    return new BudgetControlConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetControlConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BudgetControlConfigurations<DeSerializersT>,
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
    typeof BudgetControlConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetControlConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      BudgetControlConfigurationStatus,
      true,
      true
    >;
    IN_USE_SINCE_DATE_TIME: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUBTRACT_PREENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_BUDGET_THRESHOLD_PERCENT: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR_ID: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUM_TRANSFERS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_CARRYFORWARD_AMOUNTS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_REVISIONS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBTRACT_UNCONFIRMED_ENCUMBRANCE_REDUCTIONS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_PRELIMINARY_BUDGET_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_BUDGET_MANAGER: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_A_MESSAGE_WHEN_EXCEEDING_BUDGET_THRESHOLD: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_DRAFT_TRANSFERS_OUT_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBTRACT_UNPOSTED_ACTUAL_EXPENDITURES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBTRACT_UNCONFIRMED_ENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBTRACT_UNCONFIRMED_PREENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_DRAFT_REVISIONS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_USE_BY: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBTRACT_ACTUAL_EXPENDITURES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_DRAFT_TRANSFERS_IN_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUM_ORIGINAL_BUDGET_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBTRACT_ENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_BUDGET_CONTROL_INTERVAL: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      BudgetInterval,
      true,
      true
    >;
    USE_ONLY_APPORTIONED_AMOUNT_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION: EnumField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_BUDGET_CYCLE_TIME_SPAN_NAME: OrderableEdmTypeField<
      BudgetControlConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationAccountStructure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_ACCOUNT_STRUCTURE: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      AccountStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationLedgerEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_LEDGER_ENTITY: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationDefaultBudgetManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_DEFAULT_BUDGET_MANAGER: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetControlConfigurationBudgetCycleTimeSpan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CONFIGURATION_BUDGET_CYCLE_TIME_SPAN: OneToOneLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetCycleTimeSpansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlRuleConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_RULE_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlDocumentsAndJournalsConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_DOCUMENTS_AND_JOURNALS_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlDocumentsAndJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlMessageLevelConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_MESSAGE_LEVEL_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlMessageLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlCycleModelConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_CYCLE_MODEL_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlCycleModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlDimensionAttributeConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_DIMENSION_ATTRIBUTE_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlDimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetControlGroupConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_CONTROL_GROUP_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetOverrideUserGroupOptionConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_OVERRIDE_USER_GROUP_OPTION_CONFIGURATION: OneToManyLink<
      BudgetControlConfigurations<DeSerializersT>,
      DeSerializersT,
      BudgetControlOverBudgetPermissionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetControlConfigurations<DeSerializers>>;
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
         * Static representation of the {@link inUseSinceDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE_SINCE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'InUseSinceDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subtractPreencumbrancesInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTRACT_PREENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SubtractPreencumbrancesInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultBudgetThresholdPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BUDGET_THRESHOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'DefaultBudgetThresholdPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultBudgetCycleTimeSpanFiscalCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BUDGET_CYCLE_TIME_SPAN_FISCAL_CALENDAR_ID:
          fieldBuilder.buildEdmTypeField(
            'DefaultBudgetCycleTimeSpanFiscalCalendarId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link sumTransfersInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_TRANSFERS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SumTransfersInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link includeCarryforwardAmountsInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_CARRYFORWARD_AMOUNTS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'IncludeCarryforwardAmountsInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sumRevisionsInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_REVISIONS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SumRevisionsInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link subtractUnconfirmedEncumbranceReductionsInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTRACT_UNCONFIRMED_ENCUMBRANCE_REDUCTIONS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SubtractUnconfirmedEncumbranceReductionsInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sumPreliminaryBudgetInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_PRELIMINARY_BUDGET_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SumPreliminaryBudgetInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultBudgetManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BUDGET_MANAGER: fieldBuilder.buildEdmTypeField(
          'DefaultBudgetManager',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayAMessageWhenExceedingBudgetThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_A_MESSAGE_WHEN_EXCEEDING_BUDGET_THRESHOLD:
          fieldBuilder.buildEnumField(
            'DisplayAMessageWhenExceedingBudgetThreshold',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sumDraftTransfersOutInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_DRAFT_TRANSFERS_OUT_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SumDraftTransfersOutInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link accountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'AccountStructure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subtractUnpostedActualExpendituresInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTRACT_UNPOSTED_ACTUAL_EXPENDITURES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SubtractUnpostedActualExpendituresInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link subtractUnconfirmedEncumbrancesInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTRACT_UNCONFIRMED_ENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SubtractUnconfirmedEncumbrancesInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link subtractUnconfirmedPreencumbrancesInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTRACT_UNCONFIRMED_PREENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SubtractUnconfirmedPreencumbrancesInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sumDraftRevisionsInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_DRAFT_REVISIONS_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SumDraftRevisionsInBudgetFundsAvailableCalculation',
            NoYes,
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
         * Static representation of the {@link subtractActualExpendituresInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTRACT_ACTUAL_EXPENDITURES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SubtractActualExpendituresInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sumDraftTransfersInInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_DRAFT_TRANSFERS_IN_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SumDraftTransfersInInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link sumOriginalBudgetInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUM_ORIGINAL_BUDGET_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SumOriginalBudgetInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link subtractEncumbrancesInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTRACT_ENCUMBRANCES_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'SubtractEncumbrancesInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultBudgetControlInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BUDGET_CONTROL_INTERVAL: fieldBuilder.buildEnumField(
          'DefaultBudgetControlInterval',
          BudgetInterval,
          true
        ),
        /**
         * Static representation of the {@link useOnlyApportionedAmountInBudgetFundsAvailableCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ONLY_APPORTIONED_AMOUNT_IN_BUDGET_FUNDS_AVAILABLE_CALCULATION:
          fieldBuilder.buildEnumField(
            'UseOnlyApportionedAmountInBudgetFundsAvailableCalculation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultBudgetCycleTimeSpanName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BUDGET_CYCLE_TIME_SPAN_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultBudgetCycleTimeSpanName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetControlConfigurations)
      };
    }

    return this._schema;
  }
}
