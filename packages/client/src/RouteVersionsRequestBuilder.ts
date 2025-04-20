/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { RouteVersions } from './RouteVersions';

/**
 * Request builder class for operations supported on the {@link RouteVersions} entity.
 */
export class RouteVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteVersions<T>, T> {
  /**
   * Returns a request builder for querying all `RouteVersions` entities.
   * @returns A request builder for creating requests to retrieve all `RouteVersions` entities.
   */
  getAll(): GetAllRequestBuilder<RouteVersions<T>, T> {
    return new GetAllRequestBuilder<RouteVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RouteVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteVersions`.
   */
  create(entity: RouteVersions<T>): CreateRequestBuilder<RouteVersions<T>, T> {
    return new CreateRequestBuilder<RouteVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RouteVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link RouteVersions.dataAreaId}.
   * @param validFromQuantity Key property. See {@link RouteVersions.validFromQuantity}.
   * @param validFromDate Key property. See {@link RouteVersions.validFromDate}.
   * @param routeId Key property. See {@link RouteVersions.routeId}.
   * @param productSizeId Key property. See {@link RouteVersions.productSizeId}.
   * @param productColorId Key property. See {@link RouteVersions.productColorId}.
   * @param productionSiteId Key property. See {@link RouteVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link RouteVersions.productConfigurationId}.
   * @param productStyleId Key property. See {@link RouteVersions.productStyleId}.
   * @param itemNumber Key property. See {@link RouteVersions.itemNumber}.
   * @param isActive Key property. See {@link RouteVersions.isActive}.
   * @returns A request builder for creating requests to retrieve one `RouteVersions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    validFromQuantity: DeserializedType<T, 'Edm.Decimal'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    routeId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RouteVersions<T>, T> {
    return new GetByKeyRequestBuilder<RouteVersions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ValidFromQuantity: validFromQuantity,
      ValidFromDate: validFromDate,
      RouteId: routeId,
      ProductSizeId: productSizeId,
      ProductColorId: productColorId,
      ProductionSiteId: productionSiteId,
      ProductConfigurationId: productConfigurationId,
      ProductStyleId: productStyleId,
      ItemNumber: itemNumber,
      IsActive: isActive
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RouteVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteVersions`.
   */
  update(entity: RouteVersions<T>): UpdateRequestBuilder<RouteVersions<T>, T> {
    return new UpdateRequestBuilder<RouteVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteVersions`.
   * @param dataAreaId Key property. See {@link RouteVersions.dataAreaId}.
   * @param validFromQuantity Key property. See {@link RouteVersions.validFromQuantity}.
   * @param validFromDate Key property. See {@link RouteVersions.validFromDate}.
   * @param routeId Key property. See {@link RouteVersions.routeId}.
   * @param productSizeId Key property. See {@link RouteVersions.productSizeId}.
   * @param productColorId Key property. See {@link RouteVersions.productColorId}.
   * @param productionSiteId Key property. See {@link RouteVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link RouteVersions.productConfigurationId}.
   * @param productStyleId Key property. See {@link RouteVersions.productStyleId}.
   * @param itemNumber Key property. See {@link RouteVersions.itemNumber}.
   * @param isActive Key property. See {@link RouteVersions.isActive}.
   * @returns A request builder for creating requests that delete an entity of type `RouteVersions`.
   */
  delete(
    dataAreaId: string,
    validFromQuantity: BigNumber,
    validFromDate: Moment,
    routeId: string,
    productSizeId: string,
    productColorId: string,
    productionSiteId: string,
    productConfigurationId: string,
    productStyleId: string,
    itemNumber: string,
    isActive: number
  ): DeleteRequestBuilder<RouteVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteVersions` by taking the entity as a parameter.
   */
  delete(entity: RouteVersions<T>): DeleteRequestBuilder<RouteVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    validFromQuantity?: BigNumber,
    validFromDate?: Moment,
    routeId?: string,
    productSizeId?: string,
    productColorId?: string,
    productionSiteId?: string,
    productConfigurationId?: string,
    productStyleId?: string,
    itemNumber?: string,
    isActive?: number
  ): DeleteRequestBuilder<RouteVersions<T>, T> {
    return new DeleteRequestBuilder<RouteVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RouteVersions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValidFromQuantity: validFromQuantity!,
            ValidFromDate: validFromDate!,
            RouteId: routeId!,
            ProductSizeId: productSizeId!,
            ProductColorId: productColorId!,
            ProductionSiteId: productionSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductStyleId: productStyleId!,
            ItemNumber: itemNumber!,
            IsActive: isActive!
          }
    );
  }
}
