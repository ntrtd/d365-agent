/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAutomaticSalesDocumentHeaderCharge } from './SalesAutomaticSalesDocumentHeaderCharge';
import { SalesAutomaticSalesDocumentHeaderChargeRequestBuilder } from './SalesAutomaticSalesDocumentHeaderChargeRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class SalesAutomaticSalesDocumentHeaderChargeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializersT>,
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
  ): SalesAutomaticSalesDocumentHeaderChargeApi<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderChargeApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesAutomaticSalesDocumentHeaderCharge;

  requestBuilder(): SalesAutomaticSalesDocumentHeaderChargeRequestBuilder<DeSerializersT> {
    return new SalesAutomaticSalesDocumentHeaderChargeRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesAutomaticSalesDocumentHeaderCharge<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAutomaticSalesDocumentHeaderCharge<DeSerializersT>,
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
    typeof SalesAutomaticSalesDocumentHeaderCharge,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAutomaticSalesDocumentHeaderCharge,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_DELIVERY_MODE_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGING_CHARGE_DELIVERY_GROUP_ID: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_COMPOUND: EnumField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_TOTAL_LINE_AMOUNT: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_DOCUMENT_CURRENCY_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SALES_CHARGE_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_ACCOUNTING_CURRENCY_CODE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_INVOICE_PROCESSING_KEEP_CHARGE: EnumField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHARGE_CATEGORY: EnumField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      MarkupCategory,
      true,
      true
    >;
    FROM_TOTAL_LINE_AMOUNT: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGE_PERCENTAGE: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIXED_CHARGE_AMOUNT: OrderableEdmTypeField<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      SalesAutomaticSalesDocumentHeaderCharge<DeSerializers>
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
         * Static representation of the {@link chargingCustomerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChargingCustomerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chargingChargeCustomerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGING_CHARGE_CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ChargingChargeCustomerGroupId',
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
         * Static representation of the {@link isCompound} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COMPOUND: fieldBuilder.buildEnumField('IsCompound', NoYes, true),
        /**
         * Static representation of the {@link toTotalLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_TOTAL_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ToTotalLineAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesDocumentCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DOCUMENT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'SalesDocumentCurrencyCode',
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
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link salesChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'SalesChargeCode',
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
         * Static representation of the {@link willInvoiceProcessingKeepCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_INVOICE_PROCESSING_KEEP_CHARGE: fieldBuilder.buildEnumField(
          'WillInvoiceProcessingKeepCharge',
          NoYes,
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
         * Static representation of the {@link fromTotalLineAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_TOTAL_LINE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'FromTotalLineAmount',
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
        ALL_FIELDS: new AllFields('*', SalesAutomaticSalesDocumentHeaderCharge)
      };
    }

    return this._schema;
  }
}
