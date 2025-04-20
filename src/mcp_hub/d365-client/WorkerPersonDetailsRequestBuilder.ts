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
import { WorkerPersonDetails } from './WorkerPersonDetails';

/**
 * Request builder class for operations supported on the {@link WorkerPersonDetails} entity.
 */
export class WorkerPersonDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerPersonDetails<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerPersonDetails` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerPersonDetails` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerPersonDetails<T>, T> {
    return new GetAllRequestBuilder<WorkerPersonDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerPersonDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerPersonDetails`.
   */
  create(
    entity: WorkerPersonDetails<T>
  ): CreateRequestBuilder<WorkerPersonDetails<T>, T> {
    return new CreateRequestBuilder<WorkerPersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerPersonDetails` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerPersonDetails.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `WorkerPersonDetails` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerPersonDetails<T>, T> {
    return new GetByKeyRequestBuilder<WorkerPersonDetails<T>, T>(
      this.entityApi,
      { PersonnelNumber: personnelNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerPersonDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerPersonDetails`.
   */
  update(
    entity: WorkerPersonDetails<T>
  ): UpdateRequestBuilder<WorkerPersonDetails<T>, T> {
    return new UpdateRequestBuilder<WorkerPersonDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerPersonDetails`.
   * @param personnelNumber Key property. See {@link WorkerPersonDetails.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPersonDetails`.
   */
  delete(
    personnelNumber: string
  ): DeleteRequestBuilder<WorkerPersonDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerPersonDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerPersonDetails` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerPersonDetails<T>
  ): DeleteRequestBuilder<WorkerPersonDetails<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<WorkerPersonDetails<T>, T> {
    return new DeleteRequestBuilder<WorkerPersonDetails<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerPersonDetails
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
