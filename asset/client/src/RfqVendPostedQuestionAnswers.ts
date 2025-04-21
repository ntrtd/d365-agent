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
import type { RfqVendPostedQuestionAnswersApi } from './RfqVendPostedQuestionAnswersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RFQVendPostedQuestionAnswers" of service "d365_metadata".
 */
export class RfqVendPostedQuestionAnswers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RfqVendPostedQuestionAnswersType<T>
{
  /**
   * Technical entity name for RfqVendPostedQuestionAnswers.
   */
  static override _entityName = 'RFQVendPostedQuestionAnswers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RfqVendPostedQuestionAnswers entity.
   */
  static _keys = ['dataAreaId', 'RFQNumber', 'QuestionNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rfq Number.
   */
  declare rfqNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Question Number.
   */
  declare questionNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Group Question.
   * @nullable
   */
  declare groupQuestion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rfq Case Number.
   * @nullable
   */
  declare rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Code.
   * @nullable
   */
  declare groupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Question.
   * @nullable
   */
  declare question?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Question Received.
   */
  declare questionReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Direct Response.
   * @nullable
   */
  declare isDirectResponse?: NoYes | null;
  /**
   * Customer Answer.
   * @nullable
   */
  declare customerAnswer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Answer Received.
   */
  declare answerReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Group Answer.
   * @nullable
   */
  declare groupAnswer?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RfqVendPostedQuestionAnswersApi<T>) {
    super(_entityApi);
  }
}

export interface RfqVendPostedQuestionAnswersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rfqNumber: DeserializedType<T, 'Edm.String'>;
  questionNumber: DeserializedType<T, 'Edm.Int32'>;
  groupQuestion?: DeserializedType<T, 'Edm.String'> | null;
  rfqCaseNumber?: DeserializedType<T, 'Edm.String'> | null;
  groupCode?: DeserializedType<T, 'Edm.String'> | null;
  question?: DeserializedType<T, 'Edm.String'> | null;
  questionReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isDirectResponse?: NoYes | null;
  customerAnswer?: DeserializedType<T, 'Edm.String'> | null;
  answerReceived: DeserializedType<T, 'Edm.DateTimeOffset'>;
  groupAnswer?: DeserializedType<T, 'Edm.String'> | null;
}
