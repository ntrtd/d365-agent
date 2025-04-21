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
import { ProductReceiptLines } from './ProductReceiptLines';

/**
 * Request builder class for operations supported on the {@link ProductReceiptLines} entity.
 */
export class ProductReceiptLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductReceiptLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProductReceiptLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProductReceiptLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProductReceiptLines<T>, T> {
    return new GetAllRequestBuilder<ProductReceiptLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductReceiptLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductReceiptLines`.
   */
  create(
    entity: ProductReceiptLines<T>
  ): CreateRequestBuilder<ProductReceiptLines<T>, T> {
    return new CreateRequestBuilder<ProductReceiptLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductReceiptLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductReceiptLines.dataAreaId}.
   * @param recordId Key property. See {@link ProductReceiptLines.recordId}.
   * @returns A request builder for creating requests to retrieve one `ProductReceiptLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProductReceiptLines<T>, T> {
    return new GetByKeyRequestBuilder<ProductReceiptLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductReceiptLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductReceiptLines`.
   */
  update(
    entity: ProductReceiptLines<T>
  ): UpdateRequestBuilder<ProductReceiptLines<T>, T> {
    return new UpdateRequestBuilder<ProductReceiptLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductReceiptLines`.
   * @param dataAreaId Key property. See {@link ProductReceiptLines.dataAreaId}.
   * @param recordId Key property. See {@link ProductReceiptLines.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductReceiptLines`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<ProductReceiptLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductReceiptLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductReceiptLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProductReceiptLines<T>
  ): DeleteRequestBuilder<ProductReceiptLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<ProductReceiptLines<T>, T> {
    return new DeleteRequestBuilder<ProductReceiptLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductReceiptLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
