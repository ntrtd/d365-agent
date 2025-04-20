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
import { ProductNumberIdentifiedProductVariants } from './ProductNumberIdentifiedProductVariants';

/**
 * Request builder class for operations supported on the {@link ProductNumberIdentifiedProductVariants} entity.
 */
export class ProductNumberIdentifiedProductVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductNumberIdentifiedProductVariants<T>, T> {
  /**
   * Returns a request builder for querying all `ProductNumberIdentifiedProductVariants` entities.
   * @returns A request builder for creating requests to retrieve all `ProductNumberIdentifiedProductVariants` entities.
   */
  getAll(): GetAllRequestBuilder<ProductNumberIdentifiedProductVariants<T>, T> {
    return new GetAllRequestBuilder<
      ProductNumberIdentifiedProductVariants<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductNumberIdentifiedProductVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductNumberIdentifiedProductVariants`.
   */
  create(
    entity: ProductNumberIdentifiedProductVariants<T>
  ): CreateRequestBuilder<ProductNumberIdentifiedProductVariants<T>, T> {
    return new CreateRequestBuilder<
      ProductNumberIdentifiedProductVariants<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductNumberIdentifiedProductVariants` entity based on its keys.
   * @param productVariantNumber Key property. See {@link ProductNumberIdentifiedProductVariants.productVariantNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductNumberIdentifiedProductVariants` entity based on its keys.
   */
  getByKey(
    productVariantNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductNumberIdentifiedProductVariants<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductNumberIdentifiedProductVariants<T>,
      T
    >(this.entityApi, { ProductVariantNumber: productVariantNumber });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductNumberIdentifiedProductVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductNumberIdentifiedProductVariants`.
   */
  update(
    entity: ProductNumberIdentifiedProductVariants<T>
  ): UpdateRequestBuilder<ProductNumberIdentifiedProductVariants<T>, T> {
    return new UpdateRequestBuilder<
      ProductNumberIdentifiedProductVariants<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedProductVariants`.
   * @param productVariantNumber Key property. See {@link ProductNumberIdentifiedProductVariants.productVariantNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedProductVariants`.
   */
  delete(
    productVariantNumber: string
  ): DeleteRequestBuilder<ProductNumberIdentifiedProductVariants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedProductVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedProductVariants` by taking the entity as a parameter.
   */
  delete(
    entity: ProductNumberIdentifiedProductVariants<T>
  ): DeleteRequestBuilder<ProductNumberIdentifiedProductVariants<T>, T>;
  delete(
    productVariantNumberOrEntity: any
  ): DeleteRequestBuilder<ProductNumberIdentifiedProductVariants<T>, T> {
    return new DeleteRequestBuilder<
      ProductNumberIdentifiedProductVariants<T>,
      T
    >(
      this.entityApi,
      productVariantNumberOrEntity instanceof
      ProductNumberIdentifiedProductVariants
        ? productVariantNumberOrEntity
        : { ProductVariantNumber: productVariantNumberOrEntity! }
    );
  }
}
