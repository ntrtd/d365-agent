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
import { ReleasedEngineeringProductVersions } from './ReleasedEngineeringProductVersions';

/**
 * Request builder class for operations supported on the {@link ReleasedEngineeringProductVersions} entity.
 */
export class ReleasedEngineeringProductVersionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedEngineeringProductVersions<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedEngineeringProductVersions` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedEngineeringProductVersions` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedEngineeringProductVersions<T>, T> {
    return new GetAllRequestBuilder<ReleasedEngineeringProductVersions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReleasedEngineeringProductVersions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedEngineeringProductVersions`.
   */
  create(
    entity: ReleasedEngineeringProductVersions<T>
  ): CreateRequestBuilder<ReleasedEngineeringProductVersions<T>, T> {
    return new CreateRequestBuilder<ReleasedEngineeringProductVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReleasedEngineeringProductVersions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductVersions.dataAreaId}.
   * @param engineeringProductNumber Key property. See {@link ReleasedEngineeringProductVersions.engineeringProductNumber}.
   * @param engineeringProductVersionId Key property. See {@link ReleasedEngineeringProductVersions.engineeringProductVersionId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedEngineeringProductVersions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringProductNumber: DeserializedType<T, 'Edm.String'>,
    engineeringProductVersionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedEngineeringProductVersions<T>, T> {
    return new GetByKeyRequestBuilder<ReleasedEngineeringProductVersions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EngineeringProductNumber: engineeringProductNumber,
        EngineeringProductVersionId: engineeringProductVersionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedEngineeringProductVersions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedEngineeringProductVersions`.
   */
  update(
    entity: ReleasedEngineeringProductVersions<T>
  ): UpdateRequestBuilder<ReleasedEngineeringProductVersions<T>, T> {
    return new UpdateRequestBuilder<ReleasedEngineeringProductVersions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductVersions`.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductVersions.dataAreaId}.
   * @param engineeringProductNumber Key property. See {@link ReleasedEngineeringProductVersions.engineeringProductNumber}.
   * @param engineeringProductVersionId Key property. See {@link ReleasedEngineeringProductVersions.engineeringProductVersionId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductVersions`.
   */
  delete(
    dataAreaId: string,
    engineeringProductNumber: string,
    engineeringProductVersionId: string
  ): DeleteRequestBuilder<ReleasedEngineeringProductVersions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductVersions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductVersions` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedEngineeringProductVersions<T>
  ): DeleteRequestBuilder<ReleasedEngineeringProductVersions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringProductNumber?: string,
    engineeringProductVersionId?: string
  ): DeleteRequestBuilder<ReleasedEngineeringProductVersions<T>, T> {
    return new DeleteRequestBuilder<ReleasedEngineeringProductVersions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedEngineeringProductVersions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringProductNumber: engineeringProductNumber!,
            EngineeringProductVersionId: engineeringProductVersionId!
          }
    );
  }
}
