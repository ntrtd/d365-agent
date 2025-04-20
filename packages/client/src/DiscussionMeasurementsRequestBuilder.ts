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
import { DiscussionMeasurements } from './DiscussionMeasurements';
import { HcmMeasurementType } from './HcmMeasurementType';

/**
 * Request builder class for operations supported on the {@link DiscussionMeasurements} entity.
 */
export class DiscussionMeasurementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscussionMeasurements<T>, T> {
  /**
   * Returns a request builder for querying all `DiscussionMeasurements` entities.
   * @returns A request builder for creating requests to retrieve all `DiscussionMeasurements` entities.
   */
  getAll(): GetAllRequestBuilder<DiscussionMeasurements<T>, T> {
    return new GetAllRequestBuilder<DiscussionMeasurements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscussionMeasurements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscussionMeasurements`.
   */
  create(
    entity: DiscussionMeasurements<T>
  ): CreateRequestBuilder<DiscussionMeasurements<T>, T> {
    return new CreateRequestBuilder<DiscussionMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscussionMeasurements` entity based on its keys.
   * @param discussion Key property. See {@link DiscussionMeasurements.discussion}.
   * @param personnelNumber Key property. See {@link DiscussionMeasurements.personnelNumber}.
   * @param measurementId Key property. See {@link DiscussionMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link DiscussionMeasurements.sequenceNumber}.
   * @param measurementType Key property. See {@link DiscussionMeasurements.measurementType}.
   * @returns A request builder for creating requests to retrieve one `DiscussionMeasurements` entity based on its keys.
   */
  getByKey(
    discussion: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    measurementId: DeserializedType<T, 'Edm.String'>,
    sequenceNumber: DeserializedType<T, 'Edm.Int32'>,
    measurementType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HcmMeasurementType'
    >
  ): GetByKeyRequestBuilder<DiscussionMeasurements<T>, T> {
    return new GetByKeyRequestBuilder<DiscussionMeasurements<T>, T>(
      this.entityApi,
      {
        Discussion: discussion,
        PersonnelNumber: personnelNumber,
        MeasurementId: measurementId,
        SequenceNumber: sequenceNumber,
        MeasurementType: measurementType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscussionMeasurements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscussionMeasurements`.
   */
  update(
    entity: DiscussionMeasurements<T>
  ): UpdateRequestBuilder<DiscussionMeasurements<T>, T> {
    return new UpdateRequestBuilder<DiscussionMeasurements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscussionMeasurements`.
   * @param discussion Key property. See {@link DiscussionMeasurements.discussion}.
   * @param personnelNumber Key property. See {@link DiscussionMeasurements.personnelNumber}.
   * @param measurementId Key property. See {@link DiscussionMeasurements.measurementId}.
   * @param sequenceNumber Key property. See {@link DiscussionMeasurements.sequenceNumber}.
   * @param measurementType Key property. See {@link DiscussionMeasurements.measurementType}.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionMeasurements`.
   */
  delete(
    discussion: string,
    personnelNumber: string,
    measurementId: string,
    sequenceNumber: number,
    measurementType: HcmMeasurementType
  ): DeleteRequestBuilder<DiscussionMeasurements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscussionMeasurements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscussionMeasurements` by taking the entity as a parameter.
   */
  delete(
    entity: DiscussionMeasurements<T>
  ): DeleteRequestBuilder<DiscussionMeasurements<T>, T>;
  delete(
    discussionOrEntity: any,
    personnelNumber?: string,
    measurementId?: string,
    sequenceNumber?: number,
    measurementType?: HcmMeasurementType
  ): DeleteRequestBuilder<DiscussionMeasurements<T>, T> {
    return new DeleteRequestBuilder<DiscussionMeasurements<T>, T>(
      this.entityApi,
      discussionOrEntity instanceof DiscussionMeasurements
        ? discussionOrEntity
        : {
            Discussion: discussionOrEntity!,
            PersonnelNumber: personnelNumber!,
            MeasurementId: measurementId!,
            SequenceNumber: sequenceNumber!,
            MeasurementType: measurementType!
          }
    );
  }
}
