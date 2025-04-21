/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdjustmentParameters } from './AdjustmentParameters';
import { AdjustmentParametersRequestBuilder } from './AdjustmentParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustVendAmountDiffPostingModeRu } from './CustVendAmountDiffPostingModeRu';
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
export class AdjustmentParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdjustmentParameters<DeSerializersT>, DeSerializersT>
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
  ): AdjustmentParametersApi<DeSerializersT> {
    return new AdjustmentParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AdjustmentParameters<DeSerializersT>,
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

  entityConstructor = AdjustmentParameters;

  requestBuilder(): AdjustmentParametersRequestBuilder<DeSerializersT> {
    return new AdjustmentParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdjustmentParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdjustmentParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AdjustmentParameters<DeSerializersT>,
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
    typeof AdjustmentParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdjustmentParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEDGER_NAME: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADVANCE_HOLDER_TAX_DIMENSION_EXPENSE_CODE: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_TAX_DIMENSION_EXPENSE_CODE: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_HOLDER_ADVANCE_ADJUSTMENT_OFFSET_ACCOUNT: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_TAX_DIMENSION_REVENUE_CODE: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_TAX_DIMENSION_REVENUE_CODE: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REALIZED_LOSS: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_VAT_ADJUSTMENT_REALIZED_LOSS: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_HOLDER_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_LOSS: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ADVANCE_ADJUSTMENT_OFFSET_ACCOUNT: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REALIZED_GAIN: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_HOLDER_TAX_DIMENSION_REVENUE_CODE: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ADVANCE_ADJUSTMENT_OFFSET_ACCOUNT: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_HOLDER_REALIZED_GAIN: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_HOLDER_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_PROFIT: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_POSTING_MODE: EnumField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    VENDOR_TAX_DIMENSION_EXPENSE_CODE: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_POSTING_CUST: EnumField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    VAT_ADJUSTMENT_CUST: EnumField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ADVANCE_ADJUSTMENT_PROFIT: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_PROFIT: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_POSTING_MODE: EnumField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      CustVendAmountDiffPostingModeRu,
      true,
      true
    >;
    CUSTOMER_VAT_ADJUSTMENT_REALIZED_GAIN: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_REALIZED_GAIN: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_LOSS: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADVANCE_HOLDER_REALIZED_LOSS: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_REALIZED_LOSS: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ADVANCE_ADJUSTMENT_LOSS: OrderableEdmTypeField<
      AdjustmentParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AdjustmentParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdjustmentParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link ledgerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_NAME: fieldBuilder.buildEdmTypeField(
          'LedgerName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link advanceHolderTaxDimensionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER_TAX_DIMENSION_EXPENSE_CODE:
          fieldBuilder.buildEdmTypeField(
            'AdvanceHolderTaxDimensionExpenseCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link customerTaxDimensionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TAX_DIMENSION_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerTaxDimensionExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceHolderAdvanceAdjustmentOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER_ADVANCE_ADJUSTMENT_OFFSET_ACCOUNT:
          fieldBuilder.buildEdmTypeField(
            'AdvanceHolderAdvanceAdjustmentOffsetAccount',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendorTaxDimensionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TAX_DIMENSION_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'VendorTaxDimensionRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerTaxDimensionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TAX_DIMENSION_REVENUE_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerTaxDimensionRevenueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRealizedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REALIZED_LOSS: fieldBuilder.buildEdmTypeField(
          'CustomerRealizedLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerVatAdjustmentRealizedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_VAT_ADJUSTMENT_REALIZED_LOSS: fieldBuilder.buildEdmTypeField(
          'CustomerVATAdjustmentRealizedLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceHolderTaxAccountingAdvanceAdjustmentLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_LOSS:
          fieldBuilder.buildEdmTypeField(
            'AdvanceHolderTaxAccountingAdvanceAdjustmentLoss',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link customerAdvanceAdjustmentOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ADVANCE_ADJUSTMENT_OFFSET_ACCOUNT:
          fieldBuilder.buildEdmTypeField(
            'CustomerAdvanceAdjustmentOffsetAccount',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendorRealizedGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REALIZED_GAIN: fieldBuilder.buildEdmTypeField(
          'VendorRealizedGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceHolderTaxDimensionRevenueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER_TAX_DIMENSION_REVENUE_CODE:
          fieldBuilder.buildEdmTypeField(
            'AdvanceHolderTaxDimensionRevenueCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendorAdvanceAdjustmentOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ADVANCE_ADJUSTMENT_OFFSET_ACCOUNT:
          fieldBuilder.buildEdmTypeField(
            'VendorAdvanceAdjustmentOffsetAccount',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link advanceHolderRealizedGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER_REALIZED_GAIN: fieldBuilder.buildEdmTypeField(
          'AdvanceHolderRealizedGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link advanceHolderTaxAccountingAdvanceAdjustmentProfit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_PROFIT:
          fieldBuilder.buildEdmTypeField(
            'AdvanceHolderTaxAccountingAdvanceAdjustmentProfit',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link ledgerPostingMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_MODE: fieldBuilder.buildEnumField(
          'LedgerPostingMode',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link vendorTaxDimensionExpenseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TAX_DIMENSION_EXPENSE_CODE: fieldBuilder.buildEdmTypeField(
          'VendorTaxDimensionExpenseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerPostingCust} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_CUST: fieldBuilder.buildEnumField(
          'LedgerPostingCust',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link vatAdjustmentCust} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_ADJUSTMENT_CUST: fieldBuilder.buildEnumField(
          'VATAdjustmentCust',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerAdvanceAdjustmentProfit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ADVANCE_ADJUSTMENT_PROFIT: fieldBuilder.buildEdmTypeField(
          'CustomerAdvanceAdjustmentProfit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorTaxAccountingAdvanceAdjustmentProfit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_PROFIT:
          fieldBuilder.buildEdmTypeField(
            'VendorTaxAccountingAdvanceAdjustmentProfit',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link vendPostingMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_POSTING_MODE: fieldBuilder.buildEnumField(
          'VendPostingMode',
          CustVendAmountDiffPostingModeRu,
          true
        ),
        /**
         * Static representation of the {@link customerVatAdjustmentRealizedGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_VAT_ADJUSTMENT_REALIZED_GAIN: fieldBuilder.buildEdmTypeField(
          'CustomerVATAdjustmentRealizedGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerRealizedGain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_REALIZED_GAIN: fieldBuilder.buildEdmTypeField(
          'CustomerRealizedGain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorTaxAccountingAdvanceAdjustmentLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_TAX_ACCOUNTING_ADVANCE_ADJUSTMENT_LOSS:
          fieldBuilder.buildEdmTypeField(
            'VendorTaxAccountingAdvanceAdjustmentLoss',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link advanceHolderRealizedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER_REALIZED_LOSS: fieldBuilder.buildEdmTypeField(
          'AdvanceHolderRealizedLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorRealizedLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_REALIZED_LOSS: fieldBuilder.buildEdmTypeField(
          'VendorRealizedLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAdvanceAdjustmentLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ADVANCE_ADJUSTMENT_LOSS: fieldBuilder.buildEdmTypeField(
          'CustomerAdvanceAdjustmentLoss',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdjustmentParameters)
      };
    }

    return this._schema;
  }
}
