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
import { ProductNumberIdentifiedBarcodes } from './ProductNumberIdentifiedBarcodes';

/**
 * Request builder class for operations supported on the {@link ProductNumberIdentifiedBarcodes} entity.
 */
export class ProductNumberIdentifiedBarcodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductNumberIdentifiedBarcodes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductNumberIdentifiedBarcodes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductNumberIdentifiedBarcodes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T> {
    return new GetAllRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductNumberIdentifiedBarcodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductNumberIdentifiedBarcodes`.
   */
  create(
    entity: ProductNumberIdentifiedBarcodes<T>
  ): CreateRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T> {
    return new CreateRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductNumberIdentifiedBarcodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductNumberIdentifiedBarcodes.dataAreaId}.
   * @param productNumber Key property. See {@link ProductNumberIdentifiedBarcodes.productNumber}.
   * @param productQuantityUnitSymbol Key property. See {@link ProductNumberIdentifiedBarcodes.productQuantityUnitSymbol}.
   * @param barcodeSetupId Key property. See {@link ProductNumberIdentifiedBarcodes.barcodeSetupId}.
   * @param barcode Key property. See {@link ProductNumberIdentifiedBarcodes.barcode}.
   * @returns A request builder for creating requests to retrieve one `ProductNumberIdentifiedBarcodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    productQuantityUnitSymbol: DeserializedType<T, 'Edm.String'>,
    barcodeSetupId: DeserializedType<T, 'Edm.String'>,
    barcode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T> {
    return new GetByKeyRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductNumber: productNumber,
        ProductQuantityUnitSymbol: productQuantityUnitSymbol,
        BarcodeSetupId: barcodeSetupId,
        Barcode: barcode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductNumberIdentifiedBarcodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductNumberIdentifiedBarcodes`.
   */
  update(
    entity: ProductNumberIdentifiedBarcodes<T>
  ): UpdateRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T> {
    return new UpdateRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedBarcodes`.
   * @param dataAreaId Key property. See {@link ProductNumberIdentifiedBarcodes.dataAreaId}.
   * @param productNumber Key property. See {@link ProductNumberIdentifiedBarcodes.productNumber}.
   * @param productQuantityUnitSymbol Key property. See {@link ProductNumberIdentifiedBarcodes.productQuantityUnitSymbol}.
   * @param barcodeSetupId Key property. See {@link ProductNumberIdentifiedBarcodes.barcodeSetupId}.
   * @param barcode Key property. See {@link ProductNumberIdentifiedBarcodes.barcode}.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedBarcodes`.
   */
  delete(
    dataAreaId: string,
    productNumber: string,
    productQuantityUnitSymbol: string,
    barcodeSetupId: string,
    barcode: string
  ): DeleteRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedBarcodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedBarcodes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductNumberIdentifiedBarcodes<T>
  ): DeleteRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productNumber?: string,
    productQuantityUnitSymbol?: string,
    barcodeSetupId?: string,
    barcode?: string
  ): DeleteRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T> {
    return new DeleteRequestBuilder<ProductNumberIdentifiedBarcodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductNumberIdentifiedBarcodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductNumber: productNumber!,
            ProductQuantityUnitSymbol: productQuantityUnitSymbol!,
            BarcodeSetupId: barcodeSetupId!,
            Barcode: barcode!
          }
    );
  }
}
