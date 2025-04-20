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
import { LeaseExecutoryCostContractImports } from './LeaseExecutoryCostContractImports';

/**
 * Request builder class for operations supported on the {@link LeaseExecutoryCostContractImports} entity.
 */
export class LeaseExecutoryCostContractImportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseExecutoryCostContractImports<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseExecutoryCostContractImports` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseExecutoryCostContractImports` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseExecutoryCostContractImports<T>, T> {
    return new GetAllRequestBuilder<LeaseExecutoryCostContractImports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseExecutoryCostContractImports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseExecutoryCostContractImports`.
   */
  create(
    entity: LeaseExecutoryCostContractImports<T>
  ): CreateRequestBuilder<LeaseExecutoryCostContractImports<T>, T> {
    return new CreateRequestBuilder<LeaseExecutoryCostContractImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseExecutoryCostContractImports` entity based on its keys.
   * @param leaseId Key property. See {@link LeaseExecutoryCostContractImports.leaseId}.
   * @param importId Key property. See {@link LeaseExecutoryCostContractImports.importId}.
   * @param startDate Key property. See {@link LeaseExecutoryCostContractImports.startDate}.
   * @param expenseType Key property. See {@link LeaseExecutoryCostContractImports.expenseType}.
   * @returns A request builder for creating requests to retrieve one `LeaseExecutoryCostContractImports` entity based on its keys.
   */
  getByKey(
    leaseId: DeserializedType<T, 'Edm.String'>,
    importId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expenseType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseExecutoryCostContractImports<T>, T> {
    return new GetByKeyRequestBuilder<LeaseExecutoryCostContractImports<T>, T>(
      this.entityApi,
      {
        LeaseId: leaseId,
        ImportId: importId,
        StartDate: startDate,
        ExpenseType: expenseType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseExecutoryCostContractImports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseExecutoryCostContractImports`.
   */
  update(
    entity: LeaseExecutoryCostContractImports<T>
  ): UpdateRequestBuilder<LeaseExecutoryCostContractImports<T>, T> {
    return new UpdateRequestBuilder<LeaseExecutoryCostContractImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostContractImports`.
   * @param leaseId Key property. See {@link LeaseExecutoryCostContractImports.leaseId}.
   * @param importId Key property. See {@link LeaseExecutoryCostContractImports.importId}.
   * @param startDate Key property. See {@link LeaseExecutoryCostContractImports.startDate}.
   * @param expenseType Key property. See {@link LeaseExecutoryCostContractImports.expenseType}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostContractImports`.
   */
  delete(
    leaseId: string,
    importId: string,
    startDate: Moment,
    expenseType: string
  ): DeleteRequestBuilder<LeaseExecutoryCostContractImports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseExecutoryCostContractImports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseExecutoryCostContractImports` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseExecutoryCostContractImports<T>
  ): DeleteRequestBuilder<LeaseExecutoryCostContractImports<T>, T>;
  delete(
    leaseIdOrEntity: any,
    importId?: string,
    startDate?: Moment,
    expenseType?: string
  ): DeleteRequestBuilder<LeaseExecutoryCostContractImports<T>, T> {
    return new DeleteRequestBuilder<LeaseExecutoryCostContractImports<T>, T>(
      this.entityApi,
      leaseIdOrEntity instanceof LeaseExecutoryCostContractImports
        ? leaseIdOrEntity
        : {
            LeaseId: leaseIdOrEntity!,
            ImportId: importId!,
            StartDate: startDate!,
            ExpenseType: expenseType!
          }
    );
  }
}
