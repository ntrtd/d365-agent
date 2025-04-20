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
import { WorkerTaxCodeParameters } from './WorkerTaxCodeParameters';

/**
 * Request builder class for operations supported on the {@link WorkerTaxCodeParameters} entity.
 */
export class WorkerTaxCodeParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTaxCodeParameters<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTaxCodeParameters` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTaxCodeParameters` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTaxCodeParameters<T>, T> {
    return new GetAllRequestBuilder<WorkerTaxCodeParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerTaxCodeParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTaxCodeParameters`.
   */
  create(
    entity: WorkerTaxCodeParameters<T>
  ): CreateRequestBuilder<WorkerTaxCodeParameters<T>, T> {
    return new CreateRequestBuilder<WorkerTaxCodeParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerTaxCodeParameters` entity based on its keys.
   * @param workerId Key property. See {@link WorkerTaxCodeParameters.workerId}.
   * @param taxCodeParameterName Key property. See {@link WorkerTaxCodeParameters.taxCodeParameterName}.
   * @param taxCodeId Key property. See {@link WorkerTaxCodeParameters.taxCodeId}.
   * @param countryRegionId Key property. See {@link WorkerTaxCodeParameters.countryRegionId}.
   * @param validFrom Key property. See {@link WorkerTaxCodeParameters.validFrom}.
   * @param validTo Key property. See {@link WorkerTaxCodeParameters.validTo}.
   * @param companyInfoId Key property. See {@link WorkerTaxCodeParameters.companyInfoId}.
   * @returns A request builder for creating requests to retrieve one `WorkerTaxCodeParameters` entity based on its keys.
   */
  getByKey(
    workerId: DeserializedType<T, 'Edm.String'>,
    taxCodeParameterName: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    companyInfoId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerTaxCodeParameters<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTaxCodeParameters<T>, T>(
      this.entityApi,
      {
        WorkerId: workerId,
        TaxCodeParameterName: taxCodeParameterName,
        TaxCodeId: taxCodeId,
        CountryRegionId: countryRegionId,
        ValidFrom: validFrom,
        ValidTo: validTo,
        CompanyInfoId: companyInfoId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTaxCodeParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTaxCodeParameters`.
   */
  update(
    entity: WorkerTaxCodeParameters<T>
  ): UpdateRequestBuilder<WorkerTaxCodeParameters<T>, T> {
    return new UpdateRequestBuilder<WorkerTaxCodeParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTaxCodeParameters`.
   * @param workerId Key property. See {@link WorkerTaxCodeParameters.workerId}.
   * @param taxCodeParameterName Key property. See {@link WorkerTaxCodeParameters.taxCodeParameterName}.
   * @param taxCodeId Key property. See {@link WorkerTaxCodeParameters.taxCodeId}.
   * @param countryRegionId Key property. See {@link WorkerTaxCodeParameters.countryRegionId}.
   * @param validFrom Key property. See {@link WorkerTaxCodeParameters.validFrom}.
   * @param validTo Key property. See {@link WorkerTaxCodeParameters.validTo}.
   * @param companyInfoId Key property. See {@link WorkerTaxCodeParameters.companyInfoId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaxCodeParameters`.
   */
  delete(
    workerId: string,
    taxCodeParameterName: string,
    taxCodeId: string,
    countryRegionId: string,
    validFrom: Moment,
    validTo: Moment,
    companyInfoId: string
  ): DeleteRequestBuilder<WorkerTaxCodeParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTaxCodeParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaxCodeParameters` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerTaxCodeParameters<T>
  ): DeleteRequestBuilder<WorkerTaxCodeParameters<T>, T>;
  delete(
    workerIdOrEntity: any,
    taxCodeParameterName?: string,
    taxCodeId?: string,
    countryRegionId?: string,
    validFrom?: Moment,
    validTo?: Moment,
    companyInfoId?: string
  ): DeleteRequestBuilder<WorkerTaxCodeParameters<T>, T> {
    return new DeleteRequestBuilder<WorkerTaxCodeParameters<T>, T>(
      this.entityApi,
      workerIdOrEntity instanceof WorkerTaxCodeParameters
        ? workerIdOrEntity
        : {
            WorkerId: workerIdOrEntity!,
            TaxCodeParameterName: taxCodeParameterName!,
            TaxCodeId: taxCodeId!,
            CountryRegionId: countryRegionId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!,
            CompanyInfoId: companyInfoId!
          }
    );
  }
}
