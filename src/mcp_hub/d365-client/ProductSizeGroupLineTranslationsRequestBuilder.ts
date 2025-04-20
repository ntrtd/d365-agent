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
import { ProductSizeGroupLineTranslations } from './ProductSizeGroupLineTranslations';

/**
 * Request builder class for operations supported on the {@link ProductSizeGroupLineTranslations} entity.
 */
export class ProductSizeGroupLineTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSizeGroupLineTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSizeGroupLineTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSizeGroupLineTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSizeGroupLineTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductSizeGroupLineTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductSizeGroupLineTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSizeGroupLineTranslations`.
   */
  create(
    entity: ProductSizeGroupLineTranslations<T>
  ): CreateRequestBuilder<ProductSizeGroupLineTranslations<T>, T> {
    return new CreateRequestBuilder<ProductSizeGroupLineTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSizeGroupLineTranslations` entity based on its keys.
   * @param productSizeGroupId Key property. See {@link ProductSizeGroupLineTranslations.productSizeGroupId}.
   * @param productSizeId Key property. See {@link ProductSizeGroupLineTranslations.productSizeId}.
   * @param languageId Key property. See {@link ProductSizeGroupLineTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductSizeGroupLineTranslations` entity based on its keys.
   */
  getByKey(
    productSizeGroupId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSizeGroupLineTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductSizeGroupLineTranslations<T>, T>(
      this.entityApi,
      {
        ProductSizeGroupId: productSizeGroupId,
        ProductSizeId: productSizeId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSizeGroupLineTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSizeGroupLineTranslations`.
   */
  update(
    entity: ProductSizeGroupLineTranslations<T>
  ): UpdateRequestBuilder<ProductSizeGroupLineTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductSizeGroupLineTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroupLineTranslations`.
   * @param productSizeGroupId Key property. See {@link ProductSizeGroupLineTranslations.productSizeGroupId}.
   * @param productSizeId Key property. See {@link ProductSizeGroupLineTranslations.productSizeId}.
   * @param languageId Key property. See {@link ProductSizeGroupLineTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroupLineTranslations`.
   */
  delete(
    productSizeGroupId: string,
    productSizeId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductSizeGroupLineTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroupLineTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroupLineTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSizeGroupLineTranslations<T>
  ): DeleteRequestBuilder<ProductSizeGroupLineTranslations<T>, T>;
  delete(
    productSizeGroupIdOrEntity: any,
    productSizeId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductSizeGroupLineTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductSizeGroupLineTranslations<T>, T>(
      this.entityApi,
      productSizeGroupIdOrEntity instanceof ProductSizeGroupLineTranslations
        ? productSizeGroupIdOrEntity
        : {
            ProductSizeGroupId: productSizeGroupIdOrEntity!,
            ProductSizeId: productSizeId!,
            LanguageId: languageId!
          }
    );
  }
}
