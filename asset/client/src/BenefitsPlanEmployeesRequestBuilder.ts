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
import { BenefitsPlanEmployees } from './BenefitsPlanEmployees';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanEmployees} entity.
 */
export class BenefitsPlanEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanEmployees<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanEmployees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanEmployees`.
   */
  create(
    entity: BenefitsPlanEmployees<T>
  ): CreateRequestBuilder<BenefitsPlanEmployees<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanEmployees` entity based on its keys.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployees.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployees.planPeriodId}.
   * @param planId Key property. See {@link BenefitsPlanEmployees.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanEmployees.coverageOptionId}.
   * @param validFrom Key property. See {@link BenefitsPlanEmployees.validFrom}.
   * @param validTo Key property. See {@link BenefitsPlanEmployees.validTo}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanEmployees` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    planPeriodId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    coverageOptionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsPlanEmployees<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanEmployees<T>, T>(
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
   * Returns a request builder for updating an entity of type `BenefitsPlanEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanEmployees`.
   */
  update(
    entity: BenefitsPlanEmployees<T>
  ): UpdateRequestBuilder<BenefitsPlanEmployees<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployees`.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployees.personnelNumber}.
   * @param planPeriodId Key property. See {@link BenefitsPlanEmployees.planPeriodId}.
   * @param planId Key property. See {@link BenefitsPlanEmployees.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanEmployees.coverageOptionId}.
   * @param validFrom Key property. See {@link BenefitsPlanEmployees.validFrom}.
   * @param validTo Key property. See {@link BenefitsPlanEmployees.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployees`.
   */
  delete(
    personnelNumber: string,
    planPeriodId: string,
    planId: string,
    coverageOptionId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanEmployees<T>
  ): DeleteRequestBuilder<BenefitsPlanEmployees<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    planPeriodId?: string,
    planId?: string,
    coverageOptionId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployees<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanEmployees<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof BenefitsPlanEmployees
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
