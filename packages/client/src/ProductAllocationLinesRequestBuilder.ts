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
import { ProductAllocationLines } from './ProductAllocationLines';

/**
 * Request builder class for operations supported on the {@link ProductAllocationLines} entity.
 */
export class ProductAllocationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAllocationLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAllocationLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAllocationLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAllocationLines<T>, T> {
    return new GetAllRequestBuilder<ProductAllocationLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAllocationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAllocationLines`.
   */
  create(
    entity: ProductAllocationLines<T>
  ): CreateRequestBuilder<ProductAllocationLines<T>, T> {
    return new CreateRequestBuilder<ProductAllocationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAllocationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductAllocationLines.dataAreaId}.
   * @param productAllocationKeyId Key property. See {@link ProductAllocationLines.productAllocationKeyId}.
   * @param lineNumber Key property. See {@link ProductAllocationLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductAllocationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productAllocationKeyId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProductAllocationLines<T>, T> {
    return new GetByKeyRequestBuilder<ProductAllocationLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductAllocationKeyId: productAllocationKeyId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAllocationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAllocationLines`.
   */
  update(
    entity: ProductAllocationLines<T>
  ): UpdateRequestBuilder<ProductAllocationLines<T>, T> {
    return new UpdateRequestBuilder<ProductAllocationLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAllocationLines`.
   * @param dataAreaId Key property. See {@link ProductAllocationLines.dataAreaId}.
   * @param productAllocationKeyId Key property. See {@link ProductAllocationLines.productAllocationKeyId}.
   * @param lineNumber Key property. See {@link ProductAllocationLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAllocationLines`.
   */
  delete(
    dataAreaId: string,
    productAllocationKeyId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ProductAllocationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAllocationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAllocationLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAllocationLines<T>
  ): DeleteRequestBuilder<ProductAllocationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productAllocationKeyId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ProductAllocationLines<T>, T> {
    return new DeleteRequestBuilder<ProductAllocationLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductAllocationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductAllocationKeyId: productAllocationKeyId!,
            LineNumber: lineNumber!
          }
    );
  }
}
