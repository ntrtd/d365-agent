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
import { RouteOperationsV2 } from './RouteOperationsV2';
import { RouteOprPriority } from './RouteOprPriority';

/**
 * Request builder class for operations supported on the {@link RouteOperationsV2} entity.
 */
export class RouteOperationsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteOperationsV2<T>, T> {
  /**
   * Returns a request builder for querying all `RouteOperationsV2` entities.
   * @returns A request builder for creating requests to retrieve all `RouteOperationsV2` entities.
   */
  getAll(): GetAllRequestBuilder<RouteOperationsV2<T>, T> {
    return new GetAllRequestBuilder<RouteOperationsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RouteOperationsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteOperationsV2`.
   */
  create(
    entity: RouteOperationsV2<T>
  ): CreateRequestBuilder<RouteOperationsV2<T>, T> {
    return new CreateRequestBuilder<RouteOperationsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RouteOperationsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RouteOperationsV2.dataAreaId}.
   * @param routeId Key property. See {@link RouteOperationsV2.routeId}.
   * @param operationNumber Key property. See {@link RouteOperationsV2.operationNumber}.
   * @param operationPriority Key property. See {@link RouteOperationsV2.operationPriority}.
   * @returns A request builder for creating requests to retrieve one `RouteOperationsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    routeId: DeserializedType<T, 'Edm.String'>,
    operationNumber: DeserializedType<T, 'Edm.Int32'>,
    operationPriority: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RouteOprPriority'
    >
  ): GetByKeyRequestBuilder<RouteOperationsV2<T>, T> {
    return new GetByKeyRequestBuilder<RouteOperationsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RouteId: routeId,
      OperationNumber: operationNumber,
      OperationPriority: operationPriority
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RouteOperationsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteOperationsV2`.
   */
  update(
    entity: RouteOperationsV2<T>
  ): UpdateRequestBuilder<RouteOperationsV2<T>, T> {
    return new UpdateRequestBuilder<RouteOperationsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteOperationsV2`.
   * @param dataAreaId Key property. See {@link RouteOperationsV2.dataAreaId}.
   * @param routeId Key property. See {@link RouteOperationsV2.routeId}.
   * @param operationNumber Key property. See {@link RouteOperationsV2.operationNumber}.
   * @param operationPriority Key property. See {@link RouteOperationsV2.operationPriority}.
   * @returns A request builder for creating requests that delete an entity of type `RouteOperationsV2`.
   */
  delete(
    dataAreaId: string,
    routeId: string,
    operationNumber: number,
    operationPriority: RouteOprPriority
  ): DeleteRequestBuilder<RouteOperationsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteOperationsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteOperationsV2` by taking the entity as a parameter.
   */
  delete(
    entity: RouteOperationsV2<T>
  ): DeleteRequestBuilder<RouteOperationsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    routeId?: string,
    operationNumber?: number,
    operationPriority?: RouteOprPriority
  ): DeleteRequestBuilder<RouteOperationsV2<T>, T> {
    return new DeleteRequestBuilder<RouteOperationsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RouteOperationsV2
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
