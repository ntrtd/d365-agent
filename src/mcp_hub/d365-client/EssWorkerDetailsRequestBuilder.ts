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
import { EssWorkerDetails } from './EssWorkerDetails';

/**
 * Request builder class for operations supported on the {@link EssWorkerDetails} entity.
 */
export class EssWorkerDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssWorkerDetails<T>, T> {
  /**
   * Returns a request builder for querying all `EssWorkerDetails` entities.
   * @returns A request builder for creating requests to retrieve all `EssWorkerDetails` entities.
   */
  getAll(): GetAllRequestBuilder<EssWorkerDetails<T>, T> {
    return new GetAllRequestBuilder<EssWorkerDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EssWorkerDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssWorkerDetails`.
   */
  create(
    entity: EssWorkerDetails<T>
  ): CreateRequestBuilder<EssWorkerDetails<T>, T> {
    return new CreateRequestBuilder<EssWorkerDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssWorkerDetails` entity based on its keys.
   * @param personnelNumber Key property. See {@link EssWorkerDetails.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `EssWorkerDetails` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssWorkerDetails<T>, T> {
    return new GetByKeyRequestBuilder<EssWorkerDetails<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EssWorkerDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssWorkerDetails`.
   */
  update(
    entity: EssWorkerDetails<T>
  ): UpdateRequestBuilder<EssWorkerDetails<T>, T> {
    return new UpdateRequestBuilder<EssWorkerDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssWorkerDetails`.
   * @param personnelNumber Key property. See {@link EssWorkerDetails.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkerDetails`.
   */
  delete(personnelNumber: string): DeleteRequestBuilder<EssWorkerDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssWorkerDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkerDetails` by taking the entity as a parameter.
   */
  delete(
    entity: EssWorkerDetails<T>
  ): DeleteRequestBuilder<EssWorkerDetails<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<EssWorkerDetails<T>, T> {
    return new DeleteRequestBuilder<EssWorkerDetails<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EssWorkerDetails
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
