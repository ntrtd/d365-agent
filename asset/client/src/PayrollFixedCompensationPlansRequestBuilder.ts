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
import { PayrollFixedCompensationPlans } from './PayrollFixedCompensationPlans';

/**
 * Request builder class for operations supported on the {@link PayrollFixedCompensationPlans} entity.
 */
export class PayrollFixedCompensationPlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayrollFixedCompensationPlans<T>, T> {
  /**
   * Returns a request builder for querying all `PayrollFixedCompensationPlans` entities.
   * @returns A request builder for creating requests to retrieve all `PayrollFixedCompensationPlans` entities.
   */
  getAll(): GetAllRequestBuilder<PayrollFixedCompensationPlans<T>, T> {
    return new GetAllRequestBuilder<PayrollFixedCompensationPlans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayrollFixedCompensationPlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayrollFixedCompensationPlans`.
   */
  create(
    entity: PayrollFixedCompensationPlans<T>
  ): CreateRequestBuilder<PayrollFixedCompensationPlans<T>, T> {
    return new CreateRequestBuilder<PayrollFixedCompensationPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayrollFixedCompensationPlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayrollFixedCompensationPlans.dataAreaId}.
   * @param planId Key property. See {@link PayrollFixedCompensationPlans.planId}.
   * @param validFrom Key property. See {@link PayrollFixedCompensationPlans.validFrom}.
   * @param personnelNumber Key property. See {@link PayrollFixedCompensationPlans.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `PayrollFixedCompensationPlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayrollFixedCompensationPlans<T>, T> {
    return new GetByKeyRequestBuilder<PayrollFixedCompensationPlans<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PlanId: planId,
        ValidFrom: validFrom,
        PersonnelNumber: personnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayrollFixedCompensationPlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayrollFixedCompensationPlans`.
   */
  update(
    entity: PayrollFixedCompensationPlans<T>
  ): UpdateRequestBuilder<PayrollFixedCompensationPlans<T>, T> {
    return new UpdateRequestBuilder<PayrollFixedCompensationPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayrollFixedCompensationPlans`.
   * @param dataAreaId Key property. See {@link PayrollFixedCompensationPlans.dataAreaId}.
   * @param planId Key property. See {@link PayrollFixedCompensationPlans.planId}.
   * @param validFrom Key property. See {@link PayrollFixedCompensationPlans.validFrom}.
   * @param personnelNumber Key property. See {@link PayrollFixedCompensationPlans.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PayrollFixedCompensationPlans`.
   */
  delete(
    dataAreaId: string,
    planId: string,
    validFrom: Moment,
    personnelNumber: string
  ): DeleteRequestBuilder<PayrollFixedCompensationPlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayrollFixedCompensationPlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayrollFixedCompensationPlans` by taking the entity as a parameter.
   */
  delete(
    entity: PayrollFixedCompensationPlans<T>
  ): DeleteRequestBuilder<PayrollFixedCompensationPlans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    planId?: string,
    validFrom?: Moment,
    personnelNumber?: string
  ): DeleteRequestBuilder<PayrollFixedCompensationPlans<T>, T> {
    return new DeleteRequestBuilder<PayrollFixedCompensationPlans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayrollFixedCompensationPlans
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PlanId: planId!,
            ValidFrom: validFrom!,
            PersonnelNumber: personnelNumber!
          }
    );
  }
}
