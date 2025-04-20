/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralParameters } from './SubBillDeferralParameters';
import { SubBillDeferralParametersRequestBuilder } from './SubBillDeferralParametersRequestBuilder';
import { SubBillDeferralPostingMethod } from './SubBillDeferralPostingMethod';
import { SubBillDeferralDiscountDeferralOption } from './SubBillDeferralDiscountDeferralOption';
import { NoYes } from './NoYes';
import { SubBillDeferralDefaultDeferralStartDate } from './SubBillDeferralDefaultDeferralStartDate';
import { SubBillDeferralShortTermDeferralMethod } from './SubBillDeferralShortTermDeferralMethod';
import { SubBillDeferralRecJournalLineDescType } from './SubBillDeferralRecJournalLineDescType';
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
export class SubBillDeferralParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralParameters<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralParametersApi<DeSerializersT> {
    return new SubBillDeferralParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralParameters;

  requestBuilder(): SubBillDeferralParametersRequestBuilder<DeSerializersT> {
    return new SubBillDeferralParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralParameters<DeSerializersT>,
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
    typeof SubBillDeferralParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_METHOD: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      SubBillDeferralPostingMethod,
      true,
      true
    >;
    DISCOUNT_DEFERRAL_OPTION: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      SubBillDeferralDiscountDeferralOption,
      true,
      true
    >;
    SUMMARIZE_RECOGNITION_JOURNAL: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONSOLIDATE_PRIOR_PERIODS: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PURCHASE_DISCOUNT_DEFERRAL_OPTION: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      SubBillDeferralDiscountDeferralOption,
      true,
      true
    >;
    DEFAULT_DEFERRAL_START_DATE: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      SubBillDeferralDefaultDeferralStartDate,
      true,
      true
    >;
    REVERSE_PROFIT_LOSS_ON_CREDIT: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_JOURNAL_NAME: OrderableEdmTypeField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOW_MISSING_DEFERRAL_SETUP_MESSAGE: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHORT_TERM_DEFERRAL_METHOD: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      SubBillDeferralShortTermDeferralMethod,
      true,
      true
    >;
    REC_JOURNAL_LINE_DESC_TYPE: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      SubBillDeferralRecJournalLineDescType,
      true,
      true
    >;
    AUTOMATICALLY_POST_GENERAL_JOURNALS: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EQUAL_PER_PERIOD: EnumField<
      SubBillDeferralParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralParameters<DeSerializers>>;
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
         * Static representation of the {@link postingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_METHOD: fieldBuilder.buildEnumField(
          'PostingMethod',
          SubBillDeferralPostingMethod,
          true
        ),
        /**
         * Static representation of the {@link discountDeferralOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_DEFERRAL_OPTION: fieldBuilder.buildEnumField(
          'DiscountDeferralOption',
          SubBillDeferralDiscountDeferralOption,
          true
        ),
        /**
         * Static representation of the {@link summarizeRecognitionJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARIZE_RECOGNITION_JOURNAL: fieldBuilder.buildEnumField(
          'SummarizeRecognitionJournal',
          NoYes,
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
         * Static representation of the {@link purchaseDiscountDeferralOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_DISCOUNT_DEFERRAL_OPTION: fieldBuilder.buildEnumField(
          'PurchaseDiscountDeferralOption',
          SubBillDeferralDiscountDeferralOption,
          true
        ),
        /**
         * Static representation of the {@link defaultDeferralStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DEFERRAL_START_DATE: fieldBuilder.buildEnumField(
          'DefaultDeferralStartDate',
          SubBillDeferralDefaultDeferralStartDate,
          true
        ),
        /**
         * Static representation of the {@link reverseProfitLossOnCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_PROFIT_LOSS_ON_CREDIT: fieldBuilder.buildEnumField(
          'ReverseProfitLossOnCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultJournalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultJournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link showMissingDeferralSetupMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_MISSING_DEFERRAL_SETUP_MESSAGE: fieldBuilder.buildEnumField(
          'ShowMissingDeferralSetupMessage',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shortTermDeferralMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_TERM_DEFERRAL_METHOD: fieldBuilder.buildEnumField(
          'ShortTermDeferralMethod',
          SubBillDeferralShortTermDeferralMethod,
          true
        ),
        /**
         * Static representation of the {@link recJournalLineDescType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REC_JOURNAL_LINE_DESC_TYPE: fieldBuilder.buildEnumField(
          'RecJournalLineDescType',
          SubBillDeferralRecJournalLineDescType,
          true
        ),
        /**
         * Static representation of the {@link automaticallyPostGeneralJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATICALLY_POST_GENERAL_JOURNALS: fieldBuilder.buildEnumField(
          'AutomaticallyPostGeneralJournals',
          NoYes,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralParameters)
      };
    }

    return this._schema;
  }
}
