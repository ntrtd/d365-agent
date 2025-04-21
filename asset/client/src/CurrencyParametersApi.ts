/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrencyParameters } from './CurrencyParameters';
import { CurrencyParametersRequestBuilder } from './CurrencyParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustVendAmountDiffPostingModeRu } from './CustVendAmountDiffPostingModeRu';
import { NoYes } from './NoYes';
import { ExchAdjTaxableTypeW } from './ExchAdjTaxableTypeW';
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
export class CurrencyParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CurrencyParameters<DeSerializersT>, DeSerializersT>
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
  ): CurrencyParametersApi<DeSerializersT> {
    return new CurrencyParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CurrencyParameters<DeSerializersT>,
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

  entityConstructor = CurrencyParameters;

  requestBuilder(): CurrencyParametersRequestBuilder<DeSerializersT> {
    return new CurrencyParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CurrencyParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CurrencyParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CurrencyParameters<DeSerializersT>,
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
    typeof CurrencyParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CurrencyParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_NAME: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VEND_RELIZED_LOSS_TAX_POSTING_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_UNREALIZED_GAIN_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_RELIZED_GAIN_TAX_POSTING_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TAX_DIMENSION_PREPAYMENTS_EXPENSE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TAX_DIMENSION_CONVERSION_EXPENSE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TAX_DIMENSION_EXPENSE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TAX_PRIMARY_POSTING_LEDGER: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    EMPL_UNREALIZED_GAIN_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TAX_DIMENSION_PREPAYMENTS_REVENUE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_CONVERSION_GAIN: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_REALIZED_LOSS_TAX_POSTING_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_DIFFERENCE_IN_TAX_ACCOUNTING: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAKE_VAT_INTO_ACCOUNT_FOR_EXPENSES: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_REALIZED_LOSS_SALES_TAXES: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    VEND_UNREALIZED_LOSS_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_REALIZED_GAIN_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENERAL_TAX_DIMENSION_REVENUE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_REALIZED_LOSS_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPL_TAX_DIMENSION_REVENUE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_REALIZED_GAIN_TAX_POSTING_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TAX_DIMENSION_REVENUE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPL_REALIZED_GAIN: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TAX_DIMENSION_PREPAYMENTS_REVENUE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPL_TAX_DIMENSION_EXPENSE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TAX_DIMENSION_REVENUE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_PRIMARY_POSTING_LEDGER: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    VEND_UNREALIZED_GAIN_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_REALIZED_GAIN_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TAX_D_IMENSION_EXPENSE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_TAX_DIMENSION_CONVERSION_REVENUE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPL_UNREALIZED_LOSS_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_UNREALIZED_LOSS_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_REALIZED_LOSS_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_PRIMARY_POSTING_LEDGER: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    GENERAL_TAX_DIMENSION_EXPENSE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_TAX_DIMENSION_PREPAYMENTS_EXPENSE_CODE: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_REALIZED_GAIN_SALES_TAXES: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    VEND_TAX_PRIMARY_POSTING_LEDGER: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    VEND_CONVERSION_LOSS: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_REALIZED_GAIN_SALES_TAXES: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    EMPL_REALIZED_LOSS_MAIN_ACCOUNT: OrderableEdmTypeField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_REALIZED_LOSS_SALES_TAXES: EnumField<
      CurrencyParameters<DeSerializers>,
      DeSerializersT,
      ExchAdjTaxableTypeW,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CurrencyParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CurrencyParameters<DeSerializers>>;
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
         * Static representation of the {@link ledgerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_NAME: fieldBuilder.buildEdmTypeField(
          'Ledger_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendRelizedLossTaxPostingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_RELIZED_LOSS_TAX_POSTING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendRelizedLossTaxPostingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custUnrealizedGainMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_UNREALIZED_GAIN_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustUnrealizedGainMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendRelizedGainTaxPostingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_RELIZED_GAIN_TAX_POSTING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendRelizedGainTaxPostingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendTaxDimensionPrepaymentsExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_DIMENSION_PREPAYMENTS_EXPENSE_CODE:
          fieldBuilder.buildEdmTypeField(
            'VendTaxDimensionPrepaymentsExpenseCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendTaxDimensionConversionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_DIMENSION_CONVERSION_EXPENSE_CODE:
          fieldBuilder.buildEdmTypeField(
            'VendTaxDimensionConversionExpenseCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link custTaxDimensionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TAX_DIMENSION_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'CustTaxDimensionExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTaxPrimaryPostingLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TAX_PRIMARY_POSTING_LEDGER: fieldBuilder.buildEnumField(
          'CustTaxPrimaryPostingLedger',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link emplUnrealizedGainMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_UNREALIZED_GAIN_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EmplUnrealizedGainMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendTaxDimensionPrepaymentsRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_DIMENSION_PREPAYMENTS_REVENUE_CODE:
          fieldBuilder.buildEdmTypeField(
            'VendTaxDimensionPrepaymentsRevenueCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendConversionGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_CONVERSION_GAIN: fieldBuilder.buildEdmTypeField(
          'VendConversionGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custRealizedLossTaxPostingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_REALIZED_LOSS_TAX_POSTING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustRealizedLossTaxPostingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountDifferenceInTaxAccounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_DIFFERENCE_IN_TAX_ACCOUNTING: fieldBuilder.buildEnumField(
          'AmountDifferenceInTaxAccounting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link takeVatIntoAccountForExpenses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAKE_VAT_INTO_ACCOUNT_FOR_EXPENSES: fieldBuilder.buildEnumField(
          'TakeVATIntoAccountForExpenses',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custRealizedLossSalesTaxes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_REALIZED_LOSS_SALES_TAXES: fieldBuilder.buildEnumField(
          'CustRealizedLossSalesTaxes',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link vendUnrealizedLossMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_UNREALIZED_LOSS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendUnrealizedLossMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custRealizedGainMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_REALIZED_GAIN_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustRealizedGainMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link generalTaxDimensionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_TAX_DIMENSION_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'GeneralTaxDimensionRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custRealizedLossMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_REALIZED_LOSS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustRealizedLossMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emplTaxDimensionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_TAX_DIMENSION_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'EmplTaxDimensionRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custRealizedGainTaxPostingAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_REALIZED_GAIN_TAX_POSTING_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustRealizedGainTaxPostingAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTaxDimensionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TAX_DIMENSION_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'CustTaxDimensionRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emplRealizedGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_REALIZED_GAIN: fieldBuilder.buildEdmTypeField(
          'EmplRealizedGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTaxDimensionPrepaymentsRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TAX_DIMENSION_PREPAYMENTS_REVENUE_CODE:
          fieldBuilder.buildEdmTypeField(
            'CustTaxDimensionPrepaymentsRevenueCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link emplTaxDimensionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_TAX_DIMENSION_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'EmplTaxDimensionExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendTaxDimensionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_DIMENSION_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'VendTaxDimensionRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendPrimaryPostingLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_PRIMARY_POSTING_LEDGER: fieldBuilder.buildEnumField(
          'VendPrimaryPostingLedger',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link vendUnrealizedGainMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_UNREALIZED_GAIN_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendUnrealizedGainMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendRealizedGainMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REALIZED_GAIN_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendRealizedGainMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendTaxDImensionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_D_IMENSION_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'VendTaxDImensionExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendTaxDimensionConversionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_DIMENSION_CONVERSION_REVENUE_CODE:
          fieldBuilder.buildEdmTypeField(
            'VendTaxDimensionConversionRevenueCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link emplUnrealizedLossMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_UNREALIZED_LOSS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EmplUnrealizedLossMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custUnrealizedLossMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_UNREALIZED_LOSS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustUnrealizedLossMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendRealizedLossMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REALIZED_LOSS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendRealizedLossMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custPrimaryPostingLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_PRIMARY_POSTING_LEDGER: fieldBuilder.buildEnumField(
          'CustPrimaryPostingLedger',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link generalTaxDimensionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERAL_TAX_DIMENSION_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'GeneralTaxDimensionExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custTaxDimensionPrepaymentsExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_TAX_DIMENSION_PREPAYMENTS_EXPENSE_CODE:
          fieldBuilder.buildEdmTypeField(
            'CustTaxDimensionPrepaymentsExpenseCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link custRealizedGainSalesTaxes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_REALIZED_GAIN_SALES_TAXES: fieldBuilder.buildEnumField(
          'CustRealizedGainSalesTaxes',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link vendTaxPrimaryPostingLedger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_TAX_PRIMARY_POSTING_LEDGER: fieldBuilder.buildEnumField(
          'VendTaxPrimaryPostingLedger',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link vendConversionLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_CONVERSION_LOSS: fieldBuilder.buildEdmTypeField(
          'VendConversionLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendRealizedGainSalesTaxes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REALIZED_GAIN_SALES_TAXES: fieldBuilder.buildEnumField(
          'VendRealizedGainSalesTaxes',
          ExchAdjTaxableTypeW,
          true
        ),
        /**
         * Static representation of the {@link emplRealizedLossMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_REALIZED_LOSS_MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'EmplRealizedLossMainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendRealizedLossSalesTaxes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_REALIZED_LOSS_SALES_TAXES: fieldBuilder.buildEnumField(
          'VendRealizedLossSalesTaxes',
          ExchAdjTaxableTypeW,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CurrencyParameters)
      };
    }

    return this._schema;
  }
}
