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
import { OnboardingChecklistTemplateHeaders } from './OnboardingChecklistTemplateHeaders';

/**
 * Request builder class for operations supported on the {@link OnboardingChecklistTemplateHeaders} entity.
 */
export class OnboardingChecklistTemplateHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardingChecklistTemplateHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardingChecklistTemplateHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingChecklistTemplateHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T> {
    return new GetAllRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardingChecklistTemplateHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingChecklistTemplateHeaders`.
   */
  create(
    entity: OnboardingChecklistTemplateHeaders<T>
  ): CreateRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T> {
    return new CreateRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardingChecklistTemplateHeaders` entity based on its keys.
   * @param name Key property. See {@link OnboardingChecklistTemplateHeaders.name}.
   * @returns A request builder for creating requests to retrieve one `OnboardingChecklistTemplateHeaders` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T> {
    return new GetByKeyRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingChecklistTemplateHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingChecklistTemplateHeaders`.
   */
  update(
    entity: OnboardingChecklistTemplateHeaders<T>
  ): UpdateRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T> {
    return new UpdateRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingChecklistTemplateHeaders`.
   * @param name Key property. See {@link OnboardingChecklistTemplateHeaders.name}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingChecklistTemplateHeaders`.
   */
  delete(
    name: string
  ): DeleteRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingChecklistTemplateHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingChecklistTemplateHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardingChecklistTemplateHeaders<T>
  ): DeleteRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T> {
    return new DeleteRequestBuilder<OnboardingChecklistTemplateHeaders<T>, T>(
      this.entityApi,
      nameOrEntity instanceof OnboardingChecklistTemplateHeaders
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
