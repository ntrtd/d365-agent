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
import { FbObservationCodes } from './FbObservationCodes';

/**
 * Request builder class for operations supported on the {@link FbObservationCodes} entity.
 */
export class FbObservationCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FbObservationCodes<T>, T> {
  /**
   * Returns a request builder for querying all `FbObservationCodes` entities.
   * @returns A request builder for creating requests to retrieve all `FbObservationCodes` entities.
   */
  getAll(): GetAllRequestBuilder<FbObservationCodes<T>, T> {
    return new GetAllRequestBuilder<FbObservationCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FbObservationCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FbObservationCodes`.
   */
  create(
    entity: FbObservationCodes<T>
  ): CreateRequestBuilder<FbObservationCodes<T>, T> {
    return new CreateRequestBuilder<FbObservationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FbObservationCodes` entity based on its keys.
   * @param observationCode Key property. See {@link FbObservationCodes.observationCode}.
   * @returns A request builder for creating requests to retrieve one `FbObservationCodes` entity based on its keys.
   */
  getByKey(
    observationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FbObservationCodes<T>, T> {
    return new GetByKeyRequestBuilder<FbObservationCodes<T>, T>(
      this.entityApi,
      { ObservationCode: observationCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FbObservationCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FbObservationCodes`.
   */
  update(
    entity: FbObservationCodes<T>
  ): UpdateRequestBuilder<FbObservationCodes<T>, T> {
    return new UpdateRequestBuilder<FbObservationCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FbObservationCodes`.
   * @param observationCode Key property. See {@link FbObservationCodes.observationCode}.
   * @returns A request builder for creating requests that delete an entity of type `FbObservationCodes`.
   */
  delete(
    observationCode: string
  ): DeleteRequestBuilder<FbObservationCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FbObservationCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FbObservationCodes` by taking the entity as a parameter.
   */
  delete(
    entity: FbObservationCodes<T>
  ): DeleteRequestBuilder<FbObservationCodes<T>, T>;
  delete(
    observationCodeOrEntity: any
  ): DeleteRequestBuilder<FbObservationCodes<T>, T> {
    return new DeleteRequestBuilder<FbObservationCodes<T>, T>(
      this.entityApi,
      observationCodeOrEntity instanceof FbObservationCodes
        ? observationCodeOrEntity
        : { ObservationCode: observationCodeOrEntity! }
    );
  }
}
