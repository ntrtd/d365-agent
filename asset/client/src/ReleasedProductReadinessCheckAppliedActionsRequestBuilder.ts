/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ReleasedProductReadinessCheckAppliedActions } from './ReleasedProductReadinessCheckAppliedActions';

/**
 * Request builder class for operations supported on the {@link ReleasedProductReadinessCheckAppliedActions} entity.
 */
export class ReleasedProductReadinessCheckAppliedActionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedProductReadinessCheckAppliedActions<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedProductReadinessCheckAppliedActions` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedProductReadinessCheckAppliedActions` entities.
   */
  getAll(): GetAllRequestBuilder<
    ReleasedProductReadinessCheckAppliedActions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ReleasedProductReadinessCheckAppliedActions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedProductReadinessCheckAppliedActions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedProductReadinessCheckAppliedActions`.
   */
  create(
    entity: ReleasedProductReadinessCheckAppliedActions<T>
  ): CreateRequestBuilder<ReleasedProductReadinessCheckAppliedActions<T>, T> {
    return new CreateRequestBuilder<
      ReleasedProductReadinessCheckAppliedActions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReleasedProductReadinessCheckAppliedActions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedProductReadinessCheckAppliedActions.dataAreaId}.
   * @param releasedProductReadinessCheckAppliedActionRecordId Key property. See {@link ReleasedProductReadinessCheckAppliedActions.releasedProductReadinessCheckAppliedActionRecordId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedProductReadinessCheckAppliedActions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    releasedProductReadinessCheckAppliedActionRecordId: DeserializedType<
      T,
      'Edm.Int64'
    >
  ): GetByKeyRequestBuilder<ReleasedProductReadinessCheckAppliedActions<T>, T> {
    return new GetByKeyRequestBuilder<
      ReleasedProductReadinessCheckAppliedActions<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReleasedProductReadinessCheckAppliedActionRecordId:
        releasedProductReadinessCheckAppliedActionRecordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedProductReadinessCheckAppliedActions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedProductReadinessCheckAppliedActions`.
   */
  update(
    entity: ReleasedProductReadinessCheckAppliedActions<T>
  ): UpdateRequestBuilder<ReleasedProductReadinessCheckAppliedActions<T>, T> {
    return new UpdateRequestBuilder<
      ReleasedProductReadinessCheckAppliedActions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductReadinessCheckAppliedActions`.
   * @param dataAreaId Key property. See {@link ReleasedProductReadinessCheckAppliedActions.dataAreaId}.
   * @param releasedProductReadinessCheckAppliedActionRecordId Key property. See {@link ReleasedProductReadinessCheckAppliedActions.releasedProductReadinessCheckAppliedActionRecordId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductReadinessCheckAppliedActions`.
   */
  delete(
    dataAreaId: string,
    releasedProductReadinessCheckAppliedActionRecordId: BigNumber
  ): DeleteRequestBuilder<ReleasedProductReadinessCheckAppliedActions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedProductReadinessCheckAppliedActions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedProductReadinessCheckAppliedActions` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedProductReadinessCheckAppliedActions<T>
  ): DeleteRequestBuilder<ReleasedProductReadinessCheckAppliedActions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    releasedProductReadinessCheckAppliedActionRecordId?: BigNumber
  ): DeleteRequestBuilder<ReleasedProductReadinessCheckAppliedActions<T>, T> {
    return new DeleteRequestBuilder<
      ReleasedProductReadinessCheckAppliedActions<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedProductReadinessCheckAppliedActions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReleasedProductReadinessCheckAppliedActionRecordId:
              releasedProductReadinessCheckAppliedActionRecordId!
          }
    );
  }
}
