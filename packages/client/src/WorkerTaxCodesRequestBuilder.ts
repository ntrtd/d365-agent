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
import { WorkerTaxCodes } from './WorkerTaxCodes';

/**
 * Request builder class for operations supported on the {@link WorkerTaxCodes} entity.
 */
export class WorkerTaxCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTaxCodes<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTaxCodes` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTaxCodes` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTaxCodes<T>, T> {
    return new GetAllRequestBuilder<WorkerTaxCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerTaxCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTaxCodes`.
   */
  create(
    entity: WorkerTaxCodes<T>
  ): CreateRequestBuilder<WorkerTaxCodes<T>, T> {
    return new CreateRequestBuilder<WorkerTaxCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerTaxCodes` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerTaxCodes.personnelNumber}.
   * @param taxCodeId Key property. See {@link WorkerTaxCodes.taxCodeId}.
   * @param countryRegionId Key property. See {@link WorkerTaxCodes.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `WorkerTaxCodes` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerTaxCodes<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTaxCodes<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      TaxCodeId: taxCodeId,
      CountryRegionId: countryRegionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTaxCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTaxCodes`.
   */
  update(
    entity: WorkerTaxCodes<T>
  ): UpdateRequestBuilder<WorkerTaxCodes<T>, T> {
    return new UpdateRequestBuilder<WorkerTaxCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTaxCodes`.
   * @param personnelNumber Key property. See {@link WorkerTaxCodes.personnelNumber}.
   * @param taxCodeId Key property. See {@link WorkerTaxCodes.taxCodeId}.
   * @param countryRegionId Key property. See {@link WorkerTaxCodes.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaxCodes`.
   */
  delete(
    personnelNumber: string,
    taxCodeId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<WorkerTaxCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTaxCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaxCodes` by taking the entity as a parameter.
   */
  delete(entity: WorkerTaxCodes<T>): DeleteRequestBuilder<WorkerTaxCodes<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    taxCodeId?: string,
    countryRegionId?: string
  ): DeleteRequestBuilder<WorkerTaxCodes<T>, T> {
    return new DeleteRequestBuilder<WorkerTaxCodes<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerTaxCodes
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            TaxCodeId: taxCodeId!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
