/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralTransactionLineDeferrals } from './SubBillDeferralTransactionLineDeferrals';
import { SubBillDeferralTransactionLineDeferralsRequestBuilder } from './SubBillDeferralTransactionLineDeferralsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { AccountOffsetaccount } from './AccountOffsetaccount';
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
export class SubBillDeferralTransactionLineDeferralsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
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
  ): SubBillDeferralTransactionLineDeferralsApi<DeSerializersT> {
    return new SubBillDeferralTransactionLineDeferralsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralExpirationAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_EXPIRATION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralRecognitionAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_RECOGNITION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralConRecognitionAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_CON_RECOGNITION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralDiscountRecognitionAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_DISCOUNT_RECOGNITION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralDiscountDeferralAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_DISCOUNT_DEFERRAL_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralConDeferralAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_CON_DEFERRAL_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_DEFERRAL_EXPIRATION_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillDeferralExpirationAccountCombination',
        this,
        linkedApis[0]
      ),
      SUB_BILL_DEFERRAL_RECOGNITION_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillDeferralRecognitionAccountCombination',
        this,
        linkedApis[1]
      ),
      SUB_BILL_DEFERRAL_CON_RECOGNITION_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillDeferralConRecognitionAccountCombination',
        this,
        linkedApis[2]
      ),
      SUB_BILL_DEFERRAL_DISCOUNT_RECOGNITION_ACCOUNT_COMBINATION:
        new OneToOneLink(
          'SubBillDeferralDiscountRecognitionAccountCombination',
          this,
          linkedApis[3]
        ),
      SUB_BILL_DEFERRAL_DISCOUNT_DEFERRAL_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillDeferralDiscountDeferralAccountCombination',
        this,
        linkedApis[4]
      ),
      SUB_BILL_DEFERRAL_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillDeferralAccountCombination',
        this,
        linkedApis[5]
      ),
      SUB_BILL_DEFERRAL_CON_DEFERRAL_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillDeferralConDeferralAccountCombination',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = SubBillDeferralTransactionLineDeferrals;

  requestBuilder(): SubBillDeferralTransactionLineDeferralsRequestBuilder<DeSerializersT> {
    return new SubBillDeferralTransactionLineDeferralsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
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
    typeof SubBillDeferralTransactionLineDeferrals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralTransactionLineDeferrals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_LINE_DEFERRAL_REC_ID: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RECOGNITION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULE_FROM_TEMPLATE: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OVERRIDE_START_DATE: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSUMPTION_INITIAL_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EVENT_BASED_TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_RECOGNITION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_TERM_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EQUAL_PER_PERIOD: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_TYPE: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleType,
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    DISCOUNT_INITIAL_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_RECOGNITION_OFFSET_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STRAIGHT_LINE_TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_SHORT_TERM_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_DEFERRAL_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_DEFERRAL_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRED: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSOLIDATE_PRIOR_PERIODS: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INITIAL_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_RECOGNITION_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_SHORT_TERM_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFERRAL_START_DATE: OrderableEdmTypeField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNT_OFFSETACCOUNT: EnumField<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>,
      DeSerializersT,
      AccountOffsetaccount,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralExpirationAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_EXPIRATION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralRecognitionAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_RECOGNITION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralConRecognitionAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_CON_RECOGNITION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralDiscountRecognitionAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_DISCOUNT_RECOGNITION_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralDiscountDeferralAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_DISCOUNT_DEFERRAL_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralConDeferralAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_CON_DEFERRAL_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralTransactionLineDeferrals<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SubBillDeferralTransactionLineDeferrals<DeSerializers>
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link transactionLineDeferralRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_LINE_DEFERRAL_REC_ID: fieldBuilder.buildEdmTypeField(
          'TransactionLineDeferralRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link recognitionOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RecognitionOffsetAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link scheduleFromTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_FROM_TEMPLATE: fieldBuilder.buildEnumField(
          'ScheduleFromTemplate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link overrideStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERRIDE_START_DATE: fieldBuilder.buildEnumField(
          'OverrideStartDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link consumptionInitialRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_INITIAL_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsumptionInitialRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eventBasedTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_BASED_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'EventBasedTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountRecognitionOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_RECOGNITION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountRecognitionOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsumptionRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortTermAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShortTermAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link equalPerPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EQUAL_PER_PERIOD: fieldBuilder.buildEnumField(
          'EqualPerPeriod',
          NoYes,
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          SubBillDeferralTransactionType,
          true
        ),
        /**
         * Static representation of the {@link discountInitialRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_INITIAL_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountInitialRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferralAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DeferralAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionRecognitionOffsetAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_RECOGNITION_OFFSET_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsumptionRecognitionOffsetAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'RecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link straightLineTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRAIGHT_LINE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'StraightLineTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expirationAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ExpirationAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountShortTermAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_SHORT_TERM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountShortTermAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountDeferralAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_DEFERRAL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountDeferralAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionDeferralAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_DEFERRAL_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsumptionDeferralAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRED: fieldBuilder.buildEnumField('Deferred', NoYes, true),
        /**
         * Static representation of the {@link consolidatePriorPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATE_PRIOR_PERIODS: fieldBuilder.buildEnumField(
          'ConsolidatePriorPeriods',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link initialRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InitialRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountRecognitionAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_RECOGNITION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DiscountRecognitionAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionShortTermAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_SHORT_TERM_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ConsumptionShortTermAccount',
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
         * Static representation of the {@link accountOffsetaccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_OFFSETACCOUNT: fieldBuilder.buildEnumField(
          'AccountOffsetaccount',
          AccountOffsetaccount,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralTransactionLineDeferrals)
      };
    }

    return this._schema;
  }
}
