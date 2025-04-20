/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RebateAndDeductionsParameters } from './RebateAndDeductionsParameters';
import { RebateAndDeductionsParametersRequestBuilder } from './RebateAndDeductionsParametersRequestBuilder';
import { RebateStatusTablesApi } from './RebateStatusTablesApi';
import { NoYes } from './NoYes';
import { TamRebateItemOrderReference } from './TamRebateItemOrderReference';
import { TamRebateWarningError } from './TamRebateWarningError';
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
export class RebateAndDeductionsParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RebateAndDeductionsParameters<DeSerializersT>, DeSerializersT>
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
  ): RebateAndDeductionsParametersApi<DeSerializersT> {
    return new RebateAndDeductionsParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_STATUS: OneToOneLink<
      RebateAndDeductionsParameters<DeSerializersT>,
      DeSerializersT,
      RebateStatusTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RebateStatusTablesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REBATE_AND_DEDUCTIONS_STATUS: new OneToOneLink(
        'RebateAndDeductionsStatus',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RebateAndDeductionsParameters;

  requestBuilder(): RebateAndDeductionsParametersRequestBuilder<DeSerializersT> {
    return new RebateAndDeductionsParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RebateAndDeductionsParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RebateAndDeductionsParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RebateAndDeductionsParameters<DeSerializersT>,
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
    typeof RebateAndDeductionsParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RebateAndDeductionsParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_REBATE_AND_DEDUCTIONS_ACTIVATED: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    KEY: OrderableEdmTypeField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WILL_REBATE_DEAL_POSTING_AUTOMATICALLY_POST_FREE_TEXT_INVOICE: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CLAIM_PROCESS_ENABLED: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REBATE_DEAL_POSTING_ORDER_REBATE_REFERENCE_DEFAULTING_OPTION: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      TamRebateItemOrderReference,
      true,
      true
    >;
    WILL_REBATE_DEAL_POSTING_POST_BY_FINANCIAL_DIMENSION: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PREVIOUSLY_PROCESSED_ERROR_LEVEL: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      TamRebateWarningError,
      true,
      true
    >;
    WILL_REBATE_DEAL_POSTING_AUTOMATICALLY_POST_JOURNAL: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_REBATE_AND_DEDUCTIONS_STATUS_ID: OrderableEdmTypeField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_REBATE_DEAL_POSTING_INCLUDE_ORDER_JOURNAL: EnumField<
      RebateAndDeductionsParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rebateAndDeductionsStatus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_STATUS: OneToOneLink<
      RebateAndDeductionsParameters<DeSerializersT>,
      DeSerializersT,
      RebateStatusTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RebateAndDeductionsParameters<DeSerializers>>;
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
         * Static representation of the {@link isRebateAndDeductionsActivated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REBATE_AND_DEDUCTIONS_ACTIVATED: fieldBuilder.buildEnumField(
          'IsRebateAndDeductionsActivated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link willRebateDealPostingAutomaticallyPostFreeTextInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_DEAL_POSTING_AUTOMATICALLY_POST_FREE_TEXT_INVOICE:
          fieldBuilder.buildEnumField(
            'WillRebateDealPostingAutomaticallyPostFreeTextInvoice',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isClaimProcessEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CLAIM_PROCESS_ENABLED: fieldBuilder.buildEnumField(
          'IsClaimProcessEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rebateDealPostingOrderRebateReferenceDefaultingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REBATE_DEAL_POSTING_ORDER_REBATE_REFERENCE_DEFAULTING_OPTION:
          fieldBuilder.buildEnumField(
            'RebateDealPostingOrderRebateReferenceDefaultingOption',
            TamRebateItemOrderReference,
            true
          ),
        /**
         * Static representation of the {@link willRebateDealPostingPostByFinancialDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_DEAL_POSTING_POST_BY_FINANCIAL_DIMENSION:
          fieldBuilder.buildEnumField(
            'WillRebateDealPostingPostByFinancialDimension',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link previouslyProcessedErrorLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUSLY_PROCESSED_ERROR_LEVEL: fieldBuilder.buildEnumField(
          'PreviouslyProcessedErrorLevel',
          TamRebateWarningError,
          true
        ),
        /**
         * Static representation of the {@link willRebateDealPostingAutomaticallyPostJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_DEAL_POSTING_AUTOMATICALLY_POST_JOURNAL:
          fieldBuilder.buildEnumField(
            'WillRebateDealPostingAutomaticallyPostJournal',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultRebateAndDeductionsStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REBATE_AND_DEDUCTIONS_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultRebateAndDeductionsStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willRebateDealPostingIncludeOrderJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_REBATE_DEAL_POSTING_INCLUDE_ORDER_JOURNAL:
          fieldBuilder.buildEnumField(
            'WillRebateDealPostingIncludeOrderJournal',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RebateAndDeductionsParameters)
      };
    }

    return this._schema;
  }
}
