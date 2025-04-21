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
import { CompFixedPlanTables } from './CompFixedPlanTables';

/**
 * Request builder class for operations supported on the {@link CompFixedPlanTables} entity.
 */
export class CompFixedPlanTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompFixedPlanTables<T>, T> {
  /**
   * Returns a request builder for querying all `CompFixedPlanTables` entities.
   * @returns A request builder for creating requests to retrieve all `CompFixedPlanTables` entities.
   */
  getAll(): GetAllRequestBuilder<CompFixedPlanTables<T>, T> {
    return new GetAllRequestBuilder<CompFixedPlanTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompFixedPlanTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompFixedPlanTables`.
   */
  create(
    entity: CompFixedPlanTables<T>
  ): CreateRequestBuilder<CompFixedPlanTables<T>, T> {
    return new CreateRequestBuilder<CompFixedPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompFixedPlanTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompFixedPlanTables.dataAreaId}.
   * @param plan Key property. See {@link CompFixedPlanTables.plan}.
   * @returns A request builder for creating requests to retrieve one `CompFixedPlanTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompFixedPlanTables<T>, T> {
    return new GetByKeyRequestBuilder<CompFixedPlanTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Plan: plan
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompFixedPlanTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompFixedPlanTables`.
   */
  update(
    entity: CompFixedPlanTables<T>
  ): UpdateRequestBuilder<CompFixedPlanTables<T>, T> {
    return new UpdateRequestBuilder<CompFixedPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompFixedPlanTables`.
   * @param dataAreaId Key property. See {@link CompFixedPlanTables.dataAreaId}.
   * @param plan Key property. See {@link CompFixedPlanTables.plan}.
   * @returns A request builder for creating requests that delete an entity of type `CompFixedPlanTables`.
   */
  delete(
    dataAreaId: string,
    plan: string
  ): DeleteRequestBuilder<CompFixedPlanTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompFixedPlanTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompFixedPlanTables` by taking the entity as a parameter.
   */
  delete(
    entity: CompFixedPlanTables<T>
  ): DeleteRequestBuilder<CompFixedPlanTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    plan?: string
  ): DeleteRequestBuilder<CompFixedPlanTables<T>, T> {
    return new DeleteRequestBuilder<CompFixedPlanTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompFixedPlanTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Plan: plan!
          }
    );
  }
}
