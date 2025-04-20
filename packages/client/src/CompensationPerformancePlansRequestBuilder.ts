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
import { CompensationPerformancePlans } from './CompensationPerformancePlans';

/**
 * Request builder class for operations supported on the {@link CompensationPerformancePlans} entity.
 */
export class CompensationPerformancePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationPerformancePlans<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationPerformancePlans` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationPerformancePlans` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationPerformancePlans<T>, T> {
    return new GetAllRequestBuilder<CompensationPerformancePlans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationPerformancePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationPerformancePlans`.
   */
  create(
    entity: CompensationPerformancePlans<T>
  ): CreateRequestBuilder<CompensationPerformancePlans<T>, T> {
    return new CreateRequestBuilder<CompensationPerformancePlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationPerformancePlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationPerformancePlans.dataAreaId}.
   * @param plan Key property. See {@link CompensationPerformancePlans.plan}.
   * @returns A request builder for creating requests to retrieve one `CompensationPerformancePlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationPerformancePlans<T>, T> {
    return new GetByKeyRequestBuilder<CompensationPerformancePlans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Plan: plan
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationPerformancePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationPerformancePlans`.
   */
  update(
    entity: CompensationPerformancePlans<T>
  ): UpdateRequestBuilder<CompensationPerformancePlans<T>, T> {
    return new UpdateRequestBuilder<CompensationPerformancePlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationPerformancePlans`.
   * @param dataAreaId Key property. See {@link CompensationPerformancePlans.dataAreaId}.
   * @param plan Key property. See {@link CompensationPerformancePlans.plan}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPerformancePlans`.
   */
  delete(
    dataAreaId: string,
    plan: string
  ): DeleteRequestBuilder<CompensationPerformancePlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationPerformancePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPerformancePlans` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationPerformancePlans<T>
  ): DeleteRequestBuilder<CompensationPerformancePlans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    plan?: string
  ): DeleteRequestBuilder<CompensationPerformancePlans<T>, T> {
    return new DeleteRequestBuilder<CompensationPerformancePlans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationPerformancePlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Plan: plan!
          }
    );
  }
}
