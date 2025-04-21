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
import { LeaseJournalParameters } from './LeaseJournalParameters';

/**
 * Request builder class for operations supported on the {@link LeaseJournalParameters} entity.
 */
export class LeaseJournalParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseJournalParameters<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseJournalParameters` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseJournalParameters` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseJournalParameters<T>, T> {
    return new GetAllRequestBuilder<LeaseJournalParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseJournalParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseJournalParameters`.
   */
  create(
    entity: LeaseJournalParameters<T>
  ): CreateRequestBuilder<LeaseJournalParameters<T>, T> {
    return new CreateRequestBuilder<LeaseJournalParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseJournalParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaseJournalParameters.dataAreaId}.
   * @param initialRecognitionJournalName Key property. See {@link LeaseJournalParameters.initialRecognitionJournalName}.
   * @returns A request builder for creating requests to retrieve one `LeaseJournalParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    initialRecognitionJournalName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaseJournalParameters<T>, T> {
    return new GetByKeyRequestBuilder<LeaseJournalParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InitialRecognitionJournalName: initialRecognitionJournalName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseJournalParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseJournalParameters`.
   */
  update(
    entity: LeaseJournalParameters<T>
  ): UpdateRequestBuilder<LeaseJournalParameters<T>, T> {
    return new UpdateRequestBuilder<LeaseJournalParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseJournalParameters`.
   * @param dataAreaId Key property. See {@link LeaseJournalParameters.dataAreaId}.
   * @param initialRecognitionJournalName Key property. See {@link LeaseJournalParameters.initialRecognitionJournalName}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseJournalParameters`.
   */
  delete(
    dataAreaId: string,
    initialRecognitionJournalName: string
  ): DeleteRequestBuilder<LeaseJournalParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseJournalParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseJournalParameters` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseJournalParameters<T>
  ): DeleteRequestBuilder<LeaseJournalParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    initialRecognitionJournalName?: string
  ): DeleteRequestBuilder<LeaseJournalParameters<T>, T> {
    return new DeleteRequestBuilder<LeaseJournalParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaseJournalParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InitialRecognitionJournalName: initialRecognitionJournalName!
          }
    );
  }
}
