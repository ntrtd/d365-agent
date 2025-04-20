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
import { RequestForQuotationReplyHeaders } from './RequestForQuotationReplyHeaders';

/**
 * Request builder class for operations supported on the {@link RequestForQuotationReplyHeaders} entity.
 */
export class RequestForQuotationReplyHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestForQuotationReplyHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `RequestForQuotationReplyHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `RequestForQuotationReplyHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<RequestForQuotationReplyHeaders<T>, T> {
    return new GetAllRequestBuilder<RequestForQuotationReplyHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RequestForQuotationReplyHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestForQuotationReplyHeaders`.
   */
  create(
    entity: RequestForQuotationReplyHeaders<T>
  ): CreateRequestBuilder<RequestForQuotationReplyHeaders<T>, T> {
    return new CreateRequestBuilder<RequestForQuotationReplyHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RequestForQuotationReplyHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyHeaders.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyHeaders.rfqNumber}.
   * @returns A request builder for creating requests to retrieve one `RequestForQuotationReplyHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rfqNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RequestForQuotationReplyHeaders<T>, T> {
    return new GetByKeyRequestBuilder<RequestForQuotationReplyHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RFQNumber: rfqNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RequestForQuotationReplyHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestForQuotationReplyHeaders`.
   */
  update(
    entity: RequestForQuotationReplyHeaders<T>
  ): UpdateRequestBuilder<RequestForQuotationReplyHeaders<T>, T> {
    return new UpdateRequestBuilder<RequestForQuotationReplyHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyHeaders`.
   * @param dataAreaId Key property. See {@link RequestForQuotationReplyHeaders.dataAreaId}.
   * @param rfqNumber Key property. See {@link RequestForQuotationReplyHeaders.rfqNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyHeaders`.
   */
  delete(
    dataAreaId: string,
    rfqNumber: string
  ): DeleteRequestBuilder<RequestForQuotationReplyHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestForQuotationReplyHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestForQuotationReplyHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: RequestForQuotationReplyHeaders<T>
  ): DeleteRequestBuilder<RequestForQuotationReplyHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rfqNumber?: string
  ): DeleteRequestBuilder<RequestForQuotationReplyHeaders<T>, T> {
    return new DeleteRequestBuilder<RequestForQuotationReplyHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestForQuotationReplyHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RFQNumber: rfqNumber!
          }
    );
  }
}
