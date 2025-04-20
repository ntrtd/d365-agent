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
import { ProductMasterConfigurationTranslations } from './ProductMasterConfigurationTranslations';

/**
 * Request builder class for operations supported on the {@link ProductMasterConfigurationTranslations} entity.
 */
export class ProductMasterConfigurationTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductMasterConfigurationTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductMasterConfigurationTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductMasterConfigurationTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductMasterConfigurationTranslations<T>, T> {
    return new GetAllRequestBuilder<
      ProductMasterConfigurationTranslations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductMasterConfigurationTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductMasterConfigurationTranslations`.
   */
  create(
    entity: ProductMasterConfigurationTranslations<T>
  ): CreateRequestBuilder<ProductMasterConfigurationTranslations<T>, T> {
    return new CreateRequestBuilder<
      ProductMasterConfigurationTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductMasterConfigurationTranslations` entity based on its keys.
   * @param productMasterNumber Key property. See {@link ProductMasterConfigurationTranslations.productMasterNumber}.
   * @param productMasterConfigurationId Key property. See {@link ProductMasterConfigurationTranslations.productMasterConfigurationId}.
   * @param languageId Key property. See {@link ProductMasterConfigurationTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `ProductMasterConfigurationTranslations` entity based on its keys.
   */
  getByKey(
    productMasterNumber: DeserializedType<T, 'Edm.String'>,
    productMasterConfigurationId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductMasterConfigurationTranslations<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductMasterConfigurationTranslations<T>,
      T
    >(this.entityApi, {
      ProductMasterNumber: productMasterNumber,
      ProductMasterConfigurationId: productMasterConfigurationId,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductMasterConfigurationTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductMasterConfigurationTranslations`.
   */
  update(
    entity: ProductMasterConfigurationTranslations<T>
  ): UpdateRequestBuilder<ProductMasterConfigurationTranslations<T>, T> {
    return new UpdateRequestBuilder<
      ProductMasterConfigurationTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductMasterConfigurationTranslations`.
   * @param productMasterNumber Key property. See {@link ProductMasterConfigurationTranslations.productMasterNumber}.
   * @param productMasterConfigurationId Key property. See {@link ProductMasterConfigurationTranslations.productMasterConfigurationId}.
   * @param languageId Key property. See {@link ProductMasterConfigurationTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterConfigurationTranslations`.
   */
  delete(
    productMasterNumber: string,
    productMasterConfigurationId: string,
    languageId: string
  ): DeleteRequestBuilder<ProductMasterConfigurationTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductMasterConfigurationTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductMasterConfigurationTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductMasterConfigurationTranslations<T>
  ): DeleteRequestBuilder<ProductMasterConfigurationTranslations<T>, T>;
  delete(
    productMasterNumberOrEntity: any,
    productMasterConfigurationId?: string,
    languageId?: string
  ): DeleteRequestBuilder<ProductMasterConfigurationTranslations<T>, T> {
    return new DeleteRequestBuilder<
      ProductMasterConfigurationTranslations<T>,
      T
    >(
      this.entityApi,
      productMasterNumberOrEntity instanceof
      ProductMasterConfigurationTranslations
        ? productMasterNumberOrEntity
        : {
            ProductMasterNumber: productMasterNumberOrEntity!,
            ProductMasterConfigurationId: productMasterConfigurationId!,
            LanguageId: languageId!
          }
    );
  }
}
