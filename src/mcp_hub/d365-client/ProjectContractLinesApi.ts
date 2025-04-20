/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectContractLines } from './ProjectContractLines';
import { ProjectContractLinesRequestBuilder } from './ProjectContractLinesRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { PsaProjAmountVsUnit } from './PsaProjAmountVsUnit';
import { ProjContractBillingMethod } from './ProjContractBillingMethod';
import { NoYes } from './NoYes';
import { InvoiceScheduleType } from './InvoiceScheduleType';
import { PsaContractLineType } from './PsaContractLineType';
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
export class ProjectContractLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjectContractLines<DeSerializersT>, DeSerializersT>
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
  ): ProjectContractLinesApi<DeSerializersT> {
    return new ProjectContractLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_DIMENSION_SET: OneToOneLink<
      ProjectContractLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEFAULT_DIMENSION_DIMENSION_SET: new OneToOneLink(
        'DefaultDimensionDimensionSet',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProjectContractLines;

  requestBuilder(): ProjectContractLinesRequestBuilder<DeSerializersT> {
    return new ProjectContractLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectContractLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjectContractLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectContractLines<DeSerializersT>,
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
    typeof ProjectContractLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectContractLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_SEQUENCE_NUMBER: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VAT_COMMODITY_CODE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_METHOD: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      PsaProjAmountVsUnit,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_METHOD: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      ProjContractBillingMethod,
      true,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEE_PERCENTAGE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FEE_CATEGORY_ID: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_FEE_TRANSACTIONS_INCLUDED: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_PROJECT_ID: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_HOUR_TRANSACTIONS_INCLUDED: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_RETAIL_PRICE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_GROUP_CODE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEE_PROJECT_ID: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_SCHEDULE_TYPE: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      InvoiceScheduleType,
      true,
      true
    >;
    LINE_TYPE: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      PsaContractLineType,
      true,
      true
    >;
    PAID_AMOUNT: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_RETENTION_TERM_ID: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TCS_GROUP_CODE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAINAGE_PERCENTAGE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ARE_EXPENSE_TRANSACTIONS_INCLUDED: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_AMOUNT: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSESSABLE_VALUE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_INDIRECT_COST_INCLUDED: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_ITEM_TRANSACTIONS_INCLUDED: EnumField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONTRACT_LINE_ID: OrderableEdmTypeField<
      ProjectContractLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultDimensionDimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_DIMENSION_DIMENSION_SET: OneToOneLink<
      ProjectContractLines<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectContractLines<DeSerializers>>;
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
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineSequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vatCommodityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_COMMODITY_CODE: fieldBuilder.buildEdmTypeField(
          'VATCommodityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_METHOD: fieldBuilder.buildEnumField(
          'BudgetMethod',
          PsaProjAmountVsUnit,
          true
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
         * Static representation of the {@link billingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_METHOD: fieldBuilder.buildEnumField(
          'BillingMethod',
          ProjContractBillingMethod,
          true
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link feePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'FeePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link feeCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'FeeCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areFeeTransactionsIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_FEE_TRANSACTIONS_INCLUDED: fieldBuilder.buildEnumField(
          'AreFeeTransactionsIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'LineProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areHourTransactionsIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_HOUR_TRANSACTIONS_INCLUDED: fieldBuilder.buildEnumField(
          'AreHourTransactionsIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumRetailPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_RETAIL_PRICE: fieldBuilder.buildEdmTypeField(
          'MaximumRetailPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tdsGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TDSGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link feeProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEE_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'FeeProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoiceScheduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SCHEDULE_TYPE: fieldBuilder.buildEnumField(
          'InvoiceScheduleType',
          InvoiceScheduleType,
          true
        ),
        /**
         * Static representation of the {@link lineType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_TYPE: fieldBuilder.buildEnumField(
          'LineType',
          PsaContractLineType,
          true
        ),
        /**
         * Static representation of the {@link paidAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_AMOUNT: fieldBuilder.buildEdmTypeField(
          'PaidAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerRetentionTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_RETENTION_TERM_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRetentionTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tcsGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TCSGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retainagePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAINAGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'RetainagePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link areExpenseTransactionsIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_EXPENSE_TRANSACTIONS_INCLUDED: fieldBuilder.buildEnumField(
          'AreExpenseTransactionsIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assessableValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSABLE_VALUE: fieldBuilder.buildEdmTypeField(
          'AssessableValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isIndirectCostIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INDIRECT_COST_INCLUDED: fieldBuilder.buildEnumField(
          'IsIndirectCostIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link changeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChangeOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areItemTransactionsIncluded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_ITEM_TRANSACTIONS_INCLUDED: fieldBuilder.buildEnumField(
          'AreItemTransactionsIncluded',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link contractLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_LINE_ID: fieldBuilder.buildEdmTypeField(
          'ContractLineId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectContractLines)
      };
    }

    return this._schema;
  }
}
