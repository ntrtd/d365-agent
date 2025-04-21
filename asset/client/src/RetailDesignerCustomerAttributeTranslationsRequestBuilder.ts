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
import { RetailDesignerCustomerAttributeTranslations } from './RetailDesignerCustomerAttributeTranslations';

/**
 * Request builder class for operations supported on the {@link RetailDesignerCustomerAttributeTranslations} entity.
 */
export class RetailDesignerCustomerAttributeTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailDesignerCustomerAttributeTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailDesignerCustomerAttributeTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailDesignerCustomerAttributeTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailDesignerCustomerAttributeTranslations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailDesignerCustomerAttributeTranslations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailDesignerCustomerAttributeTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailDesignerCustomerAttributeTranslations`.
   */
  create(
    entity: RetailDesignerCustomerAttributeTranslations<T>
  ): CreateRequestBuilder<RetailDesignerCustomerAttributeTranslations<T>, T> {
    return new CreateRequestBuilder<
      RetailDesignerCustomerAttributeTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailDesignerCustomerAttributeTranslations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailDesignerCustomerAttributeTranslations.dataAreaId}.
   * @param attributeTypeName Key property. See {@link RetailDesignerCustomerAttributeTranslations.attributeTypeName}.
   * @param attributeName Key property. See {@link RetailDesignerCustomerAttributeTranslations.attributeName}.
   * @param languageId Key property. See {@link RetailDesignerCustomerAttributeTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `RetailDesignerCustomerAttributeTranslations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailDesignerCustomerAttributeTranslations<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailDesignerCustomerAttributeTranslations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      AttributeTypeName: attributeTypeName,
      AttributeName: attributeName,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailDesignerCustomerAttributeTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailDesignerCustomerAttributeTranslations`.
   */
  update(
    entity: RetailDesignerCustomerAttributeTranslations<T>
  ): UpdateRequestBuilder<RetailDesignerCustomerAttributeTranslations<T>, T> {
    return new UpdateRequestBuilder<
      RetailDesignerCustomerAttributeTranslations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerCustomerAttributeTranslations`.
   * @param dataAreaId Key property. See {@link RetailDesignerCustomerAttributeTranslations.dataAreaId}.
   * @param attributeTypeName Key property. See {@link RetailDesignerCustomerAttributeTranslations.attributeTypeName}.
   * @param attributeName Key property. See {@link RetailDesignerCustomerAttributeTranslations.attributeName}.
   * @param languageId Key property. See {@link RetailDesignerCustomerAttributeTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerCustomerAttributeTranslations`.
   */
  delete(
    dataAreaId: string,
    attributeTypeName: string,
    attributeName: string,
    languageId: string
  ): DeleteRequestBuilder<RetailDesignerCustomerAttributeTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailDesignerCustomerAttributeTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailDesignerCustomerAttributeTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailDesignerCustomerAttributeTranslations<T>
  ): DeleteRequestBuilder<RetailDesignerCustomerAttributeTranslations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    attributeTypeName?: string,
    attributeName?: string,
    languageId?: string
  ): DeleteRequestBuilder<RetailDesignerCustomerAttributeTranslations<T>, T> {
    return new DeleteRequestBuilder<
      RetailDesignerCustomerAttributeTranslations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailDesignerCustomerAttributeTranslations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AttributeTypeName: attributeTypeName!,
            AttributeName: attributeName!,
            LanguageId: languageId!
          }
    );
  }
}
