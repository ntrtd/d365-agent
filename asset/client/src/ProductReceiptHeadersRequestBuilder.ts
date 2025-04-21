/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ProductReceiptHeaders } from './ProductReceiptHeaders';

/**
 * Request builder class for operations supported on the {@link ProductReceiptHeaders} entity.
 */
export class ProductReceiptHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReceiptHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReceiptHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReceiptHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReceiptHeaders<T>, T> {
    return new GetAllRequestBuilder<ProductReceiptHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductReceiptHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReceiptHeaders`.
   */
  create(
    entity: ProductReceiptHeaders<T>
  ): CreateRequestBuilder<ProductReceiptHeaders<T>, T> {
    return new CreateRequestBuilder<ProductReceiptHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReceiptHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductReceiptHeaders.dataAreaId}.
   * @param recordId Key property. See {@link ProductReceiptHeaders.recordId}.
   * @returns A request builder for creating requests to retrieve one `ProductReceiptHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProductReceiptHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProductReceiptHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReceiptHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReceiptHeaders`.
   */
  update(
    entity: ProductReceiptHeaders<T>
  ): UpdateRequestBuilder<ProductReceiptHeaders<T>, T> {
    return new UpdateRequestBuilder<ProductReceiptHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReceiptHeaders`.
   * @param dataAreaId Key property. See {@link ProductReceiptHeaders.dataAreaId}.
   * @param recordId Key property. See {@link ProductReceiptHeaders.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReceiptHeaders`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<ProductReceiptHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReceiptHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReceiptHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReceiptHeaders<T>
  ): DeleteRequestBuilder<ProductReceiptHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<ProductReceiptHeaders<T>, T> {
    return new DeleteRequestBuilder<ProductReceiptHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductReceiptHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
