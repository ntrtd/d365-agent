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
import { InventorySiteOnHandIncludingCatchWeightItems } from './InventorySiteOnHandIncludingCatchWeightItems';

/**
 * Request builder class for operations supported on the {@link InventorySiteOnHandIncludingCatchWeightItems} entity.
 */
export class InventorySiteOnHandIncludingCatchWeightItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventorySiteOnHandIncludingCatchWeightItems<T>, T> {
  /**
   * Returns a request builder for querying all `InventorySiteOnHandIncludingCatchWeightItems` entities.
   * @returns A request builder for creating requests to retrieve all `InventorySiteOnHandIncludingCatchWeightItems` entities.
   */
  getAll(): GetAllRequestBuilder<
    InventorySiteOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InventorySiteOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventorySiteOnHandIncludingCatchWeightItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventorySiteOnHandIncludingCatchWeightItems`.
   */
  create(
    entity: InventorySiteOnHandIncludingCatchWeightItems<T>
  ): CreateRequestBuilder<InventorySiteOnHandIncludingCatchWeightItems<T>, T> {
    return new CreateRequestBuilder<
      InventorySiteOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventorySiteOnHandIncludingCatchWeightItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.dataAreaId}.
   * @param itemNumber Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.itemNumber}.
   * @param productColorId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productColorId}.
   * @param productConfigurationId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productConfigurationId}.
   * @param productSizeId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productSizeId}.
   * @param productStyleId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productStyleId}.
   * @param productVersionId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.inventorySiteId}.
   * @returns A request builder for creating requests to retrieve one `InventorySiteOnHandIncludingCatchWeightItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    InventorySiteOnHandIncludingCatchWeightItems<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      InventorySiteOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      ProductColorId: productColorId,
      ProductConfigurationId: productConfigurationId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      InventorySiteId: inventorySiteId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventorySiteOnHandIncludingCatchWeightItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventorySiteOnHandIncludingCatchWeightItems`.
   */
  update(
    entity: InventorySiteOnHandIncludingCatchWeightItems<T>
  ): UpdateRequestBuilder<InventorySiteOnHandIncludingCatchWeightItems<T>, T> {
    return new UpdateRequestBuilder<
      InventorySiteOnHandIncludingCatchWeightItems<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventorySiteOnHandIncludingCatchWeightItems`.
   * @param dataAreaId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.dataAreaId}.
   * @param itemNumber Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.itemNumber}.
   * @param productColorId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productColorId}.
   * @param productConfigurationId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productConfigurationId}.
   * @param productSizeId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productSizeId}.
   * @param productStyleId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productStyleId}.
   * @param productVersionId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventorySiteOnHandIncludingCatchWeightItems.inventorySiteId}.
   * @returns A request builder for creating requests that delete an entity of type `InventorySiteOnHandIncludingCatchWeightItems`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    inventorySiteId: string
  ): DeleteRequestBuilder<InventorySiteOnHandIncludingCatchWeightItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventorySiteOnHandIncludingCatchWeightItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventorySiteOnHandIncludingCatchWeightItems` by taking the entity as a parameter.
   */
  delete(
    entity: InventorySiteOnHandIncludingCatchWeightItems<T>
  ): DeleteRequestBuilder<InventorySiteOnHandIncludingCatchWeightItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    inventorySiteId?: string
  ): DeleteRequestBuilder<InventorySiteOnHandIncludingCatchWeightItems<T>, T> {
    return new DeleteRequestBuilder<
      InventorySiteOnHandIncludingCatchWeightItems<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventorySiteOnHandIncludingCatchWeightItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            InventorySiteId: inventorySiteId!
          }
    );
  }
}
