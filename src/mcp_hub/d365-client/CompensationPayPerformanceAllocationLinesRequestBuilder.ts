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
import { CompensationPayPerformanceAllocationLines } from './CompensationPayPerformanceAllocationLines';
import { HrmCompPlanType } from './HrmCompPlanType';
import { HrmCompRatingModel } from './HrmCompRatingModel';

/**
 * Request builder class for operations supported on the {@link CompensationPayPerformanceAllocationLines} entity.
 */
export class CompensationPayPerformanceAllocationLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationPayPerformanceAllocationLines<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationPayPerformanceAllocationLines` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationPayPerformanceAllocationLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    CompensationPayPerformanceAllocationLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CompensationPayPerformanceAllocationLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompensationPayPerformanceAllocationLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationPayPerformanceAllocationLines`.
   */
  create(
    entity: CompensationPayPerformanceAllocationLines<T>
  ): CreateRequestBuilder<CompensationPayPerformanceAllocationLines<T>, T> {
    return new CreateRequestBuilder<
      CompensationPayPerformanceAllocationLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CompensationPayPerformanceAllocationLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationPayPerformanceAllocationLines.dataAreaId}.
   * @param ratingLevelId Key property. See {@link CompensationPayPerformanceAllocationLines.ratingLevelId}.
   * @param allocationId Key property. See {@link CompensationPayPerformanceAllocationLines.allocationId}.
   * @param planType Key property. See {@link CompensationPayPerformanceAllocationLines.planType}.
   * @param ratingModelType Key property. See {@link CompensationPayPerformanceAllocationLines.ratingModelType}.
   * @param compPerfRatingId Key property. See {@link CompensationPayPerformanceAllocationLines.compPerfRatingId}.
   * @param ratingModelId Key property. See {@link CompensationPayPerformanceAllocationLines.ratingModelId}.
   * @returns A request builder for creating requests to retrieve one `CompensationPayPerformanceAllocationLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ratingLevelId: DeserializedType<T, 'Edm.String'>,
    allocationId: DeserializedType<T, 'Edm.String'>,
    planType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmCompPlanType'
    >,
    ratingModelType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmCompRatingModel'
    >,
    compPerfRatingId: DeserializedType<T, 'Edm.String'>,
    ratingModelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationPayPerformanceAllocationLines<T>, T> {
    return new GetByKeyRequestBuilder<
      CompensationPayPerformanceAllocationLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      RatingLevelId: ratingLevelId,
      AllocationId: allocationId,
      PlanType: planType,
      RatingModelType: ratingModelType,
      CompPerfRatingId: compPerfRatingId,
      RatingModelId: ratingModelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationPayPerformanceAllocationLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationPayPerformanceAllocationLines`.
   */
  update(
    entity: CompensationPayPerformanceAllocationLines<T>
  ): UpdateRequestBuilder<CompensationPayPerformanceAllocationLines<T>, T> {
    return new UpdateRequestBuilder<
      CompensationPayPerformanceAllocationLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationPayPerformanceAllocationLines`.
   * @param dataAreaId Key property. See {@link CompensationPayPerformanceAllocationLines.dataAreaId}.
   * @param ratingLevelId Key property. See {@link CompensationPayPerformanceAllocationLines.ratingLevelId}.
   * @param allocationId Key property. See {@link CompensationPayPerformanceAllocationLines.allocationId}.
   * @param planType Key property. See {@link CompensationPayPerformanceAllocationLines.planType}.
   * @param ratingModelType Key property. See {@link CompensationPayPerformanceAllocationLines.ratingModelType}.
   * @param compPerfRatingId Key property. See {@link CompensationPayPerformanceAllocationLines.compPerfRatingId}.
   * @param ratingModelId Key property. See {@link CompensationPayPerformanceAllocationLines.ratingModelId}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPayPerformanceAllocationLines`.
   */
  delete(
    dataAreaId: string,
    ratingLevelId: string,
    allocationId: string,
    planType: HrmCompPlanType,
    ratingModelType: HrmCompRatingModel,
    compPerfRatingId: string,
    ratingModelId: string
  ): DeleteRequestBuilder<CompensationPayPerformanceAllocationLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationPayPerformanceAllocationLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationPayPerformanceAllocationLines` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationPayPerformanceAllocationLines<T>
  ): DeleteRequestBuilder<CompensationPayPerformanceAllocationLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ratingLevelId?: string,
    allocationId?: string,
    planType?: HrmCompPlanType,
    ratingModelType?: HrmCompRatingModel,
    compPerfRatingId?: string,
    ratingModelId?: string
  ): DeleteRequestBuilder<CompensationPayPerformanceAllocationLines<T>, T> {
    return new DeleteRequestBuilder<
      CompensationPayPerformanceAllocationLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationPayPerformanceAllocationLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RatingLevelId: ratingLevelId!,
            AllocationId: allocationId!,
            PlanType: planType!,
            RatingModelType: ratingModelType!,
            CompPerfRatingId: compPerfRatingId!,
            RatingModelId: ratingModelId!
          }
    );
  }
}
