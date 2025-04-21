/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { PublishedRequestForQuotationAndReplyLines } from './PublishedRequestForQuotationAndReplyLines';

/**
 * Request builder class for operations supported on the {@link PublishedRequestForQuotationAndReplyLines} entity.
 */
export class PublishedRequestForQuotationAndReplyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PublishedRequestForQuotationAndReplyLines<T>, T> {
  /**
   * Returns a request builder for querying all `PublishedRequestForQuotationAndReplyLines` entities.
   * @returns A request builder for creating requests to retrieve all `PublishedRequestForQuotationAndReplyLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    PublishedRequestForQuotationAndReplyLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PublishedRequestForQuotationAndReplyLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PublishedRequestForQuotationAndReplyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PublishedRequestForQuotationAndReplyLines`.
   */
  create(
    entity: PublishedRequestForQuotationAndReplyLines<T>
  ): CreateRequestBuilder<PublishedRequestForQuotationAndReplyLines<T>, T> {
    return new CreateRequestBuilder<
      PublishedRequestForQuotationAndReplyLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PublishedRequestForQuotationAndReplyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationAndReplyLines.dataAreaId}.
   * @param rfqNumber Key property. See {@link PublishedRequestForQuotationAndReplyLines.rfqNumber}.
   * @param replyLineNumber Key property. See {@link PublishedRequestForQuotationAndReplyLines.replyLineNumber}.
   * @returns A request builder for creating requests to retrieve one `PublishedRequestForQuotationAndReplyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>,
    replyLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PublishedRequestForQuotationAndReplyLines<T>, T> {
    return new GetByKeyRequestBuilder<
      PublishedRequestForQuotationAndReplyLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RFQNumber: rfqNumber,
      ReplyLineNumber: replyLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PublishedRequestForQuotationAndReplyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PublishedRequestForQuotationAndReplyLines`.
   */
  update(
    entity: PublishedRequestForQuotationAndReplyLines<T>
  ): UpdateRequestBuilder<PublishedRequestForQuotationAndReplyLines<T>, T> {
    return new UpdateRequestBuilder<
      PublishedRequestForQuotationAndReplyLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationAndReplyLines`.
   * @param dataAreaId Key property. See {@link PublishedRequestForQuotationAndReplyLines.dataAreaId}.
   * @param rfqNumber Key property. See {@link PublishedRequestForQuotationAndReplyLines.rfqNumber}.
   * @param replyLineNumber Key property. See {@link PublishedRequestForQuotationAndReplyLines.replyLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationAndReplyLines`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string,
    replyLineNumber: BigNumber
  ): DeleteRequestBuilder<PublishedRequestForQuotationAndReplyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PublishedRequestForQuotationAndReplyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PublishedRequestForQuotationAndReplyLines` by taking the entity as a parameter.
   */
  delete(
    entity: PublishedRequestForQuotationAndReplyLines<T>
  ): DeleteRequestBuilder<PublishedRequestForQuotationAndReplyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string,
    replyLineNumber?: BigNumber
  ): DeleteRequestBuilder<PublishedRequestForQuotationAndReplyLines<T>, T> {
    return new DeleteRequestBuilder<
      PublishedRequestForQuotationAndReplyLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PublishedRequestForQuotationAndReplyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!,
            ReplyLineNumber: replyLineNumber!
          }
    );
  }
}
