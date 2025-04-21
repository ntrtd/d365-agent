/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPaymentJournalFees } from './CustomerPaymentJournalFees';
import { CustomerPaymentJournalFeesRequestBuilder } from './CustomerPaymentJournalFeesRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { CustomerPaymentFeesApi } from './CustomerPaymentFeesApi';
import { TaxItemGroupHeadingsApi } from './TaxItemGroupHeadingsApi';
import { CustomerPaymentJournalLinesApi } from './CustomerPaymentJournalLinesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { VendPaymFeeTaxDirectionJp } from './VendPaymFeeTaxDirectionJp';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
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
export class CustomerPaymentJournalFeesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CustomerPaymentJournalFees<DeSerializersT>, DeSerializersT>
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
  ): CustomerPaymentJournalFeesApi<DeSerializersT> {
    return new CustomerPaymentJournalFeesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_FEE: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxItemGroupHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP_HEADING: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      CustomerPaymentFeesApi<DeSerializersT>,
      TaxItemGroupHeadingsApi<DeSerializersT>,
      CustomerPaymentJournalLinesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[0]),
      CUSTOMER_PAYMENT_FEE: new OneToOneLink(
        'CustomerPaymentFee',
        this,
        linkedApis[1]
      ),
      TAX_ITEM_GROUP_HEADING: new OneToOneLink(
        'TaxItemGroupHeading',
        this,
        linkedApis[2]
      ),
      CUSTOMER_PAYMENT_JOURNAL_LINE: new OneToOneLink(
        'CustomerPaymentJournalLine',
        this,
        linkedApis[3]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4]),
      TAX_GROUP: new OneToOneLink('TaxGroup', this, linkedApis[5]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = CustomerPaymentJournalFees;

  requestBuilder(): CustomerPaymentJournalFeesRequestBuilder<DeSerializersT> {
    return new CustomerPaymentJournalFeesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPaymentJournalFees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPaymentJournalFees<DeSerializersT>,
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
    typeof CustomerPaymentJournalFees,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPaymentJournalFees,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAYMENT_FEE_ID: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SALES_TAX_GROUP: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_DIRECTION: EnumField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      VendPaymFeeTaxDirectionJp,
      true,
      true
    >;
    IS_WITHHOLDING_CALCULATION_ENABLED: EnumField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcType,
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentJournalFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_FEE: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentFeesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxItemGroupHeading} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP_HEADING: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupHeadingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerPaymentJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_LINE: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPaymentJournalFees<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPaymentJournalFees<DeSerializers>>;
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
         * Static representation of the {@link sourceJournalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceJournalBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceJournalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_JOURNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceJournalLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paymentFeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_FEE_ID: fieldBuilder.buildEdmTypeField(
          'PaymentFeeId',
          'Edm.String',
          false
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
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
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
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link itemWithholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ItemWithholdingTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_DIRECTION: fieldBuilder.buildEnumField(
          'SalesTaxDirection',
          VendPaymFeeTaxDirectionJp,
          true
        ),
        /**
         * Static representation of the {@link isWithholdingCalculationEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WITHHOLDING_CALCULATION_ENABLED: fieldBuilder.buildEnumField(
          'IsWithholdingCalculationEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcType,
          true
        ),
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
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
        ALL_FIELDS: new AllFields('*', CustomerPaymentJournalFees)
      };
    }

    return this._schema;
  }
}
