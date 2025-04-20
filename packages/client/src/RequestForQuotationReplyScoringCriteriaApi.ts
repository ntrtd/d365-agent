/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestForQuotationReplyScoringCriteria } from './RequestForQuotationReplyScoringCriteria';
import { RequestForQuotationReplyScoringCriteriaRequestBuilder } from './RequestForQuotationReplyScoringCriteriaRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RequestForQuotationReplyScoringCriteriaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RequestForQuotationReplyScoringCriteria<DeSerializersT>,
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
  ): RequestForQuotationReplyScoringCriteriaApi<DeSerializersT> {
    return new RequestForQuotationReplyScoringCriteriaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RequestForQuotationReplyScoringCriteria;

  requestBuilder(): RequestForQuotationReplyScoringCriteriaRequestBuilder<DeSerializersT> {
    return new RequestForQuotationReplyScoringCriteriaRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RequestForQuotationReplyScoringCriteria<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RequestForQuotationReplyScoringCriteria<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RequestForQuotationReplyScoringCriteria<DeSerializersT>,
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
    typeof RequestForQuotationReplyScoringCriteria,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RequestForQuotationReplyScoringCriteria,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CRITERION_ID: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CRITERION_NAME: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_SCORING_STATUS_COMMENT: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRITERION_SCORE: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VENDOR_RFQ_REPLY_STATUS_CODE: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyScoringCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RequestForQuotationReplyScoringCriteria<DeSerializers>
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
         * Static representation of the {@link rfqNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link criterionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITERION_ID: fieldBuilder.buildEdmTypeField(
          'CriterionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link criterionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITERION_NAME: fieldBuilder.buildEdmTypeField(
          'CriterionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorScoringStatusComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_SCORING_STATUS_COMMENT: fieldBuilder.buildEdmTypeField(
          'VendorScoringStatusComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link criterionScore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITERION_SCORE: fieldBuilder.buildEdmTypeField(
          'CriterionScore',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vendorRfqReplyStatusCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_RFQ_REPLY_STATUS_CODE: fieldBuilder.buildEdmTypeField(
          'VendorRFQReplyStatusCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RequestForQuotationReplyScoringCriteria)
      };
    }

    return this._schema;
  }
}
