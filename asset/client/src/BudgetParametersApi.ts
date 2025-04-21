/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetParameters } from './BudgetParameters';
import { BudgetParametersRequestBuilder } from './BudgetParametersRequestBuilder';
import { PeriodAllocationCategoriesApi } from './PeriodAllocationCategoriesApi';
import { JournalNamesApi } from './JournalNamesApi';
import { NoYes } from './NoYes';
import { BudgetCheckRevenueBalanceInterval } from './BudgetCheckRevenueBalanceInterval';
import { BudgetCheckRevenueBalanceOption } from './BudgetCheckRevenueBalanceOption';
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
export class BudgetParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetParameters<DeSerializersT>, DeSerializersT>
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
  ): BudgetParametersApi<DeSerializersT> {
    return new BudgetParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link periodAllocationCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_ALLOCATION_CATEGORY: OneToOneLink<
      BudgetParameters<DeSerializersT>,
      DeSerializersT,
      PeriodAllocationCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetParametersJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PARAMETERS_JOURNAL_NAME: OneToOneLink<
      BudgetParameters<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PeriodAllocationCategoriesApi<DeSerializersT>,
      JournalNamesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERIOD_ALLOCATION_CATEGORY: new OneToOneLink(
        'PeriodAllocationCategory',
        this,
        linkedApis[0]
      ),
      BUDGET_PARAMETERS_JOURNAL_NAME: new OneToOneLink(
        'BudgetParametersJournalName',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BudgetParameters;

  requestBuilder(): BudgetParametersRequestBuilder<DeSerializersT> {
    return new BudgetParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_RULES_FOR_BUDGET_TRANSFERS: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_FIXED_ASSETS: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TIME_PERIOD_FOR_BUDGET_BALANCES: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      BudgetCheckRevenueBalanceInterval,
      true,
      true
    >;
    DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_PROJECT: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_SUPPLY_FORECAST: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_FRENCH_PUBLIC_SECTOR_ACCOUNTING_RULES: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOCATION_KEY: OrderableEdmTypeField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_FIXED_ASSETS_RU: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_DEMAND_FORECAST: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DERIVE_ACCOUNT_STRUCTURE_FROM_COMBINATION: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_GENERAL_BUDGET_RESERVATION_PUBLIC_SECTOR_ACCOUNTING_RULES: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_REVENUE_BUDGET_FOR_ZERO_BUDGET_BALANCES: EnumField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      BudgetCheckRevenueBalanceOption,
      true,
      true
    >;
    BUDGET_JOURNAL: OrderableEdmTypeField<
      BudgetParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link periodAllocationCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERIOD_ALLOCATION_CATEGORY: OneToOneLink<
      BudgetParameters<DeSerializersT>,
      DeSerializersT,
      PeriodAllocationCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetParametersJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PARAMETERS_JOURNAL_NAME: OneToOneLink<
      BudgetParameters<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetParameters<DeSerializers>>;
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
         * Static representation of the {@link useRulesForBudgetTransfers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_RULES_FOR_BUDGET_TRANSFERS: fieldBuilder.buildEnumField(
          'UseRulesForBudgetTransfers',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link doCompleteRegisterEntriesOnTransferFromFixedAssets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_FIXED_ASSETS:
          fieldBuilder.buildEnumField(
            'DoCompleteRegisterEntriesOnTransferFromFixedAssets',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link timePeriodForBudgetBalances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_PERIOD_FOR_BUDGET_BALANCES: fieldBuilder.buildEnumField(
          'TimePeriodForBudgetBalances',
          BudgetCheckRevenueBalanceInterval,
          true
        ),
        /**
         * Static representation of the {@link doCompleteRegisterEntriesOnTransferFromProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_PROJECT:
          fieldBuilder.buildEnumField(
            'DoCompleteRegisterEntriesOnTransferFromProject',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link doCompleteRegisterEntriesOnTransferFromSupplyForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_SUPPLY_FORECAST:
          fieldBuilder.buildEnumField(
            'DoCompleteRegisterEntriesOnTransferFromSupplyForecast',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link useFrenchPublicSectorAccountingRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FRENCH_PUBLIC_SECTOR_ACCOUNTING_RULES: fieldBuilder.buildEnumField(
          'UseFrenchPublicSectorAccountingRules',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allocationKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_KEY: fieldBuilder.buildEdmTypeField(
          'AllocationKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link doCompleteRegisterEntriesOnTransferFromFixedAssetsRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_FIXED_ASSETS_RU:
          fieldBuilder.buildEnumField(
            'DoCompleteRegisterEntriesOnTransferFromFixedAssetsRU',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link doCompleteRegisterEntriesOnTransferFromDemandForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DO_COMPLETE_REGISTER_ENTRIES_ON_TRANSFER_FROM_DEMAND_FORECAST:
          fieldBuilder.buildEnumField(
            'DoCompleteRegisterEntriesOnTransferFromDemandForecast',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link deriveAccountStructureFromCombination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVE_ACCOUNT_STRUCTURE_FROM_COMBINATION: fieldBuilder.buildEnumField(
          'DeriveAccountStructureFromCombination',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useGeneralBudgetReservationPublicSectorAccountingRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_GENERAL_BUDGET_RESERVATION_PUBLIC_SECTOR_ACCOUNTING_RULES:
          fieldBuilder.buildEnumField(
            'UseGeneralBudgetReservationPublicSectorAccountingRules',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link checkRevenueBudgetForZeroBudgetBalances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_REVENUE_BUDGET_FOR_ZERO_BUDGET_BALANCES:
          fieldBuilder.buildEnumField(
            'CheckRevenueBudgetForZeroBudgetBalances',
            BudgetCheckRevenueBalanceOption,
            true
          ),
        /**
         * Static representation of the {@link budgetJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_JOURNAL: fieldBuilder.buildEdmTypeField(
          'BudgetJournal',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetParameters)
      };
    }

    return this._schema;
  }
}
