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
import { ItemMaterialCodeShipTxtTranslations } from './ItemMaterialCodeShipTxtTranslations';

/**
 * Request builder class for operations supported on the {@link ItemMaterialCodeShipTxtTranslations} entity.
 */
export class ItemMaterialCodeShipTxtTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `ItemMaterialCodeShipTxtTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `ItemMaterialCodeShipTxtTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T> {
    return new GetAllRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemMaterialCodeShipTxtTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemMaterialCodeShipTxtTranslations`.
   */
  create(
    entity: ItemMaterialCodeShipTxtTranslations<T>
  ): CreateRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T> {
    return new CreateRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemMaterialCodeShipTxtTranslations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemMaterialCodeShipTxtTranslations.dataAreaId}.
   * @param languageId Key property. See {@link ItemMaterialCodeShipTxtTranslations.languageId}.
   * @param material Key property. See {@link ItemMaterialCodeShipTxtTranslations.material}.
   * @returns A request builder for creating requests to retrieve one `ItemMaterialCodeShipTxtTranslations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>,
    material: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T> {
    return new GetByKeyRequestBuilder<
      ItemMaterialCodeShipTxtTranslations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LanguageId: languageId,
      Material: material
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemMaterialCodeShipTxtTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemMaterialCodeShipTxtTranslations`.
   */
  update(
    entity: ItemMaterialCodeShipTxtTranslations<T>
  ): UpdateRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T> {
    return new UpdateRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemMaterialCodeShipTxtTranslations`.
   * @param dataAreaId Key property. See {@link ItemMaterialCodeShipTxtTranslations.dataAreaId}.
   * @param languageId Key property. See {@link ItemMaterialCodeShipTxtTranslations.languageId}.
   * @param material Key property. See {@link ItemMaterialCodeShipTxtTranslations.material}.
   * @returns A request builder for creating requests that delete an entity of type `ItemMaterialCodeShipTxtTranslations`.
   */
  delete(
    dataAreaId: string,
    languageId: string,
    material: BigNumber
  ): DeleteRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemMaterialCodeShipTxtTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemMaterialCodeShipTxtTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: ItemMaterialCodeShipTxtTranslations<T>
  ): DeleteRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    languageId?: string,
    material?: BigNumber
  ): DeleteRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T> {
    return new DeleteRequestBuilder<ItemMaterialCodeShipTxtTranslations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemMaterialCodeShipTxtTranslations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LanguageId: languageId!,
            Material: material!
          }
    );
  }
}
