/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { BenefitsCreditPeriodEmployees } from './BenefitsCreditPeriodEmployees';

/**
 * Request builder class for operations supported on the {@link BenefitsCreditPeriodEmployees} entity.
 */
export class BenefitsCreditPeriodEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsCreditPeriodEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsCreditPeriodEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsCreditPeriodEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsCreditPeriodEmployees<T>, T> {
    return new GetAllRequestBuilder<BenefitsCreditPeriodEmployees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsCreditPeriodEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsCreditPeriodEmployees`.
   */
  create(
    entity: BenefitsCreditPeriodEmployees<T>
  ): CreateRequestBuilder<BenefitsCreditPeriodEmployees<T>, T> {
    return new CreateRequestBuilder<BenefitsCreditPeriodEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsCreditPeriodEmployees` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsCreditPeriodEmployees.dataAreaId}.
   * @param personnelNumber Key property. See {@link BenefitsCreditPeriodEmployees.personnelNumber}.
   * @param periodFkPlanPeriodId Key property. See {@link BenefitsCreditPeriodEmployees.periodFkPlanPeriodId}.
   * @param legalEntityId Key property. See {@link BenefitsCreditPeriodEmployees.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsCreditPeriodEmployees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    periodFkPlanPeriodId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsCreditPeriodEmployees<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsCreditPeriodEmployees<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        Period_FK_PlanPeriodId: periodFkPlanPeriodId,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsCreditPeriodEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsCreditPeriodEmployees`.
   */
  update(
    entity: BenefitsCreditPeriodEmployees<T>
  ): UpdateRequestBuilder<BenefitsCreditPeriodEmployees<T>, T> {
    return new UpdateRequestBuilder<BenefitsCreditPeriodEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsCreditPeriodEmployees`.
   * @param dataAreaId Key property. See {@link BenefitsCreditPeriodEmployees.dataAreaId}.
   * @param personnelNumber Key property. See {@link BenefitsCreditPeriodEmployees.personnelNumber}.
   * @param periodFkPlanPeriodId Key property. See {@link BenefitsCreditPeriodEmployees.periodFkPlanPeriodId}.
   * @param legalEntityId Key property. See {@link BenefitsCreditPeriodEmployees.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCreditPeriodEmployees`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    periodFkPlanPeriodId: string,
    legalEntityId: string
  ): DeleteRequestBuilder<BenefitsCreditPeriodEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsCreditPeriodEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsCreditPeriodEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsCreditPeriodEmployees<T>
  ): DeleteRequestBuilder<BenefitsCreditPeriodEmployees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    periodFkPlanPeriodId?: string,
    legalEntityId?: string
  ): DeleteRequestBuilder<BenefitsCreditPeriodEmployees<T>, T> {
    return new DeleteRequestBuilder<BenefitsCreditPeriodEmployees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsCreditPeriodEmployees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            Period_FK_PlanPeriodId: periodFkPlanPeriodId!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
