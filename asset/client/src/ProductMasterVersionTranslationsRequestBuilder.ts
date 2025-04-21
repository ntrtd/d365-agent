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
import { ProductMasterVersionTranslations } from './ProductMasterVersionTranslations';

/**
 * Request builder class for operations supported on the {@link ProductMasterVersionTranslations} entity.
 */
export class ProductMasterVersionTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterVersionTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterVersionTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterVersionTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterVersionTranslations<T>, T> {
    return new GetAllRequestBuilder<ProductMasterVersionTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductMasterVersionTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterVersionTranslations`.
   */
  create(
    entity: ProductMasterVersionTranslations<T>
  ): CreateRequestBuilder<ProductMasterVersionTranslations<T>, T> {
    return new CreateRequestBuilder<ProductMasterVersionTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterVersionTranslations` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterVersionTranslations.productMasterNumber}.
   * @param productMasterVersionId Key property. See {@link ProductMasterVersionTranslations.productMasterVersionId}.
   * @param languageId Key property. See {@link ProductMasterVersionTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterVersionTranslations` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productMasterVersionId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterVersionTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ProductMasterVersionTranslations<T>, T>(
      this.entityApi,
      {
        ProductMasterNumber: productMasterNumber,
        ProductMasterVersionId: productMasterVersionId,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterVersionTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterVersionTranslations`.
   */
  update(
    entity: ProductMasterVersionTranslations<T>
  ): UpdateRequestBuilder<ProductMasterVersionTranslations<T>, T> {
    return new UpdateRequestBuilder<ProductMasterVersionTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterVersionTranslations`.
   * @param productMasterNumber Key property. See {@link ProductMasterVersionTranslations.productMasterNumber}.
   * @param productMasterVersionId Key property. See {@link ProductMasterVersionTranslations.productMasterVersionId}.
   * @param languageId Key property. See {@link ProductMasterVersionTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterVersionTranslations`.
   */
  delete(
    productMasterNumber: string,
    productMasterVersionId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductMasterVersionTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterVersionTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterVersionTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterVersionTranslations<T>
  ): DeleteRequestBuilder<ProductMasterVersionTranslations<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productMasterVersionId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductMasterVersionTranslations<T>, T> {
    return new DeleteRequestBuilder<ProductMasterVersionTranslations<T>, T>(
      this.entityApi,
      productMasterNumberOrEntity instanceof ProductMasterVersionTranslations
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductMasterVersionId: productMasterVersionId!,
            LanguageId: languageId!
          }
    );
  }
}
