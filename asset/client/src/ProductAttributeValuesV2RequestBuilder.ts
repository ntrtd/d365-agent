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
import { ProductAttributeValuesV2 } from './ProductAttributeValuesV2';

/**
 * Request builder class for operations supported on the {@link ProductAttributeValuesV2} entity.
 */
export class ProductAttributeValuesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeValuesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeValuesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeValuesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeValuesV2<T>, T> {
    return new GetAllRequestBuilder<ProductAttributeValuesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAttributeValuesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeValuesV2`.
   */
  create(
    entity: ProductAttributeValuesV2<T>
  ): CreateRequestBuilder<ProductAttributeValuesV2<T>, T> {
    return new CreateRequestBuilder<ProductAttributeValuesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeValuesV2` entity based on its keys.
   * @param productNumber Key property. See {@link ProductAttributeValuesV2.productNumber}.
   * @param attributeTypeName Key property. See {@link ProductAttributeValuesV2.attributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributeValuesV2.attributeName}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeValuesV2` entity based on its keys.
   */
  getByKey(
    productNumber: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAttributeValuesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProductAttributeValuesV2<T>, T>(
      this.entityApi,
      {
        ProductNumber: productNumber,
        AttributeTypeName: attributeTypeName,
        AttributeName: attributeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeValuesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeValuesV2`.
   */
  update(
    entity: ProductAttributeValuesV2<T>
  ): UpdateRequestBuilder<ProductAttributeValuesV2<T>, T> {
    return new UpdateRequestBuilder<ProductAttributeValuesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValuesV2`.
   * @param productNumber Key property. See {@link ProductAttributeValuesV2.productNumber}.
   * @param attributeTypeName Key property. See {@link ProductAttributeValuesV2.attributeTypeName}.
   * @param attributeName Key property. See {@link ProductAttributeValuesV2.attributeName}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValuesV2`.
   */
  delete(
    productNumber: string,
    attributeTypeName: string,
    attributeName: string
  ): DeleteRequestBuilder<ProductAttributeValuesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeValuesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeValuesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeValuesV2<T>
  ): DeleteRequestBuilder<ProductAttributeValuesV2<T>, T>;
  delete(
    productNumberOrEntity: any,
    attributeTypeName?: string,
    attributeName?: string
  ): DeleteRequestBuilder<ProductAttributeValuesV2<T>, T> {
    return new DeleteRequestBuilder<ProductAttributeValuesV2<T>, T>(
      this.entityApi,
      productNumberOrEntity instanceof ProductAttributeValuesV2
        ? productNumberOrEntity
        : {
            ProductNumber: productNumberOrEntity!,
            AttributeTypeName: attributeTypeName!,
            AttributeName: attributeName!
          }
    );
  }
}
