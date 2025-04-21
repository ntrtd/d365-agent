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
import { EmProcessingActionSequences } from './EmProcessingActionSequences';

/**
 * Request builder class for operations supported on the {@link EmProcessingActionSequences} entity.
 */
export class EmProcessingActionSequencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmProcessingActionSequences<T>, T> {
  /**
   * Returns a request builder for querying all `EmProcessingActionSequences` entities.
   * @returns A request builder for creating requests to retrieve all `EmProcessingActionSequences` entities.
   */
  getAll(): GetAllRequestBuilder<EmProcessingActionSequences<T>, T> {
    return new GetAllRequestBuilder<EmProcessingActionSequences<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmProcessingActionSequences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmProcessingActionSequences`.
   */
  create(
    entity: EmProcessingActionSequences<T>
  ): CreateRequestBuilder<EmProcessingActionSequences<T>, T> {
    return new CreateRequestBuilder<EmProcessingActionSequences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmProcessingActionSequences` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmProcessingActionSequences.dataAreaId}.
   * @param sequenceId Key property. See {@link EmProcessingActionSequences.sequenceId}.
   * @returns A request builder for creating requests to retrieve one `EmProcessingActionSequences` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sequenceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmProcessingActionSequences<T>, T> {
    return new GetByKeyRequestBuilder<EmProcessingActionSequences<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SequenceId: sequenceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmProcessingActionSequences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmProcessingActionSequences`.
   */
  update(
    entity: EmProcessingActionSequences<T>
  ): UpdateRequestBuilder<EmProcessingActionSequences<T>, T> {
    return new UpdateRequestBuilder<EmProcessingActionSequences<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmProcessingActionSequences`.
   * @param dataAreaId Key property. See {@link EmProcessingActionSequences.dataAreaId}.
   * @param sequenceId Key property. See {@link EmProcessingActionSequences.sequenceId}.
   * @returns A request builder for creating requests that delete an entity of type `EmProcessingActionSequences`.
   */
  delete(
    dataAreaId: string,
    sequenceId: string
  ): DeleteRequestBuilder<EmProcessingActionSequences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmProcessingActionSequences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmProcessingActionSequences` by taking the entity as a parameter.
   */
  delete(
    entity: EmProcessingActionSequences<T>
  ): DeleteRequestBuilder<EmProcessingActionSequences<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sequenceId?: string
  ): DeleteRequestBuilder<EmProcessingActionSequences<T>, T> {
    return new DeleteRequestBuilder<EmProcessingActionSequences<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmProcessingActionSequences
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SequenceId: sequenceId!
          }
    );
  }
}
