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
import { LeaveBuySellPolicySellTiers } from './LeaveBuySellPolicySellTiers';

/**
 * Request builder class for operations supported on the {@link LeaveBuySellPolicySellTiers} entity.
 */
export class LeaveBuySellPolicySellTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBuySellPolicySellTiers<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBuySellPolicySellTiers` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBuySellPolicySellTiers` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBuySellPolicySellTiers<T>, T> {
    return new GetAllRequestBuilder<LeaveBuySellPolicySellTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveBuySellPolicySellTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBuySellPolicySellTiers`.
   */
  create(
    entity: LeaveBuySellPolicySellTiers<T>
  ): CreateRequestBuilder<LeaveBuySellPolicySellTiers<T>, T> {
    return new CreateRequestBuilder<LeaveBuySellPolicySellTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBuySellPolicySellTiers` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBuySellPolicySellTiers.dataAreaId}.
   * @param policyId Key property. See {@link LeaveBuySellPolicySellTiers.policyId}.
   * @param leaveTypeId Key property. See {@link LeaveBuySellPolicySellTiers.leaveTypeId}.
   * @param monthsOfService Key property. See {@link LeaveBuySellPolicySellTiers.monthsOfService}.
   * @returns A request builder for creating requests to retrieve one `LeaveBuySellPolicySellTiers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    monthsOfService: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LeaveBuySellPolicySellTiers<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBuySellPolicySellTiers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyId: policyId,
        LeaveTypeId: leaveTypeId,
        MonthsOfService: monthsOfService
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveBuySellPolicySellTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBuySellPolicySellTiers`.
   */
  update(
    entity: LeaveBuySellPolicySellTiers<T>
  ): UpdateRequestBuilder<LeaveBuySellPolicySellTiers<T>, T> {
    return new UpdateRequestBuilder<LeaveBuySellPolicySellTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellPolicySellTiers`.
   * @param dataAreaId Key property. See {@link LeaveBuySellPolicySellTiers.dataAreaId}.
   * @param policyId Key property. See {@link LeaveBuySellPolicySellTiers.policyId}.
   * @param leaveTypeId Key property. See {@link LeaveBuySellPolicySellTiers.leaveTypeId}.
   * @param monthsOfService Key property. See {@link LeaveBuySellPolicySellTiers.monthsOfService}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellPolicySellTiers`.
   */
  delete(
    dataAreaId: string,
    policyId: string,
    leaveTypeId: string,
    monthsOfService: BigNumber
  ): DeleteRequestBuilder<LeaveBuySellPolicySellTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellPolicySellTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellPolicySellTiers` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveBuySellPolicySellTiers<T>
  ): DeleteRequestBuilder<LeaveBuySellPolicySellTiers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyId?: string,
    leaveTypeId?: string,
    monthsOfService?: BigNumber
  ): DeleteRequestBuilder<LeaveBuySellPolicySellTiers<T>, T> {
    return new DeleteRequestBuilder<LeaveBuySellPolicySellTiers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBuySellPolicySellTiers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyId: policyId!,
            LeaveTypeId: leaveTypeId!,
            MonthsOfService: monthsOfService!
          }
    );
  }
}
