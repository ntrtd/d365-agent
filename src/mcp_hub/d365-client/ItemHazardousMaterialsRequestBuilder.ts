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
import { ItemHazardousMaterials } from './ItemHazardousMaterials';

/**
 * Request builder class for operations supported on the {@link ItemHazardousMaterials} entity.
 */
export class ItemHazardousMaterialsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemHazardousMaterials<T>, T> {
  /**
   * Returns a request builder for querying all `ItemHazardousMaterials` entities.
   * @returns A request builder for creating requests to retrieve all `ItemHazardousMaterials` entities.
   */
  getAll(): GetAllRequestBuilder<ItemHazardousMaterials<T>, T> {
    return new GetAllRequestBuilder<ItemHazardousMaterials<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemHazardousMaterials` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemHazardousMaterials`.
   */
  create(
    entity: ItemHazardousMaterials<T>
  ): CreateRequestBuilder<ItemHazardousMaterials<T>, T> {
    return new CreateRequestBuilder<ItemHazardousMaterials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemHazardousMaterials` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterials.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterials.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterials.regCode}.
   * @returns A request builder for creating requests to retrieve one `ItemHazardousMaterials` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    regCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemHazardousMaterials<T>, T> {
    return new GetByKeyRequestBuilder<ItemHazardousMaterials<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        RegCode: regCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemHazardousMaterials`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemHazardousMaterials`.
   */
  update(
    entity: ItemHazardousMaterials<T>
  ): UpdateRequestBuilder<ItemHazardousMaterials<T>, T> {
    return new UpdateRequestBuilder<ItemHazardousMaterials<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterials`.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterials.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterials.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterials.regCode}.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterials`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    regCode: string
  ): DeleteRequestBuilder<ItemHazardousMaterials<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterials`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterials` by taking the entity as a parameter.
   */
  delete(
    entity: ItemHazardousMaterials<T>
  ): DeleteRequestBuilder<ItemHazardousMaterials<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    regCode?: string
  ): DeleteRequestBuilder<ItemHazardousMaterials<T>, T> {
    return new DeleteRequestBuilder<ItemHazardousMaterials<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemHazardousMaterials
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            RegCode: regCode!
          }
    );
  }
}
