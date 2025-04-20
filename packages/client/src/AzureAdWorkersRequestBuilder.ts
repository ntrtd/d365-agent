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
import { AzureAdWorkers } from './AzureAdWorkers';

/**
 * Request builder class for operations supported on the {@link AzureAdWorkers} entity.
 */
export class AzureAdWorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AzureAdWorkers<T>, T> {
  /**
   * Returns a request builder for querying all `AzureAdWorkers` entities.
   * @returns A request builder for creating requests to retrieve all `AzureAdWorkers` entities.
   */
  getAll(): GetAllRequestBuilder<AzureAdWorkers<T>, T> {
    return new GetAllRequestBuilder<AzureAdWorkers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AzureAdWorkers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AzureAdWorkers`.
   */
  create(
    entity: AzureAdWorkers<T>
  ): CreateRequestBuilder<AzureAdWorkers<T>, T> {
    return new CreateRequestBuilder<AzureAdWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AzureAdWorkers` entity based on its keys.
   * @param employeeId Key property. See {@link AzureAdWorkers.employeeId}.
   * @returns A request builder for creating requests to retrieve one `AzureAdWorkers` entity based on its keys.
   */
  getByKey(
    employeeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AzureAdWorkers<T>, T> {
    return new GetByKeyRequestBuilder<AzureAdWorkers<T>, T>(this.entityApi, {
      EmployeeId: employeeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AzureAdWorkers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AzureAdWorkers`.
   */
  update(
    entity: AzureAdWorkers<T>
  ): UpdateRequestBuilder<AzureAdWorkers<T>, T> {
    return new UpdateRequestBuilder<AzureAdWorkers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AzureAdWorkers`.
   * @param employeeId Key property. See {@link AzureAdWorkers.employeeId}.
   * @returns A request builder for creating requests that delete an entity of type `AzureAdWorkers`.
   */
  delete(employeeId: string): DeleteRequestBuilder<AzureAdWorkers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AzureAdWorkers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AzureAdWorkers` by taking the entity as a parameter.
   */
  delete(entity: AzureAdWorkers<T>): DeleteRequestBuilder<AzureAdWorkers<T>, T>;
  delete(employeeIdOrEntity: any): DeleteRequestBuilder<AzureAdWorkers<T>, T> {
    return new DeleteRequestBuilder<AzureAdWorkers<T>, T>(
      this.entityApi,
      employeeIdOrEntity instanceof AzureAdWorkers
        ? employeeIdOrEntity
        : { EmployeeId: employeeIdOrEntity! }
    );
  }
}
