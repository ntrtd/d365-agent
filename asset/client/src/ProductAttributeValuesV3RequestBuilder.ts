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
import { ProductAttributeValuesV3 } from './ProductAttributeValuesV3';

/**
 * Request builder class for operations supported on the {@link ProductAttributeValuesV3} entity.
 */
export class ProductAttributeValuesV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeValuesV3<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeValuesV3` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeValuesV3` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeValuesV3<T>, T> {
    return new GetAllRequestBuilder<ProductAttributeValuesV3<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAttributeValuesV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeValuesV3`.
   */
  create(
    entity: ProductAttributeValuesV3<T>
  ): CreateRequestBuilder<ProductAttributeValuesV3<T>, T> {
    return new CreateRequestBuilder<ProductAttributeValuesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeValuesV3` entity based on its keys.
   * @param productNumber Key property. See {@link ProductAttributeValuesV3.productNumber}.
   * @param attributeTypeName Key property. See {@link ProductAttributeValuesV3.attributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributeValuesV3.attributeName}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeValuesV3` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAttributeValuesV3<T>, T> {
    return new GetByKeyRequestBuilder<ProductAttributeValuesV3<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        AttributeTypeName: attributeTypeName,
        AttributeName: attributeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeValuesV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeValuesV3`.
   */
  update(
    entity: ProductAttributeValuesV3<T>
  ): UpdateRequestBuilder<ProductAttributeValuesV3<T>, T> {
    return new UpdateRequestBuilder<ProductAttributeValuesV3<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValuesV3`.
   * @param productNumber Key property. See {@link ProductAttributeValuesV3.productNumber}.
   * @param attributeTypeName Key property. See {@link ProductAttributeValuesV3.attributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributeValuesV3.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValuesV3`.
   */
  delete(
    productNumber: string,
    attributeTypeName: string,
    attributeName: string
  ): DeleteRequestBuilder<ProductAttributeValuesV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValuesV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValuesV3` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeValuesV3<T>
  ): DeleteRequestBuilder<ProductAttributeValuesV3<T>, T>;
  delete(
    productNumberOrEntity: any,
    attributeTypeName?: string,
    attributeName?: string
  ): DeleteRequestBuilder<ProductAttributeValuesV3<T>, T> {
    return new DeleteRequestBuilder<ProductAttributeValuesV3<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductAttributeValuesV3
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            AttributeTypeName: attributeTypeName!,
            AttributeName: attributeName!
          }
    );
  }
}
