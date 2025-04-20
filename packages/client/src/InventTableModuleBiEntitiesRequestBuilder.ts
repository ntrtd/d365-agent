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
import { InventTableModuleBiEntities } from './InventTableModuleBiEntities';
import { ModuleInventPurchSales } from './ModuleInventPurchSales';

/**
 * Request builder class for operations supported on the {@link InventTableModuleBiEntities} entity.
 */
export class InventTableModuleBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventTableModuleBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventTableModuleBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventTableModuleBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventTableModuleBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventTableModuleBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventTableModuleBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventTableModuleBiEntities`.
   */
  create(
    entity: InventTableModuleBiEntities<T>
  ): CreateRequestBuilder<InventTableModuleBiEntities<T>, T> {
    return new CreateRequestBuilder<InventTableModuleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventTableModuleBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventTableModuleBiEntities.dataAreaId}.
   * @param itemId Key property. See {@link InventTableModuleBiEntities.itemId}.
   * @param moduleType Key property. See {@link InventTableModuleBiEntities.moduleType}.
   * @returns A request builder for creating requests to retrieve one `InventTableModuleBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    moduleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ModuleInventPurchSales'
    >
  ): GetByKeyRequestBuilder<InventTableModuleBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventTableModuleBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        ModuleType: moduleType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventTableModuleBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventTableModuleBiEntities`.
   */
  update(
    entity: InventTableModuleBiEntities<T>
  ): UpdateRequestBuilder<InventTableModuleBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventTableModuleBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventTableModuleBiEntities`.
   * @param dataAreaId Key property. See {@link InventTableModuleBiEntities.dataAreaId}.
   * @param itemId Key property. See {@link InventTableModuleBiEntities.itemId}.
   * @param moduleType Key property. See {@link InventTableModuleBiEntities.moduleType}.
   * @returns A request builder for creating requests that delete an entity of type `InventTableModuleBiEntities`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    moduleType: ModuleInventPurchSales
  ): DeleteRequestBuilder<InventTableModuleBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventTableModuleBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventTableModuleBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventTableModuleBiEntities<T>
  ): DeleteRequestBuilder<InventTableModuleBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    moduleType?: ModuleInventPurchSales
  ): DeleteRequestBuilder<InventTableModuleBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventTableModuleBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventTableModuleBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            ModuleType: moduleType!
          }
    );
  }
}
