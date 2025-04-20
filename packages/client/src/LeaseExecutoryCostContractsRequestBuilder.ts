/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { LeaseExecutoryCostContracts } from './LeaseExecutoryCostContracts';

/**
 * Request builder class for operations supported on the {@link LeaseExecutoryCostContracts} entity.
 */
export class LeaseExecutoryCostContractsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExecutoryCostContracts<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExecutoryCostContracts` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExecutoryCostContracts` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExecutoryCostContracts<T>, T> {
    return new GetAllRequestBuilder<LeaseExecutoryCostContracts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseExecutoryCostContracts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExecutoryCostContracts`.
   */
  create(
    entity: LeaseExecutoryCostContracts<T>
  ): CreateRequestBuilder<LeaseExecutoryCostContracts<T>, T> {
    return new CreateRequestBuilder<LeaseExecutoryCostContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExecutoryCostContracts` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseExecutoryCostContracts.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseExecutoryCostContracts.leaseId}.
   * @param startDate Key property. See {@link LeaseExecutoryCostContracts.startDate}.
   * @param expenseType Key property. See {@link LeaseExecutoryCostContracts.expenseType}.
   * @returns A request builder for creating requests to retrieve one `LeaseExecutoryCostContracts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leaseId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expenseType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseExecutoryCostContracts<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExecutoryCostContracts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LeaseId: leaseId,
        StartDate: startDate,
        ExpenseType: expenseType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExecutoryCostContracts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExecutoryCostContracts`.
   */
  update(
    entity: LeaseExecutoryCostContracts<T>
  ): UpdateRequestBuilder<LeaseExecutoryCostContracts<T>, T> {
    return new UpdateRequestBuilder<LeaseExecutoryCostContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostContracts`.
   * @param dataAreaId Key property. See {@link LeaseExecutoryCostContracts.dataAreaId}.
   * @param leaseId Key property. See {@link LeaseExecutoryCostContracts.leaseId}.
   * @param startDate Key property. See {@link LeaseExecutoryCostContracts.startDate}.
   * @param expenseType Key property. See {@link LeaseExecutoryCostContracts.expenseType}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostContracts`.
   */
  delete(
    dataAreaId: string,
    leaseId: string,
    startDate: Moment,
    expenseType: string
  ): DeleteRequestBuilder<LeaseExecutoryCostContracts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostContracts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostContracts` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExecutoryCostContracts<T>
  ): DeleteRequestBuilder<LeaseExecutoryCostContracts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leaseId?: string,
    startDate?: Moment,
    expenseType?: string
  ): DeleteRequestBuilder<LeaseExecutoryCostContracts<T>, T> {
    return new DeleteRequestBuilder<LeaseExecutoryCostContracts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseExecutoryCostContracts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeaseId: leaseId!,
            StartDate: startDate!,
            ExpenseType: expenseType!
          }
    );
  }
}
