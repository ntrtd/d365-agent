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
import { ItemHazardousMaterialDetails } from './ItemHazardousMaterialDetails';

/**
 * Request builder class for operations supported on the {@link ItemHazardousMaterialDetails} entity.
 */
export class ItemHazardousMaterialDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemHazardousMaterialDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ItemHazardousMaterialDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ItemHazardousMaterialDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ItemHazardousMaterialDetails<T>, T> {
    return new GetAllRequestBuilder<ItemHazardousMaterialDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemHazardousMaterialDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemHazardousMaterialDetails`.
   */
  create(
    entity: ItemHazardousMaterialDetails<T>
  ): CreateRequestBuilder<ItemHazardousMaterialDetails<T>, T> {
    return new CreateRequestBuilder<ItemHazardousMaterialDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemHazardousMaterialDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialDetails.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialDetails.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialDetails.regCode}.
   * @returns A request builder for creating requests to retrieve one `ItemHazardousMaterialDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    regCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemHazardousMaterialDetails<T>, T> {
    return new GetByKeyRequestBuilder<ItemHazardousMaterialDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        RegCode: regCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemHazardousMaterialDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemHazardousMaterialDetails`.
   */
  update(
    entity: ItemHazardousMaterialDetails<T>
  ): UpdateRequestBuilder<ItemHazardousMaterialDetails<T>, T> {
    return new UpdateRequestBuilder<ItemHazardousMaterialDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialDetails`.
   * @param dataAreaId Key property. See {@link ItemHazardousMaterialDetails.dataAreaId}.
   * @param itemId Key property. See {@link ItemHazardousMaterialDetails.itemId}.
   * @param regCode Key property. See {@link ItemHazardousMaterialDetails.regCode}.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialDetails`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    regCode: string
  ): DeleteRequestBuilder<ItemHazardousMaterialDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemHazardousMaterialDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemHazardousMaterialDetails` by taking the entity as a parameter.
   */
  delete(
    entity: ItemHazardousMaterialDetails<T>
  ): DeleteRequestBuilder<ItemHazardousMaterialDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    regCode?: string
  ): DeleteRequestBuilder<ItemHazardousMaterialDetails<T>, T> {
    return new DeleteRequestBuilder<ItemHazardousMaterialDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemHazardousMaterialDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            RegCode: regCode!
          }
    );
  }
}
