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
import { WorkerGarnishmentRules } from './WorkerGarnishmentRules';
import { PayrollGarnishmentTaxLevyType } from './PayrollGarnishmentTaxLevyType';

/**
 * Request builder class for operations supported on the {@link WorkerGarnishmentRules} entity.
 */
export class WorkerGarnishmentRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerGarnishmentRules<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerGarnishmentRules` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerGarnishmentRules` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerGarnishmentRules<T>, T> {
    return new GetAllRequestBuilder<WorkerGarnishmentRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerGarnishmentRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerGarnishmentRules`.
   */
  create(
    entity: WorkerGarnishmentRules<T>
  ): CreateRequestBuilder<WorkerGarnishmentRules<T>, T> {
    return new CreateRequestBuilder<WorkerGarnishmentRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerGarnishmentRules` entity based on its keys.
   * @param garnishmentTaxLevyType Key property. See {@link WorkerGarnishmentRules.garnishmentTaxLevyType}.
   * @param personnelNumber Key property. See {@link WorkerGarnishmentRules.personnelNumber}.
   * @param stateId Key property. See {@link WorkerGarnishmentRules.stateId}.
   * @returns A request builder for creating requests to retrieve one `WorkerGarnishmentRules` entity based on its keys.
   */
  getByKey(
    garnishmentTaxLevyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PayrollGarnishmentTaxLevyType'
    >,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerGarnishmentRules<T>, T> {
    return new GetByKeyRequestBuilder<WorkerGarnishmentRules<T>, T>(
      this.entityApi,
      {
        GarnishmentTaxLevyType: garnishmentTaxLevyType,
        PersonnelNumber: personnelNumber,
        StateId: stateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerGarnishmentRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerGarnishmentRules`.
   */
  update(
    entity: WorkerGarnishmentRules<T>
  ): UpdateRequestBuilder<WorkerGarnishmentRules<T>, T> {
    return new UpdateRequestBuilder<WorkerGarnishmentRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerGarnishmentRules`.
   * @param garnishmentTaxLevyType Key property. See {@link WorkerGarnishmentRules.garnishmentTaxLevyType}.
   * @param personnelNumber Key property. See {@link WorkerGarnishmentRules.personnelNumber}.
   * @param stateId Key property. See {@link WorkerGarnishmentRules.stateId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerGarnishmentRules`.
   */
  delete(
    garnishmentTaxLevyType: PayrollGarnishmentTaxLevyType,
    personnelNumber: string,
    stateId: string
  ): DeleteRequestBuilder<WorkerGarnishmentRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerGarnishmentRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerGarnishmentRules` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerGarnishmentRules<T>
  ): DeleteRequestBuilder<WorkerGarnishmentRules<T>, T>;
  delete(
    garnishmentTaxLevyTypeOrEntity: any,
    personnelNumber?: string,
    stateId?: string
  ): DeleteRequestBuilder<WorkerGarnishmentRules<T>, T> {
    return new DeleteRequestBuilder<WorkerGarnishmentRules<T>, T>(
      this.entityApi,
      garnishmentTaxLevyTypeOrEntity instanceof WorkerGarnishmentRules
        ? garnishmentTaxLevyTypeOrEntity
        : {
            GarnishmentTaxLevyType: garnishmentTaxLevyTypeOrEntity!,
            PersonnelNumber: personnelNumber!,
            StateId: stateId!
          }
    );
  }
}
