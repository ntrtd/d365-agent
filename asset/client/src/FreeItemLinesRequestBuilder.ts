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
import { FreeItemLines } from './FreeItemLines';

/**
 * Request builder class for operations supported on the {@link FreeItemLines} entity.
 */
export class FreeItemLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreeItemLines<T>, T> {
  /**
   * Returns a request builder for querying all `FreeItemLines` entities.
   * @returns A request builder for creating requests to retrieve all `FreeItemLines` entities.
   */
  getAll(): GetAllRequestBuilder<FreeItemLines<T>, T> {
    return new GetAllRequestBuilder<FreeItemLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FreeItemLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreeItemLines`.
   */
  create(entity: FreeItemLines<T>): CreateRequestBuilder<FreeItemLines<T>, T> {
    return new CreateRequestBuilder<FreeItemLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreeItemLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreeItemLines.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemLines.freeItemId}.
   * @param freeItemGroup Key property. See {@link FreeItemLines.freeItemGroup}.
   * @param productDisplayProductNumber Key property. See {@link FreeItemLines.productDisplayProductNumber}.
   * @param unitOfMeasureSymbol Key property. See {@link FreeItemLines.unitOfMeasureSymbol}.
   * @param inventSiteId Key property. See {@link FreeItemLines.inventSiteId}.
   * @param inventLocationId Key property. See {@link FreeItemLines.inventLocationId}.
   * @param variantDisplayProductNumber Key property. See {@link FreeItemLines.variantDisplayProductNumber}.
   * @returns A request builder for creating requests to retrieve one `FreeItemLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    freeItemId: DeserializedType<T, 'Edm.String'>,
    freeItemGroup: DeserializedType<T, 'Edm.Int32'>,
    productDisplayProductNumber: DeserializedType<T, 'Edm.String'>,
    unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>,
    inventSiteId: DeserializedType<T, 'Edm.String'>,
    inventLocationId: DeserializedType<T, 'Edm.String'>,
    variantDisplayProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FreeItemLines<T>, T> {
    return new GetByKeyRequestBuilder<FreeItemLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FreeItemId: freeItemId,
      FreeItemGroup: freeItemGroup,
      ProductDisplayProductNumber: productDisplayProductNumber,
      UnitOfMeasure_Symbol: unitOfMeasureSymbol,
      InventSiteId: inventSiteId,
      InventLocationId: inventLocationId,
      VariantDisplayProductNumber: variantDisplayProductNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FreeItemLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreeItemLines`.
   */
  update(entity: FreeItemLines<T>): UpdateRequestBuilder<FreeItemLines<T>, T> {
    return new UpdateRequestBuilder<FreeItemLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreeItemLines`.
   * @param dataAreaId Key property. See {@link FreeItemLines.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemLines.freeItemId}.
   * @param freeItemGroup Key property. See {@link FreeItemLines.freeItemGroup}.
   * @param productDisplayProductNumber Key property. See {@link FreeItemLines.productDisplayProductNumber}.
   * @param unitOfMeasureSymbol Key property. See {@link FreeItemLines.unitOfMeasureSymbol}.
   * @param inventSiteId Key property. See {@link FreeItemLines.inventSiteId}.
   * @param inventLocationId Key property. See {@link FreeItemLines.inventLocationId}.
   * @param variantDisplayProductNumber Key property. See {@link FreeItemLines.variantDisplayProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemLines`.
   */
  delete(
    dataAreaId: string,
    freeItemId: string,
    freeItemGroup: number,
    productDisplayProductNumber: string,
    unitOfMeasureSymbol: string,
    inventSiteId: string,
    inventLocationId: string,
    variantDisplayProductNumber: string
  ): DeleteRequestBuilder<FreeItemLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreeItemLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemLines` by taking the entity as a parameter.
   */
  delete(entity: FreeItemLines<T>): DeleteRequestBuilder<FreeItemLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    freeItemId?: string,
    freeItemGroup?: number,
    productDisplayProductNumber?: string,
    unitOfMeasureSymbol?: string,
    inventSiteId?: string,
    inventLocationId?: string,
    variantDisplayProductNumber?: string
  ): DeleteRequestBuilder<FreeItemLines<T>, T> {
    return new DeleteRequestBuilder<FreeItemLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreeItemLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FreeItemId: freeItemId!,
            FreeItemGroup: freeItemGroup!,
            ProductDisplayProductNumber: productDisplayProductNumber!,
            UnitOfMeasure_Symbol: unitOfMeasureSymbol!,
            InventSiteId: inventSiteId!,
            InventLocationId: inventLocationId!,
            VariantDisplayProductNumber: variantDisplayProductNumber!
          }
    );
  }
}
