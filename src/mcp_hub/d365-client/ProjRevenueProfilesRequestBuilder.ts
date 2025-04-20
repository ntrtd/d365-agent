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
import { ProjRevenueProfiles } from './ProjRevenueProfiles';

/**
 * Request builder class for operations supported on the {@link ProjRevenueProfiles} entity.
 */
export class ProjRevenueProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjRevenueProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `ProjRevenueProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `ProjRevenueProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<ProjRevenueProfiles<T>, T> {
    return new GetAllRequestBuilder<ProjRevenueProfiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjRevenueProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjRevenueProfiles`.
   */
  create(
    entity: ProjRevenueProfiles<T>
  ): CreateRequestBuilder<ProjRevenueProfiles<T>, T> {
    return new CreateRequestBuilder<ProjRevenueProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjRevenueProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjRevenueProfiles.dataAreaId}.
   * @param profileId Key property. See {@link ProjRevenueProfiles.profileId}.
   * @returns A request builder for creating requests to retrieve one `ProjRevenueProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    profileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjRevenueProfiles<T>, T> {
    return new GetByKeyRequestBuilder<ProjRevenueProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProfileId: profileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjRevenueProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjRevenueProfiles`.
   */
  update(
    entity: ProjRevenueProfiles<T>
  ): UpdateRequestBuilder<ProjRevenueProfiles<T>, T> {
    return new UpdateRequestBuilder<ProjRevenueProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjRevenueProfiles`.
   * @param dataAreaId Key property. See {@link ProjRevenueProfiles.dataAreaId}.
   * @param profileId Key property. See {@link ProjRevenueProfiles.profileId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjRevenueProfiles`.
   */
  delete(
    dataAreaId: string,
    profileId: string
  ): DeleteRequestBuilder<ProjRevenueProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjRevenueProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjRevenueProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: ProjRevenueProfiles<T>
  ): DeleteRequestBuilder<ProjRevenueProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    profileId?: string
  ): DeleteRequestBuilder<ProjRevenueProfiles<T>, T> {
    return new DeleteRequestBuilder<ProjRevenueProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjRevenueProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProfileId: profileId!
          }
    );
  }
}
