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
import { GoalMeasurements } from './GoalMeasurements';

/**
 * Request builder class for operations supported on the {@link GoalMeasurements} entity.
 */
export class GoalMeasurementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GoalMeasurements<T>, T> {
  /**
   * Returns a request builder for querying all `GoalMeasurements` entities.
   * @returns A request builder for creating requests to retrieve all `GoalMeasurements` entities.
   */
  getAll(): GetAllRequestBuilder<GoalMeasurements<T>, T> {
    return new GetAllRequestBuilder<GoalMeasurements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GoalMeasurements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalMeasurements`.
   */
  create(
    entity: GoalMeasurements<T>
  ): CreateRequestBuilder<GoalMeasurements<T>, T> {
    return new CreateRequestBuilder<GoalMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GoalMeasurements` entity based on its keys.
   * @param goalId Key property. See {@link GoalMeasurements.goalId}.
   * @param goalHeadingId Key property. See {@link GoalMeasurements.goalHeadingId}.
   * @param personnelNumber Key property. See {@link GoalMeasurements.personnelNumber}.
   * @param measurementId Key property. See {@link GoalMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link GoalMeasurements.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `GoalMeasurements` entity based on its keys.
   */
  getByKey(
    goalId: DeserializedType<T, 'Edm.String'>,
    goalHeadingId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    measurementId: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<GoalMeasurements<T>, T> {
    return new GetByKeyRequestBuilder<GoalMeasurements<T>, T>(this.entityApi, {
      GoalId: goalId,
      GoalHeadingId: goalHeadingId,
      PersonnelNumber: personnelNumber,
      MeasurementId: measurementId,
      SequenceNumber: sequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GoalMeasurements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalMeasurements`.
   */
  update(
    entity: GoalMeasurements<T>
  ): UpdateRequestBuilder<GoalMeasurements<T>, T> {
    return new UpdateRequestBuilder<GoalMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalMeasurements`.
   * @param goalId Key property. See {@link GoalMeasurements.goalId}.
   * @param goalHeadingId Key property. See {@link GoalMeasurements.goalHeadingId}.
   * @param personnelNumber Key property. See {@link GoalMeasurements.personnelNumber}.
   * @param measurementId Key property. See {@link GoalMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link GoalMeasurements.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GoalMeasurements`.
   */
  delete(
    goalId: string,
    goalHeadingId: string,
    personnelNumber: string,
    measurementId: string,
    sequenceNumber: number
  ): DeleteRequestBuilder<GoalMeasurements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GoalMeasurements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalMeasurements` by taking the entity as a parameter.
   */
  delete(
    entity: GoalMeasurements<T>
  ): DeleteRequestBuilder<GoalMeasurements<T>, T>;
  delete(
    goalIdOrEntity: any,
    goalHeadingId?: string,
    personnelNumber?: string,
    measurementId?: string,
    sequenceNumber?: number
  ): DeleteRequestBuilder<GoalMeasurements<T>, T> {
    return new DeleteRequestBuilder<GoalMeasurements<T>, T>(
      this.entityApi,
      goalIdOrEntity instanceof GoalMeasurements
        ? goalIdOrEntity
        : {
            GoalId: goalIdOrEntity!,
            GoalHeadingId: goalHeadingId!,
            PersonnelNumber: personnelNumber!,
            MeasurementId: measurementId!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
