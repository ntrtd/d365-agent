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
import { EcoResProductTranslationBiEntities } from './EcoResProductTranslationBiEntities';

/**
 * Request builder class for operations supported on the {@link EcoResProductTranslationBiEntities} entity.
 */
export class EcoResProductTranslationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EcoResProductTranslationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `EcoResProductTranslationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `EcoResProductTranslationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<EcoResProductTranslationBiEntities<T>, T> {
    return new GetAllRequestBuilder<EcoResProductTranslationBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EcoResProductTranslationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EcoResProductTranslationBiEntities`.
   */
  create(
    entity: EcoResProductTranslationBiEntities<T>
  ): CreateRequestBuilder<EcoResProductTranslationBiEntities<T>, T> {
    return new CreateRequestBuilder<EcoResProductTranslationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EcoResProductTranslationBiEntities` entity based on its keys.
   * @param product Key property. See {@link EcoResProductTranslationBiEntities.product}.
   * @param languageId Key property. See {@link EcoResProductTranslationBiEntities.languageId}.
   * @returns A request builder for creating requests to retrieve one `EcoResProductTranslationBiEntities` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.Int64'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EcoResProductTranslationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<EcoResProductTranslationBiEntities<T>, T>(
      this.entityApi,
      {
        Product: product,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EcoResProductTranslationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EcoResProductTranslationBiEntities`.
   */
  update(
    entity: EcoResProductTranslationBiEntities<T>
  ): UpdateRequestBuilder<EcoResProductTranslationBiEntities<T>, T> {
    return new UpdateRequestBuilder<EcoResProductTranslationBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EcoResProductTranslationBiEntities`.
   * @param product Key property. See {@link EcoResProductTranslationBiEntities.product}.
   * @param languageId Key property. See {@link EcoResProductTranslationBiEntities.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `EcoResProductTranslationBiEntities`.
   */
  delete(
    product: BigNumber,
    languageId: string
  ): DeleteRequestBuilder<EcoResProductTranslationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EcoResProductTranslationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EcoResProductTranslationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: EcoResProductTranslationBiEntities<T>
  ): DeleteRequestBuilder<EcoResProductTranslationBiEntities<T>, T>;
  delete(
    productOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<EcoResProductTranslationBiEntities<T>, T> {
    return new DeleteRequestBuilder<EcoResProductTranslationBiEntities<T>, T>(
      this.entityApi,
      productOrEntity instanceof EcoResProductTranslationBiEntities
        ? productOrEntity
        : {
            Product: productOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
