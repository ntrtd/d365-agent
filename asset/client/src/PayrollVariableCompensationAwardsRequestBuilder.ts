/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PayrollVariableCompensationAwards } from './PayrollVariableCompensationAwards';

/**
 * Request builder class for operations supported on the {@link PayrollVariableCompensationAwards} entity.
 */
export class PayrollVariableCompensationAwardsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollVariableCompensationAwards<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollVariableCompensationAwards` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollVariableCompensationAwards` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollVariableCompensationAwards<T>, T> {
    return new GetAllRequestBuilder<PayrollVariableCompensationAwards<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollVariableCompensationAwards` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollVariableCompensationAwards`.
   */
  create(
    entity: PayrollVariableCompensationAwards<T>
  ): CreateRequestBuilder<PayrollVariableCompensationAwards<T>, T> {
    return new CreateRequestBuilder<PayrollVariableCompensationAwards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollVariableCompensationAwards` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayrollVariableCompensationAwards.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayrollVariableCompensationAwards.personnelNumber}.
   * @param planId Key property. See {@link PayrollVariableCompensationAwards.planId}.
   * @param typeId Key property. See {@link PayrollVariableCompensationAwards.typeId}.
   * @param awardDate Key property. See {@link PayrollVariableCompensationAwards.awardDate}.
   * @returns A request builder for creating requests to retrieve one `PayrollVariableCompensationAwards` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    typeId: DeserializedType<T, 'Edm.String'>,
    awardDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayrollVariableCompensationAwards<T>, T> {
    return new GetByKeyRequestBuilder<PayrollVariableCompensationAwards<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        PlanId: planId,
        TypeId: typeId,
        AwardDate: awardDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollVariableCompensationAwards`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollVariableCompensationAwards`.
   */
  update(
    entity: PayrollVariableCompensationAwards<T>
  ): UpdateRequestBuilder<PayrollVariableCompensationAwards<T>, T> {
    return new UpdateRequestBuilder<PayrollVariableCompensationAwards<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollVariableCompensationAwards`.
   * @param dataAreaId Key property. See {@link PayrollVariableCompensationAwards.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayrollVariableCompensationAwards.personnelNumber}.
   * @param planId Key property. See {@link PayrollVariableCompensationAwards.planId}.
   * @param typeId Key property. See {@link PayrollVariableCompensationAwards.typeId}.
   * @param awardDate Key property. See {@link PayrollVariableCompensationAwards.awardDate}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollVariableCompensationAwards`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    planId: string,
    typeId: string,
    awardDate: Moment
  ): DeleteRequestBuilder<PayrollVariableCompensationAwards<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollVariableCompensationAwards`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollVariableCompensationAwards` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollVariableCompensationAwards<T>
  ): DeleteRequestBuilder<PayrollVariableCompensationAwards<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    planId?: string,
    typeId?: string,
    awardDate?: Moment
  ): DeleteRequestBuilder<PayrollVariableCompensationAwards<T>, T> {
    return new DeleteRequestBuilder<PayrollVariableCompensationAwards<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayrollVariableCompensationAwards
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            PlanId: planId!,
            TypeId: typeId!,
            AwardDate: awardDate!
          }
    );
  }
}
