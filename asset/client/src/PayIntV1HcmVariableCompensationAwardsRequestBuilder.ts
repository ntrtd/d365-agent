/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PayIntV1HcmVariableCompensationAwards } from './PayIntV1HcmVariableCompensationAwards';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmVariableCompensationAwards} entity.
 */
export class PayIntV1HcmVariableCompensationAwardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmVariableCompensationAwards` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmVariableCompensationAwards` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T> {
    return new GetAllRequestBuilder<
      PayIntV1HcmVariableCompensationAwards<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmVariableCompensationAwards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmVariableCompensationAwards`.
   */
  create(
    entity: PayIntV1HcmVariableCompensationAwards<T>
  ): CreateRequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T> {
    return new CreateRequestBuilder<
      PayIntV1HcmVariableCompensationAwards<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmVariableCompensationAwards` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1HcmVariableCompensationAwards.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayIntV1HcmVariableCompensationAwards.personnelNumber}.
   * @param planId Key property. See {@link PayIntV1HcmVariableCompensationAwards.planId}.
   * @param awardDate Key property. See {@link PayIntV1HcmVariableCompensationAwards.awardDate}.
   * @param sequence Key property. See {@link PayIntV1HcmVariableCompensationAwards.sequence}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmVariableCompensationAwards` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    awardDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    sequence: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T> {
    return new GetByKeyRequestBuilder<
      PayIntV1HcmVariableCompensationAwards<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonnelNumber: personnelNumber,
      PlanId: planId,
      AwardDate: awardDate,
      Sequence: sequence
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1HcmVariableCompensationAwards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmVariableCompensationAwards`.
   */
  update(
    entity: PayIntV1HcmVariableCompensationAwards<T>
  ): UpdateRequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T> {
    return new UpdateRequestBuilder<
      PayIntV1HcmVariableCompensationAwards<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmVariableCompensationAwards`.
   * @param dataAreaId Key property. See {@link PayIntV1HcmVariableCompensationAwards.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayIntV1HcmVariableCompensationAwards.personnelNumber}.
   * @param planId Key property. See {@link PayIntV1HcmVariableCompensationAwards.planId}.
   * @param awardDate Key property. See {@link PayIntV1HcmVariableCompensationAwards.awardDate}.
   * @param sequence Key property. See {@link PayIntV1HcmVariableCompensationAwards.sequence}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmVariableCompensationAwards`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    planId: string,
    awardDate: Moment,
    sequence: BigNumber
  ): DeleteRequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmVariableCompensationAwards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmVariableCompensationAwards` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmVariableCompensationAwards<T>
  ): DeleteRequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    planId?: string,
    awardDate?: Moment,
    sequence?: BigNumber
  ): DeleteRequestBuilder<PayIntV1HcmVariableCompensationAwards<T>, T> {
    return new DeleteRequestBuilder<
      PayIntV1HcmVariableCompensationAwards<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1HcmVariableCompensationAwards
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            PlanId: planId!,
            AwardDate: awardDate!,
            Sequence: sequence!
          }
    );
  }
}
