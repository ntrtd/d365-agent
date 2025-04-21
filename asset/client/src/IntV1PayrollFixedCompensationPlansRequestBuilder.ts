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
import { IntV1PayrollFixedCompensationPlans } from './IntV1PayrollFixedCompensationPlans';

/**
 * Request builder class for operations supported on the {@link IntV1PayrollFixedCompensationPlans} entity.
 */
export class IntV1PayrollFixedCompensationPlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T> {
  /**
   * Returns a request builder for querying all `IntV1PayrollFixedCompensationPlans` entities.
   * @returns A request builder for creating requests to retrieve all `IntV1PayrollFixedCompensationPlans` entities.
   */
  getAll(): GetAllRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T> {
    return new GetAllRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntV1PayrollFixedCompensationPlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntV1PayrollFixedCompensationPlans`.
   */
  create(
    entity: IntV1PayrollFixedCompensationPlans<T>
  ): CreateRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T> {
    return new CreateRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntV1PayrollFixedCompensationPlans` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntV1PayrollFixedCompensationPlans.dataAreaId}.
   * @param planId Key property. See {@link IntV1PayrollFixedCompensationPlans.planId}.
   * @param validFrom Key property. See {@link IntV1PayrollFixedCompensationPlans.validFrom}.
   * @param personnelNumber Key property. See {@link IntV1PayrollFixedCompensationPlans.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `IntV1PayrollFixedCompensationPlans` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T> {
    return new GetByKeyRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T>(
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
   * Returns a request builder for updating an entity of type `IntV1PayrollFixedCompensationPlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntV1PayrollFixedCompensationPlans`.
   */
  update(
    entity: IntV1PayrollFixedCompensationPlans<T>
  ): UpdateRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T> {
    return new UpdateRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntV1PayrollFixedCompensationPlans`.
   * @param dataAreaId Key property. See {@link IntV1PayrollFixedCompensationPlans.dataAreaId}.
   * @param planId Key property. See {@link IntV1PayrollFixedCompensationPlans.planId}.
   * @param validFrom Key property. See {@link IntV1PayrollFixedCompensationPlans.validFrom}.
   * @param personnelNumber Key property. See {@link IntV1PayrollFixedCompensationPlans.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `IntV1PayrollFixedCompensationPlans`.
   */
  delete(
    dataAreaId: string,
    planId: string,
    validFrom: Moment,
    personnelNumber: string
  ): DeleteRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntV1PayrollFixedCompensationPlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntV1PayrollFixedCompensationPlans` by taking the entity as a parameter.
   */
  delete(
    entity: IntV1PayrollFixedCompensationPlans<T>
  ): DeleteRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    planId?: string,
    validFrom?: Moment,
    personnelNumber?: string
  ): DeleteRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T> {
    return new DeleteRequestBuilder<IntV1PayrollFixedCompensationPlans<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntV1PayrollFixedCompensationPlans
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
