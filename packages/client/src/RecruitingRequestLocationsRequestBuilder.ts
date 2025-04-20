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
import { RecruitingRequestLocations } from './RecruitingRequestLocations';

/**
 * Request builder class for operations supported on the {@link RecruitingRequestLocations} entity.
 */
export class RecruitingRequestLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecruitingRequestLocations<T>, T> {
  /**
   * Returns a request builder for querying all `RecruitingRequestLocations` entities.
   * @returns A request builder for creating requests to retrieve all `RecruitingRequestLocations` entities.
   */
  getAll(): GetAllRequestBuilder<RecruitingRequestLocations<T>, T> {
    return new GetAllRequestBuilder<RecruitingRequestLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RecruitingRequestLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecruitingRequestLocations`.
   */
  create(
    entity: RecruitingRequestLocations<T>
  ): CreateRequestBuilder<RecruitingRequestLocations<T>, T> {
    return new CreateRequestBuilder<RecruitingRequestLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecruitingRequestLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecruitingRequestLocations.dataAreaId}.
   * @param recruitingRequestLocationId Key property. See {@link RecruitingRequestLocations.recruitingRequestLocationId}.
   * @returns A request builder for creating requests to retrieve one `RecruitingRequestLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recruitingRequestLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecruitingRequestLocations<T>, T> {
    return new GetByKeyRequestBuilder<RecruitingRequestLocations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecruitingRequestLocationId: recruitingRequestLocationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RecruitingRequestLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecruitingRequestLocations`.
   */
  update(
    entity: RecruitingRequestLocations<T>
  ): UpdateRequestBuilder<RecruitingRequestLocations<T>, T> {
    return new UpdateRequestBuilder<RecruitingRequestLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestLocations`.
   * @param dataAreaId Key property. See {@link RecruitingRequestLocations.dataAreaId}.
   * @param recruitingRequestLocationId Key property. See {@link RecruitingRequestLocations.recruitingRequestLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestLocations`.
   */
  delete(
    dataAreaId: string,
    recruitingRequestLocationId: string
  ): DeleteRequestBuilder<RecruitingRequestLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestLocations` by taking the entity as a parameter.
   */
  delete(
    entity: RecruitingRequestLocations<T>
  ): DeleteRequestBuilder<RecruitingRequestLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recruitingRequestLocationId?: string
  ): DeleteRequestBuilder<RecruitingRequestLocations<T>, T> {
    return new DeleteRequestBuilder<RecruitingRequestLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecruitingRequestLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecruitingRequestLocationId: recruitingRequestLocationId!
          }
    );
  }
}
