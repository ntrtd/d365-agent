/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchAutomaticPurchaseDocumentLineChargesV2 } from './PurchAutomaticPurchaseDocumentLineChargesV2';
import { PurchAutomaticPurchaseDocumentLineChargesV2RequestBuilder } from './PurchAutomaticPurchaseDocumentLineChargesV2RequestBuilder';
import { ProcurementChargeApi } from './ProcurementChargeApi';
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
export class PurchAutomaticPurchaseDocumentLineChargesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializersT>,
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
  ): PurchAutomaticPurchaseDocumentLineChargesV2Api<DeSerializersT> {
    return new PurchAutomaticPurchaseDocumentLineChargesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchProcurementCharge} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCH_PROCUREMENT_CHARGE: OneToOneLink<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializersT>,
      DeSerializersT,
      ProcurementChargeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProcurementChargeApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PURCH_PROCUREMENT_CHARGE: new OneToOneLink(
        'PurchProcurementCharge',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PurchAutomaticPurchaseDocumentLineChargesV2;

  requestBuilder(): PurchAutomaticPurchaseDocumentLineChargesV2RequestBuilder<DeSerializersT> {
    return new PurchAutomaticPurchaseDocumentLineChargesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializersT>,
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
    typeof PurchAutomaticPurchaseDocumentLineChargesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchAutomaticPurchaseDocumentLineChargesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_ITEM_NUMBER: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_PRODUCT_GROUP_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_DELIVERY_MODE_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_DELIVERY_GROUP_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPORTIONAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGE_DESCRIPTION: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_ACCOUNTING_CURRENCY_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_CHARGE_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CATEGORY: EnumField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTERCOMPANY_CHARGE_PERCENTAGE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGE_PERCENTAGE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_DOCUMENT_CURRENCY_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchProcurementCharge} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCH_PROCUREMENT_CHARGE: OneToOneLink<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializersT>,
      DeSerializersT,
      ProcurementChargeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      PurchAutomaticPurchaseDocumentLineChargesV2<DeSerializers>
    >;
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
         * Static representation of the {@link chargingVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChargingVendorAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingChargeVendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CHARGE_VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargingChargeVendorGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChargingItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingChargeProductGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CHARGE_PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargingChargeProductGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingDeliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'ChargingDeliveryModeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingChargeDeliveryGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CHARGE_DELIVERY_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargingChargeDeliveryGroupId',
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
         * Static representation of the {@link receivingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingSiteId',
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
         * Static representation of the {@link receivingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ReceivingWarehouseId',
          'Edm.String',
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
         * Static representation of the {@link chargePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ChargePercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseDocumentCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_DOCUMENT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'PurchaseDocumentCurrencyCode',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          PurchAutomaticPurchaseDocumentLineChargesV2
        )
      };
    }

    return this._schema;
  }
}
