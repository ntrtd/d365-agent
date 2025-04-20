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
import { ProductBarcodes } from './ProductBarcodes';

/**
 * Request builder class for operations supported on the {@link ProductBarcodes} entity.
 */
export class ProductBarcodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductBarcodes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductBarcodes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductBarcodes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductBarcodes<T>, T> {
    return new GetAllRequestBuilder<ProductBarcodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductBarcodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductBarcodes`.
   */
  create(
    entity: ProductBarcodes<T>
  ): CreateRequestBuilder<ProductBarcodes<T>, T> {
    return new CreateRequestBuilder<ProductBarcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductBarcodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductBarcodes.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductBarcodes.itemNumber}.
   * @param productConfigurationId Key property. See {@link ProductBarcodes.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductBarcodes.productColorId}.
   * @param productSizeId Key property. See {@link ProductBarcodes.productSizeId}.
   * @param productStyleId Key property. See {@link ProductBarcodes.productStyleId}.
   * @param productQuantityUnitSymbol Key property. See {@link ProductBarcodes.productQuantityUnitSymbol}.
   * @param barcodeSetupId Key property. See {@link ProductBarcodes.barcodeSetupId}.
   * @param barcode Key property. See {@link ProductBarcodes.barcode}.
   * @returns A request builder for creating requests to retrieve one `ProductBarcodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productQuantityUnitSymbol: DeserializedType<T, 'Edm.String'>,
    barcodeSetupId: DeserializedType<T, 'Edm.String'>,
    barcode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductBarcodes<T>, T> {
    return new GetByKeyRequestBuilder<ProductBarcodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      ProductConfigurationId: productConfigurationId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductQuantityUnitSymbol: productQuantityUnitSymbol,
      BarcodeSetupId: barcodeSetupId,
      Barcode: barcode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductBarcodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductBarcodes`.
   */
  update(
    entity: ProductBarcodes<T>
  ): UpdateRequestBuilder<ProductBarcodes<T>, T> {
    return new UpdateRequestBuilder<ProductBarcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductBarcodes`.
   * @param dataAreaId Key property. See {@link ProductBarcodes.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductBarcodes.itemNumber}.
   * @param productConfigurationId Key property. See {@link ProductBarcodes.productConfigurationId}.
   * @param productColorId Key property. See {@link ProductBarcodes.productColorId}.
   * @param productSizeId Key property. See {@link ProductBarcodes.productSizeId}.
   * @param productStyleId Key property. See {@link ProductBarcodes.productStyleId}.
   * @param productQuantityUnitSymbol Key property. See {@link ProductBarcodes.productQuantityUnitSymbol}.
   * @param barcodeSetupId Key property. See {@link ProductBarcodes.barcodeSetupId}.
   * @param barcode Key property. See {@link ProductBarcodes.barcode}.
   * @returns A request builder for creating requests that delete an entity of type `ProductBarcodes`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productConfigurationId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productQuantityUnitSymbol: string,
    barcodeSetupId: string,
    barcode: string
  ): DeleteRequestBuilder<ProductBarcodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductBarcodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductBarcodes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductBarcodes<T>
  ): DeleteRequestBuilder<ProductBarcodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productConfigurationId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productQuantityUnitSymbol?: string,
    barcodeSetupId?: string,
    barcode?: string
  ): DeleteRequestBuilder<ProductBarcodes<T>, T> {
    return new DeleteRequestBuilder<ProductBarcodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductBarcodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductConfigurationId: productConfigurationId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductQuantityUnitSymbol: productQuantityUnitSymbol!,
            BarcodeSetupId: barcodeSetupId!,
            Barcode: barcode!
          }
    );
  }
}
