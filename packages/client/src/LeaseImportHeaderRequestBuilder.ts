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
import { LeaseImportHeader } from './LeaseImportHeader';

/**
 * Request builder class for operations supported on the {@link LeaseImportHeader} entity.
 */
export class LeaseImportHeaderRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseImportHeader<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseImportHeader` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseImportHeader` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseImportHeader<T>, T> {
    return new GetAllRequestBuilder<LeaseImportHeader<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeaseImportHeader` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseImportHeader`.
   */
  create(
    entity: LeaseImportHeader<T>
  ): CreateRequestBuilder<LeaseImportHeader<T>, T> {
    return new CreateRequestBuilder<LeaseImportHeader<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseImportHeader` entity based on its keys.
   * @param processId Key property. See {@link LeaseImportHeader.processId}.
   * @returns A request builder for creating requests to retrieve one `LeaseImportHeader` entity based on its keys.
   */
  getByKey(
    processId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LeaseImportHeader<T>, T> {
    return new GetByKeyRequestBuilder<LeaseImportHeader<T>, T>(this.entityApi, {
      ProcessId: processId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseImportHeader`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseImportHeader`.
   */
  update(
    entity: LeaseImportHeader<T>
  ): UpdateRequestBuilder<LeaseImportHeader<T>, T> {
    return new UpdateRequestBuilder<LeaseImportHeader<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseImportHeader`.
   * @param processId Key property. See {@link LeaseImportHeader.processId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseImportHeader`.
   */
  delete(processId: string): DeleteRequestBuilder<LeaseImportHeader<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseImportHeader`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseImportHeader` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseImportHeader<T>
  ): DeleteRequestBuilder<LeaseImportHeader<T>, T>;
  delete(
    processIdOrEntity: any
  ): DeleteRequestBuilder<LeaseImportHeader<T>, T> {
    return new DeleteRequestBuilder<LeaseImportHeader<T>, T>(
      this.entityApi,
      processIdOrEntity instanceof LeaseImportHeader
        ? processIdOrEntity
        : { ProcessId: processIdOrEntity! }
    );
  }
}
