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
import { PayIntV1JobCompensations } from './PayIntV1JobCompensations';

/**
 * Request builder class for operations supported on the {@link PayIntV1JobCompensations} entity.
 */
export class PayIntV1JobCompensationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1JobCompensations<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1JobCompensations` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1JobCompensations` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1JobCompensations<T>, T> {
    return new GetAllRequestBuilder<PayIntV1JobCompensations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1JobCompensations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1JobCompensations`.
   */
  create(
    entity: PayIntV1JobCompensations<T>
  ): CreateRequestBuilder<PayIntV1JobCompensations<T>, T> {
    return new CreateRequestBuilder<PayIntV1JobCompensations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1JobCompensations` entity based on its keys.
   * @param jobId Key property. See {@link PayIntV1JobCompensations.jobId}.
   * @param compensationLevelId Key property. See {@link PayIntV1JobCompensations.compensationLevelId}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1JobCompensations` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    compensationLevelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1JobCompensations<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1JobCompensations<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        CompensationLevelId: compensationLevelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1JobCompensations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1JobCompensations`.
   */
  update(
    entity: PayIntV1JobCompensations<T>
  ): UpdateRequestBuilder<PayIntV1JobCompensations<T>, T> {
    return new UpdateRequestBuilder<PayIntV1JobCompensations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobCompensations`.
   * @param jobId Key property. See {@link PayIntV1JobCompensations.jobId}.
   * @param compensationLevelId Key property. See {@link PayIntV1JobCompensations.compensationLevelId}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobCompensations`.
   */
  delete(
    jobId: string,
    compensationLevelId: string
  ): DeleteRequestBuilder<PayIntV1JobCompensations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1JobCompensations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1JobCompensations` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1JobCompensations<T>
  ): DeleteRequestBuilder<PayIntV1JobCompensations<T>, T>;
  delete(
    jobIdOrEntity: any,
    compensationLevelId?: string
  ): DeleteRequestBuilder<PayIntV1JobCompensations<T>, T> {
    return new DeleteRequestBuilder<PayIntV1JobCompensations<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof PayIntV1JobCompensations
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            CompensationLevelId: compensationLevelId!
          }
    );
  }
}
