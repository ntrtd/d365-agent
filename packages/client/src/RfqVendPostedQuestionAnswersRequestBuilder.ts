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
import { RfqVendPostedQuestionAnswers } from './RfqVendPostedQuestionAnswers';

/**
 * Request builder class for operations supported on the {@link RfqVendPostedQuestionAnswers} entity.
 */
export class RfqVendPostedQuestionAnswersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RfqVendPostedQuestionAnswers<T>, T> {
  /**
   * Returns a request builder for querying all `RfqVendPostedQuestionAnswers` entities.
   * @returns A request builder for creating requests to retrieve all `RfqVendPostedQuestionAnswers` entities.
   */
  getAll(): GetAllRequestBuilder<RfqVendPostedQuestionAnswers<T>, T> {
    return new GetAllRequestBuilder<RfqVendPostedQuestionAnswers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RfqVendPostedQuestionAnswers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RfqVendPostedQuestionAnswers`.
   */
  create(
    entity: RfqVendPostedQuestionAnswers<T>
  ): CreateRequestBuilder<RfqVendPostedQuestionAnswers<T>, T> {
    return new CreateRequestBuilder<RfqVendPostedQuestionAnswers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RfqVendPostedQuestionAnswers` entity based on its keys.
   * @param dataAreaId Key property. See {@link RfqVendPostedQuestionAnswers.dataAreaId}.
   * @param rfqNumber Key property. See {@link RfqVendPostedQuestionAnswers.rfqNumber}.
   * @param questionNumber Key property. See {@link RfqVendPostedQuestionAnswers.questionNumber}.
   * @returns A request builder for creating requests to retrieve one `RfqVendPostedQuestionAnswers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    questionNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RfqVendPostedQuestionAnswers<T>, T> {
    return new GetByKeyRequestBuilder<RfqVendPostedQuestionAnswers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RFQNumber: rfqNumber,
        QuestionNumber: questionNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RfqVendPostedQuestionAnswers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RfqVendPostedQuestionAnswers`.
   */
  update(
    entity: RfqVendPostedQuestionAnswers<T>
  ): UpdateRequestBuilder<RfqVendPostedQuestionAnswers<T>, T> {
    return new UpdateRequestBuilder<RfqVendPostedQuestionAnswers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RfqVendPostedQuestionAnswers`.
   * @param dataAreaId Key property. See {@link RfqVendPostedQuestionAnswers.dataAreaId}.
   * @param rfqNumber Key property. See {@link RfqVendPostedQuestionAnswers.rfqNumber}.
   * @param questionNumber Key property. See {@link RfqVendPostedQuestionAnswers.questionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RfqVendPostedQuestionAnswers`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    questionNumber: number
  ): DeleteRequestBuilder<RfqVendPostedQuestionAnswers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RfqVendPostedQuestionAnswers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RfqVendPostedQuestionAnswers` by taking the entity as a parameter.
   */
  delete(
    entity: RfqVendPostedQuestionAnswers<T>
  ): DeleteRequestBuilder<RfqVendPostedQuestionAnswers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    questionNumber?: number
  ): DeleteRequestBuilder<RfqVendPostedQuestionAnswers<T>, T> {
    return new DeleteRequestBuilder<RfqVendPostedQuestionAnswers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RfqVendPostedQuestionAnswers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            QuestionNumber: questionNumber!
          }
    );
  }
}
