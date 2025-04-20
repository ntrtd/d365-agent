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
import { DeferralsProfiles } from './DeferralsProfiles';

/**
 * Request builder class for operations supported on the {@link DeferralsProfiles} entity.
 */
export class DeferralsProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeferralsProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `DeferralsProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `DeferralsProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<DeferralsProfiles<T>, T> {
    return new GetAllRequestBuilder<DeferralsProfiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeferralsProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeferralsProfiles`.
   */
  create(
    entity: DeferralsProfiles<T>
  ): CreateRequestBuilder<DeferralsProfiles<T>, T> {
    return new CreateRequestBuilder<DeferralsProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeferralsProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeferralsProfiles.dataAreaId}.
   * @param writingOffProfile Key property. See {@link DeferralsProfiles.writingOffProfile}.
   * @returns A request builder for creating requests to retrieve one `DeferralsProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    writingOffProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeferralsProfiles<T>, T> {
    return new GetByKeyRequestBuilder<DeferralsProfiles<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      WritingOffProfile: writingOffProfile
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DeferralsProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeferralsProfiles`.
   */
  update(
    entity: DeferralsProfiles<T>
  ): UpdateRequestBuilder<DeferralsProfiles<T>, T> {
    return new UpdateRequestBuilder<DeferralsProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeferralsProfiles`.
   * @param dataAreaId Key property. See {@link DeferralsProfiles.dataAreaId}.
   * @param writingOffProfile Key property. See {@link DeferralsProfiles.writingOffProfile}.
   * @returns A request builder for creating requests that delete an entity of type `DeferralsProfiles`.
   */
  delete(
    dataAreaId: string,
    writingOffProfile: string
  ): DeleteRequestBuilder<DeferralsProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeferralsProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeferralsProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: DeferralsProfiles<T>
  ): DeleteRequestBuilder<DeferralsProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    writingOffProfile?: string
  ): DeleteRequestBuilder<DeferralsProfiles<T>, T> {
    return new DeleteRequestBuilder<DeferralsProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeferralsProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WritingOffProfile: writingOffProfile!
          }
    );
  }
}
