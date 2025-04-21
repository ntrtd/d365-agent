/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorInvoiceHeaderCharges } from './VendorInvoiceHeaderCharges';
import { VendorInvoiceHeaderChargesRequestBuilder } from './VendorInvoiceHeaderChargesRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { TaxItemGroupsApi } from './TaxItemGroupsApi';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
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
export class VendorInvoiceHeaderChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VendorInvoiceHeaderCharges<DeSerializersT>, DeSerializersT>
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
  ): VendorInvoiceHeaderChargesApi<DeSerializersT> {
    return new VendorInvoiceHeaderChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorInvoiceHeaderCharges<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      VendorInvoiceHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP: OneToOneLink<
      VendorInvoiceHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      TaxItemGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[0]),
      TAX_GROUP: new OneToOneLink('TaxGroup', this, linkedApis[1]),
      TAX_ITEM_GROUP: new OneToOneLink('TaxItemGroup', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = VendorInvoiceHeaderCharges;

  requestBuilder(): VendorInvoiceHeaderChargesRequestBuilder<DeSerializersT> {
    return new VendorInvoiceHeaderChargesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorInvoiceHeaderCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorInvoiceHeaderCharges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorInvoiceHeaderCharges<DeSerializersT>,
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
    typeof VendorInvoiceHeaderCharges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorInvoiceHeaderCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEADER_REFERENCE: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGE_LINE_NUMBER: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VEND_INVOICE_INFO_TABLE_DATA_AREA_ID: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_CHARGE_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INTERCOMPANY_CHARGE: EnumField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_DESCRIPTION: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROPORTIONAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_ACCOUNTING_CURRENCY_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CATEGORY: EnumField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    CHARGE_PERCENTAGE: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_CHARGE_AMOUNT: OrderableEdmTypeField<
      VendorInvoiceHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VendorInvoiceHeaderCharges<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      VendorInvoiceHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP: OneToOneLink<
      VendorInvoiceHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorInvoiceHeaderCharges<DeSerializers>>;
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
         * Static representation of the {@link vendInvoiceInfoTableDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_INVOICE_INFO_TABLE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'VendInvoiceInfoTableDataAreaId',
          'Edm.String',
          false
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
         * Static representation of the {@link isIntercompanyCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INTERCOMPANY_CHARGE: fieldBuilder.buildEnumField(
          'IsIntercompanyCharge',
          NoYes,
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
         * Static representation of the {@link proportionalChargeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPORTIONAL_CHARGE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ProportionalChargeAmount',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorInvoiceHeaderCharges)
      };
    }

    return this._schema;
  }
}
