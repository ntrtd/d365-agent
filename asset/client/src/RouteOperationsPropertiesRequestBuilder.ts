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
import { RouteOperationsProperties } from './RouteOperationsProperties';

/**
 * Request builder class for operations supported on the {@link RouteOperationsProperties} entity.
 */
export class RouteOperationsPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteOperationsProperties<T>, T> {
  /**
   * Returns a request builder for querying all `RouteOperationsProperties` entities.
   * @returns A request builder for creating requests to retrieve all `RouteOperationsProperties` entities.
   */
  getAll(): GetAllRequestBuilder<RouteOperationsProperties<T>, T> {
    return new GetAllRequestBuilder<RouteOperationsProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RouteOperationsProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteOperationsProperties`.
   */
  create(
    entity: RouteOperationsProperties<T>
  ): CreateRequestBuilder<RouteOperationsProperties<T>, T> {
    return new CreateRequestBuilder<RouteOperationsProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RouteOperationsProperties` entity based on its keys.
   * @param dataAreaId Key property. See {@link RouteOperationsProperties.dataAreaId}.
   * @param operationId Key property. See {@link RouteOperationsProperties.operationId}.
   * @param itemNumber Key property. See {@link RouteOperationsProperties.itemNumber}.
   * @param productConfigurationId Key property. See {@link RouteOperationsProperties.productConfigurationId}.
   * @param routeId Key property. See {@link RouteOperationsProperties.routeId}.
   * @param productionSiteId Key property. See {@link RouteOperationsProperties.productionSiteId}.
   * @param productGroupId Key property. See {@link RouteOperationsProperties.productGroupId}.
   * @returns A request builder for creating requests to retrieve one `RouteOperationsProperties` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operationId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    routeId: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RouteOperationsProperties<T>, T> {
    return new GetByKeyRequestBuilder<RouteOperationsProperties<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperationId: operationId,
        ItemNumber: itemNumber,
        ProductConfigurationId: productConfigurationId,
        RouteId: routeId,
        ProductionSiteId: productionSiteId,
        ProductGroupId: productGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RouteOperationsProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteOperationsProperties`.
   */
  update(
    entity: RouteOperationsProperties<T>
  ): UpdateRequestBuilder<RouteOperationsProperties<T>, T> {
    return new UpdateRequestBuilder<RouteOperationsProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteOperationsProperties`.
   * @param dataAreaId Key property. See {@link RouteOperationsProperties.dataAreaId}.
   * @param operationId Key property. See {@link RouteOperationsProperties.operationId}.
   * @param itemNumber Key property. See {@link RouteOperationsProperties.itemNumber}.
   * @param productConfigurationId Key property. See {@link RouteOperationsProperties.productConfigurationId}.
   * @param routeId Key property. See {@link RouteOperationsProperties.routeId}.
   * @param productionSiteId Key property. See {@link RouteOperationsProperties.productionSiteId}.
   * @param productGroupId Key property. See {@link RouteOperationsProperties.productGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `RouteOperationsProperties`.
   */
  delete(
    dataAreaId: string,
    operationId: string,
    itemNumber: string,
    productConfigurationId: string,
    routeId: string,
    productionSiteId: string,
    productGroupId: string
  ): DeleteRequestBuilder<RouteOperationsProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteOperationsProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteOperationsProperties` by taking the entity as a parameter.
   */
  delete(
    entity: RouteOperationsProperties<T>
  ): DeleteRequestBuilder<RouteOperationsProperties<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operationId?: string,
    itemNumber?: string,
    productConfigurationId?: string,
    routeId?: string,
    productionSiteId?: string,
    productGroupId?: string
  ): DeleteRequestBuilder<RouteOperationsProperties<T>, T> {
    return new DeleteRequestBuilder<RouteOperationsProperties<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RouteOperationsProperties
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperationId: operationId!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            RouteId: routeId!,
            ProductionSiteId: productionSiteId!,
            ProductGroupId: productGroupId!
          }
    );
  }
}
