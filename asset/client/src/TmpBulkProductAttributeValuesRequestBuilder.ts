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
import { TmpBulkProductAttributeValues } from './TmpBulkProductAttributeValues';

/**
 * Request builder class for operations supported on the {@link TmpBulkProductAttributeValues} entity.
 */
export class TmpBulkProductAttributeValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TmpBulkProductAttributeValues<T>, T> {
  /**
   * Returns a request builder for querying all `TmpBulkProductAttributeValues` entities.
   * @returns A request builder for creating requests to retrieve all `TmpBulkProductAttributeValues` entities.
   */
  getAll(): GetAllRequestBuilder<TmpBulkProductAttributeValues<T>, T> {
    return new GetAllRequestBuilder<TmpBulkProductAttributeValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TmpBulkProductAttributeValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TmpBulkProductAttributeValues`.
   */
  create(
    entity: TmpBulkProductAttributeValues<T>
  ): CreateRequestBuilder<TmpBulkProductAttributeValues<T>, T> {
    return new CreateRequestBuilder<TmpBulkProductAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TmpBulkProductAttributeValues` entity based on its keys.
   * @param catalogNumber Key property. See {@link TmpBulkProductAttributeValues.catalogNumber}.
   * @param attributeName Key property. See {@link TmpBulkProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link TmpBulkProductAttributeValues.attributeTypeName}.
   * @param displayProductNumber Key property. See {@link TmpBulkProductAttributeValues.displayProductNumber}.
   * @param internalOrgNumber Key property. See {@link TmpBulkProductAttributeValues.internalOrgNumber}.
   * @param languageId Key property. See {@link TmpBulkProductAttributeValues.languageId}.
   * @returns A request builder for creating requests to retrieve one `TmpBulkProductAttributeValues` entity based on its keys.
   */
  getByKey(
    catalogNumber: DeserializedType<T, 'Edm.String'>,
    attributeName: DeserializedType<T, 'Edm.String'>,
    attributeTypeName: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>,
    internalOrgNumber: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TmpBulkProductAttributeValues<T>, T> {
    return new GetByKeyRequestBuilder<TmpBulkProductAttributeValues<T>, T>(
      this.entityApi,
      {
        CatalogNumber: catalogNumber,
        AttributeName: attributeName,
        AttributeTypeName: attributeTypeName,
        DisplayProductNumber: displayProductNumber,
        InternalOrgNumber: internalOrgNumber,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TmpBulkProductAttributeValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TmpBulkProductAttributeValues`.
   */
  update(
    entity: TmpBulkProductAttributeValues<T>
  ): UpdateRequestBuilder<TmpBulkProductAttributeValues<T>, T> {
    return new UpdateRequestBuilder<TmpBulkProductAttributeValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TmpBulkProductAttributeValues`.
   * @param catalogNumber Key property. See {@link TmpBulkProductAttributeValues.catalogNumber}.
   * @param attributeName Key property. See {@link TmpBulkProductAttributeValues.attributeName}.
   * @param attributeTypeName Key property. See {@link TmpBulkProductAttributeValues.attributeTypeName}.
   * @param displayProductNumber Key property. See {@link TmpBulkProductAttributeValues.displayProductNumber}.
   * @param internalOrgNumber Key property. See {@link TmpBulkProductAttributeValues.internalOrgNumber}.
   * @param languageId Key property. See {@link TmpBulkProductAttributeValues.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `TmpBulkProductAttributeValues`.
   */
  delete(
    catalogNumber: string,
    attributeName: string,
    attributeTypeName: string,
    displayProductNumber: string,
    internalOrgNumber: string,
    languageId: string
  ): DeleteRequestBuilder<TmpBulkProductAttributeValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TmpBulkProductAttributeValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TmpBulkProductAttributeValues` by taking the entity as a parameter.
   */
  delete(
    entity: TmpBulkProductAttributeValues<T>
  ): DeleteRequestBuilder<TmpBulkProductAttributeValues<T>, T>;
  delete(
    catalogNumberOrEntity: any,
    attributeName?: string,
    attributeTypeName?: string,
    displayProductNumber?: string,
    internalOrgNumber?: string,
    languageId?: string
  ): DeleteRequestBuilder<TmpBulkProductAttributeValues<T>, T> {
    return new DeleteRequestBuilder<TmpBulkProductAttributeValues<T>, T>(
      this.entityApi,
      catalogNumberOrEntity instanceof TmpBulkProductAttributeValues
        ? catalogNumberOrEntity
        : {
            CatalogNumber: catalogNumberOrEntity!,
            AttributeName: attributeName!,
            AttributeTypeName: attributeTypeName!,
            DisplayProductNumber: displayProductNumber!,
            InternalOrgNumber: internalOrgNumber!,
            LanguageId: languageId!
          }
    );
  }
}
