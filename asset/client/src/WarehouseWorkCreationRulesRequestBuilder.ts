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
import { WarehouseWorkCreationRules } from './WarehouseWorkCreationRules';
import { WhsWorkTransType } from './WhsWorkTransType';

/**
 * Request builder class for operations supported on the {@link WarehouseWorkCreationRules} entity.
 */
export class WarehouseWorkCreationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseWorkCreationRules<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseWorkCreationRules` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseWorkCreationRules` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseWorkCreationRules<T>, T> {
    return new GetAllRequestBuilder<WarehouseWorkCreationRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseWorkCreationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseWorkCreationRules`.
   */
  create(
    entity: WarehouseWorkCreationRules<T>
  ): CreateRequestBuilder<WarehouseWorkCreationRules<T>, T> {
    return new CreateRequestBuilder<WarehouseWorkCreationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseWorkCreationRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseWorkCreationRules.dataAreaId}.
   * @param workPolicyName Key property. See {@link WarehouseWorkCreationRules.workPolicyName}.
   * @param workOrderType Key property. See {@link WarehouseWorkCreationRules.workOrderType}.
   * @returns A request builder for creating requests to retrieve one `WarehouseWorkCreationRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workPolicyName: DeserializedType<T, 'Edm.String'>,
    workOrderType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WHSWorkTransType'
    >
  ): GetByKeyRequestBuilder<WarehouseWorkCreationRules<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseWorkCreationRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkPolicyName: workPolicyName,
        WorkOrderType: workOrderType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseWorkCreationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseWorkCreationRules`.
   */
  update(
    entity: WarehouseWorkCreationRules<T>
  ): UpdateRequestBuilder<WarehouseWorkCreationRules<T>, T> {
    return new UpdateRequestBuilder<WarehouseWorkCreationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkCreationRules`.
   * @param dataAreaId Key property. See {@link WarehouseWorkCreationRules.dataAreaId}.
   * @param workPolicyName Key property. See {@link WarehouseWorkCreationRules.workPolicyName}.
   * @param workOrderType Key property. See {@link WarehouseWorkCreationRules.workOrderType}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkCreationRules`.
   */
  delete(
    dataAreaId: string,
    workPolicyName: string,
    workOrderType: WhsWorkTransType
  ): DeleteRequestBuilder<WarehouseWorkCreationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkCreationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkCreationRules` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseWorkCreationRules<T>
  ): DeleteRequestBuilder<WarehouseWorkCreationRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workPolicyName?: string,
    workOrderType?: WhsWorkTransType
  ): DeleteRequestBuilder<WarehouseWorkCreationRules<T>, T> {
    return new DeleteRequestBuilder<WarehouseWorkCreationRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseWorkCreationRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkPolicyName: workPolicyName!,
            WorkOrderType: workOrderType!
          }
    );
  }
}
