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
import { RetailInventItemBarcode } from './RetailInventItemBarcode';

/**
 * Request builder class for operations supported on the {@link RetailInventItemBarcode} entity.
 */
export class RetailInventItemBarcodeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInventItemBarcode<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInventItemBarcode` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInventItemBarcode` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInventItemBarcode<T>, T> {
    return new GetAllRequestBuilder<RetailInventItemBarcode<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInventItemBarcode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInventItemBarcode`.
   */
  create(
    entity: RetailInventItemBarcode<T>
  ): CreateRequestBuilder<RetailInventItemBarcode<T>, T> {
    return new CreateRequestBuilder<RetailInventItemBarcode<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInventItemBarcode` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInventItemBarcode.dataAreaId}.
   * @param barcodeSetupId Key property. See {@link RetailInventItemBarcode.barcodeSetupId}.
   * @param inventDimId Key property. See {@link RetailInventItemBarcode.inventDimId}.
   * @param itemId Key property. See {@link RetailInventItemBarcode.itemId}.
   * @param itemBarCode Key property. See {@link RetailInventItemBarcode.itemBarCode}.
   * @param retailVariantId Key property. See {@link RetailInventItemBarcode.retailVariantId}.
   * @param unitId Key property. See {@link RetailInventItemBarcode.unitId}.
   * @returns A request builder for creating requests to retrieve one `RetailInventItemBarcode` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    barcodeSetupId: DeserializedType<T, 'Edm.String'>,
    inventDimId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    itemBarCode: DeserializedType<T, 'Edm.String'>,
    retailVariantId: DeserializedType<T, 'Edm.String'>,
    unitId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInventItemBarcode<T>, T> {
    return new GetByKeyRequestBuilder<RetailInventItemBarcode<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        barcodeSetupId: barcodeSetupId,
        inventDimId: inventDimId,
        itemId: itemId,
        itemBarCode: itemBarCode,
        RetailVariantId: retailVariantId,
        UnitID: unitId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInventItemBarcode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInventItemBarcode`.
   */
  update(
    entity: RetailInventItemBarcode<T>
  ): UpdateRequestBuilder<RetailInventItemBarcode<T>, T> {
    return new UpdateRequestBuilder<RetailInventItemBarcode<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInventItemBarcode`.
   * @param dataAreaId Key property. See {@link RetailInventItemBarcode.dataAreaId}.
   * @param barcodeSetupId Key property. See {@link RetailInventItemBarcode.barcodeSetupId}.
   * @param inventDimId Key property. See {@link RetailInventItemBarcode.inventDimId}.
   * @param itemId Key property. See {@link RetailInventItemBarcode.itemId}.
   * @param itemBarCode Key property. See {@link RetailInventItemBarcode.itemBarCode}.
   * @param retailVariantId Key property. See {@link RetailInventItemBarcode.retailVariantId}.
   * @param unitId Key property. See {@link RetailInventItemBarcode.unitId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventItemBarcode`.
   */
  delete(
    dataAreaId: string,
    barcodeSetupId: string,
    inventDimId: string,
    itemId: string,
    itemBarCode: string,
    retailVariantId: string,
    unitId: string
  ): DeleteRequestBuilder<RetailInventItemBarcode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInventItemBarcode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventItemBarcode` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInventItemBarcode<T>
  ): DeleteRequestBuilder<RetailInventItemBarcode<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    barcodeSetupId?: string,
    inventDimId?: string,
    itemId?: string,
    itemBarCode?: string,
    retailVariantId?: string,
    unitId?: string
  ): DeleteRequestBuilder<RetailInventItemBarcode<T>, T> {
    return new DeleteRequestBuilder<RetailInventItemBarcode<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInventItemBarcode
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            barcodeSetupId: barcodeSetupId!,
            inventDimId: inventDimId!,
            itemId: itemId!,
            itemBarCode: itemBarCode!,
            RetailVariantId: retailVariantId!,
            UnitID: unitId!
          }
    );
  }
}
