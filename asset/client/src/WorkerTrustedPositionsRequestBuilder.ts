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
import { WorkerTrustedPositions } from './WorkerTrustedPositions';

/**
 * Request builder class for operations supported on the {@link WorkerTrustedPositions} entity.
 */
export class WorkerTrustedPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerTrustedPositions<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerTrustedPositions` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerTrustedPositions` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerTrustedPositions<T>, T> {
    return new GetAllRequestBuilder<WorkerTrustedPositions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerTrustedPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerTrustedPositions`.
   */
  create(
    entity: WorkerTrustedPositions<T>
  ): CreateRequestBuilder<WorkerTrustedPositions<T>, T> {
    return new CreateRequestBuilder<WorkerTrustedPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerTrustedPositions` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerTrustedPositions.personnelNumber}.
   * @param position Key property. See {@link WorkerTrustedPositions.position}.
   * @param employer Key property. See {@link WorkerTrustedPositions.employer}.
   * @returns A request builder for creating requests to retrieve one `WorkerTrustedPositions` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<T, 'Edm.String'>,
    employer: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerTrustedPositions<T>, T> {
    return new GetByKeyRequestBuilder<WorkerTrustedPositions<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        Position: position,
        Employer: employer
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerTrustedPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerTrustedPositions`.
   */
  update(
    entity: WorkerTrustedPositions<T>
  ): UpdateRequestBuilder<WorkerTrustedPositions<T>, T> {
    return new UpdateRequestBuilder<WorkerTrustedPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerTrustedPositions`.
   * @param personnelNumber Key property. See {@link WorkerTrustedPositions.personnelNumber}.
   * @param position Key property. See {@link WorkerTrustedPositions.position}.
   * @param employer Key property. See {@link WorkerTrustedPositions.employer}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTrustedPositions`.
   */
  delete(
    personnelNumber: string,
    position: string,
    employer: string
  ): DeleteRequestBuilder<WorkerTrustedPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerTrustedPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerTrustedPositions` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerTrustedPositions<T>
  ): DeleteRequestBuilder<WorkerTrustedPositions<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    position?: string,
    employer?: string
  ): DeleteRequestBuilder<WorkerTrustedPositions<T>, T> {
    return new DeleteRequestBuilder<WorkerTrustedPositions<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerTrustedPositions
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            Position: position!,
            Employer: employer!
          }
    );
  }
}
