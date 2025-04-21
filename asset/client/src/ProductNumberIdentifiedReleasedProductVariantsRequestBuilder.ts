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
import { ProductNumberIdentifiedReleasedProductVariants } from './ProductNumberIdentifiedReleasedProductVariants';

/**
 * Request builder class for operations supported on the {@link ProductNumberIdentifiedReleasedProductVariants} entity.
 */
export class ProductNumberIdentifiedReleasedProductVariantsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductNumberIdentifiedReleasedProductVariants<T>, T> {
  /**
   * Returns a request builder for querying all `ProductNumberIdentifiedReleasedProductVariants` entities.
   * @returns A request builder for creating requests to retrieve all `ProductNumberIdentifiedReleasedProductVariants` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariants<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariants<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductNumberIdentifiedReleasedProductVariants` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductNumberIdentifiedReleasedProductVariants`.
   */
  create(
    entity: ProductNumberIdentifiedReleasedProductVariants<T>
  ): CreateRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariants<T>,
    T
  > {
    return new CreateRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariants<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductNumberIdentifiedReleasedProductVariants` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductNumberIdentifiedReleasedProductVariants.dataAreaId}.
   * @param productVariantNumber Key property. See {@link ProductNumberIdentifiedReleasedProductVariants.productVariantNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductNumberIdentifiedReleasedProductVariants` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productVariantNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariants<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariants<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductVariantNumber: productVariantNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductNumberIdentifiedReleasedProductVariants`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductNumberIdentifiedReleasedProductVariants`.
   */
  update(
    entity: ProductNumberIdentifiedReleasedProductVariants<T>
  ): UpdateRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariants<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariants<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedReleasedProductVariants`.
   * @param dataAreaId Key property. See {@link ProductNumberIdentifiedReleasedProductVariants.dataAreaId}.
   * @param productVariantNumber Key property. See {@link ProductNumberIdentifiedReleasedProductVariants.productVariantNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedReleasedProductVariants`.
   */
  delete(
    dataAreaId: string,
    productVariantNumber: string
  ): DeleteRequestBuilder<ProductNumberIdentifiedReleasedProductVariants<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductNumberIdentifiedReleasedProductVariants`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductNumberIdentifiedReleasedProductVariants` by taking the entity as a parameter.
   */
  delete(
    entity: ProductNumberIdentifiedReleasedProductVariants<T>
  ): DeleteRequestBuilder<ProductNumberIdentifiedReleasedProductVariants<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productVariantNumber?: string
  ): DeleteRequestBuilder<
    ProductNumberIdentifiedReleasedProductVariants<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ProductNumberIdentifiedReleasedProductVariants<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ProductNumberIdentifiedReleasedProductVariants
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductVariantNumber: productVariantNumber!
          }
    );
  }
}
