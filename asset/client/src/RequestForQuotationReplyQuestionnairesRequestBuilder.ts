/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { RequestForQuotationReplyQuestionnaires } from './RequestForQuotationReplyQuestionnaires';

/**
 * Request builder class for operations supported on the {@link RequestForQuotationReplyQuestionnaires} entity.
 */
export class RequestForQuotationReplyQuestionnairesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T> {
  /**
   * Returns a request builder for querying all `RequestForQuotationReplyQuestionnaires` entities.
   * @returns A request builder for creating requests to retrieve all `RequestForQuotationReplyQuestionnaires` entities.
   */
  getAll(): GetAllRequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T> {
    return new GetAllRequestBuilder<
      RequestForQuotationReplyQuestionnaires<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RequestForQuotationReplyQuestionnaires` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestForQuotationReplyQuestionnaires`.
   */
  create(
    entity: RequestForQuotationReplyQuestionnaires<T>
  ): CreateRequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T> {
    return new CreateRequestBuilder<
      RequestForQuotationReplyQuestionnaires<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RequestForQuotationReplyQuestionnaires` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyQuestionnaires.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyQuestionnaires.rfqNumber}.
   * @param questionnaireId Key property. See {@link RequestForQuotationReplyQuestionnaires.questionnaireId}.
   * @param questionSequenceNumber Key property. See {@link RequestForQuotationReplyQuestionnaires.questionSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `RequestForQuotationReplyQuestionnaires` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    questionnaireId: DeserializedType<T, 'Edm.String'>,
    questionSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T> {
    return new GetByKeyRequestBuilder<
      RequestForQuotationReplyQuestionnaires<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RFQNumber: rfqNumber,
      QuestionnaireId: questionnaireId,
      QuestionSequenceNumber: questionSequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RequestForQuotationReplyQuestionnaires`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestForQuotationReplyQuestionnaires`.
   */
  update(
    entity: RequestForQuotationReplyQuestionnaires<T>
  ): UpdateRequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T> {
    return new UpdateRequestBuilder<
      RequestForQuotationReplyQuestionnaires<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyQuestionnaires`.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyQuestionnaires.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyQuestionnaires.rfqNumber}.
   * @param questionnaireId Key property. See {@link RequestForQuotationReplyQuestionnaires.questionnaireId}.
   * @param questionSequenceNumber Key property. See {@link RequestForQuotationReplyQuestionnaires.questionSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyQuestionnaires`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    questionnaireId: string,
    questionSequenceNumber: number
  ): DeleteRequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyQuestionnaires`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyQuestionnaires` by taking the entity as a parameter.
   */
  delete(
    entity: RequestForQuotationReplyQuestionnaires<T>
  ): DeleteRequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    questionnaireId?: string,
    questionSequenceNumber?: number
  ): DeleteRequestBuilder<RequestForQuotationReplyQuestionnaires<T>, T> {
    return new DeleteRequestBuilder<
      RequestForQuotationReplyQuestionnaires<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestForQuotationReplyQuestionnaires
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            QuestionnaireId: questionnaireId!,
            QuestionSequenceNumber: questionSequenceNumber!
          }
    );
  }
}
