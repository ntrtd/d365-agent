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
import { AssetMaintenanceAssetTypeDefaultSparePartsV2 } from './AssetMaintenanceAssetTypeDefaultSparePartsV2';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceAssetTypeDefaultSparePartsV2} entity.
 */
export class AssetMaintenanceAssetTypeDefaultSparePartsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceAssetTypeDefaultSparePartsV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceAssetTypeDefaultSparePartsV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceAssetTypeDefaultSparePartsV2` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceAssetTypeDefaultSparePartsV2<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceAssetTypeDefaultSparePartsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceAssetTypeDefaultSparePartsV2`.
   */
  create(
    entity: AssetMaintenanceAssetTypeDefaultSparePartsV2<T>
  ): CreateRequestBuilder<AssetMaintenanceAssetTypeDefaultSparePartsV2<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceAssetTypeDefaultSparePartsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.maintenanceAssetTypeId}.
   * @param manufacturerId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.manufacturerId}.
   * @param manufacturerModelId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.manufacturerModelId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.modelId}.
   * @param productNumber Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.productNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.validTo}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceAssetTypeDefaultSparePartsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maintenanceAssetTypeId: DeserializedType<T, 'Edm.String'>,
    manufacturerId: DeserializedType<T, 'Edm.String'>,
    manufacturerModelId: DeserializedType<T, 'Edm.String'>,
    modelId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<
    AssetMaintenanceAssetTypeDefaultSparePartsV2<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MaintenanceAssetTypeId: maintenanceAssetTypeId,
      ManufacturerId: manufacturerId,
      ManufacturerModelId: manufacturerModelId,
      ModelId: modelId,
      ProductNumber: productNumber,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceAssetTypeDefaultSparePartsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceAssetTypeDefaultSparePartsV2`.
   */
  update(
    entity: AssetMaintenanceAssetTypeDefaultSparePartsV2<T>
  ): UpdateRequestBuilder<AssetMaintenanceAssetTypeDefaultSparePartsV2<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaultSparePartsV2`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.dataAreaId}.
   * @param maintenanceAssetTypeId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.maintenanceAssetTypeId}.
   * @param manufacturerId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.manufacturerId}.
   * @param manufacturerModelId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.manufacturerModelId}.
   * @param modelId Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.modelId}.
   * @param productNumber Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.productNumber}.
   * @param validFrom Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.validFrom}.
   * @param validTo Key property. See {@link AssetMaintenanceAssetTypeDefaultSparePartsV2.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaultSparePartsV2`.
   */
  delete(
    dataAreaId: string,
    maintenanceAssetTypeId: string,
    manufacturerId: string,
    manufacturerModelId: string,
    modelId: string,
    productNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaultSparePartsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceAssetTypeDefaultSparePartsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceAssetTypeDefaultSparePartsV2` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceAssetTypeDefaultSparePartsV2<T>
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaultSparePartsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maintenanceAssetTypeId?: string,
    manufacturerId?: string,
    manufacturerModelId?: string,
    modelId?: string,
    productNumber?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<AssetMaintenanceAssetTypeDefaultSparePartsV2<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceAssetTypeDefaultSparePartsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceAssetTypeDefaultSparePartsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaintenanceAssetTypeId: maintenanceAssetTypeId!,
            ManufacturerId: manufacturerId!,
            ManufacturerModelId: manufacturerModelId!,
            ModelId: modelId!,
            ProductNumber: productNumber!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
