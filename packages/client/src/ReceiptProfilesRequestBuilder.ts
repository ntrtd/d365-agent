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
import { ReceiptProfiles } from './ReceiptProfiles';

/**
 * Request builder class for operations supported on the {@link ReceiptProfiles} entity.
 */
export class ReceiptProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReceiptProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `ReceiptProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `ReceiptProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<ReceiptProfiles<T>, T> {
    return new GetAllRequestBuilder<ReceiptProfiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReceiptProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReceiptProfiles`.
   */
  create(
    entity: ReceiptProfiles<T>
  ): CreateRequestBuilder<ReceiptProfiles<T>, T> {
    return new CreateRequestBuilder<ReceiptProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReceiptProfiles` entity based on its keys.
   * @param profileId Key property. See {@link ReceiptProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `ReceiptProfiles` entity based on its keys.
   */
  getByKey(
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReceiptProfiles<T>, T> {
    return new GetByKeyRequestBuilder<ReceiptProfiles<T>, T>(this.entityApi, {
      ProfileId: profileId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReceiptProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReceiptProfiles`.
   */
  update(
    entity: ReceiptProfiles<T>
  ): UpdateRequestBuilder<ReceiptProfiles<T>, T> {
    return new UpdateRequestBuilder<ReceiptProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReceiptProfiles`.
   * @param profileId Key property. See {@link ReceiptProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `ReceiptProfiles`.
   */
  delete(profileId: string): DeleteRequestBuilder<ReceiptProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReceiptProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReceiptProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: ReceiptProfiles<T>
  ): DeleteRequestBuilder<ReceiptProfiles<T>, T>;
  delete(profileIdOrEntity: any): DeleteRequestBuilder<ReceiptProfiles<T>, T> {
    return new DeleteRequestBuilder<ReceiptProfiles<T>, T>(
      this.entityApi,
      profileIdOrEntity instanceof ReceiptProfiles
        ? profileIdOrEntity
        : { ProfileId: profileIdOrEntity! }
    );
  }
}
