/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcurementCharge } from './ProcurementCharge';
import { ProcurementChargeRequestBuilder } from './ProcurementChargeRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { PurchAutomaticPurchaseDocumentLineChargesV2Api } from './PurchAutomaticPurchaseDocumentLineChargesV2Api';
import { NoYes } from './NoYes';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { MarkupType } from './MarkupType';
import { LedgerPostingType } from './LedgerPostingType';
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
export class ProcurementChargeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcurementCharge<DeSerializersT>, DeSerializersT>
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
  ): ProcurementChargeApi<DeSerializersT> {
    return new ProcurementChargeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ProcurementCharge<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchProcurementFreightCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCH_PROCUREMENT_FREIGHT_CHARGES: OneToManyLink<
      ProcurementCharge<DeSerializersT>,
      DeSerializersT,
      PurchAutomaticPurchaseDocumentLineChargesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      PurchAutomaticPurchaseDocumentLineChargesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      PURCH_PROCUREMENT_FREIGHT_CHARGES: new OneToManyLink(
        'PurchProcurementFreightCharges',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProcurementCharge;

  requestBuilder(): ProcurementChargeRequestBuilder<DeSerializersT> {
    return new ProcurementChargeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcurementCharge<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProcurementCharge<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProcurementCharge<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProcurementCharge,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcurementCharge,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGE_CODE: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_ALLOWED_PURCHASE_ORDER_CHARGE_AMOUNT: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WILL_PURCHASE_DOCUMENT_COMPARISON_INCLUDE_CHARGE: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_CLASSIFICATION: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      MarkupClassificationBr,
      true,
      true
    >;
    CREDIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEBIT_POSTING_METHOD: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      MarkupType,
      true,
      true
    >;
    CHARGE_DESCRIPTION: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_INTRASTAT_INVOICE_VALUE_INCLUDE_CHARGE_AMOUNTS: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEBIT_POSTING_TYPE: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    WILL_INTRASTAT_STATISTICAL_VALUE_INCLUDE_CHARGE_AMOUNTS: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_RATE_TYPE_NAME: OrderableEdmTypeField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREDIT_POSTING_METHOD: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      MarkupType,
      true,
      true
    >;
    CREDIT_POSTING_TYPE: EnumField<
      ProcurementCharge<DeSerializers>,
      DeSerializersT,
      LedgerPostingType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ProcurementCharge<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchProcurementFreightCharges} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCH_PROCUREMENT_FREIGHT_CHARGES: OneToManyLink<
      ProcurementCharge<DeSerializersT>,
      DeSerializersT,
      PurchAutomaticPurchaseDocumentLineChargesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcurementCharge<DeSerializers>>;
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
         * Static representation of the {@link chargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumAllowedPurchaseOrderChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_ALLOWED_PURCHASE_ORDER_CHARGE_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'MaximumAllowedPurchaseOrderChargeAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link willPurchaseDocumentComparisonIncludeCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_PURCHASE_DOCUMENT_COMPARISON_INCLUDE_CHARGE:
          fieldBuilder.buildEnumField(
            'WillPurchaseDocumentComparisonIncludeCharge',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link chargeClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CLASSIFICATION: fieldBuilder.buildEnumField(
          'ChargeClassification',
          MarkupClassificationBr,
          true
        ),
        /**
         * Static representation of the {@link creditPostingMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'CreditPostingMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link debitPostingMainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_POSTING_MAIN_ACCOUNT_ID_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DebitPostingMainAccountIdDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link debitPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_POSTING_METHOD: fieldBuilder.buildEnumField(
          'DebitPostingMethod',
          MarkupType,
          true
        ),
        /**
         * Static representation of the {@link chargeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ChargeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willIntrastatInvoiceValueIncludeChargeAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INTRASTAT_INVOICE_VALUE_INCLUDE_CHARGE_AMOUNTS:
          fieldBuilder.buildEnumField(
            'WillIntrastatInvoiceValueIncludeChargeAmounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link debitPostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEBIT_POSTING_TYPE: fieldBuilder.buildEnumField(
          'DebitPostingType',
          LedgerPostingType,
          true
        ),
        /**
         * Static representation of the {@link willIntrastatStatisticalValueIncludeChargeAmounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INTRASTAT_STATISTICAL_VALUE_INCLUDE_CHARGE_AMOUNTS:
          fieldBuilder.buildEnumField(
            'WillIntrastatStatisticalValueIncludeChargeAmounts',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link salesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'TaxRateTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creditPostingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_POSTING_METHOD: fieldBuilder.buildEnumField(
          'CreditPostingMethod',
          MarkupType,
          true
        ),
        /**
         * Static representation of the {@link creditPostingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREDIT_POSTING_TYPE: fieldBuilder.buildEnumField(
          'CreditPostingType',
          LedgerPostingType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcurementCharge)
      };
    }

    return this._schema;
  }
}
