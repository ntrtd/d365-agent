/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RfqVendPostedQuestionAnswers } from './RfqVendPostedQuestionAnswers';
import { RfqVendPostedQuestionAnswersRequestBuilder } from './RfqVendPostedQuestionAnswersRequestBuilder';
import { NoYes } from './NoYes';
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
export class RfqVendPostedQuestionAnswersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RfqVendPostedQuestionAnswers<DeSerializersT>, DeSerializersT>
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
  ): RfqVendPostedQuestionAnswersApi<DeSerializersT> {
    return new RfqVendPostedQuestionAnswersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RfqVendPostedQuestionAnswers;

  requestBuilder(): RfqVendPostedQuestionAnswersRequestBuilder<DeSerializersT> {
    return new RfqVendPostedQuestionAnswersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RfqVendPostedQuestionAnswers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RfqVendPostedQuestionAnswers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RfqVendPostedQuestionAnswers<DeSerializersT>,
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
    typeof RfqVendPostedQuestionAnswers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RfqVendPostedQuestionAnswers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_NUMBER: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUESTION_NUMBER: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROUP_QUESTION: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RFQ_CASE_NUMBER: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTION: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTION_RECEIVED: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_DIRECT_RESPONSE: EnumField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ANSWER: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANSWER_RECEIVED: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GROUP_ANSWER: OrderableEdmTypeField<
      RfqVendPostedQuestionAnswers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RfqVendPostedQuestionAnswers<DeSerializers>>;
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
         * Static representation of the {@link questionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'QuestionNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link groupQuestion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_QUESTION: fieldBuilder.buildEdmTypeField(
          'GroupQuestion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfqCaseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RFQ_CASE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RFQCaseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'GroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link question} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTION: fieldBuilder.buildEdmTypeField(
          'Question',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTION_RECEIVED: fieldBuilder.buildEdmTypeField(
          'QuestionReceived',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isDirectResponse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DIRECT_RESPONSE: fieldBuilder.buildEnumField(
          'IsDirectResponse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerAnswer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ANSWER: fieldBuilder.buildEdmTypeField(
          'CustomerAnswer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link answerReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANSWER_RECEIVED: fieldBuilder.buildEdmTypeField(
          'AnswerReceived',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link groupAnswer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ANSWER: fieldBuilder.buildEdmTypeField(
          'GroupAnswer',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RfqVendPostedQuestionAnswers)
      };
    }

    return this._schema;
  }
}
