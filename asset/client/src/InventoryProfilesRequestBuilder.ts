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
import { InventoryProfiles } from './InventoryProfiles';

/**
 * Request builder class for operations supported on the {@link InventoryProfiles} entity.
 */
export class InventoryProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryProfiles<T>, T> {
    return new GetAllRequestBuilder<InventoryProfiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryProfiles`.
   */
  create(
    entity: InventoryProfiles<T>
  ): CreateRequestBuilder<InventoryProfiles<T>, T> {
    return new CreateRequestBuilder<InventoryProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryProfiles.dataAreaId}.
   * @param inventoryProfileId Key property. See {@link InventoryProfiles.inventoryProfileId}.
   * @returns A request builder for creating requests to retrieve one `InventoryProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryProfiles<T>, T> {
    return new GetByKeyRequestBuilder<InventoryProfiles<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InventoryProfileId: inventoryProfileId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryProfiles`.
   */
  update(
    entity: InventoryProfiles<T>
  ): UpdateRequestBuilder<InventoryProfiles<T>, T> {
    return new UpdateRequestBuilder<InventoryProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryProfiles`.
   * @param dataAreaId Key property. See {@link InventoryProfiles.dataAreaId}.
   * @param inventoryProfileId Key property. See {@link InventoryProfiles.inventoryProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProfiles`.
   */
  delete(
    dataAreaId: string,
    inventoryProfileId: string
  ): DeleteRequestBuilder<InventoryProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryProfiles<T>
  ): DeleteRequestBuilder<InventoryProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryProfileId?: string
  ): DeleteRequestBuilder<InventoryProfiles<T>, T> {
    return new DeleteRequestBuilder<InventoryProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryProfileId: inventoryProfileId!
          }
    );
  }
}
