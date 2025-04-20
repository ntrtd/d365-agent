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
import { PostalAddressElectronicContactsV2 } from './PostalAddressElectronicContactsV2';

/**
 * Request builder class for operations supported on the {@link PostalAddressElectronicContactsV2} entity.
 */
export class PostalAddressElectronicContactsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostalAddressElectronicContactsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PostalAddressElectronicContactsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PostalAddressElectronicContactsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PostalAddressElectronicContactsV2<T>, T> {
    return new GetAllRequestBuilder<PostalAddressElectronicContactsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PostalAddressElectronicContactsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostalAddressElectronicContactsV2`.
   */
  create(
    entity: PostalAddressElectronicContactsV2<T>
  ): CreateRequestBuilder<PostalAddressElectronicContactsV2<T>, T> {
    return new CreateRequestBuilder<PostalAddressElectronicContactsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostalAddressElectronicContactsV2` entity based on its keys.
   * @param postalAddressLocationId Key property. See {@link PostalAddressElectronicContactsV2.postalAddressLocationId}.
   * @param electronicAddressId Key property. See {@link PostalAddressElectronicContactsV2.electronicAddressId}.
   * @returns A request builder for creating requests to retrieve one `PostalAddressElectronicContactsV2` entity based on its keys.
   */
  getByKey(
    postalAddressLocationId: DeserializedType<T, 'Edm.String'>,
    electronicAddressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostalAddressElectronicContactsV2<T>, T> {
    return new GetByKeyRequestBuilder<PostalAddressElectronicContactsV2<T>, T>(
      this.entityApi,
      {
        PostalAddressLocationId: postalAddressLocationId,
        ElectronicAddressId: electronicAddressId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostalAddressElectronicContactsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostalAddressElectronicContactsV2`.
   */
  update(
    entity: PostalAddressElectronicContactsV2<T>
  ): UpdateRequestBuilder<PostalAddressElectronicContactsV2<T>, T> {
    return new UpdateRequestBuilder<PostalAddressElectronicContactsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostalAddressElectronicContactsV2`.
   * @param postalAddressLocationId Key property. See {@link PostalAddressElectronicContactsV2.postalAddressLocationId}.
   * @param electronicAddressId Key property. See {@link PostalAddressElectronicContactsV2.electronicAddressId}.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressElectronicContactsV2`.
   */
  delete(
    postalAddressLocationId: string,
    electronicAddressId: string
  ): DeleteRequestBuilder<PostalAddressElectronicContactsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostalAddressElectronicContactsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddressElectronicContactsV2` by taking the entity as a parameter.
   */
  delete(
    entity: PostalAddressElectronicContactsV2<T>
  ): DeleteRequestBuilder<PostalAddressElectronicContactsV2<T>, T>;
  delete(
    postalAddressLocationIdOrEntity: any,
    electronicAddressId?: string
  ): DeleteRequestBuilder<PostalAddressElectronicContactsV2<T>, T> {
    return new DeleteRequestBuilder<PostalAddressElectronicContactsV2<T>, T>(
      this.entityApi,
      postalAddressLocationIdOrEntity instanceof
      PostalAddressElectronicContactsV2
        ? postalAddressLocationIdOrEntity
        : {
            PostalAddressLocationId: postalAddressLocationIdOrEntity!,
            ElectronicAddressId: electronicAddressId!
          }
    );
  }
}
