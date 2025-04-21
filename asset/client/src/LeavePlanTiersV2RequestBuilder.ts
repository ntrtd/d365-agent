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
import { LeavePlanTiersV2 } from './LeavePlanTiersV2';

/**
 * Request builder class for operations supported on the {@link LeavePlanTiersV2} entity.
 */
export class LeavePlanTiersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeavePlanTiersV2<T>, T> {
  /**
   * Returns a request builder for querying all `LeavePlanTiersV2` entities.
   * @returns A request builder for creating requests to retrieve all `LeavePlanTiersV2` entities.
   */
  getAll(): GetAllRequestBuilder<LeavePlanTiersV2<T>, T> {
    return new GetAllRequestBuilder<LeavePlanTiersV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LeavePlanTiersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeavePlanTiersV2`.
   */
  create(
    entity: LeavePlanTiersV2<T>
  ): CreateRequestBuilder<LeavePlanTiersV2<T>, T> {
    return new CreateRequestBuilder<LeavePlanTiersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeavePlanTiersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeavePlanTiersV2.dataAreaId}.
   * @param leavePlanId Key property. See {@link LeavePlanTiersV2.leavePlanId}.
   * @param leaveTypeId Key property. See {@link LeavePlanTiersV2.leaveTypeId}.
   * @param tierNumber Key property. See {@link LeavePlanTiersV2.tierNumber}.
   * @returns A request builder for creating requests to retrieve one `LeavePlanTiersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    leavePlanId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    tierNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LeavePlanTiersV2<T>, T> {
    return new GetByKeyRequestBuilder<LeavePlanTiersV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LeavePlanId: leavePlanId,
      LeaveTypeId: leaveTypeId,
      TierNumber: tierNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LeavePlanTiersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeavePlanTiersV2`.
   */
  update(
    entity: LeavePlanTiersV2<T>
  ): UpdateRequestBuilder<LeavePlanTiersV2<T>, T> {
    return new UpdateRequestBuilder<LeavePlanTiersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeavePlanTiersV2`.
   * @param dataAreaId Key property. See {@link LeavePlanTiersV2.dataAreaId}.
   * @param leavePlanId Key property. See {@link LeavePlanTiersV2.leavePlanId}.
   * @param leaveTypeId Key property. See {@link LeavePlanTiersV2.leaveTypeId}.
   * @param tierNumber Key property. See {@link LeavePlanTiersV2.tierNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlanTiersV2`.
   */
  delete(
    dataAreaId: string,
    leavePlanId: string,
    leaveTypeId: string,
    tierNumber: BigNumber
  ): DeleteRequestBuilder<LeavePlanTiersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeavePlanTiersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeavePlanTiersV2` by taking the entity as a parameter.
   */
  delete(
    entity: LeavePlanTiersV2<T>
  ): DeleteRequestBuilder<LeavePlanTiersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    leavePlanId?: string,
    leaveTypeId?: string,
    tierNumber?: BigNumber
  ): DeleteRequestBuilder<LeavePlanTiersV2<T>, T> {
    return new DeleteRequestBuilder<LeavePlanTiersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeavePlanTiersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LeavePlanId: leavePlanId!,
            LeaveTypeId: leaveTypeId!,
            TierNumber: tierNumber!
          }
    );
  }
}
