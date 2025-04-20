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
import { LeavePlanTiers } from './LeavePlanTiers';

/**
 * Request builder class for operations supported on the {@link LeavePlanTiers} entity.
 */
export class LeavePlanTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeavePlanTiers<T>, T> {
  /**
   * Returns a request builder for querying all `LeavePlanTiers` entities.
   * @returns A request builder for creating requests to retrieve all `LeavePlanTiers` entities.
   */
  getAll(): GetAllRequestBuilder<LeavePlanTiers<T>, T> {
    return new GetAllRequestBuilder<LeavePlanTiers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeavePlanTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeavePlanTiers`.
   */
  create(
    entity: LeavePlanTiers<T>
  ): CreateRequestBuilder<LeavePlanTiers<T>, T> {
    return new CreateRequestBuilder<LeavePlanTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeavePlanTiers` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeavePlanTiers.dataAreaId}.
   * @param leavePlanId Key property. See {@link LeavePlanTiers.leavePlanId}.
   * @param tierNumber Key property. See {@link LeavePlanTiers.tierNumber}.
   * @returns A request builder for creating requests to retrieve one `LeavePlanTiers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leavePlanId: DeserializedType<T, 'Edm.String'>,
    tierNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LeavePlanTiers<T>, T> {
    return new GetByKeyRequestBuilder<LeavePlanTiers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LeavePlanId: leavePlanId,
      TierNumber: tierNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeavePlanTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeavePlanTiers`.
   */
  update(
    entity: LeavePlanTiers<T>
  ): UpdateRequestBuilder<LeavePlanTiers<T>, T> {
    return new UpdateRequestBuilder<LeavePlanTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeavePlanTiers`.
   * @param dataAreaId Key property. See {@link LeavePlanTiers.dataAreaId}.
   * @param leavePlanId Key property. See {@link LeavePlanTiers.leavePlanId}.
   * @param tierNumber Key property. See {@link LeavePlanTiers.tierNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlanTiers`.
   */
  delete(
    dataAreaId: string,
    leavePlanId: string,
    tierNumber: BigNumber
  ): DeleteRequestBuilder<LeavePlanTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeavePlanTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlanTiers` by taking the entity as a parameter.
   */
  delete(entity: LeavePlanTiers<T>): DeleteRequestBuilder<LeavePlanTiers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leavePlanId?: string,
    tierNumber?: BigNumber
  ): DeleteRequestBuilder<LeavePlanTiers<T>, T> {
    return new DeleteRequestBuilder<LeavePlanTiers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeavePlanTiers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeavePlanId: leavePlanId!,
            TierNumber: tierNumber!
          }
    );
  }
}
