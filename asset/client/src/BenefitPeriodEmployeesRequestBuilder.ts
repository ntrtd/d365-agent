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
import { BenefitPeriodEmployees } from './BenefitPeriodEmployees';

/**
 * Request builder class for operations supported on the {@link BenefitPeriodEmployees} entity.
 */
export class BenefitPeriodEmployeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitPeriodEmployees<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitPeriodEmployees` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitPeriodEmployees` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitPeriodEmployees<T>, T> {
    return new GetAllRequestBuilder<BenefitPeriodEmployees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitPeriodEmployees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitPeriodEmployees`.
   */
  create(
    entity: BenefitPeriodEmployees<T>
  ): CreateRequestBuilder<BenefitPeriodEmployees<T>, T> {
    return new CreateRequestBuilder<BenefitPeriodEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitPeriodEmployees` entity based on its keys.
   * @param periodId Key property. See {@link BenefitPeriodEmployees.periodId}.
   * @param personnelNumber Key property. See {@link BenefitPeriodEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link BenefitPeriodEmployees.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `BenefitPeriodEmployees` entity based on its keys.
   */
  getByKey(
    periodId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitPeriodEmployees<T>, T> {
    return new GetByKeyRequestBuilder<BenefitPeriodEmployees<T>, T>(
      this.entityApi,
      {
        PeriodId: periodId,
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitPeriodEmployees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitPeriodEmployees`.
   */
  update(
    entity: BenefitPeriodEmployees<T>
  ): UpdateRequestBuilder<BenefitPeriodEmployees<T>, T> {
    return new UpdateRequestBuilder<BenefitPeriodEmployees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitPeriodEmployees`.
   * @param periodId Key property. See {@link BenefitPeriodEmployees.periodId}.
   * @param personnelNumber Key property. See {@link BenefitPeriodEmployees.personnelNumber}.
   * @param legalEntityId Key property. See {@link BenefitPeriodEmployees.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPeriodEmployees`.
   */
  delete(
    periodId: string,
    personnelNumber: string,
    legalEntityId: string
  ): DeleteRequestBuilder<BenefitPeriodEmployees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitPeriodEmployees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPeriodEmployees` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitPeriodEmployees<T>
  ): DeleteRequestBuilder<BenefitPeriodEmployees<T>, T>;
  delete(
    periodIdOrEntity: any,
    personnelNumber?: string,
    legalEntityId?: string
  ): DeleteRequestBuilder<BenefitPeriodEmployees<T>, T> {
    return new DeleteRequestBuilder<BenefitPeriodEmployees<T>, T>(
      this.entityApi,
      periodIdOrEntity instanceof BenefitPeriodEmployees
        ? periodIdOrEntity
        : {
            PeriodId: periodIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
