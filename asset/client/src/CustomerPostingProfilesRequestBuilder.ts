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
import { CustomerPostingProfiles } from './CustomerPostingProfiles';

/**
 * Request builder class for operations supported on the {@link CustomerPostingProfiles} entity.
 */
export class CustomerPostingProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPostingProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPostingProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPostingProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPostingProfiles<T>, T> {
    return new GetAllRequestBuilder<CustomerPostingProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPostingProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPostingProfiles`.
   */
  create(
    entity: CustomerPostingProfiles<T>
  ): CreateRequestBuilder<CustomerPostingProfiles<T>, T> {
    return new CreateRequestBuilder<CustomerPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPostingProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPostingProfiles.dataAreaId}.
   * @param postingProfile Key property. See {@link CustomerPostingProfiles.postingProfile}.
   * @returns A request builder for creating requests to retrieve one `CustomerPostingProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPostingProfiles<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPostingProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingProfile: postingProfile
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPostingProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPostingProfiles`.
   */
  update(
    entity: CustomerPostingProfiles<T>
  ): UpdateRequestBuilder<CustomerPostingProfiles<T>, T> {
    return new UpdateRequestBuilder<CustomerPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPostingProfiles`.
   * @param dataAreaId Key property. See {@link CustomerPostingProfiles.dataAreaId}.
   * @param postingProfile Key property. See {@link CustomerPostingProfiles.postingProfile}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPostingProfiles`.
   */
  delete(
    dataAreaId: string,
    postingProfile: string
  ): DeleteRequestBuilder<CustomerPostingProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPostingProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPostingProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPostingProfiles<T>
  ): DeleteRequestBuilder<CustomerPostingProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfile?: string
  ): DeleteRequestBuilder<CustomerPostingProfiles<T>, T> {
    return new DeleteRequestBuilder<CustomerPostingProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPostingProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfile: postingProfile!
          }
    );
  }
}
