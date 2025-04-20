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
import { RAssetDeprProfiles } from './RAssetDeprProfiles';

/**
 * Request builder class for operations supported on the {@link RAssetDeprProfiles} entity.
 */
export class RAssetDeprProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetDeprProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetDeprProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetDeprProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetDeprProfiles<T>, T> {
    return new GetAllRequestBuilder<RAssetDeprProfiles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetDeprProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetDeprProfiles`.
   */
  create(
    entity: RAssetDeprProfiles<T>
  ): CreateRequestBuilder<RAssetDeprProfiles<T>, T> {
    return new CreateRequestBuilder<RAssetDeprProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetDeprProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetDeprProfiles.dataAreaId}.
   * @param depreciationMethod Key property. See {@link RAssetDeprProfiles.depreciationMethod}.
   * @returns A request builder for creating requests to retrieve one `RAssetDeprProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    depreciationMethod: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetDeprProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RAssetDeprProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DepreciationMethod: depreciationMethod
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetDeprProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetDeprProfiles`.
   */
  update(
    entity: RAssetDeprProfiles<T>
  ): UpdateRequestBuilder<RAssetDeprProfiles<T>, T> {
    return new UpdateRequestBuilder<RAssetDeprProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetDeprProfiles`.
   * @param dataAreaId Key property. See {@link RAssetDeprProfiles.dataAreaId}.
   * @param depreciationMethod Key property. See {@link RAssetDeprProfiles.depreciationMethod}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetDeprProfiles`.
   */
  delete(
    dataAreaId: string,
    depreciationMethod: string
  ): DeleteRequestBuilder<RAssetDeprProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetDeprProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetDeprProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetDeprProfiles<T>
  ): DeleteRequestBuilder<RAssetDeprProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    depreciationMethod?: string
  ): DeleteRequestBuilder<RAssetDeprProfiles<T>, T> {
    return new DeleteRequestBuilder<RAssetDeprProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetDeprProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepreciationMethod: depreciationMethod!
          }
    );
  }
}
