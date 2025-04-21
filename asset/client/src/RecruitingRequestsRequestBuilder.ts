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
import { RecruitingRequests } from './RecruitingRequests';

/**
 * Request builder class for operations supported on the {@link RecruitingRequests} entity.
 */
export class RecruitingRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecruitingRequests<T>, T> {
  /**
   * Returns a request builder for querying all `RecruitingRequests` entities.
   * @returns A request builder for creating requests to retrieve all `RecruitingRequests` entities.
   */
  getAll(): GetAllRequestBuilder<RecruitingRequests<T>, T> {
    return new GetAllRequestBuilder<RecruitingRequests<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RecruitingRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecruitingRequests`.
   */
  create(
    entity: RecruitingRequests<T>
  ): CreateRequestBuilder<RecruitingRequests<T>, T> {
    return new CreateRequestBuilder<RecruitingRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecruitingRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecruitingRequests.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequests.recruitingRequestId}.
   * @returns A request builder for creating requests to retrieve one `RecruitingRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recruitingRequestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecruitingRequests<T>, T> {
    return new GetByKeyRequestBuilder<RecruitingRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecruitingRequestId: recruitingRequestId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RecruitingRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecruitingRequests`.
   */
  update(
    entity: RecruitingRequests<T>
  ): UpdateRequestBuilder<RecruitingRequests<T>, T> {
    return new UpdateRequestBuilder<RecruitingRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequests`.
   * @param dataAreaId Key property. See {@link RecruitingRequests.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequests.recruitingRequestId}.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequests`.
   */
  delete(
    dataAreaId: string,
    recruitingRequestId: string
  ): DeleteRequestBuilder<RecruitingRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequests` by taking the entity as a parameter.
   */
  delete(
    entity: RecruitingRequests<T>
  ): DeleteRequestBuilder<RecruitingRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recruitingRequestId?: string
  ): DeleteRequestBuilder<RecruitingRequests<T>, T> {
    return new DeleteRequestBuilder<RecruitingRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecruitingRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecruitingRequestId: recruitingRequestId!
          }
    );
  }
}
