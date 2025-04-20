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
import { MaterialHandlingOutboundQueues } from './MaterialHandlingOutboundQueues';

/**
 * Request builder class for operations supported on the {@link MaterialHandlingOutboundQueues} entity.
 */
export class MaterialHandlingOutboundQueuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialHandlingOutboundQueues<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialHandlingOutboundQueues` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialHandlingOutboundQueues` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialHandlingOutboundQueues<T>, T> {
    return new GetAllRequestBuilder<MaterialHandlingOutboundQueues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaterialHandlingOutboundQueues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialHandlingOutboundQueues`.
   */
  create(
    entity: MaterialHandlingOutboundQueues<T>
  ): CreateRequestBuilder<MaterialHandlingOutboundQueues<T>, T> {
    return new CreateRequestBuilder<MaterialHandlingOutboundQueues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaterialHandlingOutboundQueues` entity based on its keys.
   * @param dataAreaId Key property. See {@link MaterialHandlingOutboundQueues.dataAreaId}.
   * @param outboundQueueId Key property. See {@link MaterialHandlingOutboundQueues.outboundQueueId}.
   * @returns A request builder for creating requests to retrieve one `MaterialHandlingOutboundQueues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundQueueId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MaterialHandlingOutboundQueues<T>, T> {
    return new GetByKeyRequestBuilder<MaterialHandlingOutboundQueues<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundQueueId: outboundQueueId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialHandlingOutboundQueues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialHandlingOutboundQueues`.
   */
  update(
    entity: MaterialHandlingOutboundQueues<T>
  ): UpdateRequestBuilder<MaterialHandlingOutboundQueues<T>, T> {
    return new UpdateRequestBuilder<MaterialHandlingOutboundQueues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingOutboundQueues`.
   * @param dataAreaId Key property. See {@link MaterialHandlingOutboundQueues.dataAreaId}.
   * @param outboundQueueId Key property. See {@link MaterialHandlingOutboundQueues.outboundQueueId}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingOutboundQueues`.
   */
  delete(
    dataAreaId: string,
    outboundQueueId: string
  ): DeleteRequestBuilder<MaterialHandlingOutboundQueues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingOutboundQueues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingOutboundQueues` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialHandlingOutboundQueues<T>
  ): DeleteRequestBuilder<MaterialHandlingOutboundQueues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundQueueId?: string
  ): DeleteRequestBuilder<MaterialHandlingOutboundQueues<T>, T> {
    return new DeleteRequestBuilder<MaterialHandlingOutboundQueues<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MaterialHandlingOutboundQueues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundQueueId: outboundQueueId!
          }
    );
  }
}
