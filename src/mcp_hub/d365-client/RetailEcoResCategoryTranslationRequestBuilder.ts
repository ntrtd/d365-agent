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
import { RetailEcoResCategoryTranslation } from './RetailEcoResCategoryTranslation';

/**
 * Request builder class for operations supported on the {@link RetailEcoResCategoryTranslation} entity.
 */
export class RetailEcoResCategoryTranslationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEcoResCategoryTranslation<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEcoResCategoryTranslation` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEcoResCategoryTranslation` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEcoResCategoryTranslation<T>, T> {
    return new GetAllRequestBuilder<RetailEcoResCategoryTranslation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEcoResCategoryTranslation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEcoResCategoryTranslation`.
   */
  create(
    entity: RetailEcoResCategoryTranslation<T>
  ): CreateRequestBuilder<RetailEcoResCategoryTranslation<T>, T> {
    return new CreateRequestBuilder<RetailEcoResCategoryTranslation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEcoResCategoryTranslation` entity based on its keys.
   * @param ecoResCategoryName Key property. See {@link RetailEcoResCategoryTranslation.ecoResCategoryName}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RetailEcoResCategoryTranslation.ecoResCategoryHierarchyName}.
   * @param languageId Key property. See {@link RetailEcoResCategoryTranslation.languageId}.
   * @returns A request builder for creating requests to retrieve one `RetailEcoResCategoryTranslation` entity based on its keys.
   */
  getByKey(
    ecoResCategoryName: DeserializedType<T, 'Edm.String'>,
    ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEcoResCategoryTranslation<T>, T> {
    return new GetByKeyRequestBuilder<RetailEcoResCategoryTranslation<T>, T>(
      this.entityApi,
      {
        EcoResCategory_Name: ecoResCategoryName,
        EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEcoResCategoryTranslation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEcoResCategoryTranslation`.
   */
  update(
    entity: RetailEcoResCategoryTranslation<T>
  ): UpdateRequestBuilder<RetailEcoResCategoryTranslation<T>, T> {
    return new UpdateRequestBuilder<RetailEcoResCategoryTranslation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategoryTranslation`.
   * @param ecoResCategoryName Key property. See {@link RetailEcoResCategoryTranslation.ecoResCategoryName}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RetailEcoResCategoryTranslation.ecoResCategoryHierarchyName}.
   * @param languageId Key property. See {@link RetailEcoResCategoryTranslation.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategoryTranslation`.
   */
  delete(
    ecoResCategoryName: string,
    ecoResCategoryHierarchyName: string,
    languageId: string
  ): DeleteRequestBuilder<RetailEcoResCategoryTranslation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResCategoryTranslation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResCategoryTranslation` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEcoResCategoryTranslation<T>
  ): DeleteRequestBuilder<RetailEcoResCategoryTranslation<T>, T>;
  delete(
    ecoResCategoryNameOrEntity: any,
    ecoResCategoryHierarchyName?: string,
    languageId?: string
  ): DeleteRequestBuilder<RetailEcoResCategoryTranslation<T>, T> {
    return new DeleteRequestBuilder<RetailEcoResCategoryTranslation<T>, T>(
      this.entityApi,
      ecoResCategoryNameOrEntity instanceof RetailEcoResCategoryTranslation
        ? ecoResCategoryNameOrEntity
        : {
            EcoResCategory_Name: ecoResCategoryNameOrEntity!,
            EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName!,
            LanguageId: languageId!
          }
    );
  }
}
