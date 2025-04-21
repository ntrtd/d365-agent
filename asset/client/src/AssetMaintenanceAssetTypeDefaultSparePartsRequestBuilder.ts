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
import { AssetMaintenanceAssetTypeDefaultSpareParts } from './AssetMaintenanceAssetTypeDefaultSpareParts';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeDefaultSpareParts} entity.
 */
export class AssetMaintenanceAssetTypeDefaultSparePartsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeDefaultSpareParts<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeDefaultSpareParts` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeDefaultSpareParts` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetTypeDefaultSpareParts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSpareParts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeDefaultSpareParts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeDefaultSpareParts`.
   */
  create(
    entity: AssetMaintenanceAssetTypeDefaultSpareParts<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeDefaultSpareParts<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSpareParts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeDefaultSpareParts` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.modelId}.
   * @param itemId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.itemId}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeDefaultSpareParts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetTypeDefaultSpareParts<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSpareParts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ProductId: productId,
      ModelProductId: modelProductId,
      ModelId: modelId,
      ItemId: itemId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeDefaultSpareParts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeDefaultSpareParts`.
   */
  update(
    entity: AssetMaintenanceAssetTypeDefaultSpareParts<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeDefaultSpareParts<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSpareParts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaultSpareParts`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.modelId}.
   * @param itemId Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.itemId}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetTypeDefaultSpareParts.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaultSpareParts`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    modelProductId: string,
    modelId: string,
    itemId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaultSpareParts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaultSpareParts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaultSpareParts` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeDefaultSpareParts<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaultSpareParts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    modelId?: string,
    itemId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaultSpareParts<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSpareParts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeDefaultSpareParts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ModelProductId: modelProductId!,
            ModelId: modelId!,
            ItemId: itemId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
