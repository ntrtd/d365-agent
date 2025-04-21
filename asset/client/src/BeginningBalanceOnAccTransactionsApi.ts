/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BeginningBalanceOnAccTransactions } from './BeginningBalanceOnAccTransactions';
import { BeginningBalanceOnAccTransactionsRequestBuilder } from './BeginningBalanceOnAccTransactionsRequestBuilder';
import { ProjectsApi } from './ProjectsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { DetailSummary } from './DetailSummary';
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
export class BeginningBalanceOnAccTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BeginningBalanceOnAccTransactions<DeSerializersT>, DeSerializersT>
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
  ): BeginningBalanceOnAccTransactionsApi<DeSerializersT> {
    return new BeginningBalanceOnAccTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ROLE: OneToOneLink<
      BeginningBalanceOnAccTransactions<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BeginningBalanceOnAccTransactions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProjectsApi<DeSerializersT>, DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PROJECT_ROLE: new OneToOneLink('ProjectRole', this, linkedApis[0]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BeginningBalanceOnAccTransactions;

  requestBuilder(): BeginningBalanceOnAccTransactionsRequestBuilder<DeSerializersT> {
    return new BeginningBalanceOnAccTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BeginningBalanceOnAccTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BeginningBalanceOnAccTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BeginningBalanceOnAccTransactions<DeSerializersT>,
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
    typeof BeginningBalanceOnAccTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BeginningBalanceOnAccTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_ID: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CURRENCY: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVENUE: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOUCHER_DATE: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FUNDING_SOURCE_ID: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    JOURNAL_DETAIL_SUMMARY: EnumField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_DATE: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      BeginningBalanceOnAccTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ROLE: OneToOneLink<
      BeginningBalanceOnAccTransactions<DeSerializersT>,
      DeSerializersT,
      ProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      BeginningBalanceOnAccTransactions<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BeginningBalanceOnAccTransactions<DeSerializers>>;
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
         * Static representation of the {@link journalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ID: fieldBuilder.buildEdmTypeField(
          'JournalId',
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
         * Static representation of the {@link itemSalesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemSalesTaxGroup',
          'Edm.String',
          true
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link salesCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CURRENCY: fieldBuilder.buildEdmTypeField(
          'SalesCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVENUE: fieldBuilder.buildEdmTypeField(
          'Revenue',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link fundingSourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNDING_SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'FundingSourceId',
          'Edm.String',
          true
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
         * Static representation of the {@link journalDetailSummary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DETAIL_SUMMARY: fieldBuilder.buildEnumField(
          'JournalDetailSummary',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
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
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BeginningBalanceOnAccTransactions)
      };
    }

    return this._schema;
  }
}
