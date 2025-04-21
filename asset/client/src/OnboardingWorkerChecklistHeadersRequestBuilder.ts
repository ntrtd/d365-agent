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
import { OnboardingWorkerChecklistHeaders } from './OnboardingWorkerChecklistHeaders';

/**
 * Request builder class for operations supported on the {@link OnboardingWorkerChecklistHeaders} entity.
 */
export class OnboardingWorkerChecklistHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardingWorkerChecklistHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardingWorkerChecklistHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingWorkerChecklistHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T> {
    return new GetAllRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardingWorkerChecklistHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingWorkerChecklistHeaders`.
   */
  create(
    entity: OnboardingWorkerChecklistHeaders<T>
  ): CreateRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T> {
    return new CreateRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardingWorkerChecklistHeaders` entity based on its keys.
   * @param checklistId Key property. See {@link OnboardingWorkerChecklistHeaders.checklistId}.
   * @returns A request builder for creating requests to retrieve one `OnboardingWorkerChecklistHeaders` entity based on its keys.
   */
  getByKey(
    checklistId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T> {
    return new GetByKeyRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T>(
      this.entityApi,
      { ChecklistId: checklistId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingWorkerChecklistHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingWorkerChecklistHeaders`.
   */
  update(
    entity: OnboardingWorkerChecklistHeaders<T>
  ): UpdateRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T> {
    return new UpdateRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingWorkerChecklistHeaders`.
   * @param checklistId Key property. See {@link OnboardingWorkerChecklistHeaders.checklistId}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingWorkerChecklistHeaders`.
   */
  delete(
    checklistId: string
  ): DeleteRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingWorkerChecklistHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingWorkerChecklistHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardingWorkerChecklistHeaders<T>
  ): DeleteRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T>;
  delete(
    checklistIdOrEntity: any
  ): DeleteRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T> {
    return new DeleteRequestBuilder<OnboardingWorkerChecklistHeaders<T>, T>(
      this.entityApi,
      checklistIdOrEntity instanceof OnboardingWorkerChecklistHeaders
        ? checklistIdOrEntity
        : { ChecklistId: checklistIdOrEntity! }
    );
  }
}
