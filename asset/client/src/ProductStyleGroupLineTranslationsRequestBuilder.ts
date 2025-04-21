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
import { ProductStyleGroupLineTranslations } from './ProductStyleGroupLineTranslations';

/**
 * Request builder class for operations supported on the {@link ProductStyleGroupLineTranslations} entity.
 */
export class ProductStyleGroupLineTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStyleGroupLineTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStyleGroupLineTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStyleGroupLineTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStyleGroupLineTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductStyleGroupLineTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductStyleGroupLineTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStyleGroupLineTranslations`.
   */
  create(
    entity: ProductStyleGroupLineTranslations<T>
  ): CreateRequestBuilder<ProductStyleGroupLineTranslations<T>, T> {
    return new CreateRequestBuilder<ProductStyleGroupLineTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductStyleGroupLineTranslations` entity based on its keys.
   * @param productStyleGroupId Key property. See {@link ProductStyleGroupLineTranslations.productStyleGroupId}.
   * @param productStyleId Key property. See {@link ProductStyleGroupLineTranslations.productStyleId}.
   * @param languageId Key property. See {@link ProductStyleGroupLineTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductStyleGroupLineTranslations` entity based on its keys.
   */
  getByKey(
    productStyleGroupId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStyleGroupLineTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductStyleGroupLineTranslations<T>, T>(
      this.entityApi,
      {
        ProductStyleGroupId: productStyleGroupId,
        ProductStyleId: productStyleId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductStyleGroupLineTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStyleGroupLineTranslations`.
   */
  update(
    entity: ProductStyleGroupLineTranslations<T>
  ): UpdateRequestBuilder<ProductStyleGroupLineTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductStyleGroupLineTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroupLineTranslations`.
   * @param productStyleGroupId Key property. See {@link ProductStyleGroupLineTranslations.productStyleGroupId}.
   * @param productStyleId Key property. See {@link ProductStyleGroupLineTranslations.productStyleId}.
   * @param languageId Key property. See {@link ProductStyleGroupLineTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroupLineTranslations`.
   */
  delete(
    productStyleGroupId: string,
    productStyleId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductStyleGroupLineTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroupLineTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroupLineTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductStyleGroupLineTranslations<T>
  ): DeleteRequestBuilder<ProductStyleGroupLineTranslations<T>, T>;
  delete(
    productStyleGroupIdOrEntity: any,
    productStyleId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductStyleGroupLineTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductStyleGroupLineTranslations<T>, T>(
      this.entityApi,
      productStyleGroupIdOrEntity instanceof ProductStyleGroupLineTranslations
        ? productStyleGroupIdOrEntity
        : {
            ProductStyleGroupId: productStyleGroupIdOrEntity!,
            ProductStyleId: productStyleId!,
            LanguageId: languageId!
          }
    );
  }
}
