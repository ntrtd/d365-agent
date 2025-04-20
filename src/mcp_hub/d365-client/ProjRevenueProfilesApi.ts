/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjRevenueProfiles } from './ProjRevenueProfiles';
import { ProjRevenueProfilesRequestBuilder } from './ProjRevenueProfilesRequestBuilder';
import { NoYes } from './NoYes';
import { ProjLedgerStatusOnAcc } from './ProjLedgerStatusOnAcc';
import { ProjLedgerStatusCost } from './ProjLedgerStatusCost';
import { ProjLedgerStatusItem } from './ProjLedgerStatusItem';
import { ProjCompletePrincip } from './ProjCompletePrincip';
import { ProjSalesPriceMatchingPrincip } from './ProjSalesPriceMatchingPrincip';
import { ProjMatchingPrincip } from './ProjMatchingPrincip';
import { ProjContractBillingMethod } from './ProjContractBillingMethod';
import { ProjLedgerStatus } from './ProjLedgerStatus';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ProjRevenueProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjRevenueProfiles<DeSerializersT>, DeSerializersT>
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
  ): ProjRevenueProfilesApi<DeSerializersT> {
    return new ProjRevenueProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjRevenueProfiles;

  requestBuilder(): ProjRevenueProfilesRequestBuilder<DeSerializersT> {
    return new ProjRevenueProfilesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjRevenueProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjRevenueProfiles<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjRevenueProfiles<DeSerializersT>,
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
    typeof ProjRevenueProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjRevenueProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARE_LOSSES_FORESEEABLE: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_ACCOUNT_INVOICING_METHOD: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatusOnAcc,
      true,
      true
    >;
    IS_REVENUE_ITEM_ACCRUED: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROFIT_PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REVENUE_EXPENSE_ACCRUED: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REVENUE_FEE_ACCRUED: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_PERIOD_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPENSE_COST_POSTING_METHOD: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatusCost,
      true,
      true
    >;
    COST_TEMPLATE_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_COST_POSTING_METHOD: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatusItem,
      true,
      true
    >;
    REVENUE_RECOGNITION_ACCOUNTING_RULE: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjCompletePrincip,
      true,
      true
    >;
    SALES_VALUE_PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE_RECOGNITION_CALCULATION_METHOD: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjSalesPriceMatchingPrincip,
      true,
      true
    >;
    REVENUE_RECOGNITION_MATCHING_PRINCIPLE: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjMatchingPrincip,
      true,
      true
    >;
    PROFILE_NAME: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUED_LOSS_CATEGORY_ID: OrderableEdmTypeField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CONTRACT_BILLING_METHOD: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjContractBillingMethod,
      true,
      true
    >;
    IS_REVENUE_HOUR_ACCRUED: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HOUR_COST_POSTING_METHOD: EnumField<
      ProjRevenueProfiles<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjRevenueProfiles<DeSerializers>>;
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
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link areLossesForeseeable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_LOSSES_FORESEEABLE: fieldBuilder.buildEnumField(
          'AreLossesForeseeable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productionProjectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProductionProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onAccountInvoicingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_ACCOUNT_INVOICING_METHOD: fieldBuilder.buildEnumField(
          'OnAccountInvoicingMethod',
          ProjLedgerStatusOnAcc,
          true
        ),
        /**
         * Static representation of the {@link isRevenueItemAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVENUE_ITEM_ACCRUED: fieldBuilder.buildEnumField(
          'IsRevenueItemAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link profitProjectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProfitProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRevenueExpenseAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVENUE_EXPENSE_ACCRUED: fieldBuilder.buildEnumField(
          'IsRevenueExpenseAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isRevenueFeeAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVENUE_FEE_ACCRUED: fieldBuilder.buildEnumField(
          'IsRevenueFeeAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'ProjectPeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expenseCostPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_COST_POSTING_METHOD: fieldBuilder.buildEnumField(
          'ExpenseCostPostingMethod',
          ProjLedgerStatusCost,
          true
        ),
        /**
         * Static representation of the {@link costTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'CostTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCostPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_COST_POSTING_METHOD: fieldBuilder.buildEnumField(
          'ItemCostPostingMethod',
          ProjLedgerStatusItem,
          true
        ),
        /**
         * Static representation of the {@link revenueRecognitionAccountingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_RECOGNITION_ACCOUNTING_RULE: fieldBuilder.buildEnumField(
          'RevenueRecognitionAccountingRule',
          ProjCompletePrincip,
          true
        ),
        /**
         * Static representation of the {@link salesValueProjectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_VALUE_PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'SalesValueProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenueRecognitionCalculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_RECOGNITION_CALCULATION_METHOD: fieldBuilder.buildEnumField(
          'RevenueRecognitionCalculationMethod',
          ProjSalesPriceMatchingPrincip,
          true
        ),
        /**
         * Static representation of the {@link revenueRecognitionMatchingPrinciple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE_RECOGNITION_MATCHING_PRINCIPLE: fieldBuilder.buildEnumField(
          'RevenueRecognitionMatchingPrinciple',
          ProjMatchingPrincip,
          true
        ),
        /**
         * Static representation of the {@link profileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_NAME: fieldBuilder.buildEdmTypeField(
          'ProfileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accruedLossCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUED_LOSS_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'AccruedLossCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectContractBillingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_BILLING_METHOD: fieldBuilder.buildEnumField(
          'ProjectContractBillingMethod',
          ProjContractBillingMethod,
          true
        ),
        /**
         * Static representation of the {@link isRevenueHourAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVENUE_HOUR_ACCRUED: fieldBuilder.buildEnumField(
          'IsRevenueHourAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link hourCostPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_COST_POSTING_METHOD: fieldBuilder.buildEnumField(
          'HourCostPostingMethod',
          ProjLedgerStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjRevenueProfiles)
      };
    }

    return this._schema;
  }
}
