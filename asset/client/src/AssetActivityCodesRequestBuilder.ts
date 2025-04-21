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
import { AssetActivityCodes } from './AssetActivityCodes';

/**
 * Request builder class for operations supported on the {@link AssetActivityCodes} entity.
 */
export class AssetActivityCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetActivityCodes<T>, T> {
  /**
   * Returns a request builder for querying all `AssetActivityCodes` entities.
   * @returns A request builder for creating requests to retrieve all `AssetActivityCodes` entities.
   */
  getAll(): GetAllRequestBuilder<AssetActivityCodes<T>, T> {
    return new GetAllRequestBuilder<AssetActivityCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetActivityCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetActivityCodes`.
   */
  create(
    entity: AssetActivityCodes<T>
  ): CreateRequestBuilder<AssetActivityCodes<T>, T> {
    return new CreateRequestBuilder<AssetActivityCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetActivityCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetActivityCodes.dataAreaId}.
   * @param activityCode Key property. See {@link AssetActivityCodes.activityCode}.
   * @returns A request builder for creating requests to retrieve one `AssetActivityCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    activityCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetActivityCodes<T>, T> {
    return new GetByKeyRequestBuilder<AssetActivityCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActivityCode: activityCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AssetActivityCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetActivityCodes`.
   */
  update(
    entity: AssetActivityCodes<T>
  ): UpdateRequestBuilder<AssetActivityCodes<T>, T> {
    return new UpdateRequestBuilder<AssetActivityCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetActivityCodes`.
   * @param dataAreaId Key property. See {@link AssetActivityCodes.dataAreaId}.
   * @param activityCode Key property. See {@link AssetActivityCodes.activityCode}.
   * @returns A request builder for creating requests that delete an entity of type `AssetActivityCodes`.
   */
  delete(
    dataAreaId: string,
    activityCode: string
  ): DeleteRequestBuilder<AssetActivityCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetActivityCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetActivityCodes` by taking the entity as a parameter.
   */
  delete(
    entity: AssetActivityCodes<T>
  ): DeleteRequestBuilder<AssetActivityCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    activityCode?: string
  ): DeleteRequestBuilder<AssetActivityCodes<T>, T> {
    return new DeleteRequestBuilder<AssetActivityCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetActivityCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActivityCode: activityCode!
          }
    );
  }
}
