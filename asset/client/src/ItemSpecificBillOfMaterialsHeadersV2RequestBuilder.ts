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
import { ItemSpecificBillOfMaterialsHeadersV2 } from './ItemSpecificBillOfMaterialsHeadersV2';

/**
 * Request builder class for operations supported on the {@link ItemSpecificBillOfMaterialsHeadersV2} entity.
 */
export class ItemSpecificBillOfMaterialsHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `ItemSpecificBillOfMaterialsHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `ItemSpecificBillOfMaterialsHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T> {
    return new GetAllRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemSpecificBillOfMaterialsHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemSpecificBillOfMaterialsHeadersV2`.
   */
  create(
    entity: ItemSpecificBillOfMaterialsHeadersV2<T>
  ): CreateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T> {
    return new CreateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemSpecificBillOfMaterialsHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.dataAreaId}.
   * @param bomId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.bomId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productSizeId}.
   * @param productStyleId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productStyleId}.
   * @param productVersionId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productVersionId}.
   * @returns A request builder for creating requests to retrieve one `ItemSpecificBillOfMaterialsHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>,
    manufacturedItemNumber: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<
      ItemSpecificBillOfMaterialsHeadersV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BOMId: bomId,
      ManufacturedItemNumber: manufacturedItemNumber,
      ProductionSiteId: productionSiteId,
      ProductColorId: productColorId,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemSpecificBillOfMaterialsHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemSpecificBillOfMaterialsHeadersV2`.
   */
  update(
    entity: ItemSpecificBillOfMaterialsHeadersV2<T>
  ): UpdateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T> {
    return new UpdateRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificBillOfMaterialsHeadersV2`.
   * @param dataAreaId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.dataAreaId}.
   * @param bomId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.bomId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productSizeId}.
   * @param productStyleId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productStyleId}.
   * @param productVersionId Key property. See {@link ItemSpecificBillOfMaterialsHeadersV2.productVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificBillOfMaterialsHeadersV2`.
   */
  delete(
    dataAreaId: string,
    bomId: string,
    manufacturedItemNumber: string,
    productionSiteId: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificBillOfMaterialsHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificBillOfMaterialsHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: ItemSpecificBillOfMaterialsHeadersV2<T>
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bomId?: string,
    manufacturedItemNumber?: string,
    productionSiteId?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T> {
    return new DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemSpecificBillOfMaterialsHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BOMId: bomId!,
            ManufacturedItemNumber: manufacturedItemNumber!,
            ProductionSiteId: productionSiteId!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!
          }
    );
  }
}
