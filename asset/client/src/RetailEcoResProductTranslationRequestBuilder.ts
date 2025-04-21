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
import { RetailEcoResProductTranslation } from './RetailEcoResProductTranslation';

/**
 * Request builder class for operations supported on the {@link RetailEcoResProductTranslation} entity.
 */
export class RetailEcoResProductTranslationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailEcoResProductTranslation<T>, T> {
  /**
   * Returns a request builder for querying all `RetailEcoResProductTranslation` entities.
   * @returns A request builder for creating requests to retrieve all `RetailEcoResProductTranslation` entities.
   */
  getAll(): GetAllRequestBuilder<RetailEcoResProductTranslation<T>, T> {
    return new GetAllRequestBuilder<RetailEcoResProductTranslation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailEcoResProductTranslation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailEcoResProductTranslation`.
   */
  create(
    entity: RetailEcoResProductTranslation<T>
  ): CreateRequestBuilder<RetailEcoResProductTranslation<T>, T> {
    return new CreateRequestBuilder<RetailEcoResProductTranslation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailEcoResProductTranslation` entity based on its keys.
   * @param ecoResProductDisplayProductNumber Key property. See {@link RetailEcoResProductTranslation.ecoResProductDisplayProductNumber}.
   * @param languageId Key property. See {@link RetailEcoResProductTranslation.languageId}.
   * @returns A request builder for creating requests to retrieve one `RetailEcoResProductTranslation` entity based on its keys.
   */
  getByKey(
    ecoResProductDisplayProductNumber: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailEcoResProductTranslation<T>, T> {
    return new GetByKeyRequestBuilder<RetailEcoResProductTranslation<T>, T>(
      this.entityApi,
      {
        EcoResProduct_DisplayProductNumber: ecoResProductDisplayProductNumber,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailEcoResProductTranslation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailEcoResProductTranslation`.
   */
  update(
    entity: RetailEcoResProductTranslation<T>
  ): UpdateRequestBuilder<RetailEcoResProductTranslation<T>, T> {
    return new UpdateRequestBuilder<RetailEcoResProductTranslation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResProductTranslation`.
   * @param ecoResProductDisplayProductNumber Key property. See {@link RetailEcoResProductTranslation.ecoResProductDisplayProductNumber}.
   * @param languageId Key property. See {@link RetailEcoResProductTranslation.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResProductTranslation`.
   */
  delete(
    ecoResProductDisplayProductNumber: string,
    languageId: string
  ): DeleteRequestBuilder<RetailEcoResProductTranslation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailEcoResProductTranslation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailEcoResProductTranslation` by taking the entity as a parameter.
   */
  delete(
    entity: RetailEcoResProductTranslation<T>
  ): DeleteRequestBuilder<RetailEcoResProductTranslation<T>, T>;
  delete(
    ecoResProductDisplayProductNumberOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<RetailEcoResProductTranslation<T>, T> {
    return new DeleteRequestBuilder<RetailEcoResProductTranslation<T>, T>(
      this.entityApi,
      ecoResProductDisplayProductNumberOrEntity instanceof
      RetailEcoResProductTranslation
        ? ecoResProductDisplayProductNumberOrEntity
        : {
            EcoResProduct_DisplayProductNumber:
              ecoResProductDisplayProductNumberOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
