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
import { WorkerTaxRegions } from './WorkerTaxRegions';

/**
 * Request builder class for operations supported on the {@link WorkerTaxRegions} entity.
 */
export class WorkerTaxRegionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTaxRegions<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTaxRegions` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTaxRegions` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTaxRegions<T>, T> {
    return new GetAllRequestBuilder<WorkerTaxRegions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerTaxRegions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTaxRegions`.
   */
  create(
    entity: WorkerTaxRegions<T>
  ): CreateRequestBuilder<WorkerTaxRegions<T>, T> {
    return new CreateRequestBuilder<WorkerTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerTaxRegions` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerTaxRegions.personnelNumber}.
   * @param locationId Key property. See {@link WorkerTaxRegions.locationId}.
   * @returns A request builder for creating requests to retrieve one `WorkerTaxRegions` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerTaxRegions<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTaxRegions<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LocationId: locationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTaxRegions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTaxRegions`.
   */
  update(
    entity: WorkerTaxRegions<T>
  ): UpdateRequestBuilder<WorkerTaxRegions<T>, T> {
    return new UpdateRequestBuilder<WorkerTaxRegions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTaxRegions`.
   * @param personnelNumber Key property. See {@link WorkerTaxRegions.personnelNumber}.
   * @param locationId Key property. See {@link WorkerTaxRegions.locationId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaxRegions`.
   */
  delete(
    personnelNumber: string,
    locationId: string
  ): DeleteRequestBuilder<WorkerTaxRegions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTaxRegions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTaxRegions` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerTaxRegions<T>
  ): DeleteRequestBuilder<WorkerTaxRegions<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    locationId?: string
  ): DeleteRequestBuilder<WorkerTaxRegions<T>, T> {
    return new DeleteRequestBuilder<WorkerTaxRegions<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerTaxRegions
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LocationId: locationId!
          }
    );
  }
}
