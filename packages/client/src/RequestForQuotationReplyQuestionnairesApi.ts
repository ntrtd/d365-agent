/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestForQuotationReplyQuestionnaires } from './RequestForQuotationReplyQuestionnaires';
import { RequestForQuotationReplyQuestionnairesRequestBuilder } from './RequestForQuotationReplyQuestionnairesRequestBuilder';
import { PurchRfqQuestionnaireStatus } from './PurchRfqQuestionnaireStatus';
import { KmQuestionAnswerInputType } from './KmQuestionAnswerInputType';
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
export class RequestForQuotationReplyQuestionnairesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      RequestForQuotationReplyQuestionnaires<DeSerializersT>,
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
  ): RequestForQuotationReplyQuestionnairesApi<DeSerializersT> {
    return new RequestForQuotationReplyQuestionnairesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RequestForQuotationReplyQuestionnaires;

  requestBuilder(): RequestForQuotationReplyQuestionnairesRequestBuilder<DeSerializersT> {
    return new RequestForQuotationReplyQuestionnairesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RequestForQuotationReplyQuestionnaires<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RequestForQuotationReplyQuestionnaires<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RequestForQuotationReplyQuestionnaires<DeSerializersT>,
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
    typeof RequestForQuotationReplyQuestionnaires,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RequestForQuotationReplyQuestionnaires,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RFQ_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUESTIONNAIRE_ID: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUESTION_SEQUENCE_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANSWER_TEXT: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTION_TEXT: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTIONNAIRE_STATUS: EnumField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      PurchRfqQuestionnaireStatus,
      true,
      true
    >;
    QUESTIONNAIRE_QUESTION_ID: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTION_INSTRUCTION: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANSWER_COMMENT: OrderableEdmTypeField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUESTION_INPUT_TYPE: EnumField<
      RequestForQuotationReplyQuestionnaires<DeSerializers>,
      DeSerializersT,
      KmQuestionAnswerInputType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      RequestForQuotationReplyQuestionnaires<DeSerializers>
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
         * Static representation of the {@link questionnaireId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_ID: fieldBuilder.buildEdmTypeField(
          'QuestionnaireId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link questionSequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTION_SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'QuestionSequenceNumber',
          'Edm.Int32',
          false
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
        /**
         * Static representation of the {@link answerText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANSWER_TEXT: fieldBuilder.buildEdmTypeField(
          'AnswerText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTION_TEXT: fieldBuilder.buildEdmTypeField(
          'QuestionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionnaireStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_STATUS: fieldBuilder.buildEnumField(
          'QuestionnaireStatus',
          PurchRfqQuestionnaireStatus,
          true
        ),
        /**
         * Static representation of the {@link questionnaireQuestionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTIONNAIRE_QUESTION_ID: fieldBuilder.buildEdmTypeField(
          'QuestionnaireQuestionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionInstruction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTION_INSTRUCTION: fieldBuilder.buildEdmTypeField(
          'QuestionInstruction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link answerComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANSWER_COMMENT: fieldBuilder.buildEdmTypeField(
          'AnswerComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link questionInputType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUESTION_INPUT_TYPE: fieldBuilder.buildEnumField(
          'QuestionInputType',
          KmQuestionAnswerInputType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RequestForQuotationReplyQuestionnaires)
      };
    }

    return this._schema;
  }
}
