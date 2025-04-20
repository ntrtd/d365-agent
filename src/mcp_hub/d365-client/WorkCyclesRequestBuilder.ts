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
import { WorkCycles } from './WorkCycles';

/**
 * Request builder class for operations supported on the {@link WorkCycles} entity.
 */
export class WorkCyclesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkCycles<T>, T> {
  /**
   * Returns a request builder for querying all `WorkCycles` entities.
   * @returns A request builder for creating requests to retrieve all `WorkCycles` entities.
   */
  getAll(): GetAllRequestBuilder<WorkCycles<T>, T> {
    return new GetAllRequestBuilder<WorkCycles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkCycles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkCycles`.
   */
  create(entity: WorkCycles<T>): CreateRequestBuilder<WorkCycles<T>, T> {
    return new CreateRequestBuilder<WorkCycles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WorkCycles` entity based on its keys.
   * @param workCycleId Key property. See {@link WorkCycles.workCycleId}.
   * @returns A request builder for creating requests to retrieve one `WorkCycles` entity based on its keys.
   */
  getByKey(
    workCycleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkCycles<T>, T> {
    return new GetByKeyRequestBuilder<WorkCycles<T>, T>(this.entityApi, {
      WorkCycleId: workCycleId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkCycles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkCycles`.
   */
  update(entity: WorkCycles<T>): UpdateRequestBuilder<WorkCycles<T>, T> {
    return new UpdateRequestBuilder<WorkCycles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkCycles`.
   * @param workCycleId Key property. See {@link WorkCycles.workCycleId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkCycles`.
   */
  delete(workCycleId: string): DeleteRequestBuilder<WorkCycles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkCycles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkCycles` by taking the entity as a parameter.
   */
  delete(entity: WorkCycles<T>): DeleteRequestBuilder<WorkCycles<T>, T>;
  delete(workCycleIdOrEntity: any): DeleteRequestBuilder<WorkCycles<T>, T> {
    return new DeleteRequestBuilder<WorkCycles<T>, T>(
      this.entityApi,
      workCycleIdOrEntity instanceof WorkCycles
        ? workCycleIdOrEntity
        : { WorkCycleId: workCycleIdOrEntity! }
    );
  }
}
