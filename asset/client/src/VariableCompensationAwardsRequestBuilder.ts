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
import { VariableCompensationAwards } from './VariableCompensationAwards';

/**
 * Request builder class for operations supported on the {@link VariableCompensationAwards} entity.
 */
export class VariableCompensationAwardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VariableCompensationAwards<T>, T> {
  /**
   * Returns a request builder for querying all `VariableCompensationAwards` entities.
   * @returns A request builder for creating requests to retrieve all `VariableCompensationAwards` entities.
   */
  getAll(): GetAllRequestBuilder<VariableCompensationAwards<T>, T> {
    return new GetAllRequestBuilder<VariableCompensationAwards<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VariableCompensationAwards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VariableCompensationAwards`.
   */
  create(
    entity: VariableCompensationAwards<T>
  ): CreateRequestBuilder<VariableCompensationAwards<T>, T> {
    return new CreateRequestBuilder<VariableCompensationAwards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VariableCompensationAwards` entity based on its keys.
   * @param dataAreaId Key property. See {@link VariableCompensationAwards.dataAreaId}.
   * @param personnelNumber Key property. See {@link VariableCompensationAwards.personnelNumber}.
   * @param planId Key property. See {@link VariableCompensationAwards.planId}.
   * @param awardDate Key property. See {@link VariableCompensationAwards.awardDate}.
   * @param sequence Key property. See {@link VariableCompensationAwards.sequence}.
   * @returns A request builder for creating requests to retrieve one `VariableCompensationAwards` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    awardDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    sequence: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VariableCompensationAwards<T>, T> {
    return new GetByKeyRequestBuilder<VariableCompensationAwards<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        PlanId: planId,
        AwardDate: awardDate,
        Sequence: sequence
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VariableCompensationAwards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VariableCompensationAwards`.
   */
  update(
    entity: VariableCompensationAwards<T>
  ): UpdateRequestBuilder<VariableCompensationAwards<T>, T> {
    return new UpdateRequestBuilder<VariableCompensationAwards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationAwards`.
   * @param dataAreaId Key property. See {@link VariableCompensationAwards.dataAreaId}.
   * @param personnelNumber Key property. See {@link VariableCompensationAwards.personnelNumber}.
   * @param planId Key property. See {@link VariableCompensationAwards.planId}.
   * @param awardDate Key property. See {@link VariableCompensationAwards.awardDate}.
   * @param sequence Key property. See {@link VariableCompensationAwards.sequence}.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationAwards`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    planId: string,
    awardDate: Moment,
    sequence: BigNumber
  ): DeleteRequestBuilder<VariableCompensationAwards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationAwards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationAwards` by taking the entity as a parameter.
   */
  delete(
    entity: VariableCompensationAwards<T>
  ): DeleteRequestBuilder<VariableCompensationAwards<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    planId?: string,
    awardDate?: Moment,
    sequence?: BigNumber
  ): DeleteRequestBuilder<VariableCompensationAwards<T>, T> {
    return new DeleteRequestBuilder<VariableCompensationAwards<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VariableCompensationAwards
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
