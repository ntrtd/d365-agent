/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralBalancesListEntity } from './SubBillDeferralBalancesListEntity';
import { SubBillDeferralBalancesListEntityRequestBuilder } from './SubBillDeferralBalancesListEntityRequestBuilder';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
import { SubBillDeferralScheduleStatus } from './SubBillDeferralScheduleStatus';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
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
export class SubBillDeferralBalancesListEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralBalancesListEntity<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralBalancesListEntityApi<DeSerializersT> {
    return new SubBillDeferralBalancesListEntityApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralBalancesListEntity;

  requestBuilder(): SubBillDeferralBalancesListEntityRequestBuilder<DeSerializersT> {
    return new SubBillDeferralBalancesListEntityRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralBalancesListEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralBalancesListEntity<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralBalancesListEntity<DeSerializersT>,
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
    typeof SubBillDeferralBalancesListEntity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralBalancesListEntity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRAL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCHEDULE_LINE_STATUS: EnumField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      SubBillScheduleStatus,
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFERRAL_START_DATE: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULE_STATUS: EnumField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleStatus,
      true,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICING_NAME: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULE_TYPE: EnumField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleType,
      true,
      true
    >;
    ORIGINAL_DEFERRAL_AMOUNT: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CHARGES_CODE: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    RECOGNIZED_AMOUNT: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_BALANCE: OrderableEdmTypeField<
      SubBillDeferralBalancesListEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralBalancesListEntity<DeSerializers>>;
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
         * Static representation of the {@link deferralScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeferralScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillingScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scheduleLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LINE_STATUS: fieldBuilder.buildEnumField(
          'ScheduleLineStatus',
          SubBillScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link scheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'ScheduleStatus',
          SubBillDeferralScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link invoicingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_NAME: fieldBuilder.buildEdmTypeField(
          'InvoicingName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_TYPE: fieldBuilder.buildEnumField(
          'ScheduleType',
          SubBillDeferralScheduleType,
          true
        ),
        /**
         * Static representation of the {@link originalDeferralAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_DEFERRAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'OriginalDeferralAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link chargesCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_CODE: fieldBuilder.buildEdmTypeField(
          'ChargesCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferralAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DeferralAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          SubBillDeferralTransactionType,
          true
        ),
        /**
         * Static representation of the {@link recognizedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecognizedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE: fieldBuilder.buildEdmTypeField('Invoice', 'Edm.String', true),
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
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'MainAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferralBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_BALANCE: fieldBuilder.buildEdmTypeField(
          'DeferralBalance',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralBalancesListEntity)
      };
    }

    return this._schema;
  }
}
