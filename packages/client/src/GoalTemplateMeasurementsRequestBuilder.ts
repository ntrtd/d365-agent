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
import { GoalTemplateMeasurements } from './GoalTemplateMeasurements';

/**
 * Request builder class for operations supported on the {@link GoalTemplateMeasurements} entity.
 */
export class GoalTemplateMeasurementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GoalTemplateMeasurements<T>, T> {
  /**
   * Returns a request builder for querying all `GoalTemplateMeasurements` entities.
   * @returns A request builder for creating requests to retrieve all `GoalTemplateMeasurements` entities.
   */
  getAll(): GetAllRequestBuilder<GoalTemplateMeasurements<T>, T> {
    return new GetAllRequestBuilder<GoalTemplateMeasurements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GoalTemplateMeasurements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GoalTemplateMeasurements`.
   */
  create(
    entity: GoalTemplateMeasurements<T>
  ): CreateRequestBuilder<GoalTemplateMeasurements<T>, T> {
    return new CreateRequestBuilder<GoalTemplateMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GoalTemplateMeasurements` entity based on its keys.
   * @param templateId Key property. See {@link GoalTemplateMeasurements.templateId}.
   * @param measurementId Key property. See {@link GoalTemplateMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link GoalTemplateMeasurements.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `GoalTemplateMeasurements` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.Int32'>,
    measurementId: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<GoalTemplateMeasurements<T>, T> {
    return new GetByKeyRequestBuilder<GoalTemplateMeasurements<T>, T>(
      this.entityApi,
      {
        TemplateId: templateId,
        MeasurementId: measurementId,
        SequenceNumber: sequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GoalTemplateMeasurements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GoalTemplateMeasurements`.
   */
  update(
    entity: GoalTemplateMeasurements<T>
  ): UpdateRequestBuilder<GoalTemplateMeasurements<T>, T> {
    return new UpdateRequestBuilder<GoalTemplateMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GoalTemplateMeasurements`.
   * @param templateId Key property. See {@link GoalTemplateMeasurements.templateId}.
   * @param measurementId Key property. See {@link GoalTemplateMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link GoalTemplateMeasurements.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `GoalTemplateMeasurements`.
   */
  delete(
    templateId: number,
    measurementId: string,
    sequenceNumber: number
  ): DeleteRequestBuilder<GoalTemplateMeasurements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GoalTemplateMeasurements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GoalTemplateMeasurements` by taking the entity as a parameter.
   */
  delete(
    entity: GoalTemplateMeasurements<T>
  ): DeleteRequestBuilder<GoalTemplateMeasurements<T>, T>;
  delete(
    templateIdOrEntity: any,
    measurementId?: string,
    sequenceNumber?: number
  ): DeleteRequestBuilder<GoalTemplateMeasurements<T>, T> {
    return new DeleteRequestBuilder<GoalTemplateMeasurements<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof GoalTemplateMeasurements
        ? templateIdOrEntity
        : {
            TemplateId: templateIdOrEntity!,
            MeasurementId: measurementId!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
