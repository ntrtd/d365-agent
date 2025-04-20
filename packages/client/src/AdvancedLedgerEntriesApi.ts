/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvancedLedgerEntries } from './AdvancedLedgerEntries';
import { AdvancedLedgerEntriesRequestBuilder } from './AdvancedLedgerEntriesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { AdvancedLedgerEntryTransactionStatus } from './AdvancedLedgerEntryTransactionStatus';
import { NoYes } from './NoYes';
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
export class AdvancedLedgerEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdvancedLedgerEntries<DeSerializersT>, DeSerializersT>
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
  ): AdvancedLedgerEntriesApi<DeSerializersT> {
    return new AdvancedLedgerEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AdvancedLedgerEntries<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AdvancedLedgerEntries;

  requestBuilder(): AdvancedLedgerEntriesRequestBuilder<DeSerializersT> {
    return new AdvancedLedgerEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdvancedLedgerEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdvancedLedgerEntries<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AdvancedLedgerEntries<DeSerializersT>,
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
    typeof AdvancedLedgerEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdvancedLedgerEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_TRANSACTION_NUMBER: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_TRANSACTION_TEXT: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_FUNDING_SOURCE_CONTRACT: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TEXT_LINE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_FUNDING_SOURCE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_TRANSACTION_STATUS: EnumField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      AdvancedLedgerEntryTransactionStatus,
      true,
      true
    >;
    FISCAL_CALENDAR_PERIOD_NAME: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LINE_PROPERTY: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TRANSACTION_ID: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSING_ENTRY: EnumField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_ACCOUNTING_DATE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_SALES_CURRENCY: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HEADER_CURRENCY: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVERSING_DATE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEDGER_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_CALENDAR_YEAR_NAME: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEBIT: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HEADER_POSTING_DEFINITION: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_POSTING_DEFINITION: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ACTIVITY_NUMBER: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_CURRENCY: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_CATEGORY: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_SALES_TAX_GROUP: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PSN_DO_UPDATE_BANK: EnumField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSN_BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PSN_IS_CORRECTION: EnumField<
      AdvancedLedgerEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AdvancedLedgerEntries<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdvancedLedgerEntries<DeSerializers>>;
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
         * Static representation of the {@link headerTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'HeaderTransactionNumber',
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
         * Static representation of the {@link headerTransactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'HeaderTransactionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projFundingSourceContract} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_FUNDING_SOURCE_CONTRACT: fieldBuilder.buildEdmTypeField(
          'ProjFundingSourceContract',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionTextLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TEXT_LINE: fieldBuilder.buildEdmTypeField(
          'TransactionTextLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projFundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_FUNDING_SOURCE: fieldBuilder.buildEdmTypeField(
          'ProjFundingSource',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerTransactionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_TRANSACTION_STATUS: fieldBuilder.buildEnumField(
          'HeaderTransactionStatus',
          AdvancedLedgerEntryTransactionStatus,
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendarPeriodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_PERIOD_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarPeriodName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectLineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'ProjectLineProperty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTransactionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectItemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjectItemSalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reversingEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSING_ENTRY: fieldBuilder.buildEnumField(
          'ReversingEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link headerAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'HeaderAccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectSalesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ProjectSalesCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link headerCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'HeaderCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'FiscalCalendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reversingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSING_DATE: fieldBuilder.buildEdmTypeField(
          'ReversingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link ledgerAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalCalendarYearName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CALENDAR_YEAR_NAME: fieldBuilder.buildEdmTypeField(
          'FiscalCalendarYearName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT: fieldBuilder.buildEdmTypeField('Credit', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link debit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT: fieldBuilder.buildEdmTypeField('Debit', 'Edm.Decimal', false),
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
         * Static representation of the {@link headerPostingDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_POSTING_DEFINITION: fieldBuilder.buildEdmTypeField(
          'HeaderPostingDefinition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linePostingDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_POSTING_DEFINITION: fieldBuilder.buildEdmTypeField(
          'LinePostingDefinition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectActivityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProjectActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_CURRENCY: fieldBuilder.buildEdmTypeField(
          'LineCurrency',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link projectCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProjectCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjectSalesTaxGroup',
          'Edm.String',
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
         * Static representation of the {@link psnDoUpdateBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_DO_UPDATE_BANK: fieldBuilder.buildEnumField(
          'PSNDoUpdateBank',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psnBankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_BANK_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'PSNBankTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link psnIsCorrection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSN_IS_CORRECTION: fieldBuilder.buildEnumField(
          'PSNIsCorrection',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdvancedLedgerEntries)
      };
    }

    return this._schema;
  }
}
