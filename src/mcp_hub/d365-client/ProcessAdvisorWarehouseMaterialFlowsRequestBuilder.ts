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
import { ProcessAdvisorWarehouseMaterialFlows } from './ProcessAdvisorWarehouseMaterialFlows';

/**
 * Request builder class for operations supported on the {@link ProcessAdvisorWarehouseMaterialFlows} entity.
 */
export class ProcessAdvisorWarehouseMaterialFlowsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessAdvisorWarehouseMaterialFlows` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessAdvisorWarehouseMaterialFlows` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T> {
    return new GetAllRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessAdvisorWarehouseMaterialFlows` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessAdvisorWarehouseMaterialFlows`.
   */
  create(
    entity: ProcessAdvisorWarehouseMaterialFlows<T>
  ): CreateRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T> {
    return new CreateRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessAdvisorWarehouseMaterialFlows` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.dataAreaId}.
   * @param processAdvisorProcessId Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.processAdvisorProcessId}.
   * @param warehouseWorkId Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.warehouseWorkId}.
   * @param workLineNumber Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.workLineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProcessAdvisorWarehouseMaterialFlows` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    processAdvisorProcessId: DeserializedType<T, 'Edm.Int64'>,
    warehouseWorkId: DeserializedType<T, 'Edm.String'>,
    workLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T> {
    return new GetByKeyRequestBuilder<
      ProcessAdvisorWarehouseMaterialFlows<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProcessAdvisorProcessId: processAdvisorProcessId,
      WarehouseWorkId: warehouseWorkId,
      WorkLineNumber: workLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessAdvisorWarehouseMaterialFlows`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessAdvisorWarehouseMaterialFlows`.
   */
  update(
    entity: ProcessAdvisorWarehouseMaterialFlows<T>
  ): UpdateRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T> {
    return new UpdateRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessAdvisorWarehouseMaterialFlows`.
   * @param dataAreaId Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.dataAreaId}.
   * @param processAdvisorProcessId Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.processAdvisorProcessId}.
   * @param warehouseWorkId Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.warehouseWorkId}.
   * @param workLineNumber Key property. See {@link ProcessAdvisorWarehouseMaterialFlows.workLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessAdvisorWarehouseMaterialFlows`.
   */
  delete(
    dataAreaId: string,
    processAdvisorProcessId: BigNumber,
    warehouseWorkId: string,
    workLineNumber: BigNumber
  ): DeleteRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessAdvisorWarehouseMaterialFlows`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessAdvisorWarehouseMaterialFlows` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessAdvisorWarehouseMaterialFlows<T>
  ): DeleteRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    processAdvisorProcessId?: BigNumber,
    warehouseWorkId?: string,
    workLineNumber?: BigNumber
  ): DeleteRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T> {
    return new DeleteRequestBuilder<ProcessAdvisorWarehouseMaterialFlows<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcessAdvisorWarehouseMaterialFlows
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProcessAdvisorProcessId: processAdvisorProcessId!,
            WarehouseWorkId: warehouseWorkId!,
            WorkLineNumber: workLineNumber!
          }
    );
  }
}
