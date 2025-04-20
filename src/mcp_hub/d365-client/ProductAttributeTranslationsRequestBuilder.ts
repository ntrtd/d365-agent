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
import { ProductAttributeTranslations } from './ProductAttributeTranslations';

/**
 * Request builder class for operations supported on the {@link ProductAttributeTranslations} entity.
 */
export class ProductAttributeTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductAttributeTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductAttributeTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductAttributeTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductAttributeTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductAttributeTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductAttributeTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductAttributeTranslations`.
   */
  create(
    entity: ProductAttributeTranslations<T>
  ): CreateRequestBuilder<ProductAttributeTranslations<T>, T> {
    return new CreateRequestBuilder<ProductAttributeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductAttributeTranslations` entity based on its keys.
   * @param productAttributeName Key property. See {@link ProductAttributeTranslations.productAttributeName}.
   * @param productAttributeTypeName Key property. See {@link ProductAttributeTranslations.productAttributeTypeName}.
   * @param languageId Key property. See {@link ProductAttributeTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductAttributeTranslations` entity based on its keys.
   */
  getByKey(
    productAttributeName: DeserializedType<T, 'Edm.String'>,
    productAttributeTypeName: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductAttributeTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductAttributeTranslations<T>, T>(
      this.entityApi,
      {
        ProductAttributeName: productAttributeName,
        ProductAttributeTypeName: productAttributeTypeName,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductAttributeTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductAttributeTranslations`.
   */
  update(
    entity: ProductAttributeTranslations<T>
  ): UpdateRequestBuilder<ProductAttributeTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductAttributeTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeTranslations`.
   * @param productAttributeName Key property. See {@link ProductAttributeTranslations.productAttributeName}.
   * @param productAttributeTypeName Key property. See {@link ProductAttributeTranslations.productAttributeTypeName}.
   * @param languageId Key property. See {@link ProductAttributeTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeTranslations`.
   */
  delete(
    productAttributeName: string,
    productAttributeTypeName: string,
    languageId: string
  ): DeleteRequestBuilder<ProductAttributeTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductAttributeTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductAttributeTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductAttributeTranslations<T>
  ): DeleteRequestBuilder<ProductAttributeTranslations<T>, T>;
  delete(
    productAttributeNameOrEntity: any,
    productAttributeTypeName?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductAttributeTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductAttributeTranslations<T>, T>(
      this.entityApi,
      productAttributeNameOrEntity instanceof ProductAttributeTranslations
        ? productAttributeNameOrEntity
        : {
            ProductAttributeName: productAttributeNameOrEntity!,
            ProductAttributeTypeName: productAttributeTypeName!,
            LanguageId: languageId!
          }
    );
  }
}
