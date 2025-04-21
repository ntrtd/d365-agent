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
import { CompensationPayPerformanceAllocations } from './CompensationPayPerformanceAllocations';

/**
 * Request builder class for operations supported on the {@link CompensationPayPerformanceAllocations} entity.
 */
export class CompensationPayPerformanceAllocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationPayPerformanceAllocations<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationPayPerformanceAllocations` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationPayPerformanceAllocations` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationPayPerformanceAllocations<T>, T> {
    return new GetAllRequestBuilder<
      CompensationPayPerformanceAllocations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompensationPayPerformanceAllocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationPayPerformanceAllocations`.
   */
  create(
    entity: CompensationPayPerformanceAllocations<T>
  ): CreateRequestBuilder<CompensationPayPerformanceAllocations<T>, T> {
    return new CreateRequestBuilder<
      CompensationPayPerformanceAllocations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CompensationPayPerformanceAllocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationPayPerformanceAllocations.dataAreaId}.
   * @param departmentNumber Key property. See {@link CompensationPayPerformanceAllocations.departmentNumber}.
   * @param plan Key property. See {@link CompensationPayPerformanceAllocations.plan}.
   * @returns A request builder for creating requests to retrieve one `CompensationPayPerformanceAllocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    departmentNumber: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationPayPerformanceAllocations<T>, T> {
    return new GetByKeyRequestBuilder<
      CompensationPayPerformanceAllocations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DepartmentNumber: departmentNumber,
      Plan: plan
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationPayPerformanceAllocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationPayPerformanceAllocations`.
   */
  update(
    entity: CompensationPayPerformanceAllocations<T>
  ): UpdateRequestBuilder<CompensationPayPerformanceAllocations<T>, T> {
    return new UpdateRequestBuilder<
      CompensationPayPerformanceAllocations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationPayPerformanceAllocations`.
   * @param dataAreaId Key property. See {@link CompensationPayPerformanceAllocations.dataAreaId}.
   * @param departmentNumber Key property. See {@link CompensationPayPerformanceAllocations.departmentNumber}.
   * @param plan Key property. See {@link CompensationPayPerformanceAllocations.plan}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPayPerformanceAllocations`.
   */
  delete(
    dataAreaId: string,
    departmentNumber: string,
    plan: string
  ): DeleteRequestBuilder<CompensationPayPerformanceAllocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationPayPerformanceAllocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPayPerformanceAllocations` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationPayPerformanceAllocations<T>
  ): DeleteRequestBuilder<CompensationPayPerformanceAllocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    departmentNumber?: string,
    plan?: string
  ): DeleteRequestBuilder<CompensationPayPerformanceAllocations<T>, T> {
    return new DeleteRequestBuilder<
      CompensationPayPerformanceAllocations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationPayPerformanceAllocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepartmentNumber: departmentNumber!,
            Plan: plan!
          }
    );
  }
}
