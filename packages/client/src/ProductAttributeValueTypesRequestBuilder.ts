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
import { ProductAttributeValueTypes } from './ProductAttributeValueTypes';

/**
 * Request builder class for operations supported on the {@link ProductAttributeValueTypes} entity.
 */
export class ProductAttributeValueTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeValueTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeValueTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeValueTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeValueTypes<T>, T> {
    return new GetAllRequestBuilder<ProductAttributeValueTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAttributeValueTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeValueTypes`.
   */
  create(
    entity: ProductAttributeValueTypes<T>
  ): CreateRequestBuilder<ProductAttributeValueTypes<T>, T> {
    return new CreateRequestBuilder<ProductAttributeValueTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeValueTypes` entity based on its keys.
   * @param productAttributeTypeName Key property. See {@link ProductAttributeValueTypes.productAttributeTypeName}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeValueTypes` entity based on its keys.
   */
  getByKey(
    productAttributeTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAttributeValueTypes<T>, T> {
    return new GetByKeyRequestBuilder<ProductAttributeValueTypes<T>, T>(
      this.entityApi,
      { ProductAttributeTypeName: productAttributeTypeName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeValueTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeValueTypes`.
   */
  update(
    entity: ProductAttributeValueTypes<T>
  ): UpdateRequestBuilder<ProductAttributeValueTypes<T>, T> {
    return new UpdateRequestBuilder<ProductAttributeValueTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValueTypes`.
   * @param productAttributeTypeName Key property. See {@link ProductAttributeValueTypes.productAttributeTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValueTypes`.
   */
  delete(
    productAttributeTypeName: string
  ): DeleteRequestBuilder<ProductAttributeValueTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValueTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValueTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeValueTypes<T>
  ): DeleteRequestBuilder<ProductAttributeValueTypes<T>, T>;
  delete(
    productAttributeTypeNameOrEntity: any
  ): DeleteRequestBuilder<ProductAttributeValueTypes<T>, T> {
    return new DeleteRequestBuilder<ProductAttributeValueTypes<T>, T>(
      this.entityApi,
      productAttributeTypeNameOrEntity instanceof ProductAttributeValueTypes
        ? productAttributeTypeNameOrEntity
        : { ProductAttributeTypeName: productAttributeTypeNameOrEntity! }
    );
  }
}
