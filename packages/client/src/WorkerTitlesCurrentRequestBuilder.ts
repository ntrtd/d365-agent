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
import { WorkerTitlesCurrent } from './WorkerTitlesCurrent';

/**
 * Request builder class for operations supported on the {@link WorkerTitlesCurrent} entity.
 */
export class WorkerTitlesCurrentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTitlesCurrent<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTitlesCurrent` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTitlesCurrent` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTitlesCurrent<T>, T> {
    return new GetAllRequestBuilder<WorkerTitlesCurrent<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerTitlesCurrent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTitlesCurrent`.
   */
  create(
    entity: WorkerTitlesCurrent<T>
  ): CreateRequestBuilder<WorkerTitlesCurrent<T>, T> {
    return new CreateRequestBuilder<WorkerTitlesCurrent<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerTitlesCurrent` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerTitlesCurrent.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `WorkerTitlesCurrent` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerTitlesCurrent<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTitlesCurrent<T>, T>(
      this.entityApi,
      { PersonnelNumber: personnelNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTitlesCurrent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTitlesCurrent`.
   */
  update(
    entity: WorkerTitlesCurrent<T>
  ): UpdateRequestBuilder<WorkerTitlesCurrent<T>, T> {
    return new UpdateRequestBuilder<WorkerTitlesCurrent<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTitlesCurrent`.
   * @param personnelNumber Key property. See {@link WorkerTitlesCurrent.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTitlesCurrent`.
   */
  delete(
    personnelNumber: string
  ): DeleteRequestBuilder<WorkerTitlesCurrent<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTitlesCurrent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTitlesCurrent` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerTitlesCurrent<T>
  ): DeleteRequestBuilder<WorkerTitlesCurrent<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<WorkerTitlesCurrent<T>, T> {
    return new DeleteRequestBuilder<WorkerTitlesCurrent<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerTitlesCurrent
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
