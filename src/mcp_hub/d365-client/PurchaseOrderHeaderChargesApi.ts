/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseOrderHeaderCharges } from './PurchaseOrderHeaderCharges';
import { PurchaseOrderHeaderChargesRequestBuilder } from './PurchaseOrderHeaderChargesRequestBuilder';
import { PurchaseOrderHeadersV2Api } from './PurchaseOrderHeadersV2Api';
import { CurrenciesApi } from './CurrenciesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
import { TaxItemGroupsApi } from './TaxItemGroupsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchaseOrderHeaderChargesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseOrderHeaderCharges<DeSerializersT>, DeSerializersT>
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
  ): PurchaseOrderHeaderChargesApi<DeSerializersT> {
    return new PurchaseOrderHeaderChargesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderHeadersV2Api<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>,
      TaxItemGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_HEADER_V_2: new OneToOneLink(
        'PurchaseOrderHeaderV2',
        this,
        linkedApis[0]
      ),
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[1]),
      TAX_GROUP: new OneToOneLink('TaxGroup', this, linkedApis[2]),
      TAX_ITEM_GROUP: new OneToOneLink('TaxItemGroup', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = PurchaseOrderHeaderCharges;

  requestBuilder(): PurchaseOrderHeaderChargesRequestBuilder<DeSerializersT> {
    return new PurchaseOrderHeaderChargesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseOrderHeaderCharges<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseOrderHeaderCharges<DeSerializersT>,
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
    typeof PurchaseOrderHeaderCharges,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseOrderHeaderCharges,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGE_LINE_NUMBER: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPORTIONAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGE_DESCRIPTION: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_ACCOUNTING_CURRENCY_CODE: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_CHARGE_CODE: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CATEGORY: EnumField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    IS_INTERCOMPANY_CHARGE: EnumField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_PERCENTAGE: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXTERNAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchaseOrderHeaderCharges<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxItemGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_ITEM_GROUP: OneToOneLink<
      PurchaseOrderHeaderCharges<DeSerializersT>,
      DeSerializersT,
      TaxItemGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseOrderHeaderCharges<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
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
        ALL_FIELDS: new AllFields('*', PurchaseOrderHeaderCharges)
      };
    }

    return this._schema;
  }
}
