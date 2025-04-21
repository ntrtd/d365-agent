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
import { CompVarPlanTables } from './CompVarPlanTables';

/**
 * Request builder class for operations supported on the {@link CompVarPlanTables} entity.
 */
export class CompVarPlanTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompVarPlanTables<T>, T> {
  /**
   * Returns a request builder for querying all `CompVarPlanTables` entities.
   * @returns A request builder for creating requests to retrieve all `CompVarPlanTables` entities.
   */
  getAll(): GetAllRequestBuilder<CompVarPlanTables<T>, T> {
    return new GetAllRequestBuilder<CompVarPlanTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompVarPlanTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompVarPlanTables`.
   */
  create(
    entity: CompVarPlanTables<T>
  ): CreateRequestBuilder<CompVarPlanTables<T>, T> {
    return new CreateRequestBuilder<CompVarPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompVarPlanTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompVarPlanTables.dataAreaId}.
   * @param planId Key property. See {@link CompVarPlanTables.planId}.
   * @returns A request builder for creating requests to retrieve one `CompVarPlanTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompVarPlanTables<T>, T> {
    return new GetByKeyRequestBuilder<CompVarPlanTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PlanId: planId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CompVarPlanTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompVarPlanTables`.
   */
  update(
    entity: CompVarPlanTables<T>
  ): UpdateRequestBuilder<CompVarPlanTables<T>, T> {
    return new UpdateRequestBuilder<CompVarPlanTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompVarPlanTables`.
   * @param dataAreaId Key property. See {@link CompVarPlanTables.dataAreaId}.
   * @param planId Key property. See {@link CompVarPlanTables.planId}.
   * @returns A request builder for creating requests that delete an entity of type `CompVarPlanTables`.
   */
  delete(
    dataAreaId: string,
    planId: string
  ): DeleteRequestBuilder<CompVarPlanTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompVarPlanTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompVarPlanTables` by taking the entity as a parameter.
   */
  delete(
    entity: CompVarPlanTables<T>
  ): DeleteRequestBuilder<CompVarPlanTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    planId?: string
  ): DeleteRequestBuilder<CompVarPlanTables<T>, T> {
    return new DeleteRequestBuilder<CompVarPlanTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompVarPlanTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlanId: planId!
          }
    );
  }
}
