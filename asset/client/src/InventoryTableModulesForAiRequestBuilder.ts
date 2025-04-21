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
import { InventoryTableModulesForAi } from './InventoryTableModulesForAi';
import { ModuleInventPurchSales } from './ModuleInventPurchSales';

/**
 * Request builder class for operations supported on the {@link InventoryTableModulesForAi} entity.
 */
export class InventoryTableModulesForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryTableModulesForAi<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryTableModulesForAi` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryTableModulesForAi` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryTableModulesForAi<T>, T> {
    return new GetAllRequestBuilder<InventoryTableModulesForAi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryTableModulesForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryTableModulesForAi`.
   */
  create(
    entity: InventoryTableModulesForAi<T>
  ): CreateRequestBuilder<InventoryTableModulesForAi<T>, T> {
    return new CreateRequestBuilder<InventoryTableModulesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryTableModulesForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryTableModulesForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link InventoryTableModulesForAi.itemNumber}.
   * @param moduleType Key property. See {@link InventoryTableModulesForAi.moduleType}.
   * @returns A request builder for creating requests to retrieve one `InventoryTableModulesForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    moduleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ModuleInventPurchSales'
    >
  ): GetByKeyRequestBuilder<InventoryTableModulesForAi<T>, T> {
    return new GetByKeyRequestBuilder<InventoryTableModulesForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ModuleType: moduleType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryTableModulesForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryTableModulesForAi`.
   */
  update(
    entity: InventoryTableModulesForAi<T>
  ): UpdateRequestBuilder<InventoryTableModulesForAi<T>, T> {
    return new UpdateRequestBuilder<InventoryTableModulesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryTableModulesForAi`.
   * @param dataAreaId Key property. See {@link InventoryTableModulesForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link InventoryTableModulesForAi.itemNumber}.
   * @param moduleType Key property. See {@link InventoryTableModulesForAi.moduleType}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTableModulesForAi`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    moduleType: ModuleInventPurchSales
  ): DeleteRequestBuilder<InventoryTableModulesForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryTableModulesForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryTableModulesForAi` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryTableModulesForAi<T>
  ): DeleteRequestBuilder<InventoryTableModulesForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    moduleType?: ModuleInventPurchSales
  ): DeleteRequestBuilder<InventoryTableModulesForAi<T>, T> {
    return new DeleteRequestBuilder<InventoryTableModulesForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryTableModulesForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ModuleType: moduleType!
          }
    );
  }
}
