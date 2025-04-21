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
import { LeaveBuySellPolicyBuyTiers } from './LeaveBuySellPolicyBuyTiers';

/**
 * Request builder class for operations supported on the {@link LeaveBuySellPolicyBuyTiers} entity.
 */
export class LeaveBuySellPolicyBuyTiersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveBuySellPolicyBuyTiers` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveBuySellPolicyBuyTiers` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T> {
    return new GetAllRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveBuySellPolicyBuyTiers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveBuySellPolicyBuyTiers`.
   */
  create(
    entity: LeaveBuySellPolicyBuyTiers<T>
  ): CreateRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T> {
    return new CreateRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveBuySellPolicyBuyTiers` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveBuySellPolicyBuyTiers.dataAreaId}.
   * @param policyId Key property. See {@link LeaveBuySellPolicyBuyTiers.policyId}.
   * @param leaveTypeId Key property. See {@link LeaveBuySellPolicyBuyTiers.leaveTypeId}.
   * @param monthsOfService Key property. See {@link LeaveBuySellPolicyBuyTiers.monthsOfService}.
   * @returns A request builder for creating requests to retrieve one `LeaveBuySellPolicyBuyTiers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyId: DeserializedType<T, 'Edm.String'>,
    leaveTypeId: DeserializedType<T, 'Edm.String'>,
    monthsOfService: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T> {
    return new GetByKeyRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T>(
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
   * Returns a request builder for updating an entity of type `LeaveBuySellPolicyBuyTiers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveBuySellPolicyBuyTiers`.
   */
  update(
    entity: LeaveBuySellPolicyBuyTiers<T>
  ): UpdateRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T> {
    return new UpdateRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellPolicyBuyTiers`.
   * @param dataAreaId Key property. See {@link LeaveBuySellPolicyBuyTiers.dataAreaId}.
   * @param policyId Key property. See {@link LeaveBuySellPolicyBuyTiers.policyId}.
   * @param leaveTypeId Key property. See {@link LeaveBuySellPolicyBuyTiers.leaveTypeId}.
   * @param monthsOfService Key property. See {@link LeaveBuySellPolicyBuyTiers.monthsOfService}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellPolicyBuyTiers`.
   */
  delete(
    dataAreaId: string,
    policyId: string,
    leaveTypeId: string,
    monthsOfService: BigNumber
  ): DeleteRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveBuySellPolicyBuyTiers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveBuySellPolicyBuyTiers` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveBuySellPolicyBuyTiers<T>
  ): DeleteRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyId?: string,
    leaveTypeId?: string,
    monthsOfService?: BigNumber
  ): DeleteRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T> {
    return new DeleteRequestBuilder<LeaveBuySellPolicyBuyTiers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveBuySellPolicyBuyTiers
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
