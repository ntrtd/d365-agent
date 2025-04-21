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
import { InventoryProfileRelations } from './InventoryProfileRelations';

/**
 * Request builder class for operations supported on the {@link InventoryProfileRelations} entity.
 */
export class InventoryProfileRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryProfileRelations<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryProfileRelations` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryProfileRelations` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryProfileRelations<T>, T> {
    return new GetAllRequestBuilder<InventoryProfileRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryProfileRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryProfileRelations`.
   */
  create(
    entity: InventoryProfileRelations<T>
  ): CreateRequestBuilder<InventoryProfileRelations<T>, T> {
    return new CreateRequestBuilder<InventoryProfileRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryProfileRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryProfileRelations.dataAreaId}.
   * @param inventoryProfileId Key property. See {@link InventoryProfileRelations.inventoryProfileId}.
   * @param compatibleInventoryProfileId Key property. See {@link InventoryProfileRelations.compatibleInventoryProfileId}.
   * @returns A request builder for creating requests to retrieve one `InventoryProfileRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventoryProfileId: DeserializedType<T, 'Edm.String'>,
    compatibleInventoryProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryProfileRelations<T>, T> {
    return new GetByKeyRequestBuilder<InventoryProfileRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventoryProfileId: inventoryProfileId,
        CompatibleInventoryProfileId: compatibleInventoryProfileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryProfileRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryProfileRelations`.
   */
  update(
    entity: InventoryProfileRelations<T>
  ): UpdateRequestBuilder<InventoryProfileRelations<T>, T> {
    return new UpdateRequestBuilder<InventoryProfileRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryProfileRelations`.
   * @param dataAreaId Key property. See {@link InventoryProfileRelations.dataAreaId}.
   * @param inventoryProfileId Key property. See {@link InventoryProfileRelations.inventoryProfileId}.
   * @param compatibleInventoryProfileId Key property. See {@link InventoryProfileRelations.compatibleInventoryProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProfileRelations`.
   */
  delete(
    dataAreaId: string,
    inventoryProfileId: string,
    compatibleInventoryProfileId: string
  ): DeleteRequestBuilder<InventoryProfileRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryProfileRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProfileRelations` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryProfileRelations<T>
  ): DeleteRequestBuilder<InventoryProfileRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventoryProfileId?: string,
    compatibleInventoryProfileId?: string
  ): DeleteRequestBuilder<InventoryProfileRelations<T>, T> {
    return new DeleteRequestBuilder<InventoryProfileRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryProfileRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventoryProfileId: inventoryProfileId!,
            CompatibleInventoryProfileId: compatibleInventoryProfileId!
          }
    );
  }
}
