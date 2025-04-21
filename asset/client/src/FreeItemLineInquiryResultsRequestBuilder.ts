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
import { FreeItemLineInquiryResults } from './FreeItemLineInquiryResults';

/**
 * Request builder class for operations supported on the {@link FreeItemLineInquiryResults} entity.
 */
export class FreeItemLineInquiryResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreeItemLineInquiryResults<T>, T> {
  /**
   * Returns a request builder for querying all `FreeItemLineInquiryResults` entities.
   * @returns A request builder for creating requests to retrieve all `FreeItemLineInquiryResults` entities.
   */
  getAll(): GetAllRequestBuilder<FreeItemLineInquiryResults<T>, T> {
    return new GetAllRequestBuilder<FreeItemLineInquiryResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FreeItemLineInquiryResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreeItemLineInquiryResults`.
   */
  create(
    entity: FreeItemLineInquiryResults<T>
  ): CreateRequestBuilder<FreeItemLineInquiryResults<T>, T> {
    return new CreateRequestBuilder<FreeItemLineInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreeItemLineInquiryResults` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreeItemLineInquiryResults.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemLineInquiryResults.freeItemId}.
   * @param freeItemGroup Key property. See {@link FreeItemLineInquiryResults.freeItemGroup}.
   * @param productDisplayProductNumber Key property. See {@link FreeItemLineInquiryResults.productDisplayProductNumber}.
   * @param pSymbol Key property. See {@link FreeItemLineInquiryResults.symbol}.
   * @param inventSiteId Key property. See {@link FreeItemLineInquiryResults.inventSiteId}.
   * @param inventLocationId Key property. See {@link FreeItemLineInquiryResults.inventLocationId}.
   * @param variantDisplayProductNumber Key property. See {@link FreeItemLineInquiryResults.variantDisplayProductNumber}.
   * @returns A request builder for creating requests to retrieve one `FreeItemLineInquiryResults` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    freeItemId: DeserializedType<T, 'Edm.String'>,
    freeItemGroup: DeserializedType<T, 'Edm.Int32'>,
    productDisplayProductNumber: DeserializedType<T, 'Edm.String'>,
    pSymbol: DeserializedType<T, 'Edm.String'>,
    inventSiteId: DeserializedType<T, 'Edm.String'>,
    inventLocationId: DeserializedType<T, 'Edm.String'>,
    variantDisplayProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FreeItemLineInquiryResults<T>, T> {
    return new GetByKeyRequestBuilder<FreeItemLineInquiryResults<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FreeItemId: freeItemId,
        FreeItemGroup: freeItemGroup,
        ProductDisplayProductNumber: productDisplayProductNumber,
        Symbol: pSymbol,
        InventSiteId: inventSiteId,
        InventLocationId: inventLocationId,
        VariantDisplayProductNumber: variantDisplayProductNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreeItemLineInquiryResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreeItemLineInquiryResults`.
   */
  update(
    entity: FreeItemLineInquiryResults<T>
  ): UpdateRequestBuilder<FreeItemLineInquiryResults<T>, T> {
    return new UpdateRequestBuilder<FreeItemLineInquiryResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreeItemLineInquiryResults`.
   * @param dataAreaId Key property. See {@link FreeItemLineInquiryResults.dataAreaId}.
   * @param freeItemId Key property. See {@link FreeItemLineInquiryResults.freeItemId}.
   * @param freeItemGroup Key property. See {@link FreeItemLineInquiryResults.freeItemGroup}.
   * @param productDisplayProductNumber Key property. See {@link FreeItemLineInquiryResults.productDisplayProductNumber}.
   * @param pSymbol Key property. See {@link FreeItemLineInquiryResults.symbol}.
   * @param inventSiteId Key property. See {@link FreeItemLineInquiryResults.inventSiteId}.
   * @param inventLocationId Key property. See {@link FreeItemLineInquiryResults.inventLocationId}.
   * @param variantDisplayProductNumber Key property. See {@link FreeItemLineInquiryResults.variantDisplayProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemLineInquiryResults`.
   */
  delete(
    dataAreaId: string,
    freeItemId: string,
    freeItemGroup: number,
    productDisplayProductNumber: string,
    pSymbol: string,
    inventSiteId: string,
    inventLocationId: string,
    variantDisplayProductNumber: string
  ): DeleteRequestBuilder<FreeItemLineInquiryResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreeItemLineInquiryResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreeItemLineInquiryResults` by taking the entity as a parameter.
   */
  delete(
    entity: FreeItemLineInquiryResults<T>
  ): DeleteRequestBuilder<FreeItemLineInquiryResults<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    freeItemId?: string,
    freeItemGroup?: number,
    productDisplayProductNumber?: string,
    pSymbol?: string,
    inventSiteId?: string,
    inventLocationId?: string,
    variantDisplayProductNumber?: string
  ): DeleteRequestBuilder<FreeItemLineInquiryResults<T>, T> {
    return new DeleteRequestBuilder<FreeItemLineInquiryResults<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreeItemLineInquiryResults
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FreeItemId: freeItemId!,
            FreeItemGroup: freeItemGroup!,
            ProductDisplayProductNumber: productDisplayProductNumber!,
            Symbol: pSymbol!,
            InventSiteId: inventSiteId!,
            InventLocationId: inventLocationId!,
            VariantDisplayProductNumber: variantDisplayProductNumber!
          }
    );
  }
}
