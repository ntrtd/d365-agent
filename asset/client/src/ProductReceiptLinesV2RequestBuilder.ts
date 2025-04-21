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
import { ProductReceiptLinesV2 } from './ProductReceiptLinesV2';

/**
 * Request builder class for operations supported on the {@link ProductReceiptLinesV2} entity.
 */
export class ProductReceiptLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReceiptLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReceiptLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReceiptLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReceiptLinesV2<T>, T> {
    return new GetAllRequestBuilder<ProductReceiptLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductReceiptLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReceiptLinesV2`.
   */
  create(
    entity: ProductReceiptLinesV2<T>
  ): CreateRequestBuilder<ProductReceiptLinesV2<T>, T> {
    return new CreateRequestBuilder<ProductReceiptLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReceiptLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductReceiptLinesV2.dataAreaId}.
   * @param recordId Key property. See {@link ProductReceiptLinesV2.recordId}.
   * @returns A request builder for creating requests to retrieve one `ProductReceiptLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProductReceiptLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductReceiptLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReceiptLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReceiptLinesV2`.
   */
  update(
    entity: ProductReceiptLinesV2<T>
  ): UpdateRequestBuilder<ProductReceiptLinesV2<T>, T> {
    return new UpdateRequestBuilder<ProductReceiptLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReceiptLinesV2`.
   * @param dataAreaId Key property. See {@link ProductReceiptLinesV2.dataAreaId}.
   * @param recordId Key property. See {@link ProductReceiptLinesV2.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReceiptLinesV2`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<ProductReceiptLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReceiptLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReceiptLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReceiptLinesV2<T>
  ): DeleteRequestBuilder<ProductReceiptLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<ProductReceiptLinesV2<T>, T> {
    return new DeleteRequestBuilder<ProductReceiptLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductReceiptLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
