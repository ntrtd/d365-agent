/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { EngineeringChangeOrderProductRouteOperationProperties } from './EngineeringChangeOrderProductRouteOperationProperties';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteOperationProperties} entity.
 */
export class EngineeringChangeOrderProductRouteOperationPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  EngineeringChangeOrderProductRouteOperationProperties<T>,
  T
> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteOperationProperties` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteOperationProperties` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteOperationProperties<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteOperationProperties<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteOperationProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteOperationProperties`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteOperationProperties<T>
  ): CreateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationProperties<T>,
    T
  > {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteOperationProperties` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteProductionSiteId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductRouteProductionSiteId}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductRouteOperationNumber}.
   * @param routeId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.routeId}.
   * @param productConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.productConfigurationId}.
   * @param productGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.productGroupId}.
   * @param itemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteOperationProperties` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    engineeringChangeOrderProductRouteProductionSiteId: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationId: DeserializedType<
      T,
      'Edm.String'
    >,
    engineeringChangeOrderProductRouteOperationNumber: DeserializedType<
      T,
      'Edm.Int32'
    >,
    routeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productGroupId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    EngineeringChangeOrderProductRouteOperationProperties<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteOperationProperties<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      EngineeringChangeOrderProductRouteProductionSiteId:
        engineeringChangeOrderProductRouteProductionSiteId,
      EngineeringChangeOrderProductRouteOperationId:
        engineeringChangeOrderProductRouteOperationId,
      EngineeringChangeOrderProductRouteOperationNumber:
        engineeringChangeOrderProductRouteOperationNumber,
      RouteId: routeId,
      ProductConfigurationId: productConfigurationId,
      ProductGroupId: productGroupId,
      ItemNumber: itemNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteOperationProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteOperationProperties`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteOperationProperties<T>
  ): UpdateRequestBuilder<
    EngineeringChangeOrderProductRouteOperationProperties<T>,
    T
  > {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteOperationProperties<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationProperties`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductLineNumber}.
   * @param engineeringChangeOrderProductRouteProductionSiteId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductRouteProductionSiteId}.
   * @param engineeringChangeOrderProductRouteOperationId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductRouteOperationId}.
   * @param engineeringChangeOrderProductRouteOperationNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.engineeringChangeOrderProductRouteOperationNumber}.
   * @param routeId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.routeId}.
   * @param productConfigurationId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.productConfigurationId}.
   * @param productGroupId Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.productGroupId}.
   * @param itemNumber Key property. See {@link EngineeringChangeOrderProductRouteOperationProperties.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationProperties`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    engineeringChangeOrderProductRouteProductionSiteId: string,
    engineeringChangeOrderProductRouteOperationId: string,
    engineeringChangeOrderProductRouteOperationNumber: number,
    routeId: string,
    productConfigurationId: string,
    productGroupId: string,
    itemNumber: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationProperties<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteOperationProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteOperationProperties` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteOperationProperties<T>
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationProperties<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    engineeringChangeOrderProductRouteProductionSiteId?: string,
    engineeringChangeOrderProductRouteOperationId?: string,
    engineeringChangeOrderProductRouteOperationNumber?: number,
    routeId?: string,
    productConfigurationId?: string,
    productGroupId?: string,
    itemNumber?: string
  ): DeleteRequestBuilder<
    EngineeringChangeOrderProductRouteOperationProperties<T>,
    T
  > {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteOperationProperties<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      EngineeringChangeOrderProductRouteOperationProperties
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            EngineeringChangeOrderProductRouteProductionSiteId:
              engineeringChangeOrderProductRouteProductionSiteId!,
            EngineeringChangeOrderProductRouteOperationId:
              engineeringChangeOrderProductRouteOperationId!,
            EngineeringChangeOrderProductRouteOperationNumber:
              engineeringChangeOrderProductRouteOperationNumber!,
            RouteId: routeId!,
            ProductConfigurationId: productConfigurationId!,
            ProductGroupId: productGroupId!,
            ItemNumber: itemNumber!
          }
    );
  }
}
