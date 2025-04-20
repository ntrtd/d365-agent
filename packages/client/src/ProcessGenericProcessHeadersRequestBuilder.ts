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
import { ProcessGenericProcessHeaders } from './ProcessGenericProcessHeaders';

/**
 * Request builder class for operations supported on the {@link ProcessGenericProcessHeaders} entity.
 */
export class ProcessGenericProcessHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessGenericProcessHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessGenericProcessHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessGenericProcessHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessGenericProcessHeaders<T>, T> {
    return new GetAllRequestBuilder<ProcessGenericProcessHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessGenericProcessHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessGenericProcessHeaders`.
   */
  create(
    entity: ProcessGenericProcessHeaders<T>
  ): CreateRequestBuilder<ProcessGenericProcessHeaders<T>, T> {
    return new CreateRequestBuilder<ProcessGenericProcessHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessGenericProcessHeaders` entity based on its keys.
   * @param processHeaderProcessId Key property. See {@link ProcessGenericProcessHeaders.processHeaderProcessId}.
   * @returns A request builder for creating requests to retrieve one `ProcessGenericProcessHeaders` entity based on its keys.
   */
  getByKey(
    processHeaderProcessId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProcessGenericProcessHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProcessGenericProcessHeaders<T>, T>(
      this.entityApi,
      { ProcessHeader_ProcessId: processHeaderProcessId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessGenericProcessHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessGenericProcessHeaders`.
   */
  update(
    entity: ProcessGenericProcessHeaders<T>
  ): UpdateRequestBuilder<ProcessGenericProcessHeaders<T>, T> {
    return new UpdateRequestBuilder<ProcessGenericProcessHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessGenericProcessHeaders`.
   * @param processHeaderProcessId Key property. See {@link ProcessGenericProcessHeaders.processHeaderProcessId}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGenericProcessHeaders`.
   */
  delete(
    processHeaderProcessId: string
  ): DeleteRequestBuilder<ProcessGenericProcessHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessGenericProcessHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGenericProcessHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessGenericProcessHeaders<T>
  ): DeleteRequestBuilder<ProcessGenericProcessHeaders<T>, T>;
  delete(
    processHeaderProcessIdOrEntity: any
  ): DeleteRequestBuilder<ProcessGenericProcessHeaders<T>, T> {
    return new DeleteRequestBuilder<ProcessGenericProcessHeaders<T>, T>(
      this.entityApi,
      processHeaderProcessIdOrEntity instanceof ProcessGenericProcessHeaders
        ? processHeaderProcessIdOrEntity
        : { ProcessHeader_ProcessId: processHeaderProcessIdOrEntity! }
    );
  }
}
