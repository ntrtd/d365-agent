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
import { CompVarPlanLevelsV2 } from './CompVarPlanLevelsV2';

/**
 * Request builder class for operations supported on the {@link CompVarPlanLevelsV2} entity.
 */
export class CompVarPlanLevelsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompVarPlanLevelsV2<T>, T> {
  /**
   * Returns a request builder for querying all `CompVarPlanLevelsV2` entities.
   * @returns A request builder for creating requests to retrieve all `CompVarPlanLevelsV2` entities.
   */
  getAll(): GetAllRequestBuilder<CompVarPlanLevelsV2<T>, T> {
    return new GetAllRequestBuilder<CompVarPlanLevelsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompVarPlanLevelsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompVarPlanLevelsV2`.
   */
  create(
    entity: CompVarPlanLevelsV2<T>
  ): CreateRequestBuilder<CompVarPlanLevelsV2<T>, T> {
    return new CreateRequestBuilder<CompVarPlanLevelsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompVarPlanLevelsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompVarPlanLevelsV2.dataAreaId}.
   * @param compensationLevelId Key property. See {@link CompVarPlanLevelsV2.compensationLevelId}.
   * @param planId Key property. See {@link CompVarPlanLevelsV2.planId}.
   * @returns A request builder for creating requests to retrieve one `CompVarPlanLevelsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    compensationLevelId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompVarPlanLevelsV2<T>, T> {
    return new GetByKeyRequestBuilder<CompVarPlanLevelsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CompensationLevelId: compensationLevelId,
        PlanId: planId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompVarPlanLevelsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompVarPlanLevelsV2`.
   */
  update(
    entity: CompVarPlanLevelsV2<T>
  ): UpdateRequestBuilder<CompVarPlanLevelsV2<T>, T> {
    return new UpdateRequestBuilder<CompVarPlanLevelsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompVarPlanLevelsV2`.
   * @param dataAreaId Key property. See {@link CompVarPlanLevelsV2.dataAreaId}.
   * @param compensationLevelId Key property. See {@link CompVarPlanLevelsV2.compensationLevelId}.
   * @param planId Key property. See {@link CompVarPlanLevelsV2.planId}.
   * @returns A request builder for creating requests that delete an entity of type `CompVarPlanLevelsV2`.
   */
  delete(
    dataAreaId: string,
    compensationLevelId: string,
    planId: string
  ): DeleteRequestBuilder<CompVarPlanLevelsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompVarPlanLevelsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompVarPlanLevelsV2` by taking the entity as a parameter.
   */
  delete(
    entity: CompVarPlanLevelsV2<T>
  ): DeleteRequestBuilder<CompVarPlanLevelsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    compensationLevelId?: string,
    planId?: string
  ): DeleteRequestBuilder<CompVarPlanLevelsV2<T>, T> {
    return new DeleteRequestBuilder<CompVarPlanLevelsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompVarPlanLevelsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CompensationLevelId: compensationLevelId!,
            PlanId: planId!
          }
    );
  }
}
