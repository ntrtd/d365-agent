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
import { LeaseIndexRevaluationDetails } from './LeaseIndexRevaluationDetails';

/**
 * Request builder class for operations supported on the {@link LeaseIndexRevaluationDetails} entity.
 */
export class LeaseIndexRevaluationDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaseIndexRevaluationDetails<T>, T> {
  /**
   * Returns a request builder for querying all `LeaseIndexRevaluationDetails` entities.
   * @returns A request builder for creating requests to retrieve all `LeaseIndexRevaluationDetails` entities.
   */
  getAll(): GetAllRequestBuilder<LeaseIndexRevaluationDetails<T>, T> {
    return new GetAllRequestBuilder<LeaseIndexRevaluationDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaseIndexRevaluationDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaseIndexRevaluationDetails`.
   */
  create(
    entity: LeaseIndexRevaluationDetails<T>
  ): CreateRequestBuilder<LeaseIndexRevaluationDetails<T>, T> {
    return new CreateRequestBuilder<LeaseIndexRevaluationDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaseIndexRevaluationDetails` entity based on its keys.
   * @param leaseId Key property. See {@link LeaseIndexRevaluationDetails.leaseId}.
   * @param legalEntity Key property. See {@link LeaseIndexRevaluationDetails.legalEntity}.
   * @param processId Key property. See {@link LeaseIndexRevaluationDetails.processId}.
   * @returns A request builder for creating requests to retrieve one `LeaseIndexRevaluationDetails` entity based on its keys.
   */
  getByKey(
    leaseId: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    processId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LeaseIndexRevaluationDetails<T>, T> {
    return new GetByKeyRequestBuilder<LeaseIndexRevaluationDetails<T>, T>(
      this.entityApi,
      {
        LeaseId: leaseId,
        LegalEntity: legalEntity,
        ProcessId: processId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaseIndexRevaluationDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaseIndexRevaluationDetails`.
   */
  update(
    entity: LeaseIndexRevaluationDetails<T>
  ): UpdateRequestBuilder<LeaseIndexRevaluationDetails<T>, T> {
    return new UpdateRequestBuilder<LeaseIndexRevaluationDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaseIndexRevaluationDetails`.
   * @param leaseId Key property. See {@link LeaseIndexRevaluationDetails.leaseId}.
   * @param legalEntity Key property. See {@link LeaseIndexRevaluationDetails.legalEntity}.
   * @param processId Key property. See {@link LeaseIndexRevaluationDetails.processId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaseIndexRevaluationDetails`.
   */
  delete(
    leaseId: string,
    legalEntity: string,
    processId: string
  ): DeleteRequestBuilder<LeaseIndexRevaluationDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaseIndexRevaluationDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaseIndexRevaluationDetails` by taking the entity as a parameter.
   */
  delete(
    entity: LeaseIndexRevaluationDetails<T>
  ): DeleteRequestBuilder<LeaseIndexRevaluationDetails<T>, T>;
  delete(
    leaseIdOrEntity: any,
    legalEntity?: string,
    processId?: string
  ): DeleteRequestBuilder<LeaseIndexRevaluationDetails<T>, T> {
    return new DeleteRequestBuilder<LeaseIndexRevaluationDetails<T>, T>(
      this.entityApi,
      leaseIdOrEntity instanceof LeaseIndexRevaluationDetails
        ? leaseIdOrEntity
        : {
            LeaseId: leaseIdOrEntity!,
            LegalEntity: legalEntity!,
            ProcessId: processId!
          }
    );
  }
}
