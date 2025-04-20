/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RequestForQuotationReplyQuestionnairesApi } from './RequestForQuotationReplyQuestionnairesApi';
import { PurchRfqQuestionnaireStatus } from './PurchRfqQuestionnaireStatus';
import { KmQuestionAnswerInputType } from './KmQuestionAnswerInputType';

/**
 * This class represents the entity "RequestForQuotationReplyQuestionnaires" of service "d365_metadata".
 */
export class RequestForQuotationReplyQuestionnaires<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RequestForQuotationReplyQuestionnairesType<T>
{
  /**
   * Technical entity name for RequestForQuotationReplyQuestionnaires.
   */
  static override _entityName = 'RequestForQuotationReplyQuestionnaires';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RequestForQuotationReplyQuestionnaires entity.
   */
  static _keys = [
    'dataAreaId',
    'RFQNumber',
    'QuestionnaireId',
    'QuestionSequenceNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Questionnaire Id.
   */
  declare questionnaireId: DeserializedType<T, 'Edm.String'>;
  /**
   * Question Sequence Number.
   */
  declare questionSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Answer Text.
   * @nullable
   */
  declare answerText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Question Text.
   * @nullable
   */
  declare questionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Questionnaire Status.
   * @nullable
   */
  declare questionnaireStatus?: PurchRfqQuestionnaireStatus | null;
  /**
   * Questionnaire Question Id.
   * @nullable
   */
  declare questionnaireQuestionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Question Instruction.
   * @nullable
   */
  declare questionInstruction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Answer Comment.
   * @nullable
   */
  declare answerComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Question Input Type.
   * @nullable
   */
  declare questionInputType?: KmQuestionAnswerInputType | null;

  constructor(_entityApi: RequestForQuotationReplyQuestionnairesApi<T>) {
    super(_entityApi);
  }
}

export interface RequestForQuotationReplyQuestionnairesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  questionnaireId: DeserializedType<T, 'Edm.String'>;
  questionSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  answerText?: DeserializedType<T, 'Edm.String'> | null;
  questionText?: DeserializedType<T, 'Edm.String'> | null;
  questionnaireStatus?: PurchRfqQuestionnaireStatus | null;
  questionnaireQuestionId?: DeserializedType<T, 'Edm.String'> | null;
  questionInstruction?: DeserializedType<T, 'Edm.String'> | null;
  answerComment?: DeserializedType<T, 'Edm.String'> | null;
  questionInputType?: KmQuestionAnswerInputType | null;
}
