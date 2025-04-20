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
import { DiscussionTemplateMeasurements } from './DiscussionTemplateMeasurements';

/**
 * Request builder class for operations supported on the {@link DiscussionTemplateMeasurements} entity.
 */
export class DiscussionTemplateMeasurementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionTemplateMeasurements<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionTemplateMeasurements` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionTemplateMeasurements` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionTemplateMeasurements<T>, T> {
    return new GetAllRequestBuilder<DiscussionTemplateMeasurements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscussionTemplateMeasurements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionTemplateMeasurements`.
   */
  create(
    entity: DiscussionTemplateMeasurements<T>
  ): CreateRequestBuilder<DiscussionTemplateMeasurements<T>, T> {
    return new CreateRequestBuilder<DiscussionTemplateMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionTemplateMeasurements` entity based on its keys.
   * @param templateId Key property. See {@link DiscussionTemplateMeasurements.templateId}.
   * @param measurementId Key property. See {@link DiscussionTemplateMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link DiscussionTemplateMeasurements.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `DiscussionTemplateMeasurements` entity based on its keys.
   */
  getByKey(
    templateId: DeserializedType<T, 'Edm.Int32'>,
    measurementId: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DiscussionTemplateMeasurements<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionTemplateMeasurements<T>, T>(
      this.entityApi,
      {
        TemplateId: templateId,
        MeasurementId: measurementId,
        SequenceNumber: sequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionTemplateMeasurements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionTemplateMeasurements`.
   */
  update(
    entity: DiscussionTemplateMeasurements<T>
  ): UpdateRequestBuilder<DiscussionTemplateMeasurements<T>, T> {
    return new UpdateRequestBuilder<DiscussionTemplateMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionTemplateMeasurements`.
   * @param templateId Key property. See {@link DiscussionTemplateMeasurements.templateId}.
   * @param measurementId Key property. See {@link DiscussionTemplateMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link DiscussionTemplateMeasurements.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTemplateMeasurements`.
   */
  delete(
    templateId: number,
    measurementId: string,
    sequenceNumber: number
  ): DeleteRequestBuilder<DiscussionTemplateMeasurements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionTemplateMeasurements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionTemplateMeasurements` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionTemplateMeasurements<T>
  ): DeleteRequestBuilder<DiscussionTemplateMeasurements<T>, T>;
  delete(
    templateIdOrEntity: any,
    measurementId?: string,
    sequenceNumber?: number
  ): DeleteRequestBuilder<DiscussionTemplateMeasurements<T>, T> {
    return new DeleteRequestBuilder<DiscussionTemplateMeasurements<T>, T>(
      this.entityApi,
      templateIdOrEntity instanceof DiscussionTemplateMeasurements
        ? templateIdOrEntity
        : {
            TemplateId: templateIdOrEntity!,
            MeasurementId: measurementId!,
            SequenceNumber: sequenceNumber!
          }
    );
  }
}
