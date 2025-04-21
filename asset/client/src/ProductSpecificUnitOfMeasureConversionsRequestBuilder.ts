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
import { ProductSpecificUnitOfMeasureConversions } from './ProductSpecificUnitOfMeasureConversions';

/**
 * Request builder class for operations supported on the {@link ProductSpecificUnitOfMeasureConversions} entity.
 */
export class ProductSpecificUnitOfMeasureConversionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSpecificUnitOfMeasureConversions<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSpecificUnitOfMeasureConversions` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSpecificUnitOfMeasureConversions` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProductSpecificUnitOfMeasureConversions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProductSpecificUnitOfMeasureConversions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSpecificUnitOfMeasureConversions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSpecificUnitOfMeasureConversions`.
   */
  create(
    entity: ProductSpecificUnitOfMeasureConversions<T>
  ): CreateRequestBuilder<ProductSpecificUnitOfMeasureConversions<T>, T> {
    return new CreateRequestBuilder<
      ProductSpecificUnitOfMeasureConversions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductSpecificUnitOfMeasureConversions` entity based on its keys.
   * @param productNumber Key property. See {@link ProductSpecificUnitOfMeasureConversions.productNumber}.
   * @param fromUnitSymbol Key property. See {@link ProductSpecificUnitOfMeasureConversions.fromUnitSymbol}.
   * @param toUnitSymbol Key property. See {@link ProductSpecificUnitOfMeasureConversions.toUnitSymbol}.
   * @returns A request builder for creating requests to retrieve one `ProductSpecificUnitOfMeasureConversions` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    fromUnitSymbol: DeserializedType<T, 'Edm.String'>,
    toUnitSymbol: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSpecificUnitOfMeasureConversions<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductSpecificUnitOfMeasureConversions<T>,
      T
    >(this.entityApi, {
      ProductNumber: productNumber,
      FromUnitSymbol: fromUnitSymbol,
      ToUnitSymbol: toUnitSymbol
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSpecificUnitOfMeasureConversions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSpecificUnitOfMeasureConversions`.
   */
  update(
    entity: ProductSpecificUnitOfMeasureConversions<T>
  ): UpdateRequestBuilder<ProductSpecificUnitOfMeasureConversions<T>, T> {
    return new UpdateRequestBuilder<
      ProductSpecificUnitOfMeasureConversions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSpecificUnitOfMeasureConversions`.
   * @param productNumber Key property. See {@link ProductSpecificUnitOfMeasureConversions.productNumber}.
   * @param fromUnitSymbol Key property. See {@link ProductSpecificUnitOfMeasureConversions.fromUnitSymbol}.
   * @param toUnitSymbol Key property. See {@link ProductSpecificUnitOfMeasureConversions.toUnitSymbol}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSpecificUnitOfMeasureConversions`.
   */
  delete(
    productNumber: string,
    fromUnitSymbol: string,
    toUnitSymbol: string
  ): DeleteRequestBuilder<ProductSpecificUnitOfMeasureConversions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSpecificUnitOfMeasureConversions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSpecificUnitOfMeasureConversions` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSpecificUnitOfMeasureConversions<T>
  ): DeleteRequestBuilder<ProductSpecificUnitOfMeasureConversions<T>, T>;
  delete(
    productNumberOrEntity: any,
    fromUnitSymbol?: string,
    toUnitSymbol?: string
  ): DeleteRequestBuilder<ProductSpecificUnitOfMeasureConversions<T>, T> {
    return new DeleteRequestBuilder<
      ProductSpecificUnitOfMeasureConversions<T>,
      T
    >(
      this.entityApi,
      productNumberOrEntity instanceof ProductSpecificUnitOfMeasureConversions
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            FromUnitSymbol: fromUnitSymbol!,
            ToUnitSymbol: toUnitSymbol!
          }
    );
  }
}
