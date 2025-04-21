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
import { ProductAttributes } from './ProductAttributes';

/**
 * Request builder class for operations supported on the {@link ProductAttributes} entity.
 */
export class ProductAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributes<T>, T> {
    return new GetAllRequestBuilder<ProductAttributes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributes`.
   */
  create(
    entity: ProductAttributes<T>
  ): CreateRequestBuilder<ProductAttributes<T>, T> {
    return new CreateRequestBuilder<ProductAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributes` entity based on its keys.
   * @param productAttributeTypeName Key property. See {@link ProductAttributes.productAttributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributes.attributeName}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributes` entity based on its keys.
   */
  getByKey(
    productAttributeTypeName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAttributes<T>, T> {
    return new GetByKeyRequestBuilder<ProductAttributes<T>, T>(this.entityApi, {
      ProductAttributeTypeName: productAttributeTypeName,
      AttributeName: attributeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributes`.
   */
  update(
    entity: ProductAttributes<T>
  ): UpdateRequestBuilder<ProductAttributes<T>, T> {
    return new UpdateRequestBuilder<ProductAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributes`.
   * @param productAttributeTypeName Key property. See {@link ProductAttributes.productAttributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributes.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributes`.
   */
  delete(
    productAttributeTypeName: string,
    attributeName: string
  ): DeleteRequestBuilder<ProductAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributes<T>
  ): DeleteRequestBuilder<ProductAttributes<T>, T>;
  delete(
    productAttributeTypeNameOrEntity: any,
    attributeName?: string
  ): DeleteRequestBuilder<ProductAttributes<T>, T> {
    return new DeleteRequestBuilder<ProductAttributes<T>, T>(
      this.entityApi,
      productAttributeTypeNameOrEntity instanceof ProductAttributes
        ? productAttributeTypeNameOrEntity
        : {
            ProductAttributeTypeName: productAttributeTypeNameOrEntity!,
            AttributeName: attributeName!
          }
    );
  }
}
