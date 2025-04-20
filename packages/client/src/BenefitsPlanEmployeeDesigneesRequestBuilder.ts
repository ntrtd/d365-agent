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
import { BenefitsPlanEmployeeDesignees } from './BenefitsPlanEmployeeDesignees';

/**
 * Request builder class for operations supported on the {@link BenefitsPlanEmployeeDesignees} entity.
 */
export class BenefitsPlanEmployeeDesigneesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsPlanEmployeeDesignees<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsPlanEmployeeDesignees` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsPlanEmployeeDesignees` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T> {
    return new GetAllRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsPlanEmployeeDesignees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsPlanEmployeeDesignees`.
   */
  create(
    entity: BenefitsPlanEmployeeDesignees<T>
  ): CreateRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T> {
    return new CreateRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsPlanEmployeeDesignees` entity based on its keys.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeeDesignees.personnelNumber}.
   * @param periodId Key property. See {@link BenefitsPlanEmployeeDesignees.periodId}.
   * @param legalEntityId Key property. See {@link BenefitsPlanEmployeeDesignees.legalEntityId}.
   * @param planId Key property. See {@link BenefitsPlanEmployeeDesignees.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanEmployeeDesignees.coverageOptionId}.
   * @param designeePartyNumber Key property. See {@link BenefitsPlanEmployeeDesignees.designeePartyNumber}.
   * @param validFrom Key property. See {@link BenefitsPlanEmployeeDesignees.validFrom}.
   * @returns A request builder for creating requests to retrieve one `BenefitsPlanEmployeeDesignees` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    planId: DeserializedType<T, 'Edm.String'>,
    coverageOptionId: DeserializedType<T, 'Edm.String'>,
    designeePartyNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        PeriodId: periodId,
        LegalEntityId: legalEntityId,
        PlanId: planId,
        CoverageOptionId: coverageOptionId,
        DesigneePartyNumber: designeePartyNumber,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsPlanEmployeeDesignees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsPlanEmployeeDesignees`.
   */
  update(
    entity: BenefitsPlanEmployeeDesignees<T>
  ): UpdateRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T> {
    return new UpdateRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeeDesignees`.
   * @param personnelNumber Key property. See {@link BenefitsPlanEmployeeDesignees.personnelNumber}.
   * @param periodId Key property. See {@link BenefitsPlanEmployeeDesignees.periodId}.
   * @param legalEntityId Key property. See {@link BenefitsPlanEmployeeDesignees.legalEntityId}.
   * @param planId Key property. See {@link BenefitsPlanEmployeeDesignees.planId}.
   * @param coverageOptionId Key property. See {@link BenefitsPlanEmployeeDesignees.coverageOptionId}.
   * @param designeePartyNumber Key property. See {@link BenefitsPlanEmployeeDesignees.designeePartyNumber}.
   * @param validFrom Key property. See {@link BenefitsPlanEmployeeDesignees.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeeDesignees`.
   */
  delete(
    personnelNumber: string,
    periodId: string,
    legalEntityId: string,
    planId: string,
    coverageOptionId: string,
    designeePartyNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsPlanEmployeeDesignees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsPlanEmployeeDesignees` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsPlanEmployeeDesignees<T>
  ): DeleteRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    periodId?: string,
    legalEntityId?: string,
    planId?: string,
    coverageOptionId?: string,
    designeePartyNumber?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T> {
    return new DeleteRequestBuilder<BenefitsPlanEmployeeDesignees<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof BenefitsPlanEmployeeDesignees
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            PeriodId: periodId!,
            LegalEntityId: legalEntityId!,
            PlanId: planId!,
            CoverageOptionId: coverageOptionId!,
            DesigneePartyNumber: designeePartyNumber!,
            ValidFrom: validFrom!
          }
    );
  }
}
