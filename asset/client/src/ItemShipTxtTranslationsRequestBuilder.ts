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
import { ItemShipTxtTranslations } from './ItemShipTxtTranslations';

/**
 * Request builder class for operations supported on the {@link ItemShipTxtTranslations} entity.
 */
export class ItemShipTxtTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemShipTxtTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ItemShipTxtTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ItemShipTxtTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ItemShipTxtTranslations<T>, T> {
    return new GetAllRequestBuilder<ItemShipTxtTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemShipTxtTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemShipTxtTranslations`.
   */
  create(
    entity: ItemShipTxtTranslations<T>
  ): CreateRequestBuilder<ItemShipTxtTranslations<T>, T> {
    return new CreateRequestBuilder<ItemShipTxtTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemShipTxtTranslations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemShipTxtTranslations.dataAreaId}.
   * @param languageId Key property. See {@link ItemShipTxtTranslations.languageId}.
   * @param material Key property. See {@link ItemShipTxtTranslations.material}.
   * @returns A request builder for creating requests to retrieve one `ItemShipTxtTranslations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>,
    material: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ItemShipTxtTranslations<T>, T> {
    return new GetByKeyRequestBuilder<ItemShipTxtTranslations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LanguageId: languageId,
        Material: material
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemShipTxtTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemShipTxtTranslations`.
   */
  update(
    entity: ItemShipTxtTranslations<T>
  ): UpdateRequestBuilder<ItemShipTxtTranslations<T>, T> {
    return new UpdateRequestBuilder<ItemShipTxtTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemShipTxtTranslations`.
   * @param dataAreaId Key property. See {@link ItemShipTxtTranslations.dataAreaId}.
   * @param languageId Key property. See {@link ItemShipTxtTranslations.languageId}.
   * @param material Key property. See {@link ItemShipTxtTranslations.material}.
   * @returns A request builder for creating requests that delete an entity of type `ItemShipTxtTranslations`.
   */
  delete(
    dataAreaId: string,
    languageId: string,
    material: BigNumber
  ): DeleteRequestBuilder<ItemShipTxtTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemShipTxtTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemShipTxtTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ItemShipTxtTranslations<T>
  ): DeleteRequestBuilder<ItemShipTxtTranslations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    languageId?: string,
    material?: BigNumber
  ): DeleteRequestBuilder<ItemShipTxtTranslations<T>, T> {
    return new DeleteRequestBuilder<ItemShipTxtTranslations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemShipTxtTranslations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LanguageId: languageId!,
            Material: material!
          }
    );
  }
}
