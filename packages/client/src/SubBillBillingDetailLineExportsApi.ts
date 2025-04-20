/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillBillingDetailLineExports } from './SubBillBillingDetailLineExports';
import { SubBillBillingDetailLineExportsRequestBuilder } from './SubBillBillingDetailLineExportsRequestBuilder';
import { NoYes } from './NoYes';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
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
export class SubBillBillingDetailLineExportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillBillingDetailLineExports<DeSerializersT>, DeSerializersT>
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
  ): SubBillBillingDetailLineExportsApi<DeSerializersT> {
    return new SubBillBillingDetailLineExportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillBillingDetailLineExports;

  requestBuilder(): SubBillBillingDetailLineExportsRequestBuilder<DeSerializersT> {
    return new SubBillBillingDetailLineExportsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillBillingDetailLineExports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillBillingDetailLineExports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillBillingDetailLineExports<DeSerializersT>,
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
    typeof SubBillBillingDetailLineExports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillBillingDetailLineExports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE_NUM: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DETAIL_LINE_NUM: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DISCOUNT: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILLABLE_QUANTITY: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLED: EnumField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSUMED_QUANTITY: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_SUPPORT: EnumField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BILLING_END_DATE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FREE_QUANTITY: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USAGE_IDENTIFIER: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_PRICE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_NAME: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_START_DATE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_DATE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CURRENT_READING: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USAGE_READING_OPTION: EnumField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      SubBillUsageReadingOption,
      true,
      true
    >;
    PERIOD_REVENUE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BILLING_START_DATE: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ESTIMATED_QUANTITY: OrderableEdmTypeField<
      SubBillBillingDetailLineExports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillBillingDetailLineExports<DeSerializers>>;
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
         * Static representation of the {@link scheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scheduleLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'ScheduleLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link detailLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAIL_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'DetailLineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deferralEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'DeferralEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link discount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT: fieldBuilder.buildEdmTypeField(
          'Discount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billableQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLABLE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'BillableQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLED: fieldBuilder.buildEnumField('Billed', NoYes, true),
        /**
         * Static representation of the {@link consumedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ConsumedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link originalSupport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_SUPPORT: fieldBuilder.buildEnumField(
          'OriginalSupport',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link billingEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_END_DATE: fieldBuilder.buildEdmTypeField(
          'BillingEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link freeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FreeQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link usageIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'UsageIdentifier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_NAME: fieldBuilder.buildEdmTypeField(
          'CustName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferralScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeferralScheduleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferralStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'DeferralStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_DATE: fieldBuilder.buildEdmTypeField(
          'InvoiceDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link currentReading} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_READING: fieldBuilder.buildEdmTypeField(
          'CurrentReading',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link usageReadingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_READING_OPTION: fieldBuilder.buildEnumField(
          'UsageReadingOption',
          SubBillUsageReadingOption,
          true
        ),
        /**
         * Static representation of the {@link periodRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_REVENUE: fieldBuilder.buildEdmTypeField(
          'PeriodRevenue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link billingStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_START_DATE: fieldBuilder.buildEdmTypeField(
          'BillingStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link estimatedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillBillingDetailLineExports)
      };
    }

    return this._schema;
  }
}
