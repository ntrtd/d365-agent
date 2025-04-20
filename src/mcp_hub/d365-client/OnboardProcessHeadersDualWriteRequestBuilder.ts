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
import { OnboardProcessHeadersDualWrite } from './OnboardProcessHeadersDualWrite';

/**
 * Request builder class for operations supported on the {@link OnboardProcessHeadersDualWrite} entity.
 */
export class OnboardProcessHeadersDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardProcessHeadersDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardProcessHeadersDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardProcessHeadersDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardProcessHeadersDualWrite<T>, T> {
    return new GetAllRequestBuilder<OnboardProcessHeadersDualWrite<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardProcessHeadersDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardProcessHeadersDualWrite`.
   */
  create(
    entity: OnboardProcessHeadersDualWrite<T>
  ): CreateRequestBuilder<OnboardProcessHeadersDualWrite<T>, T> {
    return new CreateRequestBuilder<OnboardProcessHeadersDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardProcessHeadersDualWrite` entity based on its keys.
   * @param processId Key property. See {@link OnboardProcessHeadersDualWrite.processId}.
   * @returns A request builder for creating requests to retrieve one `OnboardProcessHeadersDualWrite` entity based on its keys.
   */
  getByKey(
    processId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<OnboardProcessHeadersDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<OnboardProcessHeadersDualWrite<T>, T>(
      this.entityApi,
      { ProcessId: processId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardProcessHeadersDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardProcessHeadersDualWrite`.
   */
  update(
    entity: OnboardProcessHeadersDualWrite<T>
  ): UpdateRequestBuilder<OnboardProcessHeadersDualWrite<T>, T> {
    return new UpdateRequestBuilder<OnboardProcessHeadersDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardProcessHeadersDualWrite`.
   * @param processId Key property. See {@link OnboardProcessHeadersDualWrite.processId}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardProcessHeadersDualWrite`.
   */
  delete(
    processId: string
  ): DeleteRequestBuilder<OnboardProcessHeadersDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardProcessHeadersDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardProcessHeadersDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardProcessHeadersDualWrite<T>
  ): DeleteRequestBuilder<OnboardProcessHeadersDualWrite<T>, T>;
  delete(
    processIdOrEntity: any
  ): DeleteRequestBuilder<OnboardProcessHeadersDualWrite<T>, T> {
    return new DeleteRequestBuilder<OnboardProcessHeadersDualWrite<T>, T>(
      this.entityApi,
      processIdOrEntity instanceof OnboardProcessHeadersDualWrite
        ? processIdOrEntity
        : { ProcessId: processIdOrEntity! }
    );
  }
}
