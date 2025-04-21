/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchAutomaticPurchaseDocumentHeaderChargesV2 } from './PurchAutomaticPurchaseDocumentHeaderChargesV2';
import { PurchAutomaticPurchaseDocumentHeaderChargesV2RequestBuilder } from './PurchAutomaticPurchaseDocumentHeaderChargesV2RequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PurchAutomaticPurchaseDocumentHeaderChargesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializersT>,
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
  ): PurchAutomaticPurchaseDocumentHeaderChargesV2Api<DeSerializersT> {
    return new PurchAutomaticPurchaseDocumentHeaderChargesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchAutomaticPurchaseDocumentHeaderChargesV2;

  requestBuilder(): PurchAutomaticPurchaseDocumentHeaderChargesV2RequestBuilder<DeSerializersT> {
    return new PurchAutomaticPurchaseDocumentHeaderChargesV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializersT>,
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
    typeof PurchAutomaticPurchaseDocumentHeaderChargesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchAutomaticPurchaseDocumentHeaderChargesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_VENDOR_GROUP_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_DELIVERY_MODE_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_DELIVERY_GROUP_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FROM_TOTAL_LINE_AMOUNT: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROPORTIONAL_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGE_DESCRIPTION: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_ACCOUNTING_CURRENCY_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_CHARGE_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIVING_SITE_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_CATEGORY: EnumField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    RECEIVING_WAREHOUSE_ID: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_PERCENTAGE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_DOCUMENT_CURRENCY_CODE: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_CHARGE_AMOUNT: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_TOTAL_LINE_AMOUNT: OrderableEdmTypeField<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      PurchAutomaticPurchaseDocumentHeaderChargesV2<DeSerializers>
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
         * Static representation of the {@link fromTotalLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_TOTAL_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromTotalLineAmount',
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
         * Static representation of the {@link toTotalLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_TOTAL_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToTotalLineAmount',
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
          PurchAutomaticPurchaseDocumentHeaderChargesV2
        )
      };
    }

    return this._schema;
  }
}
