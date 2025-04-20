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
import { PayIntV1JobFunctions } from './PayIntV1JobFunctions';

/**
 * Request builder class for operations supported on the {@link PayIntV1JobFunctions} entity.
 */
export class PayIntV1JobFunctionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1JobFunctions<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1JobFunctions` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1JobFunctions` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1JobFunctions<T>, T> {
    return new GetAllRequestBuilder<PayIntV1JobFunctions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1JobFunctions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1JobFunctions`.
   */
  create(
    entity: PayIntV1JobFunctions<T>
  ): CreateRequestBuilder<PayIntV1JobFunctions<T>, T> {
    return new CreateRequestBuilder<PayIntV1JobFunctions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1JobFunctions` entity based on its keys.
   * @param jobFunctionId Key property. See {@link PayIntV1JobFunctions.jobFunctionId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1JobFunctions` entity based on its keys.
   */
  getByKey(
    jobFunctionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1JobFunctions<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1JobFunctions<T>, T>(
      this.entityApi,
      { JobFunctionId: jobFunctionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1JobFunctions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1JobFunctions`.
   */
  update(
    entity: PayIntV1JobFunctions<T>
  ): UpdateRequestBuilder<PayIntV1JobFunctions<T>, T> {
    return new UpdateRequestBuilder<PayIntV1JobFunctions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobFunctions`.
   * @param jobFunctionId Key property. See {@link PayIntV1JobFunctions.jobFunctionId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobFunctions`.
   */
  delete(
    jobFunctionId: string
  ): DeleteRequestBuilder<PayIntV1JobFunctions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobFunctions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobFunctions` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1JobFunctions<T>
  ): DeleteRequestBuilder<PayIntV1JobFunctions<T>, T>;
  delete(
    jobFunctionIdOrEntity: any
  ): DeleteRequestBuilder<PayIntV1JobFunctions<T>, T> {
    return new DeleteRequestBuilder<PayIntV1JobFunctions<T>, T>(
      this.entityApi,
      jobFunctionIdOrEntity instanceof PayIntV1JobFunctions
        ? jobFunctionIdOrEntity
        : { JobFunctionId: jobFunctionIdOrEntity! }
    );
  }
}
