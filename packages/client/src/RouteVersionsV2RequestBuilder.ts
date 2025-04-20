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
import { RouteVersionsV2 } from './RouteVersionsV2';

/**
 * Request builder class for operations supported on the {@link RouteVersionsV2} entity.
 */
export class RouteVersionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteVersionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `RouteVersionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `RouteVersionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<RouteVersionsV2<T>, T> {
    return new GetAllRequestBuilder<RouteVersionsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RouteVersionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteVersionsV2`.
   */
  create(
    entity: RouteVersionsV2<T>
  ): CreateRequestBuilder<RouteVersionsV2<T>, T> {
    return new CreateRequestBuilder<RouteVersionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RouteVersionsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link RouteVersionsV2.dataAreaId}.
   * @param validFromQuantity Key property. See {@link RouteVersionsV2.validFromQuantity}.
   * @param validFromDate Key property. See {@link RouteVersionsV2.validFromDate}.
   * @param routeId Key property. See {@link RouteVersionsV2.routeId}.
   * @param productSizeId Key property. See {@link RouteVersionsV2.productSizeId}.
   * @param productColorId Key property. See {@link RouteVersionsV2.productColorId}.
   * @param productionSiteId Key property. See {@link RouteVersionsV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link RouteVersionsV2.productConfigurationId}.
   * @param productStyleId Key property. See {@link RouteVersionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link RouteVersionsV2.productVersionId}.
   * @param itemNumber Key property. See {@link RouteVersionsV2.itemNumber}.
   * @param isActive Key property. See {@link RouteVersionsV2.isActive}.
   * @returns A request builder for creating requests to retrieve one `RouteVersionsV2` entity based on its keys.
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
    productVersionId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RouteVersionsV2<T>, T> {
    return new GetByKeyRequestBuilder<RouteVersionsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ValidFromQuantity: validFromQuantity,
      ValidFromDate: validFromDate,
      RouteId: routeId,
      ProductSizeId: productSizeId,
      ProductColorId: productColorId,
      ProductionSiteId: productionSiteId,
      ProductConfigurationId: productConfigurationId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      ItemNumber: itemNumber,
      IsActive: isActive
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RouteVersionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteVersionsV2`.
   */
  update(
    entity: RouteVersionsV2<T>
  ): UpdateRequestBuilder<RouteVersionsV2<T>, T> {
    return new UpdateRequestBuilder<RouteVersionsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteVersionsV2`.
   * @param dataAreaId Key property. See {@link RouteVersionsV2.dataAreaId}.
   * @param validFromQuantity Key property. See {@link RouteVersionsV2.validFromQuantity}.
   * @param validFromDate Key property. See {@link RouteVersionsV2.validFromDate}.
   * @param routeId Key property. See {@link RouteVersionsV2.routeId}.
   * @param productSizeId Key property. See {@link RouteVersionsV2.productSizeId}.
   * @param productColorId Key property. See {@link RouteVersionsV2.productColorId}.
   * @param productionSiteId Key property. See {@link RouteVersionsV2.productionSiteId}.
   * @param productConfigurationId Key property. See {@link RouteVersionsV2.productConfigurationId}.
   * @param productStyleId Key property. See {@link RouteVersionsV2.productStyleId}.
   * @param productVersionId Key property. See {@link RouteVersionsV2.productVersionId}.
   * @param itemNumber Key property. See {@link RouteVersionsV2.itemNumber}.
   * @param isActive Key property. See {@link RouteVersionsV2.isActive}.
   * @returns A request builder for creating requests that delete an entity of type `RouteVersionsV2`.
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
    productVersionId: string,
    itemNumber: string,
    isActive: number
  ): DeleteRequestBuilder<RouteVersionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteVersionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteVersionsV2` by taking the entity as a parameter.
   */
  delete(
    entity: RouteVersionsV2<T>
  ): DeleteRequestBuilder<RouteVersionsV2<T>, T>;
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
    productVersionId?: string,
    itemNumber?: string,
    isActive?: number
  ): DeleteRequestBuilder<RouteVersionsV2<T>, T> {
    return new DeleteRequestBuilder<RouteVersionsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RouteVersionsV2
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
            ProductVersionId: productVersionId!,
            ItemNumber: itemNumber!,
            IsActive: isActive!
          }
    );
  }
}
