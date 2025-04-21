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
import { BenefitsPlanEmployeesV2 } from './BenefitsPlanEmployeesV2';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanEmployeesV2} entity.
 */
export class BenefitsPlanEmployeesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanEmployeesV2<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanEmployeesV2` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanEmployeesV2` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanEmployeesV2<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanEmployeesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanEmployeesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanEmployeesV2`.
   */
  create(
    entity: BenefitsPlanEmployeesV2<T>
  ): CreateRequestBuilder<BenefitsPlanEmployeesV2<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanEmployeesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanEmployeesV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeesV2.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployeesV2.planPeriodId}.
   * @param planId Key property. See {@link BenefitsPlanEmployeesV2.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanEmployeesV2.coverageOptionId}.
   * @param validFrom Key property. See {@link BenefitsPlanEmployeesV2.validFrom}.
   * @param validTo Key property. See {@link BenefitsPlanEmployeesV2.validTo}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanEmployeesV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    planPeriodId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    coverageOptionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsPlanEmployeesV2<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanEmployeesV2<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        PlanPeriodId: planPeriodId,
        PlanId: planId,
        CoverageOptionId: coverageOptionId,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanEmployeesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanEmployeesV2`.
   */
  update(
    entity: BenefitsPlanEmployeesV2<T>
  ): UpdateRequestBuilder<BenefitsPlanEmployeesV2<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanEmployeesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeesV2`.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeesV2.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployeesV2.planPeriodId}.
   * @param planId Key property. See {@link BenefitsPlanEmployeesV2.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanEmployeesV2.coverageOptionId}.
   * @param validFrom Key property. See {@link BenefitsPlanEmployeesV2.validFrom}.
   * @param validTo Key property. See {@link BenefitsPlanEmployeesV2.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeesV2`.
   */
  delete(
    personnelNumber: string,
    planPeriodId: string,
    planId: string,
    coverageOptionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeesV2` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanEmployeesV2<T>
  ): DeleteRequestBuilder<BenefitsPlanEmployeesV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    planPeriodId?: string,
    planId?: string,
    coverageOptionId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeesV2<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanEmployeesV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof BenefitsPlanEmployeesV2
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            PlanPeriodId: planPeriodId!,
            PlanId: planId!,
            CoverageOptionId: coverageOptionId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
