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
import { ItemSpecificBillOfMaterialsHeaders } from './ItemSpecificBillOfMaterialsHeaders';

/**
 * Request builder class for operations supported on the {@link ItemSpecificBillOfMaterialsHeaders} entity.
 */
export class ItemSpecificBillOfMaterialsHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ItemSpecificBillOfMaterialsHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ItemSpecificBillOfMaterialsHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T> {
    return new GetAllRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemSpecificBillOfMaterialsHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemSpecificBillOfMaterialsHeaders`.
   */
  create(
    entity: ItemSpecificBillOfMaterialsHeaders<T>
  ): CreateRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T> {
    return new CreateRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemSpecificBillOfMaterialsHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.dataAreaId}.
   * @param bomId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.bomId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificBillOfMaterialsHeaders.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productConfigurationId}.
   * @param productSizeId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productSizeId}.
   * @param productStyleId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productStyleId}.
   * @returns A request builder for creating requests to retrieve one `ItemSpecificBillOfMaterialsHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>,
    manufacturedItemNumber: DeserializedType<T, 'Edm.String'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BOMId: bomId,
        ManufacturedItemNumber: manufacturedItemNumber,
        ProductionSiteId: productionSiteId,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemSpecificBillOfMaterialsHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemSpecificBillOfMaterialsHeaders`.
   */
  update(
    entity: ItemSpecificBillOfMaterialsHeaders<T>
  ): UpdateRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T> {
    return new UpdateRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificBillOfMaterialsHeaders`.
   * @param dataAreaId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.dataAreaId}.
   * @param bomId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.bomId}.
   * @param manufacturedItemNumber Key property. See {@link ItemSpecificBillOfMaterialsHeaders.manufacturedItemNumber}.
   * @param productionSiteId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productionSiteId}.
   * @param productColorId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productColorId}.
   * @param productConfigurationId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productConfigurationId}.
   * @param productSizeId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productSizeId}.
   * @param productStyleId Key property. See {@link ItemSpecificBillOfMaterialsHeaders.productStyleId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificBillOfMaterialsHeaders`.
   */
  delete(
    dataAreaId: string,
    bomId: string,
    manufacturedItemNumber: string,
    productionSiteId: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemSpecificBillOfMaterialsHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemSpecificBillOfMaterialsHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ItemSpecificBillOfMaterialsHeaders<T>
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bomId?: string,
    manufacturedItemNumber?: string,
    productionSiteId?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string
  ): DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T> {
    return new DeleteRequestBuilder<ItemSpecificBillOfMaterialsHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemSpecificBillOfMaterialsHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BOMId: bomId!,
            ManufacturedItemNumber: manufacturedItemNumber!,
            ProductionSiteId: productionSiteId!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!
          }
    );
  }
}
