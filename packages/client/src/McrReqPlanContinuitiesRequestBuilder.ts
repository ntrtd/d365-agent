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
import { McrReqPlanContinuities } from './McrReqPlanContinuities';

/**
 * Request builder class for operations supported on the {@link McrReqPlanContinuities} entity.
 */
export class McrReqPlanContinuitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrReqPlanContinuities<T>, T> {
  /**
   * Returns a request builder for querying all `McrReqPlanContinuities` entities.
   * @returns A request builder for creating requests to retrieve all `McrReqPlanContinuities` entities.
   */
  getAll(): GetAllRequestBuilder<McrReqPlanContinuities<T>, T> {
    return new GetAllRequestBuilder<McrReqPlanContinuities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrReqPlanContinuities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrReqPlanContinuities`.
   */
  create(
    entity: McrReqPlanContinuities<T>
  ): CreateRequestBuilder<McrReqPlanContinuities<T>, T> {
    return new CreateRequestBuilder<McrReqPlanContinuities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrReqPlanContinuities` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrReqPlanContinuities.dataAreaId}.
   * @param requiredPlanIdContinuity Key property. See {@link McrReqPlanContinuities.requiredPlanIdContinuity}.
   * @returns A request builder for creating requests to retrieve one `McrReqPlanContinuities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    requiredPlanIdContinuity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<McrReqPlanContinuities<T>, T> {
    return new GetByKeyRequestBuilder<McrReqPlanContinuities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RequiredPlanIdContinuity: requiredPlanIdContinuity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrReqPlanContinuities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrReqPlanContinuities`.
   */
  update(
    entity: McrReqPlanContinuities<T>
  ): UpdateRequestBuilder<McrReqPlanContinuities<T>, T> {
    return new UpdateRequestBuilder<McrReqPlanContinuities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrReqPlanContinuities`.
   * @param dataAreaId Key property. See {@link McrReqPlanContinuities.dataAreaId}.
   * @param requiredPlanIdContinuity Key property. See {@link McrReqPlanContinuities.requiredPlanIdContinuity}.
   * @returns A request builder for creating requests that delete an entity of type `McrReqPlanContinuities`.
   */
  delete(
    dataAreaId: string,
    requiredPlanIdContinuity: string
  ): DeleteRequestBuilder<McrReqPlanContinuities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrReqPlanContinuities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrReqPlanContinuities` by taking the entity as a parameter.
   */
  delete(
    entity: McrReqPlanContinuities<T>
  ): DeleteRequestBuilder<McrReqPlanContinuities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    requiredPlanIdContinuity?: string
  ): DeleteRequestBuilder<McrReqPlanContinuities<T>, T> {
    return new DeleteRequestBuilder<McrReqPlanContinuities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrReqPlanContinuities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RequiredPlanIdContinuity: requiredPlanIdContinuity!
          }
    );
  }
}
