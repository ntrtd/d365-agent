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
import { RouteOperations } from './RouteOperations';

/**
 * Request builder class for operations supported on the {@link RouteOperations} entity.
 */
export class RouteOperationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteOperations<T>, T> {
  /**
   * Returns a request builder for querying all `RouteOperations` entities.
   * @returns A request builder for creating requests to retrieve all `RouteOperations` entities.
   */
  getAll(): GetAllRequestBuilder<RouteOperations<T>, T> {
    return new GetAllRequestBuilder<RouteOperations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RouteOperations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteOperations`.
   */
  create(
    entity: RouteOperations<T>
  ): CreateRequestBuilder<RouteOperations<T>, T> {
    return new CreateRequestBuilder<RouteOperations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RouteOperations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RouteOperations.dataAreaId}.
   * @param routeId Key property. See {@link RouteOperations.routeId}.
   * @param operationNumber Key property. See {@link RouteOperations.operationNumber}.
   * @param operationPriority Key property. See {@link RouteOperations.operationPriority}.
   * @returns A request builder for creating requests to retrieve one `RouteOperations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    routeId: DeserializedType<T, 'Edm.String'>,
    operationNumber: DeserializedType<T, 'Edm.Int32'>,
    operationPriority: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RouteOperations<T>, T> {
    return new GetByKeyRequestBuilder<RouteOperations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RouteId: routeId,
      OperationNumber: operationNumber,
      OperationPriority: operationPriority
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RouteOperations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteOperations`.
   */
  update(
    entity: RouteOperations<T>
  ): UpdateRequestBuilder<RouteOperations<T>, T> {
    return new UpdateRequestBuilder<RouteOperations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteOperations`.
   * @param dataAreaId Key property. See {@link RouteOperations.dataAreaId}.
   * @param routeId Key property. See {@link RouteOperations.routeId}.
   * @param operationNumber Key property. See {@link RouteOperations.operationNumber}.
   * @param operationPriority Key property. See {@link RouteOperations.operationPriority}.
   * @returns A request builder for creating requests that delete an entity of type `RouteOperations`.
   */
  delete(
    dataAreaId: string,
    routeId: string,
    operationNumber: number,
    operationPriority: number
  ): DeleteRequestBuilder<RouteOperations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteOperations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteOperations` by taking the entity as a parameter.
   */
  delete(
    entity: RouteOperations<T>
  ): DeleteRequestBuilder<RouteOperations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    routeId?: string,
    operationNumber?: number,
    operationPriority?: number
  ): DeleteRequestBuilder<RouteOperations<T>, T> {
    return new DeleteRequestBuilder<RouteOperations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RouteOperations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RouteId: routeId!,
            OperationNumber: operationNumber!,
            OperationPriority: operationPriority!
          }
    );
  }
}
