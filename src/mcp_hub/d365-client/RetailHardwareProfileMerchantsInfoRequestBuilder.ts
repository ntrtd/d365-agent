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
import { RetailHardwareProfileMerchantsInfo } from './RetailHardwareProfileMerchantsInfo';

/**
 * Request builder class for operations supported on the {@link RetailHardwareProfileMerchantsInfo} entity.
 */
export class RetailHardwareProfileMerchantsInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T> {
  /**
   * Returns a request builder for querying all `RetailHardwareProfileMerchantsInfo` entities.
   * @returns A request builder for creating requests to retrieve all `RetailHardwareProfileMerchantsInfo` entities.
   */
  getAll(): GetAllRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T> {
    return new GetAllRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailHardwareProfileMerchantsInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailHardwareProfileMerchantsInfo`.
   */
  create(
    entity: RetailHardwareProfileMerchantsInfo<T>
  ): CreateRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T> {
    return new CreateRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailHardwareProfileMerchantsInfo` entity based on its keys.
   * @param profileId Key property. See {@link RetailHardwareProfileMerchantsInfo.profileId}.
   * @returns A request builder for creating requests to retrieve one `RetailHardwareProfileMerchantsInfo` entity based on its keys.
   */
  getByKey(
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T> {
    return new GetByKeyRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T>(
      this.entityApi,
      { ProfileId: profileId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailHardwareProfileMerchantsInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailHardwareProfileMerchantsInfo`.
   */
  update(
    entity: RetailHardwareProfileMerchantsInfo<T>
  ): UpdateRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T> {
    return new UpdateRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailHardwareProfileMerchantsInfo`.
   * @param profileId Key property. See {@link RetailHardwareProfileMerchantsInfo.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailHardwareProfileMerchantsInfo`.
   */
  delete(
    profileId: string
  ): DeleteRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailHardwareProfileMerchantsInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailHardwareProfileMerchantsInfo` by taking the entity as a parameter.
   */
  delete(
    entity: RetailHardwareProfileMerchantsInfo<T>
  ): DeleteRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T>;
  delete(
    profileIdOrEntity: any
  ): DeleteRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T> {
    return new DeleteRequestBuilder<RetailHardwareProfileMerchantsInfo<T>, T>(
      this.entityApi,
      profileIdOrEntity instanceof RetailHardwareProfileMerchantsInfo
        ? profileIdOrEntity
        : { ProfileId: profileIdOrEntity! }
    );
  }
}
