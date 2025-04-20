/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralDeclinings } from './SubBillDeferralDeclinings';
import { SubBillDeferralDecliningsRequestBuilder } from './SubBillDeferralDecliningsRequestBuilder';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { SubBillDeferralScheduleStatus } from './SubBillDeferralScheduleStatus';
import { DebitCredit } from './DebitCredit';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillScheduleStatus } from './SubBillScheduleStatus';
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
export class SubBillDeferralDecliningsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralDeclinings<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralDecliningsApi<DeSerializersT> {
    return new SubBillDeferralDecliningsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralDeclinings;

  requestBuilder(): SubBillDeferralDecliningsRequestBuilder<DeSerializersT> {
    return new SubBillDeferralDecliningsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralDeclinings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralDeclinings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralDeclinings<DeSerializersT>,
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
    typeof SubBillDeferralDeclinings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralDeclinings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVOICE_NAME: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_PERIOD_15: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_18: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_25: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_11: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_14: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_21: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_24: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MARKUP_CODE: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT_PERIOD_10: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_17: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_20: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_OR_DEF_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_PERIOD_13: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_23: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAIN_ACCOUNT_NUM: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_PERIOD_8: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_9: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_1: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_PERIOD_2: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_12: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_3: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_4: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_22: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_5: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_6: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_7: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_TRANSACTION_TYPE: EnumField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    DEFERRAL_SCHEDULE_STATUS: EnumField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleStatus,
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_START_DATE: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_RECOGNITION_TYPE: EnumField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      DebitCredit,
      true,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_AMOUNT: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_16: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_PERIOD_26: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_SCHEDULE_TYPE: EnumField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleType,
      true,
      true
    >;
    AMOUNT_PERIOD_19: OrderableEdmTypeField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_SCHEDULE_STATUS: EnumField<
      SubBillDeferralDeclinings<DeSerializers>,
      DeSerializersT,
      SubBillScheduleStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralDeclinings<DeSerializers>>;
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
         * Static representation of the {@link invoiceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_NAME: fieldBuilder.buildEdmTypeField(
          'InvoiceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountPeriod15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_15: fieldBuilder.buildEdmTypeField(
          'AmountPeriod15',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod18} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_18: fieldBuilder.buildEdmTypeField(
          'AmountPeriod18',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod25} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_25: fieldBuilder.buildEdmTypeField(
          'AmountPeriod25',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_11: fieldBuilder.buildEdmTypeField(
          'AmountPeriod11',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_14: fieldBuilder.buildEdmTypeField(
          'AmountPeriod14',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod21} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_21: fieldBuilder.buildEdmTypeField(
          'AmountPeriod21',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod24} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_24: fieldBuilder.buildEdmTypeField(
          'AmountPeriod24',
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
         * Static representation of the {@link markupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARKUP_CODE: fieldBuilder.buildEdmTypeField(
          'MarkupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_10: fieldBuilder.buildEdmTypeField(
          'AmountPeriod10',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod17} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_17: fieldBuilder.buildEdmTypeField(
          'AmountPeriod17',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod20} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_20: fieldBuilder.buildEdmTypeField(
          'AmountPeriod20',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revOrDefAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_OR_DEF_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RevOrDefAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountPeriod13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_13: fieldBuilder.buildEdmTypeField(
          'AmountPeriod13',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod23} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_23: fieldBuilder.buildEdmTypeField(
          'AmountPeriod23',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mainAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'MainAccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountPeriod8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_8: fieldBuilder.buildEdmTypeField(
          'AmountPeriod8',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_9: fieldBuilder.buildEdmTypeField(
          'AmountPeriod9',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_1: fieldBuilder.buildEdmTypeField(
          'AmountPeriod1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubBillScheduleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountPeriod2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_2: fieldBuilder.buildEdmTypeField(
          'AmountPeriod2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_12: fieldBuilder.buildEdmTypeField(
          'AmountPeriod12',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_3: fieldBuilder.buildEdmTypeField(
          'AmountPeriod3',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_4: fieldBuilder.buildEdmTypeField(
          'AmountPeriod4',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod22} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_22: fieldBuilder.buildEdmTypeField(
          'AmountPeriod22',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_5: fieldBuilder.buildEdmTypeField(
          'AmountPeriod5',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_6: fieldBuilder.buildEdmTypeField(
          'AmountPeriod6',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_7: fieldBuilder.buildEdmTypeField(
          'AmountPeriod7',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralTransactionType',
          SubBillDeferralTransactionType,
          true
        ),
        /**
         * Static representation of the {@link deferralScheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'DeferralScheduleStatus',
          SubBillDeferralScheduleStatus,
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
         * Static representation of the {@link deferralStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'DeferralStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralRecognitionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_RECOGNITION_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralRecognitionType',
          DebitCredit,
          true
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link deferralAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DeferralAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod16} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_16: fieldBuilder.buildEdmTypeField(
          'AmountPeriod16',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountPeriod26} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_26: fieldBuilder.buildEdmTypeField(
          'AmountPeriod26',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link subBillDeferralScheduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SCHEDULE_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralScheduleType',
          SubBillDeferralScheduleType,
          true
        ),
        /**
         * Static representation of the {@link amountPeriod19} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PERIOD_19: fieldBuilder.buildEdmTypeField(
          'AmountPeriod19',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillScheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'SubBillScheduleStatus',
          SubBillScheduleStatus,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralDeclinings)
      };
    }

    return this._schema;
  }
}
