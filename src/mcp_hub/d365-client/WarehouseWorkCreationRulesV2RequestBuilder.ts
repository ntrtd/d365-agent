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
import { WarehouseWorkCreationRulesV2 } from './WarehouseWorkCreationRulesV2';
import { WhsWorkTransType } from './WhsWorkTransType';
import { WhsWorkProcess } from './WhsWorkProcess';

/**
 * Request builder class for operations supported on the {@link WarehouseWorkCreationRulesV2} entity.
 */
export class WarehouseWorkCreationRulesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseWorkCreationRulesV2<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseWorkCreationRulesV2` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseWorkCreationRulesV2` entities.
   */
  getAll(): GetAllRequestBuilder<WarehouseWorkCreationRulesV2<T>, T> {
    return new GetAllRequestBuilder<WarehouseWorkCreationRulesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarehouseWorkCreationRulesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseWorkCreationRulesV2`.
   */
  create(
    entity: WarehouseWorkCreationRulesV2<T>
  ): CreateRequestBuilder<WarehouseWorkCreationRulesV2<T>, T> {
    return new CreateRequestBuilder<WarehouseWorkCreationRulesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarehouseWorkCreationRulesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseWorkCreationRulesV2.dataAreaId}.
   * @param workPolicyName Key property. See {@link WarehouseWorkCreationRulesV2.workPolicyName}.
   * @param workOrderType Key property. See {@link WarehouseWorkCreationRulesV2.workOrderType}.
   * @param workProcess Key property. See {@link WarehouseWorkCreationRulesV2.workProcess}.
   * @returns A request builder for creating requests to retrieve one `WarehouseWorkCreationRulesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    workPolicyName: DeserializedType<T, 'Edm.String'>,
    workOrderType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WHSWorkTransType'
    >,
    workProcess: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WhsWorkProcess'
    >
  ): GetByKeyRequestBuilder<WarehouseWorkCreationRulesV2<T>, T> {
    return new GetByKeyRequestBuilder<WarehouseWorkCreationRulesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WorkPolicyName: workPolicyName,
        WorkOrderType: workOrderType,
        WorkProcess: workProcess
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseWorkCreationRulesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseWorkCreationRulesV2`.
   */
  update(
    entity: WarehouseWorkCreationRulesV2<T>
  ): UpdateRequestBuilder<WarehouseWorkCreationRulesV2<T>, T> {
    return new UpdateRequestBuilder<WarehouseWorkCreationRulesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkCreationRulesV2`.
   * @param dataAreaId Key property. See {@link WarehouseWorkCreationRulesV2.dataAreaId}.
   * @param workPolicyName Key property. See {@link WarehouseWorkCreationRulesV2.workPolicyName}.
   * @param workOrderType Key property. See {@link WarehouseWorkCreationRulesV2.workOrderType}.
   * @param workProcess Key property. See {@link WarehouseWorkCreationRulesV2.workProcess}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkCreationRulesV2`.
   */
  delete(
    dataAreaId: string,
    workPolicyName: string,
    workOrderType: WhsWorkTransType,
    workProcess: WhsWorkProcess
  ): DeleteRequestBuilder<WarehouseWorkCreationRulesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseWorkCreationRulesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseWorkCreationRulesV2` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseWorkCreationRulesV2<T>
  ): DeleteRequestBuilder<WarehouseWorkCreationRulesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    workPolicyName?: string,
    workOrderType?: WhsWorkTransType,
    workProcess?: WhsWorkProcess
  ): DeleteRequestBuilder<WarehouseWorkCreationRulesV2<T>, T> {
    return new DeleteRequestBuilder<WarehouseWorkCreationRulesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseWorkCreationRulesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WorkPolicyName: workPolicyName!,
            WorkOrderType: workOrderType!,
            WorkProcess: workProcess!
          }
    );
  }
}
