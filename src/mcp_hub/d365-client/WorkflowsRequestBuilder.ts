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
import { Workflows } from './Workflows';

/**
 * Request builder class for operations supported on the {@link Workflows} entity.
 */
export class WorkflowsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Workflows<T>, T> {
  /**
   * Returns a request builder for querying all `Workflows` entities.
   * @returns A request builder for creating requests to retrieve all `Workflows` entities.
   */
  getAll(): GetAllRequestBuilder<Workflows<T>, T> {
    return new GetAllRequestBuilder<Workflows<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Workflows` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Workflows`.
   */
  create(entity: Workflows<T>): CreateRequestBuilder<Workflows<T>, T> {
    return new CreateRequestBuilder<Workflows<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Workflows` entity based on its keys.
   * @param sequenceNumber Key property. See {@link Workflows.sequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `Workflows` entity based on its keys.
   */
  getByKey(
    sequenceNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Workflows<T>, T> {
    return new GetByKeyRequestBuilder<Workflows<T>, T>(this.entityApi, {
      SequenceNumber: sequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Workflows`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Workflows`.
   */
  update(entity: Workflows<T>): UpdateRequestBuilder<Workflows<T>, T> {
    return new UpdateRequestBuilder<Workflows<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Workflows`.
   * @param sequenceNumber Key property. See {@link Workflows.sequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Workflows`.
   */
  delete(sequenceNumber: string): DeleteRequestBuilder<Workflows<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Workflows`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Workflows` by taking the entity as a parameter.
   */
  delete(entity: Workflows<T>): DeleteRequestBuilder<Workflows<T>, T>;
  delete(sequenceNumberOrEntity: any): DeleteRequestBuilder<Workflows<T>, T> {
    return new DeleteRequestBuilder<Workflows<T>, T>(
      this.entityApi,
      sequenceNumberOrEntity instanceof Workflows
        ? sequenceNumberOrEntity
        : { SequenceNumber: sequenceNumberOrEntity! }
    );
  }
}
