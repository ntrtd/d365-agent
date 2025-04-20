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
import { RecruitingRequestPositions } from './RecruitingRequestPositions';

/**
 * Request builder class for operations supported on the {@link RecruitingRequestPositions} entity.
 */
export class RecruitingRequestPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecruitingRequestPositions<T>, T> {
  /**
   * Returns a request builder for querying all `RecruitingRequestPositions` entities.
   * @returns A request builder for creating requests to retrieve all `RecruitingRequestPositions` entities.
   */
  getAll(): GetAllRequestBuilder<RecruitingRequestPositions<T>, T> {
    return new GetAllRequestBuilder<RecruitingRequestPositions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RecruitingRequestPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecruitingRequestPositions`.
   */
  create(
    entity: RecruitingRequestPositions<T>
  ): CreateRequestBuilder<RecruitingRequestPositions<T>, T> {
    return new CreateRequestBuilder<RecruitingRequestPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecruitingRequestPositions` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecruitingRequestPositions.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequestPositions.recruitingRequestId}.
   * @param positionId Key property. See {@link RecruitingRequestPositions.positionId}.
   * @returns A request builder for creating requests to retrieve one `RecruitingRequestPositions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recruitingRequestId: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecruitingRequestPositions<T>, T> {
    return new GetByKeyRequestBuilder<RecruitingRequestPositions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecruitingRequestId: recruitingRequestId,
        PositionId: positionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RecruitingRequestPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecruitingRequestPositions`.
   */
  update(
    entity: RecruitingRequestPositions<T>
  ): UpdateRequestBuilder<RecruitingRequestPositions<T>, T> {
    return new UpdateRequestBuilder<RecruitingRequestPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestPositions`.
   * @param dataAreaId Key property. See {@link RecruitingRequestPositions.dataAreaId}.
   * @param recruitingRequestId Key property. See {@link RecruitingRequestPositions.recruitingRequestId}.
   * @param positionId Key property. See {@link RecruitingRequestPositions.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestPositions`.
   */
  delete(
    dataAreaId: string,
    recruitingRequestId: string,
    positionId: string
  ): DeleteRequestBuilder<RecruitingRequestPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecruitingRequestPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingRequestPositions` by taking the entity as a parameter.
   */
  delete(
    entity: RecruitingRequestPositions<T>
  ): DeleteRequestBuilder<RecruitingRequestPositions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recruitingRequestId?: string,
    positionId?: string
  ): DeleteRequestBuilder<RecruitingRequestPositions<T>, T> {
    return new DeleteRequestBuilder<RecruitingRequestPositions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecruitingRequestPositions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecruitingRequestId: recruitingRequestId!,
            PositionId: positionId!
          }
    );
  }
}
