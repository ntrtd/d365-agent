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
import { AssetMaintenanceFunctionalLocationRounds } from './AssetMaintenanceFunctionalLocationRounds';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceFunctionalLocationRounds} entity.
 */
export class AssetMaintenanceFunctionalLocationRoundsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceFunctionalLocationRounds<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceFunctionalLocationRounds` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceFunctionalLocationRounds` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceFunctionalLocationRounds<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceFunctionalLocationRounds<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceFunctionalLocationRounds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceFunctionalLocationRounds`.
   */
  create(
    entity: AssetMaintenanceFunctionalLocationRounds<T>
  ): CreateRequestBuilder<AssetMaintenanceFunctionalLocationRounds<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceFunctionalLocationRounds<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceFunctionalLocationRounds` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.modelId}.
   * @param roundId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.roundId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceFunctionalLocationRounds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    roundId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceFunctionalLocationRounds<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceFunctionalLocationRounds<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      FunctionalLocationId: functionalLocationId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ProductId: productId,
      ModelProductId: modelProductId,
      ModelId: modelId,
      RoundId: roundId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceFunctionalLocationRounds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceFunctionalLocationRounds`.
   */
  update(
    entity: AssetMaintenanceFunctionalLocationRounds<T>
  ): UpdateRequestBuilder<AssetMaintenanceFunctionalLocationRounds<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceFunctionalLocationRounds<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationRounds`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.modelId}.
   * @param roundId Key property. See {@link AssetMaintenanceFunctionalLocationRounds.roundId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationRounds`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    modelProductId: string,
    modelId: string,
    roundId: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationRounds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceFunctionalLocationRounds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceFunctionalLocationRounds` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceFunctionalLocationRounds<T>
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationRounds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    modelId?: string,
    roundId?: string
  ): DeleteRequestBuilder<AssetMaintenanceFunctionalLocationRounds<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceFunctionalLocationRounds<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceFunctionalLocationRounds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ModelProductId: modelProductId!,
            ModelId: modelId!,
            RoundId: roundId!
          }
    );
  }
}
