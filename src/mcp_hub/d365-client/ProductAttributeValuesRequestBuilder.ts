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
import { ProductAttributeValues } from './ProductAttributeValues';

/**
 * Request builder class for operations supported on the {@link ProductAttributeValues} entity.
 */
export class ProductAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeValues<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeValues<T>, T> {
    return new GetAllRequestBuilder<ProductAttributeValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeValues`.
   */
  create(
    entity: ProductAttributeValues<T>
  ): CreateRequestBuilder<ProductAttributeValues<T>, T> {
    return new CreateRequestBuilder<ProductAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeValues` entity based on its keys.
   * @param productNumber Key property. See {@link ProductAttributeValues.productNumber}.
   * @param attributeTypeName Key property. See {@link ProductAttributeValues.attributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributeValues.attributeName}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeValues` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAttributeValues<T>, T> {
    return new GetByKeyRequestBuilder<ProductAttributeValues<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        AttributeTypeName: attributeTypeName,
        AttributeName: attributeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeValues`.
   */
  update(
    entity: ProductAttributeValues<T>
  ): UpdateRequestBuilder<ProductAttributeValues<T>, T> {
    return new UpdateRequestBuilder<ProductAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValues`.
   * @param productNumber Key property. See {@link ProductAttributeValues.productNumber}.
   * @param attributeTypeName Key property. See {@link ProductAttributeValues.attributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributeValues.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValues`.
   */
  delete(
    productNumber: string,
    attributeTypeName: string,
    attributeName: string
  ): DeleteRequestBuilder<ProductAttributeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeValues<T>
  ): DeleteRequestBuilder<ProductAttributeValues<T>, T>;
  delete(
    productNumberOrEntity: any,
    attributeTypeName?: string,
    attributeName?: string
  ): DeleteRequestBuilder<ProductAttributeValues<T>, T> {
    return new DeleteRequestBuilder<ProductAttributeValues<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductAttributeValues
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            AttributeTypeName: attributeTypeName!,
            AttributeName: attributeName!
          }
    );
  }
}
