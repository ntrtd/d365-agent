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
import { SourceSystemProductGlobalTradeItemNumberMessages } from './SourceSystemProductGlobalTradeItemNumberMessages';

/**
 * Request builder class for operations supported on the {@link SourceSystemProductGlobalTradeItemNumberMessages} entity.
 */
export class SourceSystemProductGlobalTradeItemNumberMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  SourceSystemProductGlobalTradeItemNumberMessages<T>,
  T
> {
  /**
   * Returns a request builder for querying all `SourceSystemProductGlobalTradeItemNumberMessages` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemProductGlobalTradeItemNumberMessages` entities.
   */
  getAll(): GetAllRequestBuilder<
    SourceSystemProductGlobalTradeItemNumberMessages<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SourceSystemProductGlobalTradeItemNumberMessages<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SourceSystemProductGlobalTradeItemNumberMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemProductGlobalTradeItemNumberMessages`.
   */
  create(
    entity: SourceSystemProductGlobalTradeItemNumberMessages<T>
  ): CreateRequestBuilder<
    SourceSystemProductGlobalTradeItemNumberMessages<T>,
    T
  > {
    return new CreateRequestBuilder<
      SourceSystemProductGlobalTradeItemNumberMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemProductGlobalTradeItemNumberMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemProductGlobalTradeItemNumberMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductGlobalTradeItemNumberMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductGlobalTradeItemNumberMessages.sourceSystemId}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemProductGlobalTradeItemNumberMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    SourceSystemProductGlobalTradeItemNumberMessages<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SourceSystemProductGlobalTradeItemNumberMessages<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MessageId: messageId,
      SourceSystemId: sourceSystemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystemProductGlobalTradeItemNumberMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemProductGlobalTradeItemNumberMessages`.
   */
  update(
    entity: SourceSystemProductGlobalTradeItemNumberMessages<T>
  ): UpdateRequestBuilder<
    SourceSystemProductGlobalTradeItemNumberMessages<T>,
    T
  > {
    return new UpdateRequestBuilder<
      SourceSystemProductGlobalTradeItemNumberMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductGlobalTradeItemNumberMessages`.
   * @param dataAreaId Key property. See {@link SourceSystemProductGlobalTradeItemNumberMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductGlobalTradeItemNumberMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductGlobalTradeItemNumberMessages.sourceSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductGlobalTradeItemNumberMessages`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    sourceSystemId: string
  ): DeleteRequestBuilder<
    SourceSystemProductGlobalTradeItemNumberMessages<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductGlobalTradeItemNumberMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductGlobalTradeItemNumberMessages` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemProductGlobalTradeItemNumberMessages<T>
  ): DeleteRequestBuilder<
    SourceSystemProductGlobalTradeItemNumberMessages<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    sourceSystemId?: string
  ): DeleteRequestBuilder<
    SourceSystemProductGlobalTradeItemNumberMessages<T>,
    T
  > {
    return new DeleteRequestBuilder<
      SourceSystemProductGlobalTradeItemNumberMessages<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      SourceSystemProductGlobalTradeItemNumberMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            SourceSystemId: sourceSystemId!
          }
    );
  }
}
