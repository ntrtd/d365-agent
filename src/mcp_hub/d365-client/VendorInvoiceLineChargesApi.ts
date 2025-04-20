/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorInvoiceLineCharges } from './VendorInvoiceLineCharges';
import { VendorInvoiceLineChargesRequestBuilder } from './VendorInvoiceLineChargesRequestBuilder';
import { MarkupCategory } from './MarkupCategory';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class VendorInvoiceLineChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorInvoiceLineCharges<DeSerializersT>, DeSerializersT>
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
  ): VendorInvoiceLineChargesApi<DeSerializersT> {
    return new VendorInvoiceLineChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorInvoiceLineCharges;

  requestBuilder(): VendorInvoiceLineChargesRequestBuilder<DeSerializersT> {
    return new VendorInvoiceLineChargesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorInvoiceLineCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorInvoiceLineCharges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorInvoiceLineCharges<DeSerializersT>,
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
    typeof VendorInvoiceLineCharges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorInvoiceLineCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_REFERENCE: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGE_LINE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_LINE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPORTIONAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGE_DESCRIPTION: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_ACCOUNTING_CURRENCY_CODE: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_CHARGE_CODE: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CATEGORY: EnumField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    IS_INTERCOMPANY_CHARGE: EnumField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERCOMPANY_CHARGE_PERCENTAGE: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_PERCENTAGE: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceLineCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<VendorInvoiceLineCharges<DeSerializers>>;
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
         * Static representation of the {@link headerReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_REFERENCE: fieldBuilder.buildEdmTypeField(
          'HeaderReference',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargeLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChargeLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'InvoiceLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link proportionalChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPORTIONAL_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ProportionalChargeAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link salesTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeAccountingCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_ACCOUNTING_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'ChargeAccountingCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'PurchaseChargeCode',
          'Edm.String',
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
         * Static representation of the {@link chargeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_CATEGORY: fieldBuilder.buildEnumField(
          'ChargeCategory',
          MarkupCategory,
          true
        ),
        /**
         * Static representation of the {@link isIntercompanyCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTERCOMPANY_CHARGE: fieldBuilder.buildEnumField(
          'IsIntercompanyCharge',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intercompanyChargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERCOMPANY_CHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'IntercompanyChargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ChargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link fixedChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FixedChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'UnitChargeAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link externalChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ExternalChargeAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorInvoiceLineCharges)
      };
    }

    return this._schema;
  }
}
