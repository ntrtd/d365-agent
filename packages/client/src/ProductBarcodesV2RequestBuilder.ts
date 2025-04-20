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
import { ProductBarcodesV2 } from './ProductBarcodesV2';

/**
 * Request builder class for operations supported on the {@link ProductBarcodesV2} entity.
 */
export class ProductBarcodesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductBarcodesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductBarcodesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductBarcodesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductBarcodesV2<T>, T> {
    return new GetAllRequestBuilder<ProductBarcodesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductBarcodesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductBarcodesV2`.
   */
  create(
    entity: ProductBarcodesV2<T>
  ): CreateRequestBuilder<ProductBarcodesV2<T>, T> {
    return new CreateRequestBuilder<ProductBarcodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductBarcodesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductBarcodesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductBarcodesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link ProductBarcodesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductBarcodesV2.productColorId}.
   * @param productSizeId Key property. See {@link ProductBarcodesV2.productSizeId}.
   * @param productStyleId Key property. See {@link ProductBarcodesV2.productStyleId}.
   * @param productVersionId Key property. See {@link ProductBarcodesV2.productVersionId}.
   * @param productQuantityUnitSymbol Key property. See {@link ProductBarcodesV2.productQuantityUnitSymbol}.
   * @param barcodeSetupId Key property. See {@link ProductBarcodesV2.barcodeSetupId}.
   * @param barcode Key property. See {@link ProductBarcodesV2.barcode}.
   * @returns A request builder for creating requests to retrieve one `ProductBarcodesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    productQuantityUnitSymbol: DeserializedType<T, 'Edm.String'>,
    barcodeSetupId: DeserializedType<T, 'Edm.String'>,
    barcode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductBarcodesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductBarcodesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductVersionId: productVersionId,
      ProductQuantityUnitSymbol: productQuantityUnitSymbol,
      BarcodeSetupId: barcodeSetupId,
      Barcode: barcode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductBarcodesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductBarcodesV2`.
   */
  update(
    entity: ProductBarcodesV2<T>
  ): UpdateRequestBuilder<ProductBarcodesV2<T>, T> {
    return new UpdateRequestBuilder<ProductBarcodesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductBarcodesV2`.
   * @param dataAreaId Key property. See {@link ProductBarcodesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductBarcodesV2.itemNumber}.
   * @param productConfigurationId Key property. See {@link ProductBarcodesV2.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductBarcodesV2.productColorId}.
   * @param productSizeId Key property. See {@link ProductBarcodesV2.productSizeId}.
   * @param productStyleId Key property. See {@link ProductBarcodesV2.productStyleId}.
   * @param productVersionId Key property. See {@link ProductBarcodesV2.productVersionId}.
   * @param productQuantityUnitSymbol Key property. See {@link ProductBarcodesV2.productQuantityUnitSymbol}.
   * @param barcodeSetupId Key property. See {@link ProductBarcodesV2.barcodeSetupId}.
   * @param barcode Key property. See {@link ProductBarcodesV2.barcode}.
   * @returns A request builder for creating requests that delete an entity of type `ProductBarcodesV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    productQuantityUnitSymbol: string,
    barcodeSetupId: string,
    barcode: string
  ): DeleteRequestBuilder<ProductBarcodesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductBarcodesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductBarcodesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductBarcodesV2<T>
  ): DeleteRequestBuilder<ProductBarcodesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    productQuantityUnitSymbol?: string,
    barcodeSetupId?: string,
    barcode?: string
  ): DeleteRequestBuilder<ProductBarcodesV2<T>, T> {
    return new DeleteRequestBuilder<ProductBarcodesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductBarcodesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            ProductQuantityUnitSymbol: productQuantityUnitSymbol!,
            BarcodeSetupId: barcodeSetupId!,
            Barcode: barcode!
          }
    );
  }
}
