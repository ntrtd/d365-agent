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
import { EssWorkerManagerRelations } from './EssWorkerManagerRelations';

/**
 * Request builder class for operations supported on the {@link EssWorkerManagerRelations} entity.
 */
export class EssWorkerManagerRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssWorkerManagerRelations<T>, T> {
  /**
   * Returns a request builder for querying all `EssWorkerManagerRelations` entities.
   * @returns A request builder for creating requests to retrieve all `EssWorkerManagerRelations` entities.
   */
  getAll(): GetAllRequestBuilder<EssWorkerManagerRelations<T>, T> {
    return new GetAllRequestBuilder<EssWorkerManagerRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssWorkerManagerRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssWorkerManagerRelations`.
   */
  create(
    entity: EssWorkerManagerRelations<T>
  ): CreateRequestBuilder<EssWorkerManagerRelations<T>, T> {
    return new CreateRequestBuilder<EssWorkerManagerRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssWorkerManagerRelations` entity based on its keys.
   * @param personnelNumber Key property. See {@link EssWorkerManagerRelations.personnelNumber}.
   * @param managerPersonnelNumber Key property. See {@link EssWorkerManagerRelations.managerPersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `EssWorkerManagerRelations` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    managerPersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EssWorkerManagerRelations<T>, T> {
    return new GetByKeyRequestBuilder<EssWorkerManagerRelations<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        ManagerPersonnelNumber: managerPersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssWorkerManagerRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssWorkerManagerRelations`.
   */
  update(
    entity: EssWorkerManagerRelations<T>
  ): UpdateRequestBuilder<EssWorkerManagerRelations<T>, T> {
    return new UpdateRequestBuilder<EssWorkerManagerRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssWorkerManagerRelations`.
   * @param personnelNumber Key property. See {@link EssWorkerManagerRelations.personnelNumber}.
   * @param managerPersonnelNumber Key property. See {@link EssWorkerManagerRelations.managerPersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkerManagerRelations`.
   */
  delete(
    personnelNumber: string,
    managerPersonnelNumber: string
  ): DeleteRequestBuilder<EssWorkerManagerRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssWorkerManagerRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssWorkerManagerRelations` by taking the entity as a parameter.
   */
  delete(
    entity: EssWorkerManagerRelations<T>
  ): DeleteRequestBuilder<EssWorkerManagerRelations<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    managerPersonnelNumber?: string
  ): DeleteRequestBuilder<EssWorkerManagerRelations<T>, T> {
    return new DeleteRequestBuilder<EssWorkerManagerRelations<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EssWorkerManagerRelations
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            ManagerPersonnelNumber: managerPersonnelNumber!
          }
    );
  }
}
