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
import { CompVarPlanTablesV2 } from './CompVarPlanTablesV2';

/**
 * Request builder class for operations supported on the {@link CompVarPlanTablesV2} entity.
 */
export class CompVarPlanTablesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompVarPlanTablesV2<T>, T> {
  /**
   * Returns a request builder for querying all `CompVarPlanTablesV2` entities.
   * @returns A request builder for creating requests to retrieve all `CompVarPlanTablesV2` entities.
   */
  getAll(): GetAllRequestBuilder<CompVarPlanTablesV2<T>, T> {
    return new GetAllRequestBuilder<CompVarPlanTablesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompVarPlanTablesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompVarPlanTablesV2`.
   */
  create(
    entity: CompVarPlanTablesV2<T>
  ): CreateRequestBuilder<CompVarPlanTablesV2<T>, T> {
    return new CreateRequestBuilder<CompVarPlanTablesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompVarPlanTablesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompVarPlanTablesV2.dataAreaId}.
   * @param planId Key property. See {@link CompVarPlanTablesV2.planId}.
   * @returns A request builder for creating requests to retrieve one `CompVarPlanTablesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompVarPlanTablesV2<T>, T> {
    return new GetByKeyRequestBuilder<CompVarPlanTablesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PlanId: planId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompVarPlanTablesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompVarPlanTablesV2`.
   */
  update(
    entity: CompVarPlanTablesV2<T>
  ): UpdateRequestBuilder<CompVarPlanTablesV2<T>, T> {
    return new UpdateRequestBuilder<CompVarPlanTablesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompVarPlanTablesV2`.
   * @param dataAreaId Key property. See {@link CompVarPlanTablesV2.dataAreaId}.
   * @param planId Key property. See {@link CompVarPlanTablesV2.planId}.
   * @returns A request builder for creating requests that delete an entity of type `CompVarPlanTablesV2`.
   */
  delete(
    dataAreaId: string,
    planId: string
  ): DeleteRequestBuilder<CompVarPlanTablesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompVarPlanTablesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompVarPlanTablesV2` by taking the entity as a parameter.
   */
  delete(
    entity: CompVarPlanTablesV2<T>
  ): DeleteRequestBuilder<CompVarPlanTablesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    planId?: string
  ): DeleteRequestBuilder<CompVarPlanTablesV2<T>, T> {
    return new DeleteRequestBuilder<CompVarPlanTablesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompVarPlanTablesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlanId: planId!
          }
    );
  }
}
