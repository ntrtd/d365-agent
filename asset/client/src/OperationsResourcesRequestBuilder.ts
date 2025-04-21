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
import { OperationsResources } from './OperationsResources';

/**
 * Request builder class for operations supported on the {@link OperationsResources} entity.
 */
export class OperationsResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationsResources<T>, T> {
  /**
   * Returns a request builder for querying all `OperationsResources` entities.
   * @returns A request builder for creating requests to retrieve all `OperationsResources` entities.
   */
  getAll(): GetAllRequestBuilder<OperationsResources<T>, T> {
    return new GetAllRequestBuilder<OperationsResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OperationsResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperationsResources`.
   */
  create(
    entity: OperationsResources<T>
  ): CreateRequestBuilder<OperationsResources<T>, T> {
    return new CreateRequestBuilder<OperationsResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperationsResources` entity based on its keys.
   * @param dataAreaId Key property. See {@link OperationsResources.dataAreaId}.
   * @param resourceId Key property. See {@link OperationsResources.resourceId}.
   * @returns A request builder for creating requests to retrieve one `OperationsResources` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OperationsResources<T>, T> {
    return new GetByKeyRequestBuilder<OperationsResources<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ResourceId: resourceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OperationsResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperationsResources`.
   */
  update(
    entity: OperationsResources<T>
  ): UpdateRequestBuilder<OperationsResources<T>, T> {
    return new UpdateRequestBuilder<OperationsResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperationsResources`.
   * @param dataAreaId Key property. See {@link OperationsResources.dataAreaId}.
   * @param resourceId Key property. See {@link OperationsResources.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `OperationsResources`.
   */
  delete(
    dataAreaId: string,
    resourceId: string
  ): DeleteRequestBuilder<OperationsResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperationsResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperationsResources` by taking the entity as a parameter.
   */
  delete(
    entity: OperationsResources<T>
  ): DeleteRequestBuilder<OperationsResources<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    resourceId?: string
  ): DeleteRequestBuilder<OperationsResources<T>, T> {
    return new DeleteRequestBuilder<OperationsResources<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OperationsResources
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ResourceId: resourceId!
          }
    );
  }
}
