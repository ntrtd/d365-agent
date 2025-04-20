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
import { WorkerResidentTaxRegions } from './WorkerResidentTaxRegions';

/**
 * Request builder class for operations supported on the {@link WorkerResidentTaxRegions} entity.
 */
export class WorkerResidentTaxRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerResidentTaxRegions<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerResidentTaxRegions` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerResidentTaxRegions` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerResidentTaxRegions<T>, T> {
    return new GetAllRequestBuilder<WorkerResidentTaxRegions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerResidentTaxRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerResidentTaxRegions`.
   */
  create(
    entity: WorkerResidentTaxRegions<T>
  ): CreateRequestBuilder<WorkerResidentTaxRegions<T>, T> {
    return new CreateRequestBuilder<WorkerResidentTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerResidentTaxRegions` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerResidentTaxRegions.personnelNumber}.
   * @param validFrom Key property. See {@link WorkerResidentTaxRegions.validFrom}.
   * @returns A request builder for creating requests to retrieve one `WorkerResidentTaxRegions` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerResidentTaxRegions<T>, T> {
    return new GetByKeyRequestBuilder<WorkerResidentTaxRegions<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerResidentTaxRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerResidentTaxRegions`.
   */
  update(
    entity: WorkerResidentTaxRegions<T>
  ): UpdateRequestBuilder<WorkerResidentTaxRegions<T>, T> {
    return new UpdateRequestBuilder<WorkerResidentTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerResidentTaxRegions`.
   * @param personnelNumber Key property. See {@link WorkerResidentTaxRegions.personnelNumber}.
   * @param validFrom Key property. See {@link WorkerResidentTaxRegions.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerResidentTaxRegions`.
   */
  delete(
    personnelNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<WorkerResidentTaxRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerResidentTaxRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerResidentTaxRegions` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerResidentTaxRegions<T>
  ): DeleteRequestBuilder<WorkerResidentTaxRegions<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    validFrom?: Moment
  ): DeleteRequestBuilder<WorkerResidentTaxRegions<T>, T> {
    return new DeleteRequestBuilder<WorkerResidentTaxRegions<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerResidentTaxRegions
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            ValidFrom: validFrom!
          }
    );
  }
}
