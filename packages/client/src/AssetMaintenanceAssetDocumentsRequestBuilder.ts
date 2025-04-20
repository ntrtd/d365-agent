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
import { AssetMaintenanceAssetDocuments } from './AssetMaintenanceAssetDocuments';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetDocuments} entity.
 */
export class AssetMaintenanceAssetDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceAssetDocuments<T>, T> {
    return new GetAllRequestBuilder<AssetMaintenanceAssetDocuments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetDocuments`.
   */
  create(
    entity: AssetMaintenanceAssetDocuments<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetDocuments<T>, T> {
    return new CreateRequestBuilder<AssetMaintenanceAssetDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetDocuments` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetDocuments.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetDocuments.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetDocuments.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetDocuments.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetDocuments.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetDocuments.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetDocuments.maintenanceAssetId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceAssetDocuments.jobGroupId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetDocuments.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceAssetDocuments.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceAssetDocuments.jobTradeId}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetDocuments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    functionalLocationId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    productId: DeserializedType<T, 'Edm.String'>,
    modelProductId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetId: DeserializedType<T, 'Edm.String'>,
    jobGroupId: DeserializedType<T, 'Edm.String'>,
    jobTypeId: DeserializedType<T, 'Edm.String'>,
    jobVariantId: DeserializedType<T, 'Edm.String'>,
    jobTradeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetMaintenanceAssetDocuments<T>, T> {
    return new GetByKeyRequestBuilder<AssetMaintenanceAssetDocuments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FunctionalLocationId: functionalLocationId,
        MaintenanceAssetTypeId: maintenanceAssetTypeId,
        ProductId: productId,
        ModelProductId: modelProductId,
        ModelId: modelId,
        MaintenanceAssetId: maintenanceAssetId,
        JobGroupId: jobGroupId,
        JobTypeId: jobTypeId,
        JobVariantId: jobVariantId,
        JobTradeId: jobTradeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetDocuments`.
   */
  update(
    entity: AssetMaintenanceAssetDocuments<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetDocuments<T>, T> {
    return new UpdateRequestBuilder<AssetMaintenanceAssetDocuments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetDocuments`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetDocuments.dataAreaId}.
   * @param functionalLocationId Key property. See {@link AssetMaintenanceAssetDocuments.functionalLocationId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetDocuments.maintenanceAssetTypeId}.
   * @param productId Key property. See {@link AssetMaintenanceAssetDocuments.productId}.
   * @param modelProductId Key property. See {@link AssetMaintenanceAssetDocuments.modelProductId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetDocuments.modelId}.
   * @param maintenanceAssetId Key property. See {@link AssetMaintenanceAssetDocuments.maintenanceAssetId}.
   * @param jobGroupId Key property. See {@link AssetMaintenanceAssetDocuments.jobGroupId}.
   * @param jobTypeId Key property. See {@link AssetMaintenanceAssetDocuments.jobTypeId}.
   * @param jobVariantId Key property. See {@link AssetMaintenanceAssetDocuments.jobVariantId}.
   * @param jobTradeId Key property. See {@link AssetMaintenanceAssetDocuments.jobTradeId}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetDocuments`.
   */
  delete(
    dataAreaId: string,
    functionalLocationId: string,
    maintenanceAssetTypeId: string,
    productId: string,
    modelProductId: string,
    modelId: string,
    maintenanceAssetId: string,
    jobGroupId: string,
    jobTypeId: string,
    jobVariantId: string,
    jobTradeId: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetDocuments<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetDocuments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    functionalLocationId?: string,
    maintenanceAssetTypeId?: string,
    productId?: string,
    modelProductId?: string,
    modelId?: string,
    maintenanceAssetId?: string,
    jobGroupId?: string,
    jobTypeId?: string,
    jobVariantId?: string,
    jobTradeId?: string
  ): DeleteRequestBuilder<AssetMaintenanceAssetDocuments<T>, T> {
    return new DeleteRequestBuilder<AssetMaintenanceAssetDocuments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetDocuments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FunctionalLocationId: functionalLocationId!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ProductId: productId!,
            ModelProductId: modelProductId!,
            ModelId: modelId!,
            MaintenanceAssetId: maintenanceAssetId!,
            JobGroupId: jobGroupId!,
            JobTypeId: jobTypeId!,
            JobVariantId: jobVariantId!,
            JobTradeId: jobTradeId!
          }
    );
  }
}
