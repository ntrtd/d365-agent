/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { KittingKitVersions } from './KittingKitVersions';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link KittingKitVersions} entity.
 */
export class KittingKitVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KittingKitVersions<T>, T> {
  /**
   * Returns a request builder for querying all `KittingKitVersions` entities.
   * @returns A request builder for creating requests to retrieve all `KittingKitVersions` entities.
   */
  getAll(): GetAllRequestBuilder<KittingKitVersions<T>, T> {
    return new GetAllRequestBuilder<KittingKitVersions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KittingKitVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KittingKitVersions`.
   */
  create(
    entity: KittingKitVersions<T>
  ): CreateRequestBuilder<KittingKitVersions<T>, T> {
    return new CreateRequestBuilder<KittingKitVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KittingKitVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link KittingKitVersions.dataAreaId}.
   * @param kitItemNumber Key property. See {@link KittingKitVersions.kitItemNumber}.
   * @param kitId Key property. See {@link KittingKitVersions.kitId}.
   * @param productionSiteId Key property. See {@link KittingKitVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link KittingKitVersions.productConfigurationId}.
   * @param productColorId Key property. See {@link KittingKitVersions.productColorId}.
   * @param productSizeId Key property. See {@link KittingKitVersions.productSizeId}.
   * @param productStyleId Key property. See {@link KittingKitVersions.productStyleId}.
   * @param isActive Key property. See {@link KittingKitVersions.isActive}.
   * @param validFromDate Key property. See {@link KittingKitVersions.validFromDate}.
   * @returns A request builder for creating requests to retrieve one `KittingKitVersions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    kitItemNumber: DeserializedType<T, 'Edm.String'>,
    kitId: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    isActive: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>,
    validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<KittingKitVersions<T>, T> {
    return new GetByKeyRequestBuilder<KittingKitVersions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        KitItemNumber: kitItemNumber,
        KitId: kitId,
        ProductionSiteId: productionSiteId,
        ProductConfigurationId: productConfigurationId,
        ProductColorId: productColorId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        IsActive: isActive,
        ValidFromDate: validFromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `KittingKitVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KittingKitVersions`.
   */
  update(
    entity: KittingKitVersions<T>
  ): UpdateRequestBuilder<KittingKitVersions<T>, T> {
    return new UpdateRequestBuilder<KittingKitVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KittingKitVersions`.
   * @param dataAreaId Key property. See {@link KittingKitVersions.dataAreaId}.
   * @param kitItemNumber Key property. See {@link KittingKitVersions.kitItemNumber}.
   * @param kitId Key property. See {@link KittingKitVersions.kitId}.
   * @param productionSiteId Key property. See {@link KittingKitVersions.productionSiteId}.
   * @param productConfigurationId Key property. See {@link KittingKitVersions.productConfigurationId}.
   * @param productColorId Key property. See {@link KittingKitVersions.productColorId}.
   * @param productSizeId Key property. See {@link KittingKitVersions.productSizeId}.
   * @param productStyleId Key property. See {@link KittingKitVersions.productStyleId}.
   * @param isActive Key property. See {@link KittingKitVersions.isActive}.
   * @param validFromDate Key property. See {@link KittingKitVersions.validFromDate}.
   * @returns A request builder for creating requests that delete an entity of type `KittingKitVersions`.
   */
  delete(
    dataAreaId: string,
    kitItemNumber: string,
    kitId: string,
    productionSiteId: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    isActive: NoYes,
    validFromDate: Moment
  ): DeleteRequestBuilder<KittingKitVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KittingKitVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KittingKitVersions` by taking the entity as a parameter.
   */
  delete(
    entity: KittingKitVersions<T>
  ): DeleteRequestBuilder<KittingKitVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    kitItemNumber?: string,
    kitId?: string,
    productionSiteId?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    isActive?: NoYes,
    validFromDate?: Moment
  ): DeleteRequestBuilder<KittingKitVersions<T>, T> {
    return new DeleteRequestBuilder<KittingKitVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof KittingKitVersions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            KitItemNumber: kitItemNumber!,
            KitId: kitId!,
            ProductionSiteId: productionSiteId!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            IsActive: isActive!,
            ValidFromDate: validFromDate!
          }
    );
  }
}
