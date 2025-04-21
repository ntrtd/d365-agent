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
import { ProductColorGroupLineTranslations } from './ProductColorGroupLineTranslations';

/**
 * Request builder class for operations supported on the {@link ProductColorGroupLineTranslations} entity.
 */
export class ProductColorGroupLineTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductColorGroupLineTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductColorGroupLineTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductColorGroupLineTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductColorGroupLineTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductColorGroupLineTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductColorGroupLineTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductColorGroupLineTranslations`.
   */
  create(
    entity: ProductColorGroupLineTranslations<T>
  ): CreateRequestBuilder<ProductColorGroupLineTranslations<T>, T> {
    return new CreateRequestBuilder<ProductColorGroupLineTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductColorGroupLineTranslations` entity based on its keys.
   * @param productColorGroupId Key property. See {@link ProductColorGroupLineTranslations.productColorGroupId}.
   * @param productColorId Key property. See {@link ProductColorGroupLineTranslations.productColorId}.
   * @param languageId Key property. See {@link ProductColorGroupLineTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductColorGroupLineTranslations` entity based on its keys.
   */
  getByKey(
    productColorGroupId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductColorGroupLineTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductColorGroupLineTranslations<T>, T>(
      this.entityApi,
      {
        ProductColorGroupId: productColorGroupId,
        ProductColorId: productColorId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductColorGroupLineTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductColorGroupLineTranslations`.
   */
  update(
    entity: ProductColorGroupLineTranslations<T>
  ): UpdateRequestBuilder<ProductColorGroupLineTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductColorGroupLineTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroupLineTranslations`.
   * @param productColorGroupId Key property. See {@link ProductColorGroupLineTranslations.productColorGroupId}.
   * @param productColorId Key property. See {@link ProductColorGroupLineTranslations.productColorId}.
   * @param languageId Key property. See {@link ProductColorGroupLineTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroupLineTranslations`.
   */
  delete(
    productColorGroupId: string,
    productColorId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductColorGroupLineTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroupLineTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroupLineTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductColorGroupLineTranslations<T>
  ): DeleteRequestBuilder<ProductColorGroupLineTranslations<T>, T>;
  delete(
    productColorGroupIdOrEntity: any,
    productColorId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductColorGroupLineTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductColorGroupLineTranslations<T>, T>(
      this.entityApi,
      productColorGroupIdOrEntity instanceof ProductColorGroupLineTranslations
        ? productColorGroupIdOrEntity
        : {
            ProductColorGroupId: productColorGroupIdOrEntity!,
            ProductColorId: productColorId!,
            LanguageId: languageId!
          }
    );
  }
}
