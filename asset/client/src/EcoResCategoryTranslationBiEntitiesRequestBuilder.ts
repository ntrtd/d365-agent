/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { EcoResCategoryTranslationBiEntities } from './EcoResCategoryTranslationBiEntities';

/**
 * Request builder class for operations supported on the {@link EcoResCategoryTranslationBiEntities} entity.
 */
export class EcoResCategoryTranslationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EcoResCategoryTranslationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `EcoResCategoryTranslationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `EcoResCategoryTranslationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T> {
    return new GetAllRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EcoResCategoryTranslationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EcoResCategoryTranslationBiEntities`.
   */
  create(
    entity: EcoResCategoryTranslationBiEntities<T>
  ): CreateRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T> {
    return new CreateRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EcoResCategoryTranslationBiEntities` entity based on its keys.
   * @param category Key property. See {@link EcoResCategoryTranslationBiEntities.category}.
   * @param languageId Key property. See {@link EcoResCategoryTranslationBiEntities.languageId}.
   * @returns A request builder for creating requests to retrieve one `EcoResCategoryTranslationBiEntities` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.Int64'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      EcoResCategoryTranslationBiEntities<T>,
      T
    >(this.entityApi, {
      Category: category,
      LanguageId: languageId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EcoResCategoryTranslationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EcoResCategoryTranslationBiEntities`.
   */
  update(
    entity: EcoResCategoryTranslationBiEntities<T>
  ): UpdateRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T> {
    return new UpdateRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EcoResCategoryTranslationBiEntities`.
   * @param category Key property. See {@link EcoResCategoryTranslationBiEntities.category}.
   * @param languageId Key property. See {@link EcoResCategoryTranslationBiEntities.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `EcoResCategoryTranslationBiEntities`.
   */
  delete(
    category: BigNumber,
    languageId: string
  ): DeleteRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EcoResCategoryTranslationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EcoResCategoryTranslationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: EcoResCategoryTranslationBiEntities<T>
  ): DeleteRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T>;
  delete(
    categoryOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T> {
    return new DeleteRequestBuilder<EcoResCategoryTranslationBiEntities<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof EcoResCategoryTranslationBiEntities
        ? categoryOrEntity
        : {
            Category: categoryOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
