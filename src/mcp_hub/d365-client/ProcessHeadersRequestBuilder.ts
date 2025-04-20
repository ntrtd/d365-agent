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
import { ProcessHeaders } from './ProcessHeaders';

/**
 * Request builder class for operations supported on the {@link ProcessHeaders} entity.
 */
export class ProcessHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessHeaders<T>, T> {
    return new GetAllRequestBuilder<ProcessHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcessHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessHeaders`.
   */
  create(
    entity: ProcessHeaders<T>
  ): CreateRequestBuilder<ProcessHeaders<T>, T> {
    return new CreateRequestBuilder<ProcessHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessHeaders` entity based on its keys.
   * @param processId Key property. See {@link ProcessHeaders.processId}.
   * @returns A request builder for creating requests to retrieve one `ProcessHeaders` entity based on its keys.
   */
  getByKey(
    processId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProcessHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProcessHeaders<T>, T>(this.entityApi, {
      ProcessId: processId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessHeaders`.
   */
  update(
    entity: ProcessHeaders<T>
  ): UpdateRequestBuilder<ProcessHeaders<T>, T> {
    return new UpdateRequestBuilder<ProcessHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessHeaders`.
   * @param processId Key property. See {@link ProcessHeaders.processId}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessHeaders`.
   */
  delete(processId: string): DeleteRequestBuilder<ProcessHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessHeaders` by taking the entity as a parameter.
   */
  delete(entity: ProcessHeaders<T>): DeleteRequestBuilder<ProcessHeaders<T>, T>;
  delete(processIdOrEntity: any): DeleteRequestBuilder<ProcessHeaders<T>, T> {
    return new DeleteRequestBuilder<ProcessHeaders<T>, T>(
      this.entityApi,
      processIdOrEntity instanceof ProcessHeaders
        ? processIdOrEntity
        : { ProcessId: processIdOrEntity! }
    );
  }
}
