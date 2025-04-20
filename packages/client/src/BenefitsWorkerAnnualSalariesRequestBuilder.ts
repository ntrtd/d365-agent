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
import { BenefitsWorkerAnnualSalaries } from './BenefitsWorkerAnnualSalaries';

/**
 * Request builder class for operations supported on the {@link BenefitsWorkerAnnualSalaries} entity.
 */
export class BenefitsWorkerAnnualSalariesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsWorkerAnnualSalaries<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsWorkerAnnualSalaries` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsWorkerAnnualSalaries` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T> {
    return new GetAllRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsWorkerAnnualSalaries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsWorkerAnnualSalaries`.
   */
  create(
    entity: BenefitsWorkerAnnualSalaries<T>
  ): CreateRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T> {
    return new CreateRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsWorkerAnnualSalaries` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsWorkerAnnualSalaries.dataAreaId}.
   * @param personnelNumber Key property. See {@link BenefitsWorkerAnnualSalaries.personnelNumber}.
   * @param validFrom Key property. See {@link BenefitsWorkerAnnualSalaries.validFrom}.
   * @returns A request builder for creating requests to retrieve one `BenefitsWorkerAnnualSalaries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsWorkerAnnualSalaries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsWorkerAnnualSalaries`.
   */
  update(
    entity: BenefitsWorkerAnnualSalaries<T>
  ): UpdateRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T> {
    return new UpdateRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsWorkerAnnualSalaries`.
   * @param dataAreaId Key property. See {@link BenefitsWorkerAnnualSalaries.dataAreaId}.
   * @param personnelNumber Key property. See {@link BenefitsWorkerAnnualSalaries.personnelNumber}.
   * @param validFrom Key property. See {@link BenefitsWorkerAnnualSalaries.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsWorkerAnnualSalaries`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsWorkerAnnualSalaries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsWorkerAnnualSalaries` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsWorkerAnnualSalaries<T>
  ): DeleteRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T> {
    return new DeleteRequestBuilder<BenefitsWorkerAnnualSalaries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsWorkerAnnualSalaries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            ValidFrom: validFrom!
          }
    );
  }
}
