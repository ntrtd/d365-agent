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
import { RebateAmortizationScheduleDetails } from './RebateAmortizationScheduleDetails';
import { TamRebateMethod } from './TamRebateMethod';

/**
 * Request builder class for operations supported on the {@link RebateAmortizationScheduleDetails} entity.
 */
export class RebateAmortizationScheduleDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAmortizationScheduleDetails<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAmortizationScheduleDetails` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAmortizationScheduleDetails` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAmortizationScheduleDetails<T>, T> {
    return new GetAllRequestBuilder<RebateAmortizationScheduleDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RebateAmortizationScheduleDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAmortizationScheduleDetails`.
   */
  create(
    entity: RebateAmortizationScheduleDetails<T>
  ): CreateRequestBuilder<RebateAmortizationScheduleDetails<T>, T> {
    return new CreateRequestBuilder<RebateAmortizationScheduleDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateAmortizationScheduleDetails` entity based on its keys.
   * @param periodNumber Key property. See {@link RebateAmortizationScheduleDetails.periodNumber}.
   * @param tamRebateLineRebateId Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateId}.
   * @param tamRebateLineRefLineNum Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRefLineNum}.
   * @param tamRebateLineRebateFrom Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateFrom}.
   * @param tamRebateLineRebateLimit Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateLimit}.
   * @param tamRebateLineRebateAmount Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateAmount}.
   * @param tamRebateLineRebateMethod Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateMethod}.
   * @returns A request builder for creating requests to retrieve one `RebateAmortizationScheduleDetails` entity based on its keys.
   */
  getByKey(
    periodNumber: DeserializedType<T, 'Edm.Int32'>,
    tamRebateLineRebateId: DeserializedType<T, 'Edm.String'>,
    tamRebateLineRefLineNum: DeserializedType<T, 'Edm.Decimal'>,
    tamRebateLineRebateFrom: DeserializedType<T, 'Edm.Decimal'>,
    tamRebateLineRebateLimit: DeserializedType<T, 'Edm.Decimal'>,
    tamRebateLineRebateAmount: DeserializedType<T, 'Edm.Decimal'>,
    tamRebateLineRebateMethod: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TAMRebateMethod'
    >
  ): GetByKeyRequestBuilder<RebateAmortizationScheduleDetails<T>, T> {
    return new GetByKeyRequestBuilder<RebateAmortizationScheduleDetails<T>, T>(
      this.entityApi,
      {
        PeriodNumber: periodNumber,
        TAMRebateLine_RebateId: tamRebateLineRebateId,
        TAMRebateLine_RefLineNum: tamRebateLineRefLineNum,
        TAMRebateLine_RebateFrom: tamRebateLineRebateFrom,
        TAMRebateLine_RebateLimit: tamRebateLineRebateLimit,
        TAMRebateLine_RebateAmount: tamRebateLineRebateAmount,
        TAMRebateLine_RebateMethod: tamRebateLineRebateMethod
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAmortizationScheduleDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAmortizationScheduleDetails`.
   */
  update(
    entity: RebateAmortizationScheduleDetails<T>
  ): UpdateRequestBuilder<RebateAmortizationScheduleDetails<T>, T> {
    return new UpdateRequestBuilder<RebateAmortizationScheduleDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAmortizationScheduleDetails`.
   * @param periodNumber Key property. See {@link RebateAmortizationScheduleDetails.periodNumber}.
   * @param tamRebateLineRebateId Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateId}.
   * @param tamRebateLineRefLineNum Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRefLineNum}.
   * @param tamRebateLineRebateFrom Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateFrom}.
   * @param tamRebateLineRebateLimit Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateLimit}.
   * @param tamRebateLineRebateAmount Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateAmount}.
   * @param tamRebateLineRebateMethod Key property. See {@link RebateAmortizationScheduleDetails.tamRebateLineRebateMethod}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAmortizationScheduleDetails`.
   */
  delete(
    periodNumber: number,
    tamRebateLineRebateId: string,
    tamRebateLineRefLineNum: BigNumber,
    tamRebateLineRebateFrom: BigNumber,
    tamRebateLineRebateLimit: BigNumber,
    tamRebateLineRebateAmount: BigNumber,
    tamRebateLineRebateMethod: TamRebateMethod
  ): DeleteRequestBuilder<RebateAmortizationScheduleDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAmortizationScheduleDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAmortizationScheduleDetails` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAmortizationScheduleDetails<T>
  ): DeleteRequestBuilder<RebateAmortizationScheduleDetails<T>, T>;
  delete(
    periodNumberOrEntity: any,
    tamRebateLineRebateId?: string,
    tamRebateLineRefLineNum?: BigNumber,
    tamRebateLineRebateFrom?: BigNumber,
    tamRebateLineRebateLimit?: BigNumber,
    tamRebateLineRebateAmount?: BigNumber,
    tamRebateLineRebateMethod?: TamRebateMethod
  ): DeleteRequestBuilder<RebateAmortizationScheduleDetails<T>, T> {
    return new DeleteRequestBuilder<RebateAmortizationScheduleDetails<T>, T>(
      this.entityApi,
      periodNumberOrEntity instanceof RebateAmortizationScheduleDetails
        ? periodNumberOrEntity
        : {
            PeriodNumber: periodNumberOrEntity!,
            TAMRebateLine_RebateId: tamRebateLineRebateId!,
            TAMRebateLine_RefLineNum: tamRebateLineRefLineNum!,
            TAMRebateLine_RebateFrom: tamRebateLineRebateFrom!,
            TAMRebateLine_RebateLimit: tamRebateLineRebateLimit!,
            TAMRebateLine_RebateAmount: tamRebateLineRebateAmount!,
            TAMRebateLine_RebateMethod: tamRebateLineRebateMethod!
          }
    );
  }
}
