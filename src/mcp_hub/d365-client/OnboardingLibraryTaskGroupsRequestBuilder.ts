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
import { OnboardingLibraryTaskGroups } from './OnboardingLibraryTaskGroups';

/**
 * Request builder class for operations supported on the {@link OnboardingLibraryTaskGroups} entity.
 */
export class OnboardingLibraryTaskGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OnboardingLibraryTaskGroups<T>, T> {
  /**
   * Returns a request builder for querying all `OnboardingLibraryTaskGroups` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingLibraryTaskGroups` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingLibraryTaskGroups<T>, T> {
    return new GetAllRequestBuilder<OnboardingLibraryTaskGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OnboardingLibraryTaskGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OnboardingLibraryTaskGroups`.
   */
  create(
    entity: OnboardingLibraryTaskGroups<T>
  ): CreateRequestBuilder<OnboardingLibraryTaskGroups<T>, T> {
    return new CreateRequestBuilder<OnboardingLibraryTaskGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OnboardingLibraryTaskGroups` entity based on its keys.
   * @param name Key property. See {@link OnboardingLibraryTaskGroups.name}.
   * @returns A request builder for creating requests to retrieve one `OnboardingLibraryTaskGroups` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OnboardingLibraryTaskGroups<T>, T> {
    return new GetByKeyRequestBuilder<OnboardingLibraryTaskGroups<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OnboardingLibraryTaskGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OnboardingLibraryTaskGroups`.
   */
  update(
    entity: OnboardingLibraryTaskGroups<T>
  ): UpdateRequestBuilder<OnboardingLibraryTaskGroups<T>, T> {
    return new UpdateRequestBuilder<OnboardingLibraryTaskGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OnboardingLibraryTaskGroups`.
   * @param name Key property. See {@link OnboardingLibraryTaskGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingLibraryTaskGroups`.
   */
  delete(name: string): DeleteRequestBuilder<OnboardingLibraryTaskGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OnboardingLibraryTaskGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OnboardingLibraryTaskGroups` by taking the entity as a parameter.
   */
  delete(
    entity: OnboardingLibraryTaskGroups<T>
  ): DeleteRequestBuilder<OnboardingLibraryTaskGroups<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<OnboardingLibraryTaskGroups<T>, T> {
    return new DeleteRequestBuilder<OnboardingLibraryTaskGroups<T>, T>(
      this.entityApi,
      nameOrEntity instanceof OnboardingLibraryTaskGroups
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
