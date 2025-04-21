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
import { ProductUnitOfMeasureConversions } from './ProductUnitOfMeasureConversions';

/**
 * Request builder class for operations supported on the {@link ProductUnitOfMeasureConversions} entity.
 */
export class ProductUnitOfMeasureConversionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductUnitOfMeasureConversions<T>, T> {
  /**
   * Returns a request builder for querying all `ProductUnitOfMeasureConversions` entities.
   * @returns A request builder for creating requests to retrieve all `ProductUnitOfMeasureConversions` entities.
   */
  getAll(): GetAllRequestBuilder<ProductUnitOfMeasureConversions<T>, T> {
    return new GetAllRequestBuilder<ProductUnitOfMeasureConversions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductUnitOfMeasureConversions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductUnitOfMeasureConversions`.
   */
  create(
    entity: ProductUnitOfMeasureConversions<T>
  ): CreateRequestBuilder<ProductUnitOfMeasureConversions<T>, T> {
    return new CreateRequestBuilder<ProductUnitOfMeasureConversions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductUnitOfMeasureConversions` entity based on its keys.
   * @param fromUnitSymbol Key property. See {@link ProductUnitOfMeasureConversions.fromUnitSymbol}.
   * @param toUnitSymbol Key property. See {@link ProductUnitOfMeasureConversions.toUnitSymbol}.
   * @param productNumber Key property. See {@link ProductUnitOfMeasureConversions.productNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductUnitOfMeasureConversions` entity based on its keys.
   */
  getByKey(
    fromUnitSymbol: DeserializedType<T, 'Edm.String'>,
    toUnitSymbol: DeserializedType<T, 'Edm.String'>,
    productNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductUnitOfMeasureConversions<T>, T> {
    return new GetByKeyRequestBuilder<ProductUnitOfMeasureConversions<T>, T>(
      this.entityApi,
      {
        FromUnitSymbol: fromUnitSymbol,
        ToUnitSymbol: toUnitSymbol,
        ProductNumber: productNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductUnitOfMeasureConversions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductUnitOfMeasureConversions`.
   */
  update(
    entity: ProductUnitOfMeasureConversions<T>
  ): UpdateRequestBuilder<ProductUnitOfMeasureConversions<T>, T> {
    return new UpdateRequestBuilder<ProductUnitOfMeasureConversions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductUnitOfMeasureConversions`.
   * @param fromUnitSymbol Key property. See {@link ProductUnitOfMeasureConversions.fromUnitSymbol}.
   * @param toUnitSymbol Key property. See {@link ProductUnitOfMeasureConversions.toUnitSymbol}.
   * @param productNumber Key property. See {@link ProductUnitOfMeasureConversions.productNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitOfMeasureConversions`.
   */
  delete(
    fromUnitSymbol: string,
    toUnitSymbol: string,
    productNumber: string
  ): DeleteRequestBuilder<ProductUnitOfMeasureConversions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductUnitOfMeasureConversions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitOfMeasureConversions` by taking the entity as a parameter.
   */
  delete(
    entity: ProductUnitOfMeasureConversions<T>
  ): DeleteRequestBuilder<ProductUnitOfMeasureConversions<T>, T>;
  delete(
    fromUnitSymbolOrEntity: any,
    toUnitSymbol?: string,
    productNumber?: string
  ): DeleteRequestBuilder<ProductUnitOfMeasureConversions<T>, T> {
    return new DeleteRequestBuilder<ProductUnitOfMeasureConversions<T>, T>(
      this.entityApi,
      fromUnitSymbolOrEntity instanceof ProductUnitOfMeasureConversions
        ? fromUnitSymbolOrEntity
        : {
            FromUnitSymbol: fromUnitSymbolOrEntity!,
            ToUnitSymbol: toUnitSymbol!,
            ProductNumber: productNumber!
          }
    );
  }
}
