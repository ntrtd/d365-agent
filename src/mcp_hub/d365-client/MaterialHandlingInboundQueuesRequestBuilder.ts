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
import { MaterialHandlingInboundQueues } from './MaterialHandlingInboundQueues';

/**
 * Request builder class for operations supported on the {@link MaterialHandlingInboundQueues} entity.
 */
export class MaterialHandlingInboundQueuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialHandlingInboundQueues<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialHandlingInboundQueues` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialHandlingInboundQueues` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialHandlingInboundQueues<T>, T> {
    return new GetAllRequestBuilder<MaterialHandlingInboundQueues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaterialHandlingInboundQueues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialHandlingInboundQueues`.
   */
  create(
    entity: MaterialHandlingInboundQueues<T>
  ): CreateRequestBuilder<MaterialHandlingInboundQueues<T>, T> {
    return new CreateRequestBuilder<MaterialHandlingInboundQueues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaterialHandlingInboundQueues` entity based on its keys.
   * @param dataAreaId Key property. See {@link MaterialHandlingInboundQueues.dataAreaId}.
   * @param inboundQueueId Key property. See {@link MaterialHandlingInboundQueues.inboundQueueId}.
   * @returns A request builder for creating requests to retrieve one `MaterialHandlingInboundQueues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inboundQueueId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MaterialHandlingInboundQueues<T>, T> {
    return new GetByKeyRequestBuilder<MaterialHandlingInboundQueues<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InboundQueueId: inboundQueueId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialHandlingInboundQueues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialHandlingInboundQueues`.
   */
  update(
    entity: MaterialHandlingInboundQueues<T>
  ): UpdateRequestBuilder<MaterialHandlingInboundQueues<T>, T> {
    return new UpdateRequestBuilder<MaterialHandlingInboundQueues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingInboundQueues`.
   * @param dataAreaId Key property. See {@link MaterialHandlingInboundQueues.dataAreaId}.
   * @param inboundQueueId Key property. See {@link MaterialHandlingInboundQueues.inboundQueueId}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingInboundQueues`.
   */
  delete(
    dataAreaId: string,
    inboundQueueId: string
  ): DeleteRequestBuilder<MaterialHandlingInboundQueues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialHandlingInboundQueues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialHandlingInboundQueues` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialHandlingInboundQueues<T>
  ): DeleteRequestBuilder<MaterialHandlingInboundQueues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inboundQueueId?: string
  ): DeleteRequestBuilder<MaterialHandlingInboundQueues<T>, T> {
    return new DeleteRequestBuilder<MaterialHandlingInboundQueues<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MaterialHandlingInboundQueues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InboundQueueId: inboundQueueId!
          }
    );
  }
}
