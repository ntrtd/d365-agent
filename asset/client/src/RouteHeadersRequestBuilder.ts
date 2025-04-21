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
import { RouteHeaders } from './RouteHeaders';

/**
 * Request builder class for operations supported on the {@link RouteHeaders} entity.
 */
export class RouteHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `RouteHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `RouteHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<RouteHeaders<T>, T> {
    return new GetAllRequestBuilder<RouteHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RouteHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteHeaders`.
   */
  create(entity: RouteHeaders<T>): CreateRequestBuilder<RouteHeaders<T>, T> {
    return new CreateRequestBuilder<RouteHeaders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RouteHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link RouteHeaders.dataAreaId}.
   * @param routeId Key property. See {@link RouteHeaders.routeId}.
   * @returns A request builder for creating requests to retrieve one `RouteHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    routeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RouteHeaders<T>, T> {
    return new GetByKeyRequestBuilder<RouteHeaders<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RouteId: routeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RouteHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteHeaders`.
   */
  update(entity: RouteHeaders<T>): UpdateRequestBuilder<RouteHeaders<T>, T> {
    return new UpdateRequestBuilder<RouteHeaders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteHeaders`.
   * @param dataAreaId Key property. See {@link RouteHeaders.dataAreaId}.
   * @param routeId Key property. See {@link RouteHeaders.routeId}.
   * @returns A request builder for creating requests that delete an entity of type `RouteHeaders`.
   */
  delete(
    dataAreaId: string,
    routeId: string
  ): DeleteRequestBuilder<RouteHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteHeaders` by taking the entity as a parameter.
   */
  delete(entity: RouteHeaders<T>): DeleteRequestBuilder<RouteHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    routeId?: string
  ): DeleteRequestBuilder<RouteHeaders<T>, T> {
    return new DeleteRequestBuilder<RouteHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RouteHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RouteId: routeId!
          }
    );
  }
}
