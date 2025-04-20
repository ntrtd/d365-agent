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
import { SourceSystemProductSpecificUnitOfMeasureConversionMessages } from './SourceSystemProductSpecificUnitOfMeasureConversionMessages';

/**
 * Request builder class for operations supported on the {@link SourceSystemProductSpecificUnitOfMeasureConversionMessages} entity.
 */
export class SourceSystemProductSpecificUnitOfMeasureConversionMessagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
  T
> {
  /**
   * Returns a request builder for querying all `SourceSystemProductSpecificUnitOfMeasureConversionMessages` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystemProductSpecificUnitOfMeasureConversionMessages` entities.
   */
  getAll(): GetAllRequestBuilder<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SourceSystemProductSpecificUnitOfMeasureConversionMessages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystemProductSpecificUnitOfMeasureConversionMessages`.
   */
  create(
    entity: SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>
  ): CreateRequestBuilder<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
    T
  > {
    return new CreateRequestBuilder<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SourceSystemProductSpecificUnitOfMeasureConversionMessages` entity based on its keys.
   * @param dataAreaId Key property. See {@link SourceSystemProductSpecificUnitOfMeasureConversionMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductSpecificUnitOfMeasureConversionMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductSpecificUnitOfMeasureConversionMessages.sourceSystemId}.
   * @returns A request builder for creating requests to retrieve one `SourceSystemProductSpecificUnitOfMeasureConversionMessages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    messageId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MessageId: messageId,
      SourceSystemId: sourceSystemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystemProductSpecificUnitOfMeasureConversionMessages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystemProductSpecificUnitOfMeasureConversionMessages`.
   */
  update(
    entity: SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>
  ): UpdateRequestBuilder<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
    T
  > {
    return new UpdateRequestBuilder<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductSpecificUnitOfMeasureConversionMessages`.
   * @param dataAreaId Key property. See {@link SourceSystemProductSpecificUnitOfMeasureConversionMessages.dataAreaId}.
   * @param messageId Key property. See {@link SourceSystemProductSpecificUnitOfMeasureConversionMessages.messageId}.
   * @param sourceSystemId Key property. See {@link SourceSystemProductSpecificUnitOfMeasureConversionMessages.sourceSystemId}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductSpecificUnitOfMeasureConversionMessages`.
   */
  delete(
    dataAreaId: string,
    messageId: string,
    sourceSystemId: string
  ): DeleteRequestBuilder<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystemProductSpecificUnitOfMeasureConversionMessages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystemProductSpecificUnitOfMeasureConversionMessages` by taking the entity as a parameter.
   */
  delete(
    entity: SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>
  ): DeleteRequestBuilder<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    messageId?: string,
    sourceSystemId?: string
  ): DeleteRequestBuilder<
    SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
    T
  > {
    return new DeleteRequestBuilder<
      SourceSystemProductSpecificUnitOfMeasureConversionMessages<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      SourceSystemProductSpecificUnitOfMeasureConversionMessages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MessageId: messageId!,
            SourceSystemId: sourceSystemId!
          }
    );
  }
}
