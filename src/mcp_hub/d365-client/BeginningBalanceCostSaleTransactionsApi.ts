/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BeginningBalanceCostSaleTransactions } from './BeginningBalanceCostSaleTransactions';
import { BeginningBalanceCostSaleTransactionsRequestBuilder } from './BeginningBalanceCostSaleTransactionsRequestBuilder';
import { JournalTablesApi } from './JournalTablesApi';
import { ProjectsApi } from './ProjectsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProjTransStatusPostedInvoiced } from './ProjTransStatusPostedInvoiced';
import { BegBalProjTransTypeCost } from './BegBalProjTransTypeCost';
import { DetailSummary } from './DetailSummary';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BeginningBalanceCostSaleTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
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
  ): BeginningBalanceCostSaleTransactionsApi<DeSerializersT> {
    return new BeginningBalanceCostSaleTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link journalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_HEADER: OneToOneLink<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
      DeSerializersT,
      JournalTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ROLE: OneToOneLink<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalTablesApi<DeSerializersT>,
      ProjectsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOURNAL_HEADER: new OneToOneLink('JournalHeader', this, linkedApis[0]),
      PROJECT_ROLE: new OneToOneLink('ProjectRole', this, linkedApis[1]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = BeginningBalanceCostSaleTransactions;

  requestBuilder(): BeginningBalanceCostSaleTransactionsRequestBuilder<DeSerializersT> {
    return new BeginningBalanceCostSaleTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BeginningBalanceCostSaleTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BeginningBalanceCostSaleTransactions<DeSerializersT>,
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
    typeof BeginningBalanceCostSaleTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BeginningBalanceCostSaleTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_PROPERTY_ID: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER_DATE: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_STATUS: EnumField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      ProjTransStatusPostedInvoiced,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      BegBalProjTransTypeCost,
      true,
      true
    >;
    JOURNAL_DETAIL_SUMMARY: EnumField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    SALES_AMOUNT: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_CURRENCY: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUNDING_SOURCE_ID: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_STATUS: EnumField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      ProjLedgerStatus,
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CAN_ACCRUE_REVENUE: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      BeginningBalanceCostSaleTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_HEADER: OneToOneLink<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
      DeSerializersT,
      JournalTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ROLE: OneToOneLink<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BeginningBalanceCostSaleTransactions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BeginningBalanceCostSaleTransactions<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE: fieldBuilder.buildEdmTypeField(
          'Resource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link linePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'LinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voucherDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_DATE: fieldBuilder.buildEdmTypeField(
          'VoucherDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'TransactionStatus',
          ProjTransStatusPostedInvoiced,
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          BegBalProjTransTypeCost,
          true
        ),
        /**
         * Static representation of the {@link journalDetailSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DETAIL_SUMMARY: fieldBuilder.buildEnumField(
          'JournalDetailSummary',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link salesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalesCurrency',
          'Edm.String',
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
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link journalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JournalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link costPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE: fieldBuilder.buildEdmTypeField(
          'CostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fundingSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'FundingSourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_STATUS: fieldBuilder.buildEnumField(
          'CostStatus',
          ProjLedgerStatus,
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
         * Static representation of the {@link canAccrueRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_ACCRUE_REVENUE: fieldBuilder.buildEdmTypeField(
          'CanAccrueRevenue',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BeginningBalanceCostSaleTransactions)
      };
    }

    return this._schema;
  }
}
