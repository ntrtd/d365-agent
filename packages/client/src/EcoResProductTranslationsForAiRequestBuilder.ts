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
import { EcoResProductTranslationsForAi } from './EcoResProductTranslationsForAi';

/**
 * Request builder class for operations supported on the {@link EcoResProductTranslationsForAi} entity.
 */
export class EcoResProductTranslationsForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EcoResProductTranslationsForAi<T>, T> {
  /**
   * Returns a request builder for querying all `EcoResProductTranslationsForAi` entities.
   * @returns A request builder for creating requests to retrieve all `EcoResProductTranslationsForAi` entities.
   */
  getAll(): GetAllRequestBuilder<EcoResProductTranslationsForAi<T>, T> {
    return new GetAllRequestBuilder<EcoResProductTranslationsForAi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EcoResProductTranslationsForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EcoResProductTranslationsForAi`.
   */
  create(
    entity: EcoResProductTranslationsForAi<T>
  ): CreateRequestBuilder<EcoResProductTranslationsForAi<T>, T> {
    return new CreateRequestBuilder<EcoResProductTranslationsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EcoResProductTranslationsForAi` entity based on its keys.
   * @param productKey Key property. See {@link EcoResProductTranslationsForAi.productKey}.
   * @param languageId Key property. See {@link EcoResProductTranslationsForAi.languageId}.
   * @returns A request builder for creating requests to retrieve one `EcoResProductTranslationsForAi` entity based on its keys.
   */
  getByKey(
    productKey: DeserializedType<T, 'Edm.Int64'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EcoResProductTranslationsForAi<T>, T> {
    return new GetByKeyRequestBuilder<EcoResProductTranslationsForAi<T>, T>(
      this.entityApi,
      {
        ProductKey: productKey,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EcoResProductTranslationsForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EcoResProductTranslationsForAi`.
   */
  update(
    entity: EcoResProductTranslationsForAi<T>
  ): UpdateRequestBuilder<EcoResProductTranslationsForAi<T>, T> {
    return new UpdateRequestBuilder<EcoResProductTranslationsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EcoResProductTranslationsForAi`.
   * @param productKey Key property. See {@link EcoResProductTranslationsForAi.productKey}.
   * @param languageId Key property. See {@link EcoResProductTranslationsForAi.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `EcoResProductTranslationsForAi`.
   */
  delete(
    productKey: BigNumber,
    languageId: string
  ): DeleteRequestBuilder<EcoResProductTranslationsForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EcoResProductTranslationsForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EcoResProductTranslationsForAi` by taking the entity as a parameter.
   */
  delete(
    entity: EcoResProductTranslationsForAi<T>
  ): DeleteRequestBuilder<EcoResProductTranslationsForAi<T>, T>;
  delete(
    productKeyOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<EcoResProductTranslationsForAi<T>, T> {
    return new DeleteRequestBuilder<EcoResProductTranslationsForAi<T>, T>(
      this.entityApi,
      productKeyOrEntity instanceof EcoResProductTranslationsForAi
        ? productKeyOrEntity
        : {
            ProductKey: productKeyOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
