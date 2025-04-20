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
import { DepreciationProfiles } from './DepreciationProfiles';

/**
 * Request builder class for operations supported on the {@link DepreciationProfiles} entity.
 */
export class DepreciationProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepreciationProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `DepreciationProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationProfiles<T>, T> {
    return new GetAllRequestBuilder<DepreciationProfiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DepreciationProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationProfiles`.
   */
  create(
    entity: DepreciationProfiles<T>
  ): CreateRequestBuilder<DepreciationProfiles<T>, T> {
    return new CreateRequestBuilder<DepreciationProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DepreciationProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link DepreciationProfiles.dataAreaId}.
   * @param depreciationProfileId Key property. See {@link DepreciationProfiles.depreciationProfileId}.
   * @returns A request builder for creating requests to retrieve one `DepreciationProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    depreciationProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DepreciationProfiles<T>, T> {
    return new GetByKeyRequestBuilder<DepreciationProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DepreciationProfileId: depreciationProfileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationProfiles`.
   */
  update(
    entity: DepreciationProfiles<T>
  ): UpdateRequestBuilder<DepreciationProfiles<T>, T> {
    return new UpdateRequestBuilder<DepreciationProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationProfiles`.
   * @param dataAreaId Key property. See {@link DepreciationProfiles.dataAreaId}.
   * @param depreciationProfileId Key property. See {@link DepreciationProfiles.depreciationProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationProfiles`.
   */
  delete(
    dataAreaId: string,
    depreciationProfileId: string
  ): DeleteRequestBuilder<DepreciationProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: DepreciationProfiles<T>
  ): DeleteRequestBuilder<DepreciationProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    depreciationProfileId?: string
  ): DeleteRequestBuilder<DepreciationProfiles<T>, T> {
    return new DeleteRequestBuilder<DepreciationProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DepreciationProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepreciationProfileId: depreciationProfileId!
          }
    );
  }
}
