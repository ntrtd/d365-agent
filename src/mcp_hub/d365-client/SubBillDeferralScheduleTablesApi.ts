/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralScheduleTables } from './SubBillDeferralScheduleTables';
import { SubBillDeferralScheduleTablesRequestBuilder } from './SubBillDeferralScheduleTablesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { SubBillDeferralDistributionType } from './SubBillDeferralDistributionType';
import { NoYes } from './NoYes';
import { SubBillDeferralEventAllocationType } from './SubBillDeferralEventAllocationType';
import { SubBillDeferralSourceRecType } from './SubBillDeferralSourceRecType';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { DebitCredit } from './DebitCredit';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
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
export class SubBillDeferralScheduleTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralScheduleTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralScheduleTablesApi<DeSerializersT> {
    return new SubBillDeferralScheduleTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralRecOffAcctCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_REC_OFF_ACCT_COMBINATION: OneToOneLink<
      SubBillDeferralScheduleTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralShortTermAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_SHORT_TERM_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralScheduleTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralInitialRecAcctCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_INITIAL_REC_ACCT_COMBINATION: OneToOneLink<
      SubBillDeferralScheduleTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_DEFERRAL_REC_OFF_ACCT_COMBINATION: new OneToOneLink(
        'SubBillDeferralRecOffAcctCombination',
        this,
        linkedApis[0]
      ),
      SUB_BILL_DEFERRAL_SHORT_TERM_ACCOUNT_COMBINATION: new OneToOneLink(
        'SubBillDeferralShortTermAccountCombination',
        this,
        linkedApis[1]
      ),
      SUB_BILL_DEFERRAL_INITIAL_REC_ACCT_COMBINATION: new OneToOneLink(
        'SubBillDeferralInitialRecAcctCombination',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SubBillDeferralScheduleTables;

  requestBuilder(): SubBillDeferralScheduleTablesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralScheduleTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralScheduleTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralScheduleTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralScheduleTables<DeSerializersT>,
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
    typeof SubBillDeferralScheduleTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralScheduleTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRAL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRAL_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_TYPE: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralDistributionType,
      true,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIAL_REC_ACCT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATE_PRIOR_PERIODS: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EQUAL_PER_PERIOD: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EVENT_ALLOCATION_TYPE: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralEventAllocationType,
      true,
      true
    >;
    DEFERRAL_SOURCE_RECORD_TYPE: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralSourceRecType,
      true,
      true
    >;
    RECOGNITION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    BILLING_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REC_OFF_ACCT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TRANS_LINE_DEFERRAL_RECORD_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SHORT_TERM_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_TRANSACTION_REFERENCE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_RECORD_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EXTERNAL_LINE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECOGNITION_TYPE: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      DebitCredit,
      true,
      true
    >;
    DEFERRAL_AMOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULE_TYPE: EnumField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleType,
      true,
      true
    >;
    EVENT_TEMPLATE_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralRecOffAcctCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_REC_OFF_ACCT_COMBINATION: OneToOneLink<
      SubBillDeferralScheduleTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralShortTermAccountCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_SHORT_TERM_ACCOUNT_COMBINATION: OneToOneLink<
      SubBillDeferralScheduleTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralInitialRecAcctCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_INITIAL_REC_ACCT_COMBINATION: OneToOneLink<
      SubBillDeferralScheduleTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillDeferralScheduleTables<DeSerializers>>;
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
         * Static representation of the {@link deferralAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DeferralAccountDisplayValue',
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
         * Static representation of the {@link external} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL: fieldBuilder.buildEdmTypeField(
          'External',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_TYPE: fieldBuilder.buildEnumField(
          'DistributionType',
          SubBillDeferralDistributionType,
          true
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link initialRecAcctDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_REC_ACCT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'InitialRecAcctDisplayValue',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link eventAllocationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_ALLOCATION_TYPE: fieldBuilder.buildEnumField(
          'EventAllocationType',
          SubBillDeferralEventAllocationType,
          true
        ),
        /**
         * Static representation of the {@link deferralSourceRecordType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRAL_SOURCE_RECORD_TYPE: fieldBuilder.buildEnumField(
          'DeferralSourceRecordType',
          SubBillDeferralSourceRecType,
          true
        ),
        /**
         * Static representation of the {@link recognitionAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RecognitionAccountDisplayValue',
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
         * Static representation of the {@link billingScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'BillingScheduleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link recOffAcctDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_OFF_ACCT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RecOffAcctDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTransLineDeferralRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_LINE_DEFERRAL_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'SourceTransLineDeferralRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link shortTermAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ShortTermAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalTransactionReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TRANSACTION_REFERENCE: fieldBuilder.buildEdmTypeField(
          'OriginalTransactionReference',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link externalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExternalLineNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link recognitionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_TYPE: fieldBuilder.buildEnumField(
          'RecognitionType',
          DebitCredit,
          true
        ),
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
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link eventTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EVENT_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'EventTemplateId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralScheduleTables)
      };
    }

    return this._schema;
  }
}
